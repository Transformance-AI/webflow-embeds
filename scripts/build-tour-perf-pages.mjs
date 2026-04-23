/**
 * Generates one Lighthouse-friendly host page per tour.
 *
 *   node scripts/build-tour-perf-pages.mjs
 *
 * Output: dist/perf/<id>.html
 *
 * Each page mimics a typical Webflow marketing page (hero, body copy, footer)
 * with the tour embedded mid-page. No external CSS/JS beyond the player itself.
 * Run Lighthouse against dist/perf/<id>.html to verify the embed is light.
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import path from 'path';

const TOURS = [
  { id: 'cash-app', title: 'Cash application',         h2: 'See cash application in 30 seconds',     sub: 'From remittance email to posted journal entry, then scheduled to run on its own.' },
  { id: 'collections', title: 'Collections',           h2: 'Collections that runs itself overnight', sub: 'AI calls in the customer’s language, logs PTPs, escalates only what needs you.' },
  { id: 'deductions', title: 'Deductions',             h2: 'Deductions resolved with evidence',      sub: 'Vero builds the evidence chain, recommends a verdict, and posts when you approve.' },
  { id: 'predictions', title: 'Cash flow forecasting', h2: 'Forecast cash, model scenarios live',    sub: 'AR and AP rolled into one forecast. Pull a lever, see the impact.' },
  { id: 'vero-chat', title: 'Vero chat',               h2: 'Ask Vero anything about your AR',        sub: 'Natural language to SQL, with the full chain of reasoning visible.' },
  { id: 'vero-chat-v2', title: 'Vero agent',           h2: 'Vero runs your AR overnight',            sub: 'Cash app, collections, deductions — every morning a recap, ready for review.' },
];

// `hero.html` is written by hand (simulates the homepage layout).
// Just include it in the index page listing below.

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, 'dist/perf');
if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

const template = ({ id, title, h2, sub }) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title} — perf test</title>
<meta name="description" content="Lighthouse test page for the ${title} interactive tour.">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: Geist, system-ui, -apple-system, sans-serif; color: #0a0a0a; background: #fff; line-height: 1.5; }
  header { padding: 24px 40px; border-bottom: 1px solid rgba(0,0,0,0.08); display: flex; align-items: center; justify-content: space-between; }
  .wm { font-weight: 600; letter-spacing: -0.02em; }
  nav a { color: rgba(0,0,0,0.6); text-decoration: none; margin-left: 24px; font-size: 14px; }
  main { max-width: 1180px; margin: 0 auto; padding: 60px 40px; }
  h1 { font: 500 56px/1.05 Geist, sans-serif; letter-spacing: -0.03em; margin-bottom: 20px; }
  h1 .g { background: linear-gradient(90deg, #ff8308, #ff5043 55%, #392bd5); -webkit-background-clip: text; background-clip: text; color: transparent; }
  .lede { font-size: 18px; color: rgba(0,0,0,0.6); max-width: 640px; margin-bottom: 40px; }
  section.tour { margin: 60px 0; }
  h2 { font: 500 28px/1.15 Geist, sans-serif; letter-spacing: -0.015em; margin-bottom: 12px; }
  .sub { color: rgba(0,0,0,0.6); margin-bottom: 28px; max-width: 520px; }
  footer { margin-top: 120px; padding: 40px; border-top: 1px solid rgba(0,0,0,0.08); color: rgba(0,0,0,0.5); font-size: 13px; text-align: center; }
</style>
</head>
<body>
<header>
  <div class="wm">▲ Transformance</div>
  <nav><a href="#">Product</a><a href="#">Customers</a><a href="#">Pricing</a></nav>
</header>
<main>
  <h1>From invoice to cash,<br>on <span class="g">autopilot</span>.</h1>
  <p class="lede">Typical Webflow hero copy above the embed, so Lighthouse measures a realistic LCP and CLS profile rather than a bare frame.</p>

  <section class="tour">
    <h2>${h2}</h2>
    <p class="sub">${sub}</p>
    <transformance-tour data-tour="${id}"></transformance-tour>
  </section>

  <p style="color: rgba(0,0,0,0.6); max-width: 640px;">
    More body copy below the fold to simulate a real marketing page. The tour embed is roughly halfway down the page.
  </p>
</main>
<footer>© 2026 Transformance · Perf test page (${id})</footer>

<script async src="../player.js"></script>
</body>
</html>
`;

const indexPage = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Tour perf test pages</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: Geist, system-ui, sans-serif; color: #0a0a0a; background: #fff; padding: 60px 40px; max-width: 720px; margin: 0 auto; line-height: 1.5; }
  h1 { font-size: 32px; letter-spacing: -0.02em; font-weight: 500; margin-bottom: 8px; }
  .lede { color: rgba(0,0,0,0.6); margin-bottom: 32px; }
  ul { list-style: none; }
  li { padding: 14px 0; border-bottom: 1px solid rgba(0,0,0,0.08); display: flex; justify-content: space-between; align-items: center; }
  li a { color: #0a0a0a; font-weight: 500; text-decoration: none; }
  li a:hover { text-decoration: underline; }
  .hint { color: rgba(0,0,0,0.5); font-size: 13px; }
  code { background: #f4f4f4; padding: 1px 6px; border-radius: 4px; font-size: 12px; }
</style>
</head>
<body>
<h1>Lighthouse test pages</h1>
<p class="lede">One marketing-style host page per tour. Run Lighthouse on each to verify the embed does not regress LCP / CLS / TBT.</p>
<ul>
  <li><a href="hero.html">Homepage hero animation</a><span class="hint">transformance-hero</span></li>
${TOURS.map((t) => `  <li><a href="${t.id}.html">${t.title}</a><span class="hint">${t.id}</span></li>`).join('\n')}
</ul>
<p style="margin-top:32px;color:rgba(0,0,0,0.5);font-size:13px;">
Each page loads <code>../player.js</code> async. Bundle is ~41 KB gz, no external fonts, no remote images.
</p>
</body>
</html>
`;

for (const t of TOURS) {
  const file = path.join(OUT_DIR, `${t.id}.html`);
  writeFileSync(file, template(t));
  console.log(`✓ ${file}`);
}
writeFileSync(path.join(OUT_DIR, 'index.html'), indexPage);
console.log(`✓ ${path.join(OUT_DIR, 'index.html')}`);

console.log(`\nGenerated ${TOURS.length + 1} perf pages in /dist/perf/`);
