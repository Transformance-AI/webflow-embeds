/**
 * Auto-mount controller for <transformance-popup>.
 *
 * Behaviour:
 *   1. Decides whether the current page qualifies (only blog posts and
 *      solution pages do; everything else exits silently).
 *   2. Resolves the variant by reading <meta name="tf-blog-category"> for
 *      blogs (Webflow injects the CMS Category field), and a static URL→
 *      variant map for solution pages.
 *   3. Reads localStorage for a per-variant dismissal flag with 30-day TTL.
 *      Suppressed if dismissed recently.
 *   4. Sets up two triggers: 35% scroll past the article element OR 25-second
 *      timer. First-fire wins, both listeners cleared.
 *   5. Pushes telemetry events to window.dataLayer if present (GA4-compatible).
 */
import { POPUP_VARIANTS } from './configs.js';
import { stripLocale } from '../shared/locale.js';

const STORAGE_PREFIX = 'tf_popup_dismissed_';
const TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 days
const SCROLL_THRESHOLD_PCT = 35;
const TIMER_MS = 25 * 1000;

/**
 * Static URL→variant map for solution pages. Exact match on pathname.
 */
const SOLUTION_VARIANTS = {
  '/solutions/cash-flow-forecasting': 'cash-forecast',
  '/solutions/cash-application':       'cash-app',
  '/solutions/collections':            'collections',
  '/solutions/claims-and-deductions':  'deductions',
  '/solutions/deductions':             'deductions',
  '/solutions/vero-agent':             'vero',
  '/solutions':                        'o2c',
};

/**
 * CMS Category aliases. The CMS Category field may be Title Case or hyphen-
 * style. Normalise to the canonical topic id used in POPUP_VARIANTS.
 */
const CATEGORY_ALIASES = {
  'cash-forecasting':     'cash-forecast',
  'cash-flow-forecasting':'cash-forecast',
  'cash-flow':            'cash-forecast',
  'forecasting':          'cash-forecast',
  'cash-application':     'cash-app',
  'cash-app':             'cash-app',
  'collections':          'collections',
  'collection':           'collections',
  'ar-collections':       'collections',
  'deductions':           'deductions',
  'deduction':            'deductions',
  'claims':               'deductions',
  'claims-and-deductions':'deductions',
  'vero':                 'vero',
  'o2c':                  'o2c',
  'order-to-cash':        'o2c',
  'order-to-cash-broad':  'o2c',
  'general-o2c':          'o2c',
  'invoice-to-cash':      'o2c',
  'ar-automation':        'o2c',
  'ai-in-finance':        'o2c',
  'ai-finance':           'o2c',
  'vendor-comparison':    'vendor-comparison',
  'vendor-comparisons':   'vendor-comparison',
  'comparisons':          'vendor-comparison',
  'competitors':          'vendor-comparison',
};

function normalizeCategory(raw) {
  if (!raw) return null;
  const norm = String(raw).trim().toLowerCase().replace(/\s+/g, '-');
  if (POPUP_VARIANTS[norm]) return norm;
  if (CATEGORY_ALIASES[norm]) return CATEGORY_ALIASES[norm];
  return null;
}

/**
 * URL-slug pattern fallback when the meta tag is missing or unmappable.
 * Mirrors the same prefix logic used by the audit tool.
 */
function variantFromBlogSlug(slug) {
  if (!slug) return 'default';
  if (/^ar-cash-forecasting|^13-week|cash-flow-forecast|automated-cash-flow|why-are-most-cash-flow/.test(slug)) return 'cash-forecast';
  if (/cash-application|cash-app|payment-reconciliation|auto-cash/.test(slug)) return 'cash-app';
  if (/collections|dunning|reducing-dso|best-tools-for-reducing-dso/.test(slug)) return 'collections';
  if (/deduction|claim|partial-payments/.test(slug)) return 'deductions';
  if (/highradius|billtrust|blackline|competitors|alternatives|kyriba|tesorio/.test(slug)) return 'vendor-comparison';
  if (/order-to-cash|o2c|invoice-to-cash|accounts-receivable-automation|what-is-order/.test(slug)) return 'o2c';
  return 'default';
}

