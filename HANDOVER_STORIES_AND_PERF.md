# Solution-page stories + embed performance — current state

Written 2026-09-03. This is the file to read before continuing. It carries the
things that existed only in conversation.

---

## 1. Measured: what a solution page loads today

Measured with `node scripts/measure-split.mjs` against the live Collections page.

`player.js` is ONE bundle: tours + hero + banners + popup.

| Subsystem | gz | raw | Used on a solution page? |
|---|---|---|---|
| tours | 58.6 KB | 278.5 KB | **No** — no `data-tour` markup on the page |
| hero | 11.2 KB | 46.9 KB | **No** — homepage only |
| banners | 6.6 KB | 17.7 KB | **No** — no `data-topic` markup |
| popup | 4.6 KB | 12.8 KB | **Yes** — auto-mounts on blog + solution pages |
| **total** | **79.2 KB** | **356.0 KB** | |

**74.6 KB gz (~330 KB raw) is downloaded, parsed and executed for nothing.**

Two facts checked on the live page, both easy to get wrong:
- The tag is at the **end of `<body>`, not in `<head>`** — so it is not the LCP
  villain. The cost is parse/execute, i.e. TBT and INP.
- It carries **no `async` and no `defer`**.
- It has an SRI `integrity` hash. Any replacement needs one too, computed via
  direct pipe (`curl … | openssl …`), never through a shell variable.

Target for a solution page: popup (4.6) + story bundle (15–21) = **~20–26 KB gz**,
i.e. about a third of today's payload *while adding six animations*.

**A separate GitHub repo does not help.** jsDelivr serves individual files; repo
size never reaches the browser. Per-file / per-page splitting is the fix.

---

## 2. Decision taken: SAFE rollout (Paul, 2026-09-03)

Do **not** migrate every page's script tags in one pass — that risks 250+ CMS
items for an unproven gain. Instead:

- Leave `player.js` published and leave existing pages referencing it.
- Publish the new split bundles alongside it.
- Load the split bundles **only on pages we are actively touching**.
- Migrate the rest later, once the impact is measured on a real page.

---

## 3. The story port — where it stands

- **33 stories**, 6 pages, exported from `platform-mockups` React components to
  static HTML + scoped CSS. Pipeline: `platform-mockups/scripts/export-stories.mjs`.
- **Two variants per story**, both generated:
  - `STORIES[id]` — the whole section (headline + body + card)
  - `CARDS[id]` — **the card only**, no `<h2>`, no body
- **Use `CARDS`.** The page keeps its native Webflow heading, prose and
  capability callouts; the element supplies only the animation. Reasons: copy
  stays editable in Webflow and visible to the CMS, it is not sealed in a shadow
  root, and German headline/body can use Webflow's own localization.

### Rollout unit is a SECTION, not a page

Paul's constraint: *"we should NOT have a new animation and an old story."*
Pushing to GitHub changes nothing visible. So each edit must place the card
**and** update that section's copy to the approved wording together.

### Live Collections page structure (fetched 2026-09-03)

Four product-feature sections, each a static image + 3–4 capability callouts:

| Live section | Story |
|---|---|
| AI Voice Agent | `collections-call` |
| AI Workflow / autonomous escalation | `collections-escalation` |
| Workflow Builder / your rules, AI execution | `collections-sequence` |
| Customer Detail | `collections-score` (loose fit) |
| — | `collections-loop`, `collections-inbox` have no home yet |

**OPEN QUESTION FOR PAUL:** does `collections-score` replace *Customer Detail*,
and where do `collections-loop` + `collections-inbox` go — new sections, or cut?

---

## 4. Outstanding — do not assume these are done

1. ~~Mobile verification incomplete~~ DONE. All 6 pages pass at 390 and 1440,
   German vero too. `node scripts/verify-stories.mjs <page> <width> [--de]`.
2. ~~Card-tagging blast radius unverified~~ DONE, and the exporter now fails
   loudly if a tagging pattern stops matching. See section 4b.
3. **Nothing is committed.** Branch `de-staging`, everything untracked.
4. **German: 6 of 33 stories translated** (Vero only, verified clean EN+DE ×
   desktop+mobile). 27 remain.
