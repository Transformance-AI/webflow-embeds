# Transformance — Webflow Embeds

Interactive scripts embedded in the [transformance.ai](https://transformance.ai) Webflow site.

- **Product tours** — registers `<transformance-tour>` and `<transformance-hero>` custom elements. Served from `dist/player.js`.
- **Banners (v2)** — registers `<transformance-banner>` for solution-page, lead-magnet, and demo CTAs. Bundled into `dist/player.js`. Replaces 200+ lines of inline tf-banner HTML per blog with a single line.
- **DSO calculator** — standalone ~3 KB script that wires up the DSO calculator on `/tools/dso-calculator` by element ID. Served from `dist/dso-calculator.js`.

**Bundle size:** `dist/player.js` ≈ 53 KB gz (tours + hero + banners combined). Budget cap 55 KB.

---

## How it's delivered

```
laptop  ──git push──▶  GitHub (this repo)  ──▶  jsDelivr CDN  ──▶  browser (via Webflow)
```

- Source + built bundle live in this repo.
- [jsDelivr](https://www.jsdelivr.com/) serves any public GitHub repo automatically — no account, no config.
- Webflow adds **one `<script>` tag** to the site head that points at the jsDelivr URL.

---

## Usage in Webflow

### 1. Site-wide script (Project Settings → Custom Code → Footer Code)

```html
<script async src="https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@v1/dist/player.js"></script>
```

Use a **tagged version** (`@v1`, `@v1.0.0`, etc.) rather than `@main` — that guarantees a future push can't accidentally change what the live site loads.

### 2. Per-page embed (Webflow Embed element)

#### Tours

```html
<transformance-tour data-tour="cash-app"></transformance-tour>
```

Available tour ids: `cash-app`, `collections`, `deductions`, `predictions`, `vero-chat`, `vero-chat-v2`.

#### Banners (v2+)

```html
<transformance-banner data-topic="cash-app"></transformance-banner>
```

Available banner topics:

| Topic id | Layout | Destination |
|---|---|---|
| `cash-app` | Solution page | `/solutions/cash-application` |
| `collections` | Solution page | `/solutions/collections` |
| `deductions` | Solution page | `/solutions/deductions` |
| `cash-forecast` | Solution page | `/solutions/cash-flow-forecasting` |
| `vero` | Solution page | `/solutions/vero-agent` |
| `dso-calc` | Lead-magnet (free tool) | `/tools/dso-calculator` |
| `cf-template` | Lead-magnet (free tool) | `/tools/cash-flow-forecasting-tool` |
| `demo` | Demo / book a call | `/meeting` |

Per-embed overrides (all optional):

```html
<transformance-banner
  data-topic="cash-app"
  data-headline="Custom <grad>headline phrase</grad> for this blog"
  data-cta-text="Custom CTA"
  data-href="/custom-page"
  data-image-url="https://cdn.prod.website-files.com/.../shot.png"
  data-image-alt="Product preview"
></transformance-banner>
```

Wrap a phrase in `<grad>...</grad>` inside `data-headline` to apply the brand orange→indigo gradient. When `data-image-url` is set, the banner uses a 2-column layout (image left, claims right). Without an image it's a clean single-column layout.

Visual smoke test: `dist/banners-test.html` renders all 8 topics + an override example. Open locally with `npm run serve`.

### 3. DSO calculator — per-page script

Added to the DSO calculator page (`/tools/dso-calculator`) only. Just a `<script src>` reference — no inline JS to paste:

```html
<script async src="https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@v1/dist/dso-calculator.js"></script>
```

The script auto-initialises when the DOM is ready. It looks for:

| Input ID | Purpose |
|---|---|
| `#dso-rev` | Annual revenue (comma-formatted input) |
| `#dso-ar` | Total AR balance (comma-formatted input) |
| `#dso-period` | Measurement period, days |
| `#dso-ind` | Industry benchmark, days |

| Output ID | Purpose |
|---|---|
| `#dso-out` | Big DSO number |
| `#dso-bench` | Echoed benchmark |
| `#dso-trapped` | Cash trapped amount (colored red if over benchmark, green if under) |
| `#dso-exp` | Explanatory line below trapped |

If the expected IDs aren't present on the page, the script silently no-ops — safe to load everywhere.

### 4. Optional CTA override

The closing card defaults to a "Book a meeting" button pointing at `transformance.ai/meeting`.
Override per embed:

```html
<transformance-tour
  data-tour="collections"
  data-cta-html='<a class=&quot;closing-default-cta&quot; href=&quot;/book-a-demo&quot;>Book a demo</a>'
></transformance-tour>
```

---

## Local development

```bash
npm install
npm run build        # builds dist/player.js + dist/perf/*.html
npm run serve        # serves /dist at http://localhost:4173
```

Open `http://localhost:4173/perf/` to pick a tour and run Lighthouse against it.

## Release workflow

1. Edit scenes under `src/tours/scenes/` or engine under `src/tours/engine/`.
2. `npm run build` — verify bundle stays under 42 KB gz.
3. Commit + push.
4. **Tag a release** — this is the URL Webflow pins to:
   ```bash
   git tag v1.0.1
   git push origin v1.0.1
   ```
5. Update the `@<tag>` in the Webflow Footer Code script tag.
6. jsDelivr serves the new bundle worldwide within seconds (first request may take a few seconds to warm).

---

## What's inside

| Path | Purpose |
|---|---|
| `src/tours/engine/`            | Player runtime (Web Component, Shadow DOM, spotlight, tooltips) |
| `src/tours/scenes/<id>.js`     | One file per tour, defines its scenes |
| `src/tours/shared/`            | Shared catalogs (companies, lucide icons) |
| `scripts/build-tours.mjs`      | Bundles `src/tours/index.js` → `dist/player.js` |
| `scripts/build-tour-perf-pages.mjs` | Generates `dist/perf/*.html` Lighthouse host pages |
| `dist/player.js`               | The file jsDelivr serves. **Commit this.** |
| `dist/manifest.json`           | Build metadata (size, tour ids, timestamp) |
| `dist/perf/*.html`             | Marketing-style pages for Lighthouse testing |

---

## Why safe to drop on a Webflow page

| Concern | Status |
|---|---|
| External fonts loaded? | No. Falls back from `Geist` to `system-ui`. Webflow already loads Geist globally. |
| External images loaded? | No. Flags + industry icons are inline SVG baked into the bundle. |
| Remote fetches / XHR? | No. Zero `fetch`/`XMLHttpRequest`. |
| Touches host page CSS? | No. All styles live inside a Shadow DOM. |
| Touches host page DOM? | One benign mutation — `document.body.style.overflow = 'hidden'` during mobile fullscreen, restored on exit. |
| jQuery / framework deps? | None. Vanilla `customElements` + `requestAnimationFrame`. |
| Bundle size | ~41 KB gz. Build fails above 42 KB gz to catch regressions. |

---

## License

Proprietary — © Transformance AI.
