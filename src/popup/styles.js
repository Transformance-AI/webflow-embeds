/**
 * Self-contained CSS for <transformance-popup>.
 * Encapsulated by the custom element via Shadow DOM in popup.js — no risk
 * of leaking into / colliding with host page CSS.
 *
 * Brand vars match the banner module so popup and banner share visual
 * language across the site.
 */
export const STYLES = `
:host{
  --tf-red:#ff5043;
  --tf-grad:linear-gradient(90deg,#FF8308 0%,#FF5043 55%,#392BD5 100%);
  --tf-ink:#0a0a0a;
  --tf-ink-soft:#4a4a4a;
  --tf-ink-faint:#888;
  --tf-line-soft:#f0f0f0;
  --tf-white:#fff;
  --tf-font:"Geist",-apple-system,system-ui,sans-serif;
  position:fixed;
  bottom:24px;
  right:24px;
  z-index:9990;
  pointer-events:none;
}
:host([data-state="visible"]){
  pointer-events:auto;
}
.card{
  width:360px;
  max-width:calc(100vw - 32px);
  background:var(--tf-white);
  border-radius:14px;
  box-shadow:0 2px 4px rgba(0,0,0,0.05),0 24px 56px rgba(0,0,0,0.12);
  padding:22px 24px 20px;
  position:relative;
  border-top:3px solid var(--tf-red);
  font-family:var(--tf-font);
  color:var(--tf-ink);
  font-feature-settings:"ss01","ss03";
  -webkit-font-smoothing:antialiased;
  box-sizing:border-box;
  opacity:0;
  transform:translateX(20px);
  transition:opacity 320ms cubic-bezier(0.2,0.8,0.2,1),transform 320ms cubic-bezier(0.2,0.8,0.2,1);
}
:host([data-state="visible"]) .card{
  opacity:1;
  transform:translateX(0);
}
.card *,.card *::before,.card *::after{box-sizing:border-box;}
.x{
  position:absolute;
  top:12px;
  right:12px;
  width:28px;
  height:28px;
  background:transparent;
  border:0;
  border-radius:6px;
  cursor:pointer;
  color:var(--tf-ink-faint);
  font-size:18px;
  line-height:1;
  display:flex;
  align-items:center;
  justify-content:center;
  transition:background 120ms,color 120ms;
  font-family:inherit;
  padding:0;
}
.x:hover{
  background:var(--tf-line-soft);
  color:var(--tf-ink);
}
.author{
  display:flex;
  align-items:center;
  gap:10px;
  margin-bottom:14px;
  padding-right:28px;
}
.avatar{
  width:40px;
  height:40px;
  border-radius:50%;
  flex-shrink:0;
  background:linear-gradient(135deg,#d4d4d4 0%,#a8a8a8 100%);
  color:#fff;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:14px;
  font-weight:600;
  letter-spacing:-0.01em;
  overflow:hidden;
}
.avatar img{
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
}
.author-meta{
  display:flex;
  flex-direction:column;
  line-height:1.25;
}
.author-name{
  font-size:13px;
  font-weight:600;
  color:var(--tf-ink);
}
.author-role{
  font-size:12px;
  color:var(--tf-ink-faint);
}
.headline{
  font-size:17px;
  font-weight:600;
  line-height:1.3;
  letter-spacing:-0.011em;
  margin:0 0 8px;
  color:var(--tf-ink);
  padding-right:28px;
}
.body{
  font-size:14px;
  line-height:1.45;
  color:var(--tf-ink-soft);
  margin:0 0 16px;
}
.cta-primary{
  display:block;
  width:max-content;
  min-width:62%;
  margin-left:auto;
  margin-right:auto;
  background:linear-gradient(90deg,#FF8308 0%,#FF5043 55%,#392BD5 100%);
  color:#fff;
  text-decoration:none;
  text-align:center;
  font-size:14px;
  font-weight:500;
  padding:11px 22px;
  border-radius:999px;
  margin-bottom:10px;
  border:0;
  cursor:pointer;
  transition:filter 120ms;
  font-family:inherit;
}
.cta-primary:hover{filter:brightness(1.08) saturate(1.05);}
.cta-secondary{
  display:block;
  text-align:center;
  font-size:13px;
  color:var(--tf-ink-soft);
  text-decoration:none;
  padding:4px 0;
  transition:color 120ms;
}
.cta-secondary:hover{color:var(--tf-ink);}
.cta-secondary[hidden]{display:none;}

/* Mobile: full-width slide-up bottom-sheet */
@media (max-width:767px){
  :host{
    bottom:16px;
    right:16px;
    left:16px;
  }
  .card{
    width:auto;
    max-width:none;
    transform:translateY(20px);
  }
  :host([data-state="visible"]) .card{
    transform:translateY(0);
  }
}
`;
