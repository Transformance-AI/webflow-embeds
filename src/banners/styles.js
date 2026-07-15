/**
 * Self-contained CSS for <transformance-banner>.
 * Liquid Glass v3 visual pass (2026-06-07):
 *   - cream base (#f6f1ea/#efe6da) matching the site
 *   - subtle radial gradient blobs (orange + blue) like hero surfaces
 *   - glass card surface with backdrop-filter
 *   - ink #0a0a0a, 16px radius, refined shadows
 *   - CTA gets the orange→coral→blue gradient (was flat black)
 *
 * Encapsulated by the custom element via Shadow DOM in banner.js — no risk
 * of leaking into / colliding with host page CSS.
 */
export const STYLES = `
:host{
  --tf-canvas:#f6f1ea;
  --tf-canvas-2:#efe6da;
  --tf-ink:#0a0a0a;
  --tf-ink70:rgba(10,10,10,0.7);
  --tf-ink60:rgba(10,10,10,0.6);
  --tf-ink10:rgba(10,10,10,0.08);
  --tf-white:#fff;
  --tf-coral:#FF5043;
  --tf-orange:#FF8308;
  --tf-blue:#392BD5;
  --tf-grad:linear-gradient(90deg,#FF8308 0%,#FF5043 55%,#392BD5 100%);
  --tf-font:"Geist",-apple-system,system-ui,sans-serif;
  --tf-mono:"Geist Mono",ui-monospace,"SF Mono",Menlo,monospace;
  display:block;
  margin:32px auto;
  max-width:1100px;
}
.tfb{
  position:relative;
  display:flex;flex-direction:column;
  background:
    radial-gradient(ellipse 480px 320px at 8% 10%, rgba(255,131,8,0.10) 0%, transparent 60%),
    radial-gradient(ellipse 520px 360px at 95% 95%, rgba(57,43,213,0.08) 0%, transparent 60%),
    linear-gradient(160deg, var(--tf-canvas) 0%, var(--tf-canvas-2) 100%);
  border:1px solid var(--tf-ink10);
  padding:36px;
  border-radius:16px;
  font-family:var(--tf-font);
  color:var(--tf-ink);
  box-sizing:border-box;
  box-shadow:
    0 1px 2px rgba(10,10,10,0.04),
    0 12px 32px -8px rgba(10,10,10,0.08),
    inset 0 1px 0 rgba(255,255,255,0.5);
  overflow:hidden;
}
.tfb *,.tfb *::before,.tfb *::after{box-sizing:border-box}
.tfb__header{margin-bottom:28px}
.tfb__eyebrow{
  display:inline-block;
  font-family:var(--tf-mono);
  font-size:11px;font-weight:500;
  letter-spacing:0.10em;text-transform:uppercase;
  color:var(--tf-ink70);
  background:rgba(10,10,10,0.04);
  border:1px solid var(--tf-ink10);
  border-radius:999px;
  padding:6px 12px;
  margin-bottom:14px;
}
.tfb__headline{
  font-size:clamp(24px,2.4vw,32px);
  font-weight:600;
  letter-spacing:-0.02em;
  line-height:1.12;
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
.tfb__shot{width:100%;border-radius:12px;overflow:hidden}
.tfb__shot img{width:100%;height:auto;max-height:260px;display:block;object-fit:contain}
.tfb__right{display:flex;flex-direction:column;gap:24px;min-width:0}
.tfb__claims{
  list-style:none;padding:0;margin:0;
  display:flex;flex-direction:column;gap:21px;
}
.tfb__claims li{
  display:flex;align-items:center;gap:14px;
  font-size:17.5px;font-weight:500;
  letter-spacing:-0.005em;line-height:1.4;
  color:var(--tf-ink);
}
.tfb__icon{
  width:22px;height:22px;flex-shrink:0;
  stroke:currentColor;opacity:0.75;
  fill:none;stroke-width:2;
  stroke-linecap:round;stroke-linejoin:round;
}
.tfb__cta{
  display:inline-flex;align-items:center;gap:8px;
  padding:12px 22px;border-radius:999px;
  background:var(--tf-grad);
  background-size:200% 100%;
  background-position:0% 50%;
  color:#fff;
  font-family:var(--tf-font);
  font-size:14px;font-weight:500;
  letter-spacing:-0.005em;
  text-decoration:none;border:0;
  line-height:1;width:fit-content;
  box-shadow:0 6px 16px -4px rgba(255,80,67,0.35),0 1px 2px rgba(10,10,10,0.08);
  transition:background-position 0.3s ease,transform 0.15s ease,box-shadow 0.2s ease;
}
.tfb__cta:hover{background-position:100% 50%;transform:translateY(-1px);box-shadow:0 10px 22px -4px rgba(255,80,67,0.45),0 2px 4px rgba(10,10,10,0.1)}
.tfb__cta-arrow{display:inline-block}
@media (max-width:760px){
  .tfb{padding:22px}
  .tfb__body{grid-template-columns:1fr;gap:22px}
  .tfb__header{margin-bottom:18px}
  .tfb__headline{font-size:20px}
  .tfb__claims li{font-size:15px}
}
`;
