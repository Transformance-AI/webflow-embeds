/**
 * Self-contained CSS for <transformance-banner>.
 * Mirrors the existing tf-banner pattern lifted from the live cash-forecast
 * template blog (verified 2026-05-01) so visual parity is guaranteed.
 *
 * Encapsulated by the custom element via Shadow DOM in banner.js — no risk
 * of leaking into / colliding with host page CSS.
 */
export const STYLES = `
:host{
  --tf-canvas:#f6f4f1;
  --tf-dark:#000;
  --tf-ink:#000;
  --tf-ink60:rgba(0,0,0,0.6);
  --tf-ink10:rgba(0,0,0,0.1);
  --tf-white:#fff;
  --tf-grad:linear-gradient(90deg,#FF8308 0%,#FF5043 55%,#392BD5 100%);
  --tf-font:"Geist",-apple-system,system-ui,sans-serif;
  --tf-mono:"Geist Mono",ui-monospace,"SF Mono",Menlo,monospace;
  display:block;
  margin:32px auto;
  max-width:1100px;
}
.tfb{
  display:flex;flex-direction:column;
  background:var(--tf-canvas);
  border:1px solid var(--tf-ink10);
  padding:32px;
  border-radius:6px;
  font-family:var(--tf-font);
  color:var(--tf-ink);
  box-sizing:border-box;
  box-shadow:0 1px 2px rgba(0,0,0,0.04),0 8px 24px rgba(0,0,0,0.06);
}
.tfb *,.tfb *::before,.tfb *::after{box-sizing:border-box}
.tfb__header{margin-bottom:24px}
.tfb__eyebrow{
  font-family:var(--tf-mono);
  font-size:11px;font-weight:500;
  letter-spacing:0.08em;text-transform:uppercase;
  color:var(--tf-ink60);
  margin-bottom:10px;
}
.tfb__headline{
  font-size:clamp(22px,2.2vw,28px);
  font-weight:500;
  letter-spacing:-0.015em;
  line-height:1.15;
  margin:0;
  max-width:800px;
}
.tfb__grad{
  background:var(--tf-grad);
  -webkit-background-clip:text;background-clip:text;
  -webkit-text-fill-color:transparent;
  color:transparent;
  display:inline;
}
.tfb__body{
  display:grid;
  /* Image column caps at 320px so the product mockup doesn't dominate at
     blog content widths (~600-800px). Text/claims/CTA get the rest. */
  grid-template-columns:minmax(0,320px) minmax(0,1fr);
  gap:32px;
  align-items:center;
}
/* Single-column layout when no image is provided */
.tfb__body.tfb__body--no-image{
  grid-template-columns:1fr;
}
.tfb__shot{width:100%;border-radius:6px;overflow:hidden}
.tfb__shot img{width:100%;height:auto;max-height:260px;display:block;object-fit:contain}
.tfb__right{display:flex;flex-direction:column;gap:24px;min-width:0}
.tfb__claims{
  list-style:none;padding:0;margin:0;
  display:flex;flex-direction:column;gap:12px;
}
.tfb__claims li{
  display:flex;align-items:center;gap:12px;
  font-size:14px;font-weight:500;
  letter-spacing:-0.005em;line-height:1.35;
  color:var(--tf-ink);
}
.tfb__icon{
  width:18px;height:18px;flex-shrink:0;
  stroke:currentColor;opacity:0.7;
  fill:none;stroke-width:2;
  stroke-linecap:round;stroke-linejoin:round;
}
.tfb__cta{
  display:inline-flex;align-items:center;gap:8px;
  padding:10px 18px;border-radius:6px;
  background:#000;color:#fff;
  font-family:var(--tf-font);
  font-size:13px;font-weight:500;
  letter-spacing:-0.005em;
  text-decoration:none;border:1px solid transparent;
  line-height:1;width:fit-content;
  transition:opacity 0.15s ease;
}
.tfb__cta:hover{opacity:0.85}
.tfb__cta-arrow{display:inline-block}
@media (max-width:760px){
  .tfb{padding:22px}
  .tfb__body{grid-template-columns:1fr;gap:22px}
  .tfb__header{margin-bottom:18px}
  .tfb__headline{font-size:20px}
  .tfb__claims li{font-size:13.5px}
}
`;
