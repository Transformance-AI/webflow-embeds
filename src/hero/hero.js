/**
 * <transformance-hero> custom element.
 *
 * The animated canvas that previously lived inline on the Webflow
 * homepage (under .canvas-wrap). Migrated here so it can:
 *   1. Load async (not block the HTML parser or LCP)
 *   2. Run inside a Shadow DOM (no CSS bleed either direction)
 *   3. Defer its init until after first paint
 *   4. Pause its animation timer when scrolled off-screen
 *
 * Embed on any page with a single line:
 *   <transformance-hero></transformance-hero>
 *
 * Expected to sit INSIDE a Webflow hero section that already contains
 * the <h1>, subtitle, and dark-gradient background. This element
 * contributes the 920×500 animated scene + progress bar only.
 */

import { HERO_STYLES } from './styles.js';

const TAGLINES = [
  { main: 'Your AR, on autopilot.', sub: 'From chaos to clarity in seconds.' },
  { main: 'One agent. Every workflow.', sub: 'Collections, payments, deductions, forecasts.' },
  { main: 'You ask. Vero delivers.', sub: 'The AI finance agent that gets things done.' },
];

const TODO_SUBS = [
  '€890K cleared, 3 JEs posted',
  'PTP €179K confirmed for 25 Apr',
  '€3,780 valid trade promo, €450 to review',
  '€14.2M projected, +6% from new PTP',
];

const STEPS = ['Ask','Ingest','Analyze','Execute','Complete','Review','Report'];

const WAVEFORM_HEIGHTS = [3,7,5,9,4,8,6,10,3,7,5,8,4,6,9,5,7,3];

const CONN_IN = [
  { x1:195, y1:55,  x2:370, y2:215 },
  { x1:185, y1:170, x2:370, y2:235 },
  { x1:190, y1:305, x2:370, y2:260 },
  { x1:185, y1:420, x2:370, y2:280 },
];
const CONN_OUT = [
  { x1:530, y1:215, x2:660, y2:50  },
  { x1:530, y1:235, x2:660, y2:165 },
  { x1:530, y1:260, x2:660, y2:300 },
  { x1:530, y1:280, x2:660, y2:405 },
];
const CONN_CROSS = { x1:780, y1:225, x2:730, y2:400 };

const TIMELINE = [
  { p: 0, d: 0 },
  { p: 1, d: 2200 },
  { p: 2, d: 4000 },
  { p: 3, d: 5800 },
  { p: 4, d: 7800 },
  { p: 5, d: 9800 },
  { p: 6, d: 13000 },
  { p: 7, d: 16500 },
  { p: -1, d: 20000 },
];

