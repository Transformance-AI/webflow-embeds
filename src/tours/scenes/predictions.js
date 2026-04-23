/**
 * Cash Flow Forecasting tour — 5 scenes.
 *
 * Story: 13-week cash forecast shows a risky dip in week 6. Vero drills
 * in, surfaces the riskiest invoice (Acme Energy's €179K — the same
 * invoice that was confirmed as a PTP in the Collections tour). The
 * recommendation card explains the risk signals and proposes a backup
 * call + escalation. After applying, the forecast redraws without the
 * dip and Vero offers to monitor/act on signals automatically.
 *
 * Cross-tour continuity: the €179K Acme Energy PTP from Collections
 * scene 3 reappears here as the centerpiece — showing that the same
 * customer-invoice flows through every tool in the platform.
 *
 * Conventions carried over from Cash App / Collections / Deductions:
 *   - click-to-advance only (no auto-timers)
 *   - solid interiors; gradient halo strictly outside the target
 *   - one climax word per tooltip wrapped in <span class="grad">…</span>
 */

import { registerTour } from '../engine/player.js';
import { ICONS, av, avSm, flag } from '../shared/icons.js';
import { COMPANIES as CO } from '../shared/companies.js';

/* At-risk invoices in week 6 — Acme Energy's PTP is the protagonist */
const AT_RISK = [
  { co: CO.energy,    inv: 'INV-0019', amount: 179000, risk: 88, reason: '2 broken PTPs · sentiment declining' },
  { co: CO.motors,    inv: 'INV-1183', amount: 63000,  risk: 71, reason: 'DSO trend +9 days · last call 12d ago' },
  { co: CO.fashion,   inv: 'INV-0876', amount: 42000,  risk: 64, reason: 'New CFO · payment behavior unclear' },
  { co: CO.tech,      inv: 'INV-2204', amount: 22000,  risk: 58, reason: 'Subscription dispute open' },
  { co: CO.build,     inv: 'INV-1144', amount: 38000,  risk: 52, reason: 'POD discrepancy under review' },
];

const SHARED = `
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
`;

/* Build a 13-week forecast SVG.
   weeks: number[] where index 0..2 are actuals (solid),
          3..12 are forecast (dashed, with confidence band).
   highlight: optional week index to mark with vertical line + dot.
   resolved: if true, weeks 5-7 are flattened (the "after" version). */
