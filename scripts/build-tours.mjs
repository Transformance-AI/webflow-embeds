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
const BUDGET_GZ_KB = 55;

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
  version: 'v1',
  generatedAt: new Date().toISOString(),
  bundleBytes: raw.length,
  bundleGzBytes: gz.length,
  tours: ['cash-app', 'collections', 'deductions', 'predictions', 'vero-chat', 'vero-chat-v2'],
};
writeFileSync(path.join(OUT_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2));

if (gz.length > BUDGET_GZ_KB * 1024) {
  console.error(`✗ Bundle exceeded budget (${gzKb} KB gz > ${BUDGET_GZ_KB} KB).`);
  process.exit(1);
}
