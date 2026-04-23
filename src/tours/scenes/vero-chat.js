/**
 * Vero Chat tour — 4 scenes.
 *
 * Story: user asks "Which customers are most at risk this quarter?",
 * watches Vero call three tools to investigate, gets a ranked answer
 * with one-line insights per customer, then follows up with "Schedule
 * calls for the top 3" — Vero confirms, offers ongoing monitoring.
 *
 * Cross-tour continuity: the ranked customer list pulls from the same
 * Acme set used in Collections, Deductions, and Predictions. The top
 * exposure (Acme Energy · €179K) ties back to those tours so visitors
 * see one consistent universe of customers.
 *
 * Conventions carried over:
 *   - click-to-advance only
 *   - solid interiors; gradient halo strictly outside the target
 *   - one climax word per tooltip in <span class="grad">…</span>
 */

import { registerTour } from '../engine/player.js';
import { ICONS, av, avSm, flag } from '../shared/icons.js';
import { COMPANIES as CO } from '../shared/companies.js';

/* Same risk dataset as Predictions for cross-tour consistency */
const RANKED = [
  { co: CO.energy,    risk: 88, amount: '€179K', insight: '2 broken PTPs · sentiment declining'         },
  { co: CO.motors,    risk: 71, amount: '€63K',  insight: 'DSO trend +9 days · last call 12d ago'       },
  { co: CO.fashion,   risk: 64, amount: '€42K',  insight: 'New CFO · payment behavior unclear'           },
  { co: CO.tech,      risk: 58, amount: '€22K',  insight: 'Subscription dispute open'                    },
  { co: CO.build,     risk: 52, amount: '€38K',  insight: 'POD discrepancy under review'                 },
];

const SHARED = `
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
`;

