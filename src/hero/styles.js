/**
 * Hero animation Shadow DOM styles.
 *
 * Extracted from the inline <style> block previously in the Webflow
 * homepage's hero section. Lives inside the <transformance-hero>
 * custom element's Shadow DOM, so it cannot leak into Webflow's CSS
 * (or vice versa).
 *
 * Perf-relevant changes from the original:
 *   - Waveform bars: `height` transition → `transform: scaleY()` (composited)
 *   - `will-change: transform, opacity` added to frequently-animated elements
 *   - Card entrance uses transform/opacity only (was already composited)
 */

export const HERO_STYLES = `
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

.canvas-wrap {
  position: relative; width: 920px; height: 500px; margin: 0 auto;
  max-width: 100%;
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

/* Waveform — composited via transform: scaleY instead of height transition */
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

/* Narrow viewports: scale the fixed 920×500 canvas proportionally.
   The canvas uses absolute-positioned children with px coords, so we
   can't flex-resize — but transform: scale is cheap and composited. */
@media (max-width: 940px) {
  .canvas-wrap {
    transform: scale(calc((100vw - 40px) / 920));
    transform-origin: top center;
    margin-bottom: calc(500px * (((100vw - 40px) / 920) - 1));
  }
}
`;