5. **Lektorat happens on the staging pages** after the copy edits (Paul's call),
   not from the standalone sheet. The sheet stays useful for length budgets.
6. **Two DE copy decisions still open:** the `Ein Agent, / der vorausdenkt.`
   headline (drops "order-to-cash" because the German will not fit two lines),
   and German number separators (`2.140`, `€2,4M`, values unchanged).
7. **Production publish is Paul's alone.** Staging `.webflow.io` only.

---

## 4b. RESOLVED 2026-09-03 - what the sweep found, and what it missed

All 12 runs (6 pages x 390 + 1440) are now clean, plus German vero at both
widths. Everything below is fixed; it is kept because two of the fixes were to
the CHECKS, and a future session that only reads "clean" will not know why they
look the way they do.

### The three defects that were open

1. **`vero-loop` headline broke as "Put order-to-cash / on / one predictive /
   agent."** The lane is 468px and `one predictive agent.` needs 478. No
   two-line rewrite that keeps "one predictive agent" fits, and that phrase is
   the claim the beat exists to make - it is the line Paul chose to replace
   "Replace four tools with one agent." So the LANE moved, not the copy:
   `gap-16` -> `gap-12` on that one component. The card does not move (it is
   `shrink-0` against a `flex-1` column), so nothing misaligns against the
   sections above and below.
2. **`cashpulse-accuracy` broke the same way.** Here a rewrite was available:
   "Measure the forecast against what happened." -> **"Check the forecast
   against reality."** Fits with 52px to spare, keeps the verb and the meaning.
   Preferred over another lane tweak because the headline gets retyped into
   Webflow, where the lane is Webflow's and unknown - copy that fits with room
   is worth more than copy that fits by 6px.
3. **`clearmatch-post` "clipped-y +24px" was a FALSE POSITIVE.** Probed rather
   than assumed: the element is `.cpa-strip`, which collapses while its chips
   fly out of it, and CSS counts a transformed child in the scrollable overflow
   region. Measured 9px one frame and 24px another - a moving number, which is
   what gave it away. `overflow:hidden` there is the mask doing its job.

### Two more defects the OLD check was hiding

The line-count budget could not see these, and they were live the whole time:

- `collections-escalation` - "Escalate late payments," overflowed by 31px
  -> **"Escalate late payers, / get paid sooner."**
- `clearmatch-extract` - "Automatch any remittance," overflowed by **143px**
  -> **"Automatch any / remittance format."** ("any format" survives in the
  body: "A PDF, an email body, a portal export, a scanned fax.")
- `cashpulse-scenario` - overflowed by 3px -> **"Test the decision / before you
  make it."** Its body then echoed the new headline and stranded "it." on a
  line of its own, so the trailing ", before you commit to it." came off.

### The check changes (this is the part worth keeping)

- **Headline check is now explicit-line-width vs lane, not rendered line
  count.** Headlines set their own breaks with `<br>`; the defect is an
  authored line WIDER THAN THE LANE, because it wraps again and strands a word.
  A two-line headline whose first line wraps totals three, which a three-line
  budget passes - that is how four of these survived. The width test also needs
  no per-viewport budget: the type scale shrinks on mobile and it holds at both
  widths. Reports `headline-wraps` (defect) and `headline-tight` (under 8px of
  margin - a warning, not a failure). Three tights remain and are fine as they
  are: `collections-score` 6px, `vero-loop` 6px, `cashpulse-group` 2px.
- **Clipping checks run on text leaves only** (`childElementCount === 0`). A
  container with element children is usually a mask mid-animation, per defect 3.
  The failure this check exists for - German too long for a lane sized in
  English - is always on the element holding the text.

### And one bug the fixes themselves caused

`gap-12` fell outside the exporter's `gap-(16|20)` pattern, so the row never got
`tf-row`, so **the whole section silently lost its mobile stacking** - 1770px
tall with a crushed headline. Nothing failed; it exported and built. Same shape
as the earlier `w-[6xx]`-only card bug. Two fixes:
- the pattern now matches any `gap-\d+`;
- **the export now FAILS if any story is missing `tf-wrap`, `tf-row` or
  `tf-card`.** These classes are attached by regex to class strings a component
  author is free to change, and when one stops matching nothing else complains.
  Twice is enough.

**`data-h` moved.** Every verifier run prints the placeholder height each
element should reserve before it mounts. Four changed with these edits
(`cashpulse-scenario` 786->758, `cashpulse-accuracy` 795->758 at 390, and both
`vero-loop` figures). Re-read them from a fresh run before placing anything in
Webflow; stale values are visible as a layout jump on mount.

---

## 5. Where things live

| What | Where |
|---|---|
| Story components (React source of truth) | `platform-mockups/app/mockups/components/` |
| Export pipeline | `platform-mockups/scripts/export-stories.mjs` |
| DE extract/apply | `platform-mockups/scripts/de-strings.mjs` |
| DE worksheet | `platform-mockups/de/worksheet.json` |
| Lektorat sheet builder | `platform-mockups/scripts/de-review-doc.mjs` |
| Layout QA + overflow detector | `platform-mockups/scripts/verify-stories.mjs` |
| Generated story data | `Webflow Embeds/src/stories/data/` |
| Bundle build | `Webflow Embeds/scripts/build-stories.mjs` |
| Subsystem size measurement | `Webflow Embeds/scripts/measure-split.mjs` |
| The design rules for the animations | `platform-mockups/docs/SOLUTION-PAGE-PLAYBOOK.md` |

---

## 6. Published: tag `stories-2` (2026-09-03) - USE THIS ONE

**`stories-2` supersedes `stories-1`.** Both are published and immutable;
`stories-1` reserved one height for both widths, which is wrong at one of them
(see the commit). Nothing was ever placed against `stories-1`, so it can simply
be ignored - do not re-point it.

All files were fetched back from the CDN and compared byte-for-byte against the
committed bytes before these hashes were taken.

**Each element takes TWO heights:** `data-h` (desktop) and `data-h-sm` (below
1024, where the copy stacks above the card and every section is 150-350px
taller). The verifier prints whichever attribute the width it ran at feeds.

**Read this before copying a hash.** On the first attempt jsDelivr answered
`HTTP 200` with an EMPTY BODY while it was still warming, and the hash of zero
bytes (`sha384-OLBgp1Gslj...`) looks exactly like a real hash. Publishing it
would have silently blocked every script in the browser. So: fetch to a file,
check the byte count against `dist/`, and hash the file - never hash a stream
you have not measured.

Base: `https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@stories-2/dist/`

| File | Bytes | integrity |
|---|---|---|
| popup.js | 13151 | `sha384-5Pale/ZT8ntPwrYM9la2mevHnLr664HTutRS6Bc7A3+7L4CYmHiYKOp9MOVKeEtg` |
| story-collections.js | 146318 | `sha384-55CzK9g3igwE4UKw7T1c1Yt7kPJ1MCdrWeCcfGewR16HsoPybj5mDttr6YvCSAsh` |
| story-clearmatch.js | 102520 | `sha384-OWY8nWo0I6mlsLNei5BedUwF7T7q7J1ImNS+PkJEYHpWxBe8F3UdJlq2lud3X/y9` |
| story-claimiq.js | 99200 | `sha384-FBbrg4tAiLsgbDBPkoO7q2EOZ/RY9TkhobXmlIcUwLfx5oh/jJuxIJSoMpdGA/bz` |
| story-cashpulse.js | 93404 | `sha384-btm48VtxOYXVO1amx1h4NApWybeUMb4Sw5xl/a2esSZNbJ13Du54SMAACR81UuoC` |
| story-vero.js | 110018 | `sha384-PmuFpIv39b+zS/EeJnRvYKbR+2TFFWdxBmitiA236qvveQAYc68uCiScQsB0jYSa` |
| story-vero.de.js | 110353 | `sha384-96MpHUZbmFP2UA1zj8KLbcJ9thbGxbFd2b/VQn6BAjldulCg5Lk2gGIVnMT8J3mM` |
| story-home.js | 123249 | `sha384-R1BC/6r6PHT2wTmdLJj629X6Viwb30sUtZTMLSil+CGybGuHj+SDNZtWqn9MpV8B` |

`tours.js`, `hero.js` and `banners.js` are unchanged since `stories-1`; their
hashes in git history still hold, and no solution page needs them anyway.

A solution page that moves over loads `popup.js` + its one story bundle, and
drops `player.js`: **79.2 KB gz -> about 20 KB gz, while gaining six
animations.** `player.js` is untouched and still serves every page that has
not moved.

Tags are immutable. The next rebuild is `stories-3`, with new hashes and an
update to every page pointing at the old one - never re-point a published tag.

## 7. Collections page mapping - ANSWERED (Paul, 2026-09-03)

Six sections. `collections-score` replaces *Customer Detail*, and
`collections-loop` and `collections-inbox` become two NEW sections. Both new
sections need copy written, not just a card dropped in - the rollout unit is a
section, card and copy together.

---

## 8. Site-level loader — replaces `player.js` (2026-09-03)

Written after a script audit (`C:\tmp\webflow-script-audit.md`, MCP read-only)
showed `player.js` is applied SITE-WIDE — every page, every locale — and
established the real mechanism: an application is **version-pinned**, not
"latest". Registering a new script version changes nothing until it is
re-applied. That is why the localizer sat on **7 different versions
simultaneously** across the site's pages before this. **Conclusion: the
loader must be ONE site-level application, not many page-level ones** — one
version pin to maintain, not one per page that can silently drift.

### What it does

`src/loader/loader.js` → built by `scripts/build-loader.mjs` → `dist/loader.js`.
One rule: **pages declare what they contain; the loader decides what to
load.** No page list, no slug list, no URL pattern — only markup:

| Part | Loads when | Detection |
|---|---|---|
| popup (4.6 KB) | always | injected unconditionally — it owns its own page-qualifying logic (`src/popup/controller.js` `resolveContext()`), and duplicating that logic in the loader is exactly the kind of second "am I on X page" check that caused the bug below |
| tours (58.6 KB) | page has `<transformance-tour data-tour="...">` | real markup, present before any script runs |
| hero (11.2 KB) | page has `<transformance-hero>` | real markup |
| banners (6.6 KB) | page has a `[tf-banner:<topic>]` text marker | **not** real markup yet — Editor sanitizes custom elements out of rich text, so this is a text-marker check, matching `banners/scanner.js`'s own regex exactly |
| stories (per page) | page has `<transformance-story data-story="...">` | page name = segment before the first hyphen in `data-story`; DE variant loads only if `STORY_DE_PAGES` (built from what actually exists in `dist/`) lists that page |

Every detector is independently wrapped — one throwing can't block the others.
`window.__tf = { loaded, skipped }` records what happened and why, readable
from any page's console, so a subsystem that silently didn't fire is a
one-line check, not a guess.

### The German popup bug, fixed at the root

Audit-confirmed: `resolveContext()`'s checks (`SOLUTION_VARIANTS` exact match,
`/blog-posts/` and `/glossary/` prefixes) are all written against the EN path
shape and none of them stripped a `/de` prefix — so the function returned
`null` on every German page and **the popup never fired anywhere on the
German site.** Root-caused, not patched per-branch: added
`stripLocale()` to `src/shared/locale.js` (strips a leading `/de`, mirrors the
existing `isDE()`), and call it once at the top of `resolveContext()`.
Everything downstream is now written once, against the EN shape, and works on
both locales without knowing locales exist.

