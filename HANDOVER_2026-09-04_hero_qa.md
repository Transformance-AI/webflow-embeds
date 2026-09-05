# HANDOVER 2026-09-04 — solution-page hero/story cards (staging)

Read this whole file before touching anything. Everything below is on
`https://transformanceai.webflow.io` (staging) only. Production is Paul's.

## 1. Where things are

Site id `684931abb239b84984296d93`. Pages (id → URL → hero story → native card width):

| Page | Page id | URL | story | native |
|---|---|---|---|---|
| Collections | `6a21b044e5609e76d1173aac` | /solutions/collections | collections-loop | 620 |
| ClearMatch | `6a1d599e65a2782ebe28628e` | /solutions/cash-application | clearmatch-loop | 620 |
| ClaimIQ | `6a21b05e136eb2312e8e39d0` | /solutions/deductions | claimiq-loop | 620 |
| CashPulse | `6a21b07d868a7bba50e62990` | /solutions/cash-flow-forecasting | cashpulse-loop | 640 |
| Vero | `6a21b09fef2bbc3cd597e6b7` | /solutions/vero-agent | vero-loop | 640 |

Hero HtmlEmbed on every page: `data_element_settings_tool`, `component = <page id>`,
`element = 2304aae7-9331-c7bc-1514-6ac5f22dd677`, setting key `code`. Only
Collections has body-section stories (call / escalation / score / sequence / inbox).

Site-level script `transformanceembedsloader` **1.5.0** → CDN tag `popup-fix-3`
(loader.js, which pulls popup/tours/hero/banners/story-* parts from that tag).
Page scripts: `herofit<page>` **1.1.0** on each page (ResizeObserver: scale the
story host to `#heroMockup` width, set mockup height to the scaled height),
`bodyfitcollections` 1.0.0 on Collections. Inline `<script>` inside an embed
does NOT execute (innerHTML) — use registered scripts.

Repo: this folder, branch `de-staging`. Tags tonight: `popup-fix-1/2/3`,
`stories-6`. Story source components live in
`Transformance 3.0/platform-mockups/app/mockups/components/*Live*.js` (UNTRACKED
in that repo — commit them). Pipeline: `platform-mockups/scripts/export-stories.mjs`
→ `de-strings.mjs apply` → `scripts/build-stories.mjs` → `build-parts.mjs` →
commit → tag → verify CDN bytes → `build-loader.mjs --tag <tag>` → commit → tag
→ register hosted script (SRI via direct pipe) → `add_site_script` → publish
staging (`customDomains: []`, `publishToWebflowSubdomain: true`).

## 2. What was fixed tonight (all verified by measurement + zoomed crops)

- Hero width: `<768` untouched; `768–1151` stacked; `≥1152` two-col
  `minmax(280px,1fr) max-content` + `clamp()`. H1 `.hero-title` 34px.
  Content floors: ClearMatch/ClaimIQ 600, CashPulse/Vero 640, Collections 460–608.
- **Clipping root cause:** the `transformance-story` HOST clips, not
  `#heroMockup`: page CSS `transformance-story{overflow:hidden;max-width:100%}`
  + fixed per-story height, and `.hero-mockup{display:flex}` flex-shrinks the
  host. Fix on every hero:
  `html body #heroMockup transformance-story{overflow:visible;max-width:none;width:<native>px;flex:none}`
  + `html body #heroMockup{justify-content:flex-start}`. Collections body cards:
  per-story widths + overflow visible + heights +24 + `bodyfitcollections`.
- Hero dead band at 1152–1300 fixed (`herofit*` 1.1.0).
- Headline crossfades → sequential fade-through (no two states visible), all 33
  stories (`stories-6`).
- Popup defers while any story card is under its bottom-right position
  (`popup-fix-3`), 8s cap.

## 3. Known / open

- Escalation card (Collections) is centred in its 880px container — a design
  call, one-line revert (`margin:0 auto` on
  `transformance-story[data-story="collections-escalation"]`).
- Collections/ClearMatch at exactly 1152: ~30px more space below the hero card
  than above — site rule `.hero-glass:has(.hero-mockup){min-height:480px}`.
- Popup can still show on top of non-story content by design.
- Mobile (<768) never re-verified tonight.

## 4. Evidence bar (Paul's rule — do not skip)

Reproduce his symptom first at HIS width and DPR 1.5, fix, then prove with
zoomed (~160px) crops of the exact region at DPR 1.5 on every page, plus
numbers measured against the CLIP BOX (the story host's rect vs the card's
rect in the shadow root: `.bg-white.rounded-2xl`). Numbers against
`#heroMockup` are false negatives. Never say "fixed" without the crops.
Webflow API 429s: sleep 20s and retry, don't stop. jsDelivr can serve an
empty body while warming — verify byte counts/hashes with retries (SRI of
empty = `47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=`).

## 5. Useful scripts (scratchpad of the last session, copy if needed)