const HERO_HTML = `
<div class="canvas-wrap" part="canvas">
  <div id="chat-overlay" class="chat-overlay">
    <div class="chat-wrap">
      <div id="chat-human" class="chat-human">
        <div class="human-bubble">Run the morning queue. Match yesterday's payments, chase overdue accounts, check deductions, and update the Q2 forecast.</div>
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
            <span class="thinking-label">Picking up 4 tasks...</span>
          </div>
        </div>
      </div>
      <div id="chat-summary" class="chat-vero-summary">
        <div id="vero-avatar-chat-summary" class="vero-avatar" style="width:32px;height:32px;">
          <div class="vero-avatar-text" style="font-size:13.4px;color:#10B981;"><span>^</span><span>^</span></div>
        </div>
        <div class="summary-bubble">
          <div class="summary-title">Morning queue complete:</div>
          <div class="summary-items">
            <div class="summary-item">
              <svg class="summary-check" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              3 payments matched and cleared, &euro;890K total
            </div>
            <div class="summary-item">
              <svg class="summary-check" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              Called Lars Olsen at Northwind, PTP &euro;179K by 25 Apr
            </div>
            <div class="summary-item">
              <svg class="summary-check" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              Deduction &euro;3,780 valid (trade promo), &euro;450 needs your call
            </div>
            <div class="summary-item">
              <svg class="summary-check" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              Q2 forecast updated to &euro;14.2M, up 6% from the new PTP
            </div>
          </div>
          <div class="summary-footer">3 resolved &middot; 1 needs your review &middot; forecast looking strong</div>
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

    <div id="input-0" class="card card-pad" style="left:5px;top:12px;width:185px;">
      <div class="card-head">
        <div class="icon-box bg-emerald-100">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M2 10h20"/></svg>
        </div>
        <div><div class="card-title">3 payments received</div><div class="card-sub">&euro;890K total &middot; overnight</div></div>
      </div>
      <div class="card-foot" style="color:var(--gray-500);">Deutsche Bank &middot; MT940 statement</div>
    </div>
    <div id="input-1" class="card card-pad" style="left:0px;top:130px;width:180px;transition-delay:0.12s;">
      <div class="card-head">
        <div class="icon-box bg-rose-100">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e11d48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
        </div>
        <div><div class="card-title">INV-0019 overdue</div><div class="card-sub">90+ days &middot; &euro;179K</div></div>
      </div>
      <div class="card-foot" style="color:var(--rose-500);font-weight:500;">Lars Olsen &middot; no response 12d</div>
    </div>
    <div id="input-2" class="card card-pad" style="left:10px;top:265px;width:180px;transition-delay:0.24s;">
      <div class="card-head">
        <div class="icon-box bg-amber-100">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        </div>
        <div><div class="card-title">Short-pay flagged</div><div class="card-sub">-&euro;4,230 &middot; Northwind</div></div>
      </div>
      <div class="card-foot" style="color:var(--amber-600);font-weight:500;">Suspected trade promo</div>
    </div>
    <div id="input-3" class="card card-pad" style="left:5px;top:385px;width:175px;transition-delay:0.36s;">
      <div class="card-head">
        <div class="icon-box bg-indigo-100">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
        </div>
        <div><div class="card-title">Forecast stale</div><div class="card-sub">Q2 outlook &middot; 3 days old</div></div>
      </div>
      <div class="card-foot" style="color:var(--indigo-500);font-weight:500;">New data available</div>
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
        <div id="vero-hub-status" class="vero-hub-status" style="color:var(--gray-400);">Analyzing...</div>
      </div>
    </div>

    <div id="output-0" class="card card-pad" style="left:660px;top:5px;width:210px;">
      <div class="card-head-between">
        <div class="card-head-left">
          <div class="icon-box-sm bg-emerald-100">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M2 10h20"/></svg>
          </div>
          <div class="card-title">Matched + cleared</div>
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
      <div id="cleared-text" class="cleared-text">&euro;890K cleared &middot; 3 JEs posted</div>
    </div>

    <div id="output-1" class="card card-pad" style="left:665px;top:135px;width:210px;transition-delay:0.12s;">
      <div class="card-head-between">
        <div class="card-head-left">
          <div class="icon-box-sm bg-violet-100">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <div class="card-title">AI Voice Call</div>
        </div>
        <div id="check-1" class="anim-check">
          <div class="anim-check-circle"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path class="anim-check-path" d="M2.5 6L5 8.5L9.5 3.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        </div>
      </div>
      <div id="waveform" class="waveform" style="margin-bottom:8px;padding:0 4px;"></div>
      <div class="sentiment-row">
        <div class="sentiment-left">
          <span class="sentiment-badge">Positive</span>
          <span class="sentiment-time">3m 42s</span>
        </div>
        <span class="ptp-label">&euro;179K PTP</span>
      </div>
      <div id="call-detail" class="call-detail">Lars Olsen &middot; confirmed 25 Apr</div>
    </div>

    <div id="output-2" class="card card-pad" style="left:660px;top:272px;width:210px;transition-delay:0.24s;">
      <div class="card-head-between">
        <div class="card-head-left">
          <div class="icon-box-sm bg-amber-100">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/></svg>
          </div>
          <div class="card-title">Investigated</div>
        </div>
        <div id="check-2" class="anim-check">
          <div class="anim-check-circle"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path class="anim-check-path" d="M2.5 6L5 8.5L9.5 3.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:2px;margin-bottom:8px;">
        <div class="evidence-row">
          <div class="evidence-dot" style="background:var(--blue-400);"></div>
          <span>Invoice #8842</span>
          <div class="evidence-dash"></div>
          <svg id="ev-check-0" class="evidence-check pending" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <div class="evidence-row">
          <div class="evidence-dot" style="background:var(--violet-400);"></div>
          <span>Trade promo TP-041</span>
          <div class="evidence-dash"></div>
          <svg id="ev-check-1" class="evidence-check pending" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <div class="evidence-row">
          <div class="evidence-dot" style="background:var(--gray-400);"></div>
          <span>POD signed</span>
          <svg id="ev-check-2" class="evidence-check pending" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
      </div>
      <div class="verdict-row">
        <div class="verdict-track"><div id="verdict-fill" class="verdict-fill"></div></div>
        <span class="verdict-valid">&euro;3,780</span>
        <span class="verdict-question">&euro;450?</span>
      </div>
    </div>

    <div id="output-3" class="card card-pad" style="left:660px;top:390px;width:210px;transition-delay:0.36s;">
      <div class="card-head-between">
        <div class="card-head-left">
          <div class="icon-box-sm bg-indigo-100">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
          </div>
          <div class="card-title">Forecast updated</div>
        </div>
        <div id="check-3" class="anim-check">
          <div class="anim-check-circle"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path class="anim-check-path" d="M2.5 6L5 8.5L9.5 3.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        </div>
      </div>
      <div style="margin-bottom:6px;">
        <svg id="mini-chart" width="130" height="40" viewBox="0 0 130 40"></svg>
      </div>
      <div class="forecast-bottom">
        <div><span class="forecast-q2-label">Q2 </span><span class="forecast-q2-val">&euro;14.2M</span></div>
        <div id="forecast-uplift" class="forecast-uplift">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          +6%
          <span class="forecast-ptp-note">PTP factored</span>
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
          <div class="checklist-title">Morning Queue</div>
          <div class="checklist-sub">4 workflows running</div>
        </div>
      </div>
      <div class="checklist-items">
        <div class="checklist-item" id="todo-0"><div class="check-box" id="todo-box-0"></div><div style="flex:1;"><div class="check-label" id="todo-label-0">Match 3 payments to open invoices</div><div class="check-sub" id="todo-sub-0">Processing...</div></div></div>
        <div class="checklist-item" id="todo-1"><div class="check-box" id="todo-box-1"></div><div style="flex:1;"><div class="check-label" id="todo-label-1">Call Lars Olsen re: INV-0019</div><div class="check-sub" id="todo-sub-1">Processing...</div></div></div>
        <div class="checklist-item" id="todo-2"><div class="check-box" id="todo-box-2"></div><div style="flex:1;"><div class="check-label" id="todo-label-2">Investigate deduction -&euro;4,230</div><div class="check-sub" id="todo-sub-2">Processing...</div></div></div>
        <div class="checklist-item" id="todo-3"><div class="check-box" id="todo-box-3"></div><div style="flex:1;"><div class="check-label" id="todo-label-3">Refresh Q2 cash forecast</div><div class="check-sub" id="todo-sub-3">Processing...</div></div></div>
      </div>
      <div id="checklist-footer" class="checklist-footer">
        <span class="checklist-footer-left">Done in 14s</span>
        <span class="checklist-footer-right">3 resolved &middot; 1 for review</span>
      </div>
    </div>
  </div>

  <div id="tagline-overlay" class="tagline-overlay">
    <div style="text-align:center;" id="tagline-content"></div>
  </div>
</div>

<div class="progress-wrap">
  <div class="progress-track"><div id="progress-fill" class="progress-fill"></div></div>
  <div class="progress-steps" id="progress-steps"></div>
</div>
`;

