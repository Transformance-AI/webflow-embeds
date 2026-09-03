(()=>{var x=`
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
  /* Explicit width so the grid/flex column reserves a balanced slot (the
     absolute scene has no intrinsic width and the column would otherwise
     collapse). Shrinks on small screens; _fit() scales the scene to match. */
  position: relative; width: 560px; max-width: 100%;
  overflow: hidden;
}
/* Absolute so the fixed 920px scene never inflates the column's intrinsic
   width \u2014 the column then reports its true available width, which _fit()
   reads to scale the scene down to fit (no clipping in narrow split heroes). */
.canvas-wrap {
  position: absolute; top: 0; left: 0; width: 920px; height: 500px;
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
`;var y=()=>location.pathname.startsWith("/de/")||location.pathname==="/de";var q=y(),k={en:{humanMsg:"Run the morning queue. Match yesterday's payments, chase overdue accounts, check deductions, and update the Q2 forecast.",thinkingLabel:"Picking up 4 tasks...",summaryTitle:"Morning queue complete:",sum0:"3 payments matched and cleared, &euro;890K total",sum1:"Called Lars Olsen at Northwind, PTP &euro;179K by 25 Apr",sum2:"Deduction &euro;3,780 valid (trade promo), &euro;450 needs your call",sum3:"Q2 forecast updated to &euro;14.2M, up 6% from the new PTP",summaryFooter:"3 resolved &middot; 1 needs your review &middot; forecast looking strong",in0Title:"3 payments received",in0Sub:"&euro;890K total &middot; overnight",in0Foot:"Deutsche Bank &middot; MT940 statement",in1Title:"INV-0019 overdue",in1Sub:"90+ days &middot; &euro;179K",in1Foot:"Lars Olsen &middot; no response 12d",in2Title:"Short-pay flagged",in2Sub:"-&euro;4,230 &middot; Northwind",in2Foot:"Suspected trade promo",in3Title:"Forecast stale",in3Sub:"Q2 outlook &middot; 3 days old",in3Foot:"New data available",statusAnalyzing:"Analyzing...",statusRunning:"Running 4 workflows",out0Title:"Matched + cleared",clearedText:"&euro;890K cleared &middot; 3 JEs posted",out1Title:"AI Voice Call",sentiment:"Positive",callTime:"3m 42s",ptpLabel:"&euro;179K PTP",callDetail:"Lars Olsen &middot; confirmed 25 Apr",out2Title:"Investigated",ev0:"Invoice #8842",ev1:"Trade promo TP-041",ev2:"POD signed",verdictValid:"&euro;3,780",verdictQ:"&euro;450?",out3Title:"Forecast updated",q2Label:"Q2 ",q2Val:"&euro;14.2M",uplift:"+6%",ptpNote:"PTP factored",checklistTitle:"Morning Queue",checklistSub:"4 workflows running",todo0:"Match 3 payments to open invoices",todo1:"Call Lars Olsen re: INV-0019",todo2:"Investigate deduction -&euro;4,230",todo3:"Refresh Q2 cash forecast",todoProcessing:"Processing...",footerLeft:"Done in 14s",footerRight:"3 resolved &middot; 1 for review",steps:["Ask","Ingest","Analyze","Execute","Complete","Review","Report"],taglines:[{main:"Your AR, on autopilot.",sub:"From chaos to clarity in seconds."},{main:"One agent. Every workflow.",sub:"Collections, payments, deductions, forecasts."},{main:"You ask. Vero delivers.",sub:"The AI finance agent that gets things done."}],todoSubs:["\u20AC890K cleared, 3 JEs posted","PTP \u20AC179K confirmed for 25 Apr","\u20AC3,780 valid trade promo, \u20AC450 to review","\u20AC14.2M projected, +6% from new PTP"]},de:{humanMsg:"Starte die Morgen-Queue. Ordne die gestrigen Zahlungen zu, verfolge \xFCberf\xE4llige Konten, pr\xFCfe Abz\xFCge und aktualisiere die Q2-Prognose.",thinkingLabel:"4 Aufgaben werden \xFCbernommen...",summaryTitle:"Morgen-Queue abgeschlossen:",sum0:"3 Zahlungen zugeordnet und ausgeglichen, &euro;890K gesamt",sum1:"Lars Olsen bei Northwind angerufen, Zahlungszusage &euro;179K bis 25. Apr",sum2:"Abzug &euro;3,780 berechtigt (Trade-Promo), &euro;450 braucht Ihre Entscheidung",sum3:"Q2-Prognose auf &euro;14.2M aktualisiert, +6 % durch die neue Zahlungszusage",summaryFooter:"3 erledigt &middot; 1 zur Pr\xFCfung &middot; Prognose sieht stark aus",in0Title:"3 Zahlungseing\xE4nge",in0Sub:"&euro;890K gesamt &middot; \xFCber Nacht",in0Foot:"Deutsche Bank &middot; MT940-Auszug",in1Title:"INV-0019 \xFCberf\xE4llig",in1Sub:"90+ Tage &middot; &euro;179K",in1Foot:"Lars Olsen &middot; 12 T ohne Antwort",in2Title:"K\xFCrzung markiert",in2Sub:"-&euro;4,230 &middot; Northwind",in2Foot:"Vermutlich Trade-Promo",in3Title:"Prognose veraltet",in3Sub:"Q2-Ausblick &middot; 3 Tage alt",in3Foot:"Neue Daten verf\xFCgbar",statusAnalyzing:"Analysiere...",statusRunning:"4 Workflows aktiv",out0Title:"Zugeordnet + gebucht",clearedText:"&euro;890K ausgeglichen &middot; 3 Buchungen",out1Title:"KI-Sprachanruf",sentiment:"Positiv",callTime:"3:42 Min.",ptpLabel:"&euro;179K PTP",callDetail:"Lars Olsen &middot; best\xE4tigt 25. Apr",out2Title:"Untersucht",ev0:"Rechnung #8842",ev1:"Trade-Promo TP-041",ev2:"Liefernachweis signiert",verdictValid:"&euro;3,780",verdictQ:"&euro;450?",out3Title:"Prognose aktualisiert",q2Label:"Q2 ",q2Val:"&euro;14.2M",uplift:"+6%",ptpNote:"PTP einbezogen",checklistTitle:"Morgen-Queue",checklistSub:"4 Workflows aktiv",todo0:"3 Zahlungen offenen Rechnungen zuordnen",todo1:"Lars Olsen anrufen zu INV-0019",todo2:"Abzug -&euro;4,230 untersuchen",todo3:"Q2-Cashflow-Prognose aktualisieren",todoProcessing:"Wird verarbeitet...",footerLeft:"Fertig in 14 s",footerRight:"3 erledigt &middot; 1 zur Pr\xFCfung",steps:["Fragen","Erfassen","Analysieren","Ausf\xFChren","Fertig","Pr\xFCfen","Bericht"],taglines:[{main:"Ihre Debitoren, auf Autopilot.",sub:"Vom Chaos zur Klarheit in Sekunden."},{main:"Ein Agent. Jeder Workflow.",sub:"Collections, Zahlungen, Abz\xFCge, Prognosen."},{main:"Sie fragen. Vero liefert.",sub:"Der KI-Finanzagent, der Dinge erledigt."}],todoSubs:["\u20AC890K ausgeglichen, 3 Buchungen","Zahlungszusage \u20AC179K best\xE4tigt f\xFCr 25. Apr","\u20AC3,780 berechtigter Trade-Promo, \u20AC450 zu pr\xFCfen","\u20AC14.2M prognostiziert, +6 % durch neue Zahlungszusage"]}},t=q?k.de:k.en,w=t.taglines,M=t.todoSubs,E=t.steps,A=[3,7,5,9,4,8,6,10,3,7,5,8,4,6,9,5,7,3],v=28,_=[{x1:195+v,y1:55,x2:370,y2:215},{x1:185+v,y1:170,x2:370,y2:235},{x1:190+v,y1:305,x2:370,y2:260},{x1:185+v,y1:420,x2:370,y2:280}],T=[{x1:530,y1:215,x2:660,y2:50},{x1:530,y1:235,x2:660,y2:165},{x1:530,y1:260,x2:660,y2:300},{x1:530,y1:280,x2:660,y2:405}],$={x1:780,y1:225,x2:730,y2:400},C=[{p:0,d:0},{p:1,d:2200},{p:2,d:4e3},{p:3,d:5800},{p:4,d:7800},{p:5,d:9800},{p:6,d:13e3},{p:7,d:16500},{p:-1,d:2e4}],S=`
<div class="canvas-fit" part="fit">
<div class="canvas-wrap" part="canvas">
  <div id="chat-overlay" class="chat-overlay">
    <div class="chat-wrap">
      <div id="chat-human" class="chat-human">
        <div class="human-bubble">${t.humanMsg}</div>
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
            <span class="thinking-label">${t.thinkingLabel}</span>
          </div>
        </div>
      </div>
      <div id="chat-summary" class="chat-vero-summary">
        <div id="vero-avatar-chat-summary" class="vero-avatar" style="width:32px;height:32px;">
          <div class="vero-avatar-text" style="font-size:13.4px;color:#10B981;"><span>^</span><span>^</span></div>
        </div>
        <div class="summary-bubble">
          <div class="summary-title">${t.summaryTitle}</div>
          <div class="summary-items">
            <div class="summary-item">
              <svg class="summary-check" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              ${t.sum0}
            </div>
            <div class="summary-item">
              <svg class="summary-check" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              ${t.sum1}
            </div>
            <div class="summary-item">
              <svg class="summary-check" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              ${t.sum2}
            </div>
            <div class="summary-item">
              <svg class="summary-check" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              ${t.sum3}
            </div>
          </div>
          <div class="summary-footer">${t.summaryFooter}</div>
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

    <div id="input-0" class="card card-pad" style="left:${5+v}px;top:12px;width:185px;">
      <div class="card-head">
        <div class="icon-box bg-emerald-100">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M2 10h20"/></svg>
        </div>
        <div><div class="card-title">${t.in0Title}</div><div class="card-sub">${t.in0Sub}</div></div>
      </div>
      <div class="card-foot" style="color:var(--gray-500);">${t.in0Foot}</div>
    </div>
    <div id="input-1" class="card card-pad" style="left:${0+v}px;top:130px;width:180px;transition-delay:0.12s;">
      <div class="card-head">
        <div class="icon-box bg-rose-100">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e11d48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
        </div>
        <div><div class="card-title">${t.in1Title}</div><div class="card-sub">${t.in1Sub}</div></div>
      </div>
      <div class="card-foot" style="color:var(--rose-500);font-weight:500;">${t.in1Foot}</div>
    </div>
    <div id="input-2" class="card card-pad" style="left:${10+v}px;top:265px;width:180px;transition-delay:0.24s;">
      <div class="card-head">
        <div class="icon-box bg-amber-100">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        </div>
        <div><div class="card-title">${t.in2Title}</div><div class="card-sub">${t.in2Sub}</div></div>
      </div>
      <div class="card-foot" style="color:var(--amber-600);font-weight:500;">${t.in2Foot}</div>
    </div>
    <div id="input-3" class="card card-pad" style="left:${5+v}px;top:385px;width:175px;transition-delay:0.36s;">
      <div class="card-head">
        <div class="icon-box bg-indigo-100">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
        </div>
        <div><div class="card-title">${t.in3Title}</div><div class="card-sub">${t.in3Sub}</div></div>
      </div>
      <div class="card-foot" style="color:var(--indigo-500);font-weight:500;">${t.in3Foot}</div>
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
        <div id="vero-hub-status" class="vero-hub-status" style="color:var(--gray-400);">${t.statusAnalyzing}</div>
      </div>
    </div>

    <div id="output-0" class="card card-pad" style="left:660px;top:5px;width:210px;">
      <div class="card-head-between">
        <div class="card-head-left">
          <div class="icon-box-sm bg-emerald-100">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M2 10h20"/></svg>
          </div>
          <div class="card-title">${t.out0Title}</div>
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
      <div id="cleared-text" class="cleared-text">${t.clearedText}</div>
    </div>

    <div id="output-1" class="card card-pad" style="left:665px;top:135px;width:210px;transition-delay:0.12s;">
      <div class="card-head-between">
        <div class="card-head-left">
          <div class="icon-box-sm bg-violet-100">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <div class="card-title">${t.out1Title}</div>
        </div>
        <div id="check-1" class="anim-check">
          <div class="anim-check-circle"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path class="anim-check-path" d="M2.5 6L5 8.5L9.5 3.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        </div>
      </div>
      <div id="waveform" class="waveform" style="margin-bottom:8px;padding:0 4px;"></div>
      <div class="sentiment-row">
        <div class="sentiment-left">
          <span class="sentiment-badge">${t.sentiment}</span>
          <span class="sentiment-time">${t.callTime}</span>
        </div>
        <span class="ptp-label">${t.ptpLabel}</span>
      </div>
      <div id="call-detail" class="call-detail">${t.callDetail}</div>
    </div>

    <div id="output-2" class="card card-pad" style="left:660px;top:272px;width:210px;transition-delay:0.24s;">
      <div class="card-head-between">
        <div class="card-head-left">
          <div class="icon-box-sm bg-amber-100">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/></svg>
          </div>
          <div class="card-title">${t.out2Title}</div>
        </div>
        <div id="check-2" class="anim-check">
          <div class="anim-check-circle"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path class="anim-check-path" d="M2.5 6L5 8.5L9.5 3.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:2px;margin-bottom:8px;">
        <div class="evidence-row">
          <div class="evidence-dot" style="background:var(--blue-400);"></div>
          <span>${t.ev0}</span>
          <div class="evidence-dash"></div>
          <svg id="ev-check-0" class="evidence-check pending" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <div class="evidence-row">
          <div class="evidence-dot" style="background:var(--violet-400);"></div>
          <span>${t.ev1}</span>
          <div class="evidence-dash"></div>
          <svg id="ev-check-1" class="evidence-check pending" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <div class="evidence-row">
          <div class="evidence-dot" style="background:var(--gray-400);"></div>
          <span>${t.ev2}</span>
          <svg id="ev-check-2" class="evidence-check pending" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
      </div>
      <div class="verdict-row">
        <div class="verdict-track"><div id="verdict-fill" class="verdict-fill"></div></div>
        <span class="verdict-valid">${t.verdictValid}</span>
        <span class="verdict-question">${t.verdictQ}</span>
      </div>
    </div>

    <div id="output-3" class="card card-pad" style="left:660px;top:390px;width:210px;transition-delay:0.36s;">
      <div class="card-head-between">
        <div class="card-head-left">
          <div class="icon-box-sm bg-indigo-100">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
          </div>
          <div class="card-title">${t.out3Title}</div>
        </div>
        <div id="check-3" class="anim-check">
          <div class="anim-check-circle"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path class="anim-check-path" d="M2.5 6L5 8.5L9.5 3.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        </div>
      </div>
      <div style="margin-bottom:6px;">
        <svg id="mini-chart" width="130" height="40" viewBox="0 0 130 40"></svg>
      </div>
      <div class="forecast-bottom">
        <div><span class="forecast-q2-label">${t.q2Label}</span><span class="forecast-q2-val">${t.q2Val}</span></div>
        <div id="forecast-uplift" class="forecast-uplift">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          ${t.uplift}
          <span class="forecast-ptp-note">${t.ptpNote}</span>
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
          <div class="checklist-title">${t.checklistTitle}</div>
          <div class="checklist-sub">${t.checklistSub}</div>
        </div>
      </div>
      <div class="checklist-items">
        <div class="checklist-item" id="todo-0"><div class="check-box" id="todo-box-0"></div><div style="flex:1;"><div class="check-label" id="todo-label-0">${t.todo0}</div><div class="check-sub" id="todo-sub-0">${t.todoProcessing}</div></div></div>
        <div class="checklist-item" id="todo-1"><div class="check-box" id="todo-box-1"></div><div style="flex:1;"><div class="check-label" id="todo-label-1">${t.todo1}</div><div class="check-sub" id="todo-sub-1">${t.todoProcessing}</div></div></div>
        <div class="checklist-item" id="todo-2"><div class="check-box" id="todo-box-2"></div><div style="flex:1;"><div class="check-label" id="todo-label-2">${t.todo2}</div><div class="check-sub" id="todo-sub-2">${t.todoProcessing}</div></div></div>
        <div class="checklist-item" id="todo-3"><div class="check-box" id="todo-box-3"></div><div style="flex:1;"><div class="check-label" id="todo-label-3">${t.todo3}</div><div class="check-sub" id="todo-sub-3">${t.todoProcessing}</div></div></div>
      </div>
      <div id="checklist-footer" class="checklist-footer">
        <span class="checklist-footer-left">${t.footerLeft}</span>
        <span class="checklist-footer-right">${t.footerRight}</span>
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
`,b=class extends HTMLElement{constructor(){super(),this._phase=-1,this._cycle=0,this._timers=[],this._avatarTimers=[],this._started=!1,this._paused=!1,this._observer=null}connectedCallback(){if(this._shadow)return;this._shadow=this.attachShadow({mode:"open"}),this._shadow.innerHTML=`<style>${x}</style>${S}`,this._q=o=>this._shadow.querySelector(o),this.style.transform="none",this.style.margin="0",this._buildStaticBits(),this._fitEls={fit:this._q(".canvas-fit"),wrap:this._q(".canvas-wrap")},this._fit(),"ResizeObserver"in window?(this._ro=new ResizeObserver(()=>this._fit()),this._ro.observe(this.parentElement||this)):(this._onResize=()=>this._fit(),window.addEventListener("resize",this._onResize));let e=()=>{this._started||(this._started=!0,this._runCycle())},d=()=>{"requestIdleCallback"in window?window.requestIdleCallback(e,{timeout:500}):setTimeout(e,200)};"IntersectionObserver"in window?(this._observer=new IntersectionObserver(o=>{o[0].isIntersecting?(this._paused=!1,this._started||d()):this._paused=!0},{threshold:.01}),this._observer.observe(this)):d()}disconnectedCallback(){this._timers.forEach(clearTimeout),this._timers=[],this._clearAvatarTimers(),this._observer?.disconnect(),this._ro?.disconnect(),this._onResize&&window.removeEventListener("resize",this._onResize)}_fit(){let e=this._fitEls;if(!e||!e.fit||!e.wrap)return;let d=this.parentElement?this.parentElement.clientWidth:0,o=Math.min(920,d||e.fit.clientWidth||560);e.fit.style.width=o+"px";let r=Math.min(1,o/920);e.fit.style.height=Math.round(500*r)+"px",e.wrap.style.transform=`scale(${r})`}_buildStaticBits(){let e=this._q("#waveform");A.forEach((i,a)=>{let n=document.createElement("div");n.className="waveform-bar",n.setAttribute("data-h",i),n.style.transitionDelay=a*30+"ms",e.appendChild(n)});let d=this._q("#progress-steps");E.forEach((i,a)=>{let n=document.createElement("div");n.className="progress-step",n.innerHTML=`<div class="progress-dot" data-step="${a}"></div><span class="progress-label" data-step="${a}">${i}</span>`,d.appendChild(n)});let o=i=>{let a=(i.x1+i.x2)/2,n=(i.x1+i.x2)/2;return`M${i.x1},${i.y1} C${a},${i.y1} ${n},${i.y2} ${i.x2},${i.y2}`},r=i=>Math.sqrt(Math.pow(i.x2-i.x1,2)+Math.pow(i.y2-i.y1,2))*1.5;this._allConns=[];for(let i=0;i<4;i++){let a=this._q(`#conn-in-${i}`),n=o(_[i]),l=r(_[i]);a.setAttribute("d",n),a.style.strokeDasharray=l,a.style.strokeDashoffset=l,a.style.transition=`stroke-dashoffset 0.8s cubic-bezier(0.22,1,0.36,1) ${i*.12}s`,this._allConns.push({el:a,len:l,phase:2})}for(let i=0;i<4;i++){let a=this._q(`#conn-out-${i}`),n=o(T[i]),l=r(T[i]);a.setAttribute("d",n),a.style.strokeDasharray=l,a.style.strokeDashoffset=l,a.style.transition=`stroke-dashoffset 0.8s cubic-bezier(0.22,1,0.36,1) ${i*.12}s`,this._allConns.push({el:a,len:l,phase:3})}{let i=this._q("#conn-cross"),a=o($),n=r($);i.setAttribute("d",a),i.style.strokeDasharray=n,i.style.strokeDashoffset=n,i.style.transition="stroke-dashoffset 0.8s cubic-bezier(0.22,1,0.36,1) 0.3s",this._allConns.push({el:i,len:n,phase:4})}this._drawMiniChart(!1)}_drawMiniChart(e){let d=[6,5.5,6.2,5.8,6.5,7,e?7.8:7.2],o=130,r=40,i=4,a=8.5,n=4.5,l=p=>i+p/(d.length-1)*(o-2*i),h=p=>i+(a-p)/(a-n)*(r-2*i),u=d.map((p,m)=>(m===0?"M":"L")+l(m)+","+h(p)).join(" "),f=this._q("#mini-chart"),g=`<path d="${u}" fill="none" stroke="${e?"#6366f1":"#d1d5db"}" stroke-width="2" stroke-linecap="round" style="transition:all 0.8s ease"/>`;e&&(g+=`<path d="M${l(5)},${h(7)} L${l(6)},${h(7.8)} L${l(6)},${h(7.2)} L${l(5)},${h(7)} Z" fill="#818cf8" opacity="0.2"/>`,g+=`<circle cx="${l(6)}" cy="${h(7.8)}" r="3" fill="#6366f1"/>`,g+=`<line x1="${l(5)}" y1="${h(7.2)}" x2="${l(6)}" y2="${h(7.2)}" stroke="#d1d5db" stroke-width="1" stroke-dasharray="3 2"/>`),f.innerHTML=g}_clearAvatarTimers(){this._avatarTimers.forEach(e=>{clearTimeout(e),clearInterval(e)}),this._avatarTimers=[]}_animateVeroAvatar(e,d){if(!e)return;let o=e.querySelector(".vero-avatar-text");if(!o)return;let r=o.querySelectorAll("span");if(d==="idle"){o.style.color="#10B981",r[0].textContent="0",r[1].textContent="0";let i=()=>{r[0].textContent="-",this._avatarTimers.push(setTimeout(()=>{r[0].textContent="0"},150)),this._avatarTimers.push(setTimeout(i,700+Math.random()*2e3))};this._avatarTimers.push(setTimeout(i,700+Math.random()*1e3));let a=()=>{r[1].textContent="-",this._avatarTimers.push(setTimeout(()=>{r[1].textContent="0"},150)),this._avatarTimers.push(setTimeout(a,1e3+Math.random()*2500))};this._avatarTimers.push(setTimeout(a,1e3+Math.random()*1500))}else if(d==="thinking"){o.style.color="#6EE7B7";let i=setInterval(()=>{r[0].textContent=Math.random()>.5?"1":"0",r[1].textContent=Math.random()>.5?"1":"0"},80);this._avatarTimers.push(i)}else d==="done"&&(o.style.color="#10B981",r[0].textContent="^",r[1].textContent="^")}_setPhase(e){this._phase=e,this._clearAvatarTimers();let d=e===0||e===6,o=e>=1&&e<=4,r=e===5,i=e===7;this._q("#chat-overlay").classList.toggle("visible",d);let n=this._q("#chat-human");n.className="chat-human"+(e===0?" visible":e===6?" faded":""),n.style.transitionDelay=e===0?"0.3s":"0s";let l=this._q("#chat-thinking");l.className="chat-vero-thinking"+(e===0?" visible":""),l.style.transitionDelay=e===0?"1s":"0s";let h=this._q("#chat-summary");h.className="chat-vero-summary"+(e===6?" visible":""),h.style.transitionDelay=e===6?"0.5s":"0s",e===0&&this._animateVeroAvatar(this._q("#vero-avatar-chat-thinking"),"thinking"),e===6&&this._animateVeroAvatar(this._q("#vero-avatar-chat-summary"),"done"),this._q("#canvas-layer").classList.toggle("visible",o);for(let s=0;s<4;s++)this._q("#input-"+s).classList.toggle("visible",e>=1);this._allConns.forEach(s=>{s.el.style.strokeDashoffset=e>=s.phase?"0":s.len});let u=this._q("#vero-hub");u.classList.toggle("visible",e>=2),u.classList.toggle("pulsing",e>=2&&e<=4),this._q("#vero-hub-card").classList.toggle("active",e>=3);let f=this._q("#vero-hub-status");f.textContent=e<3?t.statusAnalyzing:t.statusRunning,f.style.color=e>=3?"var(--violet-600)":"var(--gray-400)",e>=2&&this._animateVeroAvatar(this._q("#vero-avatar-hub"),e>=3?"thinking":"idle");for(let s=0;s<4;s++){let c=this._q("#output-"+s);c.classList.toggle("visible",e>=3),c.classList.toggle("done",e>=4),this._q("#check-"+s).classList.toggle("visible",e>=4)}for(let s=0;s<3;s++)this._q("#inv-"+s).classList.toggle("done",e>=4),this._q("#badge-"+s).classList.toggle("done",e>=4);this._q("#cleared-text").classList.toggle("visible",e>=4),this._q("#waveform").querySelectorAll(".waveform-bar").forEach(s=>{let c=e>=3;s.classList.toggle("active",c);let z=parseFloat(s.getAttribute("data-h")),L=c?Math.min(1,z*2.2/22):.14;s.style.transform=`scaleY(${L})`}),this._q("#call-detail").classList.toggle("visible",e>=4);for(let s=0;s<3;s++){let c=this._q("#ev-check-"+s);c.classList.toggle("done",e>=4),c.classList.toggle("pending",e<4),c.style.transitionDelay=s*150+400+"ms"}if(this._q("#verdict-fill").classList.toggle("done",e>=4),this._drawMiniChart(e>=4),this._q("#forecast-uplift").classList.toggle("visible",e>=4),this._q("#checklist-overlay").classList.toggle("visible",r),r){this._animateVeroAvatar(this._q("#vero-avatar-checklist"),"thinking"),this._resetTodos();for(let s=0;s<4;s++)(c=>{this._timers.push(setTimeout(()=>this._checkTodo(c),600+c*500))})(s)}if(this._q("#tagline-overlay").classList.toggle("visible",i),i){let s=w[this._cycle%w.length];this._q("#tagline-content").innerHTML=`<div class="tagline-main">${s.main}</div><div class="tagline-sub">${s.sub}</div>`}let m=Math.min(100,e/7*100);this._q("#progress-fill").style.width=m+"%",this._q("#progress-steps").querySelectorAll(".progress-dot").forEach(s=>{let c=parseInt(s.getAttribute("data-step"));s.className="progress-dot"+(e>=c?c<=1?" active-v":c<=4?" active-e":" active-b":"")}),this._q("#progress-steps").querySelectorAll(".progress-label").forEach(s=>{let c=parseInt(s.getAttribute("data-step"));s.classList.toggle("active",e>=c)})}_resetTodos(){for(let e=0;e<4;e++)this._q("#todo-box-"+e).className="check-box",this._q("#todo-box-"+e).innerHTML="",this._q("#todo-label-"+e).className="check-label",this._q("#todo-sub-"+e).className="check-sub",this._q("#todo-sub-"+e).textContent=t.todoProcessing;this._q("#checklist-footer").classList.remove("visible")}_checkTodo(e){let d=this._q("#todo-box-"+e);d.className="check-box checked",d.innerHTML='<svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>',this._q("#todo-label-"+e).classList.add("checked");let o=this._q("#todo-sub-"+e);o.classList.add("checked"),o.textContent=M[e],e===3&&this._q("#checklist-footer").classList.add("visible")}_runCycle(){this._timers.forEach(clearTimeout),this._timers=[],C.forEach(e=>{this._timers.push(setTimeout(()=>{this._paused||(e.p===-1?(this._cycle++,this._runCycle()):this._setPhase(e.p))},e.d))})}};customElements.get("transformance-hero")||customElements.define("transformance-hero",b);})();
