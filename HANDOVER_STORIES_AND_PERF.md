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
