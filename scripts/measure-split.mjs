/**
 * What does each subsystem in player.js actually cost?
 *
 *   node scripts/measure-split.mjs
 *
 * player.js is one bundle carrying tours + hero + banners + popup. Every page
 * that loads it pays for all four. This measures what a per-subsystem split
 * would cost instead, so the decision is made on numbers rather than instinct.
 */

import { build } from 'esbuild';
import { gzipSync } from 'zlib';
import { readFileSync, mkdirSync } from 'fs';
import path from 'path';

const ROOT = process.cwd();
const TMP = path.join(ROOT, '.measure');
mkdirSync(TMP, { recursive: true });

const PARTS = {
  tours: "import './src/tours/index.js';",
  hero: "import './src/hero/hero.js';",
  banners: "import './src/banners/index.js';",
  popup: "import './src/popup/index.js';",
  all: "import './src/index.js';",
};

const rows = [];
for (const [name, contents] of Object.entries(PARTS)) {
  const outfile = path.join(TMP, `_${name}.js`);
  await build({
    stdin: { contents, resolveDir: ROOT, loader: 'js' },
    outfile,
    bundle: true,
    minify: true,
    format: 'iife',
    target: ['es2020'],
    legalComments: 'none',
    logLevel: 'error',
  });
  const buf = readFileSync(outfile);
  rows.push({
    name,
    raw: buf.length,
    gz: gzipSync(buf, { level: 9 }).length,
  });
}

const kb = (n) => (n / 1024).toFixed(1);
console.log('subsystem      raw       gz');
for (const r of rows) {
  console.log(
    r.name.padEnd(12),
    (kb(r.raw) + 'kb').padStart(8),
    (kb(r.gz) + 'kb').padStart(8),
  );
}

const all = rows.find((r) => r.name === 'all');
const popup = rows.find((r) => r.name === 'popup');
console.log('');
console.log('A solution page today loads   :', kb(all.gz) + 'kb gz (everything)');
console.log('If it loaded only the popup   :', kb(popup.gz) + 'kb gz');
console.log('Wasted on an unused payload   :', kb(all.gz - popup.gz) + 'kb gz');
