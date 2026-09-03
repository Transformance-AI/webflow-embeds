# Apply the site-level loader — staging only

Written 2026-09-03 for a session with live Webflow MCP write access. This
session (the one that wrote this doc) never got one, despite three checks
after the MCP was activated — it attaches at session start, so a fresh
session was required. That fresh session's job is exactly this file.

**Scope: apply and verify on staging (`transformanceai.webflow.io`) only.
Do not touch the 8 production custom domains. Do not publish with any
`customDomains` populated.** Per house rule, autonomous publishing is
allowed to the `.webflow.io` subdomain only; production needs Paul's
explicit standing phrase, separately, later. If any step below is ambiguous
about domain scope, stop and ask rather than guess.

Everything referenced here is already built, committed, pushed, tagged and
CDN-verified. Nothing needs building. Read `Webflow Embeds/HANDOVER_STORIES_AND_PERF.md`
§8 for the full story if you want it; this file is the minimal path to do
the actual Webflow-side work.

---

## What this fixes

1. **Performance.** `player.js` (79.2 KB gz) is applied site-wide and ships
   tours + hero + banners + popup to every page regardless of use. A typical
   solution page uses only the popup (4.6 KB) — 74.6 KB gz is dead weight.
   The new loader reads each page's own markup and loads only what that page
   actually contains.
2. **A real bug, live right now.** The popup has never fired on any German
   page, site-wide, because its page-matching logic never stripped the `/de`
   prefix. Confirmed as an unintentional oversight, not a design choice.
   Fixed at the source and rebuilt; this swap is what puts the fix live.

---

## Current state (read-only audit, 2026-09-03, `C:\tmp\webflow-script-audit.md`)

Site id: `684931abb239b84984296d93`.

Four scripts applied at site level, all `footer`, in this order:

| # | script_id | version | location |
|---|---|---|---|
| 1 | `transformanceembedsplayer` | 3.1.3 | footer |
| 2 | `ctabuttonfix` | 1.0.0 | footer |
| 3 | `cookiebannerdelegal` | 1.1.0 | footer |
| 4 | `decomparereviewlinks` | 1.18.0 | footer |

**Before doing anything, re-read this list with `get_site_scripts` and
confirm it still matches.** The audit is a snapshot; if it has changed,
stop and report the difference rather than assuming this table is still
correct.

---

## Step 1 — Register the loader as a new script

`register_hosted_script` (via `data_scripts_tool`):

```
site_id:          684931abb239b84984296d93
script_id:        transformanceembedsloader     (new — does not exist yet)
display_name:     TransformanceEmbedsLoader
version:          1.0.0
hosted_location:  https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@stories-3/dist/loader.js
integrity_hash:   sha256-e2Z50+jVsMbFErYGXQ5t5Umok5mmf98BfIazT0oyxMk=
```

That hash was computed from the file **fetched back from jsDelivr and
verified byte-for-byte against the committed source** — not from a local
copy. (`loader.js` is the one unminified file in this repo, kept readable
for debugging; a local copy on Windows checks out with CRLF line endings
while the CDN serves LF, so a hash taken from a local copy would be wrong.
Don't recompute it locally — if you want to re-verify, fetch the URL above
and hash what comes back, the same way this session did.)

**Verify the registration** with `get_registered_script` before continuing —
confirm the version, hosted_location and integrity_hash all landed exactly
as above.

---

## Step 2 — Swap it in at site level, atomically

Use `set_site_scripts` (the bulk/atomic form — **not** `add_site_script`
followed by a separate removal, which would leave a window where either both
scripts are applied at once or neither is). Pass the **complete** desired
list in one call:

```
site_id: 684931abb239b84984296d93
scripts: [
  { script_id: "transformanceembedsloader", version: "1.0.0",  location: "footer" },
  { script_id: "ctabuttonfix",               version: "1.0.0",  location: "footer" },
  { script_id: "cookiebannerdelegal",        version: "1.1.0",  location: "footer" },
  { script_id: "decomparereviewlinks",       version: "1.18.0", location: "footer" }
]
```

This is the SAME four-script list as the current state, with only line 1
changed — `transformanceembedsplayer` replaced by
`transformanceembedsloader`. The other three are untouched: same script,
same version, same position.

