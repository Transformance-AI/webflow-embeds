/**
 * Deductions tour — 4 scenes.
 *
 * Story: Acme Retail paid short €4,230 on a €92K invoice. Vero pulls
 * the invoice, PO, POD, contract, and an active trade-promo agreement,
 * classifies €3,780 of the short-pay as a valid promo deduction,
 * flags €450 as unexplained, packages a settlement for approval, and
 * offers to auto-resolve similar cases above 95% confidence.
 *
 * Cross-tour continuity: Acme Retail's €4,230 short-pay was first
 * surfaced in Collections scene 5's escalation queue. This tour is the
 * "what happens next" in the customer journey.
 *
 * Conventions carried over:
 *   - click-to-advance only (in-scene CTA or tooltip Next)
 *   - solid interiors, gradient halo lives outside the target
 *   - one climax word per tooltip in <span class="grad">…</span>
 */

import { registerTour } from '../engine/player.js';
import { ICONS, av, avSm, flag } from '../shared/icons.js';
import { COMPANIES as CO } from '../shared/companies.js';

/* Queue of open deductions shown in scene 1. Retail is the protagonist. */
const QUEUE = [
  { co: CO.retail,  amount: '€4,230', reason: 'Short-pay · possible trade promo', age: '2h', hero: true  },
  { co: CO.pharma,  amount: '€1,200', reason: 'Price disagreement on PO 4421',    age: '5h', hero: false },
  { co: CO.tech,    amount: '€850',   reason: 'Subscription cadence mismatch',    age: '1d', hero: false },
  { co: CO.fashion, amount: '€2,100', reason: 'Quality claim · SKU 8842',         age: '2d', hero: false },
  { co: CO.build,   amount: '€300',   reason: 'Unexpected shipping fee',          age: '3d', hero: false },
];

const SHARED = `
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
`;

