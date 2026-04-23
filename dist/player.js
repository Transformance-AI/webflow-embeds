(()=>{var F=`/*
 * Tour player base styles \u2014 injected into Shadow DOM so they cannot
 * collide with Webflow's CSS. Targets system-stack font (inherits the
 * host page's Geist if present).
 */

:host {
  --tour-canvas: #f6f4f1;
  --tour-ink: #0a0a0a;
  --tour-ink-60: rgba(10, 10, 10, 0.6);
  --tour-ink-40: rgba(10, 10, 10, 0.4);
  --tour-ink-10: rgba(10, 10, 10, 0.1);
  --tour-grad: linear-gradient(90deg, #ff8308, #ff5043 55%, #392bd5);
  --tour-radius: 10px;
  --tour-shadow: 0 1px 2px rgba(0, 0, 0, 0.04), 0 8px 28px rgba(0, 0, 0, 0.10);

  display: block;
  font-family: Geist, system-ui, -apple-system, sans-serif;
  color: var(--tour-ink);
  -webkit-font-smoothing: antialiased;
}

* {
  box-sizing: border-box;
}

.frame {
  position: relative;
  width: 100%;
  max-width: 1024px;
  aspect-ratio: 1024 / 640;
  margin: 0 auto;
  background: var(--tour-canvas);
  border-radius: var(--tour-radius);
  overflow: hidden;
  border: 1px solid var(--tour-ink-10);
}

/* Fullscreen mode \u2014 for mobile tap-to-expand. */
.frame.fs {
  position: fixed;
  inset: 0;
  max-width: none;
  width: 100vw;
  height: 100vh;
  aspect-ratio: auto;
  border-radius: 0;
  z-index: 99999;
}

.fs-close {
  position: absolute;
  top: 12px; right: 12px;
  z-index: 100;
  appearance: none;
  border: 0;
  background: rgba(10, 10, 10, 0.85);
  color: #fff;
  width: 36px; height: 36px;
  border-radius: 50%;
  cursor: pointer;
  display: none;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  line-height: 1;
}
.frame.fs .fs-close { display: inline-flex; }

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Cover (pre-start) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.cover {
  position: absolute;
  inset: 0;
  background: rgba(246, 244, 241, 0.55);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  cursor: pointer;
  transition: opacity 280ms ease, backdrop-filter 280ms ease;
}
.cover-pill {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 24px 14px 18px;
  background: var(--tour-grad);
  color: #fff;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.01em;
  box-shadow: 0 6px 22px rgba(255, 80, 67, 0.28), 0 2px 6px rgba(0, 0, 0, 0.08);
  transition: transform 200ms ease, box-shadow 200ms ease;
  position: relative;
}
.cover:hover .cover-pill {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(255, 80, 67, 0.38), 0 3px 8px rgba(0, 0, 0, 0.10);
}
.cover-play {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px; height: 22px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.22);
}
.cover-play svg { width: 9px; height: 9px; fill: #fff; margin-left: 1px; }
.cover-tag {
  position: absolute;
  top: 16px; left: 16px;
  font: 500 10px/1 Geist, system-ui, sans-serif;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--tour-ink-40);
  transition: opacity 200ms ease;
}
.cover-tag.hidden { opacity: 0; pointer-events: none; }

.cover.hidden { opacity: 0; pointer-events: none; }

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Stage \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.stage {
  position: absolute;
  inset: 0;
  padding: 0;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Spotlight \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.spotlight {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 30;
}
.spotlight svg { display: block; width: 100%; height: 100%; }
.spotlight-mask rect.outer { fill: white; }
.spotlight-mask rect.inner { fill: black; }
.spotlight-dim {
  fill: rgba(10, 10, 10, 0.42);
  transition: opacity 200ms ease;
}

/* Gradient halo applied directly to the CTA element.
   The element stays crisply opaque \u2014 gradient only lives OUTSIDE:
     ::before = thin gradient border line, right at the element's edge
     box-shadow = soft glow that bleeds a few pixels out, pulsing ember\u2194indigo
   Because box-shadow is drawn strictly outside the border-box, it can never
   tint the element itself. Scales with the element at any viewport size. */
.tour-hilite {
  position: relative;
  z-index: 31;
  box-shadow:
    0 0 0 1.5px rgba(255, 80, 67, 0.85),
    0 0 22px 2px rgba(255, 80, 67, 0.35);
  animation: tour-hilite-glow 2.4s ease-in-out infinite;
  transition: box-shadow 300ms ease;
}
.tour-hilite::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.5px;
  background: var(--tour-grad);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
          mask-composite: exclude;
  pointer-events: none;
  z-index: 1;
}
@keyframes tour-hilite-glow {
  0%, 100% {
    box-shadow:
      0 0 0 1.5px rgba(255, 80, 67, 0.85),
      0 0 22px 2px rgba(255, 80, 67, 0.35);
  }
  50% {
    box-shadow:
      0 0 0 1.5px rgba(57, 43, 213, 0.85),
      0 0 28px 4px rgba(57, 43, 213, 0.4);
  }
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Tooltip \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tooltip {
  position: absolute;
  z-index: 40;
  background: #fff;
  border-radius: var(--tour-radius);
  border: 1px solid var(--tour-ink-10);
  box-shadow: var(--tour-shadow);
  padding: 14px 16px 12px;
  width: 280px;
  font-size: 13px;
  line-height: 1.45;
  color: var(--tour-ink);
  transition: opacity 200ms ease, transform 200ms ease;
}
.tooltip-tag {
  font: 500 10px/1 Geist, system-ui, sans-serif;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--tour-ink-40);
  margin-bottom: 6px;
}
.tooltip-body { color: var(--tour-ink); margin-bottom: 10px; }
.tooltip-body .grad {
  background: var(--tour-grad);
  -webkit-background-clip: text; background-clip: text;
  color: transparent;
}
.tooltip-controls {
  display: flex; align-items: center; justify-content: space-between;
  font-size: 11px; color: var(--tour-ink-40);
}
.tooltip-controls .step-of { font-variant-numeric: tabular-nums; }
.tooltip-next {
  appearance: none; border: 0; cursor: pointer;
  background: var(--tour-ink); color: #fff;
  border-radius: 8px;
  padding: 6px 12px;
  font: 500 12px/1 Geist, system-ui, sans-serif;
  display: inline-flex; align-items: center; gap: 6px;
  white-space: nowrap;
}
.tooltip-next:hover { opacity: 0.9; }
.tooltip-next svg { width: 10px; height: 10px; }

/* Tail / arrow (we draw a small triangle pointing toward the spotlight) */
.tooltip::after {
  content: "";
  position: absolute;
  width: 12px; height: 12px;
  background: #fff;
  border: 1px solid var(--tour-ink-10);
  transform: rotate(45deg);
}
.tooltip[data-side="right"]::after { left: -7px; top: 24px; border-right: none; border-top: none; }
.tooltip[data-side="left"]::after  { right: -7px; top: 24px; border-left: none; border-bottom: none; }
.tooltip[data-side="top"]::after   { left: 24px; bottom: -7px; border-top: none; border-left: none; }
.tooltip[data-side="bottom"]::after{ left: 24px; top: -7px; border-bottom: none; border-right: none; }

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Toolbar (dots + skip + replay) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.toolbar {
  position: absolute;
  bottom: 14px; left: 50%;
  transform: translateX(-50%);
  display: flex; align-items: center; gap: 14px;
  z-index: 35;
  background: rgba(255, 255, 255, 0.92);
  border-radius: 999px;
  padding: 6px 12px;
  border: 1px solid var(--tour-ink-10);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
}
.dots { display: flex; gap: 6px; }
.dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--tour-ink-10);
  transition: background 200ms ease, transform 200ms ease;
}
.dot.active { background: var(--tour-ink); transform: scale(1.2); }
.dot.done { background: var(--tour-ink-60); }
.toolbar-btn {
  appearance: none; border: 0; background: transparent;
  cursor: pointer;
  font: 500 11px/1 Geist, system-ui, sans-serif;
  color: var(--tour-ink-60);
  padding: 4px 6px;
}
.toolbar-btn:hover { color: var(--tour-ink); }

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Closing card \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.closing {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(246, 244, 241, 0.85), rgba(246, 244, 241, 0.96));
  backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 60;
  text-align: center;
  padding: 40px;
  gap: 18px;
}
.closing h3 {
  font: 500 28px/1.15 Geist, system-ui, sans-serif;
  letter-spacing: -0.02em;
  margin: 0;
  max-width: 600px;
}
.closing h3 .grad {
  background: var(--tour-grad);
  -webkit-background-clip: text; background-clip: text;
  color: transparent;
}
.closing p { color: var(--tour-ink-60); font-size: 14px; max-width: 480px; margin: 0; }
.closing-cta-slot { margin-top: 8px; }
.closing-default-cta {
  appearance: none; border: 0;
  background: var(--tour-ink); color: #fff;
  padding: 10px 20px; border-radius: 8px;
  font: 500 13px/1 Geist, system-ui, sans-serif;
  cursor: pointer; text-decoration: none;
  display: inline-flex; align-items: center; gap: 8px;
}
.closing-replay {
  appearance: none; border: 0; background: transparent;
  color: var(--tour-ink-60); font: 500 12px/1 Geist, system-ui, sans-serif;
  cursor: pointer;
  text-decoration: underline;
  margin-top: 8px;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Mobile \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Phone-sized containers: the desktop frame is too dense to play
   inline, so we collapse to a compact preview tile. Tapping it sends
   the frame fullscreen (.fs class, set by the engine on start). */
@media (max-width: 767px) {
  .frame:not(.fs) {
    max-width: 360px;
    aspect-ratio: 16 / 10;
  }
  /* Hide everything except the cover while collapsed */
  .frame:not(.fs) .stage,
  .frame:not(.fs) .toolbar,
  .frame:not(.fs) .tooltip,
  .frame:not(.fs) .spotlight,
  .frame:not(.fs) .closing { display: none; }

  /* Tooltip becomes a bottom sheet once we're fullscreen */
  .frame.fs .tooltip {
    position: absolute !important;
    left: 12px !important; right: 12px !important; top: auto !important;
    bottom: 70px !important;
    width: auto !important;
  }
  .frame.fs .tooltip::after { display: none; }
  .frame.fs .closing h3 { font-size: 22px; }
}

/* Keep the bottom-sheet behavior on cramped tablets too */
@media (min-width: 768px) and (max-width: 900px) {
  .tooltip {
    position: absolute !important;
    left: 12px !important; right: 12px !important; top: auto !important;
    bottom: 70px !important;
    width: auto !important;
  }
  .tooltip::after { display: none; }
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Shared scene primitives (Vero avatar, company logos) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Vero agent avatar \u2014 CSS-only port of the finance-agent/VeroAvatar component */
.vero-av {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #111827;
  border-radius: 50%;
  overflow: hidden;
  user-select: none;
  flex-shrink: 0;
  width: 30px; height: 30px;
}
.vero-av.sz-sm { width: 24px; height: 24px; }
.vero-av.sz-md { width: 36px; height: 36px; }
.vero-av.sz-lg { width: 44px; height: 44px; }
.vero-av-eyes {
  font-family: "Courier New", Courier, monospace;
  color: #10B981;
  font-weight: bold;
  line-height: 1;
  display: inline-flex;
  gap: 3px;
  font-size: 0.42em;
}
.vero-av.sz-sm .vero-av-eyes { font-size: 10px; }
.vero-av .vero-av-eyes { font-size: 12px; }
.vero-av.sz-md .vero-av-eyes { font-size: 15px; }
.vero-av.sz-lg .vero-av-eyes { font-size: 18px; }
.vero-av-eye {
  display: inline-block;
  transform-origin: center;
  animation: vero-blink 4s ease-in-out infinite;
}
.vero-av-eye-r { animation-delay: 1.1s; }
@keyframes vero-blink {
  0%, 92%, 100% { transform: scaleY(1); }
  95% { transform: scaleY(0.08); }
}
/* Thinking state: eyes flip binary */
.vero-av.thinking .vero-av-eye {
  animation: vero-binary 0.5s steps(1) infinite;
}
@keyframes vero-binary {
  0% { opacity: 1; }
  50% { opacity: 0.4; }
  100% { opacity: 1; }
}
.vero-av.thinking { background: #1f2937; }
.vero-av.thinking .vero-av-eyes { color: #6EE7B7; }

/* Company avatars \u2014 colored circle with industry icon (lucide SVGs).
   Stable naming: .co-industries (factory), .co-energy (wind), .co-logistics (truck),
   .co-pharma (pill), .co-retail (shopping-bag). Add more as needed. */
.co-av {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px; height: 32px;
  border-radius: 50%;
  color: #fff;
  flex-shrink: 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
}
.co-av svg { width: 16px; height: 16px; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
.co-av.sz-sm { width: 24px; height: 24px; }
.co-av.sz-sm svg { width: 13px; height: 13px; }
.co-av.sz-md { width: 38px; height: 38px; }
.co-av.sz-md svg { width: 19px; height: 19px; }

.co-av.co-industries { background: linear-gradient(135deg, #1e3a8a, #1e40af); } /* navy */
.co-av.co-energy     { background: linear-gradient(135deg, #0d9488, #0f766e); } /* teal */
.co-av.co-logistics  { background: linear-gradient(135deg, #ea580c, #c2410c); } /* orange */
.co-av.co-pharma     { background: linear-gradient(135deg, #db2777, #be185d); } /* magenta */
.co-av.co-retail     { background: linear-gradient(135deg, #7c3aed, #5b21b6); } /* violet */
.co-av.co-tech       { background: linear-gradient(135deg, #0ea5e9, #0369a1); } /* sky */
.co-av.co-food       { background: linear-gradient(135deg, #f59e0b, #b45309); } /* amber */
.co-av.co-motors     { background: linear-gradient(135deg, #475569, #1e293b); } /* slate */
.co-av.co-build      { background: linear-gradient(135deg, #d97706, #92400e); } /* warm amber */
.co-av.co-fashion    { background: linear-gradient(135deg, #f43f5e, #be123c); } /* rose */
.co-av.co-media      { background: linear-gradient(135deg, #d946ef, #a21caf); } /* fuchsia */
.co-av.co-finance    { background: linear-gradient(135deg, #059669, #047857); } /* emerald */

/* Inline SVG flags. Identical rendering on every OS (no OS-specific emoji
   fallback behavior). ~150\u2013400 bytes each baked into the bundle. */
.flag-svg {
  display: inline-block;
  width: 22px;
  height: 16px;
  border-radius: 2px;
  vertical-align: -3px;
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.12);
  overflow: hidden;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Reduced motion \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@media (prefers-reduced-motion: reduce) {
  * { transition: none !important; animation: none !important; }
}
`;var H={};function y(e){H[e.id]=e,document.querySelectorAll(`transformance-tour[data-tour="${e.id}"]`).forEach(s=>{s._mounted||s._tryMount()})}var D=class extends HTMLElement{constructor(){super(),this._mounted=!1,this._stepIndex=0,this._tour=null}connectedCallback(){this._mounted||this._tryMount()}_tryMount(){let s=this.dataset.tour,t=s&&H[s];t&&(this._mounted=!0,this._tour=t,this._shadow=this.attachShadow({mode:"open"}),this._shadow.innerHTML=`
      <style>${F}</style>
      <svg width="0" height="0" style="position:absolute" aria-hidden="true">
        <defs>
          <linearGradient id="tour-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="#ff8308"/>
            <stop offset="0.55" stop-color="#ff5043"/>
            <stop offset="1" stop-color="#392bd5"/>
          </linearGradient>
        </defs>
      </svg>
      <div class="frame" part="frame">
        <div class="cover-tag">${t.tag||"Interactive demo"}</div>
        <button class="fs-close" data-fs-close aria-label="Close demo">\u2715</button>
        <div class="stage" data-stage></div>
        <div class="cover" data-cover>
          <div class="cover-pill">
            <span class="cover-play"><svg viewBox="0 0 10 10"><polygon points="2,1 9,5 2,9"/></svg></span>
            ${t.coverLabel||"Watch demo"}
          </div>
        </div>
      </div>
    `,this._frame=this._shadow.querySelector(".frame"),this._stage=this._shadow.querySelector("[data-stage]"),this._cover=this._shadow.querySelector("[data-cover]"),this._fsClose=this._shadow.querySelector("[data-fs-close]"),this._cover.addEventListener("click",()=>this._start(),{once:!0}),this._fsClose.addEventListener("click",i=>{i.stopPropagation(),this._exitFullscreen()}),this._renderSceneContent(0))}_isMobile(){return typeof matchMedia=="function"&&matchMedia("(max-width: 767px)").matches}_enterFullscreen(){this._frame.classList.add("fs"),document.body.style.overflow="hidden"}_exitFullscreen(){if(this._frame.classList.remove("fs"),document.body.style.overflow="",this._shadow.querySelector(".spotlight")?.remove(),this._shadow.querySelector(".tooltip")?.remove(),this._shadow.querySelector(".toolbar")?.remove(),this._shadow.querySelector(".closing")?.remove(),this._shadow.querySelector(".cover-tag")?.classList.remove("hidden"),!this._shadow.querySelector("[data-cover]")){let s=document.createElement("div");s.className="cover",s.setAttribute("data-cover",""),s.innerHTML=`
        <div class="cover-pill">
          <span class="cover-play"><svg viewBox="0 0 10 10"><polygon points="2,1 9,5 2,9"/></svg></span>
          ${this._tour.coverLabel||"Watch demo"}
        </div>
      `,this._frame.appendChild(s),this._cover=s,s.addEventListener("click",()=>this._start(),{once:!0})}this._renderSceneContent(0),this._stepIndex=0}_start(){this._isMobile()&&this._enterFullscreen(),this._cover.classList.add("hidden"),this._shadow.querySelector(".cover-tag")?.classList.add("hidden"),setTimeout(()=>this._cover.remove(),320),this._activateScene(0),this._renderToolbar()}_renderToolbar(){let s=this._shadow.querySelector(".toolbar");s&&s.remove(),s=document.createElement("div"),s.className="toolbar",s.innerHTML=`
      <div class="dots">
        ${this._tour.scenes.map((t,i)=>`<span class="dot ${i===this._stepIndex?"active":i<this._stepIndex?"done":""}"></span>`).join("")}
      </div>
      <button class="toolbar-btn" data-skip>Skip</button>
    `,this._frame.appendChild(s),s.querySelector("[data-skip]").addEventListener("click",()=>this._renderClosing())}_renderSceneContent(s){let t=this._tour.scenes[s];this._stage.innerHTML=`<div class="scene scene-${t.id}">${t.html}</div>`}_activateScene(s){this._stepIndex=s;let t=this._tour.scenes[s];if(this._shadow.querySelector(".spotlight")?.remove(),this._shadow.querySelector(".tooltip")?.remove(),typeof t.onMount=="function")try{t.onMount(this._stage,this)}catch(i){console.error("[tour] scene.onMount error:",i)}requestAnimationFrame(()=>{t.spotlight&&this._renderSpotlight(t),t.body&&this._renderTooltip(t),this._bindAdvance(t)})}_renderScene(s){this._renderSceneContent(s),this._activateScene(s),this._renderToolbar()}_renderSpotlight(s){let t=this._stage.querySelector(s.spotlight);if(!t)return;this._shadow.querySelectorAll(".tour-hilite").forEach(m=>m.classList.remove("tour-hilite"));let i=t.parentElement;for(;i&&i!==this._frame;){let m=i.ownerDocument.defaultView.getComputedStyle(i);if(/(auto|scroll)/.test(m.overflowY)){let g=i.getBoundingClientRect(),h=t.getBoundingClientRect();if(!(h.top>=g.top&&h.bottom<=g.bottom)){let I=h.bottom-(g.bottom-24);i.scrollTop+=I}break}i=i.parentElement}let o=this._frame.getBoundingClientRect(),r=t.getBoundingClientRect(),l=s.spotlightPad??8,b=r.left-o.left-l,$=r.top-o.top-l,f=r.width+l*2,v=r.height+l*2,p=s.spotlightRadius??12,w=`
      <div class="spotlight">
        <svg viewBox="0 0 ${o.width} ${o.height}" preserveAspectRatio="none">
          <defs>
            <mask id="m" maskUnits="userSpaceOnUse">
              <rect class="outer" x="0" y="0" width="${o.width}" height="${o.height}" />
              <rect class="inner" x="${b}" y="${$}" width="${f}" height="${v}" rx="${p}" />
            </mask>
          </defs>
          <rect class="spotlight-dim" x="0" y="0" width="${o.width}" height="${o.height}" mask="url(#m)" />
        </svg>
      </div>
    `;this._frame.insertAdjacentHTML("beforeend",w),t.classList.add("tour-hilite"),this._currentTargetRect={x:b,y:$,w:f,h:v}}_renderTooltip(s){let t=this._stepIndex===this._tour.scenes.length-1,i=s.advanceOn?.click?null:t?"Finish":"Next",o=document.createElement("div");o.className="tooltip",o.dataset.side=s.tooltipSide||"right",o.innerHTML=`
      ${s.title?`<div class="tooltip-tag">${s.title}</div>`:""}
      <div class="tooltip-body">${s.body}</div>
      <div class="tooltip-controls">
        <span class="step-of">${this._stepIndex+1} / ${this._tour.scenes.length}</span>
        ${i?`<button class="tooltip-next" data-next>${i}<svg viewBox="0 0 10 10" fill="currentColor"><polygon points="2,1 8,5 2,9"/></svg></button>`:'<span style="color: var(--tour-ink-40); font-size: 11px;">\u2193 Click highlighted</span>'}
      </div>
    `,this._frame.appendChild(o),this._positionTooltip(o,s),o.querySelector("[data-next]")?.addEventListener("click",()=>this._advance())}_positionTooltip(s,t){let i=this._currentTargetRect;if(!i){s.style.left="50%",s.style.top="50%",s.style.transform="translate(-50%, -50%)",s.removeAttribute("data-side");return}let o=this._frame.getBoundingClientRect(),r=280,l=140,b=14,$=t.tooltipSide||"right",f,v;switch($){case"right":f=i.x+i.w+b,v=i.y;break;case"left":f=i.x-r-b,v=i.y;break;case"top":f=i.x,v=i.y-l-b;break;case"bottom":f=i.x,v=i.y+i.h+b;break}f=Math.max(12,Math.min(f,o.width-r-12)),v=Math.max(12,Math.min(v,o.height-l-12)),s.style.left=`${f}px`,s.style.top=`${v}px`}_bindAdvance(s){if(!s.advanceOn?.click)return;let t=this._stage.querySelector(s.advanceOn.click);t&&(t.addEventListener("click",i=>{i.preventDefault(),this._advance()},{once:!0}),t.style.cursor="pointer")}_advance(){this._stepIndex+1>=this._tour.scenes.length?this._renderClosing():this._renderScene(this._stepIndex+1)}_renderClosing(){this._shadow.querySelector(".spotlight")?.remove(),this._shadow.querySelector(".tooltip")?.remove(),this._shadow.querySelector(".toolbar")?.remove();let s=this.dataset.ctaHtml||`
      <a class="closing-default-cta" href="https://transformance.ai/meeting">
        Book a meeting \u2192
      </a>
    `,t=document.createElement("div");t.className="closing",t.innerHTML=`
      <h3>${this._tour.closing?.headline||'Want to see it on <span class="grad">your data</span>?'}</h3>
      ${this._tour.closing?.sub?`<p>${this._tour.closing.sub}</p>`:""}
      <div class="closing-cta-slot">${s}</div>
      <button class="closing-replay" data-replay>\u21BB Replay</button>
    `,this._frame.appendChild(t),t.querySelector("[data-replay]").addEventListener("click",()=>{t.remove(),this._renderScene(0)})}};customElements.get("transformance-tour")||customElements.define("transformance-tour",D);var n={factory:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>',wind:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/></svg>',truck:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>',pill:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>',shoppingBag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',cpu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>',wheat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M2 22 16 8"/><path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M20 9c.5.5 1.12.5 2.5 2-1.38 1.5-2 1.5-2.5 2-.5-.5-1.12-.5-2.5-2 1.38-1.5 2-1.5 2.5-2Z"/><path d="M16 13c.5.5 1.12.5 2.5 2-1.38 1.5-2 1.5-2.5 2-.5-.5-1.12-.5-2.5-2 1.38-1.5 2-1.5 2.5-2Z"/></svg>',car:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L19 9c-.3-.1-.6-.3-.8-.6L16.5 6.4c-.6-.8-1.5-1.4-2.5-1.4H7.6c-1 0-1.9.6-2.5 1.4L3.8 8.4c-.2.3-.5.5-.8.6L1.5 10.1C.7 10.3 0 11.1 0 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>',hardHat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"/><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M4 15v-3a6 6 0 0 1 6-6"/><path d="M14 6a6 6 0 0 1 6 6v3"/></svg>',shirt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>',clapperboard:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z"/><path d="m6.2 5.3 3.1 3.9"/><path d="m12.4 3.4 3.1 4"/><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',coins:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/></svg>',phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>',check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 6 9 17 4 12"/></svg>',alert:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',play:'<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"/></svg>',arrowRight:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',trendingUp:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>',trendingDown:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>',phoneOff:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"/><line x1="23" y1="1" x2="1" y2="23"/></svg>',globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',sliders:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>',fuel:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="3" y1="22" x2="15" y2="22"/><line x1="4" y1="9" x2="14" y2="9"/><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"/><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"/></svg>',shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',zap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>'};function c(e){return`<span class="co-av ${e.cls}">${n[e.icon]}</span>`}function C(e){return`<span class="co-av ${e.cls} sz-sm">${n[e.icon]}</span>`}var U={DE:'<svg viewBox="0 0 24 18"><rect width="24" height="6" fill="#000"/><rect y="6" width="24" height="6" fill="#DD0000"/><rect y="12" width="24" height="6" fill="#FFCE00"/></svg>',AT:'<svg viewBox="0 0 24 18"><rect width="24" height="6" fill="#ED2939"/><rect y="6" width="24" height="6" fill="#fff"/><rect y="12" width="24" height="6" fill="#ED2939"/></svg>',NL:'<svg viewBox="0 0 24 18"><rect width="24" height="6" fill="#AE1C28"/><rect y="6" width="24" height="6" fill="#fff"/><rect y="12" width="24" height="6" fill="#21468B"/></svg>',ES:'<svg viewBox="0 0 24 18"><rect width="24" height="4.5" fill="#AA151B"/><rect y="4.5" width="24" height="9" fill="#F1BF00"/><rect y="13.5" width="24" height="4.5" fill="#AA151B"/></svg>',FR:'<svg viewBox="0 0 24 18"><rect width="8" height="18" fill="#0055A4"/><rect x="8" width="8" height="18" fill="#fff"/><rect x="16" width="8" height="18" fill="#EF4135"/></svg>',IT:'<svg viewBox="0 0 24 18"><rect width="8" height="18" fill="#009246"/><rect x="8" width="8" height="18" fill="#fff"/><rect x="16" width="8" height="18" fill="#CE2B37"/></svg>',IE:'<svg viewBox="0 0 24 18"><rect width="8" height="18" fill="#169B62"/><rect x="8" width="8" height="18" fill="#fff"/><rect x="16" width="8" height="18" fill="#FF883E"/></svg>',BE:'<svg viewBox="0 0 24 18"><rect width="8" height="18" fill="#000"/><rect x="8" width="8" height="18" fill="#FAE042"/><rect x="16" width="8" height="18" fill="#ED2939"/></svg>',PT:'<svg viewBox="0 0 24 18"><rect width="10" height="18" fill="#046A38"/><rect x="10" width="14" height="18" fill="#DA291C"/><circle cx="10" cy="9" r="2.4" fill="#FFD100"/></svg>',SE:'<svg viewBox="0 0 24 18"><rect width="24" height="18" fill="#006AA7"/><rect x="7" width="3" height="18" fill="#FECC00"/><rect y="7.5" width="24" height="3" fill="#FECC00"/></svg>',DK:'<svg viewBox="0 0 24 18"><rect width="24" height="18" fill="#C8102E"/><rect x="7" width="3" height="18" fill="#fff"/><rect y="7.5" width="24" height="3" fill="#fff"/></svg>',CH:'<svg viewBox="0 0 24 18"><rect width="24" height="18" fill="#DC143C"/><rect x="10" y="4" width="4" height="10" fill="#fff"/><rect x="7" y="7" width="10" height="4" fill="#fff"/></svg>',GB:'<svg viewBox="0 0 24 18"><rect width="24" height="18" fill="#012169"/><path d="M0 0L24 18M24 0L0 18" stroke="#fff" stroke-width="2.5"/><path d="M0 0L24 18M24 0L0 18" stroke="#C8102E" stroke-width="1.5"/><rect x="10" width="4" height="18" fill="#fff"/><rect y="7" width="24" height="4" fill="#fff"/><rect x="11" width="2" height="18" fill="#C8102E"/><rect y="8" width="24" height="2" fill="#C8102E"/></svg>',US:'<svg viewBox="0 0 24 18"><rect width="24" height="18" fill="#fff"/><rect width="24" height="1.4" fill="#B22234"/><rect width="24" height="1.4" y="2.8" fill="#B22234"/><rect width="24" height="1.4" y="5.6" fill="#B22234"/><rect width="24" height="1.4" y="8.4" fill="#B22234"/><rect width="24" height="1.4" y="11.2" fill="#B22234"/><rect width="24" height="1.4" y="14" fill="#B22234"/><rect width="24" height="1.4" y="16.8" fill="#B22234"/><rect width="10" height="9.7" fill="#3C3B6E"/></svg>',BR:'<svg viewBox="0 0 24 18"><rect width="24" height="18" fill="#009C3B"/><polygon points="12,3 22,9 12,15 2,9" fill="#FFDF00"/><circle cx="12" cy="9" r="3" fill="#002776"/></svg>'};function W(e){let s=U[e];return s?s.replace("<svg",'<svg class="flag-svg"'):""}var a={industries:{name:"Acme Industries",sector:"Manufacturing",country:"DE",flag:"de",cls:"co-industries",icon:"factory",contact:"Lars Olsen"},energy:{name:"Acme Energy",sector:"Renewables",country:"PT",flag:"pt",cls:"co-energy",icon:"wind",contact:"Maria Santos"},logistics:{name:"Acme Logistics",sector:"Shipping",country:"GB",flag:"gb",cls:"co-logistics",icon:"truck",contact:"James Clarke"},pharma:{name:"Acme Pharma",sector:"Healthcare",country:"ES",flag:"es",cls:"co-pharma",icon:"pill",contact:"Hans Weber"},retail:{name:"Acme Retail",sector:"Consumer goods",country:"FR",flag:"fr",cls:"co-retail",icon:"shoppingBag",contact:"Claire Dubois"},tech:{name:"Acme Tech",sector:"Technology",country:"IE",flag:"ie",cls:"co-tech",icon:"cpu",contact:"Aidan Murphy"},food:{name:"Acme Food",sector:"Food & beverage",country:"IT",flag:"it",cls:"co-food",icon:"wheat",contact:"Giulia Rossi"},motors:{name:"Acme Motors",sector:"Automotive",country:"DE",flag:"de",cls:"co-motors",icon:"car",contact:"Anja Becker"},build:{name:"Acme Build",sector:"Construction",country:"NL",flag:"nl",cls:"co-build",icon:"hardHat",contact:"Pieter de Vries"},fashion:{name:"Acme Fashion",sector:"Apparel",country:"SE",flag:"se",cls:"co-fashion",icon:"shirt",contact:"Lina Andersson"},media:{name:"Acme Media",sector:"Media",country:"US",flag:"us",cls:"co-media",icon:"clapperboard",contact:"Jordan Reed"},finance:{name:"Acme Finance",sector:"Financial services",country:"CH",flag:"ch",cls:"co-finance",icon:"coins",contact:"Samuel Keller"}},be=Object.values(a);var j=`
  <style>
    .scene { position: absolute; inset: 0; padding: 28px 32px; font: 13px/1.45 Geist, system-ui, sans-serif; color: #0a0a0a; }
    .scene .row { display: flex; align-items: center; gap: 12px; }
    .scene .col { display: flex; flex-direction: column; gap: 12px; }
    .scene .card { background: #fff; border: 1px solid rgba(10,10,10,0.08); border-radius: 10px; padding: 14px; box-shadow: 0 1px 2px rgba(0,0,0,0.04); }
    .scene .pill { display: inline-flex; align-items: center; gap: 4px; font-size: 11px; font-weight: 500; padding: 3px 8px; border-radius: 999px; }
    .scene .pill.green { background: rgba(1,146,115,0.12); color: #019273; }
    .scene .pill.amber { background: rgba(239,137,1,0.12); color: #b75e00; }
    .scene .pill.violet { background: rgba(130,89,247,0.12); color: #6d28d9; }
    .scene .pill.gray { background: rgba(10,10,10,0.06); color: rgba(10,10,10,0.6); }
    .scene .btn { appearance: none; border: 0; cursor: pointer; background: #0a0a0a; color: #fff; font: 500 12px/1 Geist, system-ui, sans-serif; padding: 8px 14px; border-radius: 8px; display: inline-flex; align-items: center; gap: 6px; }
    .scene .btn-light { background: #fff; color: #0a0a0a; border: 1px solid rgba(10,10,10,0.1); }
    .scene .mono { font-variant-numeric: tabular-nums; letter-spacing: -0.01em; }
    .scene .eyebrow { font: 500 10px/1 Geist, system-ui, sans-serif; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(10,10,10,0.5); }
    .scene h2 { font: 500 18px/1.2 Geist, system-ui, sans-serif; letter-spacing: -0.015em; margin: 0; }
  </style>
`,J={id:"cash-app",tag:"CASH APPLICATION \xB7 INTERACTIVE DEMO",coverLabel:"See cash application in 30 seconds",closing:{headline:`That's 90% of cash application, <span class="grad">automated</span>.`,sub:"Want to see it on your own data?"},scenes:[{id:"01-inbox",title:"Step 1 \xB7 Inbox",body:"Three remittances arrived overnight. Vero already started on the first.",tooltipSide:"right",spotlight:"#row-hero",advanceOn:{click:"#row-hero"},html:`${j}
        <style>
          .scene-01-inbox .header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px; }
          .scene-01-inbox .header-tag { color: rgba(10,10,10,0.5); font-size: 12px; }
          .scene-01-inbox .inbox { display: flex; flex-direction: column; gap: 10px; }
          .scene-01-inbox .email { display: flex; align-items: center; gap: 14px; padding: 14px 16px; border-radius: 10px; background: #fff; border: 1px solid rgba(10,10,10,0.08); transition: all 200ms ease; }
          .scene-01-inbox .email.faded { opacity: 0.55; }
          .scene-01-inbox .email-meta { flex: 1; min-width: 0; }
          .scene-01-inbox .email-from { font-weight: 500; font-size: 13px; }
          .scene-01-inbox .email-subj { font-size: 12px; color: rgba(10,10,10,0.55); margin-top: 2px; }
          .scene-01-inbox .email-time { font-size: 11px; color: rgba(10,10,10,0.4); margin-left: auto; flex-shrink: 0; }
          .scene-01-inbox #row-hero { background: #fff; border-color: rgba(10,10,10,0.16); cursor: pointer; }
          .scene-01-inbox #row-hero:hover { border-color: #0a0a0a; }
        </style>
        <div class="header">
          <h2>Inbox</h2>
          <span class="header-tag">3 unread \xB7 today</span>
        </div>
        <div class="inbox">
          <div class="email" id="row-hero">
            ${c(a.industries)}
            <div class="email-meta">
              <div class="email-from">${a.industries.name} \xB7 Accounts Payable</div>
              <div class="email-subj">Remittance advice \u2014 Wire transfer \u20AC530,000 \u2014 3 invoices</div>
            </div>
            <span class="email-time">2 min ago</span>
          </div>
          <div class="email faded">
            ${c(a.energy)}
            <div class="email-meta">
              <div class="email-from">${a.energy.name} \xB7 Treasury</div>
              <div class="email-subj">Payment notification \u2014 Invoices INV-0014, INV-0017</div>
            </div>
            <span class="email-time">14 min ago</span>
          </div>
          <div class="email faded">
            ${c(a.logistics)}
            <div class="email-meta">
              <div class="email-from">${a.logistics.name} \xB7 Finance</div>
              <div class="email-subj">Aviso de pagamento \u2014 R$ 180.000</div>
            </div>
            <span class="email-time">42 min ago</span>
          </div>
        </div>
      `},{id:"02-extract",title:"Step 2 \xB7 Extraction",body:'Every field extracted with <span class="grad">confidence</span>. No templates to maintain.',tooltipSide:"top",spotlight:"#extraction-table",html:`${j}
        <style>
          .scene-02-extract .head { margin-bottom: 14px; }
          .scene-02-extract .grid { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 16px; }
          .scene-02-extract .pdf { background: #fff; border: 1px solid rgba(10,10,10,0.08); border-radius: 10px; padding: 16px; position: relative; min-height: 320px; }
          .scene-02-extract .pdf-doc { background: linear-gradient(180deg, #fafaf8, #f0eee8); border-radius: 6px; padding: 16px; height: 100%; min-height: 280px; position: relative; font-size: 10px; color: rgba(10,10,10,0.55); line-height: 1.6; }
          .scene-02-extract .pdf-doc .docline { display: block; height: 7px; background: rgba(10,10,10,0.08); border-radius: 2px; margin: 5px 0; }
          .scene-02-extract .pdf-doc .docline.short { width: 60%; }
          .scene-02-extract .pdf-doc .docline.med { width: 80%; }
          .scene-02-extract .pdf-doc .highlight { position: absolute; border: 2px solid #392bd5; background: rgba(57,43,213,0.08); border-radius: 3px; }
          .scene-02-extract .h1 { top: 32px; left: 14px; width: 110px; height: 16px; }
          .scene-02-extract .h2 { top: 78px; left: 14px; width: 80px; height: 14px; }
          .scene-02-extract .h3 { top: 130px; right: 14px; width: 90px; height: 18px; }
          .scene-02-extract #extraction-table { background: #fff; border: 1px solid rgba(10,10,10,0.08); border-radius: 10px; padding: 16px; }
          .scene-02-extract .field { display: grid; grid-template-columns: 110px 1fr 60px; align-items: center; gap: 10px; padding: 9px 0; border-bottom: 1px solid rgba(10,10,10,0.06); font-size: 12px; }
          .scene-02-extract .field:last-child { border-bottom: 0; }
          .scene-02-extract .field-key { color: rgba(10,10,10,0.55); }
          .scene-02-extract .field-val { font-weight: 500; }
          .scene-02-extract .field-conf { text-align: right; font-size: 11px; }
          .scene-02-extract .table-head { font-size: 13px; font-weight: 500; margin-bottom: 6px; display: flex; align-items: center; justify-content: space-between; }
          .scene-02-extract .lbl { color: rgba(10,10,10,0.5); font-size: 11px; }
        </style>
        <div class="head row" style="justify-content: space-between;">
          <h2>Acme Industries \u2014 remittance.pdf</h2>
          <span class="lbl">DocSense \xB7 processing</span>
        </div>
        <div style="height: 18px;"></div>
        <div class="grid">
          <div class="pdf">
            <div class="pdf-doc">
              <span class="docline med"></span>
              <span class="docline short"></span>
              <span class="docline"></span>
              <span class="docline med"></span>
              <span class="docline short"></span>
              <span class="docline"></span>
              <span class="docline med"></span>
              <span class="docline"></span>
              <span class="docline short"></span>
              <span class="docline"></span>
              <div class="highlight h1"></div>
              <div class="highlight h2"></div>
              <div class="highlight h3"></div>
            </div>
          </div>
          <div id="extraction-table">
            <div class="table-head">Extracted fields <span class="pill green">8 / 8 captured</span></div>
            <div class="field"><span class="field-key">Vendor</span><span class="field-val">Acme Industries</span><span class="field-conf"><span class="pill green">99%</span></span></div>
            <div class="field"><span class="field-key">Amount</span><span class="field-val mono">\u20AC530,000.00</span><span class="field-conf"><span class="pill green">99%</span></span></div>
            <div class="field"><span class="field-key">Currency</span><span class="field-val">EUR</span><span class="field-conf"><span class="pill green">99%</span></span></div>
            <div class="field"><span class="field-key">Bank ref</span><span class="field-val mono">DB-WT-2024-04-22-8842</span><span class="field-conf"><span class="pill green">97%</span></span></div>
            <div class="field"><span class="field-key">Invoices</span><span class="field-val mono">INV-0019, INV-0020, INV-0021</span><span class="field-conf"><span class="pill green">99%</span></span></div>
            <div class="field"><span class="field-key">Value date</span><span class="field-val mono">2024-04-22</span><span class="field-conf"><span class="pill green">98%</span></span></div>
            <div class="field"><span class="field-key">Discount</span><span class="field-val">None</span><span class="field-conf"><span class="pill green">95%</span></span></div>
            <div class="field"><span class="field-key">FX rate</span><span class="field-val">N/A (same ccy)</span><span class="field-conf"><span class="pill green">99%</span></span></div>
          </div>
        </div>
      `},{id:"03-match",title:"Step 3 \xB7 Auto-match",body:'Three invoices, three matches. <span class="grad">\u20AC530K accounted for</span> in under 4 seconds.',tooltipSide:"right",spotlight:"#match-cards",html:`${j}
        <style>
          .scene-03-match .head { margin-bottom: 16px; }
          .scene-03-match .summary { display: flex; gap: 12px; margin-bottom: 16px; }
          .scene-03-match .summary .stat { flex: 1; padding: 12px 14px; background: #fff; border: 1px solid rgba(10,10,10,0.08); border-radius: 10px; }
          .scene-03-match .summary .stat .n { font: 500 22px/1 Geist, system-ui, sans-serif; letter-spacing: -0.02em; }
          .scene-03-match .summary .stat .l { font-size: 11px; color: rgba(10,10,10,0.55); margin-top: 4px; }
          .scene-03-match #match-cards { display: flex; flex-direction: column; gap: 10px; }
          .scene-03-match .match { display: grid; grid-template-columns: 1fr 110px 90px 90px; align-items: center; gap: 14px; padding: 14px 16px; background: #fff; border: 1px solid rgba(1,146,115,0.4); border-radius: 10px; box-shadow: 0 1px 2px rgba(0,0,0,0.03); }
          .scene-03-match .match-id { font-weight: 500; }
          .scene-03-match .match-customer { font-size: 11px; color: rgba(10,10,10,0.55); margin-top: 2px; }
          .scene-03-match .match-amt { font-weight: 500; text-align: right; }
          .scene-03-match .match-date { font-size: 11px; color: rgba(10,10,10,0.55); }
          .scene-03-match .check { width: 22px; height: 22px; border-radius: 50%; background: #019273; display: inline-flex; align-items: center; justify-content: center; }
          .scene-03-match .check svg { width: 12px; height: 12px; }
        </style>
        <div class="head row" style="justify-content: space-between;">
          <h2>Auto-match results</h2>
          <span style="color: rgba(10,10,10,0.5); font-size: 11px;">\u20AC530K \xB7 Acme \xB7 run 3.7s</span>
        </div>
        <div class="summary">
          <div class="stat"><div class="n mono" style="color: #019273;">\u20AC530K</div><div class="l">Auto-matched</div></div>
          <div class="stat"><div class="n mono">3</div><div class="l">Invoices cleared</div></div>
          <div class="stat"><div class="n mono">99%</div><div class="l">Avg confidence</div></div>
        </div>
        <div id="match-cards">
          <div class="match">
            <div><div class="match-id mono">INV-0019</div><div class="match-customer">Acme Industries \xB7 30 days</div></div>
            <div class="match-amt mono">\u20AC179,000</div>
            <span class="pill green">Match 99%</span>
            <span class="check"><svg viewBox="0 0 12 12" fill="none"><path d="M3 6L5 8L9 4" stroke="white" stroke-width="2" stroke-linecap="round"/></svg></span>
          </div>
          <div class="match">
            <div><div class="match-id mono">INV-0020</div><div class="match-customer">Acme Industries \xB7 30 days</div></div>
            <div class="match-amt mono">\u20AC211,000</div>
            <span class="pill green">Match 99%</span>
            <span class="check"><svg viewBox="0 0 12 12" fill="none"><path d="M3 6L5 8L9 4" stroke="white" stroke-width="2" stroke-linecap="round"/></svg></span>
          </div>
          <div class="match">
            <div><div class="match-id mono">INV-0021</div><div class="match-customer">Acme Industries \xB7 30 days</div></div>
            <div class="match-amt mono">\u20AC140,000</div>
            <span class="pill green">Match 99%</span>
            <span class="check"><svg viewBox="0 0 12 12" fill="none"><path d="M3 6L5 8L9 4" stroke="white" stroke-width="2" stroke-linecap="round"/></svg></span>
          </div>
        </div>
      `},{id:"04-edge",title:"Step 4 \xB7 Edge case",body:`This one's borderline. Vero surfaces it, <span class="grad">you decide</span> in one click.`,tooltipSide:"left",spotlight:"#edge-card",advanceOn:{click:"#edge-confirm"},html:`${j}
        <style>
          .scene-04-edge .head { margin-bottom: 14px; }
          .scene-04-edge .matched { display: flex; flex-direction: column; gap: 6px; margin-bottom: 14px; opacity: 0.55; }
          .scene-04-edge .matched .row { padding: 10px 14px; background: #fff; border: 1px solid rgba(10,10,10,0.06); border-radius: 8px; font-size: 12px; display: flex; align-items: center; justify-content: space-between; }
          .scene-04-edge .matched .row .left { display: flex; align-items: center; gap: 10px; }
          .scene-04-edge #edge-card { background: #fff; border: 1.5px solid #ef8901; border-radius: 12px; padding: 18px; box-shadow: 0 4px 14px rgba(239,137,1,0.12); }
          .scene-04-edge #edge-card .top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
          .scene-04-edge #edge-card .top .left { display: flex; align-items: center; gap: 12px; }
          .scene-04-edge #edge-card .id { font-weight: 500; }
          .scene-04-edge #edge-card .id-sub { font-size: 11px; color: rgba(10,10,10,0.55); margin-top: 2px; }
          .scene-04-edge #edge-card .delta { font-size: 12px; padding: 3px 8px; border-radius: 6px; background: rgba(239,137,1,0.12); color: #b75e00; font-weight: 500; }
          .scene-04-edge #edge-card .body { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; padding: 12px; background: rgba(239,137,1,0.04); border-radius: 8px; margin-bottom: 14px; }
          .scene-04-edge #edge-card .body .col { gap: 4px; }
          .scene-04-edge #edge-card .body .lbl { font-size: 10px; color: rgba(10,10,10,0.5); text-transform: uppercase; letter-spacing: 0.06em; }
          .scene-04-edge #edge-card .body .val { font-size: 13px; font-weight: 500; }
          .scene-04-edge #edge-card .actions { display: flex; align-items: center; justify-content: space-between; }
          .scene-04-edge #edge-card .vero-note { font-size: 11px; color: rgba(10,10,10,0.55); display: flex; align-items: center; gap: 6px; }
          .scene-04-edge #edge-card .vero-dot { width: 6px; height: 6px; border-radius: 50%; background: #8259f7; }
          .scene-04-edge #edge-confirm { background: #ef8901; }
        </style>
        <div class="head row" style="justify-content: space-between;">
          <h2>Acme Industries \xB7 \u20AC530K</h2>
          <span class="pill green">3 of 4 matched</span>
        </div>
        <div class="matched">
          <div class="row"><div class="left"><span class="mono" style="font-weight:500">INV-0019</span><span style="color:rgba(10,10,10,0.5);font-size:11px;">\u20AC179K \xB7 cleared</span></div><span class="pill green" style="font-size:10px;">99%</span></div>
          <div class="row"><div class="left"><span class="mono" style="font-weight:500">INV-0020</span><span style="color:rgba(10,10,10,0.5);font-size:11px;">\u20AC211K \xB7 cleared</span></div><span class="pill green" style="font-size:10px;">99%</span></div>
          <div class="row"><div class="left"><span class="mono" style="font-weight:500">INV-0021</span><span style="color:rgba(10,10,10,0.5);font-size:11px;">\u20AC140K \xB7 cleared</span></div><span class="pill green" style="font-size:10px;">99%</span></div>
        </div>
        <div id="edge-card">
          <div class="top">
            <div class="left">
              <span class="id mono">INV-0023</span>
              <div class="id-sub">Acme Industries \xB7 45 days \xB7 expected \u20AC92,000</div>
            </div>
            <span class="delta">87% \xB7 short by \u20AC230</span>
          </div>
          <div class="body">
            <div class="col">
              <span class="lbl">Most likely</span>
              <span class="val">Trade promotion deduction</span>
              <span style="font-size: 11px; color: rgba(10,10,10,0.55);">Q2 promo TP-041 active for this account</span>
            </div>
            <div class="col">
              <span class="lbl">Alternative</span>
              <span class="val">Pricing discrepancy</span>
              <span style="font-size: 11px; color: rgba(10,10,10,0.55);">No POD discrepancy on file</span>
            </div>
          </div>
          <div class="actions">
            <span class="vero-note"><span class="vero-dot"></span>Vero recommends accepting trade promo</span>
            <button class="btn" id="edge-confirm">Confirm match</button>
          </div>
        </div>
      `},{id:"05-je",title:"Step 5 \xB7 Journal entry",body:'Journal entry assembled, audit trail attached. One click to <span class="grad">post to ERP</span>.',tooltipSide:"top",spotlight:"#post-btn",advanceOn:{click:"#post-btn"},html:`${j}
        <style>
          .scene-05-je .head { margin-bottom: 14px; }
          .scene-05-je .je { background: #fff; border: 1px solid rgba(10,10,10,0.08); border-radius: 12px; overflow: hidden; }
          .scene-05-je .je-head { padding: 14px 18px; border-bottom: 1px solid rgba(10,10,10,0.06); display: flex; align-items: center; justify-content: space-between; }
          .scene-05-je .je-title { font-weight: 500; }
          .scene-05-je .je-id { font-size: 11px; color: rgba(10,10,10,0.5); }
          .scene-05-je .je-table { width: 100%; border-collapse: collapse; }
          .scene-05-je .je-table th { text-align: left; font: 500 10px/1 Geist, system-ui, sans-serif; letter-spacing: 0.06em; text-transform: uppercase; color: rgba(10,10,10,0.5); padding: 10px 18px; border-bottom: 1px solid rgba(10,10,10,0.06); }
          .scene-05-je .je-table td { padding: 10px 18px; font-size: 12px; border-bottom: 1px solid rgba(10,10,10,0.04); }
          .scene-05-je .je-table tr:last-child td { border-bottom: 0; }
          .scene-05-je .je-table .num { text-align: right; font-variant-numeric: tabular-nums; }
          .scene-05-je .je-totals { padding: 12px 18px; background: rgba(10,10,10,0.03); display: flex; align-items: center; justify-content: space-between; font-size: 12px; }
          .scene-05-je .je-foot { padding: 14px 18px; display: flex; align-items: center; justify-content: space-between; }
          .scene-05-je .audit { display: flex; gap: 14px; font-size: 11px; color: rgba(10,10,10,0.55); }
          .scene-05-je .audit-item { display: flex; align-items: center; gap: 6px; }
          .scene-05-je .audit-dot { width: 6px; height: 6px; border-radius: 50%; background: #019273; }
          .scene-05-je #post-btn { padding: 10px 18px; }
        </style>
        <div class="head row" style="justify-content: space-between;">
          <h2>Journal entry \xB7 ready to post</h2>
          <span style="color: rgba(10,10,10,0.5); font-size: 11px;">Auto-assembled \xB7 4 lines \xB7 balances</span>
        </div>
        <div class="je">
          <div class="je-head">
            <div>
              <div class="je-title">JE-2024-04-22-N0042</div>
              <div class="je-id mono">Cash receipt \xB7 Acme Industries \xB7 \u20AC530,000.00</div>
            </div>
            <span class="pill green">Balanced</span>
          </div>
          <table class="je-table">
            <thead>
              <tr><th>Account</th><th>Description</th><th class="num">Debit</th><th class="num">Credit</th></tr>
            </thead>
            <tbody>
              <tr><td class="mono">11000 \xB7 Bank \xB7 Deutsche</td><td>Wire receipt 22 Apr</td><td class="num mono">530,000.00</td><td></td></tr>
              <tr><td class="mono">12010 \xB7 AR \xB7 Acme</td><td>Clear INV-0019</td><td></td><td class="num mono">179,000.00</td></tr>
              <tr><td class="mono">12010 \xB7 AR \xB7 Acme</td><td>Clear INV-0020</td><td></td><td class="num mono">211,000.00</td></tr>
              <tr><td class="mono">12010 \xB7 AR \xB7 Acme</td><td>Clear INV-0021 + INV-0023 net</td><td></td><td class="num mono">140,000.00</td></tr>
            </tbody>
          </table>
          <div class="je-totals">
            <span style="color: rgba(10,10,10,0.55);">Totals</span>
            <span><span style="color: rgba(10,10,10,0.55); margin-right: 14px;">DR <span class="mono" style="color: #0a0a0a; font-weight: 500;">530,000.00</span></span><span style="color: rgba(10,10,10,0.55);">CR <span class="mono" style="color: #0a0a0a; font-weight: 500;">530,000.00</span></span></span>
          </div>
          <div class="je-foot">
            <div class="audit">
              <span class="audit-item"><span class="audit-dot"></span>4 source docs linked</span>
              <span class="audit-item"><span class="audit-dot"></span>Approval thresholds met</span>
              <span class="audit-item"><span class="audit-dot"></span>SAP S/4 connector ready</span>
            </div>
            <button class="btn" id="post-btn">Post to ERP \u2192</button>
          </div>
        </div>
      `},{id:"06-posted",title:"Step 6 \xB7 Posted",body:"Vero noticed this is a daily pattern. Want it to handle every morning?",tooltipSide:"right",spotlight:"#vero-card",advanceOn:{click:"#vero-yes"},html:`${j}
        <style>
          .scene-06-posted { display: flex; flex-direction: column; align-items: center; justify-content: center; }
          .scene-06-posted .success-card { background: #fff; border: 1px solid rgba(1,146,115,0.3); border-radius: 14px; padding: 28px 32px; text-align: center; box-shadow: 0 4px 18px rgba(0,0,0,0.06); width: 460px; }
          .scene-06-posted .check-big { width: 56px; height: 56px; border-radius: 50%; background: #019273; display: inline-flex; align-items: center; justify-content: center; margin: 0 auto 14px; animation: pop 400ms cubic-bezier(0.2, 0.9, 0.4, 1); }
          .scene-06-posted .check-big svg { width: 26px; height: 26px; }
          @keyframes pop { 0% { transform: scale(0.5); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
          .scene-06-posted h3 { font: 500 18px/1.2 Geist, system-ui, sans-serif; margin: 0 0 6px; letter-spacing: -0.015em; }
          .scene-06-posted .meta { color: rgba(10,10,10,0.55); font-size: 12px; }
          .scene-06-posted .meta strong { color: #0a0a0a; font-weight: 500; }
          .scene-06-posted .stats { display: flex; gap: 22px; justify-content: center; margin-top: 16px; padding-top: 16px; border-top: 1px solid rgba(10,10,10,0.06); }
          .scene-06-posted .stats div { text-align: center; }
          .scene-06-posted .stats .v { font: 500 16px/1 Geist, system-ui, sans-serif; letter-spacing: -0.01em; }
          .scene-06-posted .stats .l { font-size: 10px; color: rgba(10,10,10,0.5); margin-top: 4px; }
          .scene-06-posted #vero-bubble { display: flex; align-items: flex-end; gap: 10px; margin-top: 22px; max-width: 480px; align-self: stretch; justify-content: center; }
          .scene-06-posted .bubble-content { background: #fff; border: 1px solid rgba(10,10,10,0.1); border-radius: 14px 14px 14px 4px; padding: 12px 14px; max-width: 340px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
          .scene-06-posted .bubble-text { font-size: 13px; margin-bottom: 8px; }
          .scene-06-posted .bubble-actions { display: flex; gap: 6px; }
          .scene-06-posted #vero-yes { padding: 6px 12px; font-size: 12px; }
        </style>
        <div class="success-card">
          <div class="check-big"><svg viewBox="0 0 26 26" fill="none"><path d="M6 13L11 18L20 8" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <h3>Posted to SAP S/4</h3>
          <div class="meta">Doc <strong class="mono">#4421891</strong> \xB7 cleared 4 invoices \xB7 journal balanced</div>
          <div class="stats">
            <div><div class="v mono">2.3s</div><div class="l">End-to-end</div></div>
            <div><div class="v mono">\u20AC530K</div><div class="l">Cleared</div></div>
            <div><div class="v mono">0</div><div class="l">Manual touches</div></div>
          </div>
        </div>
        <div id="vero-bubble">
          <div class="vero-av thinking"><span class="vero-av-eyes"><span class="vero-av-eye">0</span><span class="vero-av-eye vero-av-eye-r">0</span></span></div>
          <div class="bubble-content" id="vero-card">
            <div class="bubble-text">Acme sends like this every morning. Want me to handle them automatically from now on?</div>
            <div class="bubble-actions">
              <button class="btn" id="vero-yes">Yes, automate</button>
              <button class="btn btn-light">Not now</button>
            </div>
          </div>
        </div>
      `},{id:"07-schedule",title:"Step 7 \xB7 Schedule",body:'Vero proposes the rules. <span class="grad">You stay in control</span> of every threshold.',tooltipSide:"left",spotlight:"#approve-btn",advanceOn:{click:"#approve-btn"},html:`${j}
        <style>
          .scene-07-schedule { display: flex; flex-direction: column; align-items: center; justify-content: center; }
          .scene-07-schedule .modal { background: #fff; border-radius: 14px; box-shadow: 0 12px 40px rgba(0,0,0,0.12); width: 520px; overflow: hidden; border: 1px solid rgba(10,10,10,0.08); }
          .scene-07-schedule .m-head { padding: 18px 22px; border-bottom: 1px solid rgba(10,10,10,0.06); display: flex; align-items: center; gap: 10px; }
          .scene-07-schedule .m-title { font-weight: 500; font-size: 15px; }
          .scene-07-schedule .m-sub { font-size: 11px; color: rgba(10,10,10,0.55); margin-top: 1px; }
          .scene-07-schedule .m-body { padding: 18px 22px; }
          .scene-07-schedule .field-block { margin-bottom: 14px; }
          .scene-07-schedule .field-block:last-child { margin-bottom: 0; }
          .scene-07-schedule .fl { display: inline-flex; align-items: center; gap: 6px; font: 500 10px/1 Geist; letter-spacing: 0.06em; text-transform: uppercase; color: rgba(10,10,10,0.5); margin-bottom: 6px; }
          .scene-07-schedule .fl svg { width: 12px; height: 12px; stroke: currentColor; stroke-width: 2; fill: none; stroke-linecap: round; stroke-linejoin: round; }
          .scene-07-schedule .fv { padding: 10px 12px; background: rgba(10,10,10,0.03); border: 1px solid rgba(10,10,10,0.06); border-radius: 8px; font-size: 13px; display: flex; align-items: center; justify-content: space-between; }
          .scene-07-schedule .fv .edit { color: rgba(10,10,10,0.4); font-size: 11px; cursor: pointer; }
          .scene-07-schedule .fv .edit:hover { color: #0a0a0a; }
          .scene-07-schedule .m-foot { padding: 14px 22px; border-top: 1px solid rgba(10,10,10,0.06); display: flex; align-items: center; justify-content: space-between; background: rgba(10,10,10,0.02); }
          .scene-07-schedule .foot-note { font-size: 11px; color: rgba(10,10,10,0.5); display: flex; align-items: center; gap: 6px; }
          .scene-07-schedule .foot-dot { width: 6px; height: 6px; border-radius: 50%; background: #019273; }
        </style>
        <div class="modal">
          <div class="m-head">
            <div class="vero-av sz-sm thinking"><span class="vero-av-eyes"><span class="vero-av-eye">0</span><span class="vero-av-eye vero-av-eye-r">0</span></span></div>
            <div>
              <div class="m-title">Set up daily run</div>
              <div class="m-sub">Vero proposes, you approve every detail</div>
            </div>
          </div>
          <div class="m-body">
            <div class="field-block">
              <div class="fl">${n.mail} Trigger</div>
              <div class="fv"><span>Email arrives in inbox \xB7 vendor matches "Acme"</span><span class="edit">Edit</span></div>
            </div>
            <div class="field-block">
              <div class="fl">${n.zap} Action</div>
              <div class="fv"><span>Extract, match, post journal entry</span><span class="edit">Edit</span></div>
            </div>
            <div class="field-block">
              <div class="fl">${n.shield} Confidence threshold</div>
              <div class="fv"><span class="mono">\u2265 95% auto-post \xB7 80 to 94% surface to you</span><span class="edit">Edit</span></div>
            </div>
            <div class="field-block">
              <div class="fl">${n.clock} Schedule</div>
              <div class="fv"><span>Run within 5 min of arrival \xB7 check every 8:00 AM</span><span class="edit">Edit</span></div>
            </div>
          </div>
          <div class="m-foot">
            <div class="foot-note"><span class="foot-dot"></span>Pauseable \xB7 auditable \xB7 changes logged</div>
            <button class="btn" id="approve-btn">Approve & schedule</button>
          </div>
        </div>
      `},{id:"08-done",title:"Step 8 \xB7 Live",body:'Done. Vero handles it tomorrow at <span class="grad">8:00 AM</span>, and every morning after.',tooltipSide:"right",spotlight:"#tile",html:`${j}
        <style>
          .scene-08-done { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px; }
          .scene-08-done .greeting { text-align: center; max-width: 520px; }
          .scene-08-done .greeting h3 { font: 500 22px/1.2 Geist, system-ui, sans-serif; margin: 0 0 6px; letter-spacing: -0.02em; }
          .scene-08-done .greeting p { color: rgba(10,10,10,0.55); margin: 0; font-size: 13px; }
          .scene-08-done #tile { background: #fff; border: 1px solid rgba(10,10,10,0.1); border-radius: 14px; padding: 18px 22px; width: 480px; box-shadow: 0 4px 14px rgba(0,0,0,0.06); }
          .scene-08-done .tile-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
          .scene-08-done .tile-title { display: flex; align-items: center; gap: 10px; font-weight: 500; }
          .scene-08-done .tile-icon { width: 32px; height: 32px; border-radius: 8px; background: linear-gradient(135deg, #1e3a8a, #1e40af); display: inline-flex; align-items: center; justify-content: center; color: #fff; }
          .scene-08-done .tile-icon svg { width: 16px; height: 16px; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; fill: none; }
          .scene-08-done .tile-status { display: flex; align-items: center; gap: 6px; font-size: 11px; color: #019273; font-weight: 500; }
          .scene-08-done .tile-pulse { width: 7px; height: 7px; border-radius: 50%; background: #019273; box-shadow: 0 0 0 0 rgba(1,146,115,0.5); animation: pulse 2s ease-out infinite; }
          @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(1,146,115,0.5); } 100% { box-shadow: 0 0 0 12px rgba(1,146,115,0); } }
          .scene-08-done .tile-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; padding-top: 14px; border-top: 1px solid rgba(10,10,10,0.06); }
          .scene-08-done .tile-stat .v { font: 500 16px/1 Geist; letter-spacing: -0.01em; }
          .scene-08-done .tile-stat .l { font-size: 10px; color: rgba(10,10,10,0.5); margin-top: 4px; }
        </style>
        <div class="greeting">
          <h3>Live in the cockpit</h3>
          <p>Vero is now watching the inbox. You'll see results in tomorrow's morning briefing.</p>
        </div>
        <div id="tile">
          <div class="tile-head">
            <div class="tile-title">
              <span class="tile-icon">${n.factory}</span>
              <div>
                <div>Acme Industries \xB7 Daily Cash Application</div>
                <div style="font-size: 11px; color: rgba(10,10,10,0.5); margin-top: 2px;">Configured by you \xB7 22 Apr</div>
              </div>
            </div>
            <div class="tile-status">
              <span class="tile-pulse"></span>
              Active
            </div>
          </div>
          <div class="tile-grid">
            <div class="tile-stat"><div class="v mono">8:00 AM</div><div class="l">Next run</div></div>
            <div class="tile-stat"><div class="v mono">\u20AC530K</div><div class="l">Last processed</div></div>
            <div class="tile-stat"><div class="v mono">\u2265 95%</div><div class="l">Auto-post threshold</div></div>
          </div>
        </div>
      `}]};y(J);function Q(e){return e>=36?"red":e>=16?"amber":"green"}var M=[{co:a.energy,balance:"\u20AC179K",days:45,last:"Last Fri"},{co:a.logistics,balance:"\u20AC92K",days:18,last:"Never"},{co:a.pharma,balance:"\u20AC47K",days:22,last:"Email sent"},{co:a.retail,balance:"\u20AC18K",days:60,last:"3d ago"},{co:a.tech,balance:"\u20AC22K",days:35,last:"Call Thu"},{co:a.food,balance:"\u20AC14K",days:28,last:"1w ago"},{co:a.motors,balance:"\u20AC63K",days:12,last:"Never"},{co:a.build,balance:"\u20AC38K",days:40,last:"Email sent"}],Z="\u20AC475K",S=M.length,A=`
  <style>
    /* Base scene frame */
    .scene[class*="scene-c-"] { position: absolute; inset: 0; padding: 24px 28px; font: 13px/1.45 Geist, system-ui, sans-serif; color: #0a0a0a; }
    .scene[class*="scene-c-"] h2 { font: 500 18px/1.2 Geist, system-ui, sans-serif; letter-spacing: -0.015em; margin: 0; }
    .scene[class*="scene-c-"] .head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
    .scene[class*="scene-c-"] .head-sub { color: rgba(10,10,10,0.5); font-size: 12px; }
    .scene[class*="scene-c-"] .mono { font-variant-numeric: tabular-nums; letter-spacing: -0.01em; }
    .scene[class*="scene-c-"] .pill { display: inline-flex; align-items: center; gap: 4px; font-size: 11px; font-weight: 500; padding: 3px 8px; border-radius: 999px; }
    .scene[class*="scene-c-"] .pill.green { background: rgba(1,146,115,0.12); color: #019273; }
    .scene[class*="scene-c-"] .pill.amber { background: rgba(239,137,1,0.12); color: #b75e00; }
    .scene[class*="scene-c-"] .pill.red   { background: rgba(239,68,68,0.14); color: #b91c1c; }
    .scene[class*="scene-c-"] .pill.gray  { background: rgba(10,10,10,0.06); color: rgba(10,10,10,0.6); }
    .scene[class*="scene-c-"] .pill.violet{ background: rgba(130,89,247,0.12); color: #6d28d9; }
    .scene[class*="scene-c-"] .pill.blue  { background: rgba(14,165,233,0.12); color: #0369a1; }
    .scene[class*="scene-c-"] .pill svg { width: 10px; height: 10px; stroke: currentColor; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; fill: none; }
    .scene[class*="scene-c-"] .btn { appearance: none; border: 0; cursor: pointer; background: #0a0a0a; color: #fff; font: 500 12px/1 Geist, system-ui, sans-serif; padding: 8px 14px; border-radius: 8px; display: inline-flex; align-items: center; gap: 6px; }
    .scene[class*="scene-c-"] .btn-light { background: #fff; color: #0a0a0a; border: 1px solid rgba(10,10,10,0.1); }

    /* Worklist table \u2014 the common layout across scenes 1, 2, 5 */
    .scene[class*="scene-c-"] .card { background: #fff; border: 1px solid rgba(10,10,10,0.08); border-radius: 10px; overflow: hidden; }
    .scene[class*="scene-c-"] .card-head { padding: 14px 18px; border-bottom: 1px solid rgba(10,10,10,0.06); display: flex; align-items: center; justify-content: space-between; }
    .scene[class*="scene-c-"] .card-title { font-weight: 500; }
    .scene[class*="scene-c-"] .card-meta  { font-size: 11px; color: rgba(10,10,10,0.5); margin-top: 2px; }
    .scene[class*="scene-c-"] .wl-row { display: grid; grid-template-columns: 40px 1fr 50px 90px 70px 1fr; align-items: center; gap: 10px; padding: 10px 18px; font-size: 12px; border-bottom: 1px solid rgba(10,10,10,0.04); transition: opacity 400ms ease, background 400ms ease; }
    .scene[class*="scene-c-"] .wl-row:last-child { border-bottom: 0; }
    .scene[class*="scene-c-"] .wl-co-name { font-weight: 500; }
    .scene[class*="scene-c-"] .wl-co-sector { font-size: 10px; color: rgba(10,10,10,0.5); margin-top: 1px; }
    .scene[class*="scene-c-"] .wl-flag { display: inline-flex; align-items: center; gap: 6px; }
    .scene[class*="scene-c-"] .wl-flag-code { font-size: 10px; color: rgba(10,10,10,0.5); letter-spacing: 0.04em; text-transform: uppercase; }
    .scene[class*="scene-c-"] .wl-bal { text-align: right; font-weight: 500; }
    .scene[class*="scene-c-"] .wl-days { display: flex; justify-content: flex-end; }
    .scene[class*="scene-c-"] .wl-status { display: flex; justify-content: flex-end; }

    /* Dimming non-focused rows (scenes 3 + 4) */
    .scene[class*="scene-c-"] .wl-row.dim { opacity: 0.25; }
  </style>
`;function E(e,s={}){let{status:t="",dim:i=!1,highlight:o=!1,id:r=""}=s,l=["wl-row"];i&&l.push("dim"),o&&l.push("highlight");let b=t||`<span style="font-size: 11px; color: rgba(10,10,10,0.5);">${e.last}</span>`,$=Q(e.days);return`
    <div class="${l.join(" ")}"${r?` id="${r}"`:""}>
      ${c(e.co)}
      <div>
        <div class="wl-co-name">${e.co.name}</div>
        <div class="wl-co-sector">${e.co.sector}</div>
      </div>
      <span class="wl-flag" title="${e.co.country}">${W(e.co.country)}</span>
      <span class="wl-bal mono">${e.balance}</span>
      <span class="wl-days"><span class="pill ${$}">${e.days}d</span></span>
      <span class="wl-status">${b}</span>
    </div>
  `}var X={id:"collections",tag:"COLLECTIONS \xB7 INTERACTIVE DEMO",coverLabel:"See collections in 30 seconds",closing:{headline:'8 PTPs captured. 3 escalations routed. <span class="grad">Hours back.</span>',sub:"Want Vero to run your morning queue, every morning?"},scenes:[{id:"c-01-worklist",title:"Step 1 \xB7 Worklist",body:`${S} accounts overdue today. Vero works them all at once: calls in <span class="grad">their language</span>, emails in your tone.`,tooltipSide:"left",spotlight:"#run-batch",advanceOn:{click:"#run-batch"},html:`${A}
        <div class="head">
          <div>
            <h2>Overdue worklist</h2>
            <div class="head-sub">${S} accounts \xB7 ${Z} past due \xB7 updated 2 min ago</div>
          </div>
          <button class="btn" id="run-batch">
            Run batch (${S}) \u2192
          </button>
        </div>
        <div class="card">
          <div class="card-head">
            <div>
              <div class="card-title">Accounts overdue</div>
              <div class="card-meta">Sorted by days overdue \xB7 descending</div>
            </div>
            <span style="font-size: 11px; color: rgba(10,10,10,0.5);">Last touch \xB7 next action</span>
          </div>
          ${M.map(e=>E(e)).join("")}
        </div>
      `},{id:"c-02-batch",title:"Step 2 \xB7 Batch running",body:`One queue, ${S} parallel workstreams. Vero follows your <span class="grad">playbook</span> for each: channel, language, escalation rules.`,tooltipSide:"left",spotlight:"#wl-running",html:`${A}
        <style>
          .scene-c-02-batch .runner-bar { background: #fff; border: 1px solid rgba(130,89,247,0.3); border-radius: 10px; padding: 10px 16px; margin-bottom: 12px; display: flex; align-items: center; gap: 14px; box-shadow: 0 1px 2px rgba(0,0,0,0.03); }
          .scene-c-02-batch .runner-spin { width: 14px; height: 14px; border-radius: 50%; border: 2px solid rgba(130,89,247,0.2); border-top-color: #8259f7; animation: spin 0.9s linear infinite; }
          @keyframes spin { 100% { transform: rotate(360deg); } }
          .scene-c-02-batch .runner-label { font-weight: 500; font-size: 12px; }
          .scene-c-02-batch .runner-meta { color: rgba(10,10,10,0.5); font-size: 11px; }
          .scene-c-02-batch .runner-progress { flex: 1; height: 3px; background: rgba(10,10,10,0.06); border-radius: 2px; overflow: hidden; }
          .scene-c-02-batch .runner-bar-fill { height: 100%; background: linear-gradient(90deg, #8259f7, #ff5043); animation: batchfill 4s ease-out forwards; }
          @keyframes batchfill { 0% { width: 0; } 100% { width: 100%; } }

          /* Per-row status pills \u2014 each row's pill animates through 2 states with staggered delay */
          .scene-c-02-batch .wl-status .p-stages { position: relative; display: inline-block; min-width: 100px; text-align: right; }
          .scene-c-02-batch .wl-status .p-stage { position: absolute; right: 0; top: 0; opacity: 0; animation: pstage 4s ease-in-out forwards; white-space: nowrap; }
          .scene-c-02-batch .wl-status .p-stage.s1 { animation-delay: 0s; }
          .scene-c-02-batch .wl-status .p-stage.s2 { animation-delay: 1.3s; }
          .scene-c-02-batch .wl-status .p-stage.s3 { animation-delay: 2.8s; }
          @keyframes pstage {
            0%, 8% { opacity: 0; transform: translateY(4px); }
            15%, 40% { opacity: 1; transform: translateY(0); }
            50%, 100% { opacity: 0; transform: translateY(-4px); }
          }
          .scene-c-02-batch .wl-status .p-stage.final { animation: pstageFinal 4s ease-in-out forwards; animation-delay: 2.8s; }
          @keyframes pstageFinal {
            0%, 65% { opacity: 0; transform: translateY(4px); }
            75%, 100% { opacity: 1; transform: translateY(0); }
          }
          /* Staggered starts */
          .scene-c-02-batch .wl-row[data-idx="0"] .p-stages { animation-delay: 0s; }
          .scene-c-02-batch .wl-row[data-idx="1"] .p-stages { animation-delay: 0.15s; }
          .scene-c-02-batch .wl-row[data-idx="2"] .p-stages { animation-delay: 0.3s; }
          .scene-c-02-batch .wl-row[data-idx="3"] .p-stages { animation-delay: 0.45s; }
          .scene-c-02-batch .wl-row[data-idx="4"] .p-stages { animation-delay: 0.6s; }
          .scene-c-02-batch .wl-row[data-idx="5"] .p-stages { animation-delay: 0.75s; }
          .scene-c-02-batch .wl-row[data-idx="6"] .p-stages { animation-delay: 0.9s; }
          .scene-c-02-batch .wl-row[data-idx="7"] .p-stages { animation-delay: 1.05s; }
        </style>
        <div class="head">
          <div>
            <h2>Batch running</h2>
            <div class="head-sub">${S} accounts in flight \xB7 calls in native language, emails localized</div>
          </div>
          <span class="pill violet">\u25CF Live</span>
        </div>
        <div class="runner-bar">
          <div class="runner-spin"></div>
          <div>
            <div class="runner-label">Vero is working the queue</div>
            <div class="runner-meta">Playbook v3 \xB7 5 languages active</div>
          </div>
          <div class="runner-progress"><div class="runner-bar-fill"></div></div>
          <span class="runner-meta mono">00:03.7</span>
        </div>
        <div class="card" id="wl-running">
          ${M.map((e,s)=>{let t=['<span class="pill green"><span>\u2713</span> PTP \u20AC179K</span>','<span class="pill blue"><span>\u2709</span> Email sent</span>','<span class="pill amber"><span>\u26A0</span> Escalated</span>','<span class="pill amber"><span>\u26A0</span> Escalated</span>','<span class="pill amber"><span>\u26A0</span> Escalated</span>','<span class="pill green"><span>\u2713</span> PTP \u20AC14K</span>','<span class="pill green"><span>\u2713</span> Paid today</span>','<span class="pill blue"><span>\u2709</span> Reminder sent</span>'][s],o=`
              <div class="p-stages">
                <span class="p-stage s1"><span class="pill gray">\u25CF Queued</span></span>
                <span class="p-stage s2"><span class="pill violet">\u25CF ${s===1||s===7?"Emailing":"Calling"}</span></span>
                <span class="p-stage final">${t}</span>
              </div>
            `;return E(e,{status:o}).replace('<div class="wl-row',`<div data-idx="${s}" class="wl-row`)}).join("")}
        </div>
      `},{id:"c-03-ptp",title:"Step 3 \xB7 Promise to pay",body:`Maria at ${a.energy.name} committed <span class="grad">\u20AC179K</span> by Friday. Logged, with the full transcript attached.`,tooltipSide:"left",spotlight:"#ptp-card",html:`${A}
        <style>
          .scene-c-03-ptp .wrap { display: grid; grid-template-columns: 1.2fr 1fr; gap: 14px; align-items: start; }
          .scene-c-03-ptp #ptp-card { background: #fff; border: 1px solid rgba(10,10,10,0.08); border-radius: 10px; padding: 18px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
          .scene-c-03-ptp .call-head { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; }
          .scene-c-03-ptp .call-avatar { width: 40px; height: 40px; border-radius: 50%; background: rgba(10,10,10,0.04); display: inline-flex; align-items: center; justify-content: center; font: 500 13px/1 Geist; letter-spacing: -0.01em; }
          .scene-c-03-ptp .call-name { font-weight: 500; font-size: 13px; }
          .scene-c-03-ptp .call-sub { font-size: 11px; color: rgba(10,10,10,0.5); margin-top: 2px; }
          .scene-c-03-ptp .call-meta-row { display: flex; gap: 8px; align-items: center; margin-bottom: 12px; flex-wrap: wrap; }
          .scene-c-03-ptp .call-meta-row .pill svg { width: 10px; height: 10px; }
          .scene-c-03-ptp .transcript { background: rgba(10,10,10,0.03); border-radius: 8px; padding: 12px 14px; margin-bottom: 12px; font-size: 12px; color: rgba(10,10,10,0.7); font-style: italic; line-height: 1.55; border-left: 3px solid rgba(130,89,247,0.4); }
          .scene-c-03-ptp .outcome { background: rgba(1,146,115,0.08); border: 1px solid rgba(1,146,115,0.25); border-radius: 8px; padding: 12px 14px; display: flex; align-items: center; justify-content: space-between; }
          .scene-c-03-ptp .outcome-label { font-weight: 500; color: #019273; font-size: 12px; display: flex; align-items: center; gap: 8px; }
          .scene-c-03-ptp .outcome-label svg { width: 14px; height: 14px; }
          .scene-c-03-ptp .outcome-amt { font-weight: 500; font-variant-numeric: tabular-nums; color: #0a0a0a; }
          .scene-c-03-ptp .outcome-date { font-size: 11px; color: rgba(10,10,10,0.55); margin-top: 2px; }
        </style>
        <div class="head">
          <h2>${a.energy.name}</h2>
          <span class="pill green">Resolved \xB7 autonomous</span>
        </div>
        <div class="wrap">
          <div class="card">
            <div class="card-head">
              <div>
                <div class="card-title">Worklist</div>
                <div class="card-meta">${S} accounts \xB7 1 focused</div>
              </div>
            </div>
            ${M.map((e,s)=>E(e,{dim:s!==0,status:s===0?'<span class="pill green">PTP \u20AC179K</span>':""})).join("")}
          </div>
          <div id="ptp-card">
            <div class="call-head">
              ${c(a.energy)}
              <div>
                <div class="call-name">${a.energy.contact}</div>
                <div class="call-sub">AP \xB7 ${a.energy.name}</div>
              </div>
            </div>
            <div class="call-meta-row">
              <span class="pill violet">${n.phone} AI call \xB7 3:42</span>
              <span class="pill green">Positive sentiment</span>
              <span class="pill gray">\u{1F1F5}\u{1F1F9} Portuguese</span>
            </div>
            <div class="transcript">
              "\u2026Posso transferir \u20AC179,000 at\xE9 sexta-feira. Refer\xEAncia da fatura 0019, como sempre."
              <div style="font-size: 10px; color: rgba(10,10,10,0.45); font-style: normal; margin-top: 6px;">Auto-translated: "I can wire \u20AC179,000 by Friday. Invoice reference 0019, as always."</div>
            </div>
            <div class="outcome">
              <div>
                <div class="outcome-label">${n.check} Promise to pay logged</div>
                <div class="outcome-date">Reminder scheduled for Thu, 24 Apr</div>
              </div>
              <div style="text-align: right;">
                <div class="outcome-amt">\u20AC179,000</div>
                <div class="outcome-date">Due Fri 25 Apr</div>
              </div>
            </div>
          </div>
        </div>
      `},{id:"c-04-fallback",title:"Step 4 \xB7 Fallback",body:'No answer? Vero switches to email, in their language, <span class="grad">per your rules</span>, no prompt required.',tooltipSide:"left",spotlight:"#fallback-card",html:`${A}
        <style>
          .scene-c-04-fallback .wrap { display: grid; grid-template-columns: 1.2fr 1fr; gap: 14px; align-items: start; }
          .scene-c-04-fallback #fallback-card { background: #fff; border: 1px solid rgba(10,10,10,0.08); border-radius: 10px; padding: 18px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
          .scene-c-04-fallback .call-head { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
          .scene-c-04-fallback .call-name { font-weight: 500; font-size: 13px; }
          .scene-c-04-fallback .call-sub { font-size: 11px; color: rgba(10,10,10,0.5); margin-top: 2px; }
          .scene-c-04-fallback .flow { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
          .scene-c-04-fallback .flow-step { flex: 1; padding: 12px; border-radius: 8px; border: 1px solid rgba(10,10,10,0.08); text-align: center; background: #fff; position: relative; }
          .scene-c-04-fallback .flow-step.failed { background: rgba(10,10,10,0.02); color: rgba(10,10,10,0.4); }
          .scene-c-04-fallback .flow-step.active { border-color: rgba(14,165,233,0.4); background: rgba(14,165,233,0.04); }
          .scene-c-04-fallback .flow-step .icon { width: 22px; height: 22px; margin: 0 auto 6px; }
          .scene-c-04-fallback .flow-step .icon svg { width: 18px; height: 18px; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; fill: none; }
          .scene-c-04-fallback .flow-step.failed .icon svg { stroke: rgba(10,10,10,0.3); }
          .scene-c-04-fallback .flow-step.active .icon svg { stroke: #0369a1; }
          .scene-c-04-fallback .flow-step .label { font-size: 11px; font-weight: 500; }
          .scene-c-04-fallback .flow-step .sub { font-size: 10px; color: rgba(10,10,10,0.45); margin-top: 2px; }
          .scene-c-04-fallback .flow-arrow { color: rgba(10,10,10,0.3); }
          .scene-c-04-fallback .flow-arrow svg { width: 14px; height: 14px; stroke: currentColor; stroke-width: 2; fill: none; }
          .scene-c-04-fallback .rule-box { background: rgba(10,10,10,0.03); border-radius: 8px; padding: 12px 14px; font-size: 11px; color: rgba(10,10,10,0.65); }
          .scene-c-04-fallback .rule-label { text-transform: uppercase; letter-spacing: 0.06em; font-size: 10px; font-weight: 500; color: rgba(10,10,10,0.5); margin-bottom: 4px; }
          .scene-c-04-fallback .rule-chain { font-variant-numeric: tabular-nums; }
        </style>
        <div class="head">
          <h2>${a.logistics.name}</h2>
          <span class="pill blue">Reminder sent \xB7 autonomous</span>
        </div>
        <div class="wrap">
          <div class="card">
            <div class="card-head">
              <div>
                <div class="card-title">Worklist</div>
                <div class="card-meta">${S} accounts \xB7 1 focused</div>
              </div>
            </div>
            ${M.map((e,s)=>E(e,{dim:s!==1,status:s===1?'<span class="pill blue">Email sent</span>':""})).join("")}
          </div>
          <div id="fallback-card">
            <div class="call-head">
              ${c(a.logistics)}
              <div>
                <div class="call-name">${a.logistics.contact}</div>
                <div class="call-sub">Finance \xB7 ${a.logistics.name}</div>
              </div>
            </div>
            <div class="flow">
              <div class="flow-step failed">
                <div class="icon">${n.phone}</div>
                <div class="label">AI call</div>
                <div class="sub">No answer \xB7 2 tries</div>
              </div>
              <div class="flow-arrow">${n.arrowRight}</div>
              <div class="flow-step active">
                <div class="icon">${n.mail}</div>
                <div class="label">Email</div>
                <div class="sub">Sent \xB7 08:42 GMT</div>
              </div>
            </div>
            <div class="rule-box">
              <div class="rule-label">Escalation ladder</div>
              <div class="rule-chain">Voicemail \u2192 email (EN template) \u2192 call tomorrow 09:00 \u2192 escalate +1 level</div>
            </div>
          </div>
        </div>
      `},{id:"c-05-escalation",title:"Step 5 \xB7 Escalation",body:`Three accounts Vero shouldn't auto-resolve. Each lands in <span class="grad">your queue</span> with the full evidence pack.`,tooltipSide:"left",spotlight:"#esc-review-btn",advanceOn:{click:"#esc-review-btn"},html:`${A}
        <style>
          .scene-c-05-escalation #escalation-bar { background: #fff; border: 1.5px solid rgba(239,68,68,0.4); border-radius: 10px; padding: 14px 18px; display: flex; align-items: center; gap: 14px; margin-bottom: 14px; box-shadow: 0 2px 8px rgba(239,68,68,0.08); }
          .scene-c-05-escalation #escalation-bar .alert-icon { width: 32px; height: 32px; border-radius: 50%; background: rgba(239,68,68,0.12); display: inline-flex; align-items: center; justify-content: center; color: #b91c1c; flex-shrink: 0; }
          .scene-c-05-escalation #escalation-bar .alert-icon svg { width: 18px; height: 18px; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; fill: none; }
          .scene-c-05-escalation #escalation-bar .alert-text { flex: 1; }
          .scene-c-05-escalation #escalation-bar .alert-title { font-weight: 500; font-size: 13px; }
          .scene-c-05-escalation #escalation-bar .alert-sub { font-size: 11px; color: rgba(10,10,10,0.55); margin-top: 2px; }
          .scene-c-05-escalation .wl-row.esc { background: rgba(239,137,1,0.05); }
          .scene-c-05-escalation .esc-reason { font-size: 11px; color: rgba(10,10,10,0.6); font-style: italic; }
        </style>
        <div class="head" style="margin-bottom: 10px;">
          <div>
            <h2>Escalations</h2>
            <div class="head-sub">${S} accounts processed \xB7 3 need your call</div>
          </div>
          <span class="pill red">${n.alert} Action required</span>
        </div>
        <div id="escalation-bar">
          <div class="alert-icon">${n.alert}</div>
          <div class="alert-text">
            <div class="alert-title">3 disputes detected \xB7 needs you</div>
            <div class="alert-sub">Vero packaged the full evidence per case. Review and respond at your own pace.</div>
          </div>
          <button class="btn" id="esc-review-btn">Review queue \u2192</button>
        </div>
        <div class="card">
          ${M.map((e,s)=>{if(!(s>=2&&s<=4))return E(e,{dim:!0,status:s===0?'<span class="pill green">PTP \u20AC179K</span>':s===1?'<span class="pill blue">Email sent</span>':s===5?'<span class="pill green">PTP \u20AC14K</span>':s===6?'<span class="pill green">Paid today</span>':'<span class="pill blue">Reminder sent</span>'});let o=`
              <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 2px;">
                <span class="pill amber">\u26A0 Escalated</span>
                <span class="esc-reason">${{2:"Price disagreement on PO 4421",3:"Short-pay \u20AC4,230 \xB7 trade promo?",4:"Invoice disputed \xB7 subscription cadence"}[s]}</span>
              </div>
            `;return E(e,{status:o}).replace('class="wl-row"','class="wl-row esc"')}).join("")}
        </div>
      `},{id:"c-06-done",title:"Step 6 \xB7 Done",body:'Eight minutes of Vero. Hours saved, <span class="grad">every morning</span>, if you want.',tooltipSide:"right",spotlight:"#coll-vero-card",advanceOn:{click:"#coll-yes"},html:`${A}
        <style>
          .scene-c-06-done { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px; padding-top: 40px; }
          .scene-c-06-done .greeting { text-align: center; max-width: 540px; }
          .scene-c-06-done .greeting h3 { font: 500 22px/1.2 Geist, system-ui, sans-serif; margin: 0 0 6px; letter-spacing: -0.02em; }
          .scene-c-06-done .greeting p { color: rgba(10,10,10,0.55); margin: 0; font-size: 13px; }
          .scene-c-06-done .summary { background: #fff; border: 1px solid rgba(10,10,10,0.1); border-radius: 14px; padding: 20px 24px; width: 560px; box-shadow: 0 4px 14px rgba(0,0,0,0.06); }
          .scene-c-06-done .summary-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
          .scene-c-06-done .summary-title { display: flex; align-items: center; gap: 10px; font-weight: 500; }
          .scene-c-06-done .summary-status { display: flex; align-items: center; gap: 6px; font-size: 11px; color: #019273; font-weight: 500; }
          .scene-c-06-done .summary-grid { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 14px; padding-top: 14px; border-top: 1px solid rgba(10,10,10,0.06); }
          .scene-c-06-done .summary-stat .v { font: 500 18px/1 Geist; letter-spacing: -0.01em; }
          .scene-c-06-done .summary-stat .l { font-size: 10px; color: rgba(10,10,10,0.5); margin-top: 4px; }

          .scene-c-06-done .vero-bubble { display: flex; align-items: flex-end; gap: 10px; max-width: 520px; }
          .scene-c-06-done #coll-vero-card { background: #fff; border: 1px solid rgba(10,10,10,0.1); border-radius: 14px 14px 14px 4px; padding: 12px 14px; max-width: 420px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
          .scene-c-06-done .bubble-text { font-size: 13px; margin-bottom: 8px; }
          .scene-c-06-done .bubble-actions { display: flex; gap: 6px; }
          .scene-c-06-done #coll-yes { padding: 6px 12px; font-size: 12px; }
        </style>
        <div class="greeting">
          <h3>Morning queue clear</h3>
          <p>Every contact made, every outcome logged. Here's what happened.</p>
        </div>
        <div class="summary">
          <div class="summary-head">
            <div class="summary-title">
              <span style="width: 26px; height: 26px; border-radius: 6px; background: linear-gradient(135deg, #8259f7, #5b21b6); display: inline-flex; align-items: center; justify-content: center; color: #fff;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </span>
              Today's collection run
            </div>
            <div class="summary-status">
              <span style="width: 6px; height: 6px; border-radius: 50%; background: #019273;"></span>
              Complete \xB7 8 min
            </div>
          </div>
          <div class="summary-grid">
            <div class="summary-stat"><div class="v mono">3</div><div class="l">PTPs captured</div></div>
            <div class="summary-stat"><div class="v mono">\u20AC372K</div><div class="l">Cash secured</div></div>
            <div class="summary-stat"><div class="v mono">3</div><div class="l">Escalated to you</div></div>
            <div class="summary-stat"><div class="v mono">0</div><div class="l">Manual touches</div></div>
          </div>
        </div>
        <div class="vero-bubble">
          <div class="vero-av thinking"><span class="vero-av-eyes"><span class="vero-av-eye">0</span><span class="vero-av-eye vero-av-eye-r">0</span></span></div>
          <div id="coll-vero-card">
            <div class="bubble-text">Your morning queue is clear. Want me to run this every day at 08:00?</div>
            <div class="bubble-actions">
              <button class="btn" id="coll-yes">Yes, automate</button>
              <button class="btn btn-light">Not now</button>
            </div>
          </div>
        </div>
      `}]};y(X);var q=[{co:a.retail,amount:"\u20AC4,230",reason:"Short-pay \xB7 possible trade promo",age:"2h",hero:!0},{co:a.pharma,amount:"\u20AC1,200",reason:"Price disagreement on PO 4421",age:"5h",hero:!1},{co:a.tech,amount:"\u20AC850",reason:"Subscription cadence mismatch",age:"1d",hero:!1},{co:a.fashion,amount:"\u20AC2,100",reason:"Quality claim \xB7 SKU 8842",age:"2d",hero:!1},{co:a.build,amount:"\u20AC300",reason:"Unexpected shipping fee",age:"3d",hero:!1}],B=`
  <style>
    .scene[class*="scene-d-"] { position: absolute; inset: 0; padding: 22px 28px; font: 13px/1.45 Geist, system-ui, sans-serif; color: #0a0a0a; }
    .scene[class*="scene-d-"] h2 { font: 500 18px/1.2 Geist, system-ui, sans-serif; letter-spacing: -0.015em; margin: 0; }
    .scene[class*="scene-d-"] .head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
    .scene[class*="scene-d-"] .head-sub { color: rgba(10,10,10,0.5); font-size: 12px; margin-top: 2px; }
    .scene[class*="scene-d-"] .mono { font-variant-numeric: tabular-nums; letter-spacing: -0.01em; }
    .scene[class*="scene-d-"] .card { background: #fff; border: 1px solid rgba(10,10,10,0.08); border-radius: 10px; }
    .scene[class*="scene-d-"] .btn { appearance: none; border: 0; cursor: pointer; background: #0a0a0a; color: #fff; font: 500 12px/1 Geist, system-ui, sans-serif; padding: 8px 14px; border-radius: 8px; display: inline-flex; align-items: center; gap: 6px; }
    .scene[class*="scene-d-"] .btn-light { background: #fff; color: #0a0a0a; border: 1px solid rgba(10,10,10,0.1); }
    .scene[class*="scene-d-"] .pill { display: inline-flex; align-items: center; gap: 4px; font-size: 11px; font-weight: 500; padding: 3px 8px; border-radius: 999px; }
    .scene[class*="scene-d-"] .pill.green { background: rgba(1,146,115,0.12); color: #019273; }
    .scene[class*="scene-d-"] .pill.amber { background: rgba(239,137,1,0.12); color: #b75e00; }
    .scene[class*="scene-d-"] .pill.red   { background: rgba(239,68,68,0.14); color: #b91c1c; }
    .scene[class*="scene-d-"] .pill.violet{ background: rgba(130,89,247,0.12); color: #6d28d9; }
    .scene[class*="scene-d-"] .pill.gray  { background: rgba(10,10,10,0.06); color: rgba(10,10,10,0.6); }
    .scene[class*="scene-d-"] .eyebrow { font: 500 10px/1 Geist, system-ui, sans-serif; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(10,10,10,0.5); }
  </style>
`,ee={id:"deductions",tag:"DEDUCTIONS \xB7 INTERACTIVE DEMO",coverLabel:"See deductions in 30 seconds",closing:{headline:'Short-pay investigated, settlement posted. <span class="grad">Hours saved.</span>',sub:"Want Vero to auto-resolve patterns it's already seen?"},scenes:[{id:"d-01-queue",title:"Step 1 \xB7 Deduction queue",body:`${a.retail.name} paid short by <span class="grad">\u20AC4,230</span> on a \u20AC92K invoice. Vero will pull the evidence.`,tooltipSide:"left",spotlight:"#ded-investigate",advanceOn:{click:"#ded-investigate"},html:`${B}
        <style>
          .scene-d-01-queue .head-tag { display: flex; align-items: center; gap: 8px; }
          .scene-d-01-queue .queue-row { display: grid; grid-template-columns: 40px 1fr 100px 110px auto; align-items: center; gap: 14px; padding: 12px 18px; border-bottom: 1px solid rgba(10,10,10,0.04); font-size: 12px; transition: background 200ms ease; }
          .scene-d-01-queue .queue-row:last-child { border-bottom: 0; }
          .scene-d-01-queue .queue-row.hero { background: rgba(239,137,1,0.04); }
          .scene-d-01-queue .queue-row.faded { opacity: 0.55; }
          .scene-d-01-queue .qr-name { font-weight: 500; }
          .scene-d-01-queue .qr-reason { font-size: 11px; color: rgba(10,10,10,0.55); margin-top: 2px; }
          .scene-d-01-queue .qr-amt { text-align: right; font-weight: 500; color: #b91c1c; }
          .scene-d-01-queue .qr-age { font-size: 11px; color: rgba(10,10,10,0.45); text-align: right; }
          .scene-d-01-queue .qr-action .btn-light { font-size: 11px; padding: 6px 10px; }
          .scene-d-01-queue .card-head { padding: 14px 18px; border-bottom: 1px solid rgba(10,10,10,0.06); display: flex; align-items: center; justify-content: space-between; }
        </style>
        <div class="head">
          <div>
            <h2>Deduction queue</h2>
            <div class="head-sub">${q.length} open \xB7 \u20AC8,680 disputed \xB7 auto-classification running</div>
          </div>
          <span class="pill amber">\u26A0 ${q.length} unresolved</span>
        </div>
        <div class="card">
          <div class="card-head">
            <div>
              <div style="font-weight: 500;">Open short-pays + disputes</div>
              <div style="font-size: 11px; color: rgba(10,10,10,0.5); margin-top: 2px;">Oldest first \xB7 click Investigate to trigger classification</div>
            </div>
            <span class="eyebrow">Action</span>
          </div>
          ${q.map((e,s)=>`
            <div class="queue-row ${e.hero?"hero":"faded"}">
              ${c(e.co)}
              <div>
                <div class="qr-name">${e.co.name}</div>
                <div class="qr-reason">${e.reason}</div>
              </div>
              <div>
                <div class="qr-amt mono">-${e.amount}</div>
                <div class="qr-age">${e.age} ago</div>
              </div>
              <span class="pill gray">${e.co.country==="FR"?"France":e.co.country==="ES"?"Spain":e.co.country==="IE"?"Ireland":e.co.country==="SE"?"Sweden":"Netherlands"}</span>
              <div class="qr-action">
                ${e.hero?'<button class="btn" id="ded-investigate">Investigate \u2192</button>':'<button class="btn btn-light">Investigate</button>'}
              </div>
            </div>
          `).join("")}
        </div>
      `},{id:"d-02-evidence",title:"Step 2 \xB7 Evidence chain",body:'Vero pulls the invoice, purchase order, proof of delivery, contract, and any active <span class="grad">trade-promo agreement</span>, then links them automatically.',tooltipSide:"bottom",spotlight:"#evidence-chain",html:`${B}
        <style>
          .scene-d-02-evidence .ctx-head { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; padding: 14px 18px; background: #fff; border: 1px solid rgba(10,10,10,0.08); border-radius: 10px; }
          .scene-d-02-evidence .ctx-amt { font-weight: 500; color: #b91c1c; }

          .scene-d-02-evidence #evidence-chain { background: #fff; border: 1px solid rgba(10,10,10,0.08); border-radius: 10px; padding: 22px 24px 18px; }
          .scene-d-02-evidence .chain { display: flex; align-items: center; justify-content: center; gap: 0; }
          .scene-d-02-evidence .doc { flex: 0 0 120px; padding: 14px 10px; border-radius: 10px; background: #fafafa; border: 1px solid rgba(10,10,10,0.08); text-align: center; opacity: 0; animation: doc-in 450ms cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .scene-d-02-evidence .doc.d1 { animation-delay: 0.15s; }
          .scene-d-02-evidence .doc.d2 { animation-delay: 0.6s; }
          .scene-d-02-evidence .doc.d3 { animation-delay: 1.05s; }
          .scene-d-02-evidence .doc.d4 { animation-delay: 1.5s; }
          .scene-d-02-evidence .doc.d5 { animation-delay: 1.95s; background: rgba(239,137,1,0.06); border-color: rgba(239,137,1,0.35); }
          @keyframes doc-in { from { opacity: 0; transform: translateY(10px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }

          /* Horizontal dashed connectors drawn as flex siblings \u2014 align perfectly
             with the doc cards, no SVG coordinate maths. */
          .scene-d-02-evidence .conn { flex: 1; height: 2px; margin: 0 6px; background-image: linear-gradient(90deg, #8259f7 50%, transparent 50%); background-size: 8px 2px; background-repeat: repeat-x; opacity: 0; animation: conn-in 350ms ease forwards; }
          .scene-d-02-evidence .conn.c1 { animation-delay: 0.55s; }
          .scene-d-02-evidence .conn.c2 { animation-delay: 1.0s; }
          .scene-d-02-evidence .conn.c3 { animation-delay: 1.45s; }
          .scene-d-02-evidence .conn.c4 { animation-delay: 1.9s; }
          @keyframes conn-in { to { opacity: 0.7; } }

          .scene-d-02-evidence .doc-icon { width: 30px; height: 30px; margin: 0 auto 8px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; color: #fff; }
          .scene-d-02-evidence .doc-icon svg { width: 14px; height: 14px; stroke: currentColor; stroke-width: 2; fill: none; stroke-linecap: round; stroke-linejoin: round; }
          .scene-d-02-evidence .doc.d1 .doc-icon { background: #0369a1; }
          .scene-d-02-evidence .doc.d2 .doc-icon { background: #0d9488; }
          .scene-d-02-evidence .doc.d3 .doc-icon { background: #6d28d9; }
          .scene-d-02-evidence .doc.d4 .doc-icon { background: #475569; }
          .scene-d-02-evidence .doc.d5 .doc-icon { background: #b45309; }
          .scene-d-02-evidence .doc-label { font-size: 11px; font-weight: 500; margin-bottom: 2px; }
          .scene-d-02-evidence .doc-id { font-size: 10px; color: rgba(10,10,10,0.5); font-variant-numeric: tabular-nums; }

          .scene-d-02-evidence .chain-caption { text-align: center; margin-top: 20px; font-size: 12px; color: rgba(10,10,10,0.6); padding-top: 14px; border-top: 1px solid rgba(10,10,10,0.06); }
          .scene-d-02-evidence .chain-caption .mono { color: #0a0a0a; font-weight: 500; }
        </style>
        <div class="ctx-head">
          ${c(a.retail)}
          <div style="flex: 1;">
            <div style="font-weight: 500;">${a.retail.name} \xB7 ${a.retail.contact}</div>
            <div style="font-size: 11px; color: rgba(10,10,10,0.55); margin-top: 2px;">Invoice INV-3482 \xB7 \u20AC92,000 \xB7 paid \u20AC87,770 \xB7 <span class="ctx-amt">short \u20AC4,230</span></div>
          </div>
          <span class="pill violet">\u25CF Classifying</span>
        </div>
        <div id="evidence-chain">
          <div class="chain">
            <div class="doc d1">
              <div class="doc-icon">${n.mail}</div>
              <div class="doc-label">Invoice</div>
              <div class="doc-id">INV-3482</div>
            </div>
            <div class="conn c1"></div>
            <div class="doc d2">
              <div class="doc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg></div>
              <div class="doc-label">Customer PO</div>
              <div class="doc-id">PO-7710</div>
            </div>
            <div class="conn c2"></div>
            <div class="doc d3">
              <div class="doc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></div>
              <div class="doc-label">Proof of delivery</div>
              <div class="doc-id">POD-3482</div>
            </div>
            <div class="conn c3"></div>
            <div class="doc d4">
              <div class="doc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8"/><path d="M8 12h8"/><path d="M8 16h5"/></svg></div>
              <div class="doc-label">Contract</div>
              <div class="doc-id">\xA74.2 Promo</div>
            </div>
            <div class="conn c4"></div>
            <div class="doc d5">
              <div class="doc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg></div>
              <div class="doc-label">Trade promo</div>
              <div class="doc-id">TP-041 \xB7 active</div>
            </div>
          </div>
          <div class="chain-caption">
            5 sources linked \xB7 <span class="mono">1,247 historical cases</span> cross-referenced \xB7 classification in 2.8s
          </div>
        </div>
      `},{id:"d-03-recommend",title:"Step 3 \xB7 Vero's plan",body:'Evidence assembled, plan drafted. <span class="grad">One click</span> to apply.',tooltipSide:"left",spotlight:"#apply-btn",advanceOn:{click:"#apply-btn"},html:`${B}
        <style>
          .scene-d-03-recommend { display: flex; flex-direction: column; align-items: center; justify-content: center; padding-top: 24px; }
          .scene-d-03-recommend .rec-wrap { width: 620px; max-width: 100%; }

          .scene-d-03-recommend .vero-head { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; padding: 0 4px; }
          .scene-d-03-recommend .vero-head .vero-label { font-size: 12px; font-weight: 500; }
          .scene-d-03-recommend .vero-head .vero-sub { font-size: 11px; color: rgba(10,10,10,0.5); }

          .scene-d-03-recommend .rec-card { background: #fff; border: 1px solid rgba(10,10,10,0.08); border-radius: 14px; padding: 18px 20px; box-shadow: 0 4px 18px rgba(0,0,0,0.05); }
          .scene-d-03-recommend .rec-title { font-weight: 500; font-size: 14px; margin-bottom: 2px; }
          .scene-d-03-recommend .rec-ctx { font-size: 11px; color: rgba(10,10,10,0.5); margin-bottom: 14px; }

          .scene-d-03-recommend .plan { display: flex; flex-direction: column; gap: 8px; }
          .scene-d-03-recommend .plan-row { display: flex; align-items: center; gap: 12px; padding: 12px 14px; border-radius: 10px; }
          .scene-d-03-recommend .plan-row.valid { background: rgba(1,146,115,0.07); border: 1px solid rgba(1,146,115,0.18); }
          .scene-d-03-recommend .plan-row.review { background: rgba(239,137,1,0.07); border: 1px solid rgba(239,137,1,0.22); }
          .scene-d-03-recommend .plan-icon { width: 30px; height: 30px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; color: #fff; flex-shrink: 0; }
          .scene-d-03-recommend .plan-icon svg { width: 14px; height: 14px; stroke: currentColor; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; fill: none; }
          .scene-d-03-recommend .plan-row.valid .plan-icon { background: #019273; }
          .scene-d-03-recommend .plan-row.review .plan-icon { background: #b75e00; }
          .scene-d-03-recommend .plan-body { flex: 1; }
          .scene-d-03-recommend .plan-action { font-weight: 500; font-size: 13px; }
          .scene-d-03-recommend .plan-why { font-size: 11px; color: rgba(10,10,10,0.55); margin-top: 2px; }
          .scene-d-03-recommend .plan-amt { font: 500 18px/1 Geist; letter-spacing: -0.01em; font-variant-numeric: tabular-nums; flex-shrink: 0; }
          .scene-d-03-recommend .plan-row.valid .plan-amt { color: #019273; }
          .scene-d-03-recommend .plan-row.review .plan-amt { color: #b75e00; }

          .scene-d-03-recommend .rec-meta { display: flex; align-items: center; gap: 16px; margin-top: 14px; padding-top: 14px; border-top: 1px solid rgba(10,10,10,0.06); font-size: 11px; color: rgba(10,10,10,0.6); }
          .scene-d-03-recommend .rec-meta .meta-item { display: flex; align-items: center; gap: 6px; }
          .scene-d-03-recommend .rec-meta .meta-item strong { color: #0a0a0a; font-weight: 500; }
          .scene-d-03-recommend .rec-meta .meta-dot { width: 5px; height: 5px; border-radius: 50%; background: #019273; }

          .scene-d-03-recommend .apply-bar { display: flex; align-items: center; justify-content: space-between; margin-top: 14px; padding: 4px 2px; }
          .scene-d-03-recommend .apply-note { font-size: 11px; color: rgba(10,10,10,0.55); }
          .scene-d-03-recommend .apply-btns { display: flex; gap: 6px; }
          .scene-d-03-recommend #apply-btn { padding: 10px 18px; font-size: 13px; }
        </style>
        <div class="rec-wrap">
          <div class="vero-head">
            <div class="vero-av thinking"><span class="vero-av-eyes"><span class="vero-av-eye">0</span><span class="vero-av-eye vero-av-eye-r">0</span></span></div>
            <div>
              <div class="vero-label">Vero \xB7 Classification complete</div>
              <div class="vero-sub">${a.retail.name} \xB7 INV-3482 \xB7 short \u20AC4,230</div>
            </div>
            <div style="margin-left: auto;"><span class="pill green">Ready to apply</span></div>
          </div>
          <div class="rec-card">
            <div class="rec-title">Here's what I'd do:</div>
            <div class="rec-ctx">Based on 5 source documents and 1,247 historical cases.</div>
            <div class="plan">
              <div class="plan-row valid">
                <span class="plan-icon">${n.check}</span>
                <div class="plan-body">
                  <div class="plan-action">Auto-settle as trade promo TP-041</div>
                  <div class="plan-why">89% match \xB7 write off to promo reserve \xB7 14 similar cases this quarter</div>
                </div>
                <div class="plan-amt">\u20AC3,780</div>
              </div>
              <div class="plan-row review">
                <span class="plan-icon">${n.alert}</span>
                <div class="plan-body">
                  <div class="plan-action">Route to your queue with summary</div>
                  <div class="plan-why">No matching promo, PO, or POD note. Needs a human call</div>
                </div>
                <div class="plan-amt">\u20AC450</div>
              </div>
            </div>
            <div class="rec-meta">
              <div class="meta-item"><span class="meta-dot"></span><span><strong>5 docs</strong> searched</span></div>
              <div class="meta-item"><span class="meta-dot"></span><span><strong>2.8s</strong> classification</span></div>
              <div class="meta-item"><span class="meta-dot"></span><span><strong>GL balanced</strong> \xB7 SAP ready</span></div>
              <div class="meta-item"><span class="meta-dot"></span><span><strong>Audit trail</strong> preserved</span></div>
            </div>
          </div>
          <div class="apply-bar">
            <div class="apply-note">Every step auditable. You can roll back any settlement from the queue.</div>
            <div class="apply-btns">
              <button class="btn btn-light">Review details</button>
              <button class="btn" id="apply-btn">Apply Vero's plan \u2192</button>
            </div>
          </div>
        </div>
      `},{id:"d-04-done",title:"Step 4 \xB7 Posted",body:'Settled in under 5 minutes. Vero spotted <span class="grad">14 similar cases</span> this quarter. Want Vero to resolve those automatically?',tooltipSide:"right",spotlight:"#ded-vero-card",advanceOn:{click:"#ded-yes"},html:`${B}
        <style>
          .scene-d-04-done { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 18px; padding-top: 30px; }
          .scene-d-04-done .greeting { text-align: center; max-width: 520px; }
          .scene-d-04-done .greeting h3 { font: 500 22px/1.2 Geist, sans-serif; margin: 0 0 6px; letter-spacing: -0.02em; }
          .scene-d-04-done .greeting p { color: rgba(10,10,10,0.55); margin: 0; font-size: 13px; }
          .scene-d-04-done .check-big { width: 48px; height: 48px; border-radius: 50%; background: #019273; display: inline-flex; align-items: center; justify-content: center; margin: 0 auto 10px; animation: pop 400ms cubic-bezier(0.2, 0.9, 0.4, 1); }
          .scene-d-04-done .check-big svg { width: 22px; height: 22px; stroke: #fff; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; fill: none; }
          @keyframes pop { 0% { transform: scale(0.5); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
          .scene-d-04-done .tile { background: #fff; border: 1px solid rgba(10,10,10,0.1); border-radius: 14px; padding: 18px 22px; width: 540px; box-shadow: 0 4px 14px rgba(0,0,0,0.05); }
          .scene-d-04-done .tile-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
          .scene-d-04-done .tile-title { display: flex; align-items: center; gap: 10px; font-weight: 500; }
          .scene-d-04-done .tile-status { display: flex; align-items: center; gap: 6px; font-size: 11px; color: #019273; font-weight: 500; }
          .scene-d-04-done .tile-pulse { width: 6px; height: 6px; border-radius: 50%; background: #019273; }
          .scene-d-04-done .tile-grid { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 14px; padding-top: 14px; border-top: 1px solid rgba(10,10,10,0.06); }
          .scene-d-04-done .tile-stat .v { font: 500 18px/1 Geist; letter-spacing: -0.01em; }
          .scene-d-04-done .tile-stat .l { font-size: 10px; color: rgba(10,10,10,0.5); margin-top: 4px; }

          .scene-d-04-done .vero-bubble { display: flex; align-items: flex-end; gap: 10px; max-width: 540px; }
          .scene-d-04-done #ded-vero-card { background: #fff; border: 1px solid rgba(10,10,10,0.1); border-radius: 14px 14px 14px 4px; padding: 12px 14px; max-width: 440px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
          .scene-d-04-done .bubble-text { font-size: 13px; margin-bottom: 8px; }
          .scene-d-04-done .bubble-actions { display: flex; gap: 6px; }
          .scene-d-04-done #ded-yes { padding: 6px 12px; font-size: 12px; }
        </style>
        <div class="greeting">
          <div class="check-big"><svg viewBox="0 0 24 24"><path d="M5 12l5 5L20 7"/></svg></div>
          <h3>Settlement posted</h3>
          <p>\u20AC3,780 written off to trade promo. \u20AC450 routed to your queue with summary + evidence.</p>
        </div>
        <div class="tile">
          <div class="tile-head">
            <div class="tile-title">
              <span style="width: 28px; height: 28px; border-radius: 6px; background: linear-gradient(135deg, #8259f7, #5b21b6); display: inline-flex; align-items: center; justify-content: center; color: #fff;">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${n.alert.replace(/<svg[^>]*>|<\/svg>/g,"")}</svg>
              </span>
              Today's deduction pass
            </div>
            <div class="tile-status">
              <span class="tile-pulse"></span>
              Complete \xB7 4:12
            </div>
          </div>
          <div class="tile-grid">
            <div class="tile-stat"><div class="v mono">1</div><div class="l">Settled</div></div>
            <div class="tile-stat"><div class="v mono">\u20AC3,780</div><div class="l">Auto-resolved</div></div>
            <div class="tile-stat"><div class="v mono">\u20AC450</div><div class="l">Routed to you</div></div>
            <div class="tile-stat"><div class="v mono">5</div><div class="l">Docs linked</div></div>
          </div>
        </div>
        <div class="vero-bubble">
          <div class="vero-av thinking"><span class="vero-av-eyes"><span class="vero-av-eye">0</span><span class="vero-av-eye vero-av-eye-r">0</span></span></div>
          <div id="ded-vero-card">
            <div class="bubble-text">14 other short-pays this quarter match TP-041 above 95% confidence. Want me to auto-resolve those too?</div>
            <div class="bubble-actions">
              <button class="btn" id="ded-yes">Yes, auto-resolve</button>
              <button class="btn btn-light">Not now</button>
            </div>
          </div>
        </div>
      `}]};y(ee);var se=[{co:a.energy,inv:"INV-0019",amount:179e3,risk:88,reason:"2 broken PTPs \xB7 sentiment declining"},{co:a.motors,inv:"INV-1183",amount:63e3,risk:71,reason:"DSO trend +9 days \xB7 last call 12d ago"},{co:a.fashion,inv:"INV-0876",amount:42e3,risk:64,reason:"New CFO \xB7 payment behavior unclear"},{co:a.tech,inv:"INV-2204",amount:22e3,risk:58,reason:"Subscription dispute open"},{co:a.build,inv:"INV-1144",amount:38e3,risk:52,reason:"POD discrepancy under review"}],V=`
  <style>
    .scene[class*="scene-p-"] { position: absolute; inset: 0; padding: 22px 28px; font: 13px/1.45 Geist, system-ui, sans-serif; color: #0a0a0a; }
    .scene[class*="scene-p-"] h2 { font: 500 18px/1.2 Geist, system-ui, sans-serif; letter-spacing: -0.015em; margin: 0; }
    .scene[class*="scene-p-"] .head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
    .scene[class*="scene-p-"] .head-sub { color: rgba(10,10,10,0.5); font-size: 12px; margin-top: 2px; }
    .scene[class*="scene-p-"] .mono { font-variant-numeric: tabular-nums; letter-spacing: -0.01em; }
    .scene[class*="scene-p-"] .card { background: #fff; border: 1px solid rgba(10,10,10,0.08); border-radius: 10px; }
    .scene[class*="scene-p-"] .btn { appearance: none; border: 0; cursor: pointer; background: #0a0a0a; color: #fff; font: 500 12px/1 Geist, system-ui, sans-serif; padding: 8px 14px; border-radius: 8px; display: inline-flex; align-items: center; gap: 6px; }
    .scene[class*="scene-p-"] .btn-light { background: #fff; color: #0a0a0a; border: 1px solid rgba(10,10,10,0.1); }
    .scene[class*="scene-p-"] .pill { display: inline-flex; align-items: center; gap: 4px; font-size: 11px; font-weight: 500; padding: 3px 8px; border-radius: 999px; white-space: nowrap; }
    .scene[class*="scene-p-"] .pill.green { background: rgba(1,146,115,0.12); color: #019273; }
    .scene[class*="scene-p-"] .pill.amber { background: rgba(239,137,1,0.12); color: #b75e00; }
    .scene[class*="scene-p-"] .pill.red   { background: rgba(239,68,68,0.14); color: #b91c1c; }
    .scene[class*="scene-p-"] .pill.violet{ background: rgba(130,89,247,0.12); color: #6d28d9; }
    .scene[class*="scene-p-"] .pill.indigo{ background: rgba(78,85,225,0.12); color: #3730a3; }
    .scene[class*="scene-p-"] .pill.gray  { background: rgba(10,10,10,0.06); color: rgba(10,10,10,0.6); }
  </style>
`;function Y({weeks:e,highlight:s=-1,resolved:t=!1}){let p=d=>36+d/(e.length-1)*668,w=Math.max(...e)*1.1,m=Math.min(...e)*.85,g=d=>18+(1-(d-m)/(w-m))*174,h=3,T=e.slice(0,h).map((d,u)=>`${u===0?"M":"L"}${p(u).toFixed(1)},${g(d).toFixed(1)}`).join(" "),I=e.slice(h-1).map((d,u)=>`${u===0?"M":"L"}${p(u+h-1).toFixed(1)},${g(d).toFixed(1)}`).join(" "),K=e.slice(h-1).map((d,u)=>`${p(u+h-1).toFixed(1)},${g(d*1.1).toFixed(1)}`),N=e.slice(h-1).map((d,u)=>`${p(u+h-1).toFixed(1)},${g(d*.92).toFixed(1)}`).reverse(),L=`M${K.join(" L")} L${N.join(" L")} Z`,R=[0,3,6,9,12].map(d=>`<text x="${p(d)}" y="212" font-size="9" fill="rgba(10,10,10,0.45)" text-anchor="middle">W${d+1}</text>`).join(""),x=[0,.33,.66,1].map(d=>{let u=18+d*174;return`<line x1="36" y1="${u}" x2="704" y2="${u}" stroke="rgba(10,10,10,0.05)" stroke-width="1"/>`}).join(""),z=[w,w*.66+m*.34,w*.33+m*.67,m].map((d,u)=>`<text x="30" y="${18+u/3*174+3}" font-size="9" fill="rgba(10,10,10,0.4)" text-anchor="end">\u20AC${(d/1e3).toFixed(0)}K</text>`).join(""),P=s>=0?`
    <line x1="${p(s)}" y1="18" x2="${p(s)}" y2="192" stroke="${t?"#019273":"#ef4444"}" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.5"/>
    <circle cx="${p(s)}" cy="${g(e[s])}" r="6" fill="${t?"#019273":"#ef4444"}"/>
    <circle cx="${p(s)}" cy="${g(e[s])}" r="11" fill="none" stroke="${t?"#019273":"#ef4444"}" stroke-width="1.5" opacity="0.4"/>
    <text x="${p(s)}" y="${g(e[s])-16}" font-size="10" font-weight="500" fill="${t?"#019273":"#ef4444"}" text-anchor="middle">\u20AC${(e[s]/1e3).toFixed(0)}K</text>
  `:"";return`
    <svg viewBox="0 0 720 220" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: auto; display: block;">
      ${x}
      ${z}
      <path d="${L}" fill="rgba(78,85,225,0.10)"/>
      <path d="${T}" fill="none" stroke="#0a0a0a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="${I}" fill="none" stroke="#4e55e1" stroke-width="2" stroke-dasharray="4 3" stroke-linecap="round" stroke-linejoin="round"/>
      ${P}
      ${R}
    </svg>
  `}var k=[820,850,870,890,910,880,740,820,900,940,980,1010,1040].map(e=>e*1e3),ae=[820,850,870,890,910,920,935,950,980,1e3,1030,1060,1090].map(e=>e*1e3),ne={fx:{id:"fx",label:"EUR +5% vs USD",icon:"globe",title:"EUR strengthens 5% vs USD",sub:"Affects US revenue conversion \xB7 Q ends in week 13",intensities:["+2%","+5%","+10%"],defaultIntensity:"+5%",driverCopy:"US receivables book: $1.2M \xB7 locked at \u20AC0.92 \xB7 adjustment applied from week 4",weeks:(e="+5%")=>{let s=e==="+2%"?.972:e==="+10%"?.88:.93;return k.map((t,i)=>i<3?t:Math.round(t*s))},risk:(e="+5%")=>({w13:e==="+2%"?"\u20AC1.01M":e==="+10%"?"\u20AC916K":"\u20AC970K",delta:e==="+2%"?"\u2212\u20AC30K":e==="+10%"?"\u2212\u20AC124K":"\u2212\u20AC70K",exposure:e==="+2%"?"\u20AC35K":e==="+10%"?"\u20AC184K":"\u20AC92K",exposureDesc:"USD receivables"})},costs:{id:"costs",label:"Input costs +8%",icon:"fuel",title:"Input costs rise 8%",sub:"Hits margin on AP payables \xB7 customers pass less-than-full through",intensities:["+4%","+8%","+15%"],defaultIntensity:"+8%",driverCopy:"Raw mat index +8% WoW \xB7 AP book \u20AC2.4M across 6 suppliers \xB7 60% pass-through",weeks:(e="+8%")=>{let s=e==="+4%"?.975:e==="+15%"?.91:.955;return k.map((t,i)=>i<3?t:Math.round(t*s))},risk:(e="+8%")=>({w13:e==="+4%"?"\u20AC1.01M":e==="+15%"?"\u20AC946K":"\u20AC993K",delta:e==="+4%"?"\u2212\u20AC30K":e==="+15%"?"\u2212\u20AC94K":"\u2212\u20AC47K",exposure:e==="+4%"?"\u20AC28K":e==="+15%"?"\u20AC95K":"\u20AC58K",exposureDesc:"margin compression"})},dso:{id:"dso",label:"DSO +5 days",icon:"trendingUp",title:"DSO slips +5 days",sub:"Receipts shift right \xB7 same cash, later week",intensities:["+3d","+5d","+10d"],defaultIntensity:"+5d",driverCopy:"Customer AP teams taking longer \xB7 4 accounts showing drift \xB7 early warning",weeks:(e="+5d")=>{let s=e==="+3d"?.4:e==="+10d"?1.4:.7;return k.map((t,i)=>{if(i<3)return t;let o=Math.max(0,Math.min(k.length-1,i-s)),r=Math.floor(o),l=Math.ceil(o),b=o-r;return Math.round(k[r]*(1-b)+k[l]*b)})},risk:(e="+5d")=>({w13:e==="+3d"?"\u20AC1.02M":e==="+10d"?"\u20AC950K":"\u20AC985K",delta:e==="+3d"?"\u2212\u20AC20K":e==="+10d"?"\u2212\u20AC90K":"\u2212\u20AC55K",exposure:e==="+3d"?"\u20AC52K":e==="+10d"?"\u20AC178K":"\u20AC108K",exposureDesc:"cash timing"})},delay:{id:"delay",label:"Top customer 30d delay",icon:"truck",title:`${a.energy.name} delays 30 days`,sub:"\u20AC179K PTP at risk \xB7 historical slippage pattern applies",intensities:["15d","30d","60d"],defaultIntensity:"30d",driverCopy:`${a.energy.name} \xB7 \u20AC179K invoice \xB7 88% slip risk \xB7 2 broken PTPs in 60d`,weeks:(e="30d")=>{let s=e==="15d"?110:179,t=e==="15d"?8:e==="60d"?12:10;return k.map((i,o)=>o===6?i-s*1e3:o===t&&e!=="60d"?i+Math.round(s*.8*1e3):i)},risk:(e="30d")=>({w13:e==="15d"?"\u20AC1.02M":e==="60d"?"\u20AC861K":"\u20AC931K",delta:e==="15d"?"\u2212\u20AC20K":e==="60d"?"\u2212\u20AC179K":"\u2212\u20AC109K",exposure:e==="15d"?"\u20AC110K":"\u20AC179K",exposureDesc:`${a.energy.name} PTP`})}};function te(e,s){let v=k.length,p=x=>36+x/(v-1)*668,w=[...k,...e],m=Math.max(...w)*1.05,g=Math.min(...w)*.9,h=x=>14+(1-(x-g)/(m-g))*150,T=x=>x.map((z,P)=>`${P===0?"M":"L"}${p(P).toFixed(1)},${h(z).toFixed(1)}`).join(" "),I=[0,.33,.66,1].map(x=>{let z=14+x*150;return`<line x1="36" y1="${z}" x2="704" y2="${z}" stroke="rgba(10,10,10,0.05)" stroke-width="1"/>`}).join(""),K=[0,3,6,9,12].map(x=>`<text x="${p(x)}" y="182" font-size="9" fill="rgba(10,10,10,0.45)" text-anchor="middle">W${x+1}</text>`).join(""),N=[m,(m+g)/2,g].map((x,z)=>`<text x="30" y="${14+z/2*150+3}" font-size="9" fill="rgba(10,10,10,0.4)" text-anchor="end">\u20AC${(x/1e3).toFixed(0)}K</text>`).join(""),L=p(v-1),R=h(e[v-1]);return`
    <svg viewBox="0 0 720 190" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: auto; display: block;">
      ${I}
      ${N}
      <path d="${T(k)}" fill="none" stroke="rgba(10,10,10,0.25)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="${T(e)}" fill="none" stroke="#4e55e1" stroke-width="2" stroke-dasharray="4 3" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="${L}" cy="${R}" r="4" fill="#4e55e1"/>
      <text x="${L-6}" y="${R-8}" font-size="10" font-weight="500" fill="#4e55e1" text-anchor="end">${s}</text>
      ${K}
    </svg>
  `}function G(e,s){let t=ne[e],i=s||t.defaultIntensity,o=t.weeks(i),r=t.risk(i);return`
    <div class="sc-head">
      <div>
        <div class="sc-title">${t.title} \xB7 <span class="sc-intensity-label">${i}</span></div>
        <div class="sc-sub">${t.sub}</div>
      </div>
      <div class="sc-legend">
        <span class="key"><span class="swatch base"></span>Baseline</span>
        <span class="key"><span class="swatch new"></span>Scenario</span>
      </div>
    </div>
    <div class="intensity-row">
      <span class="int-label">Intensity</span>
      ${t.intensities.map(l=>`<button class="int-chip ${l===i?"active":""}" data-scenario="${e}" data-intensity="${l}">${l}</button>`).join("")}
      <span class="int-driver">${t.driverCopy}</span>
    </div>
    ${te(o,r.w13)}
    <div class="impact-row">
      <div class="impact">
        <div class="l">Week 13 \xB7 baseline</div>
        <div class="v mono">\u20AC1.04M</div>
        <div class="d">unchanged</div>
      </div>
      <div class="impact">
        <div class="l">Week 13 \xB7 scenario</div>
        <div class="v mono" style="color: #b91c1c;">${r.w13}</div>
        <div class="d down">${r.delta} exposure</div>
      </div>
      <div class="impact">
        <div class="l">Cash at risk</div>
        <div class="v mono" style="color: #b91c1c;">${r.exposure}</div>
        <div class="d down">${r.exposureDesc}</div>
      </div>
    </div>
  `}var ie={id:"predictions",tag:"CASH FLOW FORECASTING \xB7 INTERACTIVE DEMO",coverLabel:"See cash predictions in 30 seconds",closing:{headline:'A \u20AC170K dip avoided. Forecast back on track. <span class="grad">Hours back.</span>',sub:"Want Vero to monitor and act on signals every morning?"},scenes:[{id:"p-01-forecast",title:"Step 1 \xB7 13-week forecast",body:'Cash holding strong, except a <span class="grad">\u20AC170K dip</span> in week 6. Vero spotted the risk before it lands.',tooltipSide:"left",spotlight:"#dip-investigate",advanceOn:{click:"#dip-investigate"},html:`${V}
        <style>
          .scene-p-01-forecast .chart-card { background: #fff; border: 1px solid rgba(10,10,10,0.08); border-radius: 10px; padding: 16px 18px 8px; }
          .scene-p-01-forecast .chart-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; }
          .scene-p-01-forecast .chart-head .ch-label { display: flex; align-items: center; gap: 8px; font-size: 12px; color: rgba(10,10,10,0.6); }
          .scene-p-01-forecast .chart-head .ch-stamp { font-size: 11px; color: rgba(10,10,10,0.45); }
          .scene-p-01-forecast .legend { display: flex; gap: 16px; font-size: 11px; color: rgba(10,10,10,0.55); align-items: center; }
          .scene-p-01-forecast .legend-key { display: inline-flex; align-items: center; gap: 5px; }
          .scene-p-01-forecast .legend-key .swatch { width: 18px; height: 2px; background: #0a0a0a; }
          .scene-p-01-forecast .legend-key .swatch.fc { background: #4e55e1; background-image: linear-gradient(90deg, #4e55e1 50%, transparent 50%); background-size: 4px 2px; }
          .scene-p-01-forecast .legend-key .swatch.band { width: 14px; height: 8px; background: rgba(78,85,225,0.20); border-radius: 2px; }

          .scene-p-01-forecast .stats-row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-top: 12px; margin-bottom: 12px; }
          .scene-p-01-forecast .stat { background: #fff; border: 1px solid rgba(10,10,10,0.08); border-radius: 10px; padding: 11px 14px; }
          .scene-p-01-forecast .stat .l { font-size: 10px; color: rgba(10,10,10,0.5); text-transform: uppercase; letter-spacing: 0.06em; }
          .scene-p-01-forecast .stat .v { font: 500 18px/1.1 Geist; letter-spacing: -0.01em; margin-top: 4px; }
          .scene-p-01-forecast .stat .delta { font-size: 11px; margin-top: 2px; }
          .scene-p-01-forecast .stat .delta.down { color: #b91c1c; }
          .scene-p-01-forecast .stat .delta.up { color: #019273; }

          .scene-p-01-forecast .alert-bar { background: #fff; border: 1.5px solid rgba(239,68,68,0.4); border-radius: 10px; padding: 12px 16px; display: flex; align-items: center; gap: 12px; box-shadow: 0 2px 8px rgba(239,68,68,0.06); }
          .scene-p-01-forecast .alert-icon { width: 30px; height: 30px; border-radius: 50%; background: rgba(239,68,68,0.12); display: inline-flex; align-items: center; justify-content: center; color: #b91c1c; flex-shrink: 0; }
          .scene-p-01-forecast .alert-icon svg { width: 16px; height: 16px; stroke: currentColor; stroke-width: 2; fill: none; stroke-linecap: round; stroke-linejoin: round; }
          .scene-p-01-forecast .alert-text { flex: 1; }
          .scene-p-01-forecast .alert-title { font-weight: 500; font-size: 13px; }
          .scene-p-01-forecast .alert-sub { font-size: 11px; color: rgba(10,10,10,0.55); margin-top: 2px; }
        </style>
        <div class="head">
          <div>
            <h2>13-week cash forecast</h2>
            <div class="head-sub">AR + AP combined \xB7 4 currencies \xB7 12 entities \xB7 1,247 open invoices \xB7 updated 14 min ago</div>
          </div>
          <span class="pill indigo">\u25CF Live \xB7 Vero monitoring</span>
        </div>
        <div class="chart-card">
          <div class="chart-head">
            <div class="ch-label">Projected cash position \xB7 weeks 1\u201313</div>
            <div class="legend">
              <span class="legend-key"><span class="swatch"></span>Actuals</span>
              <span class="legend-key"><span class="swatch fc"></span>Forecast</span>
              <span class="legend-key"><span class="swatch band"></span>Confidence</span>
            </div>
          </div>
          ${Y({weeks:k,highlight:6})}
        </div>
        <div class="stats-row">
          <div class="stat">
            <div class="l">Week 13 forecast</div>
            <div class="v mono">\u20AC1.04M</div>
            <div class="delta up">+27% vs today</div>
          </div>
          <div class="stat">
            <div class="l">Week 6 dip</div>
            <div class="v mono" style="color: #b91c1c;">\u2212\u20AC170K</div>
            <div class="delta down">vs trend line</div>
          </div>
          <div class="stat">
            <div class="l">Confidence</div>
            <div class="v mono">93%</div>
            <div class="delta">\xB1\u20AC42K margin</div>
          </div>
        </div>
        <div class="alert-bar">
          <div class="alert-icon">${n.alert}</div>
          <div class="alert-text">
            <div class="alert-title">Week 6 cash drops \u20AC170K below trend</div>
            <div class="alert-sub">5 invoices at risk \xB7 driven by Acme Energy's \u20AC179K PTP slipping</div>
          </div>
          <button class="btn" id="dip-investigate">Investigate \u2192</button>
        </div>
      `},{id:"p-02-scenario",title:"Step 2 \xB7 Stress-test",body:'<span class="grad">Click any scenario</span>. The chart and numbers update live. Try switching and dialling intensities up.',tooltipSide:"top",spotlight:"#scenarios-frame",advanceOn:{click:"#scenario-drilldown"},onMount:e=>{let s=e.querySelector("#scenario-inner");s&&(e.querySelectorAll("[data-scenario-tab]").forEach(t=>{t.addEventListener("click",()=>{let i=t.getAttribute("data-scenario-tab");e.querySelectorAll("[data-scenario-tab]").forEach(o=>o.classList.toggle("active",o===t)),s.innerHTML=G(i)})}),e.addEventListener("click",t=>{let i=t.target.closest("[data-intensity]");if(!i)return;let o=i.getAttribute("data-scenario"),r=i.getAttribute("data-intensity");s.innerHTML=G(o,r)}))},html:`${V}
        <style>
          .scene-p-02-scenario #scenarios-frame { background: #fff; border: 1px solid rgba(10,10,10,0.08); border-radius: 10px; padding: 14px; }
          /* Tab strip for the four top-level scenarios */
          .scene-p-02-scenario .tab-strip { display: flex; gap: 4px; padding: 4px; background: rgba(10,10,10,0.04); border-radius: 10px; margin-bottom: 12px; }
          .scene-p-02-scenario .tab { flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: 6px; padding: 8px 10px; background: transparent; border: 0; border-radius: 7px; font: 500 12px/1 Geist, system-ui, sans-serif; cursor: pointer; color: rgba(10,10,10,0.6); transition: all 180ms ease; white-space: nowrap; }
          .scene-p-02-scenario .tab svg { width: 13px; height: 13px; stroke: currentColor; stroke-width: 2; fill: none; stroke-linecap: round; stroke-linejoin: round; }
          .scene-p-02-scenario .tab:hover { background: rgba(10,10,10,0.04); color: #0a0a0a; }
          .scene-p-02-scenario .tab.active { background: #fff; color: #3730a3; box-shadow: 0 1px 2px rgba(0,0,0,0.04); border: 1px solid rgba(78,85,225,0.25); }

          .scene-p-02-scenario .sc-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 4px; padding: 0 2px; }
          .scene-p-02-scenario .sc-title { font-weight: 500; font-size: 13px; }
          .scene-p-02-scenario .sc-intensity-label { background: rgba(78,85,225,0.14); color: #3730a3; padding: 2px 7px; border-radius: 999px; font-size: 11px; font-weight: 500; font-variant-numeric: tabular-nums; }
          .scene-p-02-scenario .sc-sub { font-size: 11px; color: rgba(10,10,10,0.55); margin-top: 2px; }
          .scene-p-02-scenario .sc-legend { display: flex; gap: 12px; font-size: 11px; color: rgba(10,10,10,0.55); flex-shrink: 0; }
          .scene-p-02-scenario .sc-legend .key { display: inline-flex; align-items: center; gap: 5px; }
          .scene-p-02-scenario .sc-legend .swatch { width: 16px; height: 2px; border-radius: 1px; }
          .scene-p-02-scenario .sc-legend .swatch.base { background: rgba(10,10,10,0.3); }
          .scene-p-02-scenario .sc-legend .swatch.new { background: #4e55e1; background-image: linear-gradient(90deg, #4e55e1 50%, transparent 50%); background-size: 4px 2px; }

          .scene-p-02-scenario .intensity-row { display: flex; align-items: center; gap: 6px; margin: 10px 0 8px; padding: 6px 8px; background: rgba(10,10,10,0.025); border-radius: 8px; flex-wrap: wrap; }
          .scene-p-02-scenario .int-label { font: 500 10px/1 Geist; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(10,10,10,0.5); margin-right: 2px; }
          .scene-p-02-scenario .int-chip { appearance: none; border: 1px solid rgba(10,10,10,0.1); background: #fff; padding: 4px 10px; border-radius: 6px; font: 500 11px/1 Geist, system-ui, sans-serif; font-variant-numeric: tabular-nums; cursor: pointer; color: rgba(10,10,10,0.7); transition: all 150ms ease; }
          .scene-p-02-scenario .int-chip:hover { border-color: rgba(78,85,225,0.35); color: #3730a3; }
          .scene-p-02-scenario .int-chip.active { background: #4e55e1; color: #fff; border-color: #4e55e1; }
          .scene-p-02-scenario .int-driver { margin-left: auto; font-size: 10px; color: rgba(10,10,10,0.55); font-style: italic; }

          .scene-p-02-scenario .impact-row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; margin-top: 10px; }
          .scene-p-02-scenario .impact { background: rgba(10,10,10,0.03); border-radius: 8px; padding: 10px 12px; }
          .scene-p-02-scenario .impact .l { font-size: 10px; color: rgba(10,10,10,0.5); text-transform: uppercase; letter-spacing: 0.06em; }
          .scene-p-02-scenario .impact .v { font: 500 18px/1.1 Geist; letter-spacing: -0.01em; margin-top: 4px; font-variant-numeric: tabular-nums; }
          .scene-p-02-scenario .impact .d { font-size: 11px; margin-top: 2px; }
          .scene-p-02-scenario .impact .d.down { color: #b91c1c; }

          .scene-p-02-scenario .cta-bar { display: flex; align-items: center; justify-content: space-between; margin-top: 12px; padding: 10px 12px; background: linear-gradient(180deg, rgba(10,10,10,0.03), rgba(10,10,10,0.05)); border-radius: 10px; }
          .scene-p-02-scenario .cta-label { font-size: 12px; font-weight: 500; }
          .scene-p-02-scenario .cta-sub { font-size: 11px; color: rgba(10,10,10,0.55); margin-top: 2px; }
          .scene-p-02-scenario #scenario-drilldown { padding: 9px 14px; font-size: 13px; }
        </style>
        <div class="head">
          <div>
            <h2>Stress-test the forecast</h2>
            <div class="head-sub">Model FX, input costs, customer delays \xB7 AR + AP both included</div>
          </div>
          <span class="pill indigo">${n.sliders} Scenario builder \xB7 live</span>
        </div>
        <div id="scenarios-frame">
          <div class="tab-strip">
            <button class="tab active" data-scenario-tab="fx">${n.globe} FX shift</button>
            <button class="tab" data-scenario-tab="costs">${n.fuel} Input costs</button>
            <button class="tab" data-scenario-tab="dso">${n.trendingUp} DSO drift</button>
            <button class="tab" data-scenario-tab="delay">${n.truck} Customer delay</button>
          </div>
          <div id="scenario-inner">${G("fx")}</div>
          <div class="cta-bar">
            <div>
              <div class="cta-label">Pick a scenario and click through the intensities, then see the invoices at risk</div>
              <div class="cta-sub">Chart and numbers update live \xB7 no save / reload \xB7 swap scenarios as often as you like</div>
            </div>
            <button class="btn" id="scenario-drilldown">See invoices at risk \u2192</button>
          </div>
        </div>
      `},{id:"p-03-atrisk",title:"Step 3 \xB7 At-risk invoices",body:`${a.energy.name}'s \u20AC179K is the biggest exposure. <span class="grad">88% likely to slip</span> based on past behaviour plus signals.`,tooltipSide:"bottom",spotlight:"#energy-row",advanceOn:{click:"#energy-row"},html:`${V}
        <style>
          .scene-p-03-atrisk .ctx { display: flex; align-items: center; gap: 14px; padding: 12px 16px; background: rgba(239,68,68,0.04); border: 1px solid rgba(239,68,68,0.18); border-radius: 10px; margin-bottom: 14px; }
          .scene-p-03-atrisk .ctx-icon { width: 32px; height: 32px; border-radius: 50%; background: rgba(239,68,68,0.12); display: inline-flex; align-items: center; justify-content: center; color: #b91c1c; flex-shrink: 0; }
          .scene-p-03-atrisk .ctx-icon svg { width: 16px; height: 16px; stroke: currentColor; stroke-width: 2; fill: none; stroke-linecap: round; stroke-linejoin: round; }
          .scene-p-03-atrisk .ctx-label { font-weight: 500; font-size: 13px; }
          .scene-p-03-atrisk .ctx-sub { font-size: 11px; color: rgba(10,10,10,0.55); margin-top: 2px; }
          .scene-p-03-atrisk .ctx-amt { font: 500 18px/1 Geist; letter-spacing: -0.01em; color: #b91c1c; font-variant-numeric: tabular-nums; }

          .scene-p-03-atrisk .risk-row { display: grid; grid-template-columns: 36px 1fr 110px 90px 90px auto; align-items: center; gap: 12px; padding: 12px 18px; border-bottom: 1px solid rgba(10,10,10,0.05); font-size: 12px; transition: background 200ms ease; }
          .scene-p-03-atrisk .risk-row:last-child { border-bottom: 0; }
          .scene-p-03-atrisk .risk-row.hero { background: rgba(239,68,68,0.04); cursor: pointer; }
          .scene-p-03-atrisk .risk-row.hero:hover { background: rgba(239,68,68,0.06); }
          .scene-p-03-atrisk .rr-name { font-weight: 500; }
          .scene-p-03-atrisk .rr-inv  { font-size: 11px; color: rgba(10,10,10,0.5); margin-top: 1px; font-variant-numeric: tabular-nums; }
          .scene-p-03-atrisk .rr-reason { font-size: 11px; color: rgba(10,10,10,0.6); }
          .scene-p-03-atrisk .rr-amt { text-align: right; font-weight: 500; font-variant-numeric: tabular-nums; }
          .scene-p-03-atrisk .rr-risk { display: flex; align-items: center; gap: 8px; }
          .scene-p-03-atrisk .risk-bar { flex: 1; height: 5px; background: rgba(10,10,10,0.08); border-radius: 3px; overflow: hidden; }
          .scene-p-03-atrisk .risk-bar-fill { height: 100%; border-radius: 3px; }
          .scene-p-03-atrisk .risk-pct { font-size: 11px; font-weight: 500; font-variant-numeric: tabular-nums; min-width: 30px; text-align: right; }
          .scene-p-03-atrisk .card-head { padding: 12px 18px; border-bottom: 1px solid rgba(10,10,10,0.06); display: flex; align-items: center; justify-content: space-between; }
          .scene-p-03-atrisk .card-head .h3 { font-weight: 500; }
          .scene-p-03-atrisk .head-meta { font-size: 11px; color: rgba(10,10,10,0.5); }
        </style>
        <div class="head">
          <div>
            <h2>Week 6 \xB7 at-risk invoices</h2>
            <div class="head-sub">Sorted by risk score \xB7 likelihood of slipping past due date</div>
          </div>
          <span class="pill red">${n.alert} 5 to review</span>
        </div>
        <div class="ctx">
          <div class="ctx-icon">${n.alert}</div>
          <div style="flex: 1;">
            <div class="ctx-label">Week 6 expected receipts: \u20AC870K \xB7 forecast: \u20AC700K</div>
            <div class="ctx-sub">\u20AC170K shortfall driven by these 5 invoices \xB7 click any row to dig in</div>
          </div>
          <div style="text-align: right;">
            <div class="ctx-amt">\u2212\u20AC170K</div>
            <div class="ctx-sub">vs trend</div>
          </div>
        </div>
        <div class="card">
          <div class="card-head">
            <div>
              <div class="h3">Top 5 risk exposures</div>
              <div class="head-meta">Total at risk: \u20AC344K \xB7 ${a.energy.name} highest</div>
            </div>
            <span style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.06em; color: rgba(10,10,10,0.5);">Risk score</span>
          </div>
          ${se.map((e,s)=>{let t=s===0,i=e.risk>=80?"red":e.risk>=65?"amber":"gray",o=e.risk>=80?"#ef4444":e.risk>=65?"#f59e0b":"#94a3b8";return`
              <div class="risk-row ${t?"hero":""}" ${t?'id="energy-row"':""}>
                ${c(e.co)}
                <div>
                  <div class="rr-name">${e.co.name}</div>
                  <div class="rr-inv">${e.inv} \xB7 ${e.co.country}</div>
                </div>
                <div class="rr-amt mono">\u20AC${(e.amount/1e3).toFixed(0)}K</div>
                <div class="rr-risk">
                  <div class="risk-bar"><div class="risk-bar-fill" style="width: ${e.risk}%; background: ${o};"></div></div>
                  <span class="risk-pct" style="color: ${o};">${e.risk}</span>
                </div>
                <div class="rr-reason" style="grid-column: 5 / 7;">${e.reason}</div>
              </div>
            `}).join("")}
        </div>
      `},{id:"p-04-recommend",title:"Step 4 \xB7 Vero's plan",body:`Three risk signals stack up. Vero's plan: <span class="grad">act now</span>, before the dip lands.`,tooltipSide:"left",spotlight:"#pred-apply",advanceOn:{click:"#pred-apply"},html:`${V}
        <style>
          .scene-p-04-recommend { display: flex; flex-direction: column; align-items: center; justify-content: center; padding-top: 18px; }
          .scene-p-04-recommend .rec-wrap { width: 640px; max-width: 100%; }

          .scene-p-04-recommend .vero-head { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; padding: 0 4px; }
          .scene-p-04-recommend .vero-label { font-size: 12px; font-weight: 500; }
          .scene-p-04-recommend .vero-sub { font-size: 11px; color: rgba(10,10,10,0.5); }

          .scene-p-04-recommend .rec-card { background: #fff; border: 1px solid rgba(10,10,10,0.08); border-radius: 14px; padding: 18px 20px; box-shadow: 0 4px 18px rgba(0,0,0,0.05); }
          .scene-p-04-recommend .rec-section { margin-bottom: 14px; }
          .scene-p-04-recommend .rec-section:last-child { margin-bottom: 0; }
          .scene-p-04-recommend .rec-section-label { font: 500 10px/1 Geist; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(10,10,10,0.5); margin-bottom: 8px; }
          .scene-p-04-recommend .rec-title { font-weight: 500; font-size: 14px; margin-bottom: 4px; }

          .scene-p-04-recommend .signals { display: flex; flex-direction: column; gap: 6px; }
          .scene-p-04-recommend .signal { display: flex; align-items: center; gap: 10px; padding: 9px 12px; background: rgba(239,68,68,0.05); border-radius: 8px; font-size: 12px; }
          .scene-p-04-recommend .signal-icon { width: 24px; height: 24px; border-radius: 6px; background: rgba(239,68,68,0.14); color: #b91c1c; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; }
          .scene-p-04-recommend .signal-icon svg { width: 13px; height: 13px; stroke: currentColor; stroke-width: 2; fill: none; stroke-linecap: round; stroke-linejoin: round; }
          .scene-p-04-recommend .signal .label { flex: 1; }
          .scene-p-04-recommend .signal .label strong { font-weight: 500; }
          .scene-p-04-recommend .signal .meta { font-size: 11px; color: rgba(10,10,10,0.55); font-variant-numeric: tabular-nums; }

          .scene-p-04-recommend .actions { display: flex; flex-direction: column; gap: 6px; }
          .scene-p-04-recommend .action { display: flex; align-items: center; gap: 10px; padding: 10px 12px; background: rgba(78,85,225,0.05); border: 1px solid rgba(78,85,225,0.18); border-radius: 8px; font-size: 12px; }
          .scene-p-04-recommend .action-icon { width: 26px; height: 26px; border-radius: 6px; background: #4e55e1; display: inline-flex; align-items: center; justify-content: center; color: #fff; flex-shrink: 0; }
          .scene-p-04-recommend .action-icon svg { width: 12px; height: 12px; stroke: currentColor; stroke-width: 2.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
          .scene-p-04-recommend .action .body { flex: 1; }
          .scene-p-04-recommend .action .lab { font-weight: 500; }
          .scene-p-04-recommend .action .det { font-size: 11px; color: rgba(10,10,10,0.55); margin-top: 2px; }

          .scene-p-04-recommend .rec-meta { display: flex; align-items: center; gap: 16px; margin-top: 4px; padding-top: 12px; border-top: 1px solid rgba(10,10,10,0.06); font-size: 11px; color: rgba(10,10,10,0.6); }
          .scene-p-04-recommend .meta-item { display: flex; align-items: center; gap: 6px; }
          .scene-p-04-recommend .meta-item strong { color: #0a0a0a; font-weight: 500; }
          .scene-p-04-recommend .meta-dot { width: 5px; height: 5px; border-radius: 50%; background: #019273; }

          .scene-p-04-recommend .apply-bar { display: flex; align-items: center; justify-content: space-between; margin-top: 14px; padding: 4px 2px; }
          .scene-p-04-recommend .apply-note { font-size: 11px; color: rgba(10,10,10,0.55); }
          .scene-p-04-recommend .apply-btns { display: flex; gap: 6px; }
          .scene-p-04-recommend #pred-apply { padding: 10px 18px; font-size: 13px; }
        </style>
        <div class="rec-wrap">
          <div class="vero-head">
            <div class="vero-av thinking"><span class="vero-av-eyes"><span class="vero-av-eye">0</span><span class="vero-av-eye vero-av-eye-r">0</span></span></div>
            <div>
              <div class="vero-label">Vero \xB7 Risk analysis complete</div>
              <div class="vero-sub">${a.energy.name} \xB7 INV-0019 \xB7 \u20AC179,000 \xB7 PTP due Fri 25 Apr</div>
            </div>
            <div style="margin-left: auto;"><span class="pill red">${n.alert} 88% slip risk</span></div>
          </div>
          <div class="rec-card">
            <div class="rec-section">
              <div class="rec-section-label">Why I'm flagging this</div>
              <div class="signals">
                <div class="signal">
                  <span class="signal-icon">${n.trendingUp}</span>
                  <span class="label"><strong>DSO trend:</strong> +8 days vs Q1 average</span>
                  <span class="meta">trending wrong</span>
                </div>
                <div class="signal">
                  <span class="signal-icon">${n.phoneOff}</span>
                  <span class="label"><strong>2 PTPs broken</strong> in the last 60 days</span>
                  <span class="meta">\u20AC420K total</span>
                </div>
                <div class="signal">
                  <span class="signal-icon">${n.trendingDown}</span>
                  <span class="label"><strong>Sentiment declining</strong> on last 3 calls</span>
                  <span class="meta">positive \u2192 neutral \u2192 cautious</span>
                </div>
              </div>
            </div>
            <div class="rec-section">
              <div class="rec-section-label">What I'd do</div>
              <div class="actions">
                <div class="action">
                  <span class="action-icon">${n.phone}</span>
                  <div class="body">
                    <div class="lab">Place a verification call before Friday</div>
                    <div class="det">In Portuguese, light-touch \xB7 re-confirm timing without escalation</div>
                  </div>
                </div>
                <div class="action">
                  <span class="action-icon">${n.alert}</span>
                  <div class="body">
                    <div class="lab">Move to priority collections queue</div>
                    <div class="det">If no response by Thursday, escalate to ${a.energy.contact}'s manager</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="rec-meta">
              <div class="meta-item"><span class="meta-dot"></span><span><strong>5 invoices</strong> rescored</span></div>
              <div class="meta-item"><span class="meta-dot"></span><span><strong>Forecast</strong> auto-updates if applied</span></div>
              <div class="meta-item"><span class="meta-dot"></span><span><strong>Audit trail</strong> attached</span></div>
            </div>
          </div>
          <div class="apply-bar">
            <div class="apply-note">Reversible from the queue if circumstances change.</div>
            <div class="apply-btns">
              <button class="btn btn-light">Adjust plan</button>
              <button class="btn" id="pred-apply">Apply Vero's plan \u2192</button>
            </div>
          </div>
        </div>
      `},{id:"p-05-resolved",title:"Step 5 \xB7 Forecast restored",body:'Dip mitigated. Forecast back on trend. Want Vero to <span class="grad">monitor and act</span> on these signals every morning?',tooltipSide:"top",spotlight:"#pred-yes",advanceOn:{click:"#pred-yes"},html:`${V}
        <style>
          .scene-p-05-resolved { display: flex; flex-direction: column; gap: 14px; }
          .scene-p-05-resolved .greeting { display: flex; align-items: center; gap: 12px; }
          .scene-p-05-resolved .greeting .check { width: 36px; height: 36px; border-radius: 50%; background: #019273; display: inline-flex; align-items: center; justify-content: center; color: #fff; }
          .scene-p-05-resolved .greeting .check svg { width: 18px; height: 18px; stroke: currentColor; stroke-width: 2.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
          .scene-p-05-resolved .greeting h3 { font: 500 18px/1.2 Geist; letter-spacing: -0.015em; margin: 0; }
          .scene-p-05-resolved .greeting p { font-size: 12px; color: rgba(10,10,10,0.55); margin: 2px 0 0; }

          .scene-p-05-resolved .chart-card { background: #fff; border: 1px solid rgba(10,10,10,0.08); border-radius: 10px; padding: 14px 18px 8px; }
          .scene-p-05-resolved .chart-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px; }
          .scene-p-05-resolved .ch-title { font-weight: 500; font-size: 13px; }
          .scene-p-05-resolved .ch-delta { font-size: 11px; color: #019273; font-weight: 500; }

          .scene-p-05-resolved .mini-stats { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 10px; }
          .scene-p-05-resolved .mini-stat { background: #fff; border: 1px solid rgba(10,10,10,0.08); border-radius: 10px; padding: 10px 12px; }
          .scene-p-05-resolved .mini-stat .l { font-size: 10px; color: rgba(10,10,10,0.5); text-transform: uppercase; letter-spacing: 0.06em; }
          .scene-p-05-resolved .mini-stat .v { font: 500 16px/1.1 Geist; letter-spacing: -0.01em; margin-top: 4px; }

          .scene-p-05-resolved .vero-bubble { display: flex; align-items: flex-end; gap: 10px; }
          .scene-p-05-resolved #pred-vero-card { background: #fff; border: 1px solid rgba(10,10,10,0.1); border-radius: 14px 14px 14px 4px; padding: 12px 14px; max-width: 460px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
          .scene-p-05-resolved .bubble-text { font-size: 13px; margin-bottom: 8px; }
          .scene-p-05-resolved .bubble-actions { display: flex; gap: 6px; }
          .scene-p-05-resolved #pred-yes { padding: 6px 12px; font-size: 12px; }
        </style>
        <div class="greeting">
          <div class="check"><svg viewBox="0 0 24 24"><path d="M5 12l5 5L20 7"/></svg></div>
          <div>
            <h3>Forecast restored</h3>
            <p>Verification call placed \xB7 ${a.energy.contact} reaffirmed Fri 25 Apr \xB7 backup escalation queued</p>
          </div>
          <div style="margin-left: auto;"><span class="pill green">\u20AC170K dip avoided</span></div>
        </div>
        <div class="chart-card">
          <div class="chart-head">
            <div class="ch-title">13-week cash forecast \xB7 after Vero's plan</div>
            <div class="ch-delta">+\u20AC50K vs prior forecast at week 13</div>
          </div>
          ${Y({weeks:ae,highlight:6,resolved:!0})}
        </div>
        <div class="mini-stats">
          <div class="mini-stat"><div class="l">Week 6</div><div class="v mono">\u20AC920K</div></div>
          <div class="mini-stat"><div class="l">Week 13</div><div class="v mono">\u20AC1.09M</div></div>
          <div class="mini-stat"><div class="l">PTPs at risk</div><div class="v mono" style="color: #019273;">\u22124</div></div>
          <div class="mini-stat"><div class="l">Confidence</div><div class="v mono">95%</div></div>
        </div>
        <div class="vero-bubble">
          <div class="vero-av thinking"><span class="vero-av-eyes"><span class="vero-av-eye">0</span><span class="vero-av-eye vero-av-eye-r">0</span></span></div>
          <div id="pred-vero-card">
            <div class="bubble-text">I rescore your forecast every morning. Want me to surface and act on signals like this automatically \u2014 within your thresholds?</div>
            <div class="bubble-actions">
              <button class="btn" id="pred-yes">Yes, monitor</button>
              <button class="btn btn-light">Just notify me</button>
            </div>
          </div>
        </div>
      `}]};y(ie);var oe=[{co:a.energy,risk:88,amount:"\u20AC179K",insight:"2 broken PTPs \xB7 sentiment declining"},{co:a.motors,risk:71,amount:"\u20AC63K",insight:"DSO trend +9 days \xB7 last call 12d ago"},{co:a.fashion,risk:64,amount:"\u20AC42K",insight:"New CFO \xB7 payment behavior unclear"},{co:a.tech,risk:58,amount:"\u20AC22K",insight:"Subscription dispute open"},{co:a.build,risk:52,amount:"\u20AC38K",insight:"POD discrepancy under review"}],O=`
  <style>
    .scene[class*="scene-v-"] { position: absolute; inset: 0; padding: 20px 28px; font: 13px/1.45 Geist, system-ui, sans-serif; color: #0a0a0a; }
    .scene[class*="scene-v-"] h2 { font: 500 17px/1.2 Geist, system-ui, sans-serif; letter-spacing: -0.015em; margin: 0; }
    .scene[class*="scene-v-"] .head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
    .scene[class*="scene-v-"] .head-sub { color: rgba(10,10,10,0.5); font-size: 12px; margin-top: 2px; }
    .scene[class*="scene-v-"] .mono { font-variant-numeric: tabular-nums; letter-spacing: -0.01em; }
    .scene[class*="scene-v-"] .pill { display: inline-flex; align-items: center; gap: 4px; font-size: 11px; font-weight: 500; padding: 3px 8px; border-radius: 999px; white-space: nowrap; }
    .scene[class*="scene-v-"] .pill.green { background: rgba(1,146,115,0.12); color: #019273; }
    .scene[class*="scene-v-"] .pill.amber { background: rgba(239,137,1,0.12); color: #b75e00; }
    .scene[class*="scene-v-"] .pill.red   { background: rgba(239,68,68,0.14); color: #b91c1c; }
    .scene[class*="scene-v-"] .pill.violet{ background: rgba(130,89,247,0.12); color: #6d28d9; }
    .scene[class*="scene-v-"] .pill.gray  { background: rgba(10,10,10,0.06); color: rgba(10,10,10,0.6); }
    .scene[class*="scene-v-"] .btn { appearance: none; border: 0; cursor: pointer; background: #0a0a0a; color: #fff; font: 500 12px/1 Geist, system-ui, sans-serif; padding: 8px 14px; border-radius: 8px; display: inline-flex; align-items: center; gap: 6px; }
    .scene[class*="scene-v-"] .btn-light { background: #fff; color: #0a0a0a; border: 1px solid rgba(10,10,10,0.1); }

    /* Shared chat container layout */
    .scene[class*="scene-v-"] .chat-frame { background: #fff; border: 1px solid rgba(10,10,10,0.08); border-radius: 12px; display: flex; flex-direction: column; height: 100%; overflow: hidden; }
    .scene[class*="scene-v-"] .chat-head { padding: 12px 16px; border-bottom: 1px solid rgba(10,10,10,0.06); display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
    .scene[class*="scene-v-"] .chat-head .vero-label { font-weight: 500; font-size: 13px; }
    .scene[class*="scene-v-"] .chat-head .vero-status { font-size: 11px; color: rgba(10,10,10,0.5); }
    .scene[class*="scene-v-"] .chat-body { flex: 1; padding: 16px 20px; display: flex; flex-direction: column; gap: 12px; overflow-y: auto; }
    .scene[class*="scene-v-"] .chat-foot { padding: 12px 16px; border-top: 1px solid rgba(10,10,10,0.06); flex-shrink: 0; }

    /* Chat message bubbles */
    .scene[class*="scene-v-"] .msg-user { display: flex; justify-content: flex-end; gap: 10px; align-items: flex-end; }
    .scene[class*="scene-v-"] .msg-user-bubble { background: #0a0a0a; color: #fff; padding: 10px 14px; border-radius: 14px 14px 4px 14px; max-width: 480px; font-size: 13px; line-height: 1.5; }
    .scene[class*="scene-v-"] .msg-user-av { width: 28px; height: 28px; border-radius: 50%; background: #4e55e1; color: #fff; display: inline-flex; align-items: center; justify-content: center; font: 500 11px/1 Geist; flex-shrink: 0; }
    .scene[class*="scene-v-"] .msg-vero { display: flex; gap: 10px; align-items: flex-start; }
    .scene[class*="scene-v-"] .msg-vero-content { flex: 1; max-width: 600px; }
    .scene[class*="scene-v-"] .msg-vero-bubble { background: #fafafa; border: 1px solid rgba(10,10,10,0.06); padding: 12px 14px; border-radius: 14px 14px 14px 4px; font-size: 13px; line-height: 1.5; }

    /* Input bar */
    .scene[class*="scene-v-"] .input-bar { display: flex; align-items: center; gap: 8px; padding: 10px 14px; background: rgba(10,10,10,0.03); border-radius: 10px; }
    .scene[class*="scene-v-"] .input-bar input { flex: 1; background: transparent; border: 0; outline: none; font: 13px/1.4 Geist, system-ui, sans-serif; color: #0a0a0a; }
    .scene[class*="scene-v-"] .input-bar input::placeholder { color: rgba(10,10,10,0.4); }
    .scene[class*="scene-v-"] .send-btn { width: 32px; height: 32px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; background: #0a0a0a; color: #fff; border: 0; cursor: pointer; flex-shrink: 0; }
    .scene[class*="scene-v-"] .send-btn svg { width: 14px; height: 14px; stroke: currentColor; stroke-width: 2; fill: none; stroke-linecap: round; stroke-linejoin: round; }
  </style>
`,re={id:"vero-chat",tag:"VERO CHAT \xB7 INTERACTIVE DEMO",coverLabel:"See Vero Chat in 30 seconds",closing:{headline:'Ask anything. Get answers and <span class="grad">actions</span>.',sub:"Want Vero to monitor your risk landscape and brief you every morning?"},scenes:[{id:"v-01-ask",title:"Step 1 \xB7 Ask",body:'Type any question. Vero pulls from your <span class="grad">live data</span>. No SQL, no joins, no waiting on BI.',tooltipSide:"left",spotlight:"#send-btn",advanceOn:{click:"#send-btn"},html:`${O}
        <style>
          .scene-v-01-ask .empty-state { display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1; color: rgba(10,10,10,0.4); text-align: center; padding: 40px 24px; }
          .scene-v-01-ask .empty-state .v-big { width: 56px; height: 56px; margin-bottom: 14px; }
          .scene-v-01-ask .empty-state h3 { font: 500 18px/1.2 Geist; color: #0a0a0a; letter-spacing: -0.015em; margin: 0 0 6px; }
          .scene-v-01-ask .empty-state p { font-size: 12px; max-width: 360px; margin: 0; }
          .scene-v-01-ask .suggested { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; margin-top: 18px; }
          .scene-v-01-ask .sugg-pill { padding: 6px 11px; background: rgba(10,10,10,0.04); border: 1px solid rgba(10,10,10,0.08); border-radius: 999px; font-size: 11px; color: rgba(10,10,10,0.65); }
        </style>
        <div class="chat-frame" style="height: 560px;">
          <div class="chat-head">
            <div class="vero-av thinking"><span class="vero-av-eyes"><span class="vero-av-eye">0</span><span class="vero-av-eye vero-av-eye-r">0</span></span></div>
            <div>
              <div class="vero-label">Vero</div>
              <div class="vero-status">\u25CF Ready \xB7 access to ledger, comms, forecasts</div>
            </div>
          </div>
          <div class="chat-body">
            <div class="empty-state">
              <div class="vero-av sz-lg thinking v-big"><span class="vero-av-eyes"><span class="vero-av-eye">0</span><span class="vero-av-eye vero-av-eye-r">0</span></span></div>
              <h3>Hi Sarah, what would you like to know?</h3>
              <p>Ask in plain English. I have full read access to your AR, your bank, your forecasts, and every customer email and call.</p>
              <div class="suggested">
                <span class="sugg-pill">Show me overdue accounts</span>
                <span class="sugg-pill">What's our DSO trend?</span>
                <span class="sugg-pill">Run the morning briefing</span>
              </div>
            </div>
          </div>
          <div class="chat-foot">
            <div class="input-bar">
              <input type="text" value="Which customers are most at risk this quarter?" readonly />
              <button class="send-btn" id="send-btn">${n.arrowRight}</button>
            </div>
          </div>
        </div>
      `},{id:"v-02-thinking",title:"Step 2 \xB7 Thinking",body:'Vero calls the right tools (aging report, credit scoring, communications history) <span class="grad">in parallel</span>.',tooltipSide:"right",spotlight:"#tool-stack",html:`${O}
        <style>
          .scene-v-02-thinking .tool-stack { display: flex; flex-direction: column; gap: 8px; padding: 12px 14px; border: 1px solid rgba(130,89,247,0.25); border-radius: 12px; background: rgba(130,89,247,0.04); }
          .scene-v-02-thinking .tool-stack .stack-head { display: flex; align-items: center; justify-content: space-between; padding-bottom: 8px; border-bottom: 1px solid rgba(130,89,247,0.18); }
          .scene-v-02-thinking .stack-label { font-size: 12px; font-weight: 500; color: #6d28d9; display: flex; align-items: center; gap: 8px; }
          .scene-v-02-thinking .stack-spin { width: 12px; height: 12px; border-radius: 50%; border: 2px solid rgba(130,89,247,0.25); border-top-color: #8259f7; animation: vc-spin 0.9s linear infinite; }
          @keyframes vc-spin { 100% { transform: rotate(360deg); } }
          .scene-v-02-thinking .stack-meta { font-size: 11px; color: rgba(10,10,10,0.5); font-variant-numeric: tabular-nums; }

          .scene-v-02-thinking .tool { display: flex; align-items: center; gap: 10px; padding: 8px 10px; background: #fff; border-radius: 8px; font-size: 12px; }
          .scene-v-02-thinking .tool-icon { width: 22px; height: 22px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; color: #fff; }
          .scene-v-02-thinking .tool-icon svg { width: 11px; height: 11px; stroke: currentColor; stroke-width: 2.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
          .scene-v-02-thinking .tool-name { flex: 1; font-family: 'Geist Mono', ui-monospace, monospace; font-size: 11px; }
          .scene-v-02-thinking .tool-result { font-size: 11px; color: rgba(10,10,10,0.6); font-variant-numeric: tabular-nums; }
          .scene-v-02-thinking .tool.done { background: rgba(1,146,115,0.04); }
          .scene-v-02-thinking .tool.done .tool-icon { background: #019273; }
          .scene-v-02-thinking .tool.running .tool-icon { background: #8259f7; animation: vc-pulse 1.4s ease-in-out infinite; }
          @keyframes vc-pulse { 50% { transform: scale(1.15); opacity: 0.8; } }
          .scene-v-02-thinking .tool.queued { opacity: 0.55; }
          .scene-v-02-thinking .tool.queued .tool-icon { background: rgba(10,10,10,0.3); }
        </style>
        <div class="chat-frame" style="height: 560px;">
          <div class="chat-head">
            <div class="vero-av thinking"><span class="vero-av-eyes"><span class="vero-av-eye">0</span><span class="vero-av-eye vero-av-eye-r">0</span></span></div>
            <div>
              <div class="vero-label">Vero</div>
              <div class="vero-status">\u25CF Working \xB7 3 tools in flight</div>
            </div>
          </div>
          <div class="chat-body">
            <div class="msg-user">
              <div class="msg-user-bubble">Which customers are most at risk this quarter?</div>
              <span class="msg-user-av">S</span>
            </div>
            <div class="msg-vero">
              <div class="vero-av thinking"><span class="vero-av-eyes"><span class="vero-av-eye">0</span><span class="vero-av-eye vero-av-eye-r">0</span></span></div>
              <div class="msg-vero-content">
                <div class="msg-vero-bubble" style="margin-bottom: 8px; color: rgba(10,10,10,0.6); font-style: italic;">Looking at risk this quarter\u2026 let me pull a few things.</div>
                <div class="tool-stack" id="tool-stack">
                  <div class="stack-head">
                    <div class="stack-label"><span class="stack-spin"></span>Calling tools</div>
                    <span class="stack-meta">2 of 3 done \xB7 1.4s</span>
                  </div>
                  <div class="tool done">
                    <span class="tool-icon">${n.check}</span>
                    <span class="tool-name">get_aging_report()</span>
                    <span class="tool-result">1,247 invoices \xB7 \u20AC4.2M open</span>
                  </div>
                  <div class="tool done">
                    <span class="tool-icon">${n.check}</span>
                    <span class="tool-name">score_credit_risk(top: 50)</span>
                    <span class="tool-result">5 above 50% slip risk</span>
                  </div>
                  <div class="tool running">
                    <span class="tool-icon">${n.phone}</span>
                    <span class="tool-name">analyze_communications(window: 60d)</span>
                    <span class="tool-result">scanning 384 emails + 47 calls\u2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="chat-foot">
            <div class="input-bar">
              <input type="text" placeholder="Ask Vero anything\u2026" />
              <button class="send-btn">${n.arrowRight}</button>
            </div>
          </div>
        </div>
      `},{id:"v-03-answer",title:"Step 3 \xB7 Answer",body:'Ranked, scored, with the why. The action chips are <span class="grad">one click</span>. Not just an answer, an offer to act.',tooltipSide:"top",spotlight:"#schedule-calls-btn",advanceOn:{click:"#schedule-calls-btn"},html:`${O}
        <style>
          .scene-v-03-answer .answer-intro { font-size: 13px; line-height: 1.55; margin-bottom: 12px; }
          .scene-v-03-answer .answer-intro strong { font-weight: 500; }
          .scene-v-03-answer .answer-intro .grad { background: var(--tour-grad); -webkit-background-clip: text; background-clip: text; color: transparent; font-weight: 500; }

          .scene-v-03-answer .ranked-list { display: flex; flex-direction: column; gap: 6px; margin-bottom: 12px; }
          .scene-v-03-answer .ranked-item { display: grid; grid-template-columns: 24px 32px 1fr 70px 56px; align-items: center; gap: 10px; padding: 8px 10px; background: #fff; border: 1px solid rgba(10,10,10,0.06); border-radius: 8px; font-size: 12px; }
          .scene-v-03-answer .ranked-item:first-child { border-color: rgba(239,68,68,0.3); background: rgba(239,68,68,0.03); }
          .scene-v-03-answer .rank-num { font: 500 12px/1 Geist; color: rgba(10,10,10,0.45); text-align: center; font-variant-numeric: tabular-nums; }
          .scene-v-03-answer .ri-name { font-weight: 500; }
          .scene-v-03-answer .ri-insight { font-size: 11px; color: rgba(10,10,10,0.55); margin-top: 1px; }
          .scene-v-03-answer .ri-amt { text-align: right; font-weight: 500; font-variant-numeric: tabular-nums; font-size: 12px; }
          .scene-v-03-answer .ri-risk { display: inline-flex; align-items: center; justify-content: center; padding: 3px 8px; border-radius: 999px; font: 500 11px/1 Geist; font-variant-numeric: tabular-nums; }
          .scene-v-03-answer .ri-risk.r-red { background: rgba(239,68,68,0.14); color: #b91c1c; }
          .scene-v-03-answer .ri-risk.r-amber { background: rgba(239,137,1,0.14); color: #b75e00; }
          .scene-v-03-answer .ri-risk.r-gray { background: rgba(10,10,10,0.06); color: rgba(10,10,10,0.55); }

          .scene-v-03-answer .actions-row { display: flex; gap: 8px; flex-wrap: wrap; padding-top: 10px; border-top: 1px solid rgba(10,10,10,0.05); }
          .scene-v-03-answer .action-chip { display: inline-flex; align-items: center; gap: 6px; padding: 8px 13px; border-radius: 999px; font-size: 12px; font-weight: 500; background: #fff; border: 1px solid rgba(10,10,10,0.1); cursor: pointer; }
          .scene-v-03-answer .action-chip svg { width: 12px; height: 12px; stroke: currentColor; stroke-width: 2; fill: none; stroke-linecap: round; stroke-linejoin: round; }
          .scene-v-03-answer #schedule-calls-btn { background: #0a0a0a; color: #fff; border-color: #0a0a0a; }
          .scene-v-03-answer .action-chip-arrow { color: rgba(255,255,255,0.7); }
          .scene-v-03-answer .summary-line { font-size: 11px; color: rgba(10,10,10,0.5); margin-top: 8px; }
        </style>
        <div class="chat-frame" style="height: 580px;">
          <div class="chat-head">
            <div class="vero-av"><span class="vero-av-eyes"><span class="vero-av-eye">0</span><span class="vero-av-eye vero-av-eye-r">0</span></span></div>
            <div>
              <div class="vero-label">Vero</div>
              <div class="vero-status">\u25CF Ready \xB7 3 tools done \xB7 2.1s</div>
            </div>
          </div>
          <div class="chat-body">
            <div class="msg-user">
              <div class="msg-user-bubble">Which customers are most at risk this quarter?</div>
              <span class="msg-user-av">S</span>
            </div>
            <div class="msg-vero">
              <div class="vero-av"><span class="vero-av-eyes"><span class="vero-av-eye">0</span><span class="vero-av-eye vero-av-eye-r">0</span></span></div>
              <div class="msg-vero-content">
                <div class="msg-vero-bubble">
                  <div class="answer-intro">
                    Five customers stand out. Total exposure is <span class="grad">\u20AC344K</span> across these accounts. Top one is <strong>${a.energy.name}</strong>: they've broken 2 PTPs in 60 days and sentiment is shifting.
                  </div>
                  <div class="ranked-list">
                    ${oe.slice(0,3).map((e,s)=>{let t=e.risk>=80?"r-red":e.risk>=65?"r-amber":"r-gray";return`
                        <div class="ranked-item">
                          <span class="rank-num">${s+1}</span>
                          ${c(e.co)}
                          <div>
                            <div class="ri-name">${e.co.name}</div>
                            <div class="ri-insight">${e.insight}</div>
                          </div>
                          <span class="ri-amt mono">${e.amount}</span>
                          <span class="ri-risk ${t}">${e.risk}%</span>
                        </div>
                      `}).join("")}
                    <div style="font-size: 11px; color: rgba(10,10,10,0.5); text-align: center; padding: 4px 0;">+ 2 more (Acme Tech, Acme Build)</div>
                  </div>
                  <div class="actions-row">
                    <button class="action-chip" id="schedule-calls-btn">
                      ${n.phone} Schedule calls for top 3 <span class="action-chip-arrow">\u2192</span>
                    </button>
                    <button class="action-chip">
                      ${n.mail} Email risk report to controller
                    </button>
                    <button class="action-chip">
                      ${n.alert} Add to morning briefing
                    </button>
                  </div>
                  <div class="summary-line">Or ask a follow-up: "show me all communications with Acme Energy" works too.</div>
                </div>
              </div>
            </div>
          </div>
          <div class="chat-foot">
            <div class="input-bar">
              <input type="text" placeholder="Ask a follow-up\u2026" />
              <button class="send-btn">${n.arrowRight}</button>
            </div>
          </div>
        </div>
      `},{id:"v-04-done",title:"Step 4 \xB7 Done",body:'Three calls scheduled in <span class="grad">one click</span>. Want Vero to flag risks and brief you every morning?',tooltipSide:"top",spotlight:"#chat-yes",advanceOn:{click:"#chat-yes"},html:`${O}
        <style>
          .scene-v-04-done .scheduled-card { background: #fff; border: 1px solid rgba(1,146,115,0.25); border-radius: 12px; overflow: hidden; }
          .scene-v-04-done .sc-head { padding: 12px 16px; background: rgba(1,146,115,0.05); border-bottom: 1px solid rgba(1,146,115,0.15); display: flex; align-items: center; gap: 10px; }
          .scene-v-04-done .sc-check { width: 22px; height: 22px; border-radius: 50%; background: #019273; display: inline-flex; align-items: center; justify-content: center; color: #fff; }
          .scene-v-04-done .sc-check svg { width: 12px; height: 12px; stroke: currentColor; stroke-width: 2.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
          .scene-v-04-done .sc-title { font-weight: 500; font-size: 13px; }
          .scene-v-04-done .sc-row { display: grid; grid-template-columns: 32px 1fr 110px 90px; align-items: center; gap: 10px; padding: 10px 16px; border-bottom: 1px solid rgba(10,10,10,0.04); font-size: 12px; }
          .scene-v-04-done .sc-row:last-child { border-bottom: 0; }
          .scene-v-04-done .sc-name { font-weight: 500; }
          .scene-v-04-done .sc-when { font-size: 11px; color: rgba(10,10,10,0.5); }
          .scene-v-04-done .sc-script { font-size: 11px; color: rgba(10,10,10,0.55); }

          .scene-v-04-done .vero-followup { margin-top: 4px; }
          .scene-v-04-done #chat-yes { padding: 6px 12px; font-size: 12px; }
          .scene-v-04-done .followup-actions { display: flex; gap: 6px; margin-top: 8px; }
        </style>
        <div class="chat-frame" style="height: 580px;">
          <div class="chat-head">
            <div class="vero-av"><span class="vero-av-eyes"><span class="vero-av-eye">0</span><span class="vero-av-eye vero-av-eye-r">0</span></span></div>
            <div>
              <div class="vero-label">Vero</div>
              <div class="vero-status">\u25CF Ready \xB7 3 calls scheduled \xB7 0:00:8</div>
            </div>
          </div>
          <div class="chat-body">
            <div class="msg-vero">
              <div class="vero-av"><span class="vero-av-eyes"><span class="vero-av-eye">0</span><span class="vero-av-eye vero-av-eye-r">0</span></span></div>
              <div class="msg-vero-content">
                <div class="msg-vero-bubble">
                  Done. I scheduled three light-touch verification calls for tomorrow morning, in each customer's language. Here's the queue:
                  <div class="scheduled-card" style="margin-top: 12px;">
                    <div class="sc-head">
                      <span class="sc-check">${n.check}</span>
                      <span class="sc-title">Tomorrow \xB7 09:00 onwards</span>
                      <span class="pill green" style="margin-left: auto;">3 calls queued</span>
                    </div>
                    <div class="sc-row">
                      ${C(a.energy)}
                      <div>
                        <div class="sc-name">${a.energy.name} \xB7 ${a.energy.contact}</div>
                        <div class="sc-script">Light-touch \xB7 re-confirm Fri payment timing</div>
                      </div>
                      <span class="sc-when mono">09:00 \xB7 PT</span>
                      <span class="pill gray">Portuguese</span>
                    </div>
                    <div class="sc-row">
                      ${C(a.motors)}
                      <div>
                        <div class="sc-name">${a.motors.name} \xB7 ${a.motors.contact}</div>
                        <div class="sc-script">Check on aging \xB7 DSO trend</div>
                      </div>
                      <span class="sc-when mono">09:30 \xB7 DE</span>
                      <span class="pill gray">German</span>
                    </div>
                    <div class="sc-row">
                      ${C(a.fashion)}
                      <div>
                        <div class="sc-name">${a.fashion.name} \xB7 ${a.fashion.contact}</div>
                        <div class="sc-script">Intro to new CFO \xB7 payment cadence</div>
                      </div>
                      <span class="sc-when mono">10:00 \xB7 SE</span>
                      <span class="pill gray">English</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="msg-vero vero-followup">
              <div class="vero-av thinking"><span class="vero-av-eyes"><span class="vero-av-eye">0</span><span class="vero-av-eye vero-av-eye-r">0</span></span></div>
              <div class="msg-vero-content">
                <div class="msg-vero-bubble">
                  Want me to flag risk shifts and brief you every morning at 08:00? I'll only act on signals you approve in advance.
                  <div class="followup-actions">
                    <button class="btn" id="chat-yes">Yes, brief me daily</button>
                    <button class="btn btn-light">Just notify me</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="chat-foot">
            <div class="input-bar">
              <input type="text" placeholder="Ask a follow-up\u2026" />
              <button class="send-btn">${n.arrowRight}</button>
            </div>
          </div>
        </div>
      `}]};y(re);var _=`
  <style>
    .scene[class*="scene-vb-"] { position: absolute; inset: 0; padding: 20px 28px; font: 13px/1.45 Geist, system-ui, sans-serif; color: #0a0a0a; }
    .scene[class*="scene-vb-"] h2 { font: 500 17px/1.2 Geist, system-ui, sans-serif; letter-spacing: -0.015em; margin: 0; }
    .scene[class*="scene-vb-"] .mono { font-variant-numeric: tabular-nums; letter-spacing: -0.01em; }
    .scene[class*="scene-vb-"] .pill { display: inline-flex; align-items: center; gap: 4px; font-size: 11px; font-weight: 500; padding: 3px 8px; border-radius: 999px; white-space: nowrap; }
    .scene[class*="scene-vb-"] .pill.green { background: rgba(1,146,115,0.14); color: #019273; }
    .scene[class*="scene-vb-"] .pill.amber { background: rgba(239,137,1,0.14); color: #b75e00; }
    .scene[class*="scene-vb-"] .pill.red   { background: rgba(239,68,68,0.14); color: #b91c1c; }
    .scene[class*="scene-vb-"] .pill.violet{ background: rgba(130,89,247,0.14); color: #6d28d9; }
    .scene[class*="scene-vb-"] .pill.indigo{ background: rgba(78,85,225,0.14); color: #3730a3; }
    .scene[class*="scene-vb-"] .pill.blue  { background: rgba(14,165,233,0.14); color: #0369a1; }
    .scene[class*="scene-vb-"] .pill.gray  { background: rgba(10,10,10,0.06); color: rgba(10,10,10,0.6); }
    .scene[class*="scene-vb-"] .btn { appearance: none; border: 0; cursor: pointer; background: #0a0a0a; color: #fff; font: 500 12px/1 Geist, system-ui, sans-serif; padding: 9px 16px; border-radius: 8px; display: inline-flex; align-items: center; gap: 6px; white-space: nowrap; }
    .scene[class*="scene-vb-"] .btn svg { width: 13px; height: 13px; stroke: currentColor; stroke-width: 2; fill: none; stroke-linecap: round; stroke-linejoin: round; }
    .scene[class*="scene-vb-"] .btn-light { background: #fff; color: #0a0a0a; border: 1px solid rgba(10,10,10,0.1); }

    /* Chat frame */
    .scene[class*="scene-vb-"] .chat-frame { background: #fff; border: 1px solid rgba(10,10,10,0.08); border-radius: 12px; display: flex; flex-direction: column; height: 100%; overflow: hidden; }
    .scene[class*="scene-vb-"] .chat-head { padding: 11px 16px; border-bottom: 1px solid rgba(10,10,10,0.06); display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
    .scene[class*="scene-vb-"] .chat-head .vero-label { font-weight: 500; font-size: 13px; }
    .scene[class*="scene-vb-"] .chat-head .vero-status { font-size: 11px; color: rgba(10,10,10,0.5); }
    .scene[class*="scene-vb-"] .chat-body { flex: 1; padding: 14px 18px; display: flex; flex-direction: column; gap: 10px; overflow-y: auto; }
    .scene[class*="scene-vb-"] .chat-foot { padding: 10px 14px; border-top: 1px solid rgba(10,10,10,0.06); flex-shrink: 0; }

    .scene[class*="scene-vb-"] .msg-vero { display: flex; gap: 10px; align-items: flex-start; }
    .scene[class*="scene-vb-"] .msg-vero-content { flex: 1; max-width: 900px; }
    .scene[class*="scene-vb-"] .msg-vero-bubble { background: #fafafa; border: 1px solid rgba(10,10,10,0.06); padding: 14px 16px; border-radius: 14px 14px 14px 4px; font-size: 13px; line-height: 1.5; }

    .scene[class*="scene-vb-"] .input-bar { display: flex; align-items: center; gap: 8px; padding: 9px 12px; background: rgba(10,10,10,0.03); border-radius: 10px; }
    .scene[class*="scene-vb-"] .input-bar input { flex: 1; background: transparent; border: 0; outline: none; font: 13px/1.4 Geist, system-ui, sans-serif; color: #0a0a0a; }
    .scene[class*="scene-vb-"] .input-bar input::placeholder { color: rgba(10,10,10,0.4); }
    .scene[class*="scene-vb-"] .send-btn { width: 32px; height: 32px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; background: #0a0a0a; color: #fff; border: 0; cursor: pointer; flex-shrink: 0; }
    .scene[class*="scene-vb-"] .send-btn svg { width: 14px; height: 14px; stroke: currentColor; stroke-width: 2; fill: none; stroke-linecap: round; stroke-linejoin: round; }

    .scene[class*="scene-vb-"] .num-green  { color: #019273; font-weight: 500; font-variant-numeric: tabular-nums; }
    .scene[class*="scene-vb-"] .num-indigo { color: #3730a3; font-weight: 500; font-variant-numeric: tabular-nums; }
    .scene[class*="scene-vb-"] .num-amber  { color: #b75e00; font-weight: 500; font-variant-numeric: tabular-nums; }
    .scene[class*="scene-vb-"] .num-violet { color: #6d28d9; font-weight: 500; font-variant-numeric: tabular-nums; }
  </style>
`,ce={id:"vero-chat-v2",tag:"VERO AGENT \xB7 INTERACTIVE DEMO",coverLabel:"Meet Vero, your AR team lead",closing:{headline:'Reviewed, approved, fired. <span class="grad">One agent</span> running your AR.',sub:"This is what your mornings could look like."},scenes:[{id:"vb-01-recap",title:"Step 1 \xB7 Overnight recap",body:`Vero already handled the obvious work. Below is what's left, <span class="grad">waiting on you</span>.`,tooltipSide:"top",spotlight:"#vb-start-review",advanceOn:{click:"#vb-start-review"},html:`${_}
        <style>
          .scene-vb-01-recap .work-ribbon { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 12px; padding: 10px 12px; background: rgba(1,146,115,0.04); border: 1px solid rgba(1,146,115,0.18); border-radius: 8px; align-items: center; }
          .scene-vb-01-recap .work-label { font: 500 10px/1 Geist; letter-spacing: 0.08em; text-transform: uppercase; color: #019273; margin-right: 4px; }
          .scene-vb-01-recap .work-chip { display: inline-flex; align-items: center; gap: 5px; font-size: 11px; color: #019273; background: rgba(1,146,115,0.12); padding: 3px 8px; border-radius: 999px; font-variant-numeric: tabular-nums; opacity: 0; animation: chip-in 350ms cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .scene-vb-01-recap .work-chip svg { width: 10px; height: 10px; stroke: currentColor; stroke-width: 2.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
          .scene-vb-01-recap .work-chip.c1 { animation-delay: 0.15s; }
          .scene-vb-01-recap .work-chip.c2 { animation-delay: 0.35s; }
          .scene-vb-01-recap .work-chip.c3 { animation-delay: 0.55s; }
          .scene-vb-01-recap .work-chip.c4 { animation-delay: 0.75s; }
          .scene-vb-01-recap .work-meta { margin-left: auto; font-size: 11px; color: rgba(10,10,10,0.5); font-variant-numeric: tabular-nums; }
          @keyframes chip-in { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }

          .scene-vb-01-recap .brief-intro { font-size: 13px; margin-bottom: 12px; }
          .scene-vb-01-recap .brief-intro strong { font-weight: 500; }

          .scene-vb-01-recap .sections { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
          .scene-vb-01-recap .section { display: grid; grid-template-columns: 28px 1fr; gap: 10px; padding: 11px 13px; border-radius: 10px; align-items: start; }
          .scene-vb-01-recap .section.cashapp { background: rgba(1,146,115,0.06); border: 1px solid rgba(1,146,115,0.22); }
          .scene-vb-01-recap .section.collections { background: rgba(78,85,225,0.06); border: 1px solid rgba(78,85,225,0.22); }
          .scene-vb-01-recap .section.deductions { background: rgba(239,137,1,0.06); border: 1px solid rgba(239,137,1,0.22); }
          .scene-vb-01-recap .section.forecast { background: rgba(130,89,247,0.06); border: 1px solid rgba(130,89,247,0.22); }
          .scene-vb-01-recap .sec-icon { width: 28px; height: 28px; border-radius: 7px; display: inline-flex; align-items: center; justify-content: center; color: #fff; }
          .scene-vb-01-recap .sec-icon svg { width: 14px; height: 14px; stroke: currentColor; stroke-width: 2.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
          .scene-vb-01-recap .section.cashapp .sec-icon { background: #019273; }
          .scene-vb-01-recap .section.collections .sec-icon { background: #4e55e1; }
          .scene-vb-01-recap .section.deductions .sec-icon { background: #b45309; }
          .scene-vb-01-recap .section.forecast .sec-icon { background: #6d28d9; }

          .scene-vb-01-recap .sec-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 3px; }
          .scene-vb-01-recap .sec-title { font-size: 12px; font-weight: 500; }
          .scene-vb-01-recap .sec-badge { font-size: 10px; font-weight: 500; padding: 2px 7px; border-radius: 999px; white-space: nowrap; }
          .scene-vb-01-recap .section.cashapp .sec-badge { background: rgba(1,146,115,0.18); color: #019273; }
          .scene-vb-01-recap .section.collections .sec-badge { background: rgba(78,85,225,0.18); color: #3730a3; }
          .scene-vb-01-recap .section.deductions .sec-badge { background: rgba(239,137,1,0.2); color: #b75e00; }
          .scene-vb-01-recap .section.forecast .sec-badge { background: rgba(130,89,247,0.2); color: #6d28d9; }
          .scene-vb-01-recap .sec-body { font-size: 11px; color: rgba(10,10,10,0.72); line-height: 1.45; }

          .scene-vb-01-recap .kpi-row { display: flex; gap: 14px; margin-top: 10px; padding-top: 10px; border-top: 1px dashed rgba(10,10,10,0.08); font-size: 11px; color: rgba(10,10,10,0.55); }
          .scene-vb-01-recap .kpi-row .kpi strong { color: #0a0a0a; font-weight: 500; font-variant-numeric: tabular-nums; }

          .scene-vb-01-recap .cta-bar { display: flex; align-items: center; justify-content: space-between; gap: 14px; padding: 11px 14px; background: linear-gradient(180deg, rgba(10,10,10,0.03), rgba(10,10,10,0.05)); border-radius: 10px; margin-top: 12px; }
          .scene-vb-01-recap .cta-label { font-size: 12px; font-weight: 500; }
          .scene-vb-01-recap .cta-sub { font-size: 11px; color: rgba(10,10,10,0.55); margin-top: 2px; }
        </style>
        <div class="chat-frame" style="height: 580px;">
          <div class="chat-head">
            <div class="vero-av"><span class="vero-av-eyes"><span class="vero-av-eye">0</span><span class="vero-av-eye vero-av-eye-r">0</span></span></div>
            <div>
              <div class="vero-label">Vero</div>
              <div class="vero-status">\u25CF Recap ready \xB7 composed 0:00:12 ago</div>
            </div>
            <span class="pill gray" style="margin-left: auto;">Tuesday, 08:00</span>
          </div>
          <div class="chat-body">
            <div class="msg-vero">
              <div class="vero-av"><span class="vero-av-eyes"><span class="vero-av-eye">0</span><span class="vero-av-eye vero-av-eye-r">0</span></span></div>
              <div class="msg-vero-content">
                <div class="msg-vero-bubble">
                  <div class="work-ribbon">
                    <span class="work-label">Done overnight</span>
                    <span class="work-chip c1">${n.check} 12 PDFs extracted</span>
                    <span class="work-chip c2">${n.check} 10 invoices matched</span>
                    <span class="work-chip c3">${n.check} 8 JEs posted</span>
                    <span class="work-chip c4">${n.check} 5 deductions resolved</span>
                    <span class="work-meta">14h 28m unattended</span>
                  </div>
                  <div class="brief-intro">
                    <strong>Good morning, Sarah.</strong> <span class="num-green">\u20AC847K cleared</span> overnight. <span class="num-amber">3 buckets</span> couldn't go autonomous without your eyes. Q2 forecast upgraded <span class="num-green">+\u20AC1.2M</span>.
                  </div>
                  <div class="sections">
                    <div class="section cashapp">
                      <span class="sec-icon">${n.check}</span>
                      <div>
                        <div class="sec-head">
                          <div class="sec-title">Cash application</div>
                          <span class="sec-badge">2 need your review</span>
                        </div>
                        <div class="sec-body"><span class="num-green">\u20AC847K cleared</span> on 8 auto-posted JEs. Two edge cases drafted and waiting.</div>
                      </div>
                    </div>
                    <div class="section collections">
                      <span class="sec-icon">${n.phone}</span>
                      <div>
                        <div class="sec-head">
                          <div class="sec-title">Collections \xB7 today</div>
                          <span class="sec-badge">3 calls to approve</span>
                        </div>
                        <div class="sec-body">Top 3 priorities I'd work. <span class="num-indigo">\u20AC279K recovery</span> projected.</div>
                      </div>
                    </div>
                    <div class="section deductions">
                      <span class="sec-icon">${n.alert}</span>
                      <div>
                        <div class="sec-head">
                          <div class="sec-title">Deductions</div>
                          <span class="sec-badge">1 needs you</span>
                        </div>
                        <div class="sec-body"><span class="num-green">5 resolved</span> autonomously. One \u20AC450 portion I couldn't explain, packaged for you.</div>
                      </div>
                    </div>
                    <div class="section forecast">
                      <span class="sec-icon">${n.trendingUp}</span>
                      <div>
                        <div class="sec-head">
                          <div class="sec-title">Q2 forecast \xB7 impact</div>
                          <span class="sec-badge">+\u20AC1.2M WoW</span>
                        </div>
                        <div class="sec-body">Upgraded to <span class="num-violet">\u20AC14.6M</span>. Driven by 8 PTP captures, lower DSO on 5 accounts.</div>
                      </div>
                    </div>
                  </div>
                  <div class="kpi-row">
                    <div class="kpi"><strong>6</strong> items for you</div>
                    <div class="kpi"><strong>\u20AC279K</strong> to recover</div>
                    <div class="kpi"><strong>~2h</strong> time back</div>
                  </div>
                  <div class="cta-bar">
                    <div>
                      <div class="cta-label">Walk me through each bucket, one approval at a time</div>
                      <div class="cta-sub">2 JEs \xB7 3 calls \xB7 1 deduction \xB7 nothing fires until you say yes</div>
                    </div>
                    <button class="btn" id="vb-start-review">Review &amp; approve</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="chat-foot">
            <div class="input-bar">
              <input type="text" placeholder="Ask a follow-up..." />
              <button class="send-btn">${n.arrowRight}</button>
            </div>
          </div>
        </div>
      `},{id:"vb-02-jes",title:"Step 2 \xB7 Cash app \xB7 2 JEs",body:'Every ledger line is visible. No black box, <span class="grad">no surprises</span>.',tooltipSide:"top",spotlight:"#vb-approve-jes",advanceOn:{click:"#vb-approve-jes"},html:`${_}
        <style>
          .scene-vb-02-jes .sub-head { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; padding: 10px 12px; background: rgba(1,146,115,0.04); border: 1px solid rgba(1,146,115,0.18); border-radius: 8px; }
          .scene-vb-02-jes .sub-head-icon { width: 26px; height: 26px; border-radius: 6px; background: #019273; color: #fff; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; }
          .scene-vb-02-jes .sub-head-icon svg { width: 13px; height: 13px; stroke: currentColor; stroke-width: 2.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
          .scene-vb-02-jes .sub-head-text { flex: 1; }
          .scene-vb-02-jes .sub-head-title { font-weight: 500; font-size: 12px; }
          .scene-vb-02-jes .sub-head-meta { font-size: 11px; color: rgba(10,10,10,0.55); margin-top: 2px; }

          .scene-vb-02-jes .je-list { display: flex; flex-direction: column; gap: 10px; }
          .scene-vb-02-jes .je { background: #fff; border: 1px solid rgba(10,10,10,0.08); border-radius: 10px; overflow: hidden; }
          .scene-vb-02-jes .je-head { padding: 10px 14px; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid rgba(10,10,10,0.06); }
          .scene-vb-02-jes .je-meta { flex: 1; min-width: 0; }
          .scene-vb-02-jes .je-title { font-weight: 500; font-size: 12px; }
          .scene-vb-02-jes .je-sub { font-size: 10px; color: rgba(10,10,10,0.55); margin-top: 2px; font-variant-numeric: tabular-nums; }
          .scene-vb-02-jes .je-reason { font-size: 10px; padding: 8px 14px; background: rgba(239,137,1,0.06); border-bottom: 1px solid rgba(10,10,10,0.06); color: rgba(10,10,10,0.65); display: flex; align-items: center; gap: 6px; }
          .scene-vb-02-jes .je-reason svg { width: 11px; height: 11px; stroke: #b75e00; stroke-width: 2; fill: none; stroke-linecap: round; stroke-linejoin: round; flex-shrink: 0; }
          .scene-vb-02-jes .je-table { width: 100%; border-collapse: collapse; font-size: 11px; }
          .scene-vb-02-jes .je-table th { text-align: left; font: 500 9px/1 Geist; letter-spacing: 0.06em; text-transform: uppercase; color: rgba(10,10,10,0.45); padding: 7px 14px; background: rgba(10,10,10,0.02); }
          .scene-vb-02-jes .je-table td { padding: 6px 14px; font-variant-numeric: tabular-nums; }
          .scene-vb-02-jes .je-table .num { text-align: right; font-weight: 500; }
          .scene-vb-02-jes .je-table tr + tr td { border-top: 1px solid rgba(10,10,10,0.04); }
          .scene-vb-02-jes .je-total { padding: 8px 14px; background: rgba(10,10,10,0.02); display: flex; justify-content: space-between; font-size: 11px; }
          .scene-vb-02-jes .je-total .balanced { color: #019273; font-weight: 500; }

          .scene-vb-02-jes .cta-bar { display: flex; align-items: center; justify-content: space-between; gap: 14px; padding: 11px 14px; background: linear-gradient(180deg, rgba(10,10,10,0.03), rgba(10,10,10,0.05)); border-radius: 10px; margin-top: 12px; }
          .scene-vb-02-jes .cta-label { font-size: 12px; font-weight: 500; }
          .scene-vb-02-jes .cta-sub { font-size: 11px; color: rgba(10,10,10,0.55); margin-top: 2px; }
        </style>
        <div class="chat-frame" style="height: 580px;">
          <div class="chat-head">
            <div class="vero-av"><span class="vero-av-eyes"><span class="vero-av-eye">0</span><span class="vero-av-eye vero-av-eye-r">0</span></span></div>
            <div>
              <div class="vero-label">Vero</div>
              <div class="vero-status">\u25CF Reviewing \xB7 step 1 of 3 \xB7 cash application</div>
            </div>
            <span class="pill green" style="margin-left: auto;">2 of 6 items</span>
          </div>
          <div class="chat-body">
            <div class="msg-vero">
              <div class="vero-av"><span class="vero-av-eyes"><span class="vero-av-eye">0</span><span class="vero-av-eye vero-av-eye-r">0</span></span></div>
              <div class="msg-vero-content">
                <div class="msg-vero-bubble">
                  <div style="font-size: 13px; margin-bottom: 10px;">Two journal entries sit below my auto-post threshold. Both drafted, both balanced, full evidence attached:</div>
                  <div class="sub-head">
                    <span class="sub-head-icon">${n.check}</span>
                    <div class="sub-head-text">
                      <div class="sub-head-title">Cash application \xB7 2 edge cases for your approval</div>
                      <div class="sub-head-meta">Already cleared overnight: 8 JEs, \u20AC847K. These 2 didn't hit auto-post.</div>
                    </div>
                    <span class="pill green">Balanced</span>
                  </div>
                  <div class="je-list">
                    <div class="je">
                      <div class="je-head">
                        ${C(a.industries)}
                        <div class="je-meta">
                          <div class="je-title">JE-2024-04-22-A-0042 \xB7 ${a.industries.name}</div>
                          <div class="je-sub">Wire \u20AC530,000 \xB7 match confidence 87% \xB7 1 line needs split between INV-0021 and INV-0023</div>
                        </div>
                        <span class="pill amber">87% \xB7 below threshold</span>
                      </div>
                      <div class="je-reason">
                        ${n.alert}
                        <span><strong>Why you:</strong> short \u20AC230 between invoices, fits trade promo pattern, but my threshold is 95%. Your call.</span>
                      </div>
                      <table class="je-table">
                        <thead><tr><th>Account</th><th>Description</th><th class="num">Debit</th><th class="num">Credit</th></tr></thead>
                        <tbody>
                          <tr><td>11000 \xB7 Bank Deutsche</td><td>Wire receipt</td><td class="num">530,000.00</td><td></td></tr>
                          <tr><td>12010 \xB7 AR Acme Industries</td><td>Clear INV-0019</td><td></td><td class="num">179,000.00</td></tr>
                          <tr><td>12010 \xB7 AR Acme Industries</td><td>Clear INV-0020</td><td></td><td class="num">211,000.00</td></tr>
                          <tr><td>12010 \xB7 AR Acme Industries</td><td>Clear INV-0021 plus net</td><td></td><td class="num">140,000.00</td></tr>
                        </tbody>
                      </table>
                      <div class="je-total">
                        <span style="color: rgba(10,10,10,0.55);">Totals</span>
                        <span><span style="color: rgba(10,10,10,0.55); margin-right: 12px;">DR <span class="mono" style="color: #0a0a0a;">530,000</span></span><span style="color: rgba(10,10,10,0.55);">CR <span class="mono" style="color: #0a0a0a;">530,000</span></span> \xB7 <span class="balanced">balanced</span></span>
                      </div>
                    </div>
                    <div class="je">
                      <div class="je-head">
                        ${C(a.pharma)}
                        <div class="je-meta">
                          <div class="je-title">JE-2024-04-22-A-0043 \xB7 ${a.pharma.name}</div>
                          <div class="je-sub">Wire \u20AC92,400 \xB7 match confidence 81% \xB7 FX rate EUR/USD locked at 1.084</div>
                        </div>
                        <span class="pill amber">81% \xB7 below threshold</span>
                      </div>
                      <div class="je-reason">
                        ${n.alert}
                        <span><strong>Why you:</strong> cross-currency conversion. Want you to confirm the rate against treasury lock before posting.</span>
                      </div>
                      <table class="je-table">
                        <thead><tr><th>Account</th><th>Description</th><th class="num">Debit</th><th class="num">Credit</th></tr></thead>
                        <tbody>
                          <tr><td>11020 \xB7 Bank HSBC USD</td><td>Wire receipt $100,000 at 1.084</td><td class="num">92,252.58</td><td></td></tr>
                          <tr><td>11021 \xB7 FX clearing</td><td>Lock variance</td><td class="num">147.42</td><td></td></tr>
                          <tr><td>12060 \xB7 AR Acme Pharma</td><td>Clear INV-P-0055</td><td></td><td class="num">92,400.00</td></tr>
                        </tbody>
                      </table>
                      <div class="je-total">
                        <span style="color: rgba(10,10,10,0.55);">Totals</span>
                        <span><span style="color: rgba(10,10,10,0.55); margin-right: 12px;">DR <span class="mono" style="color: #0a0a0a;">92,400</span></span><span style="color: rgba(10,10,10,0.55);">CR <span class="mono" style="color: #0a0a0a;">92,400</span></span> \xB7 <span class="balanced">balanced</span></span>
                      </div>
                    </div>
                  </div>
                  <div class="cta-bar">
                    <div>
                      <div class="cta-label">Post both as drafted, or edit either one first</div>
                      <div class="cta-sub">Posts to SAP instantly \xB7 audit trail preserved \xB7 reversible from the journal list</div>
                    </div>
                    <button class="btn" id="vb-approve-jes">${n.check} Approve both JEs</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="chat-foot">
            <div class="input-bar">
              <input type="text" placeholder="Or ask me to edit either one..." />
              <button class="send-btn">${n.arrowRight}</button>
            </div>
          </div>
        </div>
      `},{id:"vb-03-calls",title:"Step 3 \xB7 Collections \xB7 3 calls",body:'Per-customer script, language and time. Vero waits for your <span class="grad">green light</span>.',tooltipSide:"top",spotlight:"#vb-approve-calls",advanceOn:{click:"#vb-approve-calls"},html:`${_}
        <style>
          .scene-vb-03-calls .sub-head { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; padding: 10px 12px; background: rgba(78,85,225,0.04); border: 1px solid rgba(78,85,225,0.22); border-radius: 8px; }
          .scene-vb-03-calls .sub-head-icon { width: 26px; height: 26px; border-radius: 6px; background: #4e55e1; color: #fff; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; }
          .scene-vb-03-calls .sub-head-icon svg { width: 13px; height: 13px; stroke: currentColor; stroke-width: 2.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
          .scene-vb-03-calls .sub-head-text { flex: 1; }
          .scene-vb-03-calls .sub-head-title { font-weight: 500; font-size: 12px; }
          .scene-vb-03-calls .sub-head-meta { font-size: 11px; color: rgba(10,10,10,0.55); margin-top: 2px; }

          .scene-vb-03-calls .call-list { display: flex; flex-direction: column; gap: 8px; }
          .scene-vb-03-calls .call { background: #fff; border: 1px solid rgba(10,10,10,0.08); border-radius: 10px; padding: 11px 13px; display: grid; grid-template-columns: 36px 1fr auto; gap: 12px; align-items: start; }
          .scene-vb-03-calls .call-meta { min-width: 0; }
          .scene-vb-03-calls .call-name { font-weight: 500; font-size: 13px; display: flex; align-items: center; gap: 8px; }
          .scene-vb-03-calls .call-amt { font-size: 11px; font-weight: 500; color: #3730a3; font-variant-numeric: tabular-nums; }
          .scene-vb-03-calls .call-why { font-size: 11px; color: rgba(10,10,10,0.6); margin-top: 4px; line-height: 1.45; }
          .scene-vb-03-calls .call-why .tag { display: inline-block; padding: 1px 6px; margin-right: 4px; background: rgba(10,10,10,0.05); border-radius: 4px; color: rgba(10,10,10,0.55); font-size: 10px; text-transform: uppercase; letter-spacing: 0.04em; }
          .scene-vb-03-calls .call-script { font-size: 11px; color: rgba(10,10,10,0.55); background: rgba(10,10,10,0.03); padding: 8px 10px; border-radius: 6px; margin-top: 6px; font-style: italic; line-height: 1.4; border-left: 2px solid rgba(78,85,225,0.3); }
          .scene-vb-03-calls .call-right { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; flex-shrink: 0; }
          .scene-vb-03-calls .call-time { font-size: 11px; font-variant-numeric: tabular-nums; color: rgba(10,10,10,0.7); font-weight: 500; }

          .scene-vb-03-calls .projection-row { display: flex; align-items: center; gap: 10px; margin-top: 10px; padding: 10px 12px; background: rgba(1,146,115,0.05); border-radius: 8px; font-size: 12px; }
          .scene-vb-03-calls .projection-row .dot { width: 6px; height: 6px; border-radius: 50%; background: #019273; }
          .scene-vb-03-calls .projection-row strong { font-weight: 500; color: #019273; font-variant-numeric: tabular-nums; }

          .scene-vb-03-calls .cta-bar { display: flex; align-items: center; justify-content: space-between; gap: 14px; padding: 11px 14px; background: linear-gradient(180deg, rgba(10,10,10,0.03), rgba(10,10,10,0.05)); border-radius: 10px; margin-top: 12px; }
          .scene-vb-03-calls .cta-label { font-size: 12px; font-weight: 500; }
          .scene-vb-03-calls .cta-sub { font-size: 11px; color: rgba(10,10,10,0.55); margin-top: 2px; }
        </style>
        <div class="chat-frame" style="height: 580px;">
          <div class="chat-head">
            <div class="vero-av"><span class="vero-av-eyes"><span class="vero-av-eye">0</span><span class="vero-av-eye vero-av-eye-r">0</span></span></div>
            <div>
              <div class="vero-label">Vero</div>
              <div class="vero-status">\u25CF Reviewing \xB7 step 2 of 3 \xB7 collections</div>
            </div>
            <span class="pill indigo" style="margin-left: auto;">3 of 6 items</span>
          </div>
          <div class="chat-body">
            <div class="msg-vero">
              <div class="vero-av"><span class="vero-av-eyes"><span class="vero-av-eye">0</span><span class="vero-av-eye vero-av-eye-r">0</span></span></div>
              <div class="msg-vero-content">
                <div class="msg-vero-bubble">
                  <div style="font-size: 13px; margin-bottom: 10px;">Three priority collections today. Projected recovery <span class="num-green">\u20AC279K</span>. Each one has the customer, language, script I'd use, and timing. Approve any or all.</div>
                  <div class="sub-head">
                    <span class="sub-head-icon">${n.phone}</span>
                    <div class="sub-head-text">
                      <div class="sub-head-title">Collections queue \xB7 3 calls ready</div>
                      <div class="sub-head-meta">Light-touch, per your playbook, fallback to email on voicemail</div>
                    </div>
                    <span class="pill indigo">\u20AC279K projected</span>
                  </div>
                  <div class="call-list">
                    <div class="call">
                      ${c(a.energy)}
                      <div class="call-meta">
                        <div class="call-name">${a.energy.contact} \xB7 ${a.energy.name} <span class="call-amt">\u20AC179K</span></div>
                        <div class="call-why"><span class="tag">Why</span>Verify Friday PTP. Has broken 2 PTPs in 60d, sentiment declined last 3 calls.</div>
                        <div class="call-script">"Bom dia Maria, liga\xE7\xE3o r\xE1pida, s\xF3 para confirmar a transfer\xEAncia de \u20AC179.000 para sexta-feira, como combinado. Tudo em ordem do vosso lado?"</div>
                      </div>
                      <div class="call-right">
                        <span class="call-time">09:00 \xB7 PT</span>
                        <span class="pill gray">Portuguese</span>
                        <span class="pill green">Light-touch</span>
                      </div>
                    </div>
                    <div class="call">
                      ${c(a.motors)}
                      <div class="call-meta">
                        <div class="call-name">${a.motors.contact} \xB7 ${a.motors.name} <span class="call-amt">\u20AC63K</span></div>
                        <div class="call-why"><span class="tag">Why</span>DSO drift, 9 days over Q1 average, no response to last email 12 days ago.</div>
                        <div class="call-script">"Guten Morgen Frau Becker, Anruf zu Ihrer offenen Rechnung INV-1183 \xFCber \u20AC63.000. K\xF6nnen wir \xFCber den Zahlungseingang sprechen?"</div>
                      </div>
                      <div class="call-right">
                        <span class="call-time">09:30 \xB7 DE</span>
                        <span class="pill gray">German</span>
                        <span class="pill amber">Check-in</span>
                      </div>
                    </div>
                    <div class="call">
                      ${c(a.fashion)}
                      <div class="call-meta">
                        <div class="call-name">${a.fashion.contact} \xB7 ${a.fashion.name} <span class="call-amt">\u20AC37K</span></div>
                        <div class="call-why"><span class="tag">Why</span>New CFO joined 30d ago. No payment history yet, intro call to set cadence.</div>
                        <div class="call-script">"Hi Lina, quick call to welcome you to the role and understand your payment cycle. We have INV-0876 outstanding for \u20AC37,000, non-urgent, but wanted to connect."</div>
                      </div>
                      <div class="call-right">
                        <span class="call-time">10:00 \xB7 SE</span>
                        <span class="pill gray">English</span>
                        <span class="pill blue">Intro</span>
                      </div>
                    </div>
                  </div>
                  <div class="projection-row">
                    <span class="dot"></span>
                    <span>Historical hit-rate on calls like these: <strong>72%</strong>. Projected cash unlocked this week <strong>\u20AC201K</strong> (weighted).</span>
                  </div>
                  <div class="cta-bar">
                    <div>
                      <div class="cta-label">Schedule all three, or decline any I've misjudged</div>
                      <div class="cta-sub">SIP trunk \xB7 transcript + sentiment captured per call \xB7 written summary in your inbox after</div>
                    </div>
                    <button class="btn" id="vb-approve-calls">${n.check} Approve 3 calls</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="chat-foot">
            <div class="input-bar">
              <input type="text" placeholder="Or say &lsquo;skip the Motors call&rsquo;..." />
              <button class="send-btn">${n.arrowRight}</button>
            </div>
          </div>
        </div>
      `},{id:"vb-04-flag",title:"Step 4 \xB7 Deductions \xB7 1 flag",body:'Vero settled 5 itself. This one hit the <span class="grad">guardrail</span>, packaged for you.',tooltipSide:"top",spotlight:"#vb-send-to-queue",advanceOn:{click:"#vb-send-to-queue"},html:`${_}
        <style>
          .scene-vb-04-flag .sub-head { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; padding: 10px 12px; background: rgba(239,137,1,0.04); border: 1px solid rgba(239,137,1,0.22); border-radius: 8px; }
          .scene-vb-04-flag .sub-head-icon { width: 26px; height: 26px; border-radius: 6px; background: #b45309; color: #fff; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; }
          .scene-vb-04-flag .sub-head-icon svg { width: 13px; height: 13px; stroke: currentColor; stroke-width: 2.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
          .scene-vb-04-flag .sub-head-text { flex: 1; }
          .scene-vb-04-flag .sub-head-title { font-weight: 500; font-size: 12px; }
          .scene-vb-04-flag .sub-head-meta { font-size: 11px; color: rgba(10,10,10,0.55); margin-top: 2px; }

          .scene-vb-04-flag .case-card { background: #fff; border: 1px solid rgba(10,10,10,0.08); border-radius: 10px; overflow: hidden; }
          .scene-vb-04-flag .case-head { padding: 12px 14px; display: grid; grid-template-columns: 36px 1fr auto; gap: 12px; align-items: center; border-bottom: 1px solid rgba(10,10,10,0.06); }
          .scene-vb-04-flag .case-title { font-weight: 500; font-size: 13px; }
          .scene-vb-04-flag .case-sub { font-size: 11px; color: rgba(10,10,10,0.55); margin-top: 2px; font-variant-numeric: tabular-nums; }

          .scene-vb-04-flag .case-body { padding: 12px 14px; display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
          .scene-vb-04-flag .case-col .c-label { font: 500 10px/1 Geist; letter-spacing: 0.06em; text-transform: uppercase; color: rgba(10,10,10,0.5); margin-bottom: 6px; }

          .scene-vb-04-flag .already-list { display: flex; flex-direction: column; gap: 4px; }
          .scene-vb-04-flag .already-item { display: flex; align-items: center; gap: 8px; font-size: 11px; padding: 6px 8px; background: rgba(1,146,115,0.06); border-radius: 6px; color: rgba(10,10,10,0.75); }
          .scene-vb-04-flag .already-item .check-dot { width: 16px; height: 16px; border-radius: 50%; background: #019273; display: inline-flex; align-items: center; justify-content: center; color: #fff; flex-shrink: 0; }
          .scene-vb-04-flag .already-item .check-dot svg { width: 9px; height: 9px; stroke: currentColor; stroke-width: 3; fill: none; stroke-linecap: round; stroke-linejoin: round; }
          .scene-vb-04-flag .already-item .amt { margin-left: auto; font-weight: 500; font-variant-numeric: tabular-nums; color: #019273; }

          .scene-vb-04-flag .flag-reason { background: rgba(239,137,1,0.08); border: 1px solid rgba(239,137,1,0.25); border-radius: 8px; padding: 10px 12px; font-size: 12px; line-height: 1.5; color: rgba(10,10,10,0.8); }
          .scene-vb-04-flag .flag-reason strong { font-weight: 500; }
          .scene-vb-04-flag .vero-tried { margin-top: 6px; font-size: 11px; color: rgba(10,10,10,0.6); padding-top: 6px; border-top: 1px dashed rgba(239,137,1,0.3); }

          .scene-vb-04-flag .cta-bar { display: flex; align-items: center; justify-content: space-between; gap: 14px; padding: 11px 14px; background: linear-gradient(180deg, rgba(10,10,10,0.03), rgba(10,10,10,0.05)); border-radius: 10px; margin-top: 12px; }
          .scene-vb-04-flag .cta-label { font-size: 12px; font-weight: 500; }
          .scene-vb-04-flag .cta-sub { font-size: 11px; color: rgba(10,10,10,0.55); margin-top: 2px; }
        </style>
        <div class="chat-frame" style="height: 580px;">
          <div class="chat-head">
            <div class="vero-av"><span class="vero-av-eyes"><span class="vero-av-eye">0</span><span class="vero-av-eye vero-av-eye-r">0</span></span></div>
            <div>
              <div class="vero-label">Vero</div>
              <div class="vero-status">\u25CF Reviewing \xB7 step 3 of 3 \xB7 deductions</div>
            </div>
            <span class="pill amber" style="margin-left: auto;">6 of 6 items</span>
          </div>
          <div class="chat-body">
            <div class="msg-vero">
              <div class="vero-av"><span class="vero-av-eyes"><span class="vero-av-eye">0</span><span class="vero-av-eye vero-av-eye-r">0</span></span></div>
              <div class="msg-vero-content">
                <div class="msg-vero-bubble">
                  <div style="font-size: 13px; margin-bottom: 10px;">I cleared <span class="num-green">5 short-pays</span> overnight. One \u20AC450 portion I couldn't explain against your rules, so I stopped and packaged it:</div>
                  <div class="sub-head">
                    <span class="sub-head-icon">${n.alert}</span>
                    <div class="sub-head-text">
                      <div class="sub-head-title">Deductions \xB7 1 case needs your call</div>
                      <div class="sub-head-meta">5 others auto-settled to trade promo reserve, no action needed</div>
                    </div>
                    <span class="pill amber">\u20AC450 unexplained</span>
                  </div>
                  <div class="case-card">
                    <div class="case-head">
                      ${c(a.retail)}
                      <div>
                        <div class="case-title">${a.retail.name} \xB7 short-pay investigation</div>
                        <div class="case-sub">INV-3482 \xB7 expected \u20AC92,000 \xB7 received \u20AC87,770 \xB7 short \u20AC4,230</div>
                      </div>
                      <span class="pill amber">\u20AC450 flagged</span>
                    </div>
                    <div class="case-body">
                      <div class="case-col">
                        <div class="c-label">I already resolved</div>
                        <div class="already-list">
                          <div class="already-item">
                            <span class="check-dot">${n.check}</span>
                            <span>\u20AC3,780 matched to trade promo TP-041 (89%)</span>
                            <span class="amt">\u20AC3,780</span>
                          </div>
                          <div class="already-item">
                            <span class="check-dot">${n.check}</span>
                            <span>Evidence pack assembled \xB7 5 docs linked</span>
                          </div>
                          <div class="already-item">
                            <span class="check-dot">${n.check}</span>
                            <span>GL entry drafted \xB7 ready on approval</span>
                          </div>
                        </div>
                      </div>
                      <div class="case-col">
                        <div class="c-label">Why I stopped \xB7 \u20AC450</div>
                        <div class="flag-reason">
                          <strong>No promo, PO line, or POD note</strong> I could match to this \u20AC450 portion. Could be a one-off discount agreed off-system, a missed trade allowance, or a short-pay error.
                          <div class="vero-tried">Cross-referenced: 1,247 historical cases \xB7 TP-041 rate card \xB7 ${a.retail.contact}'s last 3 emails. No matches above 62%.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="cta-bar">
                    <div>
                      <div class="cta-label">Send to your dispute queue with evidence pack attached</div>
                      <div class="cta-sub">\u20AC3,780 auto-settlement waits for your approval in the Deductions module</div>
                    </div>
                    <button class="btn" id="vb-send-to-queue">${n.arrowRight} Send to my queue</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="chat-foot">
            <div class="input-bar">
              <input type="text" placeholder="Or tell me how to resolve it..." />
              <button class="send-btn">${n.arrowRight}</button>
            </div>
          </div>
        </div>
      `},{id:"vb-05-schedule",title:"Step 5 \xB7 Schedule as a task",body:'Six items in three clicks. Let Vero run this morning <span class="grad">every morning</span>.',tooltipSide:"top",spotlight:"#vb-schedule",advanceOn:{click:"#vb-schedule"},html:`${_}
        <style>
          .scene-vb-05-schedule .run-card { background: #fff; border: 1px solid rgba(1,146,115,0.25); border-radius: 12px; overflow: hidden; }
          .scene-vb-05-schedule .run-head { padding: 11px 14px; background: rgba(1,146,115,0.05); display: flex; align-items: center; gap: 10px; border-bottom: 1px solid rgba(1,146,115,0.15); }
          .scene-vb-05-schedule .run-check { width: 22px; height: 22px; border-radius: 50%; background: #019273; display: inline-flex; align-items: center; justify-content: center; color: #fff; }
          .scene-vb-05-schedule .run-check svg { width: 12px; height: 12px; stroke: currentColor; stroke-width: 2.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
          .scene-vb-05-schedule .run-title { font-weight: 500; font-size: 13px; }
          .scene-vb-05-schedule .run-stats { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 0; }
          .scene-vb-05-schedule .run-stat { padding: 11px 13px; border-right: 1px solid rgba(10,10,10,0.05); }
          .scene-vb-05-schedule .run-stat:last-child { border-right: 0; }
          .scene-vb-05-schedule .run-stat .l { font-size: 10px; color: rgba(10,10,10,0.5); text-transform: uppercase; letter-spacing: 0.06em; }
          .scene-vb-05-schedule .run-stat .v { font: 500 18px/1.1 Geist; letter-spacing: -0.01em; margin-top: 4px; font-variant-numeric: tabular-nums; }
          .scene-vb-05-schedule .run-stat .d { font-size: 11px; color: rgba(10,10,10,0.5); margin-top: 2px; }

          .scene-vb-05-schedule .insight-card { margin-top: 12px; padding: 14px 16px; border-radius: 12px; border: 1px solid rgba(130,89,247,0.25); background: linear-gradient(180deg, rgba(130,89,247,0.04), rgba(78,85,225,0.06)); }
          .scene-vb-05-schedule .insight-head { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; font-size: 12px; font-weight: 500; color: #6d28d9; }
          .scene-vb-05-schedule .insight-head .tag { font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; padding: 2px 7px; background: rgba(130,89,247,0.14); border-radius: 999px; }
          .scene-vb-05-schedule .insight-body { font-size: 13px; line-height: 1.5; margin-bottom: 10px; }
          .scene-vb-05-schedule .insight-body strong { font-weight: 500; }
          .scene-vb-05-schedule .task-config { display: flex; flex-direction: column; gap: 6px; margin-bottom: 10px; padding: 10px 12px; background: rgba(255,255,255,0.7); border-radius: 8px; }
          .scene-vb-05-schedule .task-row { display: flex; align-items: center; gap: 10px; font-size: 11px; color: rgba(10,10,10,0.7); }
          .scene-vb-05-schedule .task-row svg { width: 12px; height: 12px; stroke: #6d28d9; stroke-width: 2; fill: none; stroke-linecap: round; stroke-linejoin: round; flex-shrink: 0; }
          .scene-vb-05-schedule .task-row .k { font: 500 10px/1 Geist; letter-spacing: 0.06em; text-transform: uppercase; color: rgba(10,10,10,0.5); min-width: 90px; }
          .scene-vb-05-schedule .task-row .v { font-weight: 500; color: #0a0a0a; }
          .scene-vb-05-schedule .insight-actions { display: flex; gap: 6px; }
        </style>
        <div class="chat-frame" style="height: 580px;">
          <div class="chat-head">
            <div class="vero-av"><span class="vero-av-eyes"><span class="vero-av-eye">0</span><span class="vero-av-eye vero-av-eye-r">0</span></span></div>
            <div>
              <div class="vero-label">Vero</div>
              <div class="vero-status">\u25CF Queue approved \xB7 all actions fired \xB7 0:00:08</div>
            </div>
            <span class="pill green" style="margin-left: auto;">6 of 6 done</span>
          </div>
          <div class="chat-body">
            <div class="msg-vero">
              <div class="vero-av"><span class="vero-av-eyes"><span class="vero-av-eye">0</span><span class="vero-av-eye vero-av-eye-r">0</span></span></div>
              <div class="msg-vero-content">
                <div class="msg-vero-bubble">
                  All six items fired. Here's the scorecard:
                  <div class="run-card" style="margin-top: 10px;">
                    <div class="run-head">
                      <span class="run-check">${n.check}</span>
                      <span class="run-title">This morning \xB7 executed</span>
                      <span class="pill green" style="margin-left: auto;">0:00:08</span>
                    </div>
                    <div class="run-stats">
                      <div class="run-stat">
                        <div class="l">JEs posted</div>
                        <div class="v mono" style="color: #019273;">2</div>
                        <div class="d">\u20AC622K cleared</div>
                      </div>
                      <div class="run-stat">
                        <div class="l">Calls firing</div>
                        <div class="v mono" style="color: #3730a3;">3</div>
                        <div class="d">\u20AC279K projected</div>
                      </div>
                      <div class="run-stat">
                        <div class="l">Deduction flagged</div>
                        <div class="v mono" style="color: #b75e00;">1</div>
                        <div class="d">in your queue</div>
                      </div>
                      <div class="run-stat">
                        <div class="l">Time back</div>
                        <div class="v mono" style="color: #019273;">~2h</div>
                        <div class="d">vs prior morning</div>
                      </div>
                    </div>
                  </div>
                  <div class="insight-card">
                    <div class="insight-head">
                      <span class="tag">Schedule this</span>
                    </div>
                    <div class="insight-body">
                      You approved every item this morning. That pattern has held <strong>6 mornings in a row</strong>. Promote this to a daily task and Vero will run it unprompted, surfacing only exceptions. <strong>~12 hours a month back.</strong>
                    </div>
                    <div class="task-config">
                      <div class="task-row">${n.clock} <span class="k">When</span> <span class="v">Daily, 08:00 local</span></div>
                      <div class="task-row">${n.shield} <span class="k">Auto-fire at</span> <span class="v">\u2265 95% confidence per item</span></div>
                      <div class="task-row">${n.alert} <span class="k">Escalate</span> <span class="v">exceptions and flags to you</span></div>
                    </div>
                    <div class="insight-actions">
                      <button class="btn" id="vb-schedule">${n.clock} Schedule as daily task</button>
                      <button class="btn btn-light">Keep approving manually</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="chat-foot">
            <div class="input-bar">
              <input type="text" placeholder="Ask a follow-up..." />
              <button class="send-btn">${n.arrowRight}</button>
            </div>
          </div>
        </div>
      `}]};y(ce);})();
