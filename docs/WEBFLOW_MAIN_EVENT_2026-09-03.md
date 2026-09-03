# The main event — get the German fix live, then place the animations

Written 2026-09-03 for a session with live Webflow MCP write access. Two
things, in order: (1) a small version bump to a script that's already
applied — safer and faster than the original swap — and (2) the actual
point of this whole project: putting six animated cards on the Collections
page.

Read `Webflow Embeds/HANDOVER_STORIES_AND_PERF.md` §8 and §9 for the full
story. This file is the minimal path to do the work.

**Scope: staging (`transformanceai.webflow.io`) only, same as before.
Do not touch the 8 production custom domains. Do not publish with any
`customDomains` populated.** Production is Paul's alone, separately, later.

---

## Part 1 — Bump the loader to `stories-4` (small, low-risk)

### What changed and why

If `docs/WEBFLOW_LOADER_SWAP_2026-09-03.md` was already carried out, the
site currently has `transformanceembedsloader` v1.0.0 applied, pointing at
the `stories-3` tag. Since then:

1. The popup got real German copy (Lektorat-reviewed) for the first time —
   it never had any before, because it never fired on a German page before
   this whole project started.
2. Two more bugs in the same subsystem got fixed: CTA links weren't
   locale-prefixed (`/meeting` instead of `/de/meeting` on German pages),
   and a "you're already on this page" check couldn't match on `/de/` URLs.

`popup.js` changed bytes as a result, so the loader's embedded hash for it
had to change too — hence `stories-4`. Every other file (tours, hero,
banners, all six story bundles) is byte-identical to `stories-3`.

**If you're starting fresh and Part of `WEBFLOW_LOADER_SWAP_2026-09-03.md`
was never run**, do that first (register + apply `transformanceembedsloader`
v1.0.0 against `stories-3` is fine to skip — just register and apply
directly against `stories-4` below instead, using v1.0.0 as the version
number since nothing is live yet).

**If it's already applied at `stories-3`**, this is a version bump, not a
new registration:

### Step 1 — Register the new version

`register_hosted_script`, same `script_id` as before, incremented version:

```
site_id:          684931abb239b84984296d93
script_id:        transformanceembedsloader
version:          1.1.0
hosted_location:  https://cdn.jsdelivr.net/gh/Transformance-AI/webflow-embeds@stories-4/dist/loader.js
integrity_hash:   sha256-vKsKe5q5xZkcS/I0ZCf9T2eiM2MND3phEV8s+fyvY6U=
```

Verify with `get_registered_script` before continuing.

### Step 2 — Re-apply with the new version

`set_site_scripts`, same atomic full-list pattern as before — only the
version number on line 1 changes:

```
site_id: 684931abb239b84984296d93
scripts: [
  { script_id: "transformanceembedsloader", version: "1.1.0",  location: "footer" },
  { script_id: "ctabuttonfix",               version: "1.0.0",  location: "footer" },
  { script_id: "cookiebannerdelegal",        version: "1.1.0",  location: "footer" },
  { script_id: "decomparereviewlinks",       version: "1.18.0", location: "footer" }
]
```

Verify with `get_site_scripts`.

### Step 3 — Publish to staging

Same as before: `customDomains: []`, staging subdomain only.

### Step 4 — Verify the actual content, not just presence

This is stronger than the earlier check — read what actually renders, not
just that a script tag loaded. Open (or fetch and read the DOM of):

`https://transformanceai.webflow.io/de/glossary/abrechnungszyklus`

In the console:

```js
document.querySelector('transformance-popup')?.shadowRoot?.querySelector('.headline')?.textContent
```

**Expect exactly:** `"Ihre Debitorendaten in Ordnung bringen. Die Prognose stimmt dann von selbst."`
(the `default` variant's German headline — this specific glossary page has
no more specific category match, so it falls to `default`, same as any
unmatched page would.)

```js
document.querySelector('transformance-popup')?.shadowRoot?.querySelector('.cta-primary')?.getAttribute('href')
```

**Expect exactly:** `"/de/meeting"` — not `/meeting`. This is the second bug
this update fixes; if it comes back as `/meeting`, the version bump didn't
take (still serving `stories-3`'s `popup.js`) and something needs
re-checking before moving to Part 2.

If either check is wrong, don't proceed to Part 2 — report back with what
you saw.

### Rollback (Part 1 only)

Same pattern, one version number reverted:

```
scripts: [
  { script_id: "transformanceembedsloader", version: "1.0.0",  location: "footer" },
  { script_id: "ctabuttonfix",               version: "1.0.0",  location: "footer" },
  { script_id: "cookiebannerdelegal",        version: "1.1.0",  location: "footer" },
  { script_id: "decomparereviewlinks",       version: "1.18.0", location: "footer" }
]
```

---

## Part 2 — Place the six Collections sections (the actual deliverable)

Once Part 1 is verified, follow the Collections build sheet Paul already
has (an Artifact, not a repo file — ask Paul for the link if you don't have
it, or check `Artifact` list for "Collections Build Sheet").

**One correction to make before using it: ignore its "Step 0 — Swap the
script tag" entirely.** That step is obsolete — it predates the discovery
that the embed script is site-level, not page-level, and the site-level
loader is now already applied (that's what Part 1 just confirmed). There is
nothing to add or remove in the Collections page's own custom-code boxes.
**Start directly at Section 1.**

Sections 1 through 6 of that build sheet are unaffected by everything in
Part 1 — `story-collections.js` didn't change between `stories-2` and
`stories-4`, so every `data-story`, `data-h`, and `data-h-sm` value on it is
still exactly correct. For each of the six:

1. Find the matching section on the live Collections page (the build sheet
   says which — four are direct replacements of an existing section's
   visual, two are new sections that need to be added).
2. Place the `<transformance-story>` embed element **inside** that section,
   where the current static image is (or where a new section's visual
   should go) — not as a new top-level section wrapper. Webflow puts white
   background and 96px padding on every `<section>` by default; the card
   brings its own.
3. Update that section's heading and body copy to match what the build
   sheet specifies for that card — **card and copy go in together, in the
   same edit**. Never leave a new animation next to old copy, or old copy
   next to nothing (per Paul's explicit instruction earlier in this
   project: "we should NOT have a new animation and an old story").
4. Two open calls the build sheet flags for Paul, not for you to decide
   silently: whether to keep the four rewritten H2s (they replace
   keyword-shaped headings on a ranking page) or leave the originals with
   only the card swapped, and whether the *Detect · Contact · Resolve*
   section further down still earns its place once `collections-loop` is
   at the top making a similar point. If the build sheet doesn't already
   show Paul's answer to these, ask rather than guess.

After all six are placed:

- Publish to staging only, same domain scope as Part 1.
- Scroll the live staging page on both a desktop and a phone width. Six
  animated cards should be visible, each with its own headline and body
  directly above or beside it (not orphaned, not floating without copy).
  A card that never appears is almost always a typo in `data-story` — the
  element logs the name it couldn't find to the console.
- Report back with the staging URL and a description (or screenshot, if
  your tooling can take one) of what the page looks like now.

Do not touch production. Do not decide the two open copy questions above on
your own — surface them to Paul if the build sheet hasn't already recorded
his answer.