**Verify** with `get_site_scripts` — confirm exactly this list comes back.

---

## Step 3 — Publish to staging ONLY

Publish with `customDomains: []` (or whatever the tool's equivalent of
"staging subdomain only" is) — this must reach `transformanceai.webflow.io`
and **must not** reach any of the 8 production custom domains
(`www.transformance.ai`, `transformance.ai`, `www.gettransformance.com`,
`gettransformance.com`, `www.gettransformance.de`, `gettransformance.de`,
`www.cashapplicationsoftware.com`, `cashapplicationsoftware.com`).

---

## Step 4 — Verify on staging

Fetch these URLs on `https://transformanceai.webflow.io/...` (the staging
host — same paths as production) and check the footer script tags:

- `transformanceembedsloader`'s script tag is present, pointing at the
  `stories-3` URL above, with the SRI hash above and `crossorigin="anonymous"`.
- `transformanceembedsplayer` (`player.js`) is **gone**.
- `ctabuttonfix`, `cookiebannerdelegal`, `decomparereviewlinks` tags are all
  still present, unchanged.

Then confirm the loader is actually deciding correctly. This exact table was
proven locally against real production HTML in this session
(`Webflow Embeds/scripts/verify-loader.mjs`, all 15 cases pass) — the same
expectations should hold on staging:

| Page | tours | hero | banners | popup fires |
|---|---|---|---|---|
| `/` | no | **yes** | no | no |
| `/de` | no | **yes** | no | no |
| `/about` | no | no | no | no |
| `/solutions/collections` | no | no | no | **yes** |
| `/solutions/cash-application` | no | no | no | **yes** |
| any `/blog-posts/...` | (per post) | no | (per post) | **yes** |
| any `/de/blog-posts/...` | (per post) | no | (per post) | **yes** |
| any `/glossary/...` | (per term) | no | (per term) | **yes** |
| any `/de/glossary/...` | (per term) | no | (per term) | **yes** |
| `/reviews/...` | no | no | no | no |
| `/compare/...` or `/de/comparison/...` | no | no | no | no |

**The single most important check**: open a `/de/glossary/...` or
`/de/blog-posts/...` page and confirm the popup element
(`<transformance-popup>`) appears in the DOM (inspect, or check
`window.__tf.loaded` in the console — it should include `"popup"`, and
separately the popup element should exist even though it starts
`data-state="hidden"`). **This did not happen before this fix, on any German
page, ever.** It is the actual regression this whole change exists to close.

`window.__tf = { loaded: [...], skipped: [...] }` is readable in the console
on any page — it says exactly what the loader decided and why, so a
mismatch here is diagnosable directly rather than guessed at.

---

## If anything looks wrong — rollback

`set_site_scripts` back to the original list, then republish staging:

```
site_id: 684931abb239b84984296d93
scripts: [
  { script_id: "transformanceembedsplayer", version: "3.1.3",  location: "footer" },
  { script_id: "ctabuttonfix",               version: "1.0.0",  location: "footer" },
  { script_id: "cookiebannerdelegal",        version: "1.1.0",  location: "footer" },
  { script_id: "decomparereviewlinks",       version: "1.18.0", location: "footer" }
]
```

This is a straight revert — no rebuild, no new tag, no guessing needed.

---

## Explicitly out of scope for this task

- **Production.** Not this task, not this session. Paul publishes production
  himself, on his own instruction.
- **The `/404` page's `html{display:none!important}`** — found during the
  read-only audit, confirmed by Paul as unintended, but unrelated to this
  script swap. Separate fix, separate task.
- **The Collections page section placement** (the build sheet Paul has) —
  blocked on this loader swap going live, but is its own follow-up task with
  its own doc. Its build sheet currently references a stale `popup.js` hash
  from before this session's fix; it needs refreshing to `stories-3` before
  anyone builds against it, but that refresh is not part of this task either.
- **The other three scripts' own `/de` detection** (`ctabuttonfix`,
  `cookiebannerdelegal`, and the DE link-remapper each hand-roll their own
  locale check). Flagged in the audit as a smell, not fixed here.