function resolveContext() {
  /* Every check below is written against the EN path shape. Without this,
     a /de/... page matches nothing here - not "matches the wrong thing",
     matches NOTHING, because SOLUTION_VARIANTS keys are all EN-rooted and
     no branch below strips /de first. That is the exact bug this had:
     resolveContext() returned null on every German page, so the popup
     never fired anywhere on the German site. Strip the locale prefix once,
     here, so nothing downstream needs to know locales exist. */
  const path = stripLocale(window.location.pathname.replace(/\/+$/, ''));

  // Solution pages: exact match
  for (const [solPath, variant] of Object.entries(SOLUTION_VARIANTS)) {
    if (path === solPath) return { variant, kind: 'solution', slug: solPath };
  }

  // Blog posts: meta tag → slug fallback
  if (path.startsWith('/blog-posts/')) {
    const meta = document.querySelector('meta[name="tf-blog-category"]');
    const fromMeta = normalizeCategory(meta && meta.getAttribute('content'));
    const slug = path.split('/').pop() || '';
    const variant = fromMeta || variantFromBlogSlug(slug);
    return { variant, kind: 'blog', slug };
  }

  // Glossary terms: cluster meta tag → default fallback
  if (path.startsWith('/glossary/') && path !== '/glossary') {
    const meta = document.querySelector('meta[name="tf-glossary-cluster"]');
    const fromMeta = normalizeCategory(meta && meta.getAttribute('content'));
    const slug = path.split('/').pop() || '';
    return { variant: fromMeta || 'default', kind: 'glossary', slug };
  }

  return null;
}

function isDismissed(variant) {
  try {
    const v = localStorage.getItem(STORAGE_PREFIX + variant);
    if (!v) return false;
    const ts = Number(v);
    return Number.isFinite(ts) && Date.now() - ts < TTL_MS;
  } catch {
    return false;
  }
}

function recordDismiss(variant) {
  try {
    localStorage.setItem(STORAGE_PREFIX + variant, String(Date.now()));
  } catch {
    /* ignore — Safari ITP / incognito */
  }
}

function track(eventName, props) {
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName, ...props });
  } catch {
    /* ignore */
  }
}

function findArticle() {
  return (
    document.querySelector('article') ||
    document.querySelector('[role="main"]') ||
    document.querySelector('main') ||
    document.body
  );
}

function scrollPercent(el) {
  const rect = el.getBoundingClientRect();
  const docHeight = el === document.body ? document.documentElement.scrollHeight : el.scrollHeight;
  const viewport = window.innerHeight;
  const scrolled = window.scrollY - (el.offsetTop || 0);
  if (docHeight <= viewport) return 100;
  return (scrolled + viewport) / docHeight * 100;
}

const HERO_DEFER_MS = 300;
const HERO_MAX_DEFER_MS = 8000;
const POPUP_WIDTH = 360;
const POPUP_MARGIN = 24;
const POPUP_HEIGHT_ESTIMATE = 420; // conservative — actual card height varies with content

/**
 * True if any animated story card (the hero's #heroMockup, or any
 * <transformance-story> - Collections has five more in its body sections) is
 * currently on screen where the popup would render (fixed, bottom-right
 * corner). No-ops on pages without those elements (blogs, glossary, etc).
 */
function heroOverlapsPopup() {
  const popupLeft = window.innerWidth - POPUP_WIDTH - POPUP_MARGIN;
  const popupTop = window.innerHeight - POPUP_HEIGHT_ESTIMATE - POPUP_MARGIN;
  const els = [document.getElementById('heroMockup'), ...document.querySelectorAll('transformance-story')];
  for (const el of els) {
    if (!el) continue;
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) continue;
    if (r.right > popupLeft && r.bottom > popupTop && r.top < window.innerHeight && r.left < window.innerWidth) return true;
  }
  return false;
}