const deductions = {
  id: 'deductions',
  tag: 'DEDUCTIONS · INTERACTIVE DEMO',
  coverLabel: 'See deductions in 30 seconds',
  closing: {
    headline: 'Short-pay investigated, settlement posted. <span class="grad">Hours saved.</span>',
    sub: 'Want Vero to auto-resolve patterns it\'s already seen?',
  },

  scenes: [
    /* ─────────────── Scene 1 · Deduction queue ─────────────── */
    {
      id: 'd-01-queue',
      title: 'Step 1 · Deduction queue',
      body: `${CO.retail.name} paid short by <span class="grad">€4,230</span> on a €92K invoice. Vero will pull the evidence.`,
      tooltipSide: 'left',
      spotlight: '#ded-investigate',
      advanceOn: { click: '#ded-investigate' },
      html: `${SHARED}
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
            <div class="head-sub">${QUEUE.length} open · €8,680 disputed · auto-classification running</div>
          </div>
          <span class="pill amber">⚠ ${QUEUE.length} unresolved</span>
        </div>
        <div class="card">
          <div class="card-head">
            <div>
              <div style="font-weight: 500;">Open short-pays + disputes</div>
              <div style="font-size: 11px; color: rgba(10,10,10,0.5); margin-top: 2px;">Oldest first · click Investigate to trigger classification</div>
            </div>
            <span class="eyebrow">Action</span>
          </div>
          ${QUEUE.map((q, i) => `
            <div class="queue-row ${q.hero ? 'hero' : 'faded'}">
              ${av(q.co)}
              <div>
                <div class="qr-name">${q.co.name}</div>
                <div class="qr-reason">${q.reason}</div>
              </div>
              <div>
                <div class="qr-amt mono">-${q.amount}</div>
                <div class="qr-age">${q.age} ago</div>
              </div>
              <span class="pill gray">${q.co.country === 'FR' ? 'France' : q.co.country === 'ES' ? 'Spain' : q.co.country === 'IE' ? 'Ireland' : q.co.country === 'SE' ? 'Sweden' : 'Netherlands'}</span>
              <div class="qr-action">
                ${q.hero
                  ? `<button class="btn" id="ded-investigate">Investigate →</button>`
                  : `<button class="btn btn-light">Investigate</button>`}
              </div>
            </div>
          `).join('')}
        </div>
      `,
    },

    /* ─────────────── Scene 2 · Evidence chain ─────────────── */
    {
      id: 'd-02-evidence',
      title: 'Step 2 · Evidence chain',
      body: `Vero pulls the invoice, purchase order, proof of delivery, contract, and any active <span class="grad">trade-promo agreement</span>, then links them automatically.`,
      tooltipSide: 'bottom',
      spotlight: '#evidence-chain',
      html: `${SHARED}
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

          /* Horizontal dashed connectors drawn as flex siblings — align perfectly
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
          ${av(CO.retail)}
          <div style="flex: 1;">
            <div style="font-weight: 500;">${CO.retail.name} · ${CO.retail.contact}</div>
            <div style="font-size: 11px; color: rgba(10,10,10,0.55); margin-top: 2px;">Invoice INV-3482 · €92,000 · paid €87,770 · <span class="ctx-amt">short €4,230</span></div>
          </div>
          <span class="pill violet">● Classifying</span>
        </div>
        <div id="evidence-chain">
          <div class="chain">
            <div class="doc d1">
              <div class="doc-icon">${ICONS.mail}</div>
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
              <div class="doc-id">§4.2 Promo</div>
            </div>
            <div class="conn c4"></div>
            <div class="doc d5">
              <div class="doc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg></div>
              <div class="doc-label">Trade promo</div>
              <div class="doc-id">TP-041 · active</div>
            </div>
          </div>
          <div class="chain-caption">
            5 sources linked · <span class="mono">1,247 historical cases</span> cross-referenced · classification in 2.8s
          </div>
        </div>
      `,
    },

    /* ─────────────── Scene 3 · Vero's recommendation ─────────────── */
    {
      id: 'd-03-recommend',
      title: 'Step 3 · Vero\'s plan',
      body: `Evidence assembled, plan drafted. <span class="grad">One click</span> to apply.`,
      tooltipSide: 'left',
      spotlight: '#apply-btn',
      advanceOn: { click: '#apply-btn' },
      html: `${SHARED}
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
              <div class="vero-label">Vero · Classification complete</div>
              <div class="vero-sub">${CO.retail.name} · INV-3482 · short €4,230</div>
            </div>
            <div style="margin-left: auto;"><span class="pill green">Ready to apply</span></div>
          </div>
          <div class="rec-card">
            <div class="rec-title">Here's what I'd do:</div>
            <div class="rec-ctx">Based on 5 source documents and 1,247 historical cases.</div>
            <div class="plan">
              <div class="plan-row valid">
                <span class="plan-icon">${ICONS.check}</span>
                <div class="plan-body">
                  <div class="plan-action">Auto-settle as trade promo TP-041</div>
                  <div class="plan-why">89% match · write off to promo reserve · 14 similar cases this quarter</div>
                </div>
                <div class="plan-amt">€3,780</div>
              </div>
              <div class="plan-row review">
                <span class="plan-icon">${ICONS.alert}</span>
                <div class="plan-body">
                  <div class="plan-action">Route to your queue with summary</div>
                  <div class="plan-why">No matching promo, PO, or POD note. Needs a human call</div>
                </div>
                <div class="plan-amt">€450</div>
              </div>
            </div>
            <div class="rec-meta">
              <div class="meta-item"><span class="meta-dot"></span><span><strong>5 docs</strong> searched</span></div>
              <div class="meta-item"><span class="meta-dot"></span><span><strong>2.8s</strong> classification</span></div>
              <div class="meta-item"><span class="meta-dot"></span><span><strong>GL balanced</strong> · SAP ready</span></div>
              <div class="meta-item"><span class="meta-dot"></span><span><strong>Audit trail</strong> preserved</span></div>
            </div>
          </div>
          <div class="apply-bar">
            <div class="apply-note">Every step auditable. You can roll back any settlement from the queue.</div>
            <div class="apply-btns">
              <button class="btn btn-light">Review details</button>
              <button class="btn" id="apply-btn">Apply Vero's plan →</button>
            </div>
          </div>
        </div>
      `,
    },

    /* ─────────────── Scene 5 · Posted + automate ─────────────── */
    {
      id: 'd-04-done',
      title: 'Step 4 · Posted',
      body: `Settled in under 5 minutes. Vero spotted <span class="grad">14 similar cases</span> this quarter. Want Vero to resolve those automatically?`,
      tooltipSide: 'right',
      spotlight: '#ded-vero-card',
      advanceOn: { click: '#ded-yes' },
      html: `${SHARED}
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
          <p>€3,780 written off to trade promo. €450 routed to your queue with summary + evidence.</p>
        </div>
        <div class="tile">
          <div class="tile-head">
            <div class="tile-title">
              <span style="width: 28px; height: 28px; border-radius: 6px; background: linear-gradient(135deg, #8259f7, #5b21b6); display: inline-flex; align-items: center; justify-content: center; color: #fff;">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS.alert.replace(/<svg[^>]*>|<\/svg>/g, '')}</svg>
              </span>
              Today's deduction pass
            </div>
            <div class="tile-status">
              <span class="tile-pulse"></span>
              Complete · 4:12
            </div>
          </div>
          <div class="tile-grid">
            <div class="tile-stat"><div class="v mono">1</div><div class="l">Settled</div></div>
            <div class="tile-stat"><div class="v mono">€3,780</div><div class="l">Auto-resolved</div></div>
            <div class="tile-stat"><div class="v mono">€450</div><div class="l">Routed to you</div></div>
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
      `,
    },
  ],
};

registerTour(deductions);
