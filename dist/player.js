(()=>{var re=`/*
 * Tour player base styles \u2014 injected into Shadow DOM so they cannot
 * collide with Webflow's CSS. Targets system-stack font (inherits the
 * host page's Geist if present).
 */

:host {
  /* Liquid Glass v3 palette \u2014 matched to the site (cream base, ink #0a0a0a). */
  --tour-canvas: #f6f1ea;
  --tour-canvas-2: #efe6da;
  --tour-ink: #0a0a0a;
  --tour-ink-60: rgba(10, 10, 10, 0.6);
  --tour-ink-40: rgba(10, 10, 10, 0.4);
  --tour-ink-10: rgba(10, 10, 10, 0.08);
  --tour-grad: linear-gradient(90deg, #ff8308, #ff5043 55%, #392bd5);
  --tour-radius: 16px;
  --tour-shadow: 0 1px 2px rgba(10, 10, 10, 0.04), 0 16px 40px -8px rgba(10, 10, 10, 0.10), inset 0 1px 0 rgba(255, 255, 255, 0.4);

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
  /* Scenes were tuned 2026-06-08 to fit a 720px article column at 560px tall
     (most scenes had whitespace below the content at 640px). At wider widths,
     aspect-ratio 1024/640 gives a taller frame naturally. Tallest scene
     (cash-app step 2 extraction) was shortened to 6 fields so this lower
     bound works without cropping. */
  min-width: 560px;
  min-height: 560px;
  aspect-ratio: 1024 / 640;
  margin: 0 auto;
  background:
    radial-gradient(ellipse 420px 280px at 8% 10%, rgba(255,131,8,0.08) 0%, transparent 60%),
    radial-gradient(ellipse 460px 300px at 95% 95%, rgba(57,43,213,0.06) 0%, transparent 60%),
    linear-gradient(160deg, var(--tour-canvas) 0%, var(--tour-canvas-2) 100%);
  border-radius: var(--tour-radius);
  overflow: hidden;
  border: 1px solid var(--tour-ink-10);
  box-shadow: var(--tour-shadow);
}
/* When the host viewport itself is below the tour's minimum, fall back to
   100% of the viewport rather than scrollbars-and-overflow. */
@media (max-width: 600px) {
  .frame {
    min-width: 0;
    min-height: 0;
  }
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
  background:
    radial-gradient(ellipse 360px 240px at 18% 22%, rgba(255,131,8,0.10) 0%, transparent 60%),
    radial-gradient(ellipse 400px 260px at 82% 78%, rgba(57,43,213,0.08) 0%, transparent 60%),
    rgba(246, 241, 234, 0.55);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
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
}

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
  border-radius: 12px;
  border: 1px solid var(--tour-ink-10);
  box-shadow:
    0 1px 2px rgba(10,10,10,0.05),
    0 12px 32px -6px rgba(10,10,10,0.12),
    inset 0 1px 0 rgba(255,255,255,0.6);
  padding: 16px 18px 14px;
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
  background: var(--tour-grad);
  background-size: 200% 100%;
  background-position: 0% 50%;
  color: #fff;
  border-radius: 999px;
  padding: 8px 14px;
  font: 500 12px/1 Geist, system-ui, sans-serif;
  display: inline-flex; align-items: center; gap: 6px;
  white-space: nowrap;
  box-shadow: 0 4px 12px -2px rgba(255,80,67,0.32);
  transition: background-position 0.3s ease, transform 0.15s ease;
}
.tooltip-next:hover { background-position: 100% 50%; transform: translateY(-1px); }
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
  background: var(--tour-grad);
  background-size: 200% 100%;
  background-position: 0% 50%;
  color: #fff;
  padding: 12px 22px; border-radius: 999px;
  font: 500 14px/1 Geist, system-ui, sans-serif;
  cursor: pointer; text-decoration: none;
  display: inline-flex; align-items: center; gap: 8px;
  box-shadow: 0 6px 16px -4px rgba(255,80,67,0.35), 0 1px 2px rgba(10,10,10,0.08);
  transition: background-position 0.3s ease, transform 0.15s ease, box-shadow 0.2s ease;
}
.closing-default-cta:hover {
  background-position: 100% 50%;
  transform: translateY(-1px);
  box-shadow: 0 10px 22px -4px rgba(255,80,67,0.45), 0 2px 4px rgba(10,10,10,0.1);
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
`;var L=()=>location.pathname.startsWith("/de/")||location.pathname==="/de";var ce={"cash-app":{tag:"CASH APPLICATION \xB7 INTERAKTIVE DEMO",coverLabel:"Cash Application in 30 Sekunden ansehen",closing:{headline:'Das sind 90 % der Cash Application, <span class="grad">automatisiert</span>.',sub:"M\xF6chten Sie es auf Ihren eigenen Daten sehen?"},scenes:{"01-inbox":{title:"Schritt 1 \xB7 Posteingang",body:"Drei Zahlungsavise sind \xFCber Nacht eingegangen. Vero hat mit dem ersten bereits begonnen.",i18n:[["<h2>Inbox</h2>","<h2>Posteingang</h2>"],["3 unread \xB7 today","3 ungelesen \xB7 heute"],[" \xB7 Accounts Payable"," \xB7 Kreditorenbuchhaltung"],["Remittance advice \u2014 Wire transfer \u20AC530,000 \u2014 3 invoices","Zahlungsavis, \xDCberweisung \u20AC530.000, 3 Rechnungen"],["Payment notification \u2014 Invoices INV-0014, INV-0017","Zahlungsbenachrichtigung, Rechnungen INV-0014, INV-0017"],[" \xB7 Finance"," \xB7 Finanzen"],["2 min ago","vor 2 Min."],["14 min ago","vor 14 Min."],["42 min ago","vor 42 Min."]]},"02-extract":{title:"Schritt 2 \xB7 Extraktion",body:'Jedes Feld mit <span class="grad">Treffersicherheit</span> extrahiert. Keine Vorlagen zu pflegen.',i18n:[["Acme Industries \u2014 remittance.pdf","Acme Industries, remittance.pdf"],["DocSense \xB7 processing","DocSense \xB7 Verarbeitung"],[">Extracted fields <",">Extrahierte Felder <"],["6 / 6 captured","6 / 6 erfasst"],['<span class="field-key">Vendor</span>','<span class="field-key">Lieferant</span>'],['<span class="field-key">Amount</span>','<span class="field-key">Betrag</span>'],['<span class="field-key">Currency</span>','<span class="field-key">W\xE4hrung</span>'],['<span class="field-key">Bank ref</span>','<span class="field-key">Bankreferenz</span>'],['<span class="field-key">Invoices</span>','<span class="field-key">Rechnungen</span>'],['<span class="field-key">Value date</span>','<span class="field-key">Wertstellung</span>']]},"03-match":{title:"Schritt 3 \xB7 Auto-Abgleich",body:'Drei Rechnungen, drei Treffer. <span class="grad">\u20AC530 Tsd. zugeordnet</span> in unter 4 Sekunden.',i18n:[["Auto-match results","Auto-Abgleich-Ergebnisse"],[" \xB7 run 3.7s"," \xB7 Dauer 3,7 s"],[">Auto-matched<",">Automatisch zugeordnet<"],[">Invoices cleared<",">Rechnungen ausgeglichen<"],[">Avg confidence<",">\xD8 Sicherheit<"],["Acme Industries \xB7 30 days","Acme Industries \xB7 30 Tage"],["Match 99%","Treffer 99 %"]]},"04-edge":{title:"Schritt 4 \xB7 Grenzfall",body:'Dieser ist grenzwertig. Vero legt ihn vor, <span class="grad">Sie entscheiden</span> mit einem Klick.',i18n:[["3 of 4 matched","3 von 4 zugeordnet"],[" \xB7 cleared</span>"," \xB7 ausgeglichen</span>"],["Acme Industries \xB7 45 days \xB7 expected \u20AC92,000","Acme Industries \xB7 45 Tage \xB7 erwartet \u20AC92.000"],["87% \xB7 short by \u20AC230","87 % \xB7 K\xFCrzung \u20AC230"],[">Most likely<",">Wahrscheinlichste Ursache<"],["Trade promotion deduction","Trade-Promotion-Abzug"],["Q2 promo TP-041 active for this account","Q2-Promo TP-041 f\xFCr dieses Konto aktiv"],["Pricing discrepancy","Preisabweichung"],["No POD discrepancy on file","Keine POD-Abweichung hinterlegt"],["Vero recommends accepting trade promo","Vero empfiehlt, den Trade-Promo zu akzeptieren"],["Confirm match","Treffer best\xE4tigen"]]},"05-je":{title:"Schritt 5 \xB7 Journalbuchung",body:'Journalbuchung erstellt, Audit-Trail angeh\xE4ngt. Ein Klick, um <span class="grad">in ERP zu buchen</span>.',i18n:[["Journal entry \xB7 ready to post","Journalbuchung \xB7 bereit zum Buchen"],["Auto-assembled \xB7 4 lines \xB7 balances","Automatisch erstellt \xB7 4 Zeilen \xB7 ausgeglichen"],["Cash receipt \xB7 Acme Industries","Zahlungseingang \xB7 Acme Industries"],[">Balanced</span>",">Ausgeglichen</span>"],["<th>Account</th>","<th>Konto</th>"],["<th>Description</th>","<th>Beschreibung</th>"],[">Debit</th>",">Soll</th>"],[">Credit</th>",">Haben</th>"],[" \xB7 AR \xB7 Acme"," \xB7 Debitoren \xB7 Acme"],["Wire receipt 22 Apr","\xDCberweisungseingang 22. Apr"],[">Clear INV-0019<",">INV-0019 ausgleichen<"],[">Clear INV-0020<",">INV-0020 ausgleichen<"],[">Clear INV-0021 + INV-0023 net<",">INV-0021 + INV-0023 netto ausgleichen<"],[">Totals<",">Summen<"],["4 source docs linked","4 Belege verkn\xFCpft"],["Approval thresholds met","Freigabegrenzen erf\xFCllt"],["SAP S/4 connector ready","SAP-S/4-Konnektor bereit"],["Post to ERP \u2192","In ERP buchen \u2192"]]},"06-posted":{title:"Schritt 6 \xB7 Gebucht",body:"Vero hat erkannt, dass das ein t\xE4gliches Muster ist. Soll Vero jeden Morgen \xFCbernehmen?",i18n:[["Posted to SAP S/4","In SAP S/4 gebucht"],[" \xB7 cleared 4 invoices \xB7 journal balanced"," \xB7 4 Rechnungen ausgeglichen \xB7 Journal ausgeglichen"],[">End-to-end<",">Ende-zu-Ende<"],[">Cleared<",">Ausgeglichen<"],[">Manual touches<",">Manuelle Eingriffe<"],["Acme sends like this every morning. Want me to handle them automatically from now on?","Acme sendet jeden Morgen so. Soll ich das ab jetzt automatisch \xFCbernehmen?"],["Yes, automate","Ja, automatisieren"],["Not now","Jetzt nicht"]]},"07-schedule":{title:"Schritt 7 \xB7 Zeitplan",body:'Vero schl\xE4gt die Regeln vor. <span class="grad">Sie behalten die Kontrolle</span> \xFCber jeden Schwellenwert.',i18n:[["Set up daily run","T\xE4glichen Zeitplan einrichten"],["Vero proposes, you approve every detail","Vero schl\xE4gt vor, Sie geben jedes Detail frei"],[" Trigger</div>"," Ausl\xF6ser</div>"],['Email arrives in inbox \xB7 vendor matches "Acme"','E-Mail trifft im Posteingang ein \xB7 Lieferant entspricht \u201EAcme"'],[" Action</div>"," Aktion</div>"],["Extract, match, post journal entry","Extrahieren, zuordnen, Journalbuchung buchen"],[" Confidence threshold</div>"," Sicherheitsschwelle</div>"],["\u2265 95% auto-post \xB7 80 to 94% surface to you","\u2265 95 % automatisch buchen \xB7 80 bis 94 % Ihnen vorlegen"],[" Schedule</div>"," Zeitplan</div>"],["Run within 5 min of arrival \xB7 check every 8:00 AM","Innerhalb von 5 Min. nach Eingang \xB7 t\xE4glich um 8:00 Uhr pr\xFCfen"],["Pauseable \xB7 auditable \xB7 changes logged","Pausierbar \xB7 auditierbar \xB7 \xC4nderungen protokolliert"],["Approve & schedule","Freigeben & planen"],[">Edit</span>",">Bearbeiten</span>"]]},"08-done":{title:"Schritt 8 \xB7 Live",body:'Fertig. Vero erledigt es morgen um <span class="grad">8:00 Uhr</span> und jeden Morgen danach.',i18n:[["Live in the cockpit","Live im Cockpit"],["Vero is now watching the inbox. You'll see results in tomorrow's morning briefing.","Vero \xFCberwacht jetzt den Posteingang. Ergebnisse sehen Sie im morgigen Tagesbriefing."],[" \xB7 Daily Cash Application"," \xB7 T\xE4gliche Cash Application"],["Configured by you \xB7 22 Apr","Von Ihnen konfiguriert \xB7 22. Apr"],[">Next run<",">N\xE4chste Ausf\xFChrung<"],[">Last processed<",">Zuletzt verarbeitet<"],[">Auto-post threshold<",">Automatik-Schwelle<"],["8:00 AM","8:00 Uhr"],[`
              Active
`,`
              Aktiv
`]]}}},collections:{tag:"COLLECTIONS \xB7 INTERAKTIVE DEMO",coverLabel:"Collections in 30 Sekunden ansehen",closing:{headline:'8 Zahlungszusagen erfasst. 3 Eskalationen weitergeleitet. <span class="grad">Stunden zur\xFCck.</span>',sub:"Soll Vero Ihren Morgen-Arbeitsvorrat \xFCbernehmen, jeden Morgen?"},scenes:{"c-01-worklist":{title:"Schritt 1 \xB7 Arbeitsvorrat",body:'8 Konten sind heute \xFCberf\xE4llig. Vero bearbeitet alle gleichzeitig: Anrufe in <span class="grad">ihrer Sprache</span>, E-Mails in Ihrem Ton.',i18n:[[">Overdue worklist</h2>",">\xDCberf\xE4llige Posten</h2>"],[" accounts \xB7 \u20AC475K past due \xB7 updated 2 min ago"," Konten \xB7 \u20AC475 Tsd. \xFCberf\xE4llig \xB7 vor 2 Min. aktualisiert"],["Run batch (","Sammellauf starten ("],[">Accounts overdue<",">\xDCberf\xE4llige Konten<"],["Sorted by days overdue \xB7 descending","Sortiert nach Tagen \xFCberf\xE4llig \xB7 absteigend"],["Last touch \xB7 next action","Letzter Kontakt \xB7 n\xE4chste Aktion"],[">Last Fri<",">Letzten Fr<"],[">Never<",">Nie<"],[">Email sent<",">E-Mail gesendet<"],[">3d ago<",">vor 3 T<"],[">Call Thu<",">Anruf Do<"],[">1w ago<",">vor 1 Wo<"]]},"c-02-batch":{title:"Schritt 2 \xB7 Sammellauf",body:'Ein Arbeitsvorrat, 8 parallele Workstreams. Vero folgt Ihrem <span class="grad">Playbook</span> f\xFCr jedes: Kanal, Sprache, Eskalationsregeln.',i18n:[[">Batch running</h2>",">Sammellauf l\xE4uft</h2>"],[" accounts in flight \xB7 calls in native language, emails localized"," Konten in Bearbeitung \xB7 Anrufe in Landessprache, E-Mails lokalisiert"],["\u25CF Live","\u25CF Live"],["Vero is working the queue","Vero arbeitet den Arbeitsvorrat ab"],["Playbook v3 \xB7 5 languages active","Playbook v3 \xB7 5 Sprachen aktiv"],["\u25CF Queued","\u25CF In Warteschlange"],["\u25CF Calling","\u25CF Anruf l\xE4uft"],["\u25CF Emailing","\u25CF E-Mail l\xE4uft"],["\u2713 PTP \u20AC179K","\u2713 Zahlungszusage \u20AC179 Tsd."],["\u2709 Email sent","\u2709 E-Mail gesendet"],["\u26A0 Escalated","\u26A0 Eskaliert"],["\u2713 PTP \u20AC14K","\u2713 Zahlungszusage \u20AC14 Tsd."],["\u2713 Paid today","\u2713 Heute bezahlt"],["\u2709 Reminder sent","\u2709 Erinnerung gesendet"]]},"c-03-ptp":{title:"Schritt 3 \xB7 Zahlungszusage",body:'Maria bei Oceanic Energy hat <span class="grad">\u20AC179 Tsd.</span> bis Freitag zugesagt. Protokolliert, mit vollst\xE4ndigem Transkript.',i18n:[["Resolved \xB7 autonomous","Gekl\xE4rt \xB7 autonom"],[">Worklist<",">Arbeitsvorrat<"],[" accounts \xB7 1 focused"," Konten \xB7 1 im Fokus"],["PTP \u20AC179K","Zahlungszusage \u20AC179 Tsd."],["AI call \xB7 3:42","KI-Anruf \xB7 3:42"],["Positive sentiment","Positive Stimmung"],["Portuguese","Portugiesisch"],['Auto-translated: "I can wire \u20AC179,000 by Friday. Invoice reference 0019, as always."','Automatisch \xFCbersetzt: \u201EIch kann \u20AC179.000 bis Freitag \xFCberweisen. Rechnungsreferenz 0019, wie immer."'],["Promise to pay logged","Zahlungszusage protokolliert"],["Reminder scheduled for Thu, 24 Apr","Erinnerung geplant f\xFCr Do, 24. Apr"],["Due Fri 25 Apr","F\xE4llig Fr 25. Apr"]]},"c-04-fallback":{title:"Schritt 4 \xB7 R\xFCckfallebene",body:'Keine Antwort? Vero wechselt zur E-Mail, in ihrer Sprache, <span class="grad">nach Ihren Regeln</span>, ohne Nachfrage.',i18n:[["Reminder sent \xB7 autonomous","Erinnerung gesendet \xB7 autonom"],[">Worklist<",">Arbeitsvorrat<"],[" accounts \xB7 1 focused"," Konten \xB7 1 im Fokus"],[">Email sent<",">E-Mail gesendet<"],[">AI call</div>",">KI-Anruf</div>"],["No answer \xB7 2 tries","Keine Antwort \xB7 2 Versuche"],[">Email</div>",">E-Mail</div>"],["Sent \xB7 08:42 GMT","Gesendet \xB7 08:42 GMT"],["Escalation ladder","Eskalationsstufen"],["Voicemail \u2192 email (EN template) \u2192 call tomorrow 09:00 \u2192 escalate +1 level","Mailbox, dann E-Mail (EN-Vorlage), dann Anruf morgen 09:00, dann +1 Eskalationsstufe"]]},"c-05-escalation":{title:"Schritt 5 \xB7 Eskalation",body:'Drei Konten, die Vero nicht automatisch kl\xE4ren sollte. Jedes landet in <span class="grad">Ihrer Pr\xFCfliste</span> mit dem vollst\xE4ndigen Nachweispaket.',i18n:[[">Escalations</h2>",">Eskalationen</h2>"],[" accounts processed \xB7 3 need your call"," Konten verarbeitet \xB7 3 brauchen Ihre Entscheidung"],[" Action required"," Aktion erforderlich"],["3 disputes detected \xB7 needs you","3 Streitf\xE4lle erkannt \xB7 brauchen Sie"],["Vero packaged the full evidence per case. Review and respond at your own pace.","Vero hat pro Fall die vollst\xE4ndigen Nachweise geb\xFCndelt. Pr\xFCfen und antworten Sie in Ihrem Tempo."],["Review queue \u2192","Pr\xFCfliste \xF6ffnen \u2192"],["\u26A0 Escalated","\u26A0 Eskaliert"],["PTP \u20AC179K","Zahlungszusage \u20AC179 Tsd."],[">Email sent<",">E-Mail gesendet<"],["PTP \u20AC14K","Zahlungszusage \u20AC14 Tsd."],[">Paid today<",">Heute bezahlt<"],[">Reminder sent<",">Erinnerung gesendet<"],["Price disagreement on PO 4421","Preisunstimmigkeit bei Bestellung 4421"],["Short-pay \u20AC4,230 \xB7 trade promo?","K\xFCrzung \u20AC4.230 \xB7 Trade-Promo?"],["Invoice disputed \xB7 subscription cadence","Rechnung strittig \xB7 Abo-Rhythmus"]]},"c-06-done":{title:"Schritt 6 \xB7 Fertig",body:'Acht Minuten Vero. Stunden gespart, <span class="grad">jeden Morgen</span>, wenn Sie m\xF6chten.',i18n:[["Morning queue clear","Morgen-Arbeitsvorrat erledigt"],["Every contact made, every outcome logged. Here's what happened.","Jeder Kontakt erledigt, jedes Ergebnis protokolliert. Das ist passiert."],["Today's collection run","Heutiger Collections-Durchlauf"],["Complete \xB7 8 min","Abgeschlossen \xB7 8 Min."],[">PTPs captured<",">Zahlungszusagen erfasst<"],[">Cash secured<",">Liquidit\xE4t gesichert<"],[">Escalated to you<",">An Sie eskaliert<"],[">Manual touches<",">Manuelle Eingriffe<"],["Your morning queue is clear. Want me to run this every day at 08:00?","Ihr Morgen-Arbeitsvorrat ist erledigt. Soll ich das jeden Tag um 08:00 ausf\xFChren?"],["Yes, automate","Ja, automatisieren"],["Not now","Jetzt nicht"]]}}},deductions:{tag:"DEDUCTIONS \xB7 INTERAKTIVE DEMO",coverLabel:"Deductions in 30 Sekunden ansehen",closing:{headline:'K\xFCrzung untersucht, Ausgleich gebucht. <span class="grad">Stunden gespart.</span>',sub:"Soll Vero Muster automatisch kl\xE4ren, die es schon kennt?"},scenes:{"d-01-queue":{title:"Schritt 1 \xB7 Abzugsliste",body:'Acme Retail hat <span class="grad">\u20AC4.230</span> auf einer Rechnung \xFCber \u20AC92 Tsd. gek\xFCrzt. Vero holt die Nachweise.',i18n:[[">Deduction queue</h2>",">Abzugsliste</h2>"],[" open \xB7 \u20AC8,680 disputed \xB7 auto-classification running"," offen \xB7 \u20AC8.680 strittig \xB7 Auto-Klassifizierung l\xE4uft"],[" unresolved</span>"," ungekl\xE4rt</span>"],["Open short-pays + disputes","Offene K\xFCrzungen + Streitf\xE4lle"],["Oldest first \xB7 click Investigate to trigger classification","\xC4lteste zuerst \xB7 Untersuchen anklicken, um die Klassifizierung zu starten"],[">Action</span>",">Aktion</span>"],["Short-pay \xB7 possible trade promo","K\xFCrzung \xB7 m\xF6glicher Trade-Promo"],["Price disagreement on PO 4421","Preisunstimmigkeit bei Bestellung 4421"],["Subscription cadence mismatch","Abo-Rhythmus stimmt nicht"],["Quality claim \xB7 SKU 8842","Qualit\xE4tsreklamation \xB7 SKU 8842"],["Unexpected shipping fee","Unerwartete Versandkosten"],[" ago</div>"," her</div>"],[">France</span>",">Frankreich</span>"],[">Spain</span>",">Spanien</span>"],[">Ireland</span>",">Irland</span>"],[">Sweden</span>",">Schweden</span>"],[">Netherlands</span>",">Niederlande</span>"],[">Investigate \u2192</button>",">Untersuchen \u2192</button>"],[">Investigate</button>",">Untersuchen</button>"]]},"d-02-evidence":{title:"Schritt 2 \xB7 Beweiskette",body:'Vero holt Rechnung, Bestellung, Liefernachweis, Vertrag und jede aktive <span class="grad">Trade-Promo-Vereinbarung</span> und verkn\xFCpft sie automatisch.',i18n:[["Invoice INV-3482 \xB7 \u20AC92,000 \xB7 paid \u20AC87,770 \xB7 ","Rechnung INV-3482 \xB7 \u20AC92.000 \xB7 bezahlt \u20AC87.770 \xB7 "],["short \u20AC4,230</span>","K\xFCrzung \u20AC4.230</span>"],["\u25CF Classifying","\u25CF Klassifizierung"],[">Invoice</div>",">Rechnung</div>"],[">Customer PO</div>",">Kunden-Bestellung</div>"],[">Proof of delivery</div>",">Liefernachweis</div>"],[">Contract</div>",">Vertrag</div>"],[">Trade promo</div>",">Trade-Promo</div>"],["TP-041 \xB7 active","TP-041 \xB7 aktiv"],["5 sources linked \xB7 ","5 Quellen verkn\xFCpft \xB7 "],[" historical cases</span> cross-referenced \xB7 classification in 2.8s"," historische F\xE4lle</span> abgeglichen \xB7 Klassifizierung in 2,8 s"]]},"d-03-recommend":{title:"Schritt 3 \xB7 Veros Plan",body:'Nachweise zusammengestellt, Plan entworfen. <span class="grad">Ein Klick</span> zum Anwenden.',i18n:[["Vero \xB7 Classification complete","Vero \xB7 Klassifizierung abgeschlossen"],[" \xB7 short \u20AC4,230"," \xB7 K\xFCrzung \u20AC4.230"],["Ready to apply","Bereit zum Anwenden"],["Here's what I'd do:","Das w\xFCrde ich tun:"],["Based on 5 source documents and 1,247 historical cases.","Basierend auf 5 Quelldokumenten und 1.247 historischen F\xE4llen."],["Auto-settle as trade promo TP-041","Automatisch als Trade-Promo TP-041 ausgleichen"],["89% match \xB7 write off to promo reserve \xB7 14 similar cases this quarter","89 % \xDCbereinstimmung \xB7 Ausbuchung auf Promo-R\xFCckstellung \xB7 14 \xE4hnliche F\xE4lle dieses Quartal"],["Route to your queue with summary","Mit Zusammenfassung in Ihre Pr\xFCfliste leiten"],["No matching promo, PO, or POD note. Needs a human call","Kein passender Promo, keine Bestellung, kein POD-Vermerk. Braucht eine menschliche Entscheidung"],["5 docs</strong> searched","5 Belege</strong> durchsucht"],["2.8s</strong> classification","2,8 s</strong> Klassifizierung"],["GL balanced</strong> \xB7 SAP ready","Sachkonto ausgeglichen</strong> \xB7 SAP bereit"],["Audit trail</strong> preserved","Audit-Trail</strong> erhalten"],["Every step auditable. You can roll back any settlement from the queue.","Jeder Schritt auditierbar. Sie k\xF6nnen jeden Ausgleich aus der Liste zur\xFCcknehmen."],["Review details","Details pr\xFCfen"],["Apply Vero's plan \u2192","Veros Plan anwenden \u2192"]]},"d-04-done":{title:"Schritt 4 \xB7 Gebucht",body:'In unter 5 Minuten gekl\xE4rt. Vero hat <span class="grad">14 \xE4hnliche F\xE4lle</span> dieses Quartal erkannt. Soll Vero die automatisch kl\xE4ren?',i18n:[[">Settlement posted</h3>",">Ausgleich gebucht</h3>"],["\u20AC3,780 written off to trade promo. \u20AC450 routed to your queue with summary + evidence.","\u20AC3.780 auf Trade-Promo ausgebucht. \u20AC450 mit Zusammenfassung und Nachweisen in Ihre Pr\xFCfliste geleitet."],["Today's deduction pass","Heutiger Abzugs-Durchlauf"],["Complete \xB7 4:12","Abgeschlossen \xB7 4:12"],[">Settled<",">Ausgeglichen<"],[">Auto-resolved<",">Automatisch gekl\xE4rt<"],[">Routed to you<",">An Sie geleitet<"],[">Docs linked<",">Belege verkn\xFCpft<"],["14 other short-pays this quarter match TP-041 above 95% confidence. Want me to auto-resolve those too?","14 weitere K\xFCrzungen dieses Quartal passen zu TP-041 \xFCber 95 % Sicherheit. Soll ich die auch automatisch kl\xE4ren?"],["Yes, auto-resolve","Ja, automatisch kl\xE4ren"],["Not now","Jetzt nicht"]]}}},"vero-chat":{tag:"VERO CHAT \xB7 INTERAKTIVE DEMO",coverLabel:"Vero Chat in 30 Sekunden ansehen",closing:{headline:'Fragen Sie alles. Antworten und <span class="grad">Aktionen</span>.',sub:"Soll Vero Ihre Risikolandschaft \xFCberwachen und Sie jeden Morgen briefen?"},scenes:{"v-01-ask":{title:"Schritt 1 \xB7 Fragen",body:'Stellen Sie jede Frage. Vero greift auf Ihre <span class="grad">Live-Daten</span> zu. Kein SQL, keine Joins, kein Warten auf BI.',i18n:[["\u25CF Ready \xB7 access to ledger, comms, forecasts","\u25CF Bereit \xB7 Zugriff auf Hauptbuch, Kommunikation, Prognosen"],["Hi Sarah, what would you like to know?","Hallo Sarah, was m\xF6chten Sie wissen?"],["Ask in plain English. I have full read access to your AR, your bank, your forecasts, and every customer email and call.","Fragen Sie in nat\xFCrlicher Sprache. Ich habe vollen Lesezugriff auf Ihre Debitoren, Ihre Bank, Ihre Prognosen und jede Kunden-E-Mail und jeden Anruf."],["Show me overdue accounts","\xDCberf\xE4llige Konten anzeigen"],["What's our DSO trend?","Wie ist unser DSO-Trend?"],["Run the morning briefing","Morgen-Briefing ausf\xFChren"],["Which customers are most at risk this quarter?","Welche Kunden sind dieses Quartal am st\xE4rksten gef\xE4hrdet?"]]},"v-02-thinking":{title:"Schritt 2 \xB7 Analyse",body:'Vero ruft die richtigen Tools auf (F\xE4lligkeitsbericht, Kreditbewertung, Kommunikationshistorie) <span class="grad">parallel</span>.',i18n:[["\u25CF Working \xB7 3 tools in flight","\u25CF Arbeitet \xB7 3 Tools aktiv"],["Which customers are most at risk this quarter?","Welche Kunden sind dieses Quartal am st\xE4rksten gef\xE4hrdet?"],["Looking at risk this quarter\u2026 let me pull a few things.","Ich sehe mir das Risiko f\xFCr dieses Quartal an, ich hole ein paar Dinge."],[">Calling tools</div>",">Tools werden aufgerufen</div>"],["2 of 3 done \xB7 1.4s","2 von 3 fertig \xB7 1,4 s"],["1,247 invoices \xB7 \u20AC4.2M open","1,247 Rechnungen \xB7 \u20AC4,2 Mio. offen"],["5 above 50% slip risk","5 \xFCber 50 % Ausfallrisiko"],["scanning 384 emails + 47 calls\u2026","durchsuche 384 E-Mails + 47 Anrufe\u2026"],["Ask Vero anything\u2026","Vero etwas fragen\u2026"]]},"v-03-answer":{title:"Schritt 3 \xB7 Antwort",body:'Sortiert, bewertet, mit dem Warum. Die Aktions-Chips sind <span class="grad">ein Klick</span>. Nicht nur eine Antwort, ein Angebot zu handeln.',i18n:[["\u25CF Ready \xB7 3 tools done \xB7 2.1s","\u25CF Bereit \xB7 3 Tools fertig \xB7 2,1 s"],["Which customers are most at risk this quarter?","Welche Kunden sind dieses Quartal am st\xE4rksten gef\xE4hrdet?"],["Five customers stand out. Total exposure is ","F\xFCnf Kunden stechen heraus. Das Gesamtrisiko betr\xE4gt "],["</span> across these accounts. Top one is <strong>","</span> \xFCber diese Konten. An der Spitze steht <strong>"],["</strong>: they've broken 2 PTPs in 60 days and sentiment is shifting.","</strong>: 2 Zahlungszusagen in 60 Tagen gebrochen, die Stimmung kippt."],["2 broken PTPs \xB7 sentiment declining","2 gebrochene Zahlungszusagen \xB7 Stimmung sinkt"],["DSO trend +9 days \xB7 last call 12d ago","DSO-Trend +9 Tage \xB7 letzter Anruf vor 12 T"],["New CFO \xB7 payment behavior unclear","Neuer CFO \xB7 Zahlungsverhalten unklar"],["+ 2 more (Acme Tech, Acme Build)","+ 2 weitere (Acme Tech, Acme Build)"],["Schedule calls for top 3","Anrufe f\xFCr Top 3 planen"],["Email risk report to controller","Risikobericht an Controller mailen"],["Add to morning briefing","Zum Morgen-Briefing hinzuf\xFCgen"],['Or ask a follow-up: "show me all communications with Acme Energy" works too.','Oder stellen Sie eine Folgefrage: \u201Ezeig mir alle Kommunikation mit Acme Energy" geht auch.'],["Ask a follow-up\u2026","Folgefrage stellen\u2026"]]},"v-04-done":{title:"Schritt 4 \xB7 Fertig",body:'Drei Anrufe mit <span class="grad">einem Klick</span> geplant. Soll Vero Risiken markieren und Sie jeden Morgen briefen?',i18n:[["\u25CF Ready \xB7 3 calls scheduled \xB7 0:00:8","\u25CF Bereit \xB7 3 Anrufe geplant \xB7 0:00:8"],["Done. I scheduled three light-touch verification calls for tomorrow morning, in each customer's language. Here's the queue:","Erledigt. Ich habe drei kurze Best\xE4tigungsanrufe f\xFCr morgen fr\xFCh geplant, jeweils in der Sprache des Kunden. Hier ist die Liste:"],["Tomorrow \xB7 09:00 onwards","Morgen \xB7 ab 09:00"],["3 calls queued","3 Anrufe in Warteschlange"],["Light-touch \xB7 re-confirm Fri payment timing","Kurzkontakt \xB7 Fr-Zahlungstermin best\xE4tigen"],["Check on aging \xB7 DSO trend","F\xE4lligkeiten pr\xFCfen \xB7 DSO-Trend"],["Intro to new CFO \xB7 payment cadence","Vorstellung beim neuen CFO \xB7 Zahlungsrhythmus"],[">Portuguese</span>",">Portugiesisch</span>"],[">German</span>",">Deutsch</span>"],[">English</span>",">Englisch</span>"],["Want me to flag risk shifts and brief you every morning at 08:00? I'll only act on signals you approve in advance.","Soll ich Risiko\xE4nderungen markieren und Sie jeden Morgen um 08:00 briefen? Ich handle nur bei Signalen, die Sie vorab freigeben."],["Yes, brief me daily","Ja, t\xE4glich briefen"],["Just notify me","Nur benachrichtigen"],["Ask a follow-up\u2026","Folgefrage stellen\u2026"]]}}},predictions:{tag:"CASH FLOW FORECASTING \xB7 INTERAKTIVE DEMO",coverLabel:"Cash-Prognose in 30 Sekunden ansehen",closing:{headline:'Ein Einbruch von \u20AC170 Tsd. vermieden. Prognose wieder auf Kurs. <span class="grad">Stunden zur\xFCck.</span>',sub:"Soll Vero jeden Morgen Signale \xFCberwachen und darauf reagieren?"},scenes:{"p-01-forecast":{title:"Schritt 1 \xB7 13-Wochen-Liquidit\xE4tsplanung",body:'Liquidit\xE4t bleibt stark, bis auf einen <span class="grad">Einbruch von \u20AC170 Tsd.</span> in Woche 6. Vero hat das Risiko erkannt, bevor es eintritt.',i18n:[[">13-week cash forecast</h2>",">13-Wochen-Liquidit\xE4tsplanung</h2>"],["AR + AP combined \xB7 4 currencies \xB7 12 entities \xB7 1,247 open invoices \xB7 updated 14 min ago","Debitoren + Kreditoren \xB7 4 W\xE4hrungen \xB7 12 Einheiten \xB7 1,247 offene Rechnungen \xB7 vor 14 Min. aktualisiert"],["\u25CF Live \xB7 Vero monitoring","\u25CF Live \xB7 Vero \xFCberwacht"],["Projected cash position \xB7 weeks 1\u201313","Prognostizierte Liquidit\xE4t \xB7 Wochen 1 bis 13"],[">Actuals</span>",">Ist-Werte</span>"],[">Forecast</span>",">Prognose</span>"],[">Confidence</span>",">Sicherheit</span>"],[">Week 13 forecast<",">Woche-13-Prognose<"],["+27% vs today","+27 % gg\xFC. heute"],[">Week 6 dip<",">Woche-6-Einbruch<"],[">vs trend line<",">gg\xFC. Trendlinie<"],[">Confidence</div>",">Sicherheit</div>"],["\xB1\u20AC42K margin","\xB1\u20AC42 Tsd. Spanne"],["Week 6 cash drops \u20AC170K below trend","Liquidit\xE4t in Woche 6 f\xE4llt \u20AC170 Tsd. unter den Trend"],["5 invoices at risk \xB7 driven by Acme Energy's \u20AC179K PTP slipping","5 Rechnungen gef\xE4hrdet \xB7 getrieben durch die rutschende \u20AC179 Tsd.-Zahlungszusage von Acme Energy"],["Investigate \u2192","Untersuchen \u2192"]]},"p-02-scenario":{title:"Schritt 2 \xB7 Stresstest",body:'<span class="grad">Klicken Sie ein Szenario an</span>. Diagramm und Zahlen aktualisieren sich live. Wechseln Sie und drehen Sie die Intensit\xE4t hoch.',i18n:[[">Stress-test the forecast</h2>",">Prognose im Stresstest</h2>"],["Model FX, input costs, customer delays \xB7 AR + AP both included","FX, Inputkosten, Kundenverz\xF6gerungen modellieren \xB7 Debitoren + Kreditoren enthalten"],["Scenario builder \xB7 live","Szenario-Builder \xB7 live"],["FX shift","FX-Wechsel"],["Input costs","Inputkosten"],["DSO drift","DSO-Drift"],["Customer delay","Kundenverz\xF6gerung"],["EUR strengthens 5% vs USD","EUR gewinnt 5 % gg\xFC. USD"],["Affects US revenue conversion \xB7 Q ends in week 13","Betrifft US-Umsatzumrechnung \xB7 Quartal endet in Woche 13"],[">Baseline</span>",">Basislinie</span>"],[">Scenario</span>",">Szenario</span>"],[">Intensity</span>",">Intensit\xE4t</span>"],["US receivables book: $1.2M \xB7 locked at \u20AC0.92 \xB7 adjustment applied from week 4","US-Forderungsbuch: $1.2M \xB7 fixiert bei \u20AC0.92 \xB7 Anpassung ab Woche 4"],["Week 13 \xB7 baseline","Woche 13 \xB7 Basislinie"],[">unchanged</div>",">unver\xE4ndert</div>"],["Week 13 \xB7 scenario","Woche 13 \xB7 Szenario"],[" exposure</div>"," Risiko</div>"],[">Cash at risk<",">Liquidit\xE4t in Gefahr<"],[">USD receivables</div>",">USD-Forderungen</div>"],["Pick a scenario and click through the intensities, then see the invoices at risk","W\xE4hlen Sie ein Szenario, klicken Sie die Intensit\xE4ten durch und sehen Sie dann die gef\xE4hrdeten Rechnungen"],["Chart and numbers update live \xB7 no save / reload \xB7 swap scenarios as often as you like","Diagramm und Zahlen aktualisieren live \xB7 kein Speichern / Neuladen \xB7 beliebig oft wechseln"],["See invoices at risk \u2192","Gef\xE4hrdete Rechnungen ansehen \u2192"]]},"p-03-atrisk":{title:"Schritt 3 \xB7 Gef\xE4hrdete Rechnungen",body:'Die \u20AC179 Tsd. von Acme Energy sind das gr\xF6\xDFte Risiko. <span class="grad">88 % Rutschwahrscheinlichkeit</span> aus Verhalten und Signalen.',i18n:[[">Week 6 \xB7 at-risk invoices</h2>",">Woche 6 \xB7 gef\xE4hrdete Rechnungen</h2>"],["Sorted by risk score \xB7 likelihood of slipping past due date","Sortiert nach Risiko-Score \xB7 Wahrscheinlichkeit, \xFCberf\xE4llig zu werden"],[" 5 to review"," 5 zu pr\xFCfen"],["Week 6 expected receipts: \u20AC870K \xB7 forecast: \u20AC700K","Erwartete Eing\xE4nge Woche 6: \u20AC870 Tsd. \xB7 Prognose: \u20AC700 Tsd."],["\u20AC170K shortfall driven by these 5 invoices \xB7 click any row to dig in","\u20AC170 Tsd. Fehlbetrag durch diese 5 Rechnungen \xB7 Zeile anklicken f\xFCr Details"],[">vs trend</div>",">gg\xFC. Trend</div>"],["Top 5 risk exposures","Top 5 Risiken"],["Total at risk: \u20AC344K \xB7 ","Gesamtrisiko: \u20AC344 Tsd. \xB7 "],[" highest</div>"," am h\xF6chsten</div>"],[">Risk score</span>",">Risiko-Score</span>"],["2 broken PTPs \xB7 sentiment declining","2 gebrochene Zahlungszusagen \xB7 Stimmung sinkt"],["DSO trend +9 days \xB7 last call 12d ago","DSO-Trend +9 Tage \xB7 letzter Anruf vor 12 T"],["New CFO \xB7 payment behavior unclear","Neuer CFO \xB7 Zahlungsverhalten unklar"],["Subscription dispute open","Abo-Streitfall offen"],["POD discrepancy under review","POD-Abweichung in Pr\xFCfung"]]},"p-04-recommend":{title:"Schritt 4 \xB7 Veros Plan",body:'Drei Risikosignale summieren sich. Veros Plan: <span class="grad">jetzt handeln</span>, bevor der Einbruch eintritt.',i18n:[["Vero \xB7 Risk analysis complete","Vero \xB7 Risikoanalyse abgeschlossen"],[" \xB7 PTP due Fri 25 Apr"," \xB7 Zahlungszusage f\xE4llig Fr 25. Apr"],[" 88% slip risk"," 88 % Rutschrisiko"],["Why I'm flagging this","Warum ich das markiere"],["DSO trend:</strong> +8 days vs Q1 average","DSO-Trend:</strong> +8 Tage gg\xFC. Q1-Schnitt"],[">trending wrong</span>",">falsche Richtung</span>"],["2 PTPs broken</strong> in the last 60 days","2 Zahlungszusagen gebrochen</strong> in den letzten 60 Tagen"],[">\u20AC420K total</span>",">\u20AC420 Tsd. gesamt</span>"],["Sentiment declining</strong> on last 3 calls","Stimmung sinkt</strong> in den letzten 3 Anrufen"],["positive \u2192 neutral \u2192 cautious","positiv, neutral, vorsichtig"],["What I'd do","Was ich tun w\xFCrde"],["Place a verification call before Friday","Vor Freitag einen Best\xE4tigungsanruf t\xE4tigen"],["In Portuguese, light-touch \xB7 re-confirm timing without escalation","Auf Portugiesisch, kurz \xB7 Termin best\xE4tigen ohne Eskalation"],["Move to priority collections queue","In den Priorit\xE4ts-Arbeitsvorrat verschieben"],["If no response by Thursday, escalate to ","Bei keiner Antwort bis Donnerstag eskalieren an "],["'s manager</div>","s Vorgesetzten</div>"],["5 invoices</strong> rescored","5 Rechnungen</strong> neu bewertet"],["Forecast</strong> auto-updates if applied","Prognose</strong> aktualisiert sich automatisch"],["Audit trail</strong> attached","Audit-Trail</strong> angeh\xE4ngt"],["Reversible from the queue if circumstances change.","Aus der Liste r\xFCcknehmbar, falls sich die Lage \xE4ndert."],["Adjust plan","Plan anpassen"],["Apply Vero's plan \u2192","Veros Plan anwenden \u2192"]]},"p-05-resolved":{title:"Schritt 5 \xB7 Prognose stabilisiert",body:'Einbruch abgewendet. Prognose wieder im Trend. Soll Vero diese Signale <span class="grad">\xFCberwachen und darauf reagieren</span>, jeden Morgen?',i18n:[[">Forecast restored</h3>",">Prognose stabilisiert</h3>"],["Verification call placed \xB7 ","Best\xE4tigungsanruf get\xE4tigt \xB7 "],[" reaffirmed Fri 25 Apr \xB7 backup escalation queued"," best\xE4tigt erneut Fr 25. Apr \xB7 Backup-Eskalation eingereiht"],["\u20AC170K dip avoided","\u20AC170 Tsd.-Einbruch vermieden"],["13-week cash forecast \xB7 after Vero's plan","13-Wochen-Liquidit\xE4tsplanung \xB7 nach Veros Plan"],["+\u20AC50K vs prior forecast at week 13","+\u20AC50 Tsd. gg\xFC. vorheriger Prognose in Woche 13"],[">Week 6</div>",">Woche 6</div>"],[">Week 13</div>",">Woche 13</div>"],[">PTPs at risk<",">Gef\xE4hrdete Zahlungszusagen<"],[">Confidence</div>",">Sicherheit</div>"],["I rescore your forecast every morning. Want me to surface and act on signals like this automatically \u2014 within your thresholds?","Ich bewerte Ihre Prognose jeden Morgen neu. Soll ich Signale wie dieses automatisch aufzeigen und darauf reagieren, innerhalb Ihrer Grenzen?"],["Yes, monitor","Ja, \xFCberwachen"],["Just notify me","Nur benachrichtigen"]]}}},"vero-chat-v2":{tag:"VERO AGENT \xB7 INTERAKTIVE DEMO",coverLabel:"Lernen Sie Vero kennen, Ihre AR-Teamleitung",closing:{headline:'Gepr\xFCft, freigegeben, gestartet. <span class="grad">Ein Agent</span> steuert Ihre Debitoren.',sub:"So k\xF6nnten Ihre Morgen aussehen."},scenes:{"vb-01-recap":{title:"Schritt 1 \xB7 Nachtzusammenfassung",body:'Vero hat die offensichtliche Arbeit schon erledigt. Hier ist, was noch <span class="grad">auf Sie wartet</span>.',i18n:[["\u25CF Recap ready \xB7 composed 0:00:12 ago","\u25CF Zusammenfassung bereit \xB7 vor 0:00:12 erstellt"],[">Tuesday, 08:00</span>",">Dienstag, 08:00</span>"],[">Done overnight</span>",">\xDCber Nacht erledigt</span>"],["12 PDFs extracted","12 PDFs extrahiert"],["10 invoices matched","10 Rechnungen zugeordnet"],["8 JEs posted","8 Buchungen gebucht"],["5 deductions resolved","5 Abz\xFCge gekl\xE4rt"],["14h 28m unattended","14 Std. 28 Min. unbeaufsichtigt"],["Good morning, Sarah.</strong> ","Guten Morgen, Sarah.</strong> "],["\u20AC847K cleared</span>","\u20AC847 Tsd. ausgeglichen</span>"],[' overnight. <span class="num-amber">',' \xFCber Nacht. <span class="num-amber">'],[">3 buckets</span>",">3 Bereiche</span>"],["couldn't go autonomous without your eyes. Q2 forecast upgraded ","konnten nicht ohne Ihr Auge autonom laufen. Q2-Prognose angehoben "],[">Cash application</div>",">Cash Application</div>"],["2 need your review","2 zur Pr\xFCfung"],[" on 8 auto-posted JEs. Two edge cases drafted and waiting."," auf 8 automatisch gebuchten Buchungen. Zwei Grenzf\xE4lle entworfen und wartend."],[">Collections \xB7 today</div>",">Collections \xB7 heute</div>"],["3 calls to approve","3 Anrufe freigeben"],["Top 3 priorities I'd work. ","Top-3-Priorit\xE4ten, die ich bearbeiten w\xFCrde. "],["\u20AC279K recovery</span> projected.","\u20AC279 Tsd. R\xFCckholung</span> erwartet."],[">Deductions</div>",">Abz\xFCge</div>"],["1 needs you","1 braucht Sie"],[`<span class="num-green">5 resolved</span> autonomously. One \u20AC450 portion I couldn't explain, packaged for you.`,'<span class="num-green">5 gekl\xE4rt</span> autonom. Einen Anteil von \u20AC450 konnte ich nicht erkl\xE4ren, f\xFCr Sie geb\xFCndelt.'],[">Q2 forecast \xB7 impact</div>",">Q2-Prognose \xB7 Wirkung</div>"],["+\u20AC1.2M WoW","+\u20AC1,2 Mio. gg\xFC. Vorwoche"],['Upgraded to <span class="num-violet">\u20AC14.6M</span>. Driven by 8 PTP captures, lower DSO on 5 accounts.','Angehoben auf <span class="num-violet">\u20AC14,6 Mio.</span>. Getrieben durch 8 Zahlungszusagen, niedrigeres DSO bei 5 Konten.'],["<strong>6</strong> items for you","<strong>6</strong> Punkte f\xFCr Sie"],["<strong>\u20AC279K</strong> to recover","<strong>\u20AC279 Tsd.</strong> zur\xFCckzuholen"],["<strong>~2h</strong> time back","<strong>~2 Std.</strong> Zeit zur\xFCck"],["Walk me through each bucket, one approval at a time","F\xFChre mich Bereich f\xFCr Bereich durch, eine Freigabe nach der anderen"],["2 JEs \xB7 3 calls \xB7 1 deduction \xB7 nothing fires until you say yes","2 Buchungen \xB7 3 Anrufe \xB7 1 Abzug \xB7 nichts startet, bis Sie zustimmen"],["Review &amp; approve","Pr\xFCfen &amp; freigeben"],["Ask a follow-up...","Folgefrage stellen..."]]},"vb-02-jes":{title:"Schritt 2 \xB7 Cash App \xB7 2 Buchungen",body:'Jede Buchungszeile ist sichtbar. Keine Blackbox, <span class="grad">keine \xDCberraschungen</span>.',i18n:[["\u25CF Reviewing \xB7 step 1 of 3 \xB7 cash application","\u25CF Pr\xFCfung \xB7 Schritt 1 von 3 \xB7 Cash Application"],["2 of 6 items","2 von 6 Punkten"],["Two journal entries sit below my auto-post threshold. Both drafted, both balanced, full evidence attached:","Zwei Journalbuchungen liegen unter meiner Automatik-Schwelle. Beide entworfen, beide ausgeglichen, vollst\xE4ndige Nachweise angeh\xE4ngt:"],["Cash application \xB7 2 edge cases for your approval","Cash Application \xB7 2 Grenzf\xE4lle zur Freigabe"],["Already cleared overnight: 8 JEs, \u20AC847K. These 2 didn't hit auto-post.","\xDCber Nacht bereits ausgeglichen: 8 Buchungen, \u20AC847 Tsd.. Diese 2 erreichten die Automatik nicht."],[">Balanced</span>",">Ausgeglichen</span>"],["Wire \u20AC530,000 \xB7 match confidence 87% \xB7 1 line needs split between INV-0021 and INV-0023","\xDCberweisung \u20AC530.000 \xB7 Treffersicherheit 87 % \xB7 1 Zeile aufzuteilen zwischen INV-0021 und INV-0023"],["87% \xB7 below threshold","87 % \xB7 unter Schwelle"],["<strong>Why you:</strong> short \u20AC230 between invoices, fits trade promo pattern, but my threshold is 95%. Your call.","<strong>Warum Sie:</strong> \u20AC230 Differenz zwischen Rechnungen, passt zum Trade-Promo-Muster, aber meine Schwelle ist 95 %. Ihre Entscheidung."],["<th>Account</th>","<th>Konto</th>"],["<th>Description</th>","<th>Beschreibung</th>"],[">Debit</th>",">Soll</th>"],[">Credit</th>",">Haben</th>"],[" \xB7 AR Acme Industries<"," \xB7 Debitoren Acme Industries<"],[">Wire receipt<",">\xDCberweisungseingang<"],[">Clear INV-0019<",">INV-0019 ausgleichen<"],[">Clear INV-0020<",">INV-0020 ausgleichen<"],[">Clear INV-0021 plus net<",">INV-0021 plus Netto ausgleichen<"],[">Totals</span>",">Summen</span>"],[">balanced</span>",">ausgeglichen</span>"],["Wire \u20AC92,400 \xB7 match confidence 81% \xB7 FX rate EUR/USD locked at 1.084","\xDCberweisung \u20AC92.400 \xB7 Treffersicherheit 81 % \xB7 FX-Kurs EUR/USD fixiert bei 1.084"],["81% \xB7 below threshold","81 % \xB7 unter Schwelle"],["<strong>Why you:</strong> cross-currency conversion. Want you to confirm the rate against treasury lock before posting.","<strong>Warum Sie:</strong> Fremdw\xE4hrungsumrechnung. Bitte best\xE4tigen Sie den Kurs gegen den Treasury-Lock vor der Buchung."],["Wire receipt $100,000 at 1.084","\xDCberweisungseingang $100,000 zu 1.084"],[">FX clearing<",">FX-Verrechnung<"],[">Lock variance<",">Lock-Differenz<"],[" \xB7 AR Acme Pharma<"," \xB7 Debitoren Acme Pharma<"],[">Clear INV-P-0055<",">INV-P-0055 ausgleichen<"],["Post both as drafted, or edit either one first","Beide wie entworfen buchen oder zuerst eine bearbeiten"],["Posts to SAP instantly \xB7 audit trail preserved \xB7 reversible from the journal list","Bucht sofort in SAP \xB7 Audit-Trail erhalten \xB7 aus der Journalliste r\xFCcknehmbar"],[" Approve both JEs"," Beide Buchungen freigeben"],["Or ask me to edit either one...","Oder bitten Sie mich, eine zu bearbeiten..."]]},"vb-03-calls":{title:"Schritt 3 \xB7 Collections \xB7 3 Anrufe",body:'Skript, Sprache und Zeit je Kunde. Vero wartet auf Ihr <span class="grad">Startsignal</span>.',i18n:[["\u25CF Reviewing \xB7 step 2 of 3 \xB7 collections","\u25CF Pr\xFCfung \xB7 Schritt 2 von 3 \xB7 Collections"],["3 of 6 items","3 von 6 Punkten"],["Three priority collections today. Projected recovery ","Drei Priorit\xE4ts-Collections heute. Erwartete R\xFCckholung "],["\u20AC279K</span>. Each one has the customer, language, script I'd use, and timing. Approve any or all.","\u20AC279 Tsd.</span>. Jeder enth\xE4lt Kunde, Sprache, mein Skript und Zeitpunkt. Geben Sie einzelne oder alle frei."],["Collections queue \xB7 3 calls ready","Collections-Liste \xB7 3 Anrufe bereit"],["Light-touch, per your playbook, fallback to email on voicemail","Kurzkontakt, nach Ihrem Playbook, R\xFCckfall auf E-Mail bei Mailbox"],["\u20AC279K projected","\u20AC279 Tsd. erwartet"],[">Why</span>",">Warum</span>"],["Verify Friday PTP. Has broken 2 PTPs in 60d, sentiment declined last 3 calls.","Freitags-Zahlungszusage best\xE4tigen. Hat 2 Zahlungszusagen in 60 T gebrochen, Stimmung in letzten 3 Anrufen gesunken."],[">Portuguese</span>",">Portugiesisch</span>"],[">Light-touch</span>",">Kurzkontakt</span>"],["DSO drift, 9 days over Q1 average, no response to last email 12 days ago.","DSO-Drift, 9 Tage \xFCber Q1-Schnitt, keine Antwort auf letzte E-Mail vor 12 Tagen."],[">German</span>",">Deutsch</span>"],[">Check-in</span>",">Nachfassen</span>"],["New CFO joined 30d ago. No payment history yet, intro call to set cadence.","Neuer CFO seit 30 T. Noch keine Zahlungshistorie, Vorstellungsanruf zur Rhythmus-Abstimmung."],[">English</span>",">Englisch</span>"],[">Intro</span>",">Vorstellung</span>"],["Historical hit-rate on calls like these: <strong>72%</strong>. Projected cash unlocked this week <strong>\u20AC201K</strong> (weighted).","Historische Erfolgsquote bei solchen Anrufen: <strong>72 %</strong>. Erwartete freigesetzte Liquidit\xE4t diese Woche <strong>\u20AC201 Tsd.</strong> (gewichtet)."],["Schedule all three, or decline any I've misjudged","Alle drei planen oder einzelne ablehnen, die ich falsch eingesch\xE4tzt habe"],["SIP trunk \xB7 transcript + sentiment captured per call \xB7 written summary in your inbox after","SIP-Trunk \xB7 Transkript und Stimmung je Anruf erfasst \xB7 schriftliche Zusammenfassung danach in Ihrem Posteingang"],[" Approve 3 calls"," 3 Anrufe freigeben"],["Or say &lsquo;skip the Motors call&rsquo;...",'Oder sagen Sie \u201EMotors-Anruf \xFCberspringen"...']]},"vb-04-flag":{title:"Schritt 4 \xB7 Abz\xFCge \xB7 1 Markierung",body:'Vero hat 5 selbst gekl\xE4rt. Dieser stie\xDF an die <span class="grad">Leitplanke</span>, f\xFCr Sie geb\xFCndelt.',i18n:[["\u25CF Reviewing \xB7 step 3 of 3 \xB7 deductions","\u25CF Pr\xFCfung \xB7 Schritt 3 von 3 \xB7 Abz\xFCge"],["6 of 6 items","6 von 6 Punkten"],[`I cleared <span class="num-green">5 short-pays</span> overnight. One \u20AC450 portion I couldn't explain against your rules, so I stopped and packaged it:`,'Ich habe <span class="num-green">5 K\xFCrzungen</span> \xFCber Nacht gekl\xE4rt. Einen Anteil von \u20AC450 konnte ich anhand Ihrer Regeln nicht erkl\xE4ren, also habe ich gestoppt und ihn geb\xFCndelt:'],["Deductions \xB7 1 case needs your call","Abz\xFCge \xB7 1 Fall braucht Ihre Entscheidung"],["5 others auto-settled to trade promo reserve, no action needed","5 weitere automatisch auf Trade-Promo-R\xFCckstellung gebucht, keine Aktion n\xF6tig"],["\u20AC450 unexplained","\u20AC450 unerkl\xE4rt"],[" \xB7 short-pay investigation"," \xB7 K\xFCrzungsuntersuchung"],["INV-3482 \xB7 expected \u20AC92,000 \xB7 received \u20AC87,770 \xB7 short \u20AC4,230","INV-3482 \xB7 erwartet \u20AC92.000 \xB7 erhalten \u20AC87.770 \xB7 K\xFCrzung \u20AC4.230"],["\u20AC450 flagged","\u20AC450 markiert"],["I already resolved","Bereits erledigt"],["\u20AC3,780 matched to trade promo TP-041 (89%)","\u20AC3.780 dem Trade-Promo TP-041 zugeordnet (89 %)"],["Evidence pack assembled \xB7 5 docs linked","Nachweispaket erstellt \xB7 5 Belege verkn\xFCpft"],["GL entry drafted \xB7 ready on approval","Buchung entworfen \xB7 bereit bei Freigabe"],["Why I stopped \xB7 \u20AC450","Warum ich gestoppt habe \xB7 \u20AC450"],["<strong>No promo, PO line, or POD note</strong> I could match to this \u20AC450 portion. Could be a one-off discount agreed off-system, a missed trade allowance, or a short-pay error.","<strong>Kein Promo, keine Bestellzeile, kein POD-Vermerk</strong>, den ich diesem \u20AC450-Anteil zuordnen konnte. K\xF6nnte ein einmaliger, au\xDFerhalb des Systems vereinbarter Rabatt sein, eine \xFCbersehene Handelsverg\xFCtung oder ein K\xFCrzungsfehler."],["Cross-referenced: 1,247 historical cases \xB7 TP-041 rate card \xB7 ","Abgeglichen: 1,247 historische F\xE4lle \xB7 TP-041-Konditionen \xB7 "],["'s last 3 emails. No matches above 62%.","s letzte 3 E-Mails. Keine Treffer \xFCber 62 %."],["Send to your dispute queue with evidence pack attached","Mit Nachweispaket in Ihre Streitfall-Liste senden"],["\u20AC3,780 auto-settlement waits for your approval in the Deductions module","\u20AC3.780 Auto-Ausgleich wartet auf Ihre Freigabe im Deductions-Modul"],[" Send to my queue"," In meine Liste senden"],["Or tell me how to resolve it...","Oder sagen Sie mir, wie ich es kl\xE4ren soll..."]]},"vb-05-schedule":{title:"Schritt 5 \xB7 Als Task planen",body:'Sechs Punkte in drei Klicks. Lassen Sie Vero diesen Morgen <span class="grad">jeden Morgen</span> ausf\xFChren.',i18n:[["\u25CF Queue approved \xB7 all actions fired \xB7 0:00:08","\u25CF Arbeitsvorrat freigegeben \xB7 alle Aktionen gestartet \xB7 0:00:08"],["6 of 6 done","6 von 6 erledigt"],["All six items fired. ","Alle sechs Punkte gestartet. "],["Here's the scorecard:","Hier ist die Auswertung:"],["This morning \xB7 executed","Heute Morgen \xB7 ausgef\xFChrt"],[">JEs posted<",">Buchungen gebucht<"],["\u20AC622K cleared","\u20AC622 Tsd. ausgeglichen"],[">Calls firing<",">Anrufe starten<"],["\u20AC279K projected","\u20AC279 Tsd. erwartet"],[">Deduction flagged<",">Abzug markiert<"],[">in your queue<",">in Ihrer Liste<"],[">Time back<",">Zeit zur\xFCck<"],["vs prior morning","gg\xFC. vorherigem Morgen"],[">Schedule this</span>",">Das planen</span>"],["You approved every item this morning. That pattern has held <strong>6 mornings in a row</strong>. Promote this to a daily task and Vero will run it unprompted, surfacing only exceptions. <strong>~12 hours a month back.</strong>","Sie haben heute jeden Punkt freigegeben. Dieses Muster h\xE4lt seit <strong>6 Morgen in Folge</strong>. Machen Sie daraus einen t\xE4glichen Task, und Vero f\xFChrt ihn unaufgefordert aus und zeigt nur Ausnahmen. <strong>~12 Stunden im Monat zur\xFCck.</strong>"],[">When</span>",">Wann</span>"],["Daily, 08:00 local","T\xE4glich, 08:00 Ortszeit"],[">Auto-fire at</span>",">Auto-Start bei</span>"],["\u2265 95% confidence per item","\u2265 95 % Sicherheit je Punkt"],[">Escalate</span>",">Eskalieren</span>"],["exceptions and flags to you","Ausnahmen und Markierungen an Sie"],[" Schedule as daily task"," Als t\xE4glichen Task planen"],["Keep approving manually","Weiter manuell freigeben"],["Ask a follow-up...","Folgefrage stellen..."]]}}}};var J=L(),T=(s,e)=>J?e:s,le={};function A(s){le[s.id]=s,document.querySelectorAll(`transformance-tour[data-tour="${s.id}"]`).forEach(e=>{e._mounted||e._tryMount()})}var X=class extends HTMLElement{constructor(){super(),this._mounted=!1,this._stepIndex=0,this._tour=null}connectedCallback(){this._mounted||this._tryMount()}_coverLabel(){return this._deTour?.coverLabel||this._tour.coverLabel||T("Watch demo","Demo ansehen")}_sceneHtml(e){let a=e.html,t=this._deTour?.scenes?.[e.id]?.i18n;if(t)for(let[o,i]of t)a=a.split(o).join(i);return a}_tryMount(){let e=this.dataset.tour,a=e&&le[e];if(!a)return;this._mounted=!0,this._tour=a,this._deTour=J&&ce[e]||null;let t=this._deTour?.tag||a.tag||T("Interactive demo","Interaktive Demo");this._shadow=this.attachShadow({mode:"open"}),this._shadow.innerHTML=`
      <style>${re}</style>
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
        <div class="cover-tag">${t}</div>
        <button class="fs-close" data-fs-close aria-label="${T("Close demo","Demo schlie\xDFen")}">\u2715</button>
        <div class="stage" data-stage></div>
        <div class="cover" data-cover>
          <div class="cover-pill">
            <span class="cover-play"><svg viewBox="0 0 10 10"><polygon points="2,1 9,5 2,9"/></svg></span>
            ${this._coverLabel()}
          </div>
        </div>
      </div>
    `,this._frame=this._shadow.querySelector(".frame"),this._stage=this._shadow.querySelector("[data-stage]"),this._cover=this._shadow.querySelector("[data-cover]"),this._fsClose=this._shadow.querySelector("[data-fs-close]"),this._cover.addEventListener("click",()=>this._start(),{once:!0}),this._fsClose.addEventListener("click",o=>{o.stopPropagation(),this._exitFullscreen()}),this._renderSceneContent(0)}_isMobile(){return typeof matchMedia=="function"&&matchMedia("(max-width: 767px)").matches}_enterFullscreen(){this._frame.classList.add("fs"),document.body.style.overflow="hidden"}_exitFullscreen(){if(this._frame.classList.remove("fs"),document.body.style.overflow="",this._shadow.querySelector(".spotlight")?.remove(),this._shadow.querySelector(".tooltip")?.remove(),this._shadow.querySelector(".toolbar")?.remove(),this._shadow.querySelector(".closing")?.remove(),this._shadow.querySelector(".cover-tag")?.classList.remove("hidden"),!this._shadow.querySelector("[data-cover]")){let e=document.createElement("div");e.className="cover",e.setAttribute("data-cover",""),e.innerHTML=`
        <div class="cover-pill">
          <span class="cover-play"><svg viewBox="0 0 10 10"><polygon points="2,1 9,5 2,9"/></svg></span>
          ${this._coverLabel()}
        </div>
      `,this._frame.appendChild(e),this._cover=e,e.addEventListener("click",()=>this._start(),{once:!0})}this._renderSceneContent(0),this._stepIndex=0}_start(){this._isMobile()&&this._enterFullscreen(),this._cover.classList.add("hidden"),this._shadow.querySelector(".cover-tag")?.classList.add("hidden"),setTimeout(()=>this._cover.remove(),320),this._activateScene(0),this._renderToolbar()}_renderToolbar(){let e=this._shadow.querySelector(".toolbar");e&&e.remove(),e=document.createElement("div"),e.className="toolbar",e.innerHTML=`
      <div class="dots">
        ${this._tour.scenes.map((a,t)=>`<span class="dot ${t===this._stepIndex?"active":t<this._stepIndex?"done":""}"></span>`).join("")}
      </div>
      <button class="toolbar-btn" data-skip>${T("Skip","\xDCberspringen")}</button>
    `,this._frame.appendChild(e),e.querySelector("[data-skip]").addEventListener("click",()=>this._renderClosing())}_renderSceneContent(e){let a=this._tour.scenes[e];this._stage.innerHTML=`<div class="scene scene-${a.id}">${this._sceneHtml(a)}</div>`}_activateScene(e){this._stepIndex=e;let a=this._tour.scenes[e];if(this._shadow.querySelector(".spotlight")?.remove(),this._shadow.querySelector(".tooltip")?.remove(),typeof a.onMount=="function")try{a.onMount(this._stage,this)}catch(t){console.error("[tour] scene.onMount error:",t)}requestAnimationFrame(()=>{a.spotlight&&this._renderSpotlight(a),a.body&&this._renderTooltip(a),this._bindAdvance(a)})}_renderScene(e){this._renderSceneContent(e),this._activateScene(e),this._renderToolbar()}_renderSpotlight(e){let a=this._stage.querySelector(e.spotlight);if(!a)return;this._shadow.querySelectorAll(".tour-hilite").forEach(u=>u.classList.remove("tour-hilite"));let t=a.parentElement;for(;t&&t!==this._frame;){let u=t.ownerDocument.defaultView.getComputedStyle(t);if(/(auto|scroll)/.test(u.overflowY)){let f=t.getBoundingClientRect(),l=a.getBoundingClientRect();if(!(l.top>=f.top&&l.bottom<=f.bottom)){let M=l.bottom-(f.bottom-24);t.scrollTop+=M}break}t=t.parentElement}let o=this._frame.getBoundingClientRect(),i=a.getBoundingClientRect(),c=e.spotlightPad??8,p=i.left-o.left-c,g=i.top-o.top-c,b=i.width+c*2,x=i.height+c*2,v=e.spotlightRadius??12,h=`
      <div class="spotlight">
        <svg viewBox="0 0 ${o.width} ${o.height}" preserveAspectRatio="none">
          <defs>
            <mask id="m" maskUnits="userSpaceOnUse">
              <rect class="outer" x="0" y="0" width="${o.width}" height="${o.height}" />
              <rect class="inner" x="${p}" y="${g}" width="${b}" height="${x}" rx="${v}" />
            </mask>
          </defs>
          <rect class="spotlight-dim" x="0" y="0" width="${o.width}" height="${o.height}" mask="url(#m)" />
        </svg>
      </div>
    `;this._frame.insertAdjacentHTML("beforeend",h),a.classList.add("tour-hilite"),this._currentTargetRect={x:p,y:g,w:b,h:x}}_renderTooltip(e){let a=this._stepIndex===this._tour.scenes.length-1,t=e.advanceOn?.click?null:a?T("Finish","Fertig"):T("Next","Weiter"),o=this._deTour?.scenes?.[e.id],i=o?.title||e.title,c=o?.body||e.body,p=document.createElement("div");p.className="tooltip",p.dataset.side=e.tooltipSide||"right",p.innerHTML=`
      ${i?`<div class="tooltip-tag">${i}</div>`:""}
      <div class="tooltip-body">${c}</div>
      <div class="tooltip-controls">
        <span class="step-of">${this._stepIndex+1} / ${this._tour.scenes.length}</span>
        ${t?`<button class="tooltip-next" data-next>${t}<svg viewBox="0 0 10 10" fill="currentColor"><polygon points="2,1 8,5 2,9"/></svg></button>`:`<span style="color: var(--tour-ink-40); font-size: 11px;">${T("\u2193 Click highlighted","\u2193 Markiertes anklicken")}</span>`}
      </div>
    `,this._frame.appendChild(p),this._positionTooltip(p,e),p.querySelector("[data-next]")?.addEventListener("click",()=>this._advance())}_positionTooltip(e,a){let t=this._currentTargetRect;if(!t){e.style.left="50%",e.style.top="50%",e.style.transform="translate(-50%, -50%)",e.removeAttribute("data-side");return}let o=this._frame.getBoundingClientRect(),i=e.offsetWidth,c=e.offsetHeight,p=14,g=12,b=t.x+t.w/2,x=t.y+t.h/2,v=a.tooltipSide||"right",h,u;switch(v){case"right":h=t.x+t.w+p,u=x-c/2;break;case"left":h=t.x-i-p,u=x-c/2;break;case"top":h=b-i/2,u=t.y-c-p;break;case"bottom":h=b-i/2,u=t.y+t.h+p;break}h=Math.max(g,Math.min(h,o.width-i-g)),u=Math.max(g,Math.min(u,o.height-c-g)),e.style.left=`${h}px`,e.style.top=`${u}px`;let f=6;if(v==="left"||v==="right"){let l=Math.max(8,Math.min(x-u-f,c-20));e.style.setProperty("--arrow-pos",`${l}px`)}else{let l=Math.max(8,Math.min(b-h-f,i-20));e.style.setProperty("--arrow-pos",`${l}px`)}}_bindAdvance(e){if(!e.advanceOn?.click)return;let a=this._stage.querySelector(e.advanceOn.click);a&&(a.addEventListener("click",t=>{t.preventDefault(),this._advance()},{once:!0}),a.style.cursor="pointer")}_advance(){this._stepIndex+1>=this._tour.scenes.length?this._renderClosing():this._renderScene(this._stepIndex+1)}_renderClosing(){this._shadow.querySelector(".spotlight")?.remove(),this._shadow.querySelector(".tooltip")?.remove(),this._shadow.querySelector(".toolbar")?.remove();let e=J?"https://transformance.ai/de/meeting":"https://transformance.ai/meeting",a=this.dataset.ctaHtml||`
      <a class="closing-default-cta" href="${e}">
        ${T("Book a meeting \u2192","Termin buchen \u2192")}
      </a>
    `,t=this._deTour?.closing||this._tour.closing,o=t&&t.headline||T('Want to see it on <span class="grad">your data</span>?','Sehen Sie es auf <span class="grad">Ihren Daten</span>?'),i=document.createElement("div");i.className="closing",i.innerHTML=`
      <h3>${o}</h3>
      ${t?.sub?`<p>${t.sub}</p>`:""}
      <div class="closing-cta-slot">${a}</div>
      <button class="closing-replay" data-replay>${T("\u21BB Replay","\u21BB Wiederholen")}</button>
    `,this._frame.appendChild(i),i.querySelector("[data-replay]").addEventListener("click",()=>{i.remove(),this._renderScene(0)})}};customElements.get("transformance-tour")||customElements.define("transformance-tour",X);var r={factory:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>',wind:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/></svg>',truck:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>',pill:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>',shoppingBag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',cpu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>',wheat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M2 22 16 8"/><path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M20 9c.5.5 1.12.5 2.5 2-1.38 1.5-2 1.5-2.5 2-.5-.5-1.12-.5-2.5-2 1.38-1.5 2-1.5 2.5-2Z"/><path d="M16 13c.5.5 1.12.5 2.5 2-1.38 1.5-2 1.5-2.5 2-.5-.5-1.12-.5-2.5-2 1.38-1.5 2-1.5 2.5-2Z"/></svg>',car:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L19 9c-.3-.1-.6-.3-.8-.6L16.5 6.4c-.6-.8-1.5-1.4-2.5-1.4H7.6c-1 0-1.9.6-2.5 1.4L3.8 8.4c-.2.3-.5.5-.8.6L1.5 10.1C.7 10.3 0 11.1 0 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>',hardHat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"/><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M4 15v-3a6 6 0 0 1 6-6"/><path d="M14 6a6 6 0 0 1 6 6v3"/></svg>',shirt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>',clapperboard:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z"/><path d="m6.2 5.3 3.1 3.9"/><path d="m12.4 3.4 3.1 4"/><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',coins:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/></svg>',phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>',check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 6 9 17 4 12"/></svg>',alert:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',play:'<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"/></svg>',arrowRight:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',trendingUp:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>',trendingDown:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>',phoneOff:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"/><line x1="23" y1="1" x2="1" y2="23"/></svg>',globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',sliders:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>',fuel:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="3" y1="22" x2="15" y2="22"/><line x1="4" y1="9" x2="14" y2="9"/><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"/><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"/></svg>',shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',zap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>'};function y(s){return`<span class="co-av ${s.cls}">${r[s.icon]}</span>`}function j(s){return`<span class="co-av ${s.cls} sz-sm">${r[s.icon]}</span>`}var Me={DE:'<svg viewBox="0 0 24 18"><rect width="24" height="6" fill="#000"/><rect y="6" width="24" height="6" fill="#DD0000"/><rect y="12" width="24" height="6" fill="#FFCE00"/></svg>',AT:'<svg viewBox="0 0 24 18"><rect width="24" height="6" fill="#ED2939"/><rect y="6" width="24" height="6" fill="#fff"/><rect y="12" width="24" height="6" fill="#ED2939"/></svg>',NL:'<svg viewBox="0 0 24 18"><rect width="24" height="6" fill="#AE1C28"/><rect y="6" width="24" height="6" fill="#fff"/><rect y="12" width="24" height="6" fill="#21468B"/></svg>',ES:'<svg viewBox="0 0 24 18"><rect width="24" height="4.5" fill="#AA151B"/><rect y="4.5" width="24" height="9" fill="#F1BF00"/><rect y="13.5" width="24" height="4.5" fill="#AA151B"/></svg>',FR:'<svg viewBox="0 0 24 18"><rect width="8" height="18" fill="#0055A4"/><rect x="8" width="8" height="18" fill="#fff"/><rect x="16" width="8" height="18" fill="#EF4135"/></svg>',IT:'<svg viewBox="0 0 24 18"><rect width="8" height="18" fill="#009246"/><rect x="8" width="8" height="18" fill="#fff"/><rect x="16" width="8" height="18" fill="#CE2B37"/></svg>',IE:'<svg viewBox="0 0 24 18"><rect width="8" height="18" fill="#169B62"/><rect x="8" width="8" height="18" fill="#fff"/><rect x="16" width="8" height="18" fill="#FF883E"/></svg>',BE:'<svg viewBox="0 0 24 18"><rect width="8" height="18" fill="#000"/><rect x="8" width="8" height="18" fill="#FAE042"/><rect x="16" width="8" height="18" fill="#ED2939"/></svg>',PT:'<svg viewBox="0 0 24 18"><rect width="10" height="18" fill="#046A38"/><rect x="10" width="14" height="18" fill="#DA291C"/><circle cx="10" cy="9" r="2.4" fill="#FFD100"/></svg>',SE:'<svg viewBox="0 0 24 18"><rect width="24" height="18" fill="#006AA7"/><rect x="7" width="3" height="18" fill="#FECC00"/><rect y="7.5" width="24" height="3" fill="#FECC00"/></svg>',DK:'<svg viewBox="0 0 24 18"><rect width="24" height="18" fill="#C8102E"/><rect x="7" width="3" height="18" fill="#fff"/><rect y="7.5" width="24" height="3" fill="#fff"/></svg>',CH:'<svg viewBox="0 0 24 18"><rect width="24" height="18" fill="#DC143C"/><rect x="10" y="4" width="4" height="10" fill="#fff"/><rect x="7" y="7" width="10" height="4" fill="#fff"/></svg>',GB:'<svg viewBox="0 0 24 18"><rect width="24" height="18" fill="#012169"/><path d="M0 0L24 18M24 0L0 18" stroke="#fff" stroke-width="2.5"/><path d="M0 0L24 18M24 0L0 18" stroke="#C8102E" stroke-width="1.5"/><rect x="10" width="4" height="18" fill="#fff"/><rect y="7" width="24" height="4" fill="#fff"/><rect x="11" width="2" height="18" fill="#C8102E"/><rect y="8" width="24" height="2" fill="#C8102E"/></svg>',US:'<svg viewBox="0 0 24 18"><rect width="24" height="18" fill="#fff"/><rect width="24" height="1.4" fill="#B22234"/><rect width="24" height="1.4" y="2.8" fill="#B22234"/><rect width="24" height="1.4" y="5.6" fill="#B22234"/><rect width="24" height="1.4" y="8.4" fill="#B22234"/><rect width="24" height="1.4" y="11.2" fill="#B22234"/><rect width="24" height="1.4" y="14" fill="#B22234"/><rect width="24" height="1.4" y="16.8" fill="#B22234"/><rect width="10" height="9.7" fill="#3C3B6E"/></svg>',BR:'<svg viewBox="0 0 24 18"><rect width="24" height="18" fill="#009C3B"/><polygon points="12,3 22,9 12,15 2,9" fill="#FFDF00"/><circle cx="12" cy="9" r="3" fill="#002776"/></svg>'};function de(s){let e=Me[s];return e?e.replace("<svg",'<svg class="flag-svg"'):""}var n={industries:{name:"Acme Industries",sector:"Manufacturing",country:"DE",flag:"de",cls:"co-industries",icon:"factory",contact:"Lars Olsen"},energy:{name:"Acme Energy",sector:"Renewables",country:"PT",flag:"pt",cls:"co-energy",icon:"wind",contact:"Maria Santos"},logistics:{name:"Acme Logistics",sector:"Shipping",country:"GB",flag:"gb",cls:"co-logistics",icon:"truck",contact:"James Clarke"},pharma:{name:"Acme Pharma",sector:"Healthcare",country:"ES",flag:"es",cls:"co-pharma",icon:"pill",contact:"Hans Weber"},retail:{name:"Acme Retail",sector:"Consumer goods",country:"FR",flag:"fr",cls:"co-retail",icon:"shoppingBag",contact:"Claire Dubois"},tech:{name:"Acme Tech",sector:"Technology",country:"IE",flag:"ie",cls:"co-tech",icon:"cpu",contact:"Aidan Murphy"},food:{name:"Acme Food",sector:"Food & beverage",country:"IT",flag:"it",cls:"co-food",icon:"wheat",contact:"Giulia Rossi"},motors:{name:"Acme Motors",sector:"Automotive",country:"DE",flag:"de",cls:"co-motors",icon:"car",contact:"Anja Becker"},build:{name:"Acme Build",sector:"Construction",country:"NL",flag:"nl",cls:"co-build",icon:"hardHat",contact:"Pieter de Vries"},fashion:{name:"Acme Fashion",sector:"Apparel",country:"SE",flag:"se",cls:"co-fashion",icon:"shirt",contact:"Lina Andersson"},media:{name:"Acme Media",sector:"Media",country:"US",flag:"us",cls:"co-media",icon:"clapperboard",contact:"Jordan Reed"},finance:{name:"Acme Finance",sector:"Financial services",country:"CH",flag:"ch",cls:"co-finance",icon:"coins",contact:"Samuel Keller"}},ks=Object.values(n);var P=`
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
    .scene .btn { appearance: none; border: 0; cursor: pointer; background: linear-gradient(90deg, #ff8308, #ff5043 55%, #392bd5); background-size: 200% 100%; background-position: 0% 50%; color: #fff; font: 500 12px/1 Geist, system-ui, sans-serif; padding: 10px 18px; border-radius: 999px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 4px 12px -2px rgba(255,80,67,0.32), 0 1px 2px rgba(10,10,10,0.06); transition: background-position 0.3s ease, transform 0.15s ease, box-shadow 0.2s ease; }
    .scene .btn:hover { background-position: 100% 50%; transform: translateY(-1px); box-shadow: 0 8px 20px -3px rgba(255,80,67,0.45), 0 2px 4px rgba(10,10,10,0.08); }
    .scene .btn-light { background: #fff; color: #0a0a0a; border: 1px solid rgba(10,10,10,0.1); }
    .scene .mono { font-variant-numeric: tabular-nums; letter-spacing: -0.01em; }
    .scene .eyebrow { font: 500 10px/1 Geist, system-ui, sans-serif; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(10,10,10,0.5); }
    .scene h2 { font: 500 18px/1.2 Geist, system-ui, sans-serif; letter-spacing: -0.015em; margin: 0; }
  </style>
`,je={id:"cash-app",tag:"CASH APPLICATION \xB7 INTERACTIVE DEMO",coverLabel:"See cash application in 30 seconds",closing:{headline:`That's 90% of cash application, <span class="grad">automated</span>.`,sub:"Want to see it on your own data?"},scenes:[{id:"01-inbox",title:"Step 1 \xB7 Inbox",body:"Three remittances arrived overnight. Vero already started on the first.",tooltipSide:"right",spotlight:"#row-hero",advanceOn:{click:"#row-hero"},html:`${P}
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
            ${y(n.industries)}
            <div class="email-meta">
              <div class="email-from">${n.industries.name} \xB7 Accounts Payable</div>
              <div class="email-subj">Remittance advice \u2014 Wire transfer \u20AC530,000 \u2014 3 invoices</div>
            </div>
            <span class="email-time">2 min ago</span>
          </div>
          <div class="email faded">
            ${y(n.energy)}
            <div class="email-meta">
              <div class="email-from">${n.energy.name} \xB7 Treasury</div>
              <div class="email-subj">Payment notification \u2014 Invoices INV-0014, INV-0017</div>
            </div>
            <span class="email-time">14 min ago</span>
          </div>
          <div class="email faded">
            ${y(n.logistics)}
            <div class="email-meta">
              <div class="email-from">${n.logistics.name} \xB7 Finance</div>
              <div class="email-subj">Aviso de pagamento \u2014 R$ 180.000</div>
            </div>
            <span class="email-time">42 min ago</span>
          </div>
        </div>
      `},{id:"02-extract",title:"Step 2 \xB7 Extraction",body:'Every field extracted with <span class="grad">confidence</span>. No templates to maintain.',tooltipSide:"top",spotlight:"#extraction-table",html:`${P}
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
            <div class="table-head">Extracted fields <span class="pill green">6 / 6 captured</span></div>
            <div class="field"><span class="field-key">Vendor</span><span class="field-val">Acme Industries</span><span class="field-conf"><span class="pill green">99%</span></span></div>
            <div class="field"><span class="field-key">Amount</span><span class="field-val mono">\u20AC530,000.00</span><span class="field-conf"><span class="pill green">99%</span></span></div>
            <div class="field"><span class="field-key">Currency</span><span class="field-val">EUR</span><span class="field-conf"><span class="pill green">99%</span></span></div>
            <div class="field"><span class="field-key">Bank ref</span><span class="field-val mono">DB-WT-2024-04-22-8842</span><span class="field-conf"><span class="pill green">97%</span></span></div>
            <div class="field"><span class="field-key">Invoices</span><span class="field-val mono">INV-0019, INV-0020, INV-0021</span><span class="field-conf"><span class="pill green">99%</span></span></div>
            <div class="field"><span class="field-key">Value date</span><span class="field-val mono">2024-04-22</span><span class="field-conf"><span class="pill green">98%</span></span></div>
          </div>
        </div>
      `},{id:"03-match",title:"Step 3 \xB7 Auto-match",body:'Three invoices, three matches. <span class="grad">\u20AC530K accounted for</span> in under 4 seconds.',tooltipSide:"right",spotlight:"#match-cards",html:`${P}
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
      `},{id:"04-edge",title:"Step 4 \xB7 Edge case",body:`This one's borderline. Vero surfaces it, <span class="grad">you decide</span> in one click.`,tooltipSide:"left",spotlight:"#edge-card",advanceOn:{click:"#edge-confirm"},html:`${P}
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
          /* Keep gradient .btn styling from base. Add pulsing halo around the button
             specifically so users in step 4 can see exactly what to click - the card
             spotlight alone made the button blend with the orange-bordered card. */
          .scene-04-edge #edge-confirm {
            position: relative;
            box-shadow:
              0 4px 12px -2px rgba(255,80,67,0.4),
              0 0 0 2px rgba(255,80,67,0.7),
              0 0 18px 3px rgba(255,80,67,0.32);
            animation: scene-04-pulse 2.4s ease-in-out infinite;
          }
          @keyframes scene-04-pulse {
            0%, 100% { box-shadow: 0 4px 12px -2px rgba(255,80,67,0.4), 0 0 0 2px rgba(255,80,67,0.7), 0 0 18px 3px rgba(255,80,67,0.32); }
            50%      { box-shadow: 0 4px 12px -2px rgba(57,43,213,0.4),  0 0 0 2px rgba(57,43,213,0.7),  0 0 22px 4px rgba(57,43,213,0.36); }
          }
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
      `},{id:"05-je",title:"Step 5 \xB7 Journal entry",body:'Journal entry assembled, audit trail attached. One click to <span class="grad">post to ERP</span>.',tooltipSide:"top",spotlight:"#post-btn",advanceOn:{click:"#post-btn"},html:`${P}
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
      `},{id:"06-posted",title:"Step 6 \xB7 Posted",body:"Vero noticed this is a daily pattern. Want it to handle every morning?",tooltipSide:"right",spotlight:"#vero-card",advanceOn:{click:"#vero-yes"},html:`${P}
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
      `},{id:"07-schedule",title:"Step 7 \xB7 Schedule",body:'Vero proposes the rules. <span class="grad">You stay in control</span> of every threshold.',tooltipSide:"top",spotlight:"#approve-btn",advanceOn:{click:"#approve-btn"},html:`${P}
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
              <div class="fl">${r.mail} Trigger</div>
              <div class="fv"><span>Email arrives in inbox \xB7 vendor matches "Acme"</span><span class="edit">Edit</span></div>
            </div>
            <div class="field-block">
              <div class="fl">${r.zap} Action</div>
              <div class="fv"><span>Extract, match, post journal entry</span><span class="edit">Edit</span></div>
            </div>
            <div class="field-block">
              <div class="fl">${r.shield} Confidence threshold</div>
              <div class="fv"><span class="mono">\u2265 95% auto-post \xB7 80 to 94% surface to you</span><span class="edit">Edit</span></div>
            </div>
            <div class="field-block">
              <div class="fl">${r.clock} Schedule</div>
              <div class="fv"><span>Run within 5 min of arrival \xB7 check every 8:00 AM</span><span class="edit">Edit</span></div>
            </div>
          </div>
          <div class="m-foot">
            <div class="foot-note"><span class="foot-dot"></span>Pauseable \xB7 auditable \xB7 changes logged</div>
            <button class="btn" id="approve-btn">Approve & schedule</button>
          </div>
        </div>
      `},{id:"08-done",title:"Step 8 \xB7 Live",body:'Done. Vero handles it tomorrow at <span class="grad">8:00 AM</span>, and every morning after.',tooltipSide:"right",spotlight:"#tile",html:`${P}
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
              <span class="tile-icon">${r.factory}</span>
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
      `}]};A(je);function Le(s){return s>=36?"red":s>=16?"amber":"green"}var D=[{co:n.energy,balance:"\u20AC179K",days:45,last:"Last Fri"},{co:n.logistics,balance:"\u20AC92K",days:18,last:"Never"},{co:n.pharma,balance:"\u20AC47K",days:22,last:"Email sent"},{co:n.retail,balance:"\u20AC18K",days:60,last:"3d ago"},{co:n.tech,balance:"\u20AC22K",days:35,last:"Call Thu"},{co:n.food,balance:"\u20AC14K",days:28,last:"1w ago"},{co:n.motors,balance:"\u20AC63K",days:12,last:"Never"},{co:n.build,balance:"\u20AC38K",days:40,last:"Email sent"}],Re="\u20AC475K",E=D.length,R=`
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
    .scene[class*="scene-c-"] .btn { appearance: none; border: 0; cursor: pointer; background: linear-gradient(90deg, #ff8308, #ff5043 55%, #392bd5); background-size: 200% 100%; background-position: 0% 50%; color: #fff; font: 500 12px/1 Geist, system-ui, sans-serif; padding: 10px 18px; border-radius: 999px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 4px 12px -2px rgba(255,80,67,0.32), 0 1px 2px rgba(10,10,10,0.06); transition: background-position 0.3s ease, transform 0.15s ease, box-shadow 0.2s ease; }
    .scene[class*="scene-c-"] .btn:hover { background-position: 100% 50%; transform: translateY(-1px); box-shadow: 0 8px 20px -3px rgba(255,80,67,0.45), 0 2px 4px rgba(10,10,10,0.08); }
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
`;function V(s,e={}){let{status:a="",dim:t=!1,highlight:o=!1,id:i=""}=e,c=["wl-row"];t&&c.push("dim"),o&&c.push("highlight");let p=a||`<span style="font-size: 11px; color: rgba(10,10,10,0.5);">${s.last}</span>`,g=Le(s.days);return`
    <div class="${c.join(" ")}"${i?` id="${i}"`:""}>
      ${y(s.co)}
      <div>
        <div class="wl-co-name">${s.co.name}</div>
        <div class="wl-co-sector">${s.co.sector}</div>
      </div>
      <span class="wl-flag" title="${s.co.country}">${de(s.co.country)}</span>
      <span class="wl-bal mono">${s.balance}</span>
      <span class="wl-days"><span class="pill ${g}">${s.days}d</span></span>
      <span class="wl-status">${p}</span>
    </div>
  `}var Ve={id:"collections",tag:"COLLECTIONS \xB7 INTERACTIVE DEMO",coverLabel:"See collections in 30 seconds",closing:{headline:'8 PTPs captured. 3 escalations routed. <span class="grad">Hours back.</span>',sub:"Want Vero to run your morning queue, every morning?"},scenes:[{id:"c-01-worklist",title:"Step 1 \xB7 Worklist",body:`${E} accounts overdue today. Vero works them all at once: calls in <span class="grad">their language</span>, emails in your tone.`,tooltipSide:"left",spotlight:"#run-batch",advanceOn:{click:"#run-batch"},html:`${R}
        <div class="head">
          <div>
            <h2>Overdue worklist</h2>
            <div class="head-sub">${E} accounts \xB7 ${Re} past due \xB7 updated 2 min ago</div>
          </div>
          <button class="btn" id="run-batch">
            Run batch (${E}) \u2192
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
          ${D.map(s=>V(s)).join("")}
        </div>
      `},{id:"c-02-batch",title:"Step 2 \xB7 Batch running",body:`One queue, ${E} parallel workstreams. Vero follows your <span class="grad">playbook</span> for each: channel, language, escalation rules.`,tooltipSide:"left",spotlight:"#wl-running",html:`${R}
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
            <div class="head-sub">${E} accounts in flight \xB7 calls in native language, emails localized</div>
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
          ${D.map((s,e)=>{let a=['<span class="pill green"><span>\u2713</span> PTP \u20AC179K</span>','<span class="pill blue"><span>\u2709</span> Email sent</span>','<span class="pill amber"><span>\u26A0</span> Escalated</span>','<span class="pill amber"><span>\u26A0</span> Escalated</span>','<span class="pill amber"><span>\u26A0</span> Escalated</span>','<span class="pill green"><span>\u2713</span> PTP \u20AC14K</span>','<span class="pill green"><span>\u2713</span> Paid today</span>','<span class="pill blue"><span>\u2709</span> Reminder sent</span>'][e],o=`
              <div class="p-stages">
                <span class="p-stage s1"><span class="pill gray">\u25CF Queued</span></span>
                <span class="p-stage s2"><span class="pill violet">\u25CF ${e===1||e===7?"Emailing":"Calling"}</span></span>
                <span class="p-stage final">${a}</span>
              </div>
            `;return V(s,{status:o}).replace('<div class="wl-row',`<div data-idx="${e}" class="wl-row`)}).join("")}
        </div>
      `},{id:"c-03-ptp",title:"Step 3 \xB7 Promise to pay",body:`Maria at ${n.energy.name} committed <span class="grad">\u20AC179K</span> by Friday. Logged, with the full transcript attached.`,tooltipSide:"left",spotlight:"#ptp-card",html:`${R}
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
          <h2>${n.energy.name}</h2>
          <span class="pill green">Resolved \xB7 autonomous</span>
        </div>
        <div class="wrap">
          <div class="card">
            <div class="card-head">
              <div>
                <div class="card-title">Worklist</div>
                <div class="card-meta">${E} accounts \xB7 1 focused</div>
              </div>
            </div>
            ${D.map((s,e)=>V(s,{dim:e!==0,status:e===0?'<span class="pill green">PTP \u20AC179K</span>':""})).join("")}
          </div>
          <div id="ptp-card">
            <div class="call-head">
              ${y(n.energy)}
              <div>
                <div class="call-name">${n.energy.contact}</div>
                <div class="call-sub">AP \xB7 ${n.energy.name}</div>
              </div>
            </div>
            <div class="call-meta-row">
              <span class="pill violet">${r.phone} AI call \xB7 3:42</span>
              <span class="pill green">Positive sentiment</span>
              <span class="pill gray">\u{1F1F5}\u{1F1F9} Portuguese</span>
            </div>
            <div class="transcript">
              "\u2026Posso transferir \u20AC179,000 at\xE9 sexta-feira. Refer\xEAncia da fatura 0019, como sempre."
              <div style="font-size: 10px; color: rgba(10,10,10,0.45); font-style: normal; margin-top: 6px;">Auto-translated: "I can wire \u20AC179,000 by Friday. Invoice reference 0019, as always."</div>
            </div>
            <div class="outcome">
              <div>
                <div class="outcome-label">${r.check} Promise to pay logged</div>
                <div class="outcome-date">Reminder scheduled for Thu, 24 Apr</div>
              </div>
              <div style="text-align: right;">
                <div class="outcome-amt">\u20AC179,000</div>
                <div class="outcome-date">Due Fri 25 Apr</div>
              </div>
            </div>
          </div>
        </div>
      `},{id:"c-04-fallback",title:"Step 4 \xB7 Fallback",body:'No answer? Vero switches to email, in their language, <span class="grad">per your rules</span>, no prompt required.',tooltipSide:"left",spotlight:"#fallback-card",html:`${R}
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
          <h2>${n.logistics.name}</h2>
          <span class="pill blue">Reminder sent \xB7 autonomous</span>
        </div>
        <div class="wrap">
          <div class="card">
            <div class="card-head">
              <div>
                <div class="card-title">Worklist</div>
                <div class="card-meta">${E} accounts \xB7 1 focused</div>
              </div>
            </div>
            ${D.map((s,e)=>V(s,{dim:e!==1,status:e===1?'<span class="pill blue">Email sent</span>':""})).join("")}
          </div>
          <div id="fallback-card">
            <div class="call-head">
              ${y(n.logistics)}
              <div>
                <div class="call-name">${n.logistics.contact}</div>
                <div class="call-sub">Finance \xB7 ${n.logistics.name}</div>
              </div>
            </div>
            <div class="flow">
              <div class="flow-step failed">
                <div class="icon">${r.phone}</div>
                <div class="label">AI call</div>
                <div class="sub">No answer \xB7 2 tries</div>
              </div>
              <div class="flow-arrow">${r.arrowRight}</div>
              <div class="flow-step active">
                <div class="icon">${r.mail}</div>
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
      `},{id:"c-05-escalation",title:"Step 5 \xB7 Escalation",body:`Three accounts Vero shouldn't auto-resolve. Each lands in <span class="grad">your queue</span> with the full evidence pack.`,tooltipSide:"left",spotlight:"#esc-review-btn",advanceOn:{click:"#esc-review-btn"},html:`${R}
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
            <div class="head-sub">${E} accounts processed \xB7 3 need your call</div>
          </div>
          <span class="pill red">${r.alert} Action required</span>
        </div>
        <div id="escalation-bar">
          <div class="alert-icon">${r.alert}</div>
          <div class="alert-text">
            <div class="alert-title">3 disputes detected \xB7 needs you</div>
            <div class="alert-sub">Vero packaged the full evidence per case. Review and respond at your own pace.</div>
          </div>
          <button class="btn" id="esc-review-btn">Review queue \u2192</button>
        </div>
        <div class="card">
          ${D.map((s,e)=>{if(!(e>=2&&e<=4))return V(s,{dim:!0,status:e===0?'<span class="pill green">PTP \u20AC179K</span>':e===1?'<span class="pill blue">Email sent</span>':e===5?'<span class="pill green">PTP \u20AC14K</span>':e===6?'<span class="pill green">Paid today</span>':'<span class="pill blue">Reminder sent</span>'});let o=`
              <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 2px;">
                <span class="pill amber">\u26A0 Escalated</span>
                <span class="esc-reason">${{2:"Price disagreement on PO 4421",3:"Short-pay \u20AC4,230 \xB7 trade promo?",4:"Invoice disputed \xB7 subscription cadence"}[e]}</span>
              </div>
            `;return V(s,{status:o}).replace('class="wl-row"','class="wl-row esc"')}).join("")}
        </div>
      `},{id:"c-06-done",title:"Step 6 \xB7 Done",body:'Eight minutes of Vero. Hours saved, <span class="grad">every morning</span>, if you want.',tooltipSide:"right",spotlight:"#coll-vero-card",advanceOn:{click:"#coll-yes"},html:`${R}
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
      `}]};A(Ve);var ee=[{co:n.retail,amount:"\u20AC4,230",reason:"Short-pay \xB7 possible trade promo",age:"2h",hero:!0},{co:n.pharma,amount:"\u20AC1,200",reason:"Price disagreement on PO 4421",age:"5h",hero:!1},{co:n.tech,amount:"\u20AC850",reason:"Subscription cadence mismatch",age:"1d",hero:!1},{co:n.fashion,amount:"\u20AC2,100",reason:"Quality claim \xB7 SKU 8842",age:"2d",hero:!1},{co:n.build,amount:"\u20AC300",reason:"Unexpected shipping fee",age:"3d",hero:!1}],Y=`
  <style>
    .scene[class*="scene-d-"] { position: absolute; inset: 0; padding: 22px 28px; font: 13px/1.45 Geist, system-ui, sans-serif; color: #0a0a0a; }
    .scene[class*="scene-d-"] h2 { font: 500 18px/1.2 Geist, system-ui, sans-serif; letter-spacing: -0.015em; margin: 0; }
    .scene[class*="scene-d-"] .head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
    .scene[class*="scene-d-"] .head-sub { color: rgba(10,10,10,0.5); font-size: 12px; margin-top: 2px; }
    .scene[class*="scene-d-"] .mono { font-variant-numeric: tabular-nums; letter-spacing: -0.01em; }
    .scene[class*="scene-d-"] .card { background: #fff; border: 1px solid rgba(10,10,10,0.08); border-radius: 10px; }
    .scene[class*="scene-d-"] .btn { appearance: none; border: 0; cursor: pointer; background: linear-gradient(90deg, #ff8308, #ff5043 55%, #392bd5); background-size: 200% 100%; background-position: 0% 50%; color: #fff; font: 500 12px/1 Geist, system-ui, sans-serif; padding: 10px 18px; border-radius: 999px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 4px 12px -2px rgba(255,80,67,0.32), 0 1px 2px rgba(10,10,10,0.06); transition: background-position 0.3s ease, transform 0.15s ease, box-shadow 0.2s ease; }
    .scene[class*="scene-d-"] .btn:hover { background-position: 100% 50%; transform: translateY(-1px); box-shadow: 0 8px 20px -3px rgba(255,80,67,0.45), 0 2px 4px rgba(10,10,10,0.08); }
    .scene[class*="scene-d-"] .btn-light { background: #fff; color: #0a0a0a; border: 1px solid rgba(10,10,10,0.1); }
    .scene[class*="scene-d-"] .pill { display: inline-flex; align-items: center; gap: 4px; font-size: 11px; font-weight: 500; padding: 3px 8px; border-radius: 999px; }
    .scene[class*="scene-d-"] .pill.green { background: rgba(1,146,115,0.12); color: #019273; }
    .scene[class*="scene-d-"] .pill.amber { background: rgba(239,137,1,0.12); color: #b75e00; }
    .scene[class*="scene-d-"] .pill.red   { background: rgba(239,68,68,0.14); color: #b91c1c; }
    .scene[class*="scene-d-"] .pill.violet{ background: rgba(130,89,247,0.12); color: #6d28d9; }
    .scene[class*="scene-d-"] .pill.gray  { background: rgba(10,10,10,0.06); color: rgba(10,10,10,0.6); }
    .scene[class*="scene-d-"] .eyebrow { font: 500 10px/1 Geist, system-ui, sans-serif; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(10,10,10,0.5); }
  </style>
`,De={id:"deductions",tag:"DEDUCTIONS \xB7 INTERACTIVE DEMO",coverLabel:"See deductions in 30 seconds",closing:{headline:'Short-pay investigated, settlement posted. <span class="grad">Hours saved.</span>',sub:"Want Vero to auto-resolve patterns it's already seen?"},scenes:[{id:"d-01-queue",title:"Step 1 \xB7 Deduction queue",body:`${n.retail.name} paid short by <span class="grad">\u20AC4,230</span> on a \u20AC92K invoice. Vero will pull the evidence.`,tooltipSide:"left",spotlight:"#ded-investigate",advanceOn:{click:"#ded-investigate"},html:`${Y}
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
            <div class="head-sub">${ee.length} open \xB7 \u20AC8,680 disputed \xB7 auto-classification running</div>
          </div>
          <span class="pill amber">\u26A0 ${ee.length} unresolved</span>
        </div>
        <div class="card">
          <div class="card-head">
            <div>
              <div style="font-weight: 500;">Open short-pays + disputes</div>
              <div style="font-size: 11px; color: rgba(10,10,10,0.5); margin-top: 2px;">Oldest first \xB7 click Investigate to trigger classification</div>
            </div>
            <span class="eyebrow">Action</span>
          </div>
          ${ee.map((s,e)=>`
            <div class="queue-row ${s.hero?"hero":"faded"}">
              ${y(s.co)}
              <div>
                <div class="qr-name">${s.co.name}</div>
                <div class="qr-reason">${s.reason}</div>
              </div>
              <div>
                <div class="qr-amt mono">-${s.amount}</div>
                <div class="qr-age">${s.age} ago</div>
              </div>
              <span class="pill gray">${s.co.country==="FR"?"France":s.co.country==="ES"?"Spain":s.co.country==="IE"?"Ireland":s.co.country==="SE"?"Sweden":"Netherlands"}</span>
              <div class="qr-action">
                ${s.hero?'<button class="btn" id="ded-investigate">Investigate \u2192</button>':'<button class="btn btn-light">Investigate</button>'}
              </div>
            </div>
          `).join("")}
        </div>
      `},{id:"d-02-evidence",title:"Step 2 \xB7 Evidence chain",body:'Vero pulls the invoice, purchase order, proof of delivery, contract, and any active <span class="grad">trade-promo agreement</span>, then links them automatically.',tooltipSide:"bottom",spotlight:"#evidence-chain",html:`${Y}
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
          ${y(n.retail)}
          <div style="flex: 1;">
            <div style="font-weight: 500;">${n.retail.name} \xB7 ${n.retail.contact}</div>
            <div style="font-size: 11px; color: rgba(10,10,10,0.55); margin-top: 2px;">Invoice INV-3482 \xB7 \u20AC92,000 \xB7 paid \u20AC87,770 \xB7 <span class="ctx-amt">short \u20AC4,230</span></div>
          </div>
          <span class="pill violet">\u25CF Classifying</span>
        </div>
        <div id="evidence-chain">
          <div class="chain">
            <div class="doc d1">
              <div class="doc-icon">${r.mail}</div>
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
      `},{id:"d-03-recommend",title:"Step 3 \xB7 Vero's plan",body:'Evidence assembled, plan drafted. <span class="grad">One click</span> to apply.',tooltipSide:"left",spotlight:"#apply-btn",advanceOn:{click:"#apply-btn"},html:`${Y}
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
              <div class="vero-sub">${n.retail.name} \xB7 INV-3482 \xB7 short \u20AC4,230</div>
            </div>
            <div style="margin-left: auto;"><span class="pill green">Ready to apply</span></div>
          </div>
          <div class="rec-card">
            <div class="rec-title">Here's what I'd do:</div>
            <div class="rec-ctx">Based on 5 source documents and 1,247 historical cases.</div>
            <div class="plan">
              <div class="plan-row valid">
                <span class="plan-icon">${r.check}</span>
                <div class="plan-body">
                  <div class="plan-action">Auto-settle as trade promo TP-041</div>
                  <div class="plan-why">89% match \xB7 write off to promo reserve \xB7 14 similar cases this quarter</div>
                </div>
                <div class="plan-amt">\u20AC3,780</div>
              </div>
              <div class="plan-row review">
                <span class="plan-icon">${r.alert}</span>
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
      `},{id:"d-04-done",title:"Step 4 \xB7 Posted",body:'Settled in under 5 minutes. Vero spotted <span class="grad">14 similar cases</span> this quarter. Want Vero to resolve those automatically?',tooltipSide:"right",spotlight:"#ded-vero-card",advanceOn:{click:"#ded-yes"},html:`${Y}
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
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${r.alert.replace(/<svg[^>]*>|<\/svg>/g,"")}</svg>
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
      `}]};A(De);var Oe=[{co:n.energy,inv:"INV-0019",amount:179e3,risk:88,reason:"2 broken PTPs \xB7 sentiment declining"},{co:n.motors,inv:"INV-1183",amount:63e3,risk:71,reason:"DSO trend +9 days \xB7 last call 12d ago"},{co:n.fashion,inv:"INV-0876",amount:42e3,risk:64,reason:"New CFO \xB7 payment behavior unclear"},{co:n.tech,inv:"INV-2204",amount:22e3,risk:58,reason:"Subscription dispute open"},{co:n.build,inv:"INV-1144",amount:38e3,risk:52,reason:"POD discrepancy under review"}],F=`
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
`;function pe({weeks:s,highlight:e=-1,resolved:a=!1}){let v=k=>36+k/(s.length-1)*668,h=Math.max(...s)*1.1,u=Math.min(...s)*.85,f=k=>18+(1-(k-u)/(h-u))*174,l=3,m=s.slice(0,l).map((k,S)=>`${S===0?"M":"L"}${v(S).toFixed(1)},${f(k).toFixed(1)}`).join(" "),M=s.slice(l-1).map((k,S)=>`${S===0?"M":"L"}${v(S+l-1).toFixed(1)},${f(k).toFixed(1)}`).join(" "),N=s.slice(l-1).map((k,S)=>`${v(S+l-1).toFixed(1)},${f(k*1.1).toFixed(1)}`),Q=s.slice(l-1).map((k,S)=>`${v(S+l-1).toFixed(1)},${f(k*.92).toFixed(1)}`).reverse(),U=`M${N.join(" L")} L${Q.join(" L")} Z`,G=[0,3,6,9,12].map(k=>`<text x="${v(k)}" y="212" font-size="9" fill="rgba(10,10,10,0.45)" text-anchor="middle">W${k+1}</text>`).join(""),w=[0,.33,.66,1].map(k=>{let S=18+k*174;return`<line x1="36" y1="${S}" x2="704" y2="${S}" stroke="rgba(10,10,10,0.05)" stroke-width="1"/>`}).join(""),C=[h,h*.66+u*.34,h*.33+u*.67,u].map((k,S)=>`<text x="30" y="${18+S/3*174+3}" font-size="9" fill="rgba(10,10,10,0.4)" text-anchor="end">\u20AC${(k/1e3).toFixed(0)}K</text>`).join(""),B=e>=0?`
    <line x1="${v(e)}" y1="18" x2="${v(e)}" y2="192" stroke="${a?"#019273":"#ef4444"}" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.5"/>
    <circle cx="${v(e)}" cy="${f(s[e])}" r="6" fill="${a?"#019273":"#ef4444"}"/>
    <circle cx="${v(e)}" cy="${f(s[e])}" r="11" fill="none" stroke="${a?"#019273":"#ef4444"}" stroke-width="1.5" opacity="0.4"/>
    <text x="${v(e)}" y="${f(s[e])-16}" font-size="10" font-weight="500" fill="${a?"#019273":"#ef4444"}" text-anchor="middle">\u20AC${(s[e]/1e3).toFixed(0)}K</text>
  `:"";return`
    <svg viewBox="0 0 720 220" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: auto; display: block;">
      ${w}
      ${C}
      <path d="${U}" fill="rgba(78,85,225,0.10)"/>
      <path d="${m}" fill="none" stroke="#0a0a0a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="${M}" fill="none" stroke="#4e55e1" stroke-width="2" stroke-dasharray="4 3" stroke-linecap="round" stroke-linejoin="round"/>
      ${B}
      ${G}
    </svg>
  `}var z=[820,850,870,890,910,880,740,820,900,940,980,1010,1040].map(s=>s*1e3),Ke=[820,850,870,890,910,920,935,950,980,1e3,1030,1060,1090].map(s=>s*1e3),Ne={fx:{id:"fx",label:"EUR +5% vs USD",icon:"globe",title:"EUR strengthens 5% vs USD",sub:"Affects US revenue conversion \xB7 Q ends in week 13",intensities:["+2%","+5%","+10%"],defaultIntensity:"+5%",driverCopy:"US receivables book: $1.2M \xB7 locked at \u20AC0.92 \xB7 adjustment applied from week 4",weeks:(s="+5%")=>{let e=s==="+2%"?.972:s==="+10%"?.88:.93;return z.map((a,t)=>t<3?a:Math.round(a*e))},risk:(s="+5%")=>({w13:s==="+2%"?"\u20AC1.01M":s==="+10%"?"\u20AC916K":"\u20AC970K",delta:s==="+2%"?"\u2212\u20AC30K":s==="+10%"?"\u2212\u20AC124K":"\u2212\u20AC70K",exposure:s==="+2%"?"\u20AC35K":s==="+10%"?"\u20AC184K":"\u20AC92K",exposureDesc:"USD receivables"})},costs:{id:"costs",label:"Input costs +8%",icon:"fuel",title:"Input costs rise 8%",sub:"Hits margin on AP payables \xB7 customers pass less-than-full through",intensities:["+4%","+8%","+15%"],defaultIntensity:"+8%",driverCopy:"Raw mat index +8% WoW \xB7 AP book \u20AC2.4M across 6 suppliers \xB7 60% pass-through",weeks:(s="+8%")=>{let e=s==="+4%"?.975:s==="+15%"?.91:.955;return z.map((a,t)=>t<3?a:Math.round(a*e))},risk:(s="+8%")=>({w13:s==="+4%"?"\u20AC1.01M":s==="+15%"?"\u20AC946K":"\u20AC993K",delta:s==="+4%"?"\u2212\u20AC30K":s==="+15%"?"\u2212\u20AC94K":"\u2212\u20AC47K",exposure:s==="+4%"?"\u20AC28K":s==="+15%"?"\u20AC95K":"\u20AC58K",exposureDesc:"margin compression"})},dso:{id:"dso",label:"DSO +5 days",icon:"trendingUp",title:"DSO slips +5 days",sub:"Receipts shift right \xB7 same cash, later week",intensities:["+3d","+5d","+10d"],defaultIntensity:"+5d",driverCopy:"Customer AP teams taking longer \xB7 4 accounts showing drift \xB7 early warning",weeks:(s="+5d")=>{let e=s==="+3d"?.4:s==="+10d"?1.4:.7;return z.map((a,t)=>{if(t<3)return a;let o=Math.max(0,Math.min(z.length-1,t-e)),i=Math.floor(o),c=Math.ceil(o),p=o-i;return Math.round(z[i]*(1-p)+z[c]*p)})},risk:(s="+5d")=>({w13:s==="+3d"?"\u20AC1.02M":s==="+10d"?"\u20AC950K":"\u20AC985K",delta:s==="+3d"?"\u2212\u20AC20K":s==="+10d"?"\u2212\u20AC90K":"\u2212\u20AC55K",exposure:s==="+3d"?"\u20AC52K":s==="+10d"?"\u20AC178K":"\u20AC108K",exposureDesc:"cash timing"})},delay:{id:"delay",label:"Top customer 30d delay",icon:"truck",title:`${n.energy.name} delays 30 days`,sub:"\u20AC179K PTP at risk \xB7 historical slippage pattern applies",intensities:["15d","30d","60d"],defaultIntensity:"30d",driverCopy:`${n.energy.name} \xB7 \u20AC179K invoice \xB7 88% slip risk \xB7 2 broken PTPs in 60d`,weeks:(s="30d")=>{let e=s==="15d"?110:179,a=s==="15d"?8:s==="60d"?12:10;return z.map((t,o)=>o===6?t-e*1e3:o===a&&s!=="60d"?t+Math.round(e*.8*1e3):t)},risk:(s="30d")=>({w13:s==="15d"?"\u20AC1.02M":s==="60d"?"\u20AC861K":"\u20AC931K",delta:s==="15d"?"\u2212\u20AC20K":s==="60d"?"\u2212\u20AC179K":"\u2212\u20AC109K",exposure:s==="15d"?"\u20AC110K":"\u20AC179K",exposureDesc:`${n.energy.name} PTP`})}};function Be(s,e){let x=z.length,v=w=>36+w/(x-1)*668,h=[...z,...s],u=Math.max(...h)*1.05,f=Math.min(...h)*.9,l=w=>14+(1-(w-f)/(u-f))*150,m=w=>w.map((C,B)=>`${B===0?"M":"L"}${v(B).toFixed(1)},${l(C).toFixed(1)}`).join(" "),M=[0,.33,.66,1].map(w=>{let C=14+w*150;return`<line x1="36" y1="${C}" x2="704" y2="${C}" stroke="rgba(10,10,10,0.05)" stroke-width="1"/>`}).join(""),N=[0,3,6,9,12].map(w=>`<text x="${v(w)}" y="182" font-size="9" fill="rgba(10,10,10,0.45)" text-anchor="middle">W${w+1}</text>`).join(""),Q=[u,(u+f)/2,f].map((w,C)=>`<text x="30" y="${14+C/2*150+3}" font-size="9" fill="rgba(10,10,10,0.4)" text-anchor="end">\u20AC${(w/1e3).toFixed(0)}K</text>`).join(""),U=v(x-1),G=l(s[x-1]);return`
    <svg viewBox="0 0 720 190" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: auto; display: block;">
      ${M}
      ${Q}
      <path d="${m(z)}" fill="none" stroke="rgba(10,10,10,0.25)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="${m(s)}" fill="none" stroke="#4e55e1" stroke-width="2" stroke-dasharray="4 3" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="${U}" cy="${G}" r="4" fill="#4e55e1"/>
      <text x="${U-6}" y="${G-8}" font-size="10" font-weight="500" fill="#4e55e1" text-anchor="end">${e}</text>
      ${N}
    </svg>
  `}function se(s,e){let a=Ne[s],t=e||a.defaultIntensity,o=a.weeks(t),i=a.risk(t);return`
    <div class="sc-head">
      <div>
        <div class="sc-title">${a.title} \xB7 <span class="sc-intensity-label">${t}</span></div>
        <div class="sc-sub">${a.sub}</div>
      </div>
      <div class="sc-legend">
        <span class="key"><span class="swatch base"></span>Baseline</span>
        <span class="key"><span class="swatch new"></span>Scenario</span>
      </div>
    </div>
    <div class="intensity-row">
      <span class="int-label">Intensity</span>
      ${a.intensities.map(c=>`<button class="int-chip ${c===t?"active":""}" data-scenario="${s}" data-intensity="${c}">${c}</button>`).join("")}
      <span class="int-driver">${a.driverCopy}</span>
    </div>
    ${Be(o,i.w13)}
    <div class="impact-row">
      <div class="impact">
        <div class="l">Week 13 \xB7 baseline</div>
        <div class="v mono">\u20AC1.04M</div>
        <div class="d">unchanged</div>
      </div>
      <div class="impact">
        <div class="l">Week 13 \xB7 scenario</div>
        <div class="v mono" style="color: #b91c1c;">${i.w13}</div>
        <div class="d down">${i.delta} exposure</div>
      </div>
      <div class="impact">
        <div class="l">Cash at risk</div>
        <div class="v mono" style="color: #b91c1c;">${i.exposure}</div>
        <div class="d down">${i.exposureDesc}</div>
      </div>
    </div>
  `}var Fe={id:"predictions",tag:"CASH FLOW FORECASTING \xB7 INTERACTIVE DEMO",coverLabel:"See cash predictions in 30 seconds",closing:{headline:'A \u20AC170K dip avoided. Forecast back on track. <span class="grad">Hours back.</span>',sub:"Want Vero to monitor and act on signals every morning?"},scenes:[{id:"p-01-forecast",title:"Step 1 \xB7 13-week forecast",body:'Cash holding strong, except a <span class="grad">\u20AC170K dip</span> in week 6. Vero spotted the risk before it lands.',tooltipSide:"left",spotlight:"#dip-investigate",advanceOn:{click:"#dip-investigate"},html:`${F}
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
          ${pe({weeks:z,highlight:6})}
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
          <div class="alert-icon">${r.alert}</div>
          <div class="alert-text">
            <div class="alert-title">Week 6 cash drops \u20AC170K below trend</div>
            <div class="alert-sub">5 invoices at risk \xB7 driven by Acme Energy's \u20AC179K PTP slipping</div>
          </div>
          <button class="btn" id="dip-investigate">Investigate \u2192</button>
        </div>
      `},{id:"p-02-scenario",title:"Step 2 \xB7 Stress-test",body:'<span class="grad">Click any scenario</span>. The chart and numbers update live. Try switching and dialling intensities up.',tooltipSide:"top",spotlight:"#scenarios-frame",advanceOn:{click:"#scenario-drilldown"},onMount:s=>{let e=s.querySelector("#scenario-inner");e&&(s.querySelectorAll("[data-scenario-tab]").forEach(a=>{a.addEventListener("click",()=>{let t=a.getAttribute("data-scenario-tab");s.querySelectorAll("[data-scenario-tab]").forEach(o=>o.classList.toggle("active",o===a)),e.innerHTML=se(t)})}),s.addEventListener("click",a=>{let t=a.target.closest("[data-intensity]");if(!t)return;let o=t.getAttribute("data-scenario"),i=t.getAttribute("data-intensity");e.innerHTML=se(o,i)}))},html:`${F}
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

          /* Intensity row gets a brand-gradient halo so the user's eye finds the
             clickable chips inside the spotlighted frame. Pulses gently to draw attention. */
          .scene-p-02-scenario .intensity-row {
            display: flex; align-items: center; gap: 6px; margin: 10px 0 8px;
            padding: 6px 8px; background: rgba(10,10,10,0.025);
            border-radius: 8px; flex-wrap: wrap;
            position: relative;
            box-shadow:
              0 0 0 1.5px rgba(255, 80, 67, 0.7),
              0 0 18px 2px rgba(255, 80, 67, 0.28);
            animation: scene-p02-hilite 2.4s ease-in-out infinite;
          }
          @keyframes scene-p02-hilite {
            0%, 100% { box-shadow: 0 0 0 1.5px rgba(255, 80, 67, 0.7), 0 0 18px 2px rgba(255, 80, 67, 0.28); }
            50%      { box-shadow: 0 0 0 1.5px rgba(57, 43, 213, 0.7),  0 0 22px 4px rgba(57, 43, 213, 0.32); }
          }
          .scene-p-02-scenario .int-label { font: 500 10px/1 Geist; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(10,10,10,0.5); margin-right: 2px; }
          .scene-p-02-scenario .int-chip { appearance: none; border: 1px solid rgba(10,10,10,0.1); background: #fff; padding: 4px 10px; border-radius: 6px; font: 500 11px/1 Geist, system-ui, sans-serif; font-variant-numeric: tabular-nums; cursor: pointer; color: rgba(10,10,10,0.7); transition: all 150ms ease; }
          .scene-p-02-scenario .int-chip:hover { border-color: rgba(78,85,225,0.5); color: #3730a3; transform: translateY(-1px); }
          .scene-p-02-scenario .int-chip.active { background: linear-gradient(90deg, #ff8308, #ff5043 55%, #392bd5); color: #fff; border-color: transparent; box-shadow: 0 2px 8px -2px rgba(255,80,67,0.35); }
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
          .scene-p-02-scenario #scenario-drilldown {
            padding: 11px 18px; font-size: 13px;
            background: linear-gradient(90deg, #ff8308, #ff5043 55%, #392bd5);
            background-size: 200% 100%; background-position: 0% 50%;
            color: #fff; border: 0; border-radius: 999px;
            box-shadow: 0 6px 16px -4px rgba(255,80,67,0.35), 0 1px 2px rgba(10,10,10,0.08);
            transition: background-position 0.3s ease, transform 0.15s ease, box-shadow 0.2s ease;
          }
          .scene-p-02-scenario #scenario-drilldown:hover {
            background-position: 100% 50%;
            transform: translateY(-1px);
            box-shadow: 0 10px 22px -4px rgba(255,80,67,0.45), 0 2px 4px rgba(10,10,10,0.1);
          }
        </style>
        <div class="head">
          <div>
            <h2>Stress-test the forecast</h2>
            <div class="head-sub">Model FX, input costs, customer delays \xB7 AR + AP both included</div>
          </div>
          <span class="pill indigo">${r.sliders} Scenario builder \xB7 live</span>
        </div>
        <div id="scenarios-frame">
          <div class="tab-strip">
            <button class="tab active" data-scenario-tab="fx">${r.globe} FX shift</button>
            <button class="tab" data-scenario-tab="costs">${r.fuel} Input costs</button>
            <button class="tab" data-scenario-tab="dso">${r.trendingUp} DSO drift</button>
            <button class="tab" data-scenario-tab="delay">${r.truck} Customer delay</button>
          </div>
          <div id="scenario-inner">${se("fx")}</div>
          <div class="cta-bar">
            <div>
              <div class="cta-label">Pick a scenario and click through the intensities, then see the invoices at risk</div>
              <div class="cta-sub">Chart and numbers update live \xB7 no save / reload \xB7 swap scenarios as often as you like</div>
            </div>
            <button class="btn" id="scenario-drilldown">See invoices at risk \u2192</button>
          </div>
        </div>
      `},{id:"p-03-atrisk",title:"Step 3 \xB7 At-risk invoices",body:`${n.energy.name}'s \u20AC179K is the biggest exposure. <span class="grad">88% likely to slip</span> based on past behaviour plus signals.`,tooltipSide:"bottom",spotlight:"#energy-row",advanceOn:{click:"#energy-row"},html:`${F}
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
          <span class="pill red">${r.alert} 5 to review</span>
        </div>
        <div class="ctx">
          <div class="ctx-icon">${r.alert}</div>
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
              <div class="head-meta">Total at risk: \u20AC344K \xB7 ${n.energy.name} highest</div>
            </div>
            <span style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.06em; color: rgba(10,10,10,0.5);">Risk score</span>
          </div>
          ${Oe.map((s,e)=>{let a=e===0,t=s.risk>=80?"red":s.risk>=65?"amber":"gray",o=s.risk>=80?"#ef4444":s.risk>=65?"#f59e0b":"#94a3b8";return`
              <div class="risk-row ${a?"hero":""}" ${a?'id="energy-row"':""}>
                ${y(s.co)}
                <div>
                  <div class="rr-name">${s.co.name}</div>
                  <div class="rr-inv">${s.inv} \xB7 ${s.co.country}</div>
                </div>
                <div class="rr-amt mono">\u20AC${(s.amount/1e3).toFixed(0)}K</div>
                <div class="rr-risk">
                  <div class="risk-bar"><div class="risk-bar-fill" style="width: ${s.risk}%; background: ${o};"></div></div>
                  <span class="risk-pct" style="color: ${o};">${s.risk}</span>
                </div>
                <div class="rr-reason" style="grid-column: 5 / 7;">${s.reason}</div>
              </div>
            `}).join("")}
        </div>
      `},{id:"p-04-recommend",title:"Step 4 \xB7 Vero's plan",body:`Three risk signals stack up. Vero's plan: <span class="grad">act now</span>, before the dip lands.`,tooltipSide:"left",spotlight:"#pred-apply",advanceOn:{click:"#pred-apply"},html:`${F}
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
              <div class="vero-sub">${n.energy.name} \xB7 INV-0019 \xB7 \u20AC179,000 \xB7 PTP due Fri 25 Apr</div>
            </div>
            <div style="margin-left: auto;"><span class="pill red">${r.alert} 88% slip risk</span></div>
          </div>
          <div class="rec-card">
            <div class="rec-section">
              <div class="rec-section-label">Why I'm flagging this</div>
              <div class="signals">
                <div class="signal">
                  <span class="signal-icon">${r.trendingUp}</span>
                  <span class="label"><strong>DSO trend:</strong> +8 days vs Q1 average</span>
                  <span class="meta">trending wrong</span>
                </div>
                <div class="signal">
                  <span class="signal-icon">${r.phoneOff}</span>
                  <span class="label"><strong>2 PTPs broken</strong> in the last 60 days</span>
                  <span class="meta">\u20AC420K total</span>
                </div>
                <div class="signal">
                  <span class="signal-icon">${r.trendingDown}</span>
                  <span class="label"><strong>Sentiment declining</strong> on last 3 calls</span>
                  <span class="meta">positive \u2192 neutral \u2192 cautious</span>
                </div>
              </div>
            </div>
            <div class="rec-section">
              <div class="rec-section-label">What I'd do</div>
              <div class="actions">
                <div class="action">
                  <span class="action-icon">${r.phone}</span>
                  <div class="body">
                    <div class="lab">Place a verification call before Friday</div>
                    <div class="det">In Portuguese, light-touch \xB7 re-confirm timing without escalation</div>
                  </div>
                </div>
                <div class="action">
                  <span class="action-icon">${r.alert}</span>
                  <div class="body">
                    <div class="lab">Move to priority collections queue</div>
                    <div class="det">If no response by Thursday, escalate to ${n.energy.contact}'s manager</div>
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
      `},{id:"p-05-resolved",title:"Step 5 \xB7 Forecast restored",body:'Dip mitigated. Forecast back on trend. Want Vero to <span class="grad">monitor and act</span> on these signals every morning?',tooltipSide:"top",spotlight:"#pred-yes",advanceOn:{click:"#pred-yes"},html:`${F}
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
            <p>Verification call placed \xB7 ${n.energy.contact} reaffirmed Fri 25 Apr \xB7 backup escalation queued</p>
          </div>
          <div style="margin-left: auto;"><span class="pill green">\u20AC170K dip avoided</span></div>
        </div>
        <div class="chart-card">
          <div class="chart-head">
            <div class="ch-title">13-week cash forecast \xB7 after Vero's plan</div>
            <div class="ch-delta">+\u20AC50K vs prior forecast at week 13</div>
          </div>
          ${pe({weeks:Ke,highlight:6,resolved:!0})}
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
      `}]};A(Fe);var qe=[{co:n.energy,risk:88,amount:"\u20AC179K",insight:"2 broken PTPs \xB7 sentiment declining"},{co:n.motors,risk:71,amount:"\u20AC63K",insight:"DSO trend +9 days \xB7 last call 12d ago"},{co:n.fashion,risk:64,amount:"\u20AC42K",insight:"New CFO \xB7 payment behavior unclear"},{co:n.tech,risk:58,amount:"\u20AC22K",insight:"Subscription dispute open"},{co:n.build,risk:52,amount:"\u20AC38K",insight:"POD discrepancy under review"}],Z=`
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
    .scene[class*="scene-v-"] .btn { appearance: none; border: 0; cursor: pointer; background: linear-gradient(90deg, #ff8308, #ff5043 55%, #392bd5); background-size: 200% 100%; background-position: 0% 50%; color: #fff; font: 500 12px/1 Geist, system-ui, sans-serif; padding: 10px 18px; border-radius: 999px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 4px 12px -2px rgba(255,80,67,0.32), 0 1px 2px rgba(10,10,10,0.06); transition: background-position 0.3s ease, transform 0.15s ease, box-shadow 0.2s ease; }
    .scene[class*="scene-v-"] .btn:hover { background-position: 100% 50%; transform: translateY(-1px); box-shadow: 0 8px 20px -3px rgba(255,80,67,0.45), 0 2px 4px rgba(10,10,10,0.08); }
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
`,We={id:"vero-chat",tag:"VERO CHAT \xB7 INTERACTIVE DEMO",coverLabel:"See Vero Chat in 30 seconds",closing:{headline:'Ask anything. Get answers and <span class="grad">actions</span>.',sub:"Want Vero to monitor your risk landscape and brief you every morning?"},scenes:[{id:"v-01-ask",title:"Step 1 \xB7 Ask",body:'Type any question. Vero pulls from your <span class="grad">live data</span>. No SQL, no joins, no waiting on BI.',tooltipSide:"left",spotlight:"#send-btn",advanceOn:{click:"#send-btn"},html:`${Z}
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
              <button class="send-btn" id="send-btn">${r.arrowRight}</button>
            </div>
          </div>
        </div>
      `},{id:"v-02-thinking",title:"Step 2 \xB7 Thinking",body:'Vero calls the right tools (aging report, credit scoring, communications history) <span class="grad">in parallel</span>.',tooltipSide:"right",spotlight:"#tool-stack",html:`${Z}
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
                    <span class="tool-icon">${r.check}</span>
                    <span class="tool-name">get_aging_report()</span>
                    <span class="tool-result">1,247 invoices \xB7 \u20AC4.2M open</span>
                  </div>
                  <div class="tool done">
                    <span class="tool-icon">${r.check}</span>
                    <span class="tool-name">score_credit_risk(top: 50)</span>
                    <span class="tool-result">5 above 50% slip risk</span>
                  </div>
                  <div class="tool running">
                    <span class="tool-icon">${r.phone}</span>
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
              <button class="send-btn">${r.arrowRight}</button>
            </div>
          </div>
        </div>
      `},{id:"v-03-answer",title:"Step 3 \xB7 Answer",body:'Ranked, scored, with the why. The action chips are <span class="grad">one click</span>. Not just an answer, an offer to act.',tooltipSide:"top",spotlight:"#schedule-calls-btn",advanceOn:{click:"#schedule-calls-btn"},html:`${Z}
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
          /* schedule-calls-btn keeps the base v3 gradient .btn styling (no override) */
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
                    Five customers stand out. Total exposure is <span class="grad">\u20AC344K</span> across these accounts. Top one is <strong>${n.energy.name}</strong>: they've broken 2 PTPs in 60 days and sentiment is shifting.
                  </div>
                  <div class="ranked-list">
                    ${qe.slice(0,3).map((s,e)=>{let a=s.risk>=80?"r-red":s.risk>=65?"r-amber":"r-gray";return`
                        <div class="ranked-item">
                          <span class="rank-num">${e+1}</span>
                          ${y(s.co)}
                          <div>
                            <div class="ri-name">${s.co.name}</div>
                            <div class="ri-insight">${s.insight}</div>
                          </div>
                          <span class="ri-amt mono">${s.amount}</span>
                          <span class="ri-risk ${a}">${s.risk}%</span>
                        </div>
                      `}).join("")}
                    <div style="font-size: 11px; color: rgba(10,10,10,0.5); text-align: center; padding: 4px 0;">+ 2 more (Acme Tech, Acme Build)</div>
                  </div>
                  <div class="actions-row">
                    <button class="action-chip" id="schedule-calls-btn">
                      ${r.phone} Schedule calls for top 3 <span class="action-chip-arrow">\u2192</span>
                    </button>
                    <button class="action-chip">
                      ${r.mail} Email risk report to controller
                    </button>
                    <button class="action-chip">
                      ${r.alert} Add to morning briefing
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
              <button class="send-btn">${r.arrowRight}</button>
            </div>
          </div>
        </div>
      `},{id:"v-04-done",title:"Step 4 \xB7 Done",body:'Three calls scheduled in <span class="grad">one click</span>. Want Vero to flag risks and brief you every morning?',tooltipSide:"top",spotlight:"#chat-yes",advanceOn:{click:"#chat-yes"},html:`${Z}
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
                      <span class="sc-check">${r.check}</span>
                      <span class="sc-title">Tomorrow \xB7 09:00 onwards</span>
                      <span class="pill green" style="margin-left: auto;">3 calls queued</span>
                    </div>
                    <div class="sc-row">
                      ${j(n.energy)}
                      <div>
                        <div class="sc-name">${n.energy.name} \xB7 ${n.energy.contact}</div>
                        <div class="sc-script">Light-touch \xB7 re-confirm Fri payment timing</div>
                      </div>
                      <span class="sc-when mono">09:00 \xB7 PT</span>
                      <span class="pill gray">Portuguese</span>
                    </div>
                    <div class="sc-row">
                      ${j(n.motors)}
                      <div>
                        <div class="sc-name">${n.motors.name} \xB7 ${n.motors.contact}</div>
                        <div class="sc-script">Check on aging \xB7 DSO trend</div>
                      </div>
                      <span class="sc-when mono">09:30 \xB7 DE</span>
                      <span class="pill gray">German</span>
                    </div>
                    <div class="sc-row">
                      ${j(n.fashion)}
                      <div>
                        <div class="sc-name">${n.fashion.name} \xB7 ${n.fashion.contact}</div>
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
              <button class="send-btn">${r.arrowRight}</button>
            </div>
          </div>
        </div>
      `}]};A(We);var q=`
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
    .scene[class*="scene-vb-"] .btn { appearance: none; border: 0; cursor: pointer; background: linear-gradient(90deg, #ff8308, #ff5043 55%, #392bd5); background-size: 200% 100%; background-position: 0% 50%; color: #fff; font: 500 12px/1 Geist, system-ui, sans-serif; padding: 10px 18px; border-radius: 999px; display: inline-flex; align-items: center; gap: 6px; white-space: nowrap; box-shadow: 0 4px 12px -2px rgba(255,80,67,0.32), 0 1px 2px rgba(10,10,10,0.06); transition: background-position 0.3s ease, transform 0.15s ease, box-shadow 0.2s ease; }
    .scene[class*="scene-vb-"] .btn:hover { background-position: 100% 50%; transform: translateY(-1px); box-shadow: 0 8px 20px -3px rgba(255,80,67,0.45), 0 2px 4px rgba(10,10,10,0.08); }
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
`,He={id:"vero-chat-v2",tag:"VERO AGENT \xB7 INTERACTIVE DEMO",coverLabel:"Meet Vero, your AR team lead",closing:{headline:'Reviewed, approved, fired. <span class="grad">One agent</span> running your AR.',sub:"This is what your mornings could look like."},scenes:[{id:"vb-01-recap",title:"Step 1 \xB7 Overnight recap",body:`Vero already handled the obvious work. Below is what's left, <span class="grad">waiting on you</span>.`,tooltipSide:"top",spotlight:"#vb-start-review",advanceOn:{click:"#vb-start-review"},html:`${q}
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
                    <span class="work-chip c1">${r.check} 12 PDFs extracted</span>
                    <span class="work-chip c2">${r.check} 10 invoices matched</span>
                    <span class="work-chip c3">${r.check} 8 JEs posted</span>
                    <span class="work-chip c4">${r.check} 5 deductions resolved</span>
                    <span class="work-meta">14h 28m unattended</span>
                  </div>
                  <div class="brief-intro">
                    <strong>Good morning, Sarah.</strong> <span class="num-green">\u20AC847K cleared</span> overnight. <span class="num-amber">3 buckets</span> couldn't go autonomous without your eyes. Q2 forecast upgraded <span class="num-green">+\u20AC1.2M</span>.
                  </div>
                  <div class="sections">
                    <div class="section cashapp">
                      <span class="sec-icon">${r.check}</span>
                      <div>
                        <div class="sec-head">
                          <div class="sec-title">Cash application</div>
                          <span class="sec-badge">2 need your review</span>
                        </div>
                        <div class="sec-body"><span class="num-green">\u20AC847K cleared</span> on 8 auto-posted JEs. Two edge cases drafted and waiting.</div>
                      </div>
                    </div>
                    <div class="section collections">
                      <span class="sec-icon">${r.phone}</span>
                      <div>
                        <div class="sec-head">
                          <div class="sec-title">Collections \xB7 today</div>
                          <span class="sec-badge">3 calls to approve</span>
                        </div>
                        <div class="sec-body">Top 3 priorities I'd work. <span class="num-indigo">\u20AC279K recovery</span> projected.</div>
                      </div>
                    </div>
                    <div class="section deductions">
                      <span class="sec-icon">${r.alert}</span>
                      <div>
                        <div class="sec-head">
                          <div class="sec-title">Deductions</div>
                          <span class="sec-badge">1 needs you</span>
                        </div>
                        <div class="sec-body"><span class="num-green">5 resolved</span> autonomously. One \u20AC450 portion I couldn't explain, packaged for you.</div>
                      </div>
                    </div>
                    <div class="section forecast">
                      <span class="sec-icon">${r.trendingUp}</span>
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
              <button class="send-btn">${r.arrowRight}</button>
            </div>
          </div>
        </div>
      `},{id:"vb-02-jes",title:"Step 2 \xB7 Cash app \xB7 2 JEs",body:'Every ledger line is visible. No black box, <span class="grad">no surprises</span>.',tooltipSide:"top",spotlight:"#vb-approve-jes",advanceOn:{click:"#vb-approve-jes"},html:`${q}
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
                    <span class="sub-head-icon">${r.check}</span>
                    <div class="sub-head-text">
                      <div class="sub-head-title">Cash application \xB7 2 edge cases for your approval</div>
                      <div class="sub-head-meta">Already cleared overnight: 8 JEs, \u20AC847K. These 2 didn't hit auto-post.</div>
                    </div>
                    <span class="pill green">Balanced</span>
                  </div>
                  <div class="je-list">
                    <div class="je">
                      <div class="je-head">
                        ${j(n.industries)}
                        <div class="je-meta">
                          <div class="je-title">JE-2024-04-22-A-0042 \xB7 ${n.industries.name}</div>
                          <div class="je-sub">Wire \u20AC530,000 \xB7 match confidence 87% \xB7 1 line needs split between INV-0021 and INV-0023</div>
                        </div>
                        <span class="pill amber">87% \xB7 below threshold</span>
                      </div>
                      <div class="je-reason">
                        ${r.alert}
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
                        ${j(n.pharma)}
                        <div class="je-meta">
                          <div class="je-title">JE-2024-04-22-A-0043 \xB7 ${n.pharma.name}</div>
                          <div class="je-sub">Wire \u20AC92,400 \xB7 match confidence 81% \xB7 FX rate EUR/USD locked at 1.084</div>
                        </div>
                        <span class="pill amber">81% \xB7 below threshold</span>
                      </div>
                      <div class="je-reason">
                        ${r.alert}
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
                    <button class="btn" id="vb-approve-jes">${r.check} Approve both JEs</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="chat-foot">
            <div class="input-bar">
              <input type="text" placeholder="Or ask me to edit either one..." />
              <button class="send-btn">${r.arrowRight}</button>
            </div>
          </div>
        </div>
      `},{id:"vb-03-calls",title:"Step 3 \xB7 Collections \xB7 3 calls",body:'Per-customer script, language and time. Vero waits for your <span class="grad">green light</span>.',tooltipSide:"top",spotlight:"#vb-approve-calls",advanceOn:{click:"#vb-approve-calls"},html:`${q}
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
                    <span class="sub-head-icon">${r.phone}</span>
                    <div class="sub-head-text">
                      <div class="sub-head-title">Collections queue \xB7 3 calls ready</div>
                      <div class="sub-head-meta">Light-touch, per your playbook, fallback to email on voicemail</div>
                    </div>
                    <span class="pill indigo">\u20AC279K projected</span>
                  </div>
                  <div class="call-list">
                    <div class="call">
                      ${y(n.energy)}
                      <div class="call-meta">
                        <div class="call-name">${n.energy.contact} \xB7 ${n.energy.name} <span class="call-amt">\u20AC179K</span></div>
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
                      ${y(n.motors)}
                      <div class="call-meta">
                        <div class="call-name">${n.motors.contact} \xB7 ${n.motors.name} <span class="call-amt">\u20AC63K</span></div>
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
                      ${y(n.fashion)}
                      <div class="call-meta">
                        <div class="call-name">${n.fashion.contact} \xB7 ${n.fashion.name} <span class="call-amt">\u20AC37K</span></div>
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
                    <button class="btn" id="vb-approve-calls">${r.check} Approve 3 calls</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="chat-foot">
            <div class="input-bar">
              <input type="text" placeholder="Or say &lsquo;skip the Motors call&rsquo;..." />
              <button class="send-btn">${r.arrowRight}</button>
            </div>
          </div>
        </div>
      `},{id:"vb-04-flag",title:"Step 4 \xB7 Deductions \xB7 1 flag",body:'Vero settled 5 itself. This one hit the <span class="grad">guardrail</span>, packaged for you.',tooltipSide:"top",spotlight:"#vb-send-to-queue",advanceOn:{click:"#vb-send-to-queue"},html:`${q}
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
                    <span class="sub-head-icon">${r.alert}</span>
                    <div class="sub-head-text">
                      <div class="sub-head-title">Deductions \xB7 1 case needs your call</div>
                      <div class="sub-head-meta">5 others auto-settled to trade promo reserve, no action needed</div>
                    </div>
                    <span class="pill amber">\u20AC450 unexplained</span>
                  </div>
                  <div class="case-card">
                    <div class="case-head">
                      ${y(n.retail)}
                      <div>
                        <div class="case-title">${n.retail.name} \xB7 short-pay investigation</div>
                        <div class="case-sub">INV-3482 \xB7 expected \u20AC92,000 \xB7 received \u20AC87,770 \xB7 short \u20AC4,230</div>
                      </div>
                      <span class="pill amber">\u20AC450 flagged</span>
                    </div>
                    <div class="case-body">
                      <div class="case-col">
                        <div class="c-label">I already resolved</div>
                        <div class="already-list">
                          <div class="already-item">
                            <span class="check-dot">${r.check}</span>
                            <span>\u20AC3,780 matched to trade promo TP-041 (89%)</span>
                            <span class="amt">\u20AC3,780</span>
                          </div>
                          <div class="already-item">
                            <span class="check-dot">${r.check}</span>
                            <span>Evidence pack assembled \xB7 5 docs linked</span>
                          </div>
                          <div class="already-item">
                            <span class="check-dot">${r.check}</span>
                            <span>GL entry drafted \xB7 ready on approval</span>
                          </div>
                        </div>
                      </div>
                      <div class="case-col">
                        <div class="c-label">Why I stopped \xB7 \u20AC450</div>
                        <div class="flag-reason">
                          <strong>No promo, PO line, or POD note</strong> I could match to this \u20AC450 portion. Could be a one-off discount agreed off-system, a missed trade allowance, or a short-pay error.
                          <div class="vero-tried">Cross-referenced: 1,247 historical cases \xB7 TP-041 rate card \xB7 ${n.retail.contact}'s last 3 emails. No matches above 62%.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="cta-bar">
                    <div>
                      <div class="cta-label">Send to your dispute queue with evidence pack attached</div>
                      <div class="cta-sub">\u20AC3,780 auto-settlement waits for your approval in the Deductions module</div>
                    </div>
                    <button class="btn" id="vb-send-to-queue">${r.arrowRight} Send to my queue</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="chat-foot">
            <div class="input-bar">
              <input type="text" placeholder="Or tell me how to resolve it..." />
              <button class="send-btn">${r.arrowRight}</button>
            </div>
          </div>
        </div>
      `},{id:"vb-05-schedule",title:"Step 5 \xB7 Schedule as a task",body:'Six items in three clicks. Let Vero run this morning <span class="grad">every morning</span>.',tooltipSide:"top",spotlight:"#vb-schedule",advanceOn:{click:"#vb-schedule"},html:`${q}
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
                      <span class="run-check">${r.check}</span>
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
                      <div class="task-row">${r.clock} <span class="k">When</span> <span class="v">Daily, 08:00 local</span></div>
                      <div class="task-row">${r.shield} <span class="k">Auto-fire at</span> <span class="v">\u2265 95% confidence per item</span></div>
                      <div class="task-row">${r.alert} <span class="k">Escalate</span> <span class="v">exceptions and flags to you</span></div>
                    </div>
                    <div class="insight-actions">
                      <button class="btn" id="vb-schedule">${r.clock} Schedule as daily task</button>
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
              <button class="send-btn">${r.arrowRight}</button>
            </div>
          </div>
        </div>
      `}]};A(He);var ge=`
:host {
  --violet-100: #ede9fe; --violet-200: #ddd6fe; --violet-300: #c4b5fd;
  --violet-400: #a78bfa; --violet-600: #7c3aed;
  --emerald-50: #ecfdf5; --emerald-100: #d1fae5; --emerald-200: #a7f3d0;
  --emerald-400: #34d399; --emerald-500: #10b981; --emerald-600: #059669;
  --emerald-700: #047857; --emerald-800: #065f46;
  --amber-100: #fef3c7; --amber-400: #fbbf24; --amber-500: #f59e0b;
  --amber-600: #d97706;
  --indigo-100: #e0e7ff; --indigo-500: #6366f1; --indigo-600: #4f46e5;
  --rose-100: #ffe4e6; --rose-500: #f43f5e; --rose-600: #e11d48;
  --blue-400: #60a5fa;
  --gray-50: #f9fafb; --gray-100: #f3f4f6; --gray-200: #e5e7eb;
  --gray-300: #d1d5db; --gray-400: #9ca3af; --gray-500: #6b7280;
  --gray-600: #4b5563; --gray-700: #374151; --gray-800: #1f2937;
  --gray-900: #111827;
  --ease-out-expo: cubic-bezier(0.22, 1, 0.36, 1);

  display: block;
  font-family: Geist, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #fff;
}
* { box-sizing: border-box; margin: 0; padding: 0; }

/* Scale-to-fit wrapper: the 920x500 scene scales down uniformly to whatever
   width its container gives it (e.g. the narrower right column of the split
   hero) so nothing is clipped mid-card. Longer DE strings ride along untouched. */
.canvas-fit {
  position: relative; width: 100%; max-width: 920px; margin: 0 auto;
  overflow: hidden;
}
.canvas-wrap {
  position: relative; width: 920px; height: 500px;
  transform-origin: top left;
}

.card {
  position: absolute; background: #fff; border-radius: 12px;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -4px rgba(0,0,0,.1);
  border: 1px solid var(--gray-100);
  opacity: 0; transform: scale(0.85);
  transition: opacity 0.6s var(--ease-out-expo), transform 0.6s var(--ease-out-expo), border-color 0.4s ease, box-shadow 0.4s ease;
  will-change: transform, opacity;
}
.card.visible { opacity: 1; transform: scale(1); }
.card.done { border-color: var(--emerald-200); box-shadow: 0 0 0 2px var(--emerald-100), 0 10px 15px -3px rgba(0,0,0,.1); }
.card-pad { padding: 12px; }

.card-head { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
.card-head-between { display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; }
.card-head-left { display: flex; align-items: center; gap: 8px; }
.icon-box { width: 28px; height: 28px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.icon-box-sm { width: 24px; height: 24px; border-radius: 6px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.card-title { font-size: 11px; font-weight: 700; color: var(--gray-900); }
.card-sub { font-size: 9px; color: var(--gray-400); }
.card-foot { font-size: 9px; }

.bg-emerald-100 { background: var(--emerald-100); }
.bg-rose-100 { background: var(--rose-100); }
.bg-amber-100 { background: var(--amber-100); }
.bg-indigo-100 { background: var(--indigo-100); }
.bg-violet-100 { background: var(--violet-100); }

.anim-check { transition: opacity 0.5s ease, transform 0.5s ease; opacity: 0; transform: scale(0.5); will-change: transform, opacity; }
.anim-check.visible { opacity: 1; transform: scale(1); }
.anim-check-circle { width: 20px; height: 20px; border-radius: 50%; background: var(--emerald-500); display: flex; align-items: center; justify-content: center; }
.anim-check-path { stroke-dasharray: 12; stroke-dashoffset: 12; transition: stroke-dashoffset 0.4s ease 0.2s; }
.anim-check.visible .anim-check-path { stroke-dashoffset: 0; }

.svg-connections { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0; }

.vero-hub {
  position: absolute; z-index: 5;
  left: 375px; top: 190px;
  opacity: 0; transform: scale(0.7);
  transition: opacity 0.7s var(--ease-out-expo), transform 0.7s var(--ease-out-expo);
  will-change: transform, opacity;
}
.vero-hub.visible { opacity: 1; transform: scale(1); }
.vero-hub-card {
  position: relative; background: #fff; border-radius: 16px;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,.25);
  border: 2px solid var(--violet-200);
  padding: 16px; width: 150px; text-align: center;
  transition: border-color 0.5s ease, box-shadow 0.5s ease;
}
.vero-hub-card.active { border-color: var(--violet-400); box-shadow: 0 0 0 4px rgba(167,139,250,0.25), 0 25px 50px -12px rgba(0,0,0,.25); }
.vero-hub-label { font-size: 14px; font-weight: 700; color: var(--gray-900); }
.vero-hub-status { font-size: 10px; font-weight: 500; transition: color 0.3s; }

.ping-ring {
  position: absolute; border-radius: 16px; border: 2px solid rgba(167,139,250,0.3);
  inset: -12px; display: none;
  animation: ping-ring 2s cubic-bezier(0,0,0.2,1) infinite;
}
.ping-ring-outer {
  position: absolute; border-radius: 24px; border: 1px solid rgba(167,139,250,0.15);
  inset: -24px; display: none;
  animation: ping-ring 3s cubic-bezier(0,0,0.2,1) infinite;
}
.vero-hub.pulsing .ping-ring,
.vero-hub.pulsing .ping-ring-outer { display: block; }
@keyframes ping-ring { 0% { transform: scale(1); opacity: 1; } 75%, 100% { transform: scale(1.15); opacity: 0; } }

.vero-avatar {
  border-radius: 50%; background: var(--gray-900);
  display: flex; align-items: center; justify-content: center;
  overflow: hidden; user-select: none; flex-shrink: 0;
}
.vero-avatar-text {
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold; line-height: 1;
  display: flex; justify-content: space-between;
  width: 3ch; margin-top: 0.05em;
  transition: color 0.3s ease;
}
.vero-avatar-text span { width: 1ch; text-align: center; display: inline-block; }

.inv-row {
  display: flex; align-items: center; justify-content: space-between;
  padding: 4px 8px; border-radius: 6px;
  background: var(--gray-50); font-size: 9px;
  transition: background 0.3s ease;
}
.inv-row.done { background: var(--emerald-50); }
.inv-row-left { color: var(--gray-600); }
.inv-row-right { display: flex; align-items: center; gap: 6px; }
.inv-amt { font-size: 9px; font-weight: 700; color: var(--gray-900); }
.inv-badge {
  font-size: 8px; font-weight: 600; padding: 2px 4px; border-radius: 4px;
  background: var(--gray-100); color: var(--gray-400);
  transition: background 0.3s ease, color 0.3s ease;
}
.inv-badge.done { background: var(--emerald-200); color: var(--emerald-800); }
.cleared-text { font-size: 8px; font-weight: 600; text-align: center; color: var(--emerald-600); opacity: 0; transition: opacity 0.3s; }
.cleared-text.visible { opacity: 1; }

/* Waveform \u2014 composited via transform: scaleY instead of height transition */
.waveform { display: flex; align-items: flex-end; gap: 2px; height: 22px; }
.waveform-bar {
  width: 3px; border-radius: 9999px; background: var(--gray-200);
  height: 22px; /* fixed max height */
  transform: scaleY(0.14); transform-origin: bottom;
  transition: transform 0.4s ease, background 0.4s ease;
  will-change: transform;
}
.waveform-bar.active { background: var(--violet-400); }

.sentiment-row { display: flex; align-items: center; justify-content: space-between; }
.sentiment-left { display: flex; align-items: center; gap: 6px; }
.sentiment-badge { font-size: 9px; font-weight: 600; padding: 2px 6px; border-radius: 9999px; background: var(--emerald-100); color: var(--emerald-700); }
.sentiment-time { font-size: 9px; color: var(--gray-400); }
.ptp-label { font-size: 9px; font-weight: 700; color: #6d28d9; }
.call-detail { font-size: 8px; color: var(--gray-500); margin-top: 4px; opacity: 0; transition: opacity 0.3s; }
.call-detail.visible { opacity: 1; }

.evidence-row { display: flex; align-items: center; gap: 6px; font-size: 9px; color: var(--gray-600); }
.evidence-dot { width: 4px; height: 4px; border-radius: 50%; flex-shrink: 0; }
.evidence-dash { flex: 1; border-bottom: 1px dashed var(--gray-200); }
.evidence-check { transition: color 0.3s ease; }
.evidence-check.done { color: var(--emerald-500); }
.evidence-check.pending { color: var(--gray-200); }

.verdict-row { display: flex; align-items: center; gap: 8px; font-size: 9px; }
.verdict-track { flex: 1; height: 12px; background: var(--gray-100); border-radius: 9999px; overflow: hidden; }
.verdict-fill { height: 100%; border-radius: 9999px; background: var(--gray-200); width: 0; transition: width 0.7s ease 0.5s, background 0.7s ease 0.5s; }
.verdict-fill.done { background: var(--amber-400); width: 89%; }
.verdict-valid { color: var(--amber-600); font-weight: 600; }
.verdict-question { color: var(--gray-400); }

.forecast-bottom { display: flex; align-items: center; justify-content: space-between; font-size: 9px; }
.forecast-q2-label { color: var(--gray-400); }
.forecast-q2-val { font-weight: 700; color: var(--gray-900); }
.forecast-uplift { display: flex; align-items: center; gap: 2px; font-weight: 600; opacity: 0; transition: opacity 0.5s ease, color 0.5s ease; color: var(--gray-300); }
.forecast-uplift.visible { opacity: 1; color: var(--emerald-600); }
.forecast-ptp-note { font-size: 8px; color: var(--indigo-500); font-weight: 400; margin-left: 4px; }

.chat-overlay {
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; z-index: 30;
  opacity: 0; pointer-events: none; transition: opacity 0.7s ease;
  will-change: opacity;
}
.chat-overlay.visible { opacity: 1; pointer-events: auto; }
.chat-wrap { width: 500px; max-width: 96%; }
.chat-human {
  display: flex; align-items: flex-end; justify-content: flex-end; gap: 10px; margin-bottom: 16px;
  opacity: 0; transform: translateY(16px); transition: opacity 0.5s ease, transform 0.5s ease;
  will-change: transform, opacity;
}
.chat-human.visible { opacity: 1; transform: translateY(0); }
.chat-human.faded { opacity: 0.6; transform: translateY(0); }
.human-bubble {
  background: var(--violet-600); color: #fff; border-radius: 16px 16px 4px 16px;
  padding: 12px 20px; font-size: 14px; max-width: 82%; line-height: 1.5;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,.1);
}
.human-avatar { width: 32px; height: 32px; border-radius: 50%; object-fit: cover; box-shadow: 0 4px 6px -1px rgba(0,0,0,.1); flex-shrink: 0; }

.chat-vero-thinking {
  display: flex; align-items: flex-start; gap: 10px;
  opacity: 0; transform: translateY(16px); transition: opacity 0.5s ease, transform 0.5s ease;
  will-change: transform, opacity;
}
.chat-vero-thinking.visible { opacity: 1; transform: translateY(0); }
.thinking-bubble {
  background: #fff; border-radius: 16px 16px 16px 4px;
  padding: 12px 20px; font-size: 14px; color: var(--gray-600);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,.1); border: 1px solid var(--gray-100);
}
.thinking-dots { display: flex; align-items: center; gap: 6px; }
.thinking-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--violet-400); animation: pulse-dot 1.5s ease infinite; }
.thinking-dot:nth-child(2) { animation-delay: 0.2s; }
.thinking-dot:nth-child(3) { animation-delay: 0.4s; }
.thinking-label { color: var(--gray-400); margin-left: 4px; font-size: 12px; }
@keyframes pulse-dot { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }

.chat-vero-summary {
  display: flex; align-items: flex-start; gap: 10px;
  opacity: 0; transform: translateY(16px); transition: opacity 0.7s ease, transform 0.7s ease;
  will-change: transform, opacity;
}
.chat-vero-summary.visible { opacity: 1; transform: translateY(0); }
.summary-bubble {
  background: #fff; border-radius: 16px 16px 16px 4px;
  padding: 12px 20px 14px; font-size: 14px; color: var(--gray-700); line-height: 1.5;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,.1); border: 1px solid var(--gray-100);
}
.summary-title { font-weight: 600; color: var(--gray-900); margin-bottom: 8px; }
.summary-items { display: flex; flex-direction: column; gap: 4px; }
.summary-item { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--gray-600); }
.summary-check { width: 12px; height: 12px; flex-shrink: 0; }
.summary-footer { font-size: 12px; color: var(--violet-600); font-weight: 500; padding-top: 8px; margin-top: 8px; border-top: 1px solid var(--gray-100); }

.checklist-overlay {
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; z-index: 30;
  opacity: 0; pointer-events: none; transition: opacity 0.7s ease;
}
.checklist-overlay.visible { opacity: 1; pointer-events: auto; }
.checklist-card {
  background: #fff; border-radius: 16px;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,.25);
  border: 1px solid var(--gray-200); padding: 20px; width: 360px; max-width: 94%;
}
.checklist-header { display: flex; align-items: center; gap: 10px; margin-bottom: 16px; }
.checklist-title { font-size: 14px; font-weight: 700; color: var(--gray-900); }
.checklist-sub { font-size: 10px; color: var(--gray-400); }
.checklist-items { display: flex; flex-direction: column; gap: 10px; }
.checklist-item { display: flex; align-items: flex-start; gap: 10px; }
.check-box { width: 20px; height: 20px; border-radius: 6px; border: 2px solid var(--gray-200); margin-top: 2px; flex-shrink: 0; transition: background 0.3s ease, border-color 0.3s ease; }
.check-box.checked { border: none; background: var(--emerald-500); display: flex; align-items: center; justify-content: center; }
.check-label { font-size: 12px; font-weight: 500; color: var(--gray-900); transition: color 0.3s; }
.check-label.checked { color: var(--gray-400); text-decoration: line-through; }
.check-sub { font-size: 10px; color: var(--gray-400); transition: color 0.3s; }
.check-sub.checked { color: var(--emerald-500); }
.checklist-footer { margin-top: 16px; padding-top: 12px; border-top: 1px solid var(--gray-100); display: flex; justify-content: space-between; opacity: 0; transition: opacity 0.5s; }
.checklist-footer.visible { opacity: 1; }
.checklist-footer-left { font-size: 10px; color: var(--gray-400); }
.checklist-footer-right { font-size: 10px; font-weight: 600; color: var(--emerald-600); }

.tagline-overlay {
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; z-index: 30;
  opacity: 0; pointer-events: none; transition: opacity 1s ease;
}
.tagline-overlay.visible { opacity: 1; }
.tagline-main { font-size: 48px; font-weight: 700; color: #fff; margin-bottom: 12px; letter-spacing: -0.02em; }
.tagline-sub { font-size: 18px; color: var(--violet-300); font-weight: 500; }

.progress-wrap { margin-top: 24px; max-width: 700px; margin-left: auto; margin-right: auto; }
.progress-track { height: 4px; background: rgba(255,255,255,0.1); border-radius: 9999px; overflow: hidden; margin-bottom: 8px; }
.progress-fill { height: 100%; border-radius: 9999px; background: linear-gradient(90deg, #8b5cf6, #10b981); width: 0%; transition: width 0.7s ease-out; }
.progress-steps { display: flex; justify-content: space-between; padding: 0 4px; }
.progress-step { display: flex; align-items: center; gap: 4px; }
.progress-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--gray-600); transition: background 0.3s; }
.progress-dot.active-v { background: var(--violet-400); }
.progress-dot.active-e { background: var(--emerald-400); }
.progress-dot.active-b { background: var(--blue-400); }
.progress-label { font-size: 8px; font-weight: 500; color: var(--gray-600); transition: color 0.3s; }
.progress-label.active { color: var(--gray-300); }

.canvas-layer {
  position: absolute; inset: 0;
  opacity: 0; pointer-events: none; transition: opacity 0.7s ease;
}
.canvas-layer.visible { opacity: 1; pointer-events: auto; }

@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}

/* Narrow viewports: scale the fixed 920\xD7500 canvas proportionally.
   The canvas uses absolute-positioned children with px coords, so we
   can't flex-resize \u2014 but transform: scale is cheap and composited. */
@media (max-width: 940px) {
  .canvas-wrap {
    transform: scale(calc((100vw - 40px) / 920));
    transform-origin: top center;
    margin-bottom: calc(500px * (((100vw - 40px) / 920) - 1));
  }
}
`;var Ue=L(),he={en:{humanMsg:"Run the morning queue. Match yesterday's payments, chase overdue accounts, check deductions, and update the Q2 forecast.",thinkingLabel:"Picking up 4 tasks...",summaryTitle:"Morning queue complete:",sum0:"3 payments matched and cleared, &euro;890K total",sum1:"Called Lars Olsen at Northwind, PTP &euro;179K by 25 Apr",sum2:"Deduction &euro;3,780 valid (trade promo), &euro;450 needs your call",sum3:"Q2 forecast updated to &euro;14.2M, up 6% from the new PTP",summaryFooter:"3 resolved &middot; 1 needs your review &middot; forecast looking strong",in0Title:"3 payments received",in0Sub:"&euro;890K total &middot; overnight",in0Foot:"Deutsche Bank &middot; MT940 statement",in1Title:"INV-0019 overdue",in1Sub:"90+ days &middot; &euro;179K",in1Foot:"Lars Olsen &middot; no response 12d",in2Title:"Short-pay flagged",in2Sub:"-&euro;4,230 &middot; Northwind",in2Foot:"Suspected trade promo",in3Title:"Forecast stale",in3Sub:"Q2 outlook &middot; 3 days old",in3Foot:"New data available",statusAnalyzing:"Analyzing...",statusRunning:"Running 4 workflows",out0Title:"Matched + cleared",clearedText:"&euro;890K cleared &middot; 3 JEs posted",out1Title:"AI Voice Call",sentiment:"Positive",callTime:"3m 42s",ptpLabel:"&euro;179K PTP",callDetail:"Lars Olsen &middot; confirmed 25 Apr",out2Title:"Investigated",ev0:"Invoice #8842",ev1:"Trade promo TP-041",ev2:"POD signed",verdictValid:"&euro;3,780",verdictQ:"&euro;450?",out3Title:"Forecast updated",q2Label:"Q2 ",q2Val:"&euro;14.2M",uplift:"+6%",ptpNote:"PTP factored",checklistTitle:"Morning Queue",checklistSub:"4 workflows running",todo0:"Match 3 payments to open invoices",todo1:"Call Lars Olsen re: INV-0019",todo2:"Investigate deduction -&euro;4,230",todo3:"Refresh Q2 cash forecast",todoProcessing:"Processing...",footerLeft:"Done in 14s",footerRight:"3 resolved &middot; 1 for review",steps:["Ask","Ingest","Analyze","Execute","Complete","Review","Report"],taglines:[{main:"Your AR, on autopilot.",sub:"From chaos to clarity in seconds."},{main:"One agent. Every workflow.",sub:"Collections, payments, deductions, forecasts."},{main:"You ask. Vero delivers.",sub:"The AI finance agent that gets things done."}],todoSubs:["\u20AC890K cleared, 3 JEs posted","PTP \u20AC179K confirmed for 25 Apr","\u20AC3,780 valid trade promo, \u20AC450 to review","\u20AC14.2M projected, +6% from new PTP"]},de:{humanMsg:"Starte die Morgen-Queue. Ordne die gestrigen Zahlungen zu, verfolge \xFCberf\xE4llige Konten, pr\xFCfe Abz\xFCge und aktualisiere die Q2-Prognose.",thinkingLabel:"4 Aufgaben werden \xFCbernommen...",summaryTitle:"Morgen-Queue abgeschlossen:",sum0:"3 Zahlungen zugeordnet und ausgeglichen, &euro;890K gesamt",sum1:"Lars Olsen bei Northwind angerufen, Zahlungszusage &euro;179K bis 25. Apr",sum2:"Abzug &euro;3,780 berechtigt (Trade-Promo), &euro;450 braucht Ihre Entscheidung",sum3:"Q2-Prognose auf &euro;14.2M aktualisiert, +6 % durch die neue Zahlungszusage",summaryFooter:"3 erledigt &middot; 1 zur Pr\xFCfung &middot; Prognose sieht stark aus",in0Title:"3 Zahlungseing\xE4nge",in0Sub:"&euro;890K gesamt &middot; \xFCber Nacht",in0Foot:"Deutsche Bank &middot; MT940-Auszug",in1Title:"INV-0019 \xFCberf\xE4llig",in1Sub:"90+ Tage &middot; &euro;179K",in1Foot:"Lars Olsen &middot; 12 T ohne Antwort",in2Title:"K\xFCrzung markiert",in2Sub:"-&euro;4,230 &middot; Northwind",in2Foot:"Vermutlich Trade-Promo",in3Title:"Prognose veraltet",in3Sub:"Q2-Ausblick &middot; 3 Tage alt",in3Foot:"Neue Daten verf\xFCgbar",statusAnalyzing:"Analysiere...",statusRunning:"4 Workflows aktiv",out0Title:"Zugeordnet + gebucht",clearedText:"&euro;890K ausgeglichen &middot; 3 Buchungen",out1Title:"KI-Sprachanruf",sentiment:"Positiv",callTime:"3:42 Min.",ptpLabel:"&euro;179K PTP",callDetail:"Lars Olsen &middot; best\xE4tigt 25. Apr",out2Title:"Untersucht",ev0:"Rechnung #8842",ev1:"Trade-Promo TP-041",ev2:"Liefernachweis signiert",verdictValid:"&euro;3,780",verdictQ:"&euro;450?",out3Title:"Prognose aktualisiert",q2Label:"Q2 ",q2Val:"&euro;14.2M",uplift:"+6%",ptpNote:"PTP einbezogen",checklistTitle:"Morgen-Queue",checklistSub:"4 Workflows aktiv",todo0:"3 Zahlungen offenen Rechnungen zuordnen",todo1:"Lars Olsen anrufen zu INV-0019",todo2:"Abzug -&euro;4,230 untersuchen",todo3:"Q2-Cashflow-Prognose aktualisieren",todoProcessing:"Wird verarbeitet...",footerLeft:"Fertig in 14 s",footerRight:"3 erledigt &middot; 1 zur Pr\xFCfung",steps:["Fragen","Erfassen","Analysieren","Ausf\xFChren","Fertig","Pr\xFCfen","Bericht"],taglines:[{main:"Ihre Debitoren, auf Autopilot.",sub:"Vom Chaos zur Klarheit in Sekunden."},{main:"Ein Agent. Jeder Workflow.",sub:"Collections, Zahlungen, Abz\xFCge, Prognosen."},{main:"Sie fragen. Vero liefert.",sub:"Der KI-Finanzagent, der Dinge erledigt."}],todoSubs:["\u20AC890K ausgeglichen, 3 Buchungen","Zahlungszusage \u20AC179K best\xE4tigt f\xFCr 25. Apr","\u20AC3,780 berechtigter Trade-Promo, \u20AC450 zu pr\xFCfen","\u20AC14.2M prognostiziert, +6 % durch neue Zahlungszusage"]}},d=Ue?he.de:he.en,ue=d.taglines,Ge=d.todoSubs,Ye=d.steps,Ze=[3,7,5,9,4,8,6,10,3,7,5,8,4,6,9,5,7,3],_=28,ve=[{x1:195+_,y1:55,x2:370,y2:215},{x1:185+_,y1:170,x2:370,y2:235},{x1:190+_,y1:305,x2:370,y2:260},{x1:185+_,y1:420,x2:370,y2:280}],be=[{x1:530,y1:215,x2:660,y2:50},{x1:530,y1:235,x2:660,y2:165},{x1:530,y1:260,x2:660,y2:300},{x1:530,y1:280,x2:660,y2:405}],fe={x1:780,y1:225,x2:730,y2:400},Qe=[{p:0,d:0},{p:1,d:2200},{p:2,d:4e3},{p:3,d:5800},{p:4,d:7800},{p:5,d:9800},{p:6,d:13e3},{p:7,d:16500},{p:-1,d:2e4}],Je=`
<div class="canvas-fit" part="fit">
<div class="canvas-wrap" part="canvas">
  <div id="chat-overlay" class="chat-overlay">
    <div class="chat-wrap">
      <div id="chat-human" class="chat-human">
        <div class="human-bubble">${d.humanMsg}</div>
        <img src="https://cdn.prod.website-files.com/69de2e314051c77c08e02468/69de2e314051c77c08e0248f_avatar-01.webp" alt="User" class="human-avatar" width="32" height="32" loading="lazy">
      </div>
      <div id="chat-thinking" class="chat-vero-thinking">
        <div id="vero-avatar-chat-thinking" class="vero-avatar" style="width:32px;height:32px;">
          <div class="vero-avatar-text" style="font-size:13.4px;color:#6EE7B7;"><span>0</span><span>1</span></div>
        </div>
        <div class="thinking-bubble">
          <div class="thinking-dots">
            <div class="thinking-dot"></div>
            <div class="thinking-dot"></div>
            <div class="thinking-dot"></div>
            <span class="thinking-label">${d.thinkingLabel}</span>
          </div>
        </div>
      </div>
      <div id="chat-summary" class="chat-vero-summary">
        <div id="vero-avatar-chat-summary" class="vero-avatar" style="width:32px;height:32px;">
          <div class="vero-avatar-text" style="font-size:13.4px;color:#10B981;"><span>^</span><span>^</span></div>
        </div>
        <div class="summary-bubble">
          <div class="summary-title">${d.summaryTitle}</div>
          <div class="summary-items">
            <div class="summary-item">
              <svg class="summary-check" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              ${d.sum0}
            </div>
            <div class="summary-item">
              <svg class="summary-check" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              ${d.sum1}
            </div>
            <div class="summary-item">
              <svg class="summary-check" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              ${d.sum2}
            </div>
            <div class="summary-item">
              <svg class="summary-check" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              ${d.sum3}
            </div>
          </div>
          <div class="summary-footer">${d.summaryFooter}</div>
        </div>
      </div>
    </div>
  </div>

  <div id="canvas-layer" class="canvas-layer">
    <svg class="svg-connections">
      <path id="conn-in-0" fill="none" stroke="#d8b4fe" stroke-width="1.5" opacity="0.6" />
      <path id="conn-in-1" fill="none" stroke="#c4b5fd" stroke-width="1.5" opacity="0.6" />
      <path id="conn-in-2" fill="none" stroke="#d8b4fe" stroke-width="1.5" opacity="0.6" />
      <path id="conn-in-3" fill="none" stroke="#c4b5fd" stroke-width="1.5" opacity="0.6" />
      <path id="conn-out-0" fill="none" stroke="#86efac" stroke-width="1.5" opacity="0.6" />
      <path id="conn-out-1" fill="none" stroke="#c4b5fd" stroke-width="1.5" opacity="0.6" />
      <path id="conn-out-2" fill="none" stroke="#fcd34d" stroke-width="1.5" opacity="0.6" />
      <path id="conn-out-3" fill="none" stroke="#818cf8" stroke-width="1.5" opacity="0.6" />
      <path id="conn-cross" fill="none" stroke="#818cf8" stroke-width="1.5" opacity="0.6" />
    </svg>

    <div id="input-0" class="card card-pad" style="left:${5+_}px;top:12px;width:185px;">
      <div class="card-head">
        <div class="icon-box bg-emerald-100">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M2 10h20"/></svg>
        </div>
        <div><div class="card-title">${d.in0Title}</div><div class="card-sub">${d.in0Sub}</div></div>
      </div>
      <div class="card-foot" style="color:var(--gray-500);">${d.in0Foot}</div>
    </div>
    <div id="input-1" class="card card-pad" style="left:${0+_}px;top:130px;width:180px;transition-delay:0.12s;">
      <div class="card-head">
        <div class="icon-box bg-rose-100">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e11d48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
        </div>
        <div><div class="card-title">${d.in1Title}</div><div class="card-sub">${d.in1Sub}</div></div>
      </div>
      <div class="card-foot" style="color:var(--rose-500);font-weight:500;">${d.in1Foot}</div>
    </div>
    <div id="input-2" class="card card-pad" style="left:${10+_}px;top:265px;width:180px;transition-delay:0.24s;">
      <div class="card-head">
        <div class="icon-box bg-amber-100">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        </div>
        <div><div class="card-title">${d.in2Title}</div><div class="card-sub">${d.in2Sub}</div></div>
      </div>
      <div class="card-foot" style="color:var(--amber-600);font-weight:500;">${d.in2Foot}</div>
    </div>
    <div id="input-3" class="card card-pad" style="left:${5+_}px;top:385px;width:175px;transition-delay:0.36s;">
      <div class="card-head">
        <div class="icon-box bg-indigo-100">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
        </div>
        <div><div class="card-title">${d.in3Title}</div><div class="card-sub">${d.in3Sub}</div></div>
      </div>
      <div class="card-foot" style="color:var(--indigo-500);font-weight:500;">${d.in3Foot}</div>
    </div>

    <div id="vero-hub" class="vero-hub">
      <div class="ping-ring"></div>
      <div class="ping-ring-outer"></div>
      <div id="vero-hub-card" class="vero-hub-card">
        <div style="display:flex;justify-content:center;margin-bottom:6px;">
          <div id="vero-avatar-hub" class="vero-avatar" style="width:44px;height:44px;">
            <div class="vero-avatar-text" style="font-size:18.5px;color:#10B981;"><span>0</span><span>0</span></div>
          </div>
        </div>
        <div class="vero-hub-label">Vero</div>
        <div id="vero-hub-status" class="vero-hub-status" style="color:var(--gray-400);">${d.statusAnalyzing}</div>
      </div>
    </div>

    <div id="output-0" class="card card-pad" style="left:660px;top:5px;width:210px;">
      <div class="card-head-between">
        <div class="card-head-left">
          <div class="icon-box-sm bg-emerald-100">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M2 10h20"/></svg>
          </div>
          <div class="card-title">${d.out0Title}</div>
        </div>
        <div id="check-0" class="anim-check">
          <div class="anim-check-circle"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path class="anim-check-path" d="M2.5 6L5 8.5L9.5 3.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
        <div id="inv-0" class="inv-row"><span class="inv-row-left">INV-0020</span><div class="inv-row-right"><span class="inv-amt">&euro;360K</span><span id="badge-0" class="inv-badge">99%</span></div></div>
        <div id="inv-1" class="inv-row"><span class="inv-row-left">INV-0021</span><div class="inv-row-right"><span class="inv-amt">&euro;290K</span><span id="badge-1" class="inv-badge">97%</span></div></div>
        <div id="inv-2" class="inv-row"><span class="inv-row-left">INV-0022</span><div class="inv-row-right"><span class="inv-amt">&euro;240K</span><span id="badge-2" class="inv-badge">95%</span></div></div>
      </div>
      <div id="cleared-text" class="cleared-text">${d.clearedText}</div>
    </div>

    <div id="output-1" class="card card-pad" style="left:665px;top:135px;width:210px;transition-delay:0.12s;">
      <div class="card-head-between">
        <div class="card-head-left">
          <div class="icon-box-sm bg-violet-100">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <div class="card-title">${d.out1Title}</div>
        </div>
        <div id="check-1" class="anim-check">
          <div class="anim-check-circle"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path class="anim-check-path" d="M2.5 6L5 8.5L9.5 3.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        </div>
      </div>
      <div id="waveform" class="waveform" style="margin-bottom:8px;padding:0 4px;"></div>
      <div class="sentiment-row">
        <div class="sentiment-left">
          <span class="sentiment-badge">${d.sentiment}</span>
          <span class="sentiment-time">${d.callTime}</span>
        </div>
        <span class="ptp-label">${d.ptpLabel}</span>
      </div>
      <div id="call-detail" class="call-detail">${d.callDetail}</div>
    </div>

    <div id="output-2" class="card card-pad" style="left:660px;top:272px;width:210px;transition-delay:0.24s;">
      <div class="card-head-between">
        <div class="card-head-left">
          <div class="icon-box-sm bg-amber-100">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/></svg>
          </div>
          <div class="card-title">${d.out2Title}</div>
        </div>
        <div id="check-2" class="anim-check">
          <div class="anim-check-circle"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path class="anim-check-path" d="M2.5 6L5 8.5L9.5 3.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:2px;margin-bottom:8px;">
        <div class="evidence-row">
          <div class="evidence-dot" style="background:var(--blue-400);"></div>
          <span>${d.ev0}</span>
          <div class="evidence-dash"></div>
          <svg id="ev-check-0" class="evidence-check pending" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <div class="evidence-row">
          <div class="evidence-dot" style="background:var(--violet-400);"></div>
          <span>${d.ev1}</span>
          <div class="evidence-dash"></div>
          <svg id="ev-check-1" class="evidence-check pending" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <div class="evidence-row">
          <div class="evidence-dot" style="background:var(--gray-400);"></div>
          <span>${d.ev2}</span>
          <svg id="ev-check-2" class="evidence-check pending" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
      </div>
      <div class="verdict-row">
        <div class="verdict-track"><div id="verdict-fill" class="verdict-fill"></div></div>
        <span class="verdict-valid">${d.verdictValid}</span>
        <span class="verdict-question">${d.verdictQ}</span>
      </div>
    </div>

    <div id="output-3" class="card card-pad" style="left:660px;top:390px;width:210px;transition-delay:0.36s;">
      <div class="card-head-between">
        <div class="card-head-left">
          <div class="icon-box-sm bg-indigo-100">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
          </div>
          <div class="card-title">${d.out3Title}</div>
        </div>
        <div id="check-3" class="anim-check">
          <div class="anim-check-circle"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path class="anim-check-path" d="M2.5 6L5 8.5L9.5 3.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        </div>
      </div>
      <div style="margin-bottom:6px;">
        <svg id="mini-chart" width="130" height="40" viewBox="0 0 130 40"></svg>
      </div>
      <div class="forecast-bottom">
        <div><span class="forecast-q2-label">${d.q2Label}</span><span class="forecast-q2-val">${d.q2Val}</span></div>
        <div id="forecast-uplift" class="forecast-uplift">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          ${d.uplift}
          <span class="forecast-ptp-note">${d.ptpNote}</span>
        </div>
      </div>
    </div>
  </div>

  <div id="checklist-overlay" class="checklist-overlay">
    <div class="checklist-card">
      <div class="checklist-header">
        <div id="vero-avatar-checklist" class="vero-avatar" style="width:32px;height:32px;">
          <div class="vero-avatar-text" style="font-size:13.4px;color:#6EE7B7;"><span>0</span><span>1</span></div>
        </div>
        <div>
          <div class="checklist-title">${d.checklistTitle}</div>
          <div class="checklist-sub">${d.checklistSub}</div>
        </div>
      </div>
      <div class="checklist-items">
        <div class="checklist-item" id="todo-0"><div class="check-box" id="todo-box-0"></div><div style="flex:1;"><div class="check-label" id="todo-label-0">${d.todo0}</div><div class="check-sub" id="todo-sub-0">${d.todoProcessing}</div></div></div>
        <div class="checklist-item" id="todo-1"><div class="check-box" id="todo-box-1"></div><div style="flex:1;"><div class="check-label" id="todo-label-1">${d.todo1}</div><div class="check-sub" id="todo-sub-1">${d.todoProcessing}</div></div></div>
        <div class="checklist-item" id="todo-2"><div class="check-box" id="todo-box-2"></div><div style="flex:1;"><div class="check-label" id="todo-label-2">${d.todo2}</div><div class="check-sub" id="todo-sub-2">${d.todoProcessing}</div></div></div>
        <div class="checklist-item" id="todo-3"><div class="check-box" id="todo-box-3"></div><div style="flex:1;"><div class="check-label" id="todo-label-3">${d.todo3}</div><div class="check-sub" id="todo-sub-3">${d.todoProcessing}</div></div></div>
      </div>
      <div id="checklist-footer" class="checklist-footer">
        <span class="checklist-footer-left">${d.footerLeft}</span>
        <span class="checklist-footer-right">${d.footerRight}</span>
      </div>
    </div>
  </div>

  <div id="tagline-overlay" class="tagline-overlay">
    <div style="text-align:center;" id="tagline-content"></div>
  </div>
</div>
</div>

<div class="progress-wrap">
  <div class="progress-track"><div id="progress-fill" class="progress-fill"></div></div>
  <div class="progress-steps" id="progress-steps"></div>
</div>
`,ae=class extends HTMLElement{constructor(){super(),this._phase=-1,this._cycle=0,this._timers=[],this._avatarTimers=[],this._started=!1,this._paused=!1,this._observer=null}connectedCallback(){if(this._shadow)return;this._shadow=this.attachShadow({mode:"open"}),this._shadow.innerHTML=`<style>${ge}</style>${Je}`,this._q=t=>this._shadow.querySelector(t),this._buildStaticBits(),this._fitEls={fit:this._q(".canvas-fit"),wrap:this._q(".canvas-wrap")},this._fit(),"ResizeObserver"in window?(this._ro=new ResizeObserver(()=>this._fit()),this._ro.observe(this)):(this._onResize=()=>this._fit(),window.addEventListener("resize",this._onResize));let e=()=>{this._started||(this._started=!0,this._runCycle())},a=()=>{"requestIdleCallback"in window?window.requestIdleCallback(e,{timeout:500}):setTimeout(e,200)};"IntersectionObserver"in window?(this._observer=new IntersectionObserver(t=>{t[0].isIntersecting?(this._paused=!1,this._started||a()):this._paused=!0},{threshold:.01}),this._observer.observe(this)):a()}disconnectedCallback(){this._timers.forEach(clearTimeout),this._timers=[],this._clearAvatarTimers(),this._observer?.disconnect(),this._ro?.disconnect(),this._onResize&&window.removeEventListener("resize",this._onResize)}_fit(){let e=this._fitEls;if(!e||!e.fit||!e.wrap)return;let a=e.fit.clientWidth||920,t=Math.min(1,a/920);e.wrap.style.transform=`scale(${t})`,e.fit.style.height=500*t+"px"}_buildStaticBits(){let e=this._q("#waveform");Ze.forEach((i,c)=>{let p=document.createElement("div");p.className="waveform-bar",p.setAttribute("data-h",i),p.style.transitionDelay=c*30+"ms",e.appendChild(p)});let a=this._q("#progress-steps");Ye.forEach((i,c)=>{let p=document.createElement("div");p.className="progress-step",p.innerHTML=`<div class="progress-dot" data-step="${c}"></div><span class="progress-label" data-step="${c}">${i}</span>`,a.appendChild(p)});let t=i=>{let c=(i.x1+i.x2)/2,p=(i.x1+i.x2)/2;return`M${i.x1},${i.y1} C${c},${i.y1} ${p},${i.y2} ${i.x2},${i.y2}`},o=i=>Math.sqrt(Math.pow(i.x2-i.x1,2)+Math.pow(i.y2-i.y1,2))*1.5;this._allConns=[];for(let i=0;i<4;i++){let c=this._q(`#conn-in-${i}`),p=t(ve[i]),g=o(ve[i]);c.setAttribute("d",p),c.style.strokeDasharray=g,c.style.strokeDashoffset=g,c.style.transition=`stroke-dashoffset 0.8s cubic-bezier(0.22,1,0.36,1) ${i*.12}s`,this._allConns.push({el:c,len:g,phase:2})}for(let i=0;i<4;i++){let c=this._q(`#conn-out-${i}`),p=t(be[i]),g=o(be[i]);c.setAttribute("d",p),c.style.strokeDasharray=g,c.style.strokeDashoffset=g,c.style.transition=`stroke-dashoffset 0.8s cubic-bezier(0.22,1,0.36,1) ${i*.12}s`,this._allConns.push({el:c,len:g,phase:3})}{let i=this._q("#conn-cross"),c=t(fe),p=o(fe);i.setAttribute("d",c),i.style.strokeDasharray=p,i.style.strokeDashoffset=p,i.style.transition="stroke-dashoffset 0.8s cubic-bezier(0.22,1,0.36,1) 0.3s",this._allConns.push({el:i,len:p,phase:4})}this._drawMiniChart(!1)}_drawMiniChart(e){let a=[6,5.5,6.2,5.8,6.5,7,e?7.8:7.2],t=130,o=40,i=4,c=8.5,p=4.5,g=u=>i+u/(a.length-1)*(t-2*i),b=u=>i+(c-u)/(c-p)*(o-2*i),x=a.map((u,f)=>(f===0?"M":"L")+g(f)+","+b(u)).join(" "),v=this._q("#mini-chart"),h=`<path d="${x}" fill="none" stroke="${e?"#6366f1":"#d1d5db"}" stroke-width="2" stroke-linecap="round" style="transition:all 0.8s ease"/>`;e&&(h+=`<path d="M${g(5)},${b(7)} L${g(6)},${b(7.8)} L${g(6)},${b(7.2)} L${g(5)},${b(7)} Z" fill="#818cf8" opacity="0.2"/>`,h+=`<circle cx="${g(6)}" cy="${b(7.8)}" r="3" fill="#6366f1"/>`,h+=`<line x1="${g(5)}" y1="${b(7.2)}" x2="${g(6)}" y2="${b(7.2)}" stroke="#d1d5db" stroke-width="1" stroke-dasharray="3 2"/>`),v.innerHTML=h}_clearAvatarTimers(){this._avatarTimers.forEach(e=>{clearTimeout(e),clearInterval(e)}),this._avatarTimers=[]}_animateVeroAvatar(e,a){if(!e)return;let t=e.querySelector(".vero-avatar-text");if(!t)return;let o=t.querySelectorAll("span");if(a==="idle"){t.style.color="#10B981",o[0].textContent="0",o[1].textContent="0";let i=()=>{o[0].textContent="-",this._avatarTimers.push(setTimeout(()=>{o[0].textContent="0"},150)),this._avatarTimers.push(setTimeout(i,700+Math.random()*2e3))};this._avatarTimers.push(setTimeout(i,700+Math.random()*1e3));let c=()=>{o[1].textContent="-",this._avatarTimers.push(setTimeout(()=>{o[1].textContent="0"},150)),this._avatarTimers.push(setTimeout(c,1e3+Math.random()*2500))};this._avatarTimers.push(setTimeout(c,1e3+Math.random()*1500))}else if(a==="thinking"){t.style.color="#6EE7B7";let i=setInterval(()=>{o[0].textContent=Math.random()>.5?"1":"0",o[1].textContent=Math.random()>.5?"1":"0"},80);this._avatarTimers.push(i)}else a==="done"&&(t.style.color="#10B981",o[0].textContent="^",o[1].textContent="^")}_setPhase(e){this._phase=e,this._clearAvatarTimers();let a=e===0||e===6,t=e>=1&&e<=4,o=e===5,i=e===7;this._q("#chat-overlay").classList.toggle("visible",a);let p=this._q("#chat-human");p.className="chat-human"+(e===0?" visible":e===6?" faded":""),p.style.transitionDelay=e===0?"0.3s":"0s";let g=this._q("#chat-thinking");g.className="chat-vero-thinking"+(e===0?" visible":""),g.style.transitionDelay=e===0?"1s":"0s";let b=this._q("#chat-summary");b.className="chat-vero-summary"+(e===6?" visible":""),b.style.transitionDelay=e===6?"0.5s":"0s",e===0&&this._animateVeroAvatar(this._q("#vero-avatar-chat-thinking"),"thinking"),e===6&&this._animateVeroAvatar(this._q("#vero-avatar-chat-summary"),"done"),this._q("#canvas-layer").classList.toggle("visible",t);for(let l=0;l<4;l++)this._q("#input-"+l).classList.toggle("visible",e>=1);this._allConns.forEach(l=>{l.el.style.strokeDashoffset=e>=l.phase?"0":l.len});let x=this._q("#vero-hub");x.classList.toggle("visible",e>=2),x.classList.toggle("pulsing",e>=2&&e<=4),this._q("#vero-hub-card").classList.toggle("active",e>=3);let v=this._q("#vero-hub-status");v.textContent=e<3?d.statusAnalyzing:d.statusRunning,v.style.color=e>=3?"var(--violet-600)":"var(--gray-400)",e>=2&&this._animateVeroAvatar(this._q("#vero-avatar-hub"),e>=3?"thinking":"idle");for(let l=0;l<4;l++){let m=this._q("#output-"+l);m.classList.toggle("visible",e>=3),m.classList.toggle("done",e>=4),this._q("#check-"+l).classList.toggle("visible",e>=4)}for(let l=0;l<3;l++)this._q("#inv-"+l).classList.toggle("done",e>=4),this._q("#badge-"+l).classList.toggle("done",e>=4);this._q("#cleared-text").classList.toggle("visible",e>=4),this._q("#waveform").querySelectorAll(".waveform-bar").forEach(l=>{let m=e>=3;l.classList.toggle("active",m);let M=parseFloat(l.getAttribute("data-h")),N=m?Math.min(1,M*2.2/22):.14;l.style.transform=`scaleY(${N})`}),this._q("#call-detail").classList.toggle("visible",e>=4);for(let l=0;l<3;l++){let m=this._q("#ev-check-"+l);m.classList.toggle("done",e>=4),m.classList.toggle("pending",e<4),m.style.transitionDelay=l*150+400+"ms"}if(this._q("#verdict-fill").classList.toggle("done",e>=4),this._drawMiniChart(e>=4),this._q("#forecast-uplift").classList.toggle("visible",e>=4),this._q("#checklist-overlay").classList.toggle("visible",o),o){this._animateVeroAvatar(this._q("#vero-avatar-checklist"),"thinking"),this._resetTodos();for(let l=0;l<4;l++)(m=>{this._timers.push(setTimeout(()=>this._checkTodo(m),600+m*500))})(l)}if(this._q("#tagline-overlay").classList.toggle("visible",i),i){let l=ue[this._cycle%ue.length];this._q("#tagline-content").innerHTML=`<div class="tagline-main">${l.main}</div><div class="tagline-sub">${l.sub}</div>`}let f=Math.min(100,e/7*100);this._q("#progress-fill").style.width=f+"%",this._q("#progress-steps").querySelectorAll(".progress-dot").forEach(l=>{let m=parseInt(l.getAttribute("data-step"));l.className="progress-dot"+(e>=m?m<=1?" active-v":m<=4?" active-e":" active-b":"")}),this._q("#progress-steps").querySelectorAll(".progress-label").forEach(l=>{let m=parseInt(l.getAttribute("data-step"));l.classList.toggle("active",e>=m)})}_resetTodos(){for(let e=0;e<4;e++)this._q("#todo-box-"+e).className="check-box",this._q("#todo-box-"+e).innerHTML="",this._q("#todo-label-"+e).className="check-label",this._q("#todo-sub-"+e).className="check-sub",this._q("#todo-sub-"+e).textContent=d.todoProcessing;this._q("#checklist-footer").classList.remove("visible")}_checkTodo(e){let a=this._q("#todo-box-"+e);a.className="check-box checked",a.innerHTML='<svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>',this._q("#todo-label-"+e).classList.add("checked");let t=this._q("#todo-sub-"+e);t.classList.add("checked"),t.textContent=Ge[e],e===3&&this._q("#checklist-footer").classList.add("visible")}_runCycle(){this._timers.forEach(clearTimeout),this._timers=[],Qe.forEach(e=>{this._timers.push(setTimeout(()=>{this._paused||(e.p===-1?(this._cycle++,this._runCycle()):this._setPhase(e.p))},e.d))})}};customElements.get("transformance-hero")||customElements.define("transformance-hero",ae);var me=`
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
`;var ye={"cash-app":{eyebrow:"PRODUCT \xB7 CLEARMATCH",headline:"Cash application that matches payments to invoices, <grad>without templates.</grad>",claims:[{icon:"sparkles",text:">95% extraction accuracy out of the box"},{icon:"chart-up",text:">90% straight-through processing (STP)"},{icon:"check-circle",text:"Deploy in 4-8 weeks, not 4-8 months"}],ctaText:"See ClearMatch",href:"/solutions/cash-application",imageUrl:"https://cdn.prod.website-files.com/684931abb239b84984296d93/69df9ed7814b30f551626c60_e57293d5e53a3981daeaa229a2ec9fad_card-cash-app.avif",imageAlt:"ClearMatch cash application dashboard"},collections:{eyebrow:"PRODUCT \xB7 COLLECTPULSE",headline:"Collections agents that <grad>actually call</grad> - in 30+ languages.",claims:[{icon:"phone",text:"Autonomous AI calling agent in 30+ languages"},{icon:"chart-up",text:"Cut DSO without growing the team"},{icon:"brain",text:"Vero remembers every customer interaction"}],ctaText:"See CollectPulse",href:"/solutions/collections",imageUrl:"https://cdn.prod.website-files.com/684931abb239b84984296d93/69df9effac59f55ed2162c5c_89904a67e2dbf13e9bdb59df36357cc2_card-collections.avif",imageAlt:"CollectPulse collections dashboard"},deductions:{eyebrow:"PRODUCT \xB7 CLAIMIQ",headline:"Deductions resolution from <grad>investigation to recovery.</grad>",claims:[{icon:"sparkles",text:"AI drives investigations where rules hit a wall"},{icon:"chart-up",text:"Recovery rates >85% on autopilot"},{icon:"receipt",text:"Trade promo, chargebacks, disputes in one queue"}],ctaText:"See ClaimIQ",href:"/solutions/deductions",imageUrl:"https://cdn.prod.website-files.com/684931abb239b84984296d93/69df9f1d00e7328a348be73d_641b78d95aecfce017fced10a3f3b5e4_card-ded-dash.avif",imageAlt:"ClaimIQ deductions dashboard"},"cash-forecast":{eyebrow:"PRODUCT \xB7 CASHPULSE",headline:"Net cash forecasting from <grad>real AR + AP data,</grad> not bank-balance history.",claims:[{icon:"clock",text:"Multi-horizon: 13-week, quarterly, full-year"},{icon:"chart-up",text:"90-95% accurate with confidence ranges, not point guesses"},{icon:"wallet",text:"Real AR + AP data, not historical bank balances"}],ctaText:"See CashPulse",href:"/solutions/cash-flow-forecasting",imageUrl:"https://cdn.prod.website-files.com/684931abb239b84984296d93/69df9feacd0cbc06fa2894ef_1070a6ecf388ba7555d1f167ef194969_card-cashpulse.avif",imageAlt:"CashPulse cash flow forecast with 13-week prediction"},vero:{eyebrow:"AGENT \xB7 VERO",headline:"Vero is the AI agent <grad>that remembers everything.</grad>",claims:[{icon:"brain",text:"Customer 360: every customer detail, including ops hidden in emails + spreadsheets"},{icon:"sparkles",text:"Acts autonomously within your rules + security policies"},{icon:"layers",text:"Works across cash app, collections, deductions, forecasting"}],ctaText:"Meet Vero",href:"/solutions/vero-agent",imageUrl:"https://cdn.prod.website-files.com/684931abb239b84984296d93/69dfa29f0775fd254511fbd0_fbbe4ebdc1f2e22cbb6b2a6f0819e1cd_card-vero.avif",imageAlt:"Vero AI agent dashboard"},"dso-calc":{eyebrow:"FREE TOOL \xB7 DSO CALCULATOR",eyebrowColor:"#ff5043",headline:"See exactly how much cash <grad>your DSO is trapping.</grad>",claims:[{icon:"calculator",text:"Plug in revenue + AR, get your DSO in seconds"},{icon:"chart-up",text:"Run your numbers + scenarios to see impact live"},{icon:"dollar",text:"See trapped cash in dollars, not just days"}],ctaText:"Open the calculator",href:"/tools/dso-calculator",imageUrl:"https://cdn.prod.website-files.com/684931abb239b84984296d93/69eb8c31e3a4b8fa9eba9a77_dso-excel-preview-1.png",imageAlt:"DSO calculator preview"},"cf-template":{eyebrow:"FREE TOOL \xB7 13-WEEK CALCULATOR",eyebrowColor:"#ff5043",headline:"See your runway and tightest week, <grad>in seconds.</grad>",claims:[{icon:"clock",text:"Live runway + tightest week"},{icon:"dollar",text:'"Pay 5 days faster" what-if slider'},{icon:"globe",text:"Top-10 currencies supported"}],ctaText:"Open the calculator",href:"/tools/cash-flow-forecasting-tool",imageUrl:"https://cdn.prod.website-files.com/684931abb239b84984296d93/69ed0d37c19ca8bf38192eee_cash-forecast-excel-preview-1.png",imageAlt:"13-week cash flow forecast template preview"},demo:{eyebrow:"BOOK A CALL",headline:"30 minutes to see if <grad>Transformance fits</grad> your O2C.",claims:[{icon:"clock",text:"30 minutes with a finance ops specialist"},{icon:"sparkles",text:"Open conversation about your O2C challenges + bottlenecks"},{icon:"check-circle",text:"We walk through how we help companies like yours"}],ctaText:"Book a Call",href:"/meeting",imageUrl:"https://cdn.prod.website-files.com/684931abb239b84984296d93/68494720f0211b2372893faf_Profile%20Picture.avif",imageAlt:"Paul Hanke, Co-Founder of Transformance"}},I="https://cdn.prod.website-files.com/684931abb239b84984296d93/",xe={"cash-app":{eyebrow:"PRODUKT \xB7 CLEARMATCH",headline:"Cash Application, die Zahlungen den Rechnungen zuordnet, <grad>ganz ohne manuelle Nacharbeit.</grad>",claims:[{icon:"sparkles",text:">95 % Extraktionsgenauigkeit, standardm\xE4\xDFig"},{icon:"chart-up",text:">90 % Dunkelverarbeitung (STP)"},{icon:"check-circle",text:"Einsatzbereit in 4 bis 8 Wochen statt 4 bis 8 Monaten"}],ctaText:"ClearMatch ansehen",href:"/de/solutions/cash-application",imageUrl:I+"6a575eee8943ea0f7c4b6925_platform-cash-application-de.avif",imageAlt:"ClearMatch Cash-Application-Dashboard"},collections:{eyebrow:"PRODUKT \xB7 COLLECTPULSE",headline:"Collections-Agenten, die <grad>wirklich anrufen</grad>, in \xFCber 30 Sprachen.",claims:[{icon:"phone",text:"Autonomer KI-Telefonagent in \xFCber 30 Sprachen"},{icon:"chart-up",text:"DSO senken, ohne das Team zu vergr\xF6\xDFern"},{icon:"brain",text:"Vero merkt sich jede Kundeninteraktion"}],ctaText:"CollectPulse ansehen",href:"/de/solutions/collections",imageUrl:I+"6a575ef0afd1f079e1d378a9_collections-dashboard-de.avif",imageAlt:"CollectPulse Forderungsmanagement-Dashboard"},deductions:{eyebrow:"PRODUKT \xB7 CLAIMIQ",headline:"Abz\xFCge kl\xE4ren, von der <grad>Untersuchung bis zur R\xFCckforderung.</grad>",claims:[{icon:"sparkles",text:"KI treibt Untersuchungen voran, wo Regeln an Grenzen sto\xDFen"},{icon:"chart-up",text:"R\xFCckforderungsquoten \xFCber 85 %, vollautomatisch"},{icon:"receipt",text:"Trade-Promo, R\xFCckbelastungen, Streitf\xE4lle in einer Queue"}],ctaText:"ClaimIQ ansehen",href:"/de/solutions/deductions",imageUrl:I+"6a575ef3022891107fc48753_deductions-dashboard-de.avif",imageAlt:"ClaimIQ Abzugsmanagement-Dashboard"},"cash-forecast":{eyebrow:"PRODUKT \xB7 CASHPULSE",headline:"Netto-Cashflow-Prognose aus <grad>echten Debitoren- und Kreditorendaten,</grad> nicht aus Kontostandshistorie.",claims:[{icon:"clock",text:"Mehrere Horizonte: 13 Wochen, Quartal, Gesamtjahr"},{icon:"chart-up",text:"90 bis 95 % Genauigkeit mit Konfidenzb\xE4ndern statt Punktsch\xE4tzungen"},{icon:"wallet",text:"Echte Debitoren- und Kreditorendaten, keine historischen Kontost\xE4nde"}],ctaText:"CashPulse ansehen",href:"/de/solutions/cash-flow-forecasting",imageUrl:I+"69df9feacd0cbc06fa2894ef_1070a6ecf388ba7555d1f167ef194969_card-cashpulse.avif",imageAlt:"CashPulse Cashflow-Prognose mit 13-Wochen-Vorhersage"},vero:{eyebrow:"AGENT \xB7 VERO",headline:"Vero ist der KI-Agent, <grad>der sich alles merkt.</grad>",claims:[{icon:"brain",text:"Customer 360: jedes Kundendetail, auch Vorg\xE4nge, die in E-Mails und Tabellen verborgen sind"},{icon:"sparkles",text:"Handelt autonom im Rahmen Ihrer Regeln und Sicherheitsrichtlinien"},{icon:"layers",text:"Funktioniert \xFCber Cash Application, Collections, Abz\xFCge und Prognose hinweg"}],ctaText:"Vero kennenlernen",href:"/de/solutions/vero-agent",imageUrl:I+"69dfa29f0775fd254511fbd0_fbbe4ebdc1f2e22cbb6b2a6f0819e1cd_card-vero.avif",imageAlt:"Vero KI-Agent-Dashboard"},"dso-calc":{eyebrow:"GRATIS-TOOL \xB7 DSO-RECHNER",eyebrowColor:"#ff5043",headline:"Sehen Sie genau, wie viel Liquidit\xE4t <grad>Ihr DSO bindet.</grad>",claims:[{icon:"calculator",text:"Umsatz und Forderungen eingeben, DSO in Sekunden erhalten"},{icon:"chart-up",text:"Zahlen und Szenarien durchrechnen, Wirkung live sehen"},{icon:"dollar",text:"Gebundene Liquidit\xE4t in Euro sehen, nicht nur in Tagen"}],ctaText:"Rechner \xF6ffnen",href:"/de/tools/dso-calculator",imageUrl:I+"69eb8c31e3a4b8fa9eba9a77_dso-excel-preview-1.png",imageAlt:"Vorschau DSO-Rechner"},"cf-template":{eyebrow:"GRATIS-TOOL \xB7 13-WOCHEN-RECHNER",eyebrowColor:"#ff5043",headline:"Sehen Sie Ihre Liquidit\xE4tsreichweite und knappste Woche, <grad>in Sekunden.</grad>",claims:[{icon:"clock",text:"Live-Reichweite und knappste Woche"},{icon:"dollar",text:'Was-w\xE4re-wenn-Regler \u201E5 Tage fr\xFCher zahlen"'},{icon:"globe",text:"Top-10-W\xE4hrungen unterst\xFCtzt"}],ctaText:"Rechner \xF6ffnen",href:"/de/tools/cash-flow-forecasting-tool",imageUrl:I+"69ed0d37c19ca8bf38192eee_cash-forecast-excel-preview-1.png",imageAlt:"Vorschau 13-Wochen-Cashflow-Prognosevorlage"},demo:{eyebrow:"TERMIN BUCHEN",headline:"30 Minuten, um zu sehen, ob <grad>Transformance zu Ihrem Debitorenmanagement (O2C) passt.</grad>",claims:[{icon:"clock",text:"30 Minuten mit einem Finance-Ops-Spezialisten"},{icon:"sparkles",text:"Offenes Gespr\xE4ch \xFCber Ihre O2C-Herausforderungen und Engp\xE4sse"},{icon:"check-circle",text:"Wir zeigen, wie wir Unternehmen wie Ihres unterst\xFCtzen"}],ctaText:"Termin buchen",href:"/de/meeting",imageUrl:I+"68494720f0211b2372893faf_Profile%20Picture.avif",imageAlt:"Paul Hanke, Mitgr\xFCnder von Transformance"}};function ke(s){return L()&&xe[s]?xe[s]:ye[s]||null}function we(){return Object.keys(ye)}var Se={clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',"chart-up":'<path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/>',dollar:'<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',"check-circle":'<circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',zap:'<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',globe:'<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',layers:'<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',sparkles:'<path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"/><path d="M19 13l.75 2.25L22 16l-2.25.75L19 19l-.75-2.25L16 16l2.25-.75L19 13z"/>',calculator:'<rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="8" y2="10"/><line x1="12" y1="10" x2="12" y2="10"/><line x1="16" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="8" y2="14"/><line x1="12" y1="14" x2="12" y2="14"/><line x1="16" y1="14" x2="16" y2="14"/><line x1="8" y1="18" x2="8" y2="18"/><line x1="12" y1="18" x2="12" y2="18"/><line x1="16" y1="18" x2="16" y2="18"/>',phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>',receipt:'<path d="M16 2H8a2 2 0 0 0-2 2v18l3-2 3 2 3-2 3 2V4a2 2 0 0 0-2-2z"/><line x1="9" y1="7" x2="15" y2="7"/><line x1="9" y1="11" x2="15" y2="11"/>',wallet:'<path d="M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2"/><path d="M21 12V7H6a2 2 0 0 1 0-4h13"/>',brain:'<path d="M12 2a4 4 0 0 0-4 4v1a4 4 0 0 0 0 8v3a4 4 0 1 0 8 0v-3a4 4 0 0 0 0-8V6a4 4 0 0 0-4-4z"/>'};function Ae(s){return`<svg class="tfb__icon" viewBox="0 0 24 24">${Se[s]||Se["check-circle"]}</svg>`}function Xe(s){return String(s).replace(/<grad>([\s\S]*?)<\/grad>/gi,'<span class="tfb__grad">$1</span>')}function W(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var te=class extends HTMLElement{connectedCallback(){this._mounted||(this._mounted=!0,this._render())}static get observedAttributes(){return["data-topic","data-headline","data-cta-text","data-href","data-image-url","data-image-alt"]}attributeChangedCallback(){this._mounted&&this._render()}_render(){let e=this.dataset.topic,a=ke(e);if(!a){console.warn(`[transformance-banner] Unknown topic "${e}". Available: ${we().join(", ")}`),this.style.display="none";return}let t=this.dataset.headline||a.headline,o=this.dataset.ctaText||a.ctaText,i=this.dataset.href||a.href,c=this.dataset.imageUrl||a.imageUrl,p=this.dataset.imageAlt||a.imageAlt||`${a.eyebrow} preview`,g=a.eyebrowColor?` style="color:${W(a.eyebrowColor)}"`:"",b=(a.claims||[]).map(u=>`<li>${Ae(u.icon)}<span>${u.text}</span></li>`).join(""),x=Xe(t),v=c?`
        <div class="tfb__shot">
          <img src="${W(c)}" alt="${W(p)}" loading="lazy" decoding="async"/>
        </div>
        <div class="tfb__right">
          <ul class="tfb__claims">${b}</ul>
          <a class="tfb__cta" href="${W(i)}">${o} <span class="tfb__cta-arrow">\u2192</span></a>
        </div>`:`
        <div class="tfb__right">
          <ul class="tfb__claims">${b}</ul>
          <a class="tfb__cta" href="${W(i)}">${o} <span class="tfb__cta-arrow">\u2192</span></a>
        </div>`,h=c?"tfb__body":"tfb__body tfb__body--no-image";this.shadowRoot||this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`
      <style>${me}</style>
      <div class="tfb">
        <div class="tfb__header">
          <div class="tfb__eyebrow"${g}>${a.eyebrow}</div>
          <h3 class="tfb__headline">${x}</h3>
        </div>
        <div class="${h}">${v}</div>
      </div>
    `}};customElements.get("transformance-banner")||customElements.define("transformance-banner",te);var es=/^\s*\[tf-banner:\s*([a-z0-9-]+)\s*\]\s*$/i;function ze(s){if(!s)return;s.querySelectorAll("p").forEach(a=>{let t=(a.textContent||"").trim(),o=es.exec(t);if(!o)return;let i=o[1].toLowerCase(),c=document.createElement("transformance-banner");c.setAttribute("data-topic",i),a.replaceWith(c)})}function Te(){let s=document.querySelectorAll(".w-richtext");if(!s.length){ze(document.body);return}s.forEach(ze)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Te):Te();var $e=`
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
  width:100%;
  background:var(--tf-ink);
  color:#fff;
  text-decoration:none;
  text-align:center;
  font-size:14px;
  font-weight:500;
  padding:11px 16px;
  border-radius:8px;
  margin-bottom:10px;
  border:0;
  cursor:pointer;
  transition:background 120ms;
  font-family:inherit;
}
.cta-primary:hover{background:var(--tf-ink-soft);}
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
`;var O={"cash-forecast":{headline:"Forecast cash 90 days out at 95% accuracy. Across AR and AP.",body:"Multi-horizon models. Confidence ranges, not point estimates. FX-aware.",ctaPrimary:"Book a 15-min call",ctaPrimaryUrl:"/meeting",ctaSecondary:"Visit CashPulse \u2192",ctaSecondaryUrl:"/solutions/cash-flow-forecasting"},"cash-app":{headline:"Match 95% of payments straight-through. No templates.",body:"Vision LLMs read any remittance format. 99.7% extraction accuracy. Live in 4 to 8 weeks.",ctaPrimary:"Book a 15-min call",ctaPrimaryUrl:"/meeting",ctaSecondary:"Visit ClearMatch \u2192",ctaSecondaryUrl:"/solutions/cash-application"},collections:{headline:"Cut DSO by 8 to 15 days with autonomous AI collectors.",body:"70+ languages. 15 to 20 calls per hour per agent versus 15 to 20 per day for a human.",ctaPrimary:"Book a 15-min call",ctaPrimaryUrl:"/meeting",ctaSecondary:"Visit CollectPulse \u2192",ctaSecondaryUrl:"/solutions/collections"},deductions:{headline:"Resolve deductions 6\xD7 faster at 97% accuracy.",body:"Six-category auto-classification. Graph-based investigation. Audit trail built in.",ctaPrimary:"Book a 15-min call",ctaPrimaryUrl:"/meeting",ctaSecondary:"Visit ClaimIQ \u2192",ctaSecondaryUrl:"/solutions/deductions"},vero:{headline:"One AI agent across cash app, deductions, collections, and forecasting.",body:"Persistent memory. Learns your ops over time. Deploys inside your cloud.",ctaPrimary:"Book a 15-min call",ctaPrimaryUrl:"/meeting",ctaSecondary:"Meet Vero \u2192",ctaSecondaryUrl:"/solutions/vero-agent"},o2c:{headline:"Run the full O2C cycle on one AI-native platform.",body:"ClearMatch, ClaimIQ, CollectPulse, CashPulse. Unified by Vero. Deploys in 4 to 8 weeks.",ctaPrimary:"Book a 15-min call",ctaPrimaryUrl:"/meeting",ctaSecondary:"See Solutions \u2192",ctaSecondaryUrl:"/solutions"},"vendor-comparison":{headline:"An AI-native alternative built for execution, not reporting.",body:"Most AR suites surface insights. Transformance acts on them. See the difference in 4 to 8 weeks.",ctaPrimary:"Book a 15-min call",ctaPrimaryUrl:"/meeting",ctaSecondary:"See Solutions \u2192",ctaSecondaryUrl:"/solutions"},default:{headline:"Fix your AR data. The forecast fixes itself.",body:"AI-native O2C automation. Cash app, deductions, collections, forecasting. One agent, four products.",ctaPrimary:"Book a 15-min call",ctaPrimaryUrl:"/meeting",ctaSecondary:"See Solutions \u2192",ctaSecondaryUrl:"/solutions"}},K={name:"Paul, founder",role:"Transformance",imageUrl:"https://cdn.prod.website-files.com/684931abb239b84984296d93/68494720f0211b2372893faf_Profile%20Picture.avif",imageAlt:"Paul Hanke, Co-Founder of Transformance"};function Ce(s){return O[s]||O.default}var ie=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-variant","data-state","data-suppress-secondary"]}attributeChangedCallback(){this.shadowRoot.firstChild&&this._render()}connectedCallback(){this.hasAttribute("data-state")||this.setAttribute("data-state","hidden"),this._render()}show(){requestAnimationFrame(()=>{this.setAttribute("data-state","visible")})}hide(){this.setAttribute("data-state","hidden")}_render(){let e=this.getAttribute("data-variant")||"default",a=Ce(e),t=this.getAttribute("data-suppress-secondary")==="true",o=`
      <style>${$e}</style>
      <div class="card" role="dialog" aria-label="Talk to Transformance">
        <button class="x" aria-label="Dismiss" data-action="dismiss">\xD7</button>
        <div class="author">
          <div class="avatar">${K.imageUrl?`<img src="${$(K.imageUrl)}" alt="${$(K.imageAlt||"")}">`:"<span>PH</span>"}</div>
          <div class="author-meta">
            <span class="author-name">${$(K.name)}</span>
            <span class="author-role">${$(K.role)}</span>
          </div>
        </div>
        <h4 class="headline">${$(a.headline)}</h4>
        <p class="body">${$(a.body)}</p>
        <a class="cta-primary" href="${$(a.ctaPrimaryUrl||"/meeting")}" data-action="cta-primary">${$(a.ctaPrimary)}</a>
        <a class="cta-secondary" href="${$(a.ctaSecondaryUrl||"/solutions")}" data-action="cta-secondary"${t?" hidden":""}>${$(a.ctaSecondary)}</a>
      </div>
    `;this.shadowRoot.innerHTML=o,this.shadowRoot.querySelector('[data-action="dismiss"]').addEventListener("click",i=>{i.preventDefault(),this.dispatchEvent(new CustomEvent("tf-popup-dismiss",{bubbles:!0,composed:!0}))}),this.shadowRoot.querySelector('[data-action="cta-primary"]').addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("tf-popup-cta",{bubbles:!0,composed:!0,detail:{kind:"primary",href:a.ctaPrimaryUrl}}))}),this.shadowRoot.querySelector('[data-action="cta-secondary"]').addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("tf-popup-cta",{bubbles:!0,composed:!0,detail:{kind:"secondary",href:a.ctaSecondaryUrl}}))})}};function $(s){return String(s??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}customElements.get("transformance-popup")||customElements.define("transformance-popup",ie);var Ie="tf_popup_dismissed_",ss=30*24*60*60*1e3,as=35,ts=25*1e3,is={"/solutions/cash-flow-forecasting":"cash-forecast","/solutions/cash-application":"cash-app","/solutions/collections":"collections","/solutions/claims-and-deductions":"deductions","/solutions/deductions":"deductions","/solutions/vero-agent":"vero","/solutions":"o2c"},Pe={"cash-forecasting":"cash-forecast","cash-flow-forecasting":"cash-forecast","cash-flow":"cash-forecast",forecasting:"cash-forecast","cash-application":"cash-app","cash-app":"cash-app",collections:"collections",collection:"collections","ar-collections":"collections",deductions:"deductions",deduction:"deductions",claims:"deductions","claims-and-deductions":"deductions",vero:"vero",o2c:"o2c","order-to-cash":"o2c","order-to-cash-broad":"o2c","general-o2c":"o2c","invoice-to-cash":"o2c","ar-automation":"o2c","ai-in-finance":"o2c","ai-finance":"o2c","vendor-comparison":"vendor-comparison","vendor-comparisons":"vendor-comparison",comparisons:"vendor-comparison",competitors:"vendor-comparison"};function Ee(s){if(!s)return null;let e=String(s).trim().toLowerCase().replace(/\s+/g,"-");return O[e]?e:Pe[e]?Pe[e]:null}function ns(s){return s?/^ar-cash-forecasting|^13-week|cash-flow-forecast|automated-cash-flow|why-are-most-cash-flow/.test(s)?"cash-forecast":/cash-application|cash-app|payment-reconciliation|auto-cash/.test(s)?"cash-app":/collections|dunning|reducing-dso|best-tools-for-reducing-dso/.test(s)?"collections":/deduction|claim|partial-payments/.test(s)?"deductions":/highradius|billtrust|blackline|competitors|alternatives|kyriba|tesorio/.test(s)?"vendor-comparison":/order-to-cash|o2c|invoice-to-cash|accounts-receivable-automation|what-is-order/.test(s)?"o2c":"default":"default"}function os(){let s=window.location.pathname.replace(/\/+$/,"");for(let[e,a]of Object.entries(is))if(s===e)return{variant:a,kind:"solution",slug:e};if(s.startsWith("/blog-posts/")){let e=document.querySelector('meta[name="tf-blog-category"]'),a=Ee(e&&e.getAttribute("content")),t=s.split("/").pop()||"";return{variant:a||ns(t),kind:"blog",slug:t}}if(s.startsWith("/glossary/")&&s!=="/glossary"){let e=document.querySelector('meta[name="tf-glossary-cluster"]'),a=Ee(e&&e.getAttribute("content")),t=s.split("/").pop()||"";return{variant:a||"default",kind:"glossary",slug:t}}return null}function rs(s){try{let e=localStorage.getItem(Ie+s);if(!e)return!1;let a=Number(e);return Number.isFinite(a)&&Date.now()-a<ss}catch{return!1}}function cs(s){try{localStorage.setItem(Ie+s,String(Date.now()))}catch{}}function ne(s,e){try{window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:s,...e})}catch{}}function ls(){return document.querySelector("article")||document.querySelector('[role="main"]')||document.querySelector("main")||document.body}function ds(s){let e=s.getBoundingClientRect(),a=s===document.body?document.documentElement.scrollHeight:s.scrollHeight,t=window.innerHeight,o=window.scrollY-(s.offsetTop||0);return a<=t?100:(o+t)/a*100}var _e=!1,ps=(()=>{try{return/[?&]tf_debug=1/.test(window.location.search)||localStorage.getItem("tf_popup_debug")==="1"}catch{return!1}})();function H(...s){ps&&console.log("[tf-popup]",...s)}function oe(){if(_e)return;_e=!0,H("installPopup() called",{path:window.location.pathname});let s=os();if(!s){H("no ctx \u2014 exiting (not a blog or solution page)");return}if(H("resolved ctx",s),rs(s.variant)){H("dismissed within 30 days \u2014 exiting",{key:"tf_popup_dismissed_"+s.variant});return}let e=O[s.variant]||O.default,a=e&&e.ctaSecondaryUrl&&window.location.pathname.replace(/\/+$/,"")===e.ctaSecondaryUrl.replace(/\/+$/,""),t=document.createElement("transformance-popup");t.setAttribute("data-variant",s.variant),t.setAttribute("data-state","hidden"),a&&t.setAttribute("data-suppress-secondary","true"),document.body.appendChild(t);let o=!1,i=0,c,p,g=h=>{o||(o=!0,i=Date.now(),b(),t.show(),H("popup shown",{source:h,variant:s.variant}),ne("popup_shown",{variant:s.variant,slug:s.slug,kind:s.kind,trigger:h}))},b=()=>{c&&(window.removeEventListener("scroll",c,{passive:!0}),c=null),p&&(clearTimeout(p),p=null)},x=ls(),v=0;c=()=>{let h=Date.now();h-v<100||(v=h,ds(x)>=as&&g("scroll"))},window.addEventListener("scroll",c,{passive:!0}),p=setTimeout(()=>g("timer"),ts),t.addEventListener("tf-popup-dismiss",()=>{t.hide(),cs(s.variant),ne("popup_dismissed",{variant:s.variant,slug:s.slug,time_visible_ms:Date.now()-i}),setTimeout(()=>t.remove(),400)}),t.addEventListener("tf-popup-cta",h=>{ne("popup_cta_clicked",{variant:s.variant,slug:s.slug,cta:h.detail.kind,target_url:h.detail.href})})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",oe,{once:!0}):oe();})();
