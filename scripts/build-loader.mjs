/**
 * Build the site-level loader (dist/loader.js).
 *
 *   node scripts/build-loader.mjs --tag stories-2      (publish mode)
 *   node scripts/build-loader.mjs --local              (local test mode)
 *
 * Replaces player.js as the one script applied at site level. Bakes in the
 * SRI hash for every part it might inject, computed from the LOCAL dist/
 * bytes at build time — never from a remote fetch, never round-tripped
 * through a shell variable (the rule this repo already follows for every
 * other script; see HANDOVER_STORIES_AND_PERF.md §6 for why: jsDelivr once
 * answered 200 with an empty body while warming, and the hash of zero bytes
 * looks exactly like a real one).
 *
 * --tag must be an ALREADY-PUSHED, ALREADY-VERIFIED git tag (the CDN bytes
 * must have been fetched back and compared against the committed bytes —
 * see the "cdn2" verification step in this session's history). This script
 * does not verify the CDN itself; it only computes hashes from what is on
 * disk right now and trusts that disk state is what --tag points at.
 *
 * --local points every part at a root-relative path (e.g. "/popup.js")
 * instead of a CDN URL, for scripts/verify-loader.mjs to serve straight out
 * of dist/ with no network dependency and no need for anything to be
 * pushed. THIS OUTPUT MUST NEVER BE COMMITTED OR PUBLISHED — it is a local
 * proof-before-you-ship tool for the loader's own logic, nothing else.
 * Publishing always uses --tag.
 */

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs';
import { createHash } from 'crypto';
import path from 'path';

const ROOT = process.cwd();
const DIST = path.join(ROOT, 'dist');

const LOCAL = process.argv.includes('--local');
const tagArg = process.argv.indexOf('--tag');

if (!LOCAL && (tagArg === -1 || !process.argv[tagArg + 1])) {
  console.error('Usage: node scripts/build-loader.mjs --tag <pushed-and-verified-git-tag>');
  console.error('   or: node scripts/build-loader.mjs --local   (test mode, never publish this output)');
  console.error('The tag must already be pushed AND its CDN bytes verified against dist/.');
  process.exit(1);
}
const TAG = LOCAL ? null : process.argv[tagArg + 1];
const BASE = LOCAL ? '/' : `https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@${TAG}/dist/`;

function hashOf(file) {
  const p = path.join(DIST, file);
  if (!existsSync(p)) return null;
  const buf = readFileSync(p);
  return 'sha256-' + createHash('sha256').update(buf).digest('base64');
}

function part(name, file) {
  const integrity = hashOf(file);
  if (!integrity) { console.error(`✗ missing dist/${file} — build it first`); process.exit(1); }
  return { name, src: BASE + file, integrity };
}

/* Fixed parts, always present if the earlier build steps ran. */
const PARTS = {
  popup:   part('popup', 'popup.js'),
  tours:   part('tours', 'tours.js'),
  hero:    part('hero', 'hero.js'),
  banners: part('banners', 'banners.js'),
};

/* Story bundles: whatever story-*.js files actually exist in dist/ right
   now, discovered rather than hand-listed, so a new solution page's story
   bundle is picked up the next time this runs without editing this file. */
const STORY_DE_PAGES = [];
for (const f of readdirSync(DIST)) {
  const m = f.match(/^story-([a-z0-9]+)(\.de)?\.js$/);
  if (!m) continue;
  const [, page, de] = m;
  const key = de ? `story-${page}.de` : `story-${page}`;
  PARTS[key] = part(key, f);
  if (de) STORY_DE_PAGES.push(page);
}

/* Replace the WHOLE marker-comment-plus-placeholder sequence, not just the
   token inside it - the token text also appears in loader.js's own doc
   comment (by design, so the comment stays accurate), and a plain string
   .replace() only touches the first occurrence, which used to be the one
   inside the comment. Matching greedily up to the placeholder's own closing
   brace/bracket sidesteps that: nothing else in the file looks like this. */
const src = readFileSync(path.join(ROOT, 'src/loader/loader.js'), 'utf8')
  .replace('/*__LOADER_PARTS_JSON__*/{}', '/*__LOADER_PARTS_JSON__*/' + JSON.stringify(PARTS))
  .replace('/*__LOADER_STORY_DE_JSON__*/[]', '/*__LOADER_STORY_DE_JSON__*/' + JSON.stringify(STORY_DE_PAGES));

if (src.includes('/*__LOADER_PARTS_JSON__*/{}') || src.includes('/*__LOADER_STORY_DE_JSON__*/[]')) {
  console.error('✗ placeholder substitution did not take - aborting rather than shipping a broken loader.');
  process.exit(1);
}

/* Local test builds go to a DIFFERENT file, never dist/loader.js — so a
   --local run can never be the thing that gets committed, tagged, or
   pasted into Webflow by mistake. */
const OUT = LOCAL ? 'loader.local.js' : 'loader.js';
writeFileSync(path.join(DIST, OUT), src);

const rawKb = (Buffer.byteLength(src) / 1024).toFixed(2);
console.log(`✓ dist/${OUT}  ${rawKb} KB (unminified — this is a site-level`);
console.log(`  script, kept readable; it is not on the hot path of any page).`);
console.log(`  base: ${BASE}`);
console.log(`  parts: ${Object.keys(PARTS).join(', ')}`);
console.log(`  DE story pages: ${STORY_DE_PAGES.join(', ') || '(none)'}`);
if (LOCAL) console.log('  ⚠ --local build: never commit, tag, or paste this one into Webflow.');
