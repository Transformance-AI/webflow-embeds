/**
 * Site-level loader. Replaces `player.js` (the single bundle that shipped
 * tours + hero + banners + popup to every page regardless of use — see
 * HANDOVER_STORIES_AND_PERF.md §1: 79.2 KB gz, 74.6 of it dead weight on a
 * typical solution page).
 *
 * The whole design fits one sentence: PAGES DECLARE WHAT THEY CONTAIN, THE
 * LOADER DECIDES WHAT TO LOAD. It never consults a URL, a slug, or a list of
 * pages — only markup that is either already in the static HTML (a custom
 * element tag) or, for banners, a plain-text marker Webflow Editor can't
 * strip. That is deliberate: this is a SITE-LEVEL script, so a wrong guess
 * is wrong on every page at once, and a URL/slug list is wrong the moment a
 * page is renamed, added, or restructured — which is exactly the failure
 * mode Paul flagged before this was built (2026-09-03: "simple rules based
 * whitelisting would probably break quite often when we add new pages").
 *
 * Each check below is independently wrapped: one subsystem's detector
 * throwing must never block the others from loading.
 *
 * The two constants just below are replaced at build time
 * (scripts/build-loader.mjs): the part list, each entry carrying the SRI
 * hash computed from its OWN bytes — never round-tripped through a shell
 * variable, never guessed — and the list of pages that actually have a
 * German story bundle, read from disk at build time, so it can never drift
 * from what was actually built.
 */

const PARTS = /*__LOADER_PARTS_JSON__*/{"popup":{"name":"popup","src":"https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@stories-9/dist/popup.js","integrity":"sha256-kSzGe4qZVZxkB5LlCZci8mZgok3KFEGGcFCb2K4+8y0="},"tours":{"name":"tours","src":"https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@stories-9/dist/tours.js","integrity":"sha256-VfF1RD3+J1Qy6gFfWywEbKyRz6zJDIFzvhjVFiz9L3c="},"hero":{"name":"hero","src":"https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@stories-9/dist/hero.js","integrity":"sha256-wzBpzs3haW7JuAlx83eYvMJe3GPXx45NzhA+VC4aHYA="},"banners":{"name":"banners","src":"https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@stories-9/dist/banners.js","integrity":"sha256-fbevA+UWL7Gh+gP5mngrKirv6Lm2X+X7mIw84SBQAgw="},"story-cashpulse.de":{"name":"story-cashpulse.de","src":"https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@stories-9/dist/story-cashpulse.de.js","integrity":"sha256-Rz5MCG7nK/2ywAN3K7sYSlEF5lAbe58CMzrSg3ar0J4="},"story-cashpulse":{"name":"story-cashpulse","src":"https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@stories-9/dist/story-cashpulse.js","integrity":"sha256-SdrhcstDfZ3F8COv1KnInabcIn/xGnWneDgD5bWJIDA="},"story-claimiq.de":{"name":"story-claimiq.de","src":"https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@stories-9/dist/story-claimiq.de.js","integrity":"sha256-/Lxzqkd8NgYXGJE8PDbRKOWpG1gAXT5eMYUmpKnZqn4="},"story-claimiq":{"name":"story-claimiq","src":"https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@stories-9/dist/story-claimiq.js","integrity":"sha256-YyWbftBQhSYMtQ6oh5HyUp6oEXhtgAmT5HYHiSBMCHc="},"story-clearmatch.de":{"name":"story-clearmatch.de","src":"https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@stories-9/dist/story-clearmatch.de.js","integrity":"sha256-dnSQuACz/4OOlc2f/Oddvm7Uwbbpl0ldF0H+w0r3/ZI="},"story-clearmatch":{"name":"story-clearmatch","src":"https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@stories-9/dist/story-clearmatch.js","integrity":"sha256-jA0I3bNrzByAJotgZ/dpKN7A8NKElaXZgHUhJrRpsL4="},"story-collections.de":{"name":"story-collections.de","src":"https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@stories-9/dist/story-collections.de.js","integrity":"sha256-4mLHWqfW6ghqft9ye3zCQ9qxEUwI5FhyxVmcYcYm+k0="},"story-collections":{"name":"story-collections","src":"https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@stories-9/dist/story-collections.js","integrity":"sha256-4KoHmUawWEGzfy22hmdhSn0/j34B2pak5/9lxGB0UIM="},"story-home":{"name":"story-home","src":"https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@stories-9/dist/story-home.js","integrity":"sha256-UVRst0hN2HHLaR+KnuQULAMYwkgqEUiVgcwQSwAu4kU="},"story-vero.de":{"name":"story-vero.de","src":"https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@stories-9/dist/story-vero.de.js","integrity":"sha256-s7b6ngNUNz4oWwwuGNxfGmUIhJjYIpQ/rGLKJkE+RfE="},"story-vero":{"name":"story-vero","src":"https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@stories-9/dist/story-vero.js","integrity":"sha256-rC08dcqkOQE+u1ptHDwfU4NXq1btoTHPLgXzbMnZJUo="}};
const STORY_DE_PAGES = /*__LOADER_STORY_DE_JSON__*/["cashpulse","claimiq","clearmatch","collections","vero"];

const isDE = () =>
  location.pathname.startsWith('/de/') || location.pathname === '/de';

const loaded = [];
const skipped = [];

