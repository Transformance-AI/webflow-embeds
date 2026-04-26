/**
 * Transformance Cash Flow Forecast Calculator — live wiring + form-gated Excel.
 *
 * Wires up the 13-week cash forecast tool on /tools/cash-forecast-template.
 *
 * Inputs (all id-based):
 *   #cf-currency       Currency selector (USD default)
 *   #cf-cash           Starting cash balance
 *   #cf-ar             Open AR balance
 *   #cf-dso            Average DSO (days)
 *   #cf-weekly-in      Weekly receipts (run-rate)
 *   #cf-weekly-out     Weekly outflows (excl. payroll)
 *   #cf-payroll        Payroll amount per cycle
 *   #cf-payroll-freq   Payroll frequency (weekly/biweekly/semimonthly/monthly)
 *   #cf-floor          Cash floor for alert
 *   #cf-slider         Days-faster slider (0-20)
 *
 * Outputs:
 *   #cf-out-runway     Weeks of runway
 *   #cf-out-low        Lowest projected balance
 *   #cf-out-low-sub    Tightest week sub-text
 *   #cf-spark          Polyline points for ending cash chart
 *   #cf-slider-result  Slider result line
 *   #cf-slider-detail  Slider detail line
 *
 * Excel gate (Webflow native form):
 *   #cf-excel-form           the FormForm
 *   #cf-name / #cf-email     visible inputs
 *   #cf-form-* hidden capture fields populated on submit
 *   .cf-gate-btn             submit button
 *
 * Save-as-image button: #cf-save-image (uses html2canvas loaded via the page).
 *
 * Loaded via:
 *   <script async src="https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@v1.2.0/dist/cash-forecast.js"></script>
 */
