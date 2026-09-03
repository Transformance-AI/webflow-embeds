/**
 * Locale gate for the DE Webflow locale.
 *
 * The bundle runs client-side and knows the URL. On the German locale every
 * path is served under `/de/…`, so we detect German purely from the path.
 *
 * Usage:
 *   import { isDE } from '../shared/locale.js';
 *   const label = isDE() ? 'Weiter' : 'Next';
 *
 * The English (default-locale) code paths stay byte-identical — DE strings are
 * only ever chosen inside an `isDE()` branch, never by rewriting the EN values.
 */

export const isDE = () =>
  location.pathname.startsWith('/de/') || location.pathname === '/de';

/**
 * Prefix an internal, root-relative path with `/de` when on the DE locale.
 * Leaves absolute URLs (http…) and already-prefixed `/de/…` paths untouched.
 *   deHref('/solutions/collections') → '/de/solutions/collections'  (on DE)
 *   deHref('/solutions/collections') → '/solutions/collections'     (on EN)
 */
export const deHref = (path) => {
  if (!isDE()) return path;
  if (typeof path !== 'string' || !path.startsWith('/')) return path;
  if (path === '/de' || path.startsWith('/de/')) return path;
  return '/de' + path;
};

/**
 * Strip a leading `/de` (or `/de/...`) from a pathname, so downstream code
 * can be written once, against the EN shape, and work on both locales.
 *
 * Why this exists: as of the 2026-09-03 script audit, FOUR separate places
 * on this site each hand-roll their own "am I on a German page" check
 * (this popup controller, the DE link-remapper, ctabuttonfix, and
 * cookiebannerdelegal) — and the popup's version was simply missing,
 * which meant resolveContext() matched nothing on any /de/ page and the
 * popup never fired there. One correct implementation, reused, is cheaper
 * than four independent ones staying in sync by coincidence.
 *
 *   stripLocale('/de/solutions/collections') → '/solutions/collections'
 *   stripLocale('/de')                       → '/'
 *   stripLocale('/solutions/collections')    → '/solutions/collections'
 */
export const stripLocale = (pathname) => {
  if (pathname === '/de') return '/';
  if (pathname.startsWith('/de/')) return pathname.slice(3);
  return pathname;
};