Also worth remembering while it's fresh: **three other scripts each hand-roll
their own `/de` pathname check** (the DE link-remapper, `ctabuttonfix`,
`cookiebannerdelegal` — see the script audit). Four independent
reimplementations of the same one-line check, one of which was simply wrong.
Not fixed in this pass — flagged as a follow-up, not blocking this one.

### A real bug this caught before it shipped

Fixed `controller.js`, then ran the loader verification — and it failed on
every German page, popup still not firing. **Rebuilt `dist/popup.js` from the
now-fixed source and it was byte-identical to before** (`grep -c stripLocale`
came back `0`): the fix was in `src/`, but `dist/popup.js` — what the loader
actually references — still had the old bug baked in, because
`scripts/build-parts.mjs` was never re-run after the edit. The bundle only
proved fixed once it was rebuilt, hashed fresh, and re-tested. Exactly the
kind of gap `verify-loader.mjs` (below) exists to catch.

### Local proof, before anything touches staging

`scripts/verify-loader.mjs` — two kinds of proof:

1. **11 real pages, fetched live from production**, spanning every page type
   in the audit and both locales: home + `/de`, about, 2 solution pages, a
   blog post (EN + DE), a glossary term (EN + DE), a review, a comparison
   (DE). Loaded via real navigation (not `setContent`, which never navigates
   and left `location.pathname` wrong — the first version of this test had
   that bug and every popup assertion silently read `false`). Asserts
   `__tf.loaded` for tours/hero/banners against the page's own real markup,
   and — since popup is unconditional by design — asserts the **actual DOM
   effect**: `installPopup()` appends `<transformance-popup data-state="hidden">`
   the instant it qualifies, well before any scroll/timer trigger, so this
   doesn't need a 25-second wait to check.
