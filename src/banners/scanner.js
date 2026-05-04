/**
 * Marker-text scanner for <transformance-banner>.
 *
 * Why this exists: Webflow Editor (the simpler content-editor tool used by
 * non-technical team members) sanitizes custom HTML elements out of
 * rich-text fields. So a content editor cannot paste
 * `<transformance-banner data-topic="cash-app">` directly — it gets stripped
 * before render. Webflow Designer's full rich-text Embed works, but we want
 * the banner system to be usable by anyone in Editor.
 *
 * Solution: editors type a plain-text marker on its own line:
 *
 *   [tf-banner:cash-app]
 *
 * This scanner walks every .w-richtext on the page after DOMContentLoaded,
 * finds <p> elements whose entire trimmed text matches the marker pattern,
 * and replaces them with a <transformance-banner data-topic="..."> element.
 * The existing custom-element handler in banner.js then renders the banner.
 *
 * Marker syntax:
 *   [tf-banner:<topic>]                   — basic
 *   [tf-banner:<topic>|cta=Book a call]   — override CTA text (future)
 *
 * Topic ids must match a key in configs.js. Unknown topics are left as text
 * (the existing custom element warns into the console).
 *
 * The marker must be on its own line (paragraph by itself). Inline markers
 * embedded inside flowing text are intentionally NOT supported — banners
 * are block-level and don't make sense mid-sentence.
 */

const MARKER_RE = /^\s*\[tf-banner:\s*([a-z0-9-]+)\s*\]\s*$/i;

function scanContainer(root) {
  if (!root) return;
  const paragraphs = root.querySelectorAll('p');
  paragraphs.forEach((p) => {
    const txt = (p.textContent || '').trim();
    const m = MARKER_RE.exec(txt);
    if (!m) return;
    const topic = m[1].toLowerCase();
    const banner = document.createElement('transformance-banner');
    banner.setAttribute('data-topic', topic);
    p.replaceWith(banner);
  });
}

function run() {
  // Webflow rich-text containers carry .w-richtext. If a page has no
  // rich-text body (e.g. landing pages), this is a no-op.
  const richtexts = document.querySelectorAll('.w-richtext');
  if (!richtexts.length) {
    // Fall back: scan the document body directly (some pages render rich
    // text without the .w-richtext wrapper, e.g. when the rich-text comes
    // from a dynamic CMS field but the wrapper class was customised).
    scanContainer(document.body);
    return;
  }
  richtexts.forEach(scanContainer);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', run);
} else {
  // Document already parsed (script loaded async after DOMContentLoaded)
  run();
}