let installed = false;

const DEBUG = (() => {
  try {
    return /[?&]tf_debug=1/.test(window.location.search) || localStorage.getItem('tf_popup_debug') === '1';
  } catch { return false; }
})();
function dbg(...args) { if (DEBUG) console.log('[tf-popup]', ...args); }

export function installPopup() {
  if (installed) return;
  installed = true;

  dbg('installPopup() called', { path: window.location.pathname });

  const ctx = resolveContext();
  if (!ctx) {
    dbg('no ctx — exiting (not a blog or solution page)');
    return;
  }
  dbg('resolved ctx', ctx);

  if (isDismissed(ctx.variant)) {
    dbg('dismissed within 30 days — exiting', { key: 'tf_popup_dismissed_' + ctx.variant });
    return;
  }

  // If we're already on the page that the secondary CTA links to, suppress it.
  // ctaSecondaryUrl is always stored EN-rooted (deHref() is applied only at
  // render time, in popup.js) - so the comparison needs the CURRENT path
  // stripped of its /de prefix too, or this never matches on a German page
  // and the "you're already here" link never suppresses itself there.
  const variant = POPUP_VARIANTS[ctx.variant] || POPUP_VARIANTS['default'];
  const onOwnSolutionPage = variant && variant.ctaSecondaryUrl &&
    stripLocale(window.location.pathname.replace(/\/+$/, '')) === variant.ctaSecondaryUrl.replace(/\/+$/, '');

  // Build the popup element but don't show it yet
  const el = document.createElement('transformance-popup');
  el.setAttribute('data-variant', ctx.variant);
  el.setAttribute('data-state', 'hidden');
  if (onOwnSolutionPage) el.setAttribute('data-suppress-secondary', 'true');
  document.body.appendChild(el);

  let shown = false;
  let shownAt = 0;
  let scrollHandler;
  let timerId;

  const trigger = (source) => {
    if (shown) return;
    shown = true;
    cleanupTriggers();

    const deferStart = Date.now();
    const attemptShow = () => {
      if (heroOverlapsPopup() && Date.now() - deferStart < HERO_MAX_DEFER_MS) {
        dbg('deferring — hero card still under popup position', { source });
        setTimeout(attemptShow, HERO_DEFER_MS);
        return;
      }
      shownAt = Date.now();
      el.show();
      dbg('popup shown', { source, variant: ctx.variant });
      track('popup_shown', { variant: ctx.variant, slug: ctx.slug, kind: ctx.kind, trigger: source });
    };
    attemptShow();
  };

  const cleanupTriggers = () => {
    if (scrollHandler) {
      window.removeEventListener('scroll', scrollHandler, { passive: true });
      scrollHandler = null;
    }
    if (timerId) {
      clearTimeout(timerId);
      timerId = null;
    }
  };

  const article = findArticle();
  let lastCheck = 0;
  scrollHandler = () => {
    const now = Date.now();
    if (now - lastCheck < 100) return; // throttle
    lastCheck = now;
    if (scrollPercent(article) >= SCROLL_THRESHOLD_PCT) trigger('scroll');
  };
  window.addEventListener('scroll', scrollHandler, { passive: true });
  timerId = setTimeout(() => trigger('timer'), TIMER_MS);

  el.addEventListener('tf-popup-dismiss', () => {
    el.hide();
    recordDismiss(ctx.variant);
    track('popup_dismissed', {
      variant: ctx.variant,
      slug: ctx.slug,
      time_visible_ms: Date.now() - shownAt,
    });
    setTimeout(() => el.remove(), 400);
  });

  el.addEventListener('tf-popup-cta', (e) => {
    track('popup_cta_clicked', {
      variant: ctx.variant,
      slug: ctx.slug,
      cta: e.detail.kind,
      target_url: e.detail.href,
    });
    // Let the anchor do its thing — open in same tab.
  });
}