2. **4 synthetic fixtures** for the one thing nothing live has yet: the
   `<transformance-story>` port and the DE dual-bundle case. Necessarily
   synthetic.

Two of my own assumptions were wrong and the test caught both: I'd assumed
glossary pages don't fire the popup (they do — `resolveContext()`'s glossary
branch always returns a context, falling back to `variant: 'default'`), and
I'd assumed a "no DE bundle" story lookup would log a skip message (it
shouldn't and doesn't — the loader never attempts a fetch for a page not
listed in `STORY_DE_PAGES`, so there's nothing to skip).

**`node scripts/build-loader.mjs --local`** builds `dist/loader.js`'s parts
pointing at root-relative paths instead of a CDN URL, so `verify-loader.mjs`
can serve everything straight out of local `dist/` with no network dependency
and no need for anything to be pushed first. **This output
(`dist/loader.local.js`) must never be committed, tagged, or pasted into
Webflow** — gitignored; publishing always uses `--tag`.

**All 15 cases pass** against the locally rebuilt bundles.

### Not yet done

- **Nothing has been pushed, tagged, or applied to Webflow.** This session
  has no Webflow write access (three separate checks this session, after the
  user activated the MCP connector — it attaches at session start, so a
  mid-session activation needs a fresh session to take effect). The read-only
  script audit was run by a different, freshly-started session.