class TransformanceHero extends HTMLElement {
  constructor() {
    super();
    this._phase = -1;
    this._cycle = 0;
    this._timers = [];
    this._avatarTimers = [];
    this._started = false;
    this._paused = false;
    this._observer = null;
  }

  connectedCallback() {
    if (this._shadow) return;
    this._shadow = this.attachShadow({ mode: 'open' });
    this._shadow.innerHTML = `<style>${HERO_STYLES}</style>${HERO_HTML}`;
    this._q = (sel) => this._shadow.querySelector(sel);

    this._buildStaticBits();

    // Defer animation init until after the first paint. `requestIdleCallback`
    // gives the browser time to finish layout/paint of the static page before
    // we spin up timers and DOM mutations.
    const start = () => {
      if (this._started) return;
      this._started = true;
      this._runCycle();
    };
    const kick = () => {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(start, { timeout: 500 });
      } else {
        setTimeout(start, 200);
      }
    };

    // Pause while off-screen to save CPU.
    if ('IntersectionObserver' in window) {
      this._observer = new IntersectionObserver((entries) => {
        const visible = entries[0].isIntersecting;
        if (visible) {
          this._paused = false;
          if (!this._started) kick();
        } else {
          this._paused = true;
        }
      }, { threshold: 0.01 });
      this._observer.observe(this);
    } else {
      kick();
    }
  }

  disconnectedCallback() {
    this._timers.forEach(clearTimeout);
    this._timers = [];
    this._clearAvatarTimers();
    this._observer?.disconnect();
  }

  _buildStaticBits() {
    // Waveform bars
    const waveformEl = this._q('#waveform');
    WAVEFORM_HEIGHTS.forEach((h, i) => {
      const bar = document.createElement('div');
      bar.className = 'waveform-bar';
      bar.setAttribute('data-h', h);
      bar.style.transitionDelay = (i * 30) + 'ms';
      waveformEl.appendChild(bar);
    });

    // Progress steps
    const stepsEl = this._q('#progress-steps');
    STEPS.forEach((s, i) => {
      const step = document.createElement('div');
      step.className = 'progress-step';
      step.innerHTML = `<div class="progress-dot" data-step="${i}"></div><span class="progress-label" data-step="${i}">${s}</span>`;
      stepsEl.appendChild(step);
    });

    // SVG connection paths
    const bezierPath = (c) => {
      const cx1 = (c.x1 + c.x2) / 2;
      const cx2 = (c.x1 + c.x2) / 2;
      return `M${c.x1},${c.y1} C${cx1},${c.y1} ${cx2},${c.y2} ${c.x2},${c.y2}`;
    };
    const pathLen = (c) => Math.sqrt(Math.pow(c.x2 - c.x1, 2) + Math.pow(c.y2 - c.y1, 2)) * 1.5;

    this._allConns = [];
    for (let i = 0; i < 4; i++) {
      const el = this._q(`#conn-in-${i}`);
      const d = bezierPath(CONN_IN[i]);
      const len = pathLen(CONN_IN[i]);
      el.setAttribute('d', d);
      el.style.strokeDasharray = len;
      el.style.strokeDashoffset = len;
      el.style.transition = `stroke-dashoffset 0.8s cubic-bezier(0.22,1,0.36,1) ${i * 0.12}s`;
      this._allConns.push({ el, len, phase: 2 });
    }
    for (let i = 0; i < 4; i++) {
      const el = this._q(`#conn-out-${i}`);
      const d = bezierPath(CONN_OUT[i]);
      const len = pathLen(CONN_OUT[i]);
      el.setAttribute('d', d);
      el.style.strokeDasharray = len;
      el.style.strokeDashoffset = len;
      el.style.transition = `stroke-dashoffset 0.8s cubic-bezier(0.22,1,0.36,1) ${i * 0.12}s`;
      this._allConns.push({ el, len, phase: 3 });
    }
    {
      const el = this._q('#conn-cross');
      const d = bezierPath(CONN_CROSS);
      const len = pathLen(CONN_CROSS);
      el.setAttribute('d', d);
      el.style.strokeDasharray = len;
      el.style.strokeDashoffset = len;
      el.style.transition = 'stroke-dashoffset 0.8s cubic-bezier(0.22,1,0.36,1) 0.3s';
      this._allConns.push({ el, len, phase: 4 });
    }

    this._drawMiniChart(false);
  }

  _drawMiniChart(active) {
    const pts = [6, 5.5, 6.2, 5.8, 6.5, 7, active ? 7.8 : 7.2];
    const w = 130, h = 40, pad = 4, maxV = 8.5, minV = 4.5;
    const sx = (i) => pad + (i / (pts.length - 1)) * (w - 2 * pad);
    const sy = (v) => pad + ((maxV - v) / (maxV - minV)) * (h - 2 * pad);
    const line = pts.map((v, i) => (i === 0 ? 'M' : 'L') + sx(i) + ',' + sy(v)).join(' ');
    const svg = this._q('#mini-chart');
    let html = `<path d="${line}" fill="none" stroke="${active ? '#6366f1' : '#d1d5db'}" stroke-width="2" stroke-linecap="round" style="transition:all 0.8s ease"/>`;
    if (active) {
      html += `<path d="M${sx(5)},${sy(7)} L${sx(6)},${sy(7.8)} L${sx(6)},${sy(7.2)} L${sx(5)},${sy(7)} Z" fill="#818cf8" opacity="0.2"/>`;
      html += `<circle cx="${sx(6)}" cy="${sy(7.8)}" r="3" fill="#6366f1"/>`;
      html += `<line x1="${sx(5)}" y1="${sy(7.2)}" x2="${sx(6)}" y2="${sy(7.2)}" stroke="#d1d5db" stroke-width="1" stroke-dasharray="3 2"/>`;
    }
    svg.innerHTML = html;
  }

  _clearAvatarTimers() {
    this._avatarTimers.forEach((t) => { clearTimeout(t); clearInterval(t); });
    this._avatarTimers = [];
  }

  _animateVeroAvatar(el, state) {
    if (!el) return;
    const textEl = el.querySelector('.vero-avatar-text');
    if (!textEl) return;
    const spans = textEl.querySelectorAll('span');
    if (state === 'idle') {
      textEl.style.color = '#10B981';
      spans[0].textContent = '0';
      spans[1].textContent = '0';
      const blinkL = () => {
        spans[0].textContent = '-';
        this._avatarTimers.push(setTimeout(() => { spans[0].textContent = '0'; }, 150));
        this._avatarTimers.push(setTimeout(blinkL, 700 + Math.random() * 2000));
      };
      this._avatarTimers.push(setTimeout(blinkL, 700 + Math.random() * 1000));
      const blinkR = () => {
        spans[1].textContent = '-';
        this._avatarTimers.push(setTimeout(() => { spans[1].textContent = '0'; }, 150));
        this._avatarTimers.push(setTimeout(blinkR, 1000 + Math.random() * 2500));
      };
      this._avatarTimers.push(setTimeout(blinkR, 1000 + Math.random() * 1500));
    } else if (state === 'thinking') {
      textEl.style.color = '#6EE7B7';
      const iv = setInterval(() => {
        spans[0].textContent = Math.random() > 0.5 ? '1' : '0';
        spans[1].textContent = Math.random() > 0.5 ? '1' : '0';
      }, 80);
      this._avatarTimers.push(iv);
    } else if (state === 'done') {
      textEl.style.color = '#10B981';
      spans[0].textContent = '^';
      spans[1].textContent = '^';
    }
  }

  _setPhase(p) {
    this._phase = p;
    this._clearAvatarTimers();
    const showChat = (p === 0 || p === 6);
    const showCanvas = (p >= 1 && p <= 4);
    const showChecklist = (p === 5);
    const showTagline = (p === 7);

    const chatOv = this._q('#chat-overlay');
    chatOv.classList.toggle('visible', showChat);
    const chatHuman = this._q('#chat-human');
    chatHuman.className = 'chat-human' + (p === 0 ? ' visible' : p === 6 ? ' faded' : '');
    chatHuman.style.transitionDelay = p === 0 ? '0.3s' : '0s';
    const chatThink = this._q('#chat-thinking');
    chatThink.className = 'chat-vero-thinking' + (p === 0 ? ' visible' : '');
    chatThink.style.transitionDelay = p === 0 ? '1s' : '0s';
    const chatSum = this._q('#chat-summary');
    chatSum.className = 'chat-vero-summary' + (p === 6 ? ' visible' : '');
    chatSum.style.transitionDelay = p === 6 ? '0.5s' : '0s';

    if (p === 0) this._animateVeroAvatar(this._q('#vero-avatar-chat-thinking'), 'thinking');
    if (p === 6) this._animateVeroAvatar(this._q('#vero-avatar-chat-summary'), 'done');

    this._q('#canvas-layer').classList.toggle('visible', showCanvas);

    for (let i = 0; i < 4; i++) {
      this._q('#input-' + i).classList.toggle('visible', p >= 1);
    }
    this._allConns.forEach((c) => {
      c.el.style.strokeDashoffset = (p >= c.phase) ? '0' : c.len;
    });
    const hub = this._q('#vero-hub');
    hub.classList.toggle('visible', p >= 2);
    hub.classList.toggle('pulsing', p >= 2 && p <= 4);
    this._q('#vero-hub-card').classList.toggle('active', p >= 3);
    const hubStatus = this._q('#vero-hub-status');
    hubStatus.textContent = p < 3 ? 'Analyzing...' : 'Running 4 workflows';
    hubStatus.style.color = p >= 3 ? 'var(--violet-600)' : 'var(--gray-400)';
    if (p >= 2) this._animateVeroAvatar(this._q('#vero-avatar-hub'), p >= 3 ? 'thinking' : 'idle');

    for (let i = 0; i < 4; i++) {
      const oc = this._q('#output-' + i);
      oc.classList.toggle('visible', p >= 3);
      oc.classList.toggle('done', p >= 4);
      this._q('#check-' + i).classList.toggle('visible', p >= 4);
    }
    for (let i = 0; i < 3; i++) {
      this._q('#inv-' + i).classList.toggle('done', p >= 4);
      this._q('#badge-' + i).classList.toggle('done', p >= 4);
    }
    this._q('#cleared-text').classList.toggle('visible', p >= 4);

    // Waveform — animate via scaleY (composited)
    const bars = this._q('#waveform').querySelectorAll('.waveform-bar');
    bars.forEach((bar) => {
      const active = p >= 3;
      bar.classList.toggle('active', active);
      const h = parseFloat(bar.getAttribute('data-h'));
      const scale = active ? Math.min(1, (h * 2.2) / 22) : 0.14;
      bar.style.transform = `scaleY(${scale})`;
    });
    this._q('#call-detail').classList.toggle('visible', p >= 4);

    for (let i = 0; i < 3; i++) {
      const ec = this._q('#ev-check-' + i);
      ec.classList.toggle('done', p >= 4);
      ec.classList.toggle('pending', p < 4);
      ec.style.transitionDelay = (i * 150 + 400) + 'ms';
    }
    this._q('#verdict-fill').classList.toggle('done', p >= 4);
    this._drawMiniChart(p >= 4);
    this._q('#forecast-uplift').classList.toggle('visible', p >= 4);

    this._q('#checklist-overlay').classList.toggle('visible', showChecklist);
    if (showChecklist) {
      this._animateVeroAvatar(this._q('#vero-avatar-checklist'), 'thinking');
      this._resetTodos();
      for (let i = 0; i < 4; i++) {
        ((idx) => {
          this._timers.push(setTimeout(() => this._checkTodo(idx), 600 + idx * 500));
        })(i);
      }
    }

    const tagOv = this._q('#tagline-overlay');
    tagOv.classList.toggle('visible', showTagline);
    if (showTagline) {
      const t = TAGLINES[this._cycle % TAGLINES.length];
      this._q('#tagline-content').innerHTML = `<div class="tagline-main">${t.main}</div><div class="tagline-sub">${t.sub}</div>`;
    }

    const pct = Math.min(100, (p / 7) * 100);
    this._q('#progress-fill').style.width = pct + '%';
    this._q('#progress-steps').querySelectorAll('.progress-dot').forEach((d) => {
      const si = parseInt(d.getAttribute('data-step'));
      d.className = 'progress-dot' + (p >= si ? (si <= 1 ? ' active-v' : si <= 4 ? ' active-e' : ' active-b') : '');
    });
    this._q('#progress-steps').querySelectorAll('.progress-label').forEach((l) => {
      const si = parseInt(l.getAttribute('data-step'));
      l.classList.toggle('active', p >= si);
    });
  }

  _resetTodos() {
    for (let i = 0; i < 4; i++) {
      this._q('#todo-box-' + i).className = 'check-box';
      this._q('#todo-box-' + i).innerHTML = '';
      this._q('#todo-label-' + i).className = 'check-label';
      this._q('#todo-sub-' + i).className = 'check-sub';
      this._q('#todo-sub-' + i).textContent = 'Processing...';
    }
    this._q('#checklist-footer').classList.remove('visible');
  }

  _checkTodo(idx) {
    const box = this._q('#todo-box-' + idx);
    box.className = 'check-box checked';
    box.innerHTML = '<svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>';
    this._q('#todo-label-' + idx).classList.add('checked');
    const sub = this._q('#todo-sub-' + idx);
    sub.classList.add('checked');
    sub.textContent = TODO_SUBS[idx];
    if (idx === 3) this._q('#checklist-footer').classList.add('visible');
  }

  _runCycle() {
    this._timers.forEach(clearTimeout);
    this._timers = [];
    TIMELINE.forEach((step) => {
      this._timers.push(setTimeout(() => {
        if (this._paused) return;
        if (step.p === -1) {
          this._cycle++;
          this._runCycle();
        } else {
          this._setPhase(step.p);
        }
      }, step.d));
    });
  }
}

if (!customElements.get('transformance-hero')) {
  customElements.define('transformance-hero', TransformanceHero);
}
