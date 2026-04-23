/**
 * Cash App tour — 8-scene walk through cash application from inbox to
 * scheduled-task automation. Each scene is self-contained: its HTML carries
 * its own scoped <style> block, which is discarded when the next scene
 * replaces this scene's innerHTML.
 *
 * Brand v2 tokens used inline:
 *   canvas #f6f4f1 · ink #0a0a0a · emerald #019273 · violet #8259f7
 *   amber #ef8901 · indigo #4e55e1 · gradient on one climax word per scene
 */

import { registerTour } from '../engine/player.js';
import { ICONS, av } from '../shared/icons.js';
import { COMPANIES as CO } from '../shared/companies.js';

const SHARED_STYLES = `
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
`;

const cashApp = {
  id: 'cash-app',
  tag: 'CASH APPLICATION · INTERACTIVE DEMO',
  coverLabel: 'See cash application in 30 seconds',
  closing: {
    headline: 'That\'s 90% of cash application, <span class="grad">automated</span>.',
    sub: 'Want to see it on your own data?',
  },

  scenes: [
    /* ───────── 1. Inbox ───────── */
    {
      id: '01-inbox',
      title: 'Step 1 · Inbox',
      body: 'Three remittances arrived overnight. Vero already started on the first.',
      tooltipSide: 'right',
      spotlight: '#row-hero',
      advanceOn: { click: '#row-hero' },
      html: `${SHARED_STYLES}
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
          <span class="header-tag">3 unread · today</span>
        </div>
        <div class="inbox">
          <div class="email" id="row-hero">
            ${av(CO.industries)}
            <div class="email-meta">
              <div class="email-from">${CO.industries.name} · Accounts Payable</div>
              <div class="email-subj">Remittance advice — Wire transfer €530,000 — 3 invoices</div>
            </div>
            <span class="email-time">2 min ago</span>
          </div>
          <div class="email faded">
            ${av(CO.energy)}
            <div class="email-meta">
              <div class="email-from">${CO.energy.name} · Treasury</div>
              <div class="email-subj">Payment notification — Invoices INV-0014, INV-0017</div>
            </div>
            <span class="email-time">14 min ago</span>
          </div>
          <div class="email faded">
            ${av(CO.logistics)}
            <div class="email-meta">
              <div class="email-from">${CO.logistics.name} · Finance</div>
              <div class="email-subj">Aviso de pagamento — R$ 180.000</div>
            </div>
            <span class="email-time">42 min ago</span>
          </div>
        </div>
      `,
    },

    /* ───────── 2. Extraction ───────── */
    {
      id: '02-extract',
      title: 'Step 2 · Extraction',
      body: 'Every field extracted with <span class="grad">confidence</span>. No templates to maintain.',
      tooltipSide: 'top',
      spotlight: '#extraction-table',
      html: `${SHARED_STYLES}
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
          <h2>Acme Industries — remittance.pdf</h2>
          <span class="lbl">DocSense · processing</span>
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
            <div class="field"><span class="field-key">Amount</span><span class="field-val mono">€530,000.00</span><span class="field-conf"><span class="pill green">99%</span></span></div>
            <div class="field"><span class="field-key">Currency</span><span class="field-val">EUR</span><span class="field-conf"><span class="pill green">99%</span></span></div>
            <div class="field"><span class="field-key">Bank ref</span><span class="field-val mono">DB-WT-2024-04-22-8842</span><span class="field-conf"><span class="pill green">97%</span></span></div>
            <div class="field"><span class="field-key">Invoices</span><span class="field-val mono">INV-0019, INV-0020, INV-0021</span><span class="field-conf"><span class="pill green">99%</span></span></div>
            <div class="field"><span class="field-key">Value date</span><span class="field-val mono">2024-04-22</span><span class="field-conf"><span class="pill green">98%</span></span></div>
            <div class="field"><span class="field-key">Discount</span><span class="field-val">None</span><span class="field-conf"><span class="pill green">95%</span></span></div>
            <div class="field"><span class="field-key">FX rate</span><span class="field-val">N/A (same ccy)</span><span class="field-conf"><span class="pill green">99%</span></span></div>
          </div>
        </div>
      `,
    },

    /* ───────── 3. Auto-match ───────── */
    {
      id: '03-match',
      title: 'Step 3 · Auto-match',
      body: 'Three invoices, three matches. <span class="grad">€530K accounted for</span> in under 4 seconds.',
      tooltipSide: 'right',
      spotlight: '#match-cards',
      html: `${SHARED_STYLES}
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
          <span style="color: rgba(10,10,10,0.5); font-size: 11px;">€530K · Acme · run 3.7s</span>
        </div>
        <div class="summary">
          <div class="stat"><div class="n mono" style="color: #019273;">€530K</div><div class="l">Auto-matched</div></div>
          <div class="stat"><div class="n mono">3</div><div class="l">Invoices cleared</div></div>
          <div class="stat"><div class="n mono">99%</div><div class="l">Avg confidence</div></div>
        </div>
        <div id="match-cards">
          <div class="match">
            <div><div class="match-id mono">INV-0019</div><div class="match-customer">Acme Industries · 30 days</div></div>
            <div class="match-amt mono">€179,000</div>
            <span class="pill green">Match 99%</span>
            <span class="check"><svg viewBox="0 0 12 12" fill="none"><path d="M3 6L5 8L9 4" stroke="white" stroke-width="2" stroke-linecap="round"/></svg></span>
          </div>
          <div class="match">
            <div><div class="match-id mono">INV-0020</div><div class="match-customer">Acme Industries · 30 days</div></div>
            <div class="match-amt mono">€211,000</div>
            <span class="pill green">Match 99%</span>
            <span class="check"><svg viewBox="0 0 12 12" fill="none"><path d="M3 6L5 8L9 4" stroke="white" stroke-width="2" stroke-linecap="round"/></svg></span>
          </div>
          <div class="match">
            <div><div class="match-id mono">INV-0021</div><div class="match-customer">Acme Industries · 30 days</div></div>
            <div class="match-amt mono">€140,000</div>
            <span class="pill green">Match 99%</span>
            <span class="check"><svg viewBox="0 0 12 12" fill="none"><path d="M3 6L5 8L9 4" stroke="white" stroke-width="2" stroke-linecap="round"/></svg></span>
          </div>
        </div>
      `,
    },

    /* ───────── 4. Edge case ───────── */
    {
      id: '04-edge',
      title: 'Step 4 · Edge case',
      body: 'This one\'s borderline. Vero surfaces it, <span class="grad">you decide</span> in one click.',
      tooltipSide: 'left',
      spotlight: '#edge-card',
      advanceOn: { click: '#edge-confirm' },
      html: `${SHARED_STYLES}
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
          <h2>Acme Industries · €530K</h2>
          <span class="pill green">3 of 4 matched</span>
        </div>
        <div class="matched">
          <div class="row"><div class="left"><span class="mono" style="font-weight:500">INV-0019</span><span style="color:rgba(10,10,10,0.5);font-size:11px;">€179K · cleared</span></div><span class="pill green" style="font-size:10px;">99%</span></div>
          <div class="row"><div class="left"><span class="mono" style="font-weight:500">INV-0020</span><span style="color:rgba(10,10,10,0.5);font-size:11px;">€211K · cleared</span></div><span class="pill green" style="font-size:10px;">99%</span></div>
          <div class="row"><div class="left"><span class="mono" style="font-weight:500">INV-0021</span><span style="color:rgba(10,10,10,0.5);font-size:11px;">€140K · cleared</span></div><span class="pill green" style="font-size:10px;">99%</span></div>
        </div>
        <div id="edge-card">
          <div class="top">
            <div class="left">
              <span class="id mono">INV-0023</span>
              <div class="id-sub">Acme Industries · 45 days · expected €92,000</div>
            </div>
            <span class="delta">87% · short by €230</span>
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
      `,
    },

    /* ───────── 5. JE preview ───────── */
    {
      id: '05-je',
      title: 'Step 5 · Journal entry',
      body: 'Journal entry assembled, audit trail attached. One click to <span class="grad">post to ERP</span>.',
      tooltipSide: 'top',
      spotlight: '#post-btn',
      advanceOn: { click: '#post-btn' },
      html: `${SHARED_STYLES}
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
          <h2>Journal entry · ready to post</h2>
          <span style="color: rgba(10,10,10,0.5); font-size: 11px;">Auto-assembled · 4 lines · balances</span>
        </div>
        <div class="je">
          <div class="je-head">
            <div>
              <div class="je-title">JE-2024-04-22-N0042</div>
              <div class="je-id mono">Cash receipt · Acme Industries · €530,000.00</div>
            </div>
            <span class="pill green">Balanced</span>
          </div>
          <table class="je-table">
            <thead>
              <tr><th>Account</th><th>Description</th><th class="num">Debit</th><th class="num">Credit</th></tr>
            </thead>
            <tbody>
              <tr><td class="mono">11000 · Bank · Deutsche</td><td>Wire receipt 22 Apr</td><td class="num mono">530,000.00</td><td></td></tr>
              <tr><td class="mono">12010 · AR · Acme</td><td>Clear INV-0019</td><td></td><td class="num mono">179,000.00</td></tr>
              <tr><td class="mono">12010 · AR · Acme</td><td>Clear INV-0020</td><td></td><td class="num mono">211,000.00</td></tr>
              <tr><td class="mono">12010 · AR · Acme</td><td>Clear INV-0021 + INV-0023 net</td><td></td><td class="num mono">140,000.00</td></tr>
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
            <button class="btn" id="post-btn">Post to ERP →</button>
          </div>
        </div>
      `,
    },

    /* ───────── 6. Posted ───────── */
    {
      id: '06-posted',
      title: 'Step 6 · Posted',
      body: 'Vero noticed this is a daily pattern. Want it to handle every morning?',
      tooltipSide: 'right',
      spotlight: '#vero-card',
      advanceOn: { click: '#vero-yes' },
      html: `${SHARED_STYLES}
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
          <div class="meta">Doc <strong class="mono">#4421891</strong> · cleared 4 invoices · journal balanced</div>
          <div class="stats">
            <div><div class="v mono">2.3s</div><div class="l">End-to-end</div></div>
            <div><div class="v mono">€530K</div><div class="l">Cleared</div></div>
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
      `,
    },

    /* ───────── 7. Schedule confirm ───────── */
    {
      id: '07-schedule',
      title: 'Step 7 · Schedule',
      body: 'Vero proposes the rules. <span class="grad">You stay in control</span> of every threshold.',
      tooltipSide: 'left',
      spotlight: '#approve-btn',
      advanceOn: { click: '#approve-btn' },
      html: `${SHARED_STYLES}
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
              <div class="fl">${ICONS.mail} Trigger</div>
              <div class="fv"><span>Email arrives in inbox · vendor matches "Acme"</span><span class="edit">Edit</span></div>
            </div>
            <div class="field-block">
              <div class="fl">${ICONS.zap} Action</div>
              <div class="fv"><span>Extract, match, post journal entry</span><span class="edit">Edit</span></div>
            </div>
            <div class="field-block">
              <div class="fl">${ICONS.shield} Confidence threshold</div>
              <div class="fv"><span class="mono">≥ 95% auto-post · 80 to 94% surface to you</span><span class="edit">Edit</span></div>
            </div>
            <div class="field-block">
              <div class="fl">${ICONS.clock} Schedule</div>
              <div class="fv"><span>Run within 5 min of arrival · check every 8:00 AM</span><span class="edit">Edit</span></div>
            </div>
          </div>
          <div class="m-foot">
            <div class="foot-note"><span class="foot-dot"></span>Pauseable · auditable · changes logged</div>
            <button class="btn" id="approve-btn">Approve & schedule</button>
          </div>
        </div>
      `,
    },

    /* ───────── 8. Done ───────── */
    {
      id: '08-done',
      title: 'Step 8 · Live',
      body: 'Done. Vero handles it tomorrow at <span class="grad">8:00 AM</span>, and every morning after.',
      tooltipSide: 'right',
      spotlight: '#tile',
      html: `${SHARED_STYLES}
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
              <span class="tile-icon">${ICONS.factory}</span>
              <div>
                <div>Acme Industries · Daily Cash Application</div>
                <div style="font-size: 11px; color: rgba(10,10,10,0.5); margin-top: 2px;">Configured by you · 22 Apr</div>
              </div>
            </div>
            <div class="tile-status">
              <span class="tile-pulse"></span>
              Active
            </div>
          </div>
          <div class="tile-grid">
            <div class="tile-stat"><div class="v mono">8:00 AM</div><div class="l">Next run</div></div>
            <div class="tile-stat"><div class="v mono">€530K</div><div class="l">Last processed</div></div>
            <div class="tile-stat"><div class="v mono">≥ 95%</div><div class="l">Auto-post threshold</div></div>
          </div>
        </div>
      `,
    },
  ],
};

registerTour(cashApp);
