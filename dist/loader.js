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

const PARTS = /*__LOADER_PARTS_JSON__*/{"popup":{"name":"popup","src":"https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@stories-8/dist/popup.js","integrity":"sha256-tPINELi8c7Ol44BsUnVjGxBdvOklbAKhycR8Mw6LR4Q="},"tours":{"name":"tours","src":"https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@stories-8/dist/tours.js","integrity":"sha256-VfF1RD3+J1Qy6gFfWywEbKyRz6zJDIFzvhjVFiz9L3c="},"hero":{"name":"hero","src":"https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@stories-8/dist/hero.js","integrity":"sha256-wzBpzs3haW7JuAlx83eYvMJe3GPXx45NzhA+VC4aHYA="},"banners":{"name":"banners","src":"https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@stories-8/dist/banners.js","integrity":"sha256-fbevA+UWL7Gh+gP5mngrKirv6Lm2X+X7mIw84SBQAgw="},"story-cashpulse.de":{"name":"story-cashpulse.de","src":"https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@stories-8/dist/story-cashpulse.de.js","integrity":"sha256-RL06ZkD1THStUfxtCjWsXHm+ZjvS5p1xzlCUx9AV/ho="},"story-cashpulse":{"name":"story-cashpulse","src":"https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@stories-8/dist/story-cashpulse.js","integrity":"sha256-RXmKd4NmOANui+AEbgq4cFBzl/MwtrX0/Z27yhumrCo="},"story-claimiq.de":{"name":"story-claimiq.de","src":"https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@stories-8/dist/story-claimiq.de.js","integrity":"sha256-h8wq+FkgWO9FRxBz+QG95PJt/LJAW6+tOG/If7fcGbA="},"story-claimiq":{"name":"story-claimiq","src":"https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@stories-8/dist/story-claimiq.js","integrity":"sha256-eW4B+FExPHSiFvRK1OE3Sxqi4CHQieUCk36a08yEgTo="},"story-clearmatch.de":{"name":"story-clearmatch.de","src":"https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@stories-8/dist/story-clearmatch.de.js","integrity":"sha256-28VC1oqFHaL7xDmKIoGOmaaeRjaILzHCyS7ysW8ZLCM="},"story-clearmatch":{"name":"story-clearmatch","src":"https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@stories-8/dist/story-clearmatch.js","integrity":"sha256-8DK2aRVM3vYXr9q7WsXrjvL8SNJ4UDSfM2UVK1C3yfk="},"story-collections.de":{"name":"story-collections.de","src":"https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@stories-8/dist/story-collections.de.js","integrity":"sha256-/ngqPsE/aLoW1IeA7qXfxlTh/4Iuz6iV7RERokSxNLk="},"story-collections":{"name":"story-collections","src":"https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@stories-8/dist/story-collections.js","integrity":"sha256-f0zQuEDNXL7QMLmyDWtfD8e1FaBFzxlGy5nIiG3JNIc="},"story-home":{"name":"story-home","src":"https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@stories-8/dist/story-home.js","integrity":"sha256-KzR4UgOwfhb+D6FrLmbiwSIUAlnUAsP7v81GYjH+LMs="},"story-vero.de":{"name":"story-vero.de","src":"https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@stories-8/dist/story-vero.de.js","integrity":"sha256-bBEU7ApKM9TRM9RoXOWXJmtTtxPVnMaAptnSXTlFQW8="},"story-vero":{"name":"story-vero","src":"https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@stories-8/dist/story-vero.js","integrity":"sha256-d8Xxspyl9sBR5Y/deKgjmynHD8//RD4/sum6V3r1bf8="}};
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

/* Banners are NOT real markup at load time. Editor sanitizes custom
   elements out of rich-text fields, so editors type a plain-text marker
   instead — [tf-banner:<topic>] — and banners.js's own scanner converts it
   to <transformance-banner> after it loads. The loader has to look for the
   TEXT marker, using the identical pattern banners/scanner.js matches
   against, or it will decide not to load the very script that would have
   found the marker. */
const BANNER_MARKER_RE = /\[tf-banner:\s*[a-z0-9-]+\s*\]/i;
function wantsBanners() {
  try {
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
