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

/* A THIRD, bilingual bundle: dist/story-home-v2.all.js

   Webflow applies page scripts per PAGE, not per locale, so the home page and
   /de are the same page and get the same script list. That leaves no way to
   hand the German bundle to /de and the English one to /en without either
   (a) extending the site-level loader's parts table, which touches a script
   shared with ten live pages, or (b) loading both, which is the arrival-order
   race that hid every story on 3 of 5 German pages on 2026-09-05 - both
   bundles define the same element and only the first to run wins.

   So home ships ONE bundle carrying both languages and picking at runtime.
   The per-page bundles deliberately do NOT do this ("a German page should not
   download the English markup to throw it away"), and that reasoning still
   holds for them - they are selected by the loader, which knows the locale
   before it fetches. Home is not, so it pays roughly 18 KB gz to keep the
   site-level loader untouched on the day we go live. That is a trade made
   knowingly, and it can be undone later by adding homev2 to the loader's
   parts table, at which point this file simply stops being applied. */
async function emitBilingual() {
  const en = {}, de = {}, cssFor = {};
  for (const [publicId, srcId, p] of CARDS) {
    const enUrl = pathToFileURL(path.join(DATA, `${p}.js`)).href;
    const deUrl = pathToFileURL(path.join(DATA, `${p}.de.js`)).href;
    const enMod = await import(enUrl);
    en[publicId] = enMod.CARDS[srcId];
    cssFor[publicId] = enMod.CSS;
    if (!existsSync(path.join(DATA, `${p}.de.js`))) return { skipped: `no ${p}.de.js` };
    const deMap = (await import(deUrl)).CARDS_DE;
    if (!deMap || !deMap[srcId]) return { skipped: `no German ${srcId}` };
    de[publicId] = deMap[srcId];
  }
  const entry = path.join(TMP, 'home-v2-all.js');
  writeFileSync(entry, [
    `const EN = ${JSON.stringify(en)};`,
    `const DE = ${JSON.stringify(de)};`,
    `const cssFor = ${JSON.stringify(cssFor)};`,
    "import { mountStories } from '../story.js';",
    "const p = location.pathname;",
    "const isDE = p === '/de' || p.indexOf('/de/') === 0;",
    "mountStories({ stories: isDE ? DE : EN, cssFor, locale: isDE ? 'de' : 'en' });",
  ].join(String.fromCharCode(10)));

  const outfile = path.join(OUT_DIR, 'story-home-v2.all.js');
  await build({ entryPoints: [entry], outfile, bundle: true, minify: true,
                format: 'iife', target: ['es2020'], legalComments: 'none' });
  const raw = readFileSync(outfile);
  const gzKb = gzipSync(raw, { level: 9 }).length / 1024;
  return { name: 'story-home-v2.all.js', rawKb: raw.length / 1024, gzKb,
           over: gzKb > BUDGET_GZ_KB * 2, cards: Object.keys(en).length * 2 };
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
/* Bilingual bundle NOT emitted by default. It works, but it costs ~24 KB gz
   over shipping the two per-locale bundles (59.2 vs 35.2), and on a page we
   just spent real effort bringing to blocking-time parity that is a step
   backwards for every visitor. Home instead ships both bundles and picks one
   with a small page-level script (`storyhomev2pick`), which keeps 35 KB per
   locale AND leaves the site-level loader untouched. Set BILINGUAL=1 to build
   it if the picker ever has to go. */
const bi = process.env.BILINGUAL ? await emitBilingual() : { skipped: 'not requested (set BILINGUAL=1)' };
if (bi.skipped) console.log('  story-home-v2.all'.padEnd(34), 'skipped -', bi.skipped);
else {
  if (bi.over) failed = true;
  console.log(`${bi.over ? '✗' : '✓'} dist/${bi.name}`.padEnd(34), `${bi.cards} cards`.padEnd(10), `${bi.rawKb.toFixed(0)} KB → ${bi.gzKb.toFixed(1)} KB gz`);
}

if (failed) { console.error(`✗ Over the ${BUDGET_GZ_KB} KB gz budget.`); process.exit(1); }