(function () {
  // ---------- currency ----------
  var CURRENCY = {
    USD: { sym: '$',   code: 'USD' },
    EUR: { sym: '€',   code: 'EUR' },
    GBP: { sym: '£',   code: 'GBP' },
    JPY: { sym: '¥',   code: 'JPY' },
    CHF: { sym: 'CHF ', code: 'CHF' },
    AUD: { sym: 'A$',  code: 'AUD' },
    CAD: { sym: 'C$',  code: 'CAD' },
    CNY: { sym: '¥',   code: 'CNY' },
    HKD: { sym: 'HK$', code: 'HKD' },
    SGD: { sym: 'S$',  code: 'SGD' }
  };
  var currency = 'USD';

  function fmtMoney(n) {
    var c = CURRENCY[currency];
    var a = Math.abs(n), s = n < 0 ? '-' : '';
    if (a >= 1e6) return s + c.sym + (a / 1e6).toFixed(1) + 'M';
    if (a >= 1e3) return s + c.sym + Math.round(a / 1e3) + 'k';
    return s + c.sym + Math.round(a);
  }
  function parseNum(el) { return parseFloat((el.value || '').replace(/[^\d.-]/g, '')) || 0; }
  function commas(el) {
    var pos = el.selectionStart;
    var d = el.value.replace(/[^\d]/g, '');
    el.value = d ? Number(d).toLocaleString('en-US') : '';
    try { el.setSelectionRange(pos, pos); } catch (e) { /* no-op */ }
  }
  function $(id) { return document.getElementById(id); }

  // ---------- core calc ----------
  // Returns: {weeks: [{in, out, ending}], lowestIdx, lowestBalance, runway}
  function compute(daysFaster) {
    var startCash = parseNum($('cf-cash'));
    var ar = parseNum($('cf-ar'));
    var dso = parseNum($('cf-dso')) || 1;
    var weeklyIn = parseNum($('cf-weekly-in'));
    var weeklyOut = parseNum($('cf-weekly-out'));
    var payroll = parseNum($('cf-payroll'));
    var freq = $('cf-payroll-freq').value;
    var payrollWeekly = payroll / ({ weekly: 1, biweekly: 2, semimonthly: 2.17, monthly: 4.33 }[freq] || 2);

    // AR-driven inflows for weeks 1-4: distribute open_ar evenly
    // Daily revenue used for slider: ar / dso
    var dailyRev = ar / dso;
    var unlocked = dailyRev * (daysFaster || 0);

    var weeks = [];
    var cash = startCash + unlocked; // unlock applied as bonus to starting cash for projection
    for (var i = 0; i < 13; i++) {
      var arInflow = i < 4 ? Math.min(ar / 4, ar * 7 / dso) : 0;
      var inflow = arInflow + weeklyIn;
      // Payroll: bi-weekly on weeks 2,4,6,8,10,12 by default
      var payrollThisWeek = 0;
      if (freq === 'weekly') payrollThisWeek = payroll;
      else if (freq === 'biweekly' && (i + 1) % 2 === 0) payrollThisWeek = payroll;
      else if (freq === 'semimonthly' && (i + 1) % 2 === 0) payrollThisWeek = payroll;
      else if (freq === 'monthly' && (i + 1) % 4 === 0) payrollThisWeek = payroll;
      var outflow = weeklyOut + payrollThisWeek;
      cash = cash + inflow - outflow;
      weeks.push({ inflow: inflow, outflow: outflow, ending: cash });
    }

    var lowestIdx = 0, lowestBalance = weeks[0].ending;
    for (var j = 1; j < weeks.length; j++) {
      if (weeks[j].ending < lowestBalance) {
        lowestBalance = weeks[j].ending;
        lowestIdx = j;
      }
    }
    // Runway: weeks until ending cash hits zero. If never, return weeks visible.
    var runway = 13;
    for (var k = 0; k < weeks.length; k++) {
      if (weeks[k].ending <= 0) { runway = k + 1; break; }
    }
    // Refine: if cash never hits zero, project linearly
    if (runway === 13 && weeks[12].ending > 0) {
      var avgBurn = (startCash + unlocked - weeks[12].ending) / 13;
      if (avgBurn > 0) runway = Math.round((startCash + unlocked) / avgBurn * 10) / 10;
    }
    return {
      weeks: weeks, lowestIdx: lowestIdx, lowestBalance: lowestBalance,
      runway: runway, dailyRev: dailyRev, unlocked: unlocked,
      weeklyOutGross: weeklyOut + payrollWeekly,
    };
  }

  function updateChart(weeks, floor) {
    // Rescale to viewBox 0..600 wide × 0..180 tall
    var mins = Math.min.apply(null, weeks.map(function (w) { return w.ending; }).concat([floor * 0.4]));
    var maxs = Math.max.apply(null, weeks.map(function (w) { return w.ending; }).concat([floor * 1.2]));
    var range = maxs - mins || 1;
    var pts = weeks.map(function (w, i) {
      var x = (i / 12) * 552;
      var y = 170 - ((w.ending - mins) / range) * 160;
      return Math.round(x) + ',' + Math.round(y);
    }).join(' ');
    var line = $('cf-spark');
    if (line) line.setAttribute('points', pts);

    // Floor line position
    var floorY = 170 - ((floor - mins) / range) * 160;
    var floorEl = $('cf-floor-line');
    if (floorEl) {
      floorEl.setAttribute('y1', String(floorY));
      floorEl.setAttribute('y2', String(floorY));
    }
    var dz = $('cf-danger-zone');
    if (dz) {
      dz.setAttribute('y', String(floorY));
      dz.setAttribute('height', String(180 - floorY));
    }
  }

  // ---------- update suffixes when currency changes ----------
  function updateCurrencyDisplay() {
    var nodes = document.querySelectorAll('[data-currency-symbol]');
    for (var i = 0; i < nodes.length; i++) nodes[i].textContent = CURRENCY[currency].code;
    recompute();
  }

  // ---------- main recompute ----------
  function recompute() {
    var slider = $('cf-slider');
    var days = slider ? parseInt(slider.value, 10) : 0;
    var floor = parseNum($('cf-floor'));
    var result = compute(days);

    // Update headlines
    var runwayEl = $('cf-out-runway');
    if (runwayEl) {
      runwayEl.innerHTML = (typeof result.runway === 'number' ? result.runway : 13).toFixed(1).replace(/\.0$/, '') +
        '<span class="unit">weeks</span>';
    }
    var lowEl = $('cf-out-low');
    var lowSubEl = $('cf-out-low-sub');
    var statCard = $('cf-stat-low');
    if (lowEl) lowEl.textContent = fmtMoney(result.lowestBalance);
    if (lowSubEl) {
      var vsFloor = result.lowestBalance - floor;
      lowSubEl.innerHTML = 'Week ' + (result.lowestIdx + 1) +
        (days > 0 ? ' (with ' + days + '-day faster collection), ' : ', ') +
        (vsFloor >= 0 ? fmtMoney(vsFloor) + ' above your floor'
                       : fmtMoney(Math.abs(vsFloor)) + ' below your floor');
    }
    if (statCard) {
      if (result.lowestBalance < floor) {
        statCard.classList.add('cf-stat-warn');
        statCard.classList.remove('cf-stat-good');
      } else {
        statCard.classList.add('cf-stat-good');
        statCard.classList.remove('cf-stat-warn');
      }
    }

    // Update chart
    updateChart(result.weeks, floor);

    // Update slider section
    var resultEl = $('cf-slider-result');
    var detailEl = $('cf-slider-detail');
    var valEl = $('cf-slider-val');
    if (valEl) valEl.textContent = days + (days === 1 ? ' day' : ' days');

    var baseResult = compute(0);
    if (resultEl && detailEl) {
      if (days === 0) {
        resultEl.innerHTML = 'Move the slider to see the impact on your tightest week.';
        detailEl.innerHTML = 'Each day faster releases about <strong>' + fmtMoney(result.dailyRev) +
          '</strong> of cash. That\'s your daily revenue.';
      } else {
        resultEl.innerHTML = 'Your tightest week jumps from <strong>' + fmtMoney(baseResult.lowestBalance) +
          '</strong> to <em>' + fmtMoney(result.lowestBalance) + '</em>.';
        var runwayExt = result.unlocked / Math.max(result.weeklyOutGross, 1000);
        detailEl.innerHTML = 'That covers <strong>' + runwayExt.toFixed(1) + ' weeks</strong> of outflow. <strong>' +
          fmtMoney(result.unlocked) + '</strong> of cash flows in earlier. No price hikes, no extra hires, no cost cuts.';
      }
    }
  }

  // ---------- form gate ----------
  function snapshotContext() {
    return {
      currency: currency,
      cash: $('cf-cash') ? $('cf-cash').value : '',
      ar: $('cf-ar') ? $('cf-ar').value : '',
      dso: $('cf-dso') ? $('cf-dso').value : '',
      weekly_in: $('cf-weekly-in') ? $('cf-weekly-in').value : '',
      weekly_out: $('cf-weekly-out') ? $('cf-weekly-out').value : '',
      payroll: $('cf-payroll') ? $('cf-payroll').value : '',
      payroll_freq: $('cf-payroll-freq') ? $('cf-payroll-freq').value : '',
      runway: $('cf-out-runway') ? $('cf-out-runway').textContent : '',
      lowest: $('cf-out-low') ? $('cf-out-low').textContent : '',
    };
  }
  function setHidden(id, val) {
    var el = $(id); if (el) el.value = val;
  }

  function triggerDownload(url, filename) {
    fetch(url)
      .then(function (res) { if (!res.ok) throw new Error('dl failed'); return res.blob(); })
      .then(function (blob) {
        var u = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = u; a.download = filename;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        setTimeout(function () { URL.revokeObjectURL(u); }, 1500);
      })
      .catch(function () { window.open(url, '_blank'); });
  }

  function wireForm() {
    var form = $('cf-excel-form');
    if (!form) return;
    var btn = form.querySelector('.cf-gate-btn');
    var nameEl = $('cf-name');

    var fileUrl = (btn && btn.getAttribute && btn.getAttribute('href')) ||
      'https://cdn.prod.website-files.com/684931abb239b84984296d93/69edee1ed681ea772870b823_transformance-cash-flow-forecast.xlsx';
    var filename = 'Transformance Cash Flow Forecast.xlsx';

    form.addEventListener('submit', function () {
      var nameVal = nameEl ? nameEl.value.trim() : '';
      if (!nameVal && nameEl) {
        nameEl.style.borderColor = '#ef4444';
        nameEl.focus();
      }
      var ctx = snapshotContext();
      setHidden('cf-form-currency',     ctx.currency);
      setHidden('cf-form-cash',         ctx.cash);
      setHidden('cf-form-ar',           ctx.ar);
      setHidden('cf-form-dso',          ctx.dso);
      setHidden('cf-form-weekly-in',    ctx.weekly_in);
      setHidden('cf-form-weekly-out',   ctx.weekly_out);
      setHidden('cf-form-payroll',      ctx.payroll);
      setHidden('cf-form-payroll-freq', ctx.payroll_freq);
      setHidden('cf-form-runway',       ctx.runway);
      setHidden('cf-form-lowest',       ctx.lowest);
    }, true);

    var wrap = form.closest('.w-form');
    if (!wrap) return;
    var done = wrap.querySelector('.w-form-done');
    if (!done) return;
    var fired = false;
    var mo = new MutationObserver(function () {
      if (fired) return;
      var visible = done.style.display === 'block' ||
        getComputedStyle(done).display !== 'none';
      if (visible) { fired = true; triggerDownload(fileUrl, filename); }
    });
    mo.observe(done, { attributes: true, attributeFilter: ['style', 'class'] });
  }

  // ---------- save as image ----------
  function wireSaveImage() {
    var btn = $('cf-save-image');
    if (!btn) return;
    btn.addEventListener('click', function () {
      if (typeof html2canvas === 'undefined') {
        alert('Image library failed to load. Try the Excel download instead.');
        return;
      }
      var stage = $('cf-export-stage');
      var mount = $('cf-export-mount');
      var output = $('cf-output');
      if (!stage || !mount || !output) return;
      mount.innerHTML = '';
      var clone = output.cloneNode(true);
      var dlRow = clone.querySelector('.cf-dl-row');
      if (dlRow) dlRow.remove();
      mount.appendChild(clone);
      html2canvas(stage, { backgroundColor: '#ffffff', scale: 2, useCORS: true })
        .then(function (canvas) {
          var link = document.createElement('a');
          link.download = 'transformance-cash-forecast.png';
          link.href = canvas.toDataURL('image/png');
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch(function () {
          alert('Could not generate image. Try the Excel download instead.');
        });
    });
  }

  function init() {
    wireForm();
    wireSaveImage();

    // Listen for input changes
    var moneyInputs = ['cf-cash', 'cf-ar', 'cf-weekly-in', 'cf-weekly-out', 'cf-payroll', 'cf-floor'];
    for (var i = 0; i < moneyInputs.length; i++) {
      (function (id) {
        var el = $(id);
        if (!el) return;
        el.addEventListener('input', function () { commas(el); recompute(); });
      })(moneyInputs[i]);
    }
    var simpleInputs = ['cf-dso', 'cf-payroll-freq'];
    for (var j = 0; j < simpleInputs.length; j++) {
      var el = $(simpleInputs[j]);
      if (!el) continue;
      el.addEventListener('input', recompute);
      el.addEventListener('change', recompute);
    }
    var slider = $('cf-slider');
    if (slider) slider.addEventListener('input', recompute);

    var curEl = $('cf-currency');
    if (curEl) curEl.addEventListener('change', function (e) {
      currency = e.target.value;
      updateCurrencyDisplay();
    });

    updateCurrencyDisplay();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
