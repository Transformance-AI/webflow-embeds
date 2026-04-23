/**
 * Vero Chat — v2, 5 scenes.
 *
 * Positions the Vero agent as a team-lead who already worked the
 * night shift. Narrative: Vero shows its work, walks the user
 * through each bucket, and earns the right to run itself daily.
 *
 * Tour story:
 *   1. Overnight recap  — 4-section summary, "Review & approve" CTA.
 *   2. Approve JEs      — 2 cash-app edge cases with ledger lines.
 *   3. Approve calls    — 3 collections with script + language.
 *   4. Approve flag     — 1 deduction Vero couldn't classify.
 *   5. Run as a task    — scorecard + "schedule as a daily task".
 *
 * Copy direction: no em dashes, short single-line CTAs, focus on
 * "the agent does work" rather than "the briefing describes work".
 */

import { registerTour } from '../engine/player.js';
import { ICONS, av, avSm, flag } from '../shared/icons.js';
import { COMPANIES as CO } from '../shared/companies.js';

const SHARED = `
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
`;

const veroChatV2 = {
  id: 'vero-chat-v2',
  tag: 'VERO AGENT · INTERACTIVE DEMO',
  coverLabel: 'Meet Vero, your AR team lead',
  closing: {
    headline: 'Reviewed, approved, fired. <span class="grad">One agent</span> running your AR.',
    sub: 'This is what your mornings could look like.',
  },

  scenes: [
    /* ═════════════════════ Scene 1 · Overnight recap ═════════════════════ */
    {
      id: 'vb-01-recap',
      title: 'Step 1 · Overnight recap',
      body: `Vero already handled the obvious work. Below is what's left, <span class="grad">waiting on you</span>.`,
      tooltipSide: 'top',
      spotlight: '#vb-start-review',
      advanceOn: { click: '#vb-start-review' },
      html: `${SHARED}
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
              <div class="vero-status">● Recap ready · composed 0:00:12 ago</div>
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
                    <span class="work-chip c1">${ICONS.check} 12 PDFs extracted</span>
                    <span class="work-chip c2">${ICONS.check} 10 invoices matched</span>
                    <span class="work-chip c3">${ICONS.check} 8 JEs posted</span>
                    <span class="work-chip c4">${ICONS.check} 5 deductions resolved</span>
                    <span class="work-meta">14h 28m unattended</span>
                  </div>
                  <div class="brief-intro">
                    <strong>Good morning, Sarah.</strong> <span class="num-green">€847K cleared</span> overnight. <span class="num-amber">3 buckets</span> couldn't go autonomous without your eyes. Q2 forecast upgraded <span class="num-green">+€1.2M</span>.
                  </div>
                  <div class="sections">
                    <div class="section cashapp">
                      <span class="sec-icon">${ICONS.check}</span>
                      <div>
                        <div class="sec-head">
                          <div class="sec-title">Cash application</div>
                          <span class="sec-badge">2 need your review</span>
                        </div>
                        <div class="sec-body"><span class="num-green">€847K cleared</span> on 8 auto-posted JEs. Two edge cases drafted and waiting.</div>
                      </div>
                    </div>
                    <div class="section collections">
                      <span class="sec-icon">${ICONS.phone}</span>
                      <div>
                        <div class="sec-head">
                          <div class="sec-title">Collections · today</div>
                          <span class="sec-badge">3 calls to approve</span>
                        </div>
                        <div class="sec-body">Top 3 priorities I'd work. <span class="num-indigo">€279K recovery</span> projected.</div>
                      </div>
                    </div>
                    <div class="section deductions">
                      <span class="sec-icon">${ICONS.alert}</span>
                      <div>
                        <div class="sec-head">
                          <div class="sec-title">Deductions</div>
                          <span class="sec-badge">1 needs you</span>
                        </div>
                        <div class="sec-body"><span class="num-green">5 resolved</span> autonomously. One €450 portion I couldn't explain, packaged for you.</div>
                      </div>
                    </div>
                    <div class="section forecast">
                      <span class="sec-icon">${ICONS.trendingUp}</span>
                      <div>
                        <div class="sec-head">
                          <div class="sec-title">Q2 forecast · impact</div>
                          <span class="sec-badge">+€1.2M WoW</span>
                        </div>
                        <div class="sec-body">Upgraded to <span class="num-violet">€14.6M</span>. Driven by 8 PTP captures, lower DSO on 5 accounts.</div>
                      </div>
                    </div>
                  </div>
                  <div class="kpi-row">
                    <div class="kpi"><strong>6</strong> items for you</div>
                    <div class="kpi"><strong>€279K</strong> to recover</div>
                    <div class="kpi"><strong>~2h</strong> time back</div>
                  </div>
                  <div class="cta-bar">
                    <div>
                      <div class="cta-label">Walk me through each bucket, one approval at a time</div>
                      <div class="cta-sub">2 JEs · 3 calls · 1 deduction · nothing fires until you say yes</div>
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
              <button class="send-btn">${ICONS.arrowRight}</button>
            </div>
          </div>
        </div>
      `,
    },

    /* ═════════════════════ Scene 2 · Approve JEs ═════════════════════ */
    {
      id: 'vb-02-jes',
      title: 'Step 2 · Cash app · 2 JEs',
      body: `Every ledger line is visible. No black box, <span class="grad">no surprises</span>.`,
      tooltipSide: 'top',
      spotlight: '#vb-approve-jes',
      advanceOn: { click: '#vb-approve-jes' },
      html: `${SHARED}
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
              <div class="vero-status">● Reviewing · step 1 of 3 · cash application</div>
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
                    <span class="sub-head-icon">${ICONS.check}</span>
                    <div class="sub-head-text">
                      <div class="sub-head-title">Cash application · 2 edge cases for your approval</div>
                      <div class="sub-head-meta">Already cleared overnight: 8 JEs, €847K. These 2 didn't hit auto-post.</div>
                    </div>
                    <span class="pill green">Balanced</span>
                  </div>
                  <div class="je-list">
                    <div class="je">
                      <div class="je-head">
                        ${avSm(CO.industries)}
                        <div class="je-meta">
                          <div class="je-title">JE-2024-04-22-A-0042 · ${CO.industries.name}</div>
                          <div class="je-sub">Wire €530,000 · match confidence 87% · 1 line needs split between INV-0021 and INV-0023</div>
                        </div>
                        <span class="pill amber">87% · below threshold</span>
                      </div>
                      <div class="je-reason">
                        ${ICONS.alert}
                        <span><strong>Why you:</strong> short €230 between invoices, fits trade promo pattern, but my threshold is 95%. Your call.</span>
                      </div>
                      <table class="je-table">
                        <thead><tr><th>Account</th><th>Description</th><th class="num">Debit</th><th class="num">Credit</th></tr></thead>
                        <tbody>
                          <tr><td>11000 · Bank Deutsche</td><td>Wire receipt</td><td class="num">530,000.00</td><td></td></tr>
                          <tr><td>12010 · AR Acme Industries</td><td>Clear INV-0019</td><td></td><td class="num">179,000.00</td></tr>
                          <tr><td>12010 · AR Acme Industries</td><td>Clear INV-0020</td><td></td><td class="num">211,000.00</td></tr>
                          <tr><td>12010 · AR Acme Industries</td><td>Clear INV-0021 plus net</td><td></td><td class="num">140,000.00</td></tr>
                        </tbody>
                      </table>
                      <div class="je-total">
                        <span style="color: rgba(10,10,10,0.55);">Totals</span>
                        <span><span style="color: rgba(10,10,10,0.55); margin-right: 12px;">DR <span class="mono" style="color: #0a0a0a;">530,000</span></span><span style="color: rgba(10,10,10,0.55);">CR <span class="mono" style="color: #0a0a0a;">530,000</span></span> · <span class="balanced">balanced</span></span>
                      </div>
                    </div>
                    <div class="je">
                      <div class="je-head">
                        ${avSm(CO.pharma)}
                        <div class="je-meta">
                          <div class="je-title">JE-2024-04-22-A-0043 · ${CO.pharma.name}</div>
                          <div class="je-sub">Wire €92,400 · match confidence 81% · FX rate EUR/USD locked at 1.084</div>
                        </div>
                        <span class="pill amber">81% · below threshold</span>
                      </div>
                      <div class="je-reason">
                        ${ICONS.alert}
                        <span><strong>Why you:</strong> cross-currency conversion. Want you to confirm the rate against treasury lock before posting.</span>
                      </div>
                      <table class="je-table">
                        <thead><tr><th>Account</th><th>Description</th><th class="num">Debit</th><th class="num">Credit</th></tr></thead>
                        <tbody>
                          <tr><td>11020 · Bank HSBC USD</td><td>Wire receipt $100,000 at 1.084</td><td class="num">92,252.58</td><td></td></tr>
                          <tr><td>11021 · FX clearing</td><td>Lock variance</td><td class="num">147.42</td><td></td></tr>
                          <tr><td>12060 · AR Acme Pharma</td><td>Clear INV-P-0055</td><td></td><td class="num">92,400.00</td></tr>
                        </tbody>
                      </table>
                      <div class="je-total">
                        <span style="color: rgba(10,10,10,0.55);">Totals</span>
                        <span><span style="color: rgba(10,10,10,0.55); margin-right: 12px;">DR <span class="mono" style="color: #0a0a0a;">92,400</span></span><span style="color: rgba(10,10,10,0.55);">CR <span class="mono" style="color: #0a0a0a;">92,400</span></span> · <span class="balanced">balanced</span></span>
                      </div>
                    </div>
                  </div>
                  <div class="cta-bar">
                    <div>
                      <div class="cta-label">Post both as drafted, or edit either one first</div>
                      <div class="cta-sub">Posts to SAP instantly · audit trail preserved · reversible from the journal list</div>
                    </div>
                    <button class="btn" id="vb-approve-jes">${ICONS.check} Approve both JEs</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="chat-foot">
            <div class="input-bar">
              <input type="text" placeholder="Or ask me to edit either one..." />
              <button class="send-btn">${ICONS.arrowRight}</button>
            </div>
          </div>
        </div>
      `,
    },

    /* ═════════════════════ Scene 3 · Approve calls ═════════════════════ */
    {
      id: 'vb-03-calls',
      title: 'Step 3 · Collections · 3 calls',
      body: `Per-customer script, language and time. Vero waits for your <span class="grad">green light</span>.`,
      tooltipSide: 'top',
      spotlight: '#vb-approve-calls',
      advanceOn: { click: '#vb-approve-calls' },
      html: `${SHARED}
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
              <div class="vero-status">● Reviewing · step 2 of 3 · collections</div>
            </div>
            <span class="pill indigo" style="margin-left: auto;">3 of 6 items</span>
          </div>
          <div class="chat-body">
            <div class="msg-vero">
              <div class="vero-av"><span class="vero-av-eyes"><span class="vero-av-eye">0</span><span class="vero-av-eye vero-av-eye-r">0</span></span></div>
              <div class="msg-vero-content">
                <div class="msg-vero-bubble">
                  <div style="font-size: 13px; margin-bottom: 10px;">Three priority collections today. Projected recovery <span class="num-green">€279K</span>. Each one has the customer, language, script I'd use, and timing. Approve any or all.</div>
                  <div class="sub-head">
                    <span class="sub-head-icon">${ICONS.phone}</span>
                    <div class="sub-head-text">
                      <div class="sub-head-title">Collections queue · 3 calls ready</div>
                      <div class="sub-head-meta">Light-touch, per your playbook, fallback to email on voicemail</div>
                    </div>
                    <span class="pill indigo">€279K projected</span>
                  </div>
                  <div class="call-list">
                    <div class="call">
                      ${av(CO.energy)}
                      <div class="call-meta">
                        <div class="call-name">${CO.energy.contact} · ${CO.energy.name} <span class="call-amt">€179K</span></div>
                        <div class="call-why"><span class="tag">Why</span>Verify Friday PTP. Has broken 2 PTPs in 60d, sentiment declined last 3 calls.</div>
                        <div class="call-script">"Bom dia Maria, ligação rápida, só para confirmar a transferência de €179.000 para sexta-feira, como combinado. Tudo em ordem do vosso lado?"</div>
                      </div>
                      <div class="call-right">
                        <span class="call-time">09:00 · PT</span>
                        <span class="pill gray">Portuguese</span>
                        <span class="pill green">Light-touch</span>
                      </div>
                    </div>
                    <div class="call">
                      ${av(CO.motors)}
                      <div class="call-meta">
                        <div class="call-name">${CO.motors.contact} · ${CO.motors.name} <span class="call-amt">€63K</span></div>
                        <div class="call-why"><span class="tag">Why</span>DSO drift, 9 days over Q1 average, no response to last email 12 days ago.</div>
                        <div class="call-script">"Guten Morgen Frau Becker, Anruf zu Ihrer offenen Rechnung INV-1183 über €63.000. Können wir über den Zahlungseingang sprechen?"</div>
                      </div>
                      <div class="call-right">
                        <span class="call-time">09:30 · DE</span>
                        <span class="pill gray">German</span>
                        <span class="pill amber">Check-in</span>
                      </div>
                    </div>
                    <div class="call">
                      ${av(CO.fashion)}
                      <div class="call-meta">
                        <div class="call-name">${CO.fashion.contact} · ${CO.fashion.name} <span class="call-amt">€37K</span></div>
                        <div class="call-why"><span class="tag">Why</span>New CFO joined 30d ago. No payment history yet, intro call to set cadence.</div>
                        <div class="call-script">"Hi Lina, quick call to welcome you to the role and understand your payment cycle. We have INV-0876 outstanding for €37,000, non-urgent, but wanted to connect."</div>
                      </div>
                      <div class="call-right">
                        <span class="call-time">10:00 · SE</span>
                        <span class="pill gray">English</span>
                        <span class="pill blue">Intro</span>
                      </div>
                    </div>
                  </div>
                  <div class="projection-row">
                    <span class="dot"></span>
                    <span>Historical hit-rate on calls like these: <strong>72%</strong>. Projected cash unlocked this week <strong>€201K</strong> (weighted).</span>
                  </div>
                  <div class="cta-bar">
                    <div>
                      <div class="cta-label">Schedule all three, or decline any I've misjudged</div>
                      <div class="cta-sub">SIP trunk · transcript + sentiment captured per call · written summary in your inbox after</div>
                    </div>
                    <button class="btn" id="vb-approve-calls">${ICONS.check} Approve 3 calls</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="chat-foot">
            <div class="input-bar">
              <input type="text" placeholder="Or say &lsquo;skip the Motors call&rsquo;..." />
              <button class="send-btn">${ICONS.arrowRight}</button>
            </div>
          </div>
        </div>
      `,
    },

    /* ═════════════════════ Scene 4 · Flag deduction ═════════════════════ */
    {
      id: 'vb-04-flag',
      title: 'Step 4 · Deductions · 1 flag',
      body: `Vero settled 5 itself. This one hit the <span class="grad">guardrail</span>, packaged for you.`,
      tooltipSide: 'top',
      spotlight: '#vb-send-to-queue',
      advanceOn: { click: '#vb-send-to-queue' },
      html: `${SHARED}
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
              <div class="vero-status">● Reviewing · step 3 of 3 · deductions</div>
            </div>
            <span class="pill amber" style="margin-left: auto;">6 of 6 items</span>
          </div>
          <div class="chat-body">
            <div class="msg-vero">
              <div class="vero-av"><span class="vero-av-eyes"><span class="vero-av-eye">0</span><span class="vero-av-eye vero-av-eye-r">0</span></span></div>
              <div class="msg-vero-content">
                <div class="msg-vero-bubble">
                  <div style="font-size: 13px; margin-bottom: 10px;">I cleared <span class="num-green">5 short-pays</span> overnight. One €450 portion I couldn't explain against your rules, so I stopped and packaged it:</div>
                  <div class="sub-head">
                    <span class="sub-head-icon">${ICONS.alert}</span>
                    <div class="sub-head-text">
                      <div class="sub-head-title">Deductions · 1 case needs your call</div>
                      <div class="sub-head-meta">5 others auto-settled to trade promo reserve, no action needed</div>
                    </div>
                    <span class="pill amber">€450 unexplained</span>
                  </div>
                  <div class="case-card">
                    <div class="case-head">
                      ${av(CO.retail)}
                      <div>
                        <div class="case-title">${CO.retail.name} · short-pay investigation</div>
                        <div class="case-sub">INV-3482 · expected €92,000 · received €87,770 · short €4,230</div>
                      </div>
                      <span class="pill amber">€450 flagged</span>
                    </div>
                    <div class="case-body">
                      <div class="case-col">
                        <div class="c-label">I already resolved</div>
                        <div class="already-list">
                          <div class="already-item">
                            <span class="check-dot">${ICONS.check}</span>
                            <span>€3,780 matched to trade promo TP-041 (89%)</span>
                            <span class="amt">€3,780</span>
                          </div>
                          <div class="already-item">
                            <span class="check-dot">${ICONS.check}</span>
                            <span>Evidence pack assembled · 5 docs linked</span>
                          </div>
                          <div class="already-item">
                            <span class="check-dot">${ICONS.check}</span>
                            <span>GL entry drafted · ready on approval</span>
                          </div>
                        </div>
                      </div>
                      <div class="case-col">
                        <div class="c-label">Why I stopped · €450</div>
                        <div class="flag-reason">
                          <strong>No promo, PO line, or POD note</strong> I could match to this €450 portion. Could be a one-off discount agreed off-system, a missed trade allowance, or a short-pay error.
                          <div class="vero-tried">Cross-referenced: 1,247 historical cases · TP-041 rate card · ${CO.retail.contact}'s last 3 emails. No matches above 62%.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="cta-bar">
                    <div>
                      <div class="cta-label">Send to your dispute queue with evidence pack attached</div>
                      <div class="cta-sub">€3,780 auto-settlement waits for your approval in the Deductions module</div>
                    </div>
                    <button class="btn" id="vb-send-to-queue">${ICONS.arrowRight} Send to my queue</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="chat-foot">
            <div class="input-bar">
              <input type="text" placeholder="Or tell me how to resolve it..." />
              <button class="send-btn">${ICONS.arrowRight}</button>
            </div>
          </div>
        </div>
      `,
    },

    /* ═════════════════════ Scene 5 · Schedule as a task ═════════════════════ */
    {
      id: 'vb-05-schedule',
      title: 'Step 5 · Schedule as a task',
      body: `Six items in three clicks. Let Vero run this morning <span class="grad">every morning</span>.`,
      tooltipSide: 'top',
      spotlight: '#vb-schedule',
      advanceOn: { click: '#vb-schedule' },
      html: `${SHARED}
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
              <div class="vero-status">● Queue approved · all actions fired · 0:00:08</div>
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
                      <span class="run-check">${ICONS.check}</span>
                      <span class="run-title">This morning · executed</span>
                      <span class="pill green" style="margin-left: auto;">0:00:08</span>
                    </div>
                    <div class="run-stats">
                      <div class="run-stat">
                        <div class="l">JEs posted</div>
                        <div class="v mono" style="color: #019273;">2</div>
                        <div class="d">€622K cleared</div>
                      </div>
                      <div class="run-stat">
                        <div class="l">Calls firing</div>
                        <div class="v mono" style="color: #3730a3;">3</div>
                        <div class="d">€279K projected</div>
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
                      <div class="task-row">${ICONS.clock} <span class="k">When</span> <span class="v">Daily, 08:00 local</span></div>
                      <div class="task-row">${ICONS.shield} <span class="k">Auto-fire at</span> <span class="v">≥ 95% confidence per item</span></div>
                      <div class="task-row">${ICONS.alert} <span class="k">Escalate</span> <span class="v">exceptions and flags to you</span></div>
                    </div>
                    <div class="insight-actions">
                      <button class="btn" id="vb-schedule">${ICONS.clock} Schedule as daily task</button>
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
              <button class="send-btn">${ICONS.arrowRight}</button>
            </div>
          </div>
        </div>
      `,
    },
  ],
};

registerTour(veroChatV2);