function chartSvg({ weeks, highlight = -1, resolved = false }) {
  const W = 720, H = 220;
  const padL = 36, padR = 16, padT = 18, padB = 28;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;
  const xs = (i) => padL + (i / (weeks.length - 1)) * innerW;
  const maxV = Math.max(...weeks) * 1.1;
  const minV = Math.min(...weeks) * 0.85;
  const ys = (v) => padT + (1 - (v - minV) / (maxV - minV)) * innerH;

  // Past actuals path (solid)
  const pastIdx = 3;
  const pastPts = weeks.slice(0, pastIdx).map((v, i) => `${i === 0 ? 'M' : 'L'}${xs(i).toFixed(1)},${ys(v).toFixed(1)}`).join(' ');
  // Forecast path (dashed, starts at week 2 to connect)
  const fcPts = weeks.slice(pastIdx - 1).map((v, i) => `${i === 0 ? 'M' : 'L'}${xs(i + pastIdx - 1).toFixed(1)},${ys(v).toFixed(1)}`).join(' ');

  // Confidence band (forecast portion only) — ±10% upper, ±8% lower
  const upperPts = weeks.slice(pastIdx - 1).map((v, i) => `${xs(i + pastIdx - 1).toFixed(1)},${ys(v * 1.1).toFixed(1)}`);
  const lowerPts = weeks.slice(pastIdx - 1).map((v, i) => `${xs(i + pastIdx - 1).toFixed(1)},${ys(v * 0.92).toFixed(1)}`).reverse();
  const bandPath = `M${upperPts.join(' L')} L${lowerPts.join(' L')} Z`;

  // X-axis week labels (W1, W4, W8, W12)
  const labels = [0, 3, 6, 9, 12].map(i => `<text x="${xs(i)}" y="${H - 8}" font-size="9" fill="rgba(10,10,10,0.45)" text-anchor="middle">W${i + 1}</text>`).join('');

  // Y-axis grid
  const gridLines = [0, 0.33, 0.66, 1].map(t => {
    const y = padT + t * innerH;
    return `<line x1="${padL}" y1="${y}" x2="${W - padR}" y2="${y}" stroke="rgba(10,10,10,0.05)" stroke-width="1"/>`;
  }).join('');

  const yLabels = [maxV, maxV * 0.66 + minV * 0.34, maxV * 0.33 + minV * 0.67, minV].map((v, i) => {
    const y = padT + (i / 3) * innerH;
    return `<text x="${padL - 6}" y="${y + 3}" font-size="9" fill="rgba(10,10,10,0.4)" text-anchor="end">€${(v / 1000).toFixed(0)}K</text>`;
  }).join('');

  // Highlight marker
  const hl = highlight >= 0 ? `
    <line x1="${xs(highlight)}" y1="${padT}" x2="${xs(highlight)}" y2="${H - padB}" stroke="${resolved ? '#019273' : '#ef4444'}" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.5"/>
    <circle cx="${xs(highlight)}" cy="${ys(weeks[highlight])}" r="6" fill="${resolved ? '#019273' : '#ef4444'}"/>
    <circle cx="${xs(highlight)}" cy="${ys(weeks[highlight])}" r="11" fill="none" stroke="${resolved ? '#019273' : '#ef4444'}" stroke-width="1.5" opacity="0.4"/>
    <text x="${xs(highlight)}" y="${ys(weeks[highlight]) - 16}" font-size="10" font-weight="500" fill="${resolved ? '#019273' : '#ef4444'}" text-anchor="middle">€${(weeks[highlight] / 1000).toFixed(0)}K</text>
  ` : '';

  return `
    <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: auto; display: block;">
      ${gridLines}
      ${yLabels}
      <path d="${bandPath}" fill="rgba(78,85,225,0.10)"/>
      <path d="${pastPts}" fill="none" stroke="#0a0a0a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="${fcPts}" fill="none" stroke="#4e55e1" stroke-width="2" stroke-dasharray="4 3" stroke-linecap="round" stroke-linejoin="round"/>
      ${hl}
      ${labels}
    </svg>
  `;
}

const BASELINE_WEEKS = [820, 850, 870, 890, 910, 880, 740, 820, 900, 940, 980, 1010, 1040].map(v => v * 1000);
const RESOLVED_WEEKS = [820, 850, 870, 890, 910, 920, 935, 950, 980, 1000, 1030, 1060, 1090].map(v => v * 1000);

/* ─── Interactive scenario catalog ────────────────────────────────
   Each scenario defines how the forecast curve shifts under a given
   stress, plus the copy that appears when the tab is active.
   The active scenario is swapped live by the scene's onMount hook
   when the user clicks a tab — no engine-level re-render, just a
   DOM update inside the scenario card. */
