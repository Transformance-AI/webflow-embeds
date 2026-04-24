/**
 * Transformance DSO Calculator — live wiring + form-gated Excel download.
 *
 * Wires up the Days Sales Outstanding calculator on /tools/dso-calculator.
 * Finds elements by ID, attaches input listeners, computes:
 *   DSO              = (AR / Revenue) * Period
 *   Gap vs benchmark = DSO - industryBenchmark
 *   Cash trapped     = gap * Revenue / 365   (positive gap → red)
 *
 * Inputs:
 *   #dso-rev       Annual revenue (comma-formatted as user types)
 *   #dso-ar        Total AR balance (comma-formatted)
 *   #dso-period    Measurement period in days (e.g. 365)
 *   #dso-ind       Industry benchmark dropdown (value = days)
 *
 * Outputs:
 *   #dso-out       Big DSO number ("66 days")
 *   #dso-bench     Echoed benchmark ("52 days")
 *   #dso-trapped   Cash-trapped amount (€123k / 5 days) — color inline-set
 *   #dso-exp       Explanatory line below trapped
 *
 * Excel gate (Webflow native form):
 *   #dso-excel-form        the FormForm
 *   #dso-name / #dso-email visible inputs
 *   #dso-form-industry / #dso-form-benchmark / #dso-form-revenue /
 *   #dso-form-ar / #dso-form-dso  hidden capture fields populated on submit
 *   .dso-gate-btn          submit button (also acts as direct download anchor)
 *
 * On submit: name validation, populates hidden fields, lets Webflow's native
 * AJAX submit run, then watches for .w-form-done becoming visible and triggers
 * a blob download with a clean filename (CDN doesn't send Content-Disposition).
 *
 * Loaded via:
 *   <script async src="https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@v1.1.3/dist/dso-calculator.js"></script>
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

  // Trigger a clean-named download via fetch+blob — Webflow CDN doesn't send
  // Content-Disposition, so the download="..." attribute alone gets ignored.
  function triggerDownload(url, filename) {
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
  }

  // Read latest calc context so hidden form fields ship the user's inputs +
  // computed DSO with the lead capture submission.
  function snapshotContext() {
    var indEl = document.getElementById('dso-ind');
    var industryLabel = '';
    if (indEl && indEl.options && indEl.selectedIndex >= 0) {
      industryLabel = indEl.options[indEl.selectedIndex].text;
    }
    var revEl = document.getElementById('dso-rev');
    var arEl = document.getElementById('dso-ar');
    var outEl = document.getElementById('dso-out');
    return {
      industry: industryLabel,
      benchmark: indEl ? indEl.value : '',
      revenue: revEl ? revEl.value : '',
      ar: arEl ? arEl.value : '',
      dso: outEl ? outEl.textContent : ''
    };
  }

  function setHidden(id, val) {
    var el = document.getElementById(id);
    if (el) el.value = val;
  }

  // Wire the Webflow native form: validate, fill hiddens, watch for the
  // success state, then fire the blob download with a clean filename.
  function wireForm() {
    var form = document.getElementById('dso-excel-form');
    if (!form) return;
    var btn = form.querySelector('.dso-gate-btn');
    var nameEl = document.getElementById('dso-name');
    var emailEl = document.getElementById('dso-email');

    // Source-of-truth file URL: prefer the submit button's href if present
    // (acts as a no-JS fallback link), else a hardcoded asset CDN URL.
    var fileUrl = (btn && btn.getAttribute && btn.getAttribute('href')) ||
      'https://cdn.prod.website-files.com/684931abb239b84984296d93/69ebc51285b892f7825a86be_transformance-dso-analysis.xlsx';
    var filename = 'Transformance DSO Analysis.xlsx';

    form.addEventListener('submit', function () {
      var nameVal = nameEl ? nameEl.value.trim() : '';
      if (!nameVal && nameEl) {
        flashError(nameEl, 'Please enter your first name');
        // Don't preventDefault; Webflow's own validation will also fire on
        // the email field. We just need our friendlier name flash.
      }
      var ctx = snapshotContext();
      setHidden('dso-form-industry', ctx.industry);
      setHidden('dso-form-benchmark', ctx.benchmark);
      setHidden('dso-form-revenue', ctx.revenue);
      setHidden('dso-form-ar', ctx.ar);
      setHidden('dso-form-dso', ctx.dso);
    }, true);

    // Webflow renders .w-form-done (success) and .w-form-fail (error) as
    // siblings of the <form> inside .w-form. Watch for the success element
    // gaining display:block — that's our cue to trigger the download.
    var wrap = form.closest('.w-form');
    if (!wrap) return;
    var done = wrap.querySelector('.w-form-done');
    if (!done) return;
    var fired = false;
    var mo = new MutationObserver(function () {
      if (fired) return;
      var visible = done.style.display === 'block' ||
        getComputedStyle(done).display !== 'none';
      if (visible) {
        fired = true;
        triggerDownload(fileUrl, filename);
      }
    });
    mo.observe(done, { attributes: true, attributeFilter: ['style', 'class'] });
  }

  function init() {
    wireForm();
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