Puppeteer import that works here:
`import puppeteer from 'file:///C:/Users/paulh/Coding/Transformance 3.0/platform-mockups/node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js'`
Scripts `verify-clip-final.mjs`, `verify-gap-final.mjs`, `prove-fades-live.mjs`,
`prove-popup-body3.mjs` in
`C:\Users\paulh\AppData\Local\Temp\claude\c--Users-paulh-Coding-Transformance-blog-writer-transformance-blog-pipeline\85a0a569-9585-4393-b24e-e4aaecd79037\scratchpad\`.

## 6. Body-section stories placed on the other four pages (2026-09-04, evening)

Staging only, page embeds + registered page scripts, no repo/CDN change.
Decision (Paul via the other session): direct + loose fits, 13 stories,
no new sections, no copy rewrites.

| Page | Section (eyebrow) | Story | Column | Scale |
|---|---|---|---|---|
| ClearMatch | Intelligent Matching | clearmatch-match | fb-mockup 500 | 0.83 |
| ClearMatch | Remittance Intelligence | clearmatch-extract | feature-mockup 440 | 0.71 |
| ClearMatch | Auto-Post | clearmatch-post | fb-mockup 500 | 0.89 |
| ClaimIQ | Auto-Classification | claimiq-resolve | feature-mockup 440 | 0.73 |
| ClaimIQ | AI Investigation | claimiq-evidence | fb-mockup 500 | 0.81 |
| ClaimIQ | Recovery Tracking | claimiq-writeoff | fb-mockup 500 | 0.83 |
| CashPulse | ML Pipeline | cashpulse-accuracy | fb-mockup-wide ~455 (runtime grid) | 0.71 |
| CashPulse | Predictive Forecasting | cashpulse-paydate | fb-mockup 500 | 0.78 |
| CashPulse | Scenario Planning | cashpulse-scenario | fb-mockup 500 | 0.78 |
| Vero | Agent Orchestration | vero-tools | fb-mockup-wide 880 | 1.00 |
| Vero | AI Collections | vero-handoff | fb-mockup 500 | 0.78 |
| Vero | Workflow Builder | vero-guardrails | fb-mockup 500 | 0.78 |

Skipped: vero-memory (440 column gives 0.69, under the 0.7 floor),
clearmatch-unapplied, claimiq-claim, cashpulse-group, vero-rank (no
matching section). DocSense, Multi-Horizon, Institutional Memory stay static.

Pattern per story: host `overflow:visible; max-width:none; width:<native>px;
height:<data-h+24>px`, page script `bodyfit<page>` (clone of
bodyfitcollections; 1.1.0 on cashpulse/veroagent also fits `.fb-mockup-wide`).

**Trap found:** `dist/lgv3-r8-i18n.js` (`lgv3FixSolutionMockups`) appends its
own static `<img>` into any matched mockup container that has none, on
/deductions, /cash-flow-forecasting, /vero-agent. It also rewrites the
CashPulse ML Pipeline section (new H2/copy, 2-col grid, section reorder).
Page-embed fix on ClaimIQ and CashPulse:
`html body .feature-mockup > transformance-story ~ img, ... { display:none !important }`.
Proper fix is in the runtime (skip containers holding a transformance-story).

Proof (1152 / 1440 / 1728 @ DPR 1.5 + 1422x677 @ 1.35): card-vs-host deltas 0
everywhere, no hscroll, heroes unchanged, live embed bytes identical to the
edited files, sweep of all five pages shows no injected image visible and no
container overlapping copy. Scripts and crops in this session's scratchpad
(`prove-body.mjs`, `sweep-leftovers.mjs`, `shots-*`).

Verified independently by the other session (22:14): 0 failures on all four
pages. Decisions: the `~ img { display:none }` page rule is the shipped fix;
the runtime change in `lgv3FixSolutionMockups` goes on the next lgv3 release.
Follow-up list for Paul: vero-memory (needs a column wider than 440),
clearmatch-unapplied, claimiq-claim, cashpulse-group, vero-rank (need sections).

## 7. The last five stories placed (2026-09-05, early)

Paul's call via the other session: place all five with their prepared copy
(`STORIES[id]` h2 + body in `src/stories/data/<page>.js`), no invented copy.

| Page | Section | Story | What changed |
|---|---|---|---|
| ClearMatch | DocSense (880 fb-mockup-wide) | clearmatch-unapplied | img -> card at 1.0 centred; H2/body = prepared copy; eyebrow + callouts kept (flag: they still describe document reading) |
| ClaimIQ | NEW section after AI Investigation | claimiq-claim | fb-head layout, no eyebrow/callouts; 0.83 |
| CashPulse | Multi-Horizon (was feature 440) | cashpulse-group | rebuilt as fb-head right / fb-mockup 500, callouts moved to fb-grid; 0.78. Runtime still reorders it after Scenario Planning |
| Vero | NEW first body section after trust strip | vero-rank | fb-head, no eyebrow/callouts; 0.78 |
| Vero | Institutional Memory (was feature 440) | vero-memory | rebuilt as fb-head right / fb-mockup 500; 0.78; `~ img` hide rule added to Vero |

Story counts live: Collections 6, ClearMatch 5, ClaimIQ 5, CashPulse 5, Vero 6.
Proof: host deltas 0 at 1152/1440/1728 @1.5 and 1422x677 @1.35, no hscroll,
heroes unchanged, sweep clean, injected runtime imgs all display:none.

**DE finding:** `/de/loesungen/vero-agent` (and presumably the other DE
solution pages) is a separate localized HtmlEmbed with German copy and NO
story tags at all, hero included. None of the story work exists in German.
DE strings for rank/memory are in `src/stories/data/vero.de.js`; localizing
the DE embeds is a separate job for Paul to decide.

Headless proofs must run one page at a time on this machine (~2 GB free
RAM); leftover puppeteer Chromes should be killed between runs.