- **`popup.js` changed size** (13151 → 13211 bytes) with the fix, so it is
  **not** the same file that's live under `stories-2` — this needs a new tag.
  The build above is against `stories-3` (not yet pushed).
- **The build sheet artifact** (Collections page instructions, shared earlier
  today) has `popup.js`'s OLD hash baked into its Step 0 — already marked
  "wrong, don't build yet" for an unrelated reason (site-level discovery), but
  needs its numbers refreshed to `stories-3` before anyone acts on it.
- **The other 44 of 55 pages** were not individually verified — 11 were
  chosen to cover every page TYPE and both locales, which is what the loader's
  logic actually keys off; it doesn't need per-page coverage to be correct,
  but a wider sample after applying to staging is still worth doing.

**One gotcha for hashing `loader.js` specifically.** It's the one file kept
unminified (readable for debugging), so unlike every minified single-line
`dist/*.js`, it has real internal newlines — and this machine has
`core.autocrlf=true`, so git checks it out locally as CRLF while storing and
serving LF. A local `openssl dgst` on `dist/loader.js` will NOT match the CDN
hash; this was caught by diffing CDN vs local bytes after publishing
`stories-3` (132-byte gap, resolved to identical after stripping `\r`). Not a
defect — loader.js carries no SRI of its own (nothing loads it via
`integrity=`) — but a reason to never hand-verify this one file's bytes
without normalizing line endings first, or better, just trust the
already-established rule: fetch the CDN copy back and diff against that.

---

## 9. Published: tag `stories-4` (2026-09-03) — popup.js changed again

German popup copy (Lektorat-reviewed) + two more locale bugs fixed in the
same pass — CTA hrefs weren't locale-prefixed (`/meeting` instead of
`/de/meeting`), and the "hide this link if you're already on the page it
points to" check couldn't match on `/de/` pages. Full detail in commit
`3f5e776`. `popup.js` grew 13211 → 16290 bytes with the German copy; every
story bundle is byte-identical to `stories-3`.

All 12 files verified byte-for-byte against the CDN (CRLF-normalized for
`loader.js`, per the §8 gotcha).

Base: `https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@stories-4/dist/`

