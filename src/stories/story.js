/**
 * <transformance-story> custom element.
 *
 * One animated story section from the solution pages, rendered into a shadow
 * root. Usage on a Webflow page:
 *
 *   <transformance-story data-story="vero-loop"></transformance-story>
 *   <script async src="…/dist/story-vero.js"></script>
 *
 * The markup and stylesheet are generated from the React sources in
 * platform-mockups by `node scripts/export-stories.mjs`. Nothing here is
 * hand-maintained - to change a story, change the component and re-export.
 *
 * Why this shape, given /solutions/* is already at 6.7s mobile LCP:
 *
 *   1. NOTHING IS BUILT UNTIL IT IS NEARLY IN VIEW. Every story sits below the
 *      fold, so the shadow root is not created until an IntersectionObserver
 *      says the element is within 400px of the viewport. Zero LCP cost.
 *   2. Space is reserved up front from `data-h`, so pulling the content in late
 *      cannot shift the page. This is the whole reason `data-h` exists.
 *   3. Animations are PAUSED whenever the section is off-screen. Thirty CSS
 *      keyframe loops running in background tabs is exactly the kind of thing
 *      that shows up as INP and battery drain on mobile.
 *   4. Shadow DOM, so Webflow's global CSS cannot reach in and the story's
 *      utilities cannot leak out. Preflight is deliberately not included.
 *
 * Localization: the exported markup is English. `isDE()` is wired up so a DE
 * table can be dropped in later; until one exists the element renders nothing
 * on /de/ rather than showing English copy on a German page.
 */

import { isDE } from '../shared/locale.js';

/* Data first, THEN define the element - never the other way round. ES module
   imports are hoisted, so an entry that imports this file and then calls a
   register function would define (and upgrade) the element before the data
   existed, and every connectedCallback would bail on an empty registry. Hence
   one function that does both, called by the per-page entry. */
const REGISTRY = { css: '', stories: {}, locale: 'en' };

export function mountStories({ css, stories, locale }) {
  REGISTRY.css = css;
  REGISTRY.stories = stories;
  REGISTRY.locale = locale || 'en';
  if (!customElements.get('transformance-story')) {
    customElements.define('transformance-story', TransformanceStory);
  }
}

const PAUSE_CSS = ':host(.tf-off) *{animation-play-state:paused!important}';

class TransformanceStory extends HTMLElement {
  connectedCallback() {
    if (this._wired) return;
    this._wired = true;

    const id = this.getAttribute('data-story') || '';

    /* Safety net: the English bundle pasted onto a German page renders nothing
       rather than English copy. Wrong script is a mistake; English on a /de/
       page is a visible brand defect. */
    if (REGISTRY.locale === 'en' && isDE()) { this.style.display = 'none'; return; }

    if (!REGISTRY.stories[id]) {
      console.warn('[transformance-story] unknown story:', id, '(locale ' + REGISTRY.locale + ')');
      return;
    }
    this._html = REGISTRY.stories[id];

    /* Reserve the space now so the late mount cannot move anything.

       Two numbers, because a section is not one height: below 1024 the copy
       stacks above the card and every section grows by 150-350px. One value
       cannot serve both - the desktop number under-reserves on a phone (a real
       shift, on the viewport where these vitals are actually measured) and the
       mobile number over-reserves on desktop (a gap that snaps shut on mount).
       So `data-h` is the desktop reserve and `data-h-sm` the mobile one; the
       verifier prints both. Falls back to `data-h` if only one is given. */
    this.style.display = 'block';
    const small = window.matchMedia('(max-width: 1023px)').matches;
    const h = (small && this.getAttribute('data-h-sm')) || this.getAttribute('data-h') || 560;
    this.style.minHeight = h + 'px';

    if (!('IntersectionObserver' in window)) { this._mount(); return; }

    const near = new IntersectionObserver((entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      near.disconnect();
      /* Never build during the critical path, even if it is already in view. */
      const go = () => this._mount();
      if ('requestIdleCallback' in window) requestIdleCallback(go, { timeout: 600 });
      else requestAnimationFrame(() => setTimeout(go, 0));
    }, { rootMargin: '400px 0px' });
    near.observe(this);
  }

  disconnectedCallback() {
    if (this._vis) { this._vis.disconnect(); this._vis = null; }
  }

  _mount() {
    if (this._mounted) return;
    this._mounted = true;

    const root = this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    style.textContent = REGISTRY.css + PAUSE_CSS;
    root.appendChild(style);
    root.appendChild(document.createRange().createContextualFragment(this._html));

    /* The real height takes over from the reservation. */
    this.style.minHeight = '';

    /* Thirty looping keyframe animations should not run out of sight. */
    this._vis = new IntersectionObserver((entries) => {
      entries.forEach((e) => this.classList.toggle('tf-off', !e.isIntersecting));
    }, { rootMargin: '100px 0px' });
    this._vis.observe(this);
  }
}