function inject(part) {
  if (!part) { skipped.push('(missing part definition)'); return; }
  const s = document.createElement('script');
  s.src = part.src;
  s.defer = true;
  s.integrity = part.integrity;
  s.crossOrigin = 'anonymous';
  document.head.appendChild(s);
  loaded.push(part.name);
}

function has(selector) {
  try { return !!document.querySelector(selector); }
  catch { return false; }
}

/* Tours: <transformance-tour data-tour="..."> is real markup in the static
   HTML — Designer Embeds survive Editor's sanitizer, unlike raw custom
   elements pasted into rich text (see the banner marker note below). */
function wantsTours() { return has('transformance-tour[data-tour]'); }

/* Hero: <transformance-hero> is likewise real markup, homepage only. */
function wantsHero() { return has('transformance-hero'); }

/* Banners arrive in TWO forms and the loader has to accept both.

   1. A real <transformance-banner> element. Webflow DESIGNER's rich-text
      Embed survives into the published HTML, and this is what the content
      actually uses: 132 of 204 live posts carry the element, plus glossary
      terms. This is the common case.
   2. A plain-text marker, [tf-banner:<topic>]. Webflow EDITOR (the simpler
      tool non-technical staff use) sanitizes custom elements out of
      rich-text, so an Editor user cannot paste form 1; they type the
      marker and banners.js's own scanner converts it after load. Nobody
      has used this yet, but it is the reason the feature is usable by
      non-developers at all, so it stays.

   Checking only the marker was the 2026-09-07 regression: the loader
   looked for the form nobody uses, decided not to load banners.js, and so
   never loaded the script that would have rendered the elements that were
   right there in the DOM. Banners went dark on 132 posts in both locales.
   Form 1 must be checked FIRST and on its own - it is a querySelector on
   markup already parsed, not a textContent scan. */
const BANNER_MARKER_RE = /\[tf-banner:\s*[a-z0-9-]+\s*\]/i;
function wantsBanners() {
  try {
    if (document.querySelector('transformance-banner')) return true;
    const richtexts = document.querySelectorAll('.w-richtext');
    const scope = richtexts.length ? richtexts : [document.body];
    for (const el of scope) if (BANNER_MARKER_RE.test(el.textContent || '')) return true;
    return false;
  } catch { return false; }
}

/* Stories: <transformance-story data-story="collections-loop"> — the page
   name is everything before the first hyphen in data-story, which is also
   the story bundle's filename (story-collections.js, story-vero.js, ...).
   A page can carry stories from at most one page-bundle in practice, but
   the loader does not assume that — it loads whatever distinct bundles the
   markup actually asks for. */
function wantedStoryPages() {
  const pages = new Set();
  try {
    document.querySelectorAll('transformance-story[data-story]').forEach((el) => {
      const id = el.getAttribute('data-story') || '';
      const page = id.split('-')[0];
      if (page) pages.add(page);
    });
  } catch { /* ignore */ }
  return pages;
}

/* Popup decides for itself (src/popup/controller.js resolveContext) whether
   the current page qualifies — solution pages, blog posts, glossary terms.
   That decision is cheap (4.6 KB gz) and unconditional here on purpose: it
   is the one subsystem whose qualifying logic genuinely depends on page
   identity, and it already owns that logic. Building a second, shallower
   copy of it into the loader would be exactly the kind of duplicated
   "am I on X page" logic that caused the German-popup bug in the first
   place (four independent locale checks found in the 2026-09-03 audit;
   this is deliberately not a fifth). */
try { inject(PARTS.popup); } catch (e) { skipped.push('popup: ' + e.message); }

try { if (wantsTours()) inject(PARTS.tours); else skipped.push('tours (no marker)'); }
catch (e) { skipped.push('tours: ' + e.message); }

try { if (wantsHero()) inject(PARTS.hero); else skipped.push('hero (no marker)'); }
catch (e) { skipped.push('hero: ' + e.message); }

try { if (wantsBanners()) inject(PARTS.banners); else skipped.push('banners (no marker)'); }
catch (e) { skipped.push('banners (no marker): ' + e.message); }

try {
  const pages = wantedStoryPages();
  if (!pages.size) skipped.push('stories (no marker)');
  for (const page of pages) {
    const en = PARTS['story-' + page];
    const wantDE = isDE() && STORY_DE_PAGES.includes(page);
    const de = wantDE ? PARTS['story-' + page + '.de'] : null;
    /* A German page with a German bundle gets ONLY the German bundle. Both
       bundles define the same <transformance-story> element with their own
       registry, and dynamically inserted scripts run in ARRIVAL order - so
       injecting both is a race, and whenever the English one won, story.js's
       "English bundle on /de/" guard hid every story on the page (seen on 3
       of 5 DE pages, 2026-09-05). Without a German bundle the English one
       would render nothing on /de/ anyway, so it is skipped rather than
       fetched. */
    if (de) inject(de);
    else if (wantDE) skipped.push('story-' + page + '.de (listed but no bundle)');
    else if (en) inject(en);
    else skipped.push('story-' + page + ' (no bundle built)');
  }
} catch (e) { skipped.push('stories: ' + e.message); }

/* Readable from the console on any page: what the loader decided, and why
   a subsystem that should have loaded did not. Deliberately global and
   deliberately not minified away (see build-loader.mjs). */
window.__tf = { loaded, skipped };