const SCENARIOS = {
  fx: {
    id: 'fx',
    label: 'EUR +5% vs USD',
    icon: 'globe',
    title: 'EUR strengthens 5% vs USD',
    sub: 'Affects US revenue conversion · Q ends in week 13',
    intensities: ['+2%', '+5%', '+10%'],
    defaultIntensity: '+5%',
    driverCopy: 'US receivables book: $1.2M · locked at €0.92 · adjustment applied from week 4',
    weeks: (intensity = '+5%') => {
      const mult = intensity === '+2%' ? 0.972 : intensity === '+10%' ? 0.88 : 0.93;
      return BASELINE_WEEKS.map((v, i) => i < 3 ? v : Math.round(v * mult));
    },
    risk: (intensity = '+5%') => ({
      w13: intensity === '+2%' ? '€1.01M' : intensity === '+10%' ? '€916K' : '€970K',
      delta: intensity === '+2%' ? '−€30K' : intensity === '+10%' ? '−€124K' : '−€70K',
      exposure: intensity === '+2%' ? '€35K' : intensity === '+10%' ? '€184K' : '€92K',
      exposureDesc: 'USD receivables',
    }),
  },
  costs: {
    id: 'costs',
    label: 'Input costs +8%',
    icon: 'fuel',
    title: 'Input costs rise 8%',
    sub: 'Hits margin on AP payables · customers pass less-than-full through',
    intensities: ['+4%', '+8%', '+15%'],
    defaultIntensity: '+8%',
    driverCopy: 'Raw mat index +8% WoW · AP book €2.4M across 6 suppliers · 60% pass-through',
    weeks: (intensity = '+8%') => {
      const mult = intensity === '+4%' ? 0.975 : intensity === '+15%' ? 0.91 : 0.955;
      return BASELINE_WEEKS.map((v, i) => i < 3 ? v : Math.round(v * mult));
    },
    risk: (intensity = '+8%') => ({
      w13: intensity === '+4%' ? '€1.01M' : intensity === '+15%' ? '€946K' : '€993K',
      delta: intensity === '+4%' ? '−€30K' : intensity === '+15%' ? '−€94K' : '−€47K',
      exposure: intensity === '+4%' ? '€28K' : intensity === '+15%' ? '€95K' : '€58K',
      exposureDesc: 'margin compression',
    }),
  },
  dso: {
    id: 'dso',
    label: 'DSO +5 days',
    icon: 'trendingUp',
    title: 'DSO slips +5 days',
    sub: 'Receipts shift right · same cash, later week',
    intensities: ['+3d', '+5d', '+10d'],
    defaultIntensity: '+5d',
    driverCopy: 'Customer AP teams taking longer · 4 accounts showing drift · early warning',
    weeks: (intensity = '+5d') => {
      /* Shift receipts rightward — simulate by rotating weeks by fractional shift */
      const shift = intensity === '+3d' ? 0.4 : intensity === '+10d' ? 1.4 : 0.7;
      return BASELINE_WEEKS.map((v, i) => {
        if (i < 3) return v;
        const srcIdx = Math.max(0, Math.min(BASELINE_WEEKS.length - 1, i - shift));
        const lo = Math.floor(srcIdx), hi = Math.ceil(srcIdx), frac = srcIdx - lo;
        return Math.round(BASELINE_WEEKS[lo] * (1 - frac) + BASELINE_WEEKS[hi] * frac);
      });
    },
    risk: (intensity = '+5d') => ({
      w13: intensity === '+3d' ? '€1.02M' : intensity === '+10d' ? '€950K' : '€985K',
      delta: intensity === '+3d' ? '−€20K' : intensity === '+10d' ? '−€90K' : '−€55K',
      exposure: intensity === '+3d' ? '€52K' : intensity === '+10d' ? '€178K' : '€108K',
      exposureDesc: 'cash timing',
    }),
  },
  delay: {
    id: 'delay',
    label: 'Top customer 30d delay',
    icon: 'truck',
    title: `${CO.energy.name} delays 30 days`,
    sub: '€179K PTP at risk · historical slippage pattern applies',
    intensities: ['15d', '30d', '60d'],
    defaultIntensity: '30d',
    driverCopy: `${CO.energy.name} · €179K invoice · 88% slip risk · 2 broken PTPs in 60d`,
    weeks: (intensity = '30d') => {
      /* Remove €179K from week 6 and push it to a later week */
      const hit = intensity === '15d' ? 110 : intensity === '60d' ? 179 : 179;
      const restorWeek = intensity === '15d' ? 8 : intensity === '60d' ? 12 : 10;
      return BASELINE_WEEKS.map((v, i) => {
        if (i === 6) return v - hit * 1000;
        if (i === restorWeek && intensity !== '60d') return v + Math.round(hit * 0.8 * 1000);
        return v;
      });
    },
    risk: (intensity = '30d') => ({
      w13: intensity === '15d' ? '€1.02M' : intensity === '60d' ? '€861K' : '€931K',
      delta: intensity === '15d' ? '−€20K' : intensity === '60d' ? '−€179K' : '−€109K',
      exposure: intensity === '15d' ? '€110K' : intensity === '60d' ? '€179K' : '€179K',
      exposureDesc: `${CO.energy.name} PTP`,
    }),
  },
};

/* Two-line chart: baseline (gray, solid) + scenario (indigo, dashed).
   Takes the scenario-adjusted weeks array as an argument so the scene
   can re-render with a new scenario's curve on tab click. */
