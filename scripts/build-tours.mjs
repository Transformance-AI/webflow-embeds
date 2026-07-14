/**
 * Build the tour player bundle for production.
 *
 *   node scripts/build-tours.mjs
 *
 * Output: dist/player.js (single file, IIFE, no externals, ~41 KB gz).
 *
 * To embed on a Webflow page (or any HTML page):
 *
 *   <transformance-tour data-tour="cash-app"></transformance-tour>
 *   <script async src="https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@<tag>/dist/player.js"></script>
 *
 * Bundle budget: 42 KB gz. Build fails if exceeded so we catch regressions.
 */

import { build } from 'esbuild';
import { readFileSync, mkdirSync, writeFileSync, existsSync } from 'fs';
import { gzipSync } from 'zlib';
import path from 'path';

const ROOT = process.cwd();
const ENTRY = path.join(ROOT, 'src/index.js');
const OUT_DIR = path.join(ROOT, 'dist');
const OUT_FILE = path.join(OUT_DIR, 'player.js');
// Raised from 60 → 80 to accommodate the full DE locale (hero/banners/tours all
// carry EN + DE copy, incl. per-scene in-scene labels). German runs longer than
// English; the full DE layer adds ~20 KB gz over the 58 KB EN-only baseline
// (→ ~78 KB). Website team is aware. Trim DE strings if you want to pull back
// toward the original 42 KB target.
const BUDGET_GZ_KB = 80;

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

await build({
  entryPoints: [ENTRY],
  outfile: OUT_FILE,
  bundle: true,
  minify: true,
  format: 'iife',
  target: ['es2020'],
  legalComments: 'none',
});

const raw = readFileSync(OUT_FILE);
const gz = gzipSync(raw, { level: 9 });
const rawKb = (raw.length / 1024).toFixed(1);
const gzKb = (gz.length / 1024).toFixed(1);

console.log(`✓ dist/player.js  ${rawKb} KB  →  ${gzKb} KB gzipped`);

const manifest = {
  version: 'v2',
  generatedAt: new Date().toISOString(),
  bundleBytes: raw.length,
  bundleGzBytes: gz.length,
  tours: ['cash-app', 'collections', 'deductions', 'predictions', 'vero-chat', 'vero-chat-v2'],
  banners: ['cash-app', 'collections', 'deductions', 'cash-forecast', 'vero', 'dso-calc', 'cf-template', 'demo'],
};
writeFileSync(path.join(OUT_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2));

if (gz.length > BUDGET_GZ_KB * 1024) {
  console.error(`✗ Bundle exceeded budget (${gzKb} KB gz > ${BUDGET_GZ_KB} KB).`);
  process.exit(1);
}