| File | Bytes | integrity |
|---|---|---|
| loader.js | 8201 (LF) | `sha256-vKsKe5q5xZkcS/I0ZCf9T2eiM2MND3phEV8s+fyvY6U=` |
| popup.js | 16290 | `sha256-Uv864uY5XNyhx5SktenLH4ugjdgPwmj7xSyeAsqFxgw=` |
| story-collections.js | 146318 | `sha256-6F1B+psTLUF2xolcoAMTN/ltsd+r+0VKghO9wZOeNfg=` |
| story-clearmatch.js | 102520 | `sha256-Kub3Zyoa6yOd8Kzft5R75dQ084dleTUXAub3oRd2TwQ=` |
| story-claimiq.js | 99200 | `sha256-GQXJT972C0F0W5N4eyh3bgsEJsANqvVxW15xKGGuaSY=` |
| story-cashpulse.js | 93404 | `sha256-cLiZDg4wLC3PmAiivBE1ByjqF0p5Qb3Hz0CCZf+36iQ=` |
| story-vero.js | 110018 | `sha256-s2J2ir7q9EYAeWyDk3/f+fWuqwVkfXKl6rek1o5YwR8=` |
| story-vero.de.js | 110353 | `sha256-o97FecIj0i8kzZwnO6upB+lWo8iLXrS8e+hmuvW0ZUw=` |
| story-home.js | 123249 | `sha256-WqHg2SHdXHak7aZUyFIXOTVwDEVMfHgjNUxOyLhWG8w=` |

`tours.js`, `hero.js`, `banners.js` unchanged since `stories-1`; hashes hold.

**Staging currently has `stories-4`'s LOADER not yet applied** — it's
registered content-ready and CDN-verified, but the site-level script
application on `transformanceai.webflow.io` still points at `stories-3`
(the version without German popup copy). This is a version bump on the
SAME script id (`transformanceembedsloader`), not a new registration —
see `docs/WEBFLOW_MAIN_EVENT_2026-09-03.md`.

---

## 10. Published: tag `stories-5` (2026-09-03) — the real bug: STORIES shipped, not CARDS