function scenarioChartSvg(scenarioWeeks, endLabel) {
  const W = 720, H = 190;
  const padL = 36, padR = 16, padT = 14, padB = 26;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;
  const N = BASELINE_WEEKS.length;
  const xs = (i) => padL + (i / (N - 1)) * innerW;
  const allVals = [...BASELINE_WEEKS, ...scenarioWeeks];
  const maxV = Math.max(...allVals) * 1.05;
  const minV = Math.min(...allVals) * 0.9;
  const ys = (v) => padT + (1 - (v - minV) / (maxV - minV)) * innerH;

  const path = (arr) => arr.map((v, i) => `${i === 0 ? 'M' : 'L'}${xs(i).toFixed(1)},${ys(v).toFixed(1)}`).join(' ');

  const gridLines = [0, 0.33, 0.66, 1].map(t => {
    const y = padT + t * innerH;
    return `<line x1="${padL}" y1="${y}" x2="${W - padR}" y2="${y}" stroke="rgba(10,10,10,0.05)" stroke-width="1"/>`;
  }).join('');

  const xLabels = [0, 3, 6, 9, 12].map(i =>
    `<text x="${xs(i)}" y="${H - 8}" font-size="9" fill="rgba(10,10,10,0.45)" text-anchor="middle">W${i + 1}</text>`
  ).join('');
  const yLabels = [maxV, (maxV + minV) / 2, minV].map((v, i) => {
    const y = padT + (i / 2) * innerH;
    return `<text x="${padL - 6}" y="${y + 3}" font-size="9" fill="rgba(10,10,10,0.4)" text-anchor="end">€${(v / 1000).toFixed(0)}K</text>`;
  }).join('');

  const endX = xs(N - 1), endY = ys(scenarioWeeks[N - 1]);

  return `
    <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: auto; display: block;">
      ${gridLines}
      ${yLabels}
      <path d="${path(BASELINE_WEEKS)}" fill="none" stroke="rgba(10,10,10,0.25)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="${path(scenarioWeeks)}" fill="none" stroke="#4e55e1" stroke-width="2" stroke-dasharray="4 3" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="${endX}" cy="${endY}" r="4" fill="#4e55e1"/>
      <text x="${endX - 6}" y="${endY - 8}" font-size="10" font-weight="500" fill="#4e55e1" text-anchor="end">${endLabel}</text>
      ${xLabels}
    </svg>
  `;
}

/* Render the inner scenario card content for a given scenario + intensity.
   This chunk of HTML is what the onMount handler swaps in and out on tab
   clicks — chart, subtitle, intensity chips, and impact numbers. */
function renderScenarioInner(scenarioId, intensity) {
  const sc = SCENARIOS[scenarioId];
  const active = intensity || sc.defaultIntensity;
  const weeks = sc.weeks(active);
  const risk = sc.risk(active);
  return `
    <div class="sc-head">
      <div>
        <div class="sc-title">${sc.title} · <span class="sc-intensity-label">${active}</span></div>
        <div class="sc-sub">${sc.sub}</div>
      </div>
      <div class="sc-legend">
        <span class="key"><span class="swatch base"></span>Baseline</span>
        <span class="key"><span class="swatch new"></span>Scenario</span>
      </div>
    </div>
    <div class="intensity-row">
      <span class="int-label">Intensity</span>
      ${sc.intensities.map(i => `<button class="int-chip ${i === active ? 'active' : ''}" data-scenario="${scenarioId}" data-intensity="${i}">${i}</button>`).join('')}
      <span class="int-driver">${sc.driverCopy}</span>
    </div>
    ${scenarioChartSvg(weeks, risk.w13)}
    <div class="impact-row">
      <div class="impact">
        <div class="l">Week 13 · baseline</div>
        <div class="v mono">€1.04M</div>
        <div class="d">unchanged</div>
      </div>
      <div class="impact">
        <div class="l">Week 13 · scenario</div>
        <div class="v mono" style="color: #b91c1c;">${risk.w13}</div>
        <div class="d down">${risk.delta} exposure</div>
      </div>
      <div class="impact">
        <div class="l">Cash at risk</div>
        <div class="v mono" style="color: #b91c1c;">${risk.exposure}</div>
        <div class="d down">${risk.exposureDesc}</div>
      </div>
    </div>
  `;
}

