/**
 * Build ONE combined story bundle for the new home page.
 *
 *   node scripts/build-story-home-v2.mjs
 *
 * Output: dist/story-home-v2.js  (and .de.js when German cards exist)
 *
 * Why this exists
 * ---------------
 * Every `story-<page>.js` calls customElements.define('transformance-story')
 * behind a `customElements.get()` guard and keeps its card map in a
 * module-scoped registry. Load two of them in one document and only the FIRST
 * one's cards are reachable - the second bundle's define() is skipped and its
 * data never lands. The solution pages never hit this because each shows cards
 * from its own page only.
 *
 * Home v2 shows six cards drawn from five different pages, so it cannot use the
 * per-page bundles. This script emits a single bundle carrying exactly those
 * six cards and nothing else.
 *
 * CSS is kept PER CARD rather than merged. The five Tailwind sheets are not
 * interchangeable: they share selectors that carry different declarations
 * (the `:root,:host` variable block differs on every page, and a `space-y`
 * utility differs between clearmatch and collections). Concatenating them
 * would let one page's values win inside another page's card, which is exactly
 * the kind of defect that looks like a design mistake rather than a bug. Each
 * shadow root therefore gets the sheet its markup was exported against.
 *
 * This script only ever writes dist/story-home-v2*.js. It does not rebuild the
 * per-page bundles that production is pinned to.
 */

import { build } from 'esbuild';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { gzipSync } from 'zlib';
import path from 'path';
import { pathToFileURL } from 'url';

const ROOT = process.cwd();
const DATA = path.join(ROOT, 'src', 'stories', 'data');
const TMP = path.join(ROOT, 'src', 'stories', '.entries');
const OUT_DIR = path.join(ROOT, 'dist');

/* The six cards on home v2: [public id, source card, source page].
   Order is the order they appear on the page, so this doubles as the spec.

   The PUBLIC ID IS DELIBERATELY PREFIXED `homev2-`, and that prefix is what
   makes this whole approach work. The site-level loader.js reads the text
   before the first hyphen of `data-story` and injects the matching
   `story-<prefix>.js` for EVERY distinct prefix it finds. Left as their
   original ids, these six cards would make the loader inject five bundles
   into one document - and since each bundle defines <transformance-story>
   behind a customElements.get() guard, only the first to execute would work
   and five of the six cards would silently render nothing.

   `homev2` has no entry in the loader's part map, so the loader resolves
   undefined, records "missing part definition" in its skip list, and injects
   nothing at all. This bundle is applied to the page directly instead. The
   loader is site-level and shared with the five live solution pages, so not
   touching it is the point. */
const CARDS = [
  ['homev2-vero-loop', 'vero-loop', 'vero'],             // hero
  ['homev2-vero-tools', 'vero-tools', 'vero'],           // 'Meet Vero' band
                                                         // (the hero carries vero-loop now,
                                                         //  so this band needs its own beat)
  ['homev2-clearmatch-loop', 'clearmatch-loop', 'clearmatch'],
  ['homev2-collections-loop', 'collections-loop', 'collections'],
  ['homev2-claimiq-loop', 'claimiq-loop', 'claimiq'],
  ['homev2-cashpulse-loop', 'cashpulse-loop', 'cashpulse'],
  ['homev2-home-stack', 'home-stack', 'home'],
];

/* Bigger than the 24 KB per-page budget on purpose: this bundle carries five
   stylesheets instead of one. Still one request, still deferred until a card
   is near the viewport, and it replaces what would otherwise be five bundles
   of which four would not work. */
const BUDGET_GZ_KB = 60;

async function emit(locale) {
  const suffix = locale === 'en' ? '' : `.${locale}`;
  const cardsExport = locale === 'en' ? 'CARDS' : 'CARDS_DE';

  /* Read the card markup HERE, at build time, and write it into a generated
     module - do not `import { CARDS }` from the entry and index into it. An
     object literal's properties cannot be tree-shaken, so importing the five
     CARDS maps to pick six cards out of them ships all twenty-eight (measured:
     635 KB raw / 98 KB gz, versus a fraction of that for the six we want).

     CSS always comes from the ENGLISH data file. The `.de.js` files carry only
     CARDS_DE - the stylesheet is locale-independent and is not duplicated. */
  const stories = {}, cssFor = {};
  for (const [publicId, srcId, p] of CARDS) {
    const enUrl = pathToFileURL(path.join(DATA, `${p}.js`)).href;
    const cardUrl = pathToFileURL(path.join(DATA, `${p}${suffix}.js`)).href;
    if (!existsSync(path.join(DATA, `${p}${suffix}.js`))) return { skipped: `no ${p}${suffix}.js` };
    const cardMod = await import(cardUrl);
    const map = cardMod[cardsExport];
    if (!map) return { skipped: `${p}${suffix}.js has no ${cardsExport}` };
    if (!map[srcId]) return { skipped: `card ${srcId} missing from ${p}${suffix}.js` };
    stories[publicId] = map[srcId];
    cssFor[publicId] = (await import(enUrl)).CSS;
  }

  const entry = path.join(TMP, `home-v2${suffix}.js`);
  writeFileSync(entry, [
    `const stories = ${JSON.stringify(stories)};`,
    `const cssFor = ${JSON.stringify(cssFor)};`,
    "import { mountStories } from '../story.js';",
    `mountStories({ stories, cssFor, locale: '${locale}' });`,
  ].join(String.fromCharCode(10)));

  const name = `story-home-v2${suffix}.js`;
  const outfile = path.join(OUT_DIR, name);
  await build({
    entryPoints: [entry],
    outfile,
    bundle: true,
    minify: true,
    format: 'iife',
    target: ['es2020'],
    legalComments: 'none',
  });

  const raw = readFileSync(outfile);
  const gzKb = gzipSync(raw, { level: 9 }).length / 1024;
  return { name, rawKb: raw.length / 1024, gzKb, over: gzKb > BUDGET_GZ_KB, cards: Object.keys(stories).length };
}

mkdirSync(TMP, { recursive: true });
mkdirSync(OUT_DIR, { recursive: true });

let failed = false;
for (const locale of ['en', 'de']) {
  const r = await emit(locale);
  if (r.skipped) { console.log(`  story-home-v2 ${locale}`.padEnd(34), 'skipped -', r.skipped); continue; }
  if (r.over) failed = true;
  console.log(`${r.over ? '✗' : '✓'} dist/${r.name}`.padEnd(34), `${r.cards} cards`.padEnd(10), `${r.rawKb.toFixed(0)} KB → ${r.gzKb.toFixed(1)} KB gz`);
}
if (failed) { console.error(`✗ Over the ${BUDGET_GZ_KB} KB gz budget.`); process.exit(1); }
