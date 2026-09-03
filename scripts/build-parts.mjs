/**
 * Build one bundle per subsystem, so a page can load only what it uses.
 *
 *   node scripts/build-parts.mjs
 *
 * SAFE ROLLOUT (Paul, 2026-09-03): this does NOT replace dist/player.js and does
 * NOT change any page. player.js stays published and every existing page keeps
 * referencing it. These bundles are additive; we point only the pages we are
 * actively touching at them, and migrate the rest once the gain is measured on a
 * real page.
 *
 * Why this exists: a solution page loads player.js (79.2 KB gz / 356 KB raw =
 * tours + hero + banners + popup) and uses only the popup. See
 * HANDOVER_STORIES_AND_PERF.md for the measurements.
 *
 * SRI: the integrity hash is computed here, straight from the bytes just
 * written. Never round-trip a hash through a shell variable - that is how you
 * ship an integrity value that does not match the file and get the script
 * silently blocked by the browser.
 */

import { build } from 'esbuild';
import { createHash } from 'crypto';
import { gzipSync } from 'zlib';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import path from 'path';

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, 'dist');

/* Each part registers only its own custom elements. */
const PARTS = {
  tours: "import './src/tours/index.js';",
  hero: "import './src/hero/hero.js';",
  banners: "import './src/banners/index.js';",
  popup: "import './src/popup/index.js';",
};

/* A part that grows past its budget is a regression worth catching at build
   time rather than in a Lighthouse run three weeks later. */
const BUDGET_GZ_KB = { tours: 62, hero: 14, banners: 9, popup: 7 };

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

const rows = [];
let failed = false;

for (const [name, contents] of Object.entries(PARTS)) {
  const outfile = path.join(OUT_DIR, `${name}.js`);
  await build({
    stdin: { contents, resolveDir: ROOT, loader: 'js' },
    outfile,
    bundle: true,
    minify: true,
    format: 'iife',
    target: ['es2020'],
    legalComments: 'none',
    logLevel: 'warning',
  });

  const buf = readFileSync(outfile);
  const gz = gzipSync(buf, { level: 9 });
  const sri = 'sha256-' + createHash('sha256').update(buf).digest('base64');
  const gzKb = gz.length / 1024;
  const over = gzKb > BUDGET_GZ_KB[name];
  if (over) failed = true;

  rows.push({ name, file: `dist/${name}.js`, rawBytes: buf.length,
              gzBytes: gz.length, sri, over });

  console.log(
    (over ? '✗ ' : '✓ ') + `dist/${name}.js`.padEnd(20),
    (buf.length / 1024).toFixed(1).padStart(7) + ' KB',
    '→', gzKb.toFixed(1).padStart(6) + ' KB gz',
    over ? `  OVER BUDGET (${BUDGET_GZ_KB[name]} KB)` : '',
  );
}

/* The manifest is what the Webflow side reads to build its script tags: the
   filename and the integrity hash that must accompany it. */
writeFileSync(
  path.join(OUT_DIR, 'parts.manifest.json'),
  JSON.stringify({
    generatedAt: new Date().toISOString(),
    note: 'Additive split of player.js. player.js is unchanged and still published.',
    parts: rows.map(({ name, file, rawBytes, gzBytes, sri }) =>
      ({ name, file, rawBytes, gzBytes, sri })),
  }, null, 2),
);

const totalGz = rows.reduce((n, r) => n + r.gzBytes, 0) / 1024;
console.log('');
console.log(`split total ${totalGz.toFixed(1)} KB gz across ${rows.length} files`);
console.log('a solution page needs: popup only →',
  (rows.find((r) => r.name === 'popup').gzBytes / 1024).toFixed(1) + ' KB gz');
console.log('wrote dist/parts.manifest.json (filenames + SRI hashes)');

if (failed) {
  console.error('\n✗ a part exceeded its budget.');
  process.exit(1);
}
