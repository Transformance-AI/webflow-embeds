/**
 * Collections tour — 6 scenes.
 *
 * Story: visitor sees an overdue worklist with 8 Acme customers, clicks
 * "Run batch", watches Vero work them all in parallel (calls in their
 * language, emails in yours), then walks through three outcomes — a
 * captured PTP, a voicemail fallback, and a trio of escalations. Closes
 * with a Vero prompt to schedule this every morning.
 *
 * Conventions carried over from Cash App:
 *   - click-to-advance only (no auto-timers)
 *   - every highlighted card has a solid interior; gradient halo lives
 *     strictly outside the element (box-shadow + ::before border)
 *   - one climax word per tooltip wrapped in <span class="grad">…</span>
 *
 * Shares companies + icons with every other tour via src/tours/shared/.
 */

import { registerTour } from '../engine/player.js';
import { ICONS, av, avSm, flag } from '../shared/icons.js';
import { COMPANIES as CO } from '../shared/companies.js';

/** Map "days overdue" to a severity class used for the pill color. */
function severityFor(days) {
  if (days >= 36) return 'red';
  if (days >= 16) return 'amber';
  return 'green';
}

/* ─────────────────────────────────────────────────────────────────────
   Worklist dataset — the same 8 rows feature across scenes 1–5.
   ───────────────────────────────────────────────────────────────── */
const WORKLIST = [
  { co: CO.energy,    balance: '€179K', days: 45, last: 'Last Fri'   },
  { co: CO.logistics, balance: '€92K',  days: 18, last: 'Never'      },
  { co: CO.pharma,    balance: '€47K',  days: 22, last: 'Email sent' },
  { co: CO.retail,    balance: '€18K',  days: 60, last: '3d ago'     },
  { co: CO.tech,      balance: '€22K',  days: 35, last: 'Call Thu'   },
  { co: CO.food,      balance: '€14K',  days: 28, last: '1w ago'     },
  { co: CO.motors,    balance: '€63K',  days: 12, last: 'Never'      },
  { co: CO.build,     balance: '€38K',  days: 40, last: 'Email sent' },
];
const TOTAL_BALANCE = '€475K';
const COUNT = WORKLIST.length;

/* ─────────────────────────────────────────────────────────────────────
   Shared styles for all Collections scenes — scoped under .scene-c-*
   so they never leak between scenes.
   ───────────────────────────────────────────────────────────────── */
const SHARED = `
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

    /* Worklist table — the common layout across scenes 1, 2, 5 */
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
`;

/* ─────────────────────────────────────────────────────────────────────
   Helpers to render a single worklist row in different modes.
   ───────────────────────────────────────────────────────────────── */
function row(entry, opts = {}) {
  const { status = '', dim = false, highlight = false, id = '' } = opts;
  const cls = ['wl-row'];
  if (dim) cls.push('dim');
  if (highlight) cls.push('highlight');
  const statusHtml = status || `<span style="font-size: 11px; color: rgba(10,10,10,0.5);">${entry.last}</span>`;
  const sev = severityFor(entry.days);
  return `
    <div class="${cls.join(' ')}"${id ? ` id="${id}"` : ''}>
      ${av(entry.co)}
      <div>
        <div class="wl-co-name">${entry.co.name}</div>
        <div class="wl-co-sector">${entry.co.sector}</div>
      </div>
      <span class="wl-flag" title="${entry.co.country}">${flag(entry.co.country)}</span>
      <span class="wl-bal mono">${entry.balance}</span>
      <span class="wl-days"><span class="pill ${sev}">${entry.days}d</span></span>
      <span class="wl-status">${statusHtml}</span>
    </div>
  `;
}