**The Collections page rendered ~2.4x too tall on staging (1432px vs the
intended ~596px) the moment real content was placed on it.** Root cause,
found by measuring the live element directly rather than trusting a
plausible-sounding "scroll timing" theory: `scripts/build-stories.mjs` has
imported `STORIES`/`STORIES_DE` (the full headline+body+card variant) since
`stories-1` — never `CARDS`/`CARDS_DE` (the card-only slice the whole port
was designed around; see `export-stories.mjs`'s own comment on `cardOnly()`).
Every single one of the 33 stories, on all 6 pages, in both locales, shipped
with a duplicate `<h2>`/`<p>` baked into its shadow DOM. Invisible for the
same reason as the German popup bug: nothing had actually been placed on a
real page before, and every prior verification pass (this session's own
extensive sweeps included) deliberately tested the STORIES variant.

**How it was actually diagnosed** (not "pausing scroll causes it" — that
theory was tested and ruled out): froze the live element's animations across
two full 10s cycles plus repeated `tf-off` pause/resume toggles. Height was
**identical (1432px) at every single sample** — a constant defect, not a
timing race. Reading the shadow DOM directly then showed the duplicate
narration block.

**The fix has three parts:**
1. `Webflow Embeds/scripts/build-stories.mjs` now imports `CARDS`/`CARDS_DE`.
2. `platform-mockups/scripts/de-strings.mjs`'s `apply` step now also produces
   `CARDS_DE`, sliced with `cardOnly()` from the ALREADY-TRANSLATED
   `STORIES_DE` — not re-walked with the worksheet's string indices, which
   would have been silently wrong (those indices are positions in
   `STORIES`'s walk order, starting at the headline; `CARDS` starts partway
   through, at the card div, so the same index number points at a different
   string in the two). `cardOnly()` itself is duplicated into `de-strings.mjs`
   rather than imported from `export-stories.mjs`, which runs a full render
   pipeline as a side effect of being imported at all.
3. **Every `data-h`/`data-h-sm` value across all 33 stories changes** — the
   old numbers were measured against the wrong variant. See the corrected
   table below.

**Verified:** `node --check` on the rebuilt bundle; 14 QA runs (6 pages x 2
widths, plus DE vero at both) via `platform-mockups/scripts/verify-stories.mjs`
against the FIXED bundle - zero overflow findings, and directly confirmed
`hasH2: false` / `hasP: false` on every story, not inferred from a clean QA
pass alone.

All 12 published files fetched back from jsDelivr and confirmed
byte-identical to the committed source.

Base: `https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@stories-5/dist/`
(`popup.js`, `tours.js`, `hero.js`, `banners.js` unchanged since `stories-4`
/ `stories-1`; only the 7 story bundles + `loader.js` changed.)

| File | integrity |
|---|---|
| loader.js | `sha256-m3wU0dQjiFNTEKx+M6FnFQGadGXVx59SOwPGVTW6a0A=` |

(Story bundle hashes: see git history / `dist/parts.manifest.json` — omitted
here since they are internal to `loader.js` and nothing pastes them into
Webflow directly; only `loader.js`'s own hash is registered there.)

### Corrected `data-h` / `data-h-sm`, all 33 stories

| id | data-h | data-h-sm |
|---|---|---|
| collections-loop | 436 | 456 |
| collections-score | 376 | 396 |
| collections-sequence | 560 | 560 |
| collections-inbox | 548 | 568 |
| collections-call | 560 | 560 |
| collections-escalation | 424 | 444 |
| clearmatch-loop | 390 | 410 |
| clearmatch-extract | 470 | 490 |
| clearmatch-match | 450 | 470 |
| clearmatch-post | 428 | 448 |
| clearmatch-unapplied | 368 | 388 |
| claimiq-loop | 438 | 458 |
| claimiq-resolve | 469 | 489 |
| claimiq-evidence | 448 | 468 |
| claimiq-claim | 346 | 366 |
| claimiq-writeoff | 458 | 478 |
| cashpulse-loop | 470 | 490 |
| cashpulse-paydate | 420 | 440 |
| cashpulse-group | 462 | 482 |
| cashpulse-scenario | 430 | 450 |
| cashpulse-accuracy | 402 | 422 |
| vero-loop | 412 | 432 |
| vero-rank | 466 | 486 |
| vero-memory | 494 | 514 |
| vero-tools | 402 | 422 |
| vero-guardrails | 457 | 477 |
| vero-handoff | 453 | 473 |
| home-loop | 478 | 498 |
| home-attribution | 468 | 488 |
| home-predict | 388 | 408 |
| home-coverage | 446 | 466 |
| home-stack | 390 | 410 |
| home-golive | 376 | 396 |

**Note:** vero's DE numbers differ very slightly from EN (German runs longer)
— `vero-handoff` DE is 473/493 vs EN 453/473. Use the EN table above for EN
pages; re-run `verify-stories.mjs vero <width> --de` if placing the German
vero page and want the exact DE-specific numbers.

### Not yet done

A second Webflow session applied this (version bump + the six Collections
attribute updates + removing a dead inline "watchdog" script block that
never executed — Webflow renders custom code via innerHTML, so inline
`<script>` tags in an embed are inert). Confirm it reported back before
trusting staging matches this section.

---

## 11. Decision: hero images become each page's opening card (Paul, 2026-09-03)

Every solution page's static hero image is replaced by that page's own
`-loop` story (currently the first body-section card on each). Confirmed
this needs no new build: every solution page's hero uses the identical
two-column pattern the body sections already use -
`<h1 class="hero-title">`/`<p class="hero-sub">`/CTA beside a `.hero-mockup`
div holding a static `<img>` - same swap technique already proven six times
tonight, just a different container.

**Collections** already has 6 body sections placed - `collections-loop`
moves from its current (net-new) body slot into the hero, leaving 5 body
sections. **ClearMatch/ClaimIQ/CashPulse/Vero have no body placements yet**
(separate, larger future work) - those four just get the hero swap, nothing
to remove.

data-h/data-h-sm for each are the card's own already-measured intrinsic
size (§10 table) - unaffected by which slot it sits in:

| page | story | data-h | data-h-sm |
|---|---|---|---|
| Collections | collections-loop | 436 | 456 |
| ClearMatch | clearmatch-loop | 390 | 410 |
| ClaimIQ | claimiq-loop | 438 | 458 |
| CashPulse | cashpulse-loop | 470 | 490 |
| Vero | vero-loop | 412 | 432 |

Not yet verified: how the card's `#f7f5f2` warm-paper background reads
against the hero's `.hero-glass` glassmorphic treatment. Same house
palette, should be fine, but nobody has looked at it rendered together yet.

Handed to the session with live Webflow access - not done as of this
writing. Loader already auto-detects per-page markup, so no new script
setup is needed on the four pages that have never had a story placed
before; only the `<transformance-story>` tag itself needs adding.
