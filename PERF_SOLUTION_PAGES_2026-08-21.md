# Solution-page performance package (2026-08-21)

Measured mobile CWV fixes for `/solutions/*` (+ `/de/loesungen/*`). Validated with
headless Lighthouse (mobile, simulated throttle, analytics blocked), median of 3,
via a local A/B harness against the real page HTML. **Nothing here is live yet** —
rollout = a site-wide footer custom-code change + full-site publish, which must go
through the DE go-live gates (`docs/DE_GO_LIVE_CHECKLIST.md` in the pipeline repo).

## Baseline (Collections, mobile)
score ~57 · LCP 6.7–7.5s 🔴 · FCP 4.8s 🔴 · TBT ~280ms · CLS 0 (perfect).
Real users worse (they also load GTM/GA/Clarity/Snitcher/cookie-banner).

## Win #1 — Gate the tours player (READY, zero functional risk)

**Finding:** all 5 solution pages load `player.js` (74 KB gz / 356 KB raw, `@v3.1.3`)
but **none contain a `<transformance-tour>` element** — it's dead weight everywhere on
`/solutions/*`. The tag is global (site footer), so it ships on every page.

**Result of gating (median of 3):** score **+5** (57→62), **LCP −10%**, **TBT −34%**,
TTI −10%. Matches removing the player outright, because there's nothing for it to mount to.

**The change:** in the Webflow **site footer custom code**, replace the raw
`<script src=".../player.js" …></script>` with this self-gating loader. It loads the
player only when a tour element is present, preserves SRI, and exposes an on-demand
`window.__loadTourPlayer()` for any future dynamic trigger:

```html
<script>(function(){
  var S="https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@v3.1.3/dist/player.js",
      I="sha256-26jtehfJ0XYjtMPfrH2Uv9v7qvtteP4p2HNRSNbqyOM=",done=false;
  function load(){if(done)return;done=true;var s=document.createElement("script");
    s.src=S;s.integrity=I;s.crossOrigin="anonymous";s.async=true;document.body.appendChild(s);}
  window.__loadTourPlayer=load;
  function chk(){if(document.querySelector("transformance-tour"))load();}
  if(document.readyState!=="loading")chk();else document.addEventListener("DOMContentLoaded",chk);
})();</script>
```

(If a page ever needs the player before an element exists — e.g. a button that injects a
tour — call `window.__loadTourPlayer()` in that handler. Keep the SRI hash in sync with
whatever `player.js` version the footer pins.)

## Win #2 — Stop injecting the main CSS via JavaScript (ROOT CAUSE of both LCP delay AND desktop CLS)

**The big finding (from reading `dist/lgv3-bootstrap2-i18n.js`).** The main stylesheet
`liquid-glass-v3-10.css` is NOT a parser-discoverable `<link>` in the HTML — the
render-blocking bootstrap script **injects it via JS** (`L(CSS,{rel:'stylesheet'})`). So the
core CSS cannot begin downloading until bootstrap2 downloads AND executes — a serialized
chain the browser's preload scanner can't see. On real 4G mobile (≈750 ms/round-trip) that
costs seconds. Consequences, confirmed against the live PSI run (2026-08-21):
- **Mobile LCP 7.7s** is ~4.3s of *render delay* (hero image loads in 20 ms but can't paint
  until the JS-injected CSS lands and lays it out).
- **Desktop CLS 0.584** (🚩 severe, separate from mobile) is the desktop hero grid
  **reflowing** when that late CSS finally applies. Mobile stacks simply → CLS 0; desktop
  grid reflows → 0.584. Same root cause, two symptoms.

Note: the page-class critical-CSS block in bootstrap2 (`.hero-platform-grid{display:none}`
etc.) matches ONLY `/solutions` and `/home` — it does NOT run on `/solutions/collections`,
so that `display:none` is not the collections culprit. The JS-injected CSS is.

**The fix (a Webflow HEAD custom-code change — needs a publish, so it's staged not shipped):**
make the CSS parser-discoverable so it downloads in parallel instead of behind the script.
Add to the site (or solution-page) **Head** custom code, BEFORE the bootstrap script:
```html
<link rel="preload" as="style" fetchpriority="high"
      href="https://cdn.prod.website-files.com/684931abb239b84984296d93/6a2a72efdff0174b684477f4_liquid-glass-v3-10.css">
<link rel="stylesheet"
      href="https://cdn.prod.website-files.com/684931abb239b84984296d93/6a2a72efdff0174b684477f4_liquid-glass-v3-10.css">
```
(The bootstrap's own later inject then no-ops from cache. Keep the URL in sync if the CSS
version bumps.)

**⚠️ Harness caveat — MUST validate on real mobile.** The local A/B harness UNDERSTATES this
fix: it's a network-round-trip win, and the local server has fast RTT, so the harness showed
only LCP −1% to −8% (noise-adjacent) and couldn't reproduce the 0.584 desktop CLS at all
(local desktop CLS 0.025). The root cause is confirmed *in code*, but the *magnitude* can
only be measured with a real-mobile A/B (PSI/DevTools). Test it the same way as the player-gate.

Secondary: bootstrap2 is also render-blocking itself (Lighthouse: ~750 ms of a ~1.65 s total;
the other two blockers are Webflow's own CSS, ~750 ms each). Making the CSS parser-discoverable
is the higher-value move; further unblocking bootstrap2 risks a TBT trap (a naive `defer`
measured score −16 locally) and needs care.

## Win #3 — Defer/consent-gate the tag stack
GTM is the single largest script on the page: **186 KB** (74 KB unused), bigger than
player.js. Consent-gating / deferring GTM+GA+Clarity+Snitcher is a real lever, separate
from the embeds. (Lower urgency: no CrUX field data yet — Google isn't ranking these on
real-user vitals — but it's cheap main-thread + bytes.)

## The ceiling (be honest)
After Wins #1–2, the remainder is Webflow's own render-blocking CSS (2×~750 ms) + TTFB.
Green mobile likely needs Webflow-platform work (critical-CSS extraction, hosting), not just
embed changes. The hero image is already optimal (avif, eager, fetchpriority=high, 20 ms
load) — **no image-optimization win exists.**

## Recommended rollout (one publish)
Apply Win #1 (footer: gated player) + Win #2 (head: CSS preload+link) together, publish to
the **`.webflow.io` subdomain only** (custom domains untouched → prod www safe), then run the
"after" Chrome/PSI test on the subdomain. If confirmed, do the deliberate prod publish through
the DE go-live gates. Log desktop-CLS + GTM as their own follow-ups.

## Consequence for the new hero animations
Because LCP is render-delay bound and the image is already optimal, the animated visuals
that replace the static AVIFs MUST: add zero render-blocking, paint their first frame
instantly (static poster, animate after) or they become the 1.6s-delayed LCP element, and
be lightweight inline SVG/CSS web-components (the `src/hero/hero.js` `<transformance-hero>`
pattern). **Video/GIF is out** — it would blow the already-failing LCP.
