/**
 * Transformance DSO Calculator — live wiring.
 *
 * Wires up the Days Sales Outstanding calculator on /tools/dso-calculator.
 * Finds elements by ID, attaches input listeners, computes:
 *   DSO             = (AR / Revenue) * Period
 *   Gap vs benchmark = DSO - industryBenchmark
 *   Cash trapped    = gap * Revenue / 365   (positive gap → red)
 *
 * Expected page markup (IDs) — all input[type=text]:
 *   #dso-rev       Annual revenue (comma-formatted as user types)
 *   #dso-ar        Total AR balance (comma-formatted)
 *   #dso-period    Measurement period in days (e.g. 365)
 *   #dso-ind       Industry benchmark in days (e.g. 52)
 *
 * Expected result elements:
 *   #dso-out       Big DSO number ("66 days")
 *   #dso-bench     Echoed benchmark ("52 days")
 *   #dso-trapped   Cash-trapped amount (€123k / 5 days) — color inline-set
 *   #dso-exp       Explanatory line below trapped
 *
 * Loaded via:
 *   <script async src="https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@v1.1.0/dist/dso-calculator.js"></script>
 */
(function () {
  function fmt(n) {
    if (!isFinite(n)) return '—';
    var a = Math.abs(n);
    var s = n < 0 ? '-' : '';
    if (a >= 1e6) return s + '€' + (a / 1e6).toFixed(1) + 'M';
    if (a >= 1e3) return s + '€' + (a / 1e3).toFixed(0) + 'k';
    return s + '€' + a.toFixed(0);
  }

  function parse(el) {
    return parseFloat(el.value.replace(/,/g, '')) || 0;
  }

  function commas(el) {
    var pos = el.selectionStart;
    var digits = el.value.replace(/[^\d]/g, '');
    el.value = digits ? Number(digits).toLocaleString('en-US') : '';
    try { el.setSelectionRange(pos, pos); } catch (e) { /* no-op */ }
  }

  // Show an inline error on a field: red border + message below, auto-clears
  // on next input.
  function flashError(inputEl, msg) {
    if (!inputEl) return;
    inputEl.focus();
    var prev = inputEl.style.borderColor;
    inputEl.style.borderColor = '#ef4444';
    inputEl.setAttribute('aria-invalid', 'true');
    var errId = inputEl.id + '-err';
    var err = document.getElementById(errId);
    if (!err) {
      err = document.createElement('div');
      err.id = errId;
      err.style.cssText = 'color:#ef4444;font-size:12px;margin-top:-10px;margin-bottom:12px;font-family:Geist,sans-serif;';
      inputEl.parentNode.insertBefore(err, inputEl.nextSibling);
    }
    err.textContent = msg;
    var clearOnInput = function () {
      err.textContent = '';
      inputEl.style.borderColor = prev || '';
      inputEl.removeAttribute('aria-invalid');
      inputEl.removeEventListener('input', clearOnInput);
    };
    inputEl.addEventListener('input', clearOnInput);
  }

  // Gate the Excel download on name + valid email, stash lead data in
  // localStorage (placeholder until real HubSpot / webhook capture is wired),
  // then fetch the xlsx as a blob and trigger a named download so the filename
  // drops the Webflow asset-id prefix.
  function wireDownloadButton() {
    var btn = document.querySelector('.dso-gate-btn');
    if (!btn || !btn.href) return;
    var nameEl = document.getElementById('dso-name');
    var emailEl = document.getElementById('dso-email');

    btn.addEventListener('click', function (e) {
      if (e.defaultPrevented) return;
      var url = btn.href;
      if (!/\.xlsx(\?|$)/i.test(url)) return;
      e.preventDefault();

      // --- Validation ---
      var nameVal = nameEl ? nameEl.value.trim() : '';
      var emailVal = emailEl ? emailEl.value.trim() : '';
      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal);
      if (!nameVal && nameEl) { flashError(nameEl, 'Please enter your first name'); return; }
      if (!emailOk && emailEl) { flashError(emailEl, 'Please enter a valid business email'); return; }

      // --- Capture lead data (localStorage placeholder; wire real capture later) ---
      try {
        var indEl = document.getElementById('dso-ind');
        var revEl = document.getElementById('dso-rev');
        var arEl = document.getElementById('dso-ar');
        var outEl = document.getElementById('dso-out');
        var industryLabel = '';
        if (indEl && indEl.options && indEl.selectedIndex >= 0) {
          industryLabel = indEl.options[indEl.selectedIndex].text;
        }
        var lead = {
          firstname: nameVal,
          email: emailVal,
          industry: industryLabel,
          industry_benchmark_days: indEl ? indEl.value : '',
          revenue: revEl ? revEl.value : '',
          ar_balance: arEl ? arEl.value : '',
          computed_dso: outEl ? outEl.textContent : '',
          source: 'dso-calculator',
          captured_at: new Date().toISOString()
        };
        window.localStorage.setItem('dso_lead_' + Date.now(), JSON.stringify(lead));
      } catch (e) { /* ignore storage errors */ }

      // --- Trigger blob download with clean filename ---
      var filename = btn.getAttribute('download') || 'Transformance DSO Analysis.xlsx';
      fetch(url)
        .then(function (res) {
          if (!res.ok) throw new Error('download failed');
          return res.blob();
        })
        .then(function (blob) {
          var objectUrl = URL.createObjectURL(blob);
          var link = document.createElement('a');
          link.href = objectUrl;
          link.download = filename;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          setTimeout(function () { URL.revokeObjectURL(objectUrl); }, 1500);
        })
        .catch(function () {
          window.open(url, '_blank');
        });
    });
  }

  function init() {
    wireDownloadButton();
    var r = document.getElementById('dso-rev');
    var a = document.getElementById('dso-ar');
    var p = document.getElementById('dso-period');
    var i = document.getElementById('dso-ind');
    var out = document.getElementById('dso-out');
    var bench = document.getElementById('dso-bench');
    var trapped = document.getElementById('dso-trapped');
    var exp = document.getElementById('dso-exp');
    if (!r || !a || !p || !i || !out) return;

    function upd() {
      var R = parse(r);
      var A = parse(a);
      var P = parseFloat(p.value) || 365;
      var B = parseFloat(i.value) || 46;
      bench.textContent = B + ' days';

      if (!R || !A) {
        out.textContent = '—';
        trapped.textContent = '—';
        exp.textContent = 'Enter revenue and AR.';
        return;
      }

      var d = (A / R) * P;
      out.textContent = Math.round(d) + ' days';
      var g = d - B;

      if (g > 0) {
        trapped.textContent = fmt(g * R / 365);
        trapped.style.color = '#ef4444';
        exp.textContent = 'trapped vs industry median (' + Math.round(g) + ' days above benchmark)';
      } else {
        trapped.textContent = Math.abs(Math.round(g)) + ' days';
        trapped.style.color = '#10b981';
        exp.textContent = 'better than industry median';
      }
    }

    r.addEventListener('input', function () { commas(r); upd(); });
    a.addEventListener('input', function () { commas(a); upd(); });
    p.addEventListener('input', upd);
    i.addEventListener('change', upd);
    upd();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