const predictions = {
  id: 'predictions',
  tag: 'CASH FLOW FORECASTING · INTERACTIVE DEMO',
  coverLabel: 'See cash predictions in 30 seconds',
  closing: {
    headline: 'A €170K dip avoided. Forecast back on track. <span class="grad">Hours back.</span>',
    sub: 'Want Vero to monitor and act on signals every morning?',
  },

  scenes: [
    /* ─────────────── Scene 1 · Forecast with risk dip ─────────────── */
    {
      id: 'p-01-forecast',
      title: 'Step 1 · 13-week forecast',
      body: `Cash holding strong, except a <span class="grad">€170K dip</span> in week 6. Vero spotted the risk before it lands.`,
      tooltipSide: 'left',
      spotlight: '#dip-investigate',
      advanceOn: { click: '#dip-investigate' },
      html: `${SHARED}
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
            <div class="head-sub">AR + AP combined · 4 currencies · 12 entities · 1,247 open invoices · updated 14 min ago</div>
          </div>
          <span class="pill indigo">● Live · Vero monitoring</span>
        </div>
        <div class="chart-card">
          <div class="chart-head">
            <div class="ch-label">Projected cash position · weeks 1–13</div>
            <div class="legend">
              <span class="legend-key"><span class="swatch"></span>Actuals</span>
              <span class="legend-key"><span class="swatch fc"></span>Forecast</span>
              <span class="legend-key"><span class="swatch band"></span>Confidence</span>
            </div>
          </div>
          ${chartSvg({ weeks: BASELINE_WEEKS, highlight: 6 })}
        </div>
        <div class="stats-row">
          <div class="stat">
            <div class="l">Week 13 forecast</div>
            <div class="v mono">€1.04M</div>
            <div class="delta up">+27% vs today</div>
          </div>
          <div class="stat">
            <div class="l">Week 6 dip</div>
            <div class="v mono" style="color: #b91c1c;">−€170K</div>
            <div class="delta down">vs trend line</div>
          </div>
          <div class="stat">
            <div class="l">Confidence</div>
            <div class="v mono">93%</div>
            <div class="delta">±€42K margin</div>
          </div>
        </div>
        <div class="alert-bar">
          <div class="alert-icon">${ICONS.alert}</div>
          <div class="alert-text">
            <div class="alert-title">Week 6 cash drops €170K below trend</div>
            <div class="alert-sub">5 invoices at risk · driven by Acme Energy's €179K PTP slipping</div>
          </div>
          <button class="btn" id="dip-investigate">Investigate →</button>
        </div>
      `,
    },

    /* ─────────────── Scene 2 · Scenario builder (interactive) ─────────────── */
    {
      id: 'p-02-scenario',
      title: 'Step 2 · Stress-test',
      body: `<span class="grad">Click any scenario</span>. The chart and numbers update live. Try switching and dialling intensities up.`,
      tooltipSide: 'top',
      spotlight: '#scenarios-frame',
      advanceOn: { click: '#scenario-drilldown' },
      onMount: (stage) => {
        const inner = stage.querySelector('#scenario-inner');
        if (!inner) return;

        // Click a top-level scenario tab → swap the whole inner panel to
        // its default intensity.
        stage.querySelectorAll('[data-scenario-tab]').forEach(tab => {
          tab.addEventListener('click', () => {
            const id = tab.getAttribute('data-scenario-tab');
            stage.querySelectorAll('[data-scenario-tab]').forEach(t => t.classList.toggle('active', t === tab));
            inner.innerHTML = renderScenarioInner(id);
          });
        });

        // Click a granular intensity chip → re-render just the inner
        // panel with the new intensity applied.
        stage.addEventListener('click', (e) => {
          const chip = e.target.closest('[data-intensity]');
          if (!chip) return;
          const scenarioId = chip.getAttribute('data-scenario');
          const intensity = chip.getAttribute('data-intensity');
          inner.innerHTML = renderScenarioInner(scenarioId, intensity);
        });
      },
      html: `${SHARED}
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
            <div class="head-sub">Model FX, input costs, customer delays · AR + AP both included</div>
          </div>
          <span class="pill indigo">${ICONS.sliders} Scenario builder · live</span>
        </div>
        <div id="scenarios-frame">
          <div class="tab-strip">
            <button class="tab active" data-scenario-tab="fx">${ICONS.globe} FX shift</button>
            <button class="tab" data-scenario-tab="costs">${ICONS.fuel} Input costs</button>
            <button class="tab" data-scenario-tab="dso">${ICONS.trendingUp} DSO drift</button>
            <button class="tab" data-scenario-tab="delay">${ICONS.truck} Customer delay</button>
          </div>
          <div id="scenario-inner">${renderScenarioInner('fx')}</div>
          <div class="cta-bar">
            <div>
              <div class="cta-label">Pick a scenario and click through the intensities, then see the invoices at risk</div>
              <div class="cta-sub">Chart and numbers update live · no save / reload · swap scenarios as often as you like</div>
            </div>
            <button class="btn" id="scenario-drilldown">See invoices at risk →</button>
          </div>
        </div>
      `,
    },

    /* ─────────────── Scene 3 · At-risk invoices ─────────────── */
    {
      id: 'p-03-atrisk',
      title: 'Step 3 · At-risk invoices',
      body: `${CO.energy.name}'s €179K is the biggest exposure. <span class="grad">88% likely to slip</span> based on past behaviour plus signals.`,
      tooltipSide: 'bottom',
      spotlight: '#energy-row',
      advanceOn: { click: '#energy-row' },
      html: `${SHARED}
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
            <h2>Week 6 · at-risk invoices</h2>
            <div class="head-sub">Sorted by risk score · likelihood of slipping past due date</div>
          </div>
          <span class="pill red">${ICONS.alert} 5 to review</span>
        </div>
        <div class="ctx">
          <div class="ctx-icon">${ICONS.alert}</div>
          <div style="flex: 1;">
            <div class="ctx-label">Week 6 expected receipts: €870K · forecast: €700K</div>
            <div class="ctx-sub">€170K shortfall driven by these 5 invoices · click any row to dig in</div>
          </div>
          <div style="text-align: right;">
            <div class="ctx-amt">−€170K</div>
            <div class="ctx-sub">vs trend</div>
          </div>
        </div>
        <div class="card">
          <div class="card-head">
            <div>
              <div class="h3">Top 5 risk exposures</div>
              <div class="head-meta">Total at risk: €344K · ${CO.energy.name} highest</div>
            </div>
            <span style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.06em; color: rgba(10,10,10,0.5);">Risk score</span>
          </div>
          ${AT_RISK.map((r, i) => {
            const isHero = i === 0;
            const sev = r.risk >= 80 ? 'red' : r.risk >= 65 ? 'amber' : 'gray';
            const sevColor = r.risk >= 80 ? '#ef4444' : r.risk >= 65 ? '#f59e0b' : '#94a3b8';
            return `
              <div class="risk-row ${isHero ? 'hero' : ''}" ${isHero ? 'id="energy-row"' : ''}>
                ${av(r.co)}
                <div>
                  <div class="rr-name">${r.co.name}</div>
                  <div class="rr-inv">${r.inv} · ${r.co.country}</div>
                </div>
                <div class="rr-amt mono">€${(r.amount / 1000).toFixed(0)}K</div>
                <div class="rr-risk">
                  <div class="risk-bar"><div class="risk-bar-fill" style="width: ${r.risk}%; background: ${sevColor};"></div></div>
                  <span class="risk-pct" style="color: ${sevColor};">${r.risk}</span>
                </div>
                <div class="rr-reason" style="grid-column: 5 / 7;">${r.reason}</div>
              </div>
            `;
          }).join('')}
        </div>
      `,
    },

    /* ─────────────── Scene 4 · Vero's recommendation ─────────────── */
    {
      id: 'p-04-recommend',
      title: 'Step 4 · Vero\'s plan',
      body: `Three risk signals stack up. Vero's plan: <span class="grad">act now</span>, before the dip lands.`,
      tooltipSide: 'left',
      spotlight: '#pred-apply',
      advanceOn: { click: '#pred-apply' },
      html: `${SHARED}
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
              <div class="vero-label">Vero · Risk analysis complete</div>
              <div class="vero-sub">${CO.energy.name} · INV-0019 · €179,000 · PTP due Fri 25 Apr</div>
            </div>
            <div style="margin-left: auto;"><span class="pill red">${ICONS.alert} 88% slip risk</span></div>
          </div>
          <div class="rec-card">
            <div class="rec-section">
              <div class="rec-section-label">Why I'm flagging this</div>
              <div class="signals">
                <div class="signal">
                  <span class="signal-icon">${ICONS.trendingUp}</span>
                  <span class="label"><strong>DSO trend:</strong> +8 days vs Q1 average</span>
                  <span class="meta">trending wrong</span>
                </div>
                <div class="signal">
                  <span class="signal-icon">${ICONS.phoneOff}</span>
                  <span class="label"><strong>2 PTPs broken</strong> in the last 60 days</span>
                  <span class="meta">€420K total</span>
                </div>
                <div class="signal">
                  <span class="signal-icon">${ICONS.trendingDown}</span>
                  <span class="label"><strong>Sentiment declining</strong> on last 3 calls</span>
                  <span class="meta">positive → neutral → cautious</span>
                </div>
              </div>
            </div>
            <div class="rec-section">
              <div class="rec-section-label">What I'd do</div>
              <div class="actions">
                <div class="action">
                  <span class="action-icon">${ICONS.phone}</span>
                  <div class="body">
                    <div class="lab">Place a verification call before Friday</div>
                    <div class="det">In Portuguese, light-touch · re-confirm timing without escalation</div>
                  </div>
                </div>
                <div class="action">
                  <span class="action-icon">${ICONS.alert}</span>
                  <div class="body">
                    <div class="lab">Move to priority collections queue</div>
                    <div class="det">If no response by Thursday, escalate to ${CO.energy.contact}'s manager</div>
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
              <button class="btn" id="pred-apply">Apply Vero's plan →</button>
            </div>
          </div>
        </div>
      `,
    },

    /* ─────────────── Scene 5 · Forecast restored + automate ─────────────── */
    {
      id: 'p-05-resolved',
      title: 'Step 5 · Forecast restored',
      body: `Dip mitigated. Forecast back on trend. Want Vero to <span class="grad">monitor and act</span> on these signals every morning?`,
      tooltipSide: 'top',
      spotlight: '#pred-yes',
      advanceOn: { click: '#pred-yes' },
      html: `${SHARED}
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
            <p>Verification call placed · ${CO.energy.contact} reaffirmed Fri 25 Apr · backup escalation queued</p>
          </div>
          <div style="margin-left: auto;"><span class="pill green">€170K dip avoided</span></div>
        </div>
        <div class="chart-card">
          <div class="chart-head">
            <div class="ch-title">13-week cash forecast · after Vero's plan</div>
            <div class="ch-delta">+€50K vs prior forecast at week 13</div>
          </div>
          ${chartSvg({ weeks: RESOLVED_WEEKS, highlight: 6, resolved: true })}
        </div>
        <div class="mini-stats">
          <div class="mini-stat"><div class="l">Week 6</div><div class="v mono">€920K</div></div>
          <div class="mini-stat"><div class="l">Week 13</div><div class="v mono">€1.09M</div></div>
          <div class="mini-stat"><div class="l">PTPs at risk</div><div class="v mono" style="color: #019273;">−4</div></div>
          <div class="mini-stat"><div class="l">Confidence</div><div class="v mono">95%</div></div>
        </div>
        <div class="vero-bubble">
          <div class="vero-av thinking"><span class="vero-av-eyes"><span class="vero-av-eye">0</span><span class="vero-av-eye vero-av-eye-r">0</span></span></div>
          <div id="pred-vero-card">
            <div class="bubble-text">I rescore your forecast every morning. Want me to surface and act on signals like this automatically — within your thresholds?</div>
            <div class="bubble-actions">
              <button class="btn" id="pred-yes">Yes, monitor</button>
              <button class="btn btn-light">Just notify me</button>
            </div>
          </div>
        </div>
      `,
    },
  ],
};

registerTour(predictions);