const veroChat = {
  id: 'vero-chat',
  tag: 'VERO CHAT · INTERACTIVE DEMO',
  coverLabel: 'See Vero Chat in 30 seconds',
  closing: {
    headline: 'Ask anything. Get answers and <span class="grad">actions</span>.',
    sub: 'Want Vero to monitor your risk landscape and brief you every morning?',
  },

  scenes: [
    /* ─────────────── Scene 1 · Ask ─────────────── */
    {
      id: 'v-01-ask',
      title: 'Step 1 · Ask',
      body: `Type any question. Vero pulls from your <span class="grad">live data</span>. No SQL, no joins, no waiting on BI.`,
      tooltipSide: 'left',
      spotlight: '#send-btn',
      advanceOn: { click: '#send-btn' },
      html: `${SHARED}
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
              <div class="vero-status">● Ready · access to ledger, comms, forecasts</div>
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
              <button class="send-btn" id="send-btn">${ICONS.arrowRight}</button>
            </div>
          </div>
        </div>
      `,
    },

    /* ─────────────── Scene 2 · Thinking ─────────────── */
    {
      id: 'v-02-thinking',
      title: 'Step 2 · Thinking',
      body: `Vero calls the right tools (aging report, credit scoring, communications history) <span class="grad">in parallel</span>.`,
      tooltipSide: 'right',
      spotlight: '#tool-stack',
      html: `${SHARED}
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
              <div class="vero-status">● Working · 3 tools in flight</div>
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
                <div class="msg-vero-bubble" style="margin-bottom: 8px; color: rgba(10,10,10,0.6); font-style: italic;">Looking at risk this quarter… let me pull a few things.</div>
                <div class="tool-stack" id="tool-stack">
                  <div class="stack-head">
                    <div class="stack-label"><span class="stack-spin"></span>Calling tools</div>
                    <span class="stack-meta">2 of 3 done · 1.4s</span>
                  </div>
                  <div class="tool done">
                    <span class="tool-icon">${ICONS.check}</span>
                    <span class="tool-name">get_aging_report()</span>
                    <span class="tool-result">1,247 invoices · €4.2M open</span>
                  </div>
                  <div class="tool done">
                    <span class="tool-icon">${ICONS.check}</span>
                    <span class="tool-name">score_credit_risk(top: 50)</span>
                    <span class="tool-result">5 above 50% slip risk</span>
                  </div>
                  <div class="tool running">
                    <span class="tool-icon">${ICONS.phone}</span>
                    <span class="tool-name">analyze_communications(window: 60d)</span>
                    <span class="tool-result">scanning 384 emails + 47 calls…</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="chat-foot">
            <div class="input-bar">
              <input type="text" placeholder="Ask Vero anything…" />
              <button class="send-btn">${ICONS.arrowRight}</button>
            </div>
          </div>
        </div>
      `,
    },

    /* ─────────────── Scene 3 · Answer + suggested action ─────────────── */
    {
      id: 'v-03-answer',
      title: 'Step 3 · Answer',
      body: `Ranked, scored, with the why. The action chips are <span class="grad">one click</span>. Not just an answer, an offer to act.`,
      tooltipSide: 'top',
      spotlight: '#schedule-calls-btn',
      advanceOn: { click: '#schedule-calls-btn' },
      html: `${SHARED}
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
              <div class="vero-status">● Ready · 3 tools done · 2.1s</div>
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
                    Five customers stand out. Total exposure is <span class="grad">€344K</span> across these accounts. Top one is <strong>${CO.energy.name}</strong>: they've broken 2 PTPs in 60 days and sentiment is shifting.
                  </div>
                  <div class="ranked-list">
                    ${RANKED.slice(0, 3).map((r, i) => {
                      const sevCls = r.risk >= 80 ? 'r-red' : r.risk >= 65 ? 'r-amber' : 'r-gray';
                      return `
                        <div class="ranked-item">
                          <span class="rank-num">${i + 1}</span>
                          ${av(r.co)}
                          <div>
                            <div class="ri-name">${r.co.name}</div>
                            <div class="ri-insight">${r.insight}</div>
                          </div>
                          <span class="ri-amt mono">${r.amount}</span>
                          <span class="ri-risk ${sevCls}">${r.risk}%</span>
                        </div>
                      `;
                    }).join('')}
                    <div style="font-size: 11px; color: rgba(10,10,10,0.5); text-align: center; padding: 4px 0;">+ 2 more (Acme Tech, Acme Build)</div>
                  </div>
                  <div class="actions-row">
                    <button class="action-chip" id="schedule-calls-btn">
                      ${ICONS.phone} Schedule calls for top 3 <span class="action-chip-arrow">→</span>
                    </button>
                    <button class="action-chip">
                      ${ICONS.mail} Email risk report to controller
                    </button>
                    <button class="action-chip">
                      ${ICONS.alert} Add to morning briefing
                    </button>
                  </div>
                  <div class="summary-line">Or ask a follow-up: "show me all communications with Acme Energy" works too.</div>
                </div>
              </div>
            </div>
          </div>
          <div class="chat-foot">
            <div class="input-bar">
              <input type="text" placeholder="Ask a follow-up…" />
              <button class="send-btn">${ICONS.arrowRight}</button>
            </div>
          </div>
        </div>
      `,
    },

    /* ─────────────── Scene 4 · Done + automate ─────────────── */
    {
      id: 'v-04-done',
      title: 'Step 4 · Done',
      body: `Three calls scheduled in <span class="grad">one click</span>. Want Vero to flag risks and brief you every morning?`,
      tooltipSide: 'top',
      spotlight: '#chat-yes',
      advanceOn: { click: '#chat-yes' },
      html: `${SHARED}
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
              <div class="vero-status">● Ready · 3 calls scheduled · 0:00:8</div>
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
                      <span class="sc-check">${ICONS.check}</span>
                      <span class="sc-title">Tomorrow · 09:00 onwards</span>
                      <span class="pill green" style="margin-left: auto;">3 calls queued</span>
                    </div>
                    <div class="sc-row">
                      ${avSm(CO.energy)}
                      <div>
                        <div class="sc-name">${CO.energy.name} · ${CO.energy.contact}</div>
                        <div class="sc-script">Light-touch · re-confirm Fri payment timing</div>
                      </div>
                      <span class="sc-when mono">09:00 · PT</span>
                      <span class="pill gray">Portuguese</span>
                    </div>
                    <div class="sc-row">
                      ${avSm(CO.motors)}
                      <div>
                        <div class="sc-name">${CO.motors.name} · ${CO.motors.contact}</div>
                        <div class="sc-script">Check on aging · DSO trend</div>
                      </div>
                      <span class="sc-when mono">09:30 · DE</span>
                      <span class="pill gray">German</span>
                    </div>
                    <div class="sc-row">
                      ${avSm(CO.fashion)}
                      <div>
                        <div class="sc-name">${CO.fashion.name} · ${CO.fashion.contact}</div>
                        <div class="sc-script">Intro to new CFO · payment cadence</div>
                      </div>
                      <span class="sc-when mono">10:00 · SE</span>
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
              <input type="text" placeholder="Ask a follow-up…" />
              <button class="send-btn">${ICONS.arrowRight}</button>
            </div>
          </div>
        </div>
      `,
    },
  ],
};

registerTour(veroChat);