const collections = {
  id: 'collections',
  tag: 'COLLECTIONS · INTERACTIVE DEMO',
  coverLabel: 'See collections in 30 seconds',
  closing: {
    headline: '8 PTPs captured. 3 escalations routed. <span class="grad">Hours back.</span>',
    sub: 'Want Vero to run your morning queue, every morning?',
  },

  scenes: [
    /* ─────────────── Scene 1 · Worklist ─────────────── */
    {
      id: 'c-01-worklist',
      title: 'Step 1 · Worklist',
      body: `${COUNT} accounts overdue today. Vero works them all at once: calls in <span class="grad">their language</span>, emails in your tone.`,
      tooltipSide: 'left',
      spotlight: '#run-batch',
      advanceOn: { click: '#run-batch' },
      html: `${SHARED}
        <div class="head">
          <div>
            <h2>Overdue worklist</h2>
            <div class="head-sub">${COUNT} accounts · ${TOTAL_BALANCE} past due · updated 2 min ago</div>
          </div>
          <button class="btn" id="run-batch">
            Run batch (${COUNT}) →
          </button>
        </div>
        <div class="card">
          <div class="card-head">
            <div>
              <div class="card-title">Accounts overdue</div>
              <div class="card-meta">Sorted by days overdue · descending</div>
            </div>
            <span style="font-size: 11px; color: rgba(10,10,10,0.5);">Last touch · next action</span>
          </div>
          ${WORKLIST.map(e => row(e)).join('')}
        </div>
      `,
    },

    /* ─────────────── Scene 2 · Batch running ─────────────── */
    {
      id: 'c-02-batch',
      title: 'Step 2 · Batch running',
      body: `One queue, ${COUNT} parallel workstreams. Vero follows your <span class="grad">playbook</span> for each: channel, language, escalation rules.`,
      tooltipSide: 'left',
      spotlight: '#wl-running',
      html: `${SHARED}
        <style>
          .scene-c-02-batch .runner-bar { background: #fff; border: 1px solid rgba(130,89,247,0.3); border-radius: 10px; padding: 10px 16px; margin-bottom: 12px; display: flex; align-items: center; gap: 14px; box-shadow: 0 1px 2px rgba(0,0,0,0.03); }
          .scene-c-02-batch .runner-spin { width: 14px; height: 14px; border-radius: 50%; border: 2px solid rgba(130,89,247,0.2); border-top-color: #8259f7; animation: spin 0.9s linear infinite; }
          @keyframes spin { 100% { transform: rotate(360deg); } }
          .scene-c-02-batch .runner-label { font-weight: 500; font-size: 12px; }
          .scene-c-02-batch .runner-meta { color: rgba(10,10,10,0.5); font-size: 11px; }
          .scene-c-02-batch .runner-progress { flex: 1; height: 3px; background: rgba(10,10,10,0.06); border-radius: 2px; overflow: hidden; }
          .scene-c-02-batch .runner-bar-fill { height: 100%; background: linear-gradient(90deg, #8259f7, #ff5043); animation: batchfill 4s ease-out forwards; }
          @keyframes batchfill { 0% { width: 0; } 100% { width: 100%; } }

          /* Per-row status pills — each row's pill animates through 2 states with staggered delay */
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
            <div class="head-sub">${COUNT} accounts in flight · calls in native language, emails localized</div>
          </div>
          <span class="pill violet">● Live</span>
        </div>
        <div class="runner-bar">
          <div class="runner-spin"></div>
          <div>
            <div class="runner-label">Vero is working the queue</div>
            <div class="runner-meta">Playbook v3 · 5 languages active</div>
          </div>
          <div class="runner-progress"><div class="runner-bar-fill"></div></div>
          <span class="runner-meta mono">00:03.7</span>
        </div>
        <div class="card" id="wl-running">
          ${WORKLIST.map((e, i) => {
            // Outcomes: some PTP, some voicemail→email, some escalated
            const outcomes = [
              '<span class="pill green"><span>✓</span> PTP €179K</span>',        // 0 energy
              '<span class="pill blue"><span>✉</span> Email sent</span>',         // 1 logistics (voicemail→email)
              '<span class="pill amber"><span>⚠</span> Escalated</span>',         // 2 pharma
              '<span class="pill amber"><span>⚠</span> Escalated</span>',         // 3 retail
              '<span class="pill amber"><span>⚠</span> Escalated</span>',         // 4 tech
              '<span class="pill green"><span>✓</span> PTP €14K</span>',          // 5 food
              '<span class="pill green"><span>✓</span> Paid today</span>',        // 6 motors
              '<span class="pill blue"><span>✉</span> Reminder sent</span>',       // 7 build
            ][i];
            const channel = i === 1 || i === 7 ? 'Emailing' : 'Calling';
            const statusHtml = `
              <div class="p-stages">
                <span class="p-stage s1"><span class="pill gray">● Queued</span></span>
                <span class="p-stage s2"><span class="pill violet">● ${channel}</span></span>
                <span class="p-stage final">${outcomes}</span>
              </div>
            `;
            return row(e, { status: statusHtml }).replace(
              '<div class="wl-row',
              `<div data-idx="${i}" class="wl-row`
            );
          }).join('')}
        </div>
      `,
    },

    /* ─────────────── Scene 3 · PTP captured ─────────────── */
    {
      id: 'c-03-ptp',
      title: 'Step 3 · Promise to pay',
      body: `Maria at ${CO.energy.name} committed <span class="grad">€179K</span> by Friday. Logged, with the full transcript attached.`,
      tooltipSide: 'left',
      spotlight: '#ptp-card',
      html: `${SHARED}
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
          <div>
            <h2>${CO.energy.name} · ${CO.energy.contact}</h2>
            <div class="head-sub">${CO.energy.sector} · ${CO.energy.country} · 45 days overdue</div>
          </div>
          <span class="pill green">Resolved · autonomous</span>
        </div>
        <div class="wrap">
          <div class="card">
            <div class="card-head">
              <div>
                <div class="card-title">Worklist</div>
                <div class="card-meta">${COUNT} accounts · 1 focused</div>
              </div>
            </div>
            ${WORKLIST.map((e, i) => row(e, { dim: i !== 0, status: i === 0 ? '<span class="pill green">PTP €179K</span>' : '' })).join('')}
          </div>
          <div id="ptp-card">
            <div class="call-head">
              ${av(CO.energy)}
              <div>
                <div class="call-name">${CO.energy.contact}</div>
                <div class="call-sub">AP · ${CO.energy.name}</div>
              </div>
            </div>
            <div class="call-meta-row">
              <span class="pill violet">${ICONS.phone} AI call · 3:42</span>
              <span class="pill green">Positive sentiment</span>
              <span class="pill gray">🇵🇹 Portuguese</span>
            </div>
            <div class="transcript">
              "…Posso transferir €179,000 até sexta-feira. Referência da fatura 0019, como sempre."
              <div style="font-size: 10px; color: rgba(10,10,10,0.45); font-style: normal; margin-top: 6px;">Auto-translated: "I can wire €179,000 by Friday. Invoice reference 0019, as always."</div>
            </div>
            <div class="outcome">
              <div>
                <div class="outcome-label">${ICONS.check} Promise to pay logged</div>
                <div class="outcome-date">Reminder scheduled for Thu, 24 Apr</div>
              </div>
              <div style="text-align: right;">
                <div class="outcome-amt">€179,000</div>
                <div class="outcome-date">Due Fri 25 Apr</div>
              </div>
            </div>
          </div>
        </div>
      `,
    },

    /* ─────────────── Scene 4 · Voicemail fallback ─────────────── */
    {
      id: 'c-04-fallback',
      title: 'Step 4 · Fallback',
      body: `No answer? Vero switches to email, in their language, <span class="grad">per your rules</span>, no prompt required.`,
      tooltipSide: 'left',
      spotlight: '#fallback-card',
      html: `${SHARED}
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
          <div>
            <h2>${CO.logistics.name} · ${CO.logistics.contact}</h2>
            <div class="head-sub">${CO.logistics.sector} · ${CO.logistics.country} · 18 days overdue</div>
          </div>
          <span class="pill blue">Reminder sent · autonomous</span>
        </div>
        <div class="wrap">
          <div class="card">
            <div class="card-head">
              <div>
                <div class="card-title">Worklist</div>
                <div class="card-meta">${COUNT} accounts · 1 focused</div>
              </div>
            </div>
            ${WORKLIST.map((e, i) => row(e, { dim: i !== 1, status: i === 1 ? '<span class="pill blue">Email sent</span>' : '' })).join('')}
          </div>
          <div id="fallback-card">
            <div class="call-head">
              ${av(CO.logistics)}
              <div>
                <div class="call-name">${CO.logistics.contact}</div>
                <div class="call-sub">Finance · ${CO.logistics.name}</div>
              </div>
            </div>
            <div class="flow">
              <div class="flow-step failed">
                <div class="icon">${ICONS.phone}</div>
                <div class="label">AI call</div>
                <div class="sub">No answer · 2 tries</div>
              </div>
              <div class="flow-arrow">${ICONS.arrowRight}</div>
              <div class="flow-step active">
                <div class="icon">${ICONS.mail}</div>
                <div class="label">Email</div>
                <div class="sub">Sent · 08:42 GMT</div>
              </div>
            </div>
            <div class="rule-box">
              <div class="rule-label">Escalation ladder</div>
              <div class="rule-chain">Voicemail → email (EN template) → call tomorrow 09:00 → escalate +1 level</div>
            </div>
          </div>
        </div>
      `,
    },

    /* ─────────────── Scene 5 · Escalations ─────────────── */
    {
      id: 'c-05-escalation',
      title: 'Step 5 · Escalation',
      body: `Three accounts Vero shouldn't auto-resolve. Each lands in <span class="grad">your queue</span> with the full evidence pack.`,
      tooltipSide: 'left',
      spotlight: '#esc-review-btn',
      advanceOn: { click: '#esc-review-btn' },
      html: `${SHARED}
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
            <div class="head-sub">${COUNT} accounts processed · 3 need your call</div>
          </div>
          <span class="pill red">${ICONS.alert} Action required</span>
        </div>
        <div id="escalation-bar">
          <div class="alert-icon">${ICONS.alert}</div>
          <div class="alert-text">
            <div class="alert-title">3 disputes detected · needs you</div>
            <div class="alert-sub">Vero packaged the full evidence per case. Review and respond at your own pace.</div>
          </div>
          <button class="btn" id="esc-review-btn">Review queue →</button>
        </div>
        <div class="card">
          ${WORKLIST.map((e, i) => {
            const isEsc = i >= 2 && i <= 4;
            if (!isEsc) {
              const stat = i === 0 ? '<span class="pill green">PTP €179K</span>'
                        : i === 1 ? '<span class="pill blue">Email sent</span>'
                        : i === 5 ? '<span class="pill green">PTP €14K</span>'
                        : i === 6 ? '<span class="pill green">Paid today</span>'
                        : '<span class="pill blue">Reminder sent</span>';
              return row(e, { dim: true, status: stat });
            }
            const reasons = {
              2: 'Price disagreement on PO 4421',
              3: 'Short-pay €4,230 · trade promo?',
              4: 'Invoice disputed · subscription cadence',
            };
            const statusHtml = `
              <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 2px;">
                <span class="pill amber">⚠ Escalated</span>
                <span class="esc-reason">${reasons[i]}</span>
              </div>
            `;
            return row(e, { status: statusHtml }).replace('class="wl-row"', 'class="wl-row esc"');
          }).join('')}
        </div>
      `,
    },

    /* ─────────────── Scene 6 · Done + automate ─────────────── */
    {
      id: 'c-06-done',
      title: 'Step 6 · Done',
      body: `Eight minutes of Vero. Hours saved, <span class="grad">every morning</span>, if you want.`,
      tooltipSide: 'right',
      spotlight: '#coll-vero-card',
      advanceOn: { click: '#coll-yes' },
      html: `${SHARED}
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
              Complete · 8 min
            </div>
          </div>
          <div class="summary-grid">
            <div class="summary-stat"><div class="v mono">3</div><div class="l">PTPs captured</div></div>
            <div class="summary-stat"><div class="v mono">€372K</div><div class="l">Cash secured</div></div>
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
      `,
    },
  ],
};

registerTour(collections);
