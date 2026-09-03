/**
 * Build one story bundle per solution page.
 *
 *   node scripts/build-stories.mjs
 *
 * Output: dist/story-<page>.js, one per page, each carrying only that page's
 * markup and only the utilities that markup references.
 *
 * These are deliberately SEPARATE from dist/player.js. player.js is already
 * ~78 KB gz and loads on pages that do not have stories on them; folding 33
 * animated sections into it would punish every page for content on six.
 *
 * Embed:
 *   <transformance-story data-story="vero-loop" data-h="560"></transformance-story>
 *   <script async src="https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@<tag>/dist/story-vero.js"></script>
 *
 * Budget: 24 KB gz per page. Build fails past it, so a story that quietly
 * doubles in size gets caught here rather than on a Lighthouse run.
 */

import { build } from 'esbuild';
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'fs';
import { gzipSync } from 'zlib';
import path from 'path';

const ROOT = process.cwd();
const DATA = path.join(ROOT, 'src', 'stories', 'data');
const TMP = path.join(ROOT, 'src', 'stories', '.entries');
const OUT_DIR = path.join(ROOT, 'dist');
const BUDGET_GZ_KB = 24;

if (!existsSync(DATA)) {
  console.error('✗ No exported stories. Run platform-mockups/scripts/export-stories.mjs first.');
  process.exit(1);
}

const pages = readdirSync(DATA).filter((f) => f.endsWith('.js') && !f.endsWith('.de.js'))
  .map((f) => f.replace(/\.js$/, ''));
mkdirSync(TMP, { recursive: true });
mkdirSync(OUT_DIR, { recursive: true });

let failed = false;

/* One file PER LOCALE, not one file carrying both. A German page should not
   download the English markup to throw it away - that is 20 KB gz of nothing,
   on pages we are trying to make faster. */
async function emit(page, locale, dataFile, exportName) {
  const entry = path.join(TMP, `${page}.${locale}.js`);
  writeFileSync(entry, [
    `import { CSS } from '../data/${page}.js';`,
    `import { ${exportName} as STORIES } from '../data/${dataFile}';`,
    "import { mountStories } from '../story.js';",
    `mountStories({ css: CSS, stories: STORIES, locale: '${locale}' });`,
  ].join(String.fromCharCode(10)));

  const name = locale === 'en' ? `story-${page}.js` : `story-${page}.${locale}.js`;
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
  const gz = gzipSync(raw, { level: 9 });
  const gzKb = gz.length / 1024;
  const over = gzKb > BUDGET_GZ_KB;
  if (over) failed = true;
  console.log(
    `${over ? '✗' : '✓'} dist/${name}`.padEnd(34),
    `${(raw.length / 1024).toFixed(0)} KB → ${gzKb.toFixed(1)} KB gz`,
  );
}

for (const page of pages) {
  await emit(page, 'en', `${page}.js`, 'STORIES');

  const deFile = path.join(DATA, `${page}.de.js`);
  const hasDE = existsSync(deFile) && readFileSync(deFile, 'utf8').includes('`');
  if (hasDE) await emit(page, 'de', `${page}.de.js`, 'STORIES_DE');
  else console.log(`  dist/story-${page}.de.js`.padEnd(34), 'skipped - no complete German stories');
}

if (failed) {
  console.error(`✗ At least one page exceeded the ${BUDGET_GZ_KB} KB gz budget.`);
  process.exit(1);
}
