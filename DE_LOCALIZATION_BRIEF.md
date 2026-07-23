# Auftrag: Tours + Banners auf Deutsch lokalisieren (DE-Locale)

Von: Website-/Lokalisierungs-Team (Claude, blog-pipeline). Sprachlicher Input + Vorgehen, damit die
DE-Embeds **markenkonform** sind. Bitte vollständig lesen, dann arbeiten.

## Warum
Die interaktiven Embeds rendern auf den Blogs/Solution-/Startseiten **englischen Text**:
- **Hero** `<transformance-hero>` (Startseiten-Animation) — `src/hero/hero.js` (+ `src/hero/styles.js`)
- **Tours** `<transformance-tour data-tour="...">` — `src/tours/scenes/*.js`
- **Banners** `<transformance-banner ...>` — `src/banners/configs.js` (8 Topics)

Auf der **deutschen Locale** (`/de/…`-Pfade) müssen sie **deutsch** erscheinen. Die DE-Reviewerin (Hanna)
verlangt Sprachkonsistenz. Die EN-Seiten bleiben **unverändert**.

### Hero zusätzlich: Cut-off-Bug beheben (Hanna, Punkt 2 — WICHTIG)
Die schwebenden Hero-Cards werden **am linken Rand mitten im Wort abgeschnitten**. Ursache: die
Input-Cards sitzen hart am Container-Rand (`hero.js`: `<div id="input-0" … style="left:5px…">`,
`input-1` `left:0px`, `input-2` `left:10px`). **Fix:** linken Innenabstand/Positionierung so anpassen,
dass kein Text abschneidet (Cards nach rechts rücken oder Container-Padding/Fade). Und: **Deutsch ist
länger** — die Cards haben feste `width:175-185px`; nach der Übersetzung prüfen, dass nichts neu
umbricht/überläuft, ggf. Breite/Textlänge anpassen. Sichtbare Hero-Strings (übersetzen): die
rotierenden Headlines + Sub (Z. 22-24), Input-Card-Texte (linke Spalte), Output-Cards
(„€890K cleared, 3 JEs posted", „PTP €179K confirmed…", „€3,780 valid trade promo…", „€14.2M projected…"),
Stage-Labels (Ingest/Analyze/Execute/Complete/Review/Report → Erfassen/Analysieren/Ausführen/
Fertig/Prüfen/Bericht — Wortwahl frei, kurz halten wegen Platz), Statusse („Analyzing…", „Processing…").
Beträge (€890K etc.) bleiben.

## Ansatz: Locale-Gate (bewährtes Muster, wie beim Cookie-Banner)
Der Bundle läuft im Browser und kennt den Pfad. Erkennung:
```js
export const isDE = () => location.pathname.startsWith('/de/') || location.pathname === '/de';
```
Dann pro String **DE + EN** vorhalten und per `isDE()` wählen. **Wichtig für Risikofreiheit:**
Halte den englischen Text **byte-identisch** (keine Umstrukturierung der EN-Pfade). Sauberste Form:
- Banners: neben `TOPICS` ein paralleles `TOPICS_DE` (gleiche Keys/Struktur), Auswahl per `isDE()`.
- Tours: pro Scene die sichtbaren Strings als `{ en, de }` bzw. eine `de`-Textmap je Scene; nur Text
  wird gewählt, **Timings/Struktur/Reihenfolge bleiben**.
Kein Über-Engineering: ein zentrales `src/shared/locale.js` mit `isDE()` reicht.

## Was übersetzen — und was NICHT
- **Übersetzen:** sichtbarer Text — Banner `eyebrow` (nur den beschreibenden Teil, s.u.), `headline`
  (inkl. `<grad>…</grad>` beibehalten), `claims[].text`, `ctaText`, `imageAlt`; Tour `body`/`title`/
  `label`/Sprechblasen-Text.
- **NICHT anfassen:** Keys, `data-*`-Attribute, Icons, Klassennamen, Timings, `<grad>`-Tags.
  Zahlen/Prozente/Eigennamen bleiben.
- **`href`-Pfade auf DE anpassen (bestätigt):** auf der DE-Locale die CTA-Links mit `/de/` prefixen —
  `/solutions/cash-application` → `/de/solutions/cash-application`, `/tools/…` → `/de/tools/…`. Die
  deutschen Pfade existieren. Auf EN unverändert lassen (nur im DE-Zweig via `isDE()` prefixen).
- **Produkt-/Modulnamen bleiben ENGLISCH:** Vero, ClaimIQ, ClearMatch, CollectPulse, CashPulse, DocSense.
- `eyebrow: 'PRODUCT · CLEARMATCH'` → DE z. B. `'PRODUKT · CLEARMATCH'` (Modulname bleibt).

## Sprach-Regeln (verbindlich)
- Professionelles B2B-Finanz-Deutsch, **Sie-Form** wo der Nutzer angesprochen wird.
- **Keine Gedankenstriche** (— –); Komma/Umformulierung, Zahlenspannen mit „bis". Achtung: EN nutzt oft
  `-` als Pausenzeichen (z. B. „…actually call - in 30+ languages") → im DE zu Komma/Doppelpunkt auflösen.
- **Bewusst englische Fachbegriffe behalten:** Cash Application, Order-to-Cash/O2C, Working Capital, DSO,
  KI, Machine Learning, Straight-Through Processing (STP), ERP, SAP, Treasury.
- **CTA:** „Termin buchen" (nie „Demo"). „See ClearMatch" → „ClearMatch ansehen" o. ä.

## Glossar (EN → bevorzugtes DE)
| EN | DE |
|---|---|
| cash application | **Zahlungsabgleich** (führt, German-primär) / Cash Application (Kategorie, 1x ok) — Modul „ClearMatch" bleibt |
| straight-through processing (STP) | Dunkelverarbeitung (STP) |
| extraction accuracy | Extraktionsgenauigkeit |
| out of the box | standardmäßig |
| collections | Forderungsmanagement / Mahnwesen (Funktion) |
| autonomous AI calling agent | autonomer KI-Telefonagent |
| Cut DSO without growing the team | DSO senken, ohne das Team zu vergrößern |
| deductions | Abzüge / Abzugsmanagement |
| forecast / cash flow forecast | Prognose / Cashflow-Prognose (SEO-Primär: Liquiditätsplanung) |
| overdue accounts | überfällige Konten / offene Posten |
| dispute | Streitfall · promise-to-pay | Zahlungszusage · escalation | Eskalation |
| Deploy in 4-8 weeks, not 4-8 months | Einsatzbereit in 4 bis 8 Wochen statt 4 bis 8 Monaten |
Nicht Gelistetes: etablierten Finance-Begriff wählen; im Zweifel markieren, nicht raten.

## Banner-Bilder auf DE (schon vorhanden)
Die deutschen Mockup-Bilder sind bereits als Webflow-Assets hochgeladen. Für die DE-Banner `imageUrl`
diese nutzen (statt der EN-`card-*.avif`):
- cash-app → `…/6a5670d8b9d2234318af1880_platform-cash-application-de.avif`
- collections → `…/6a5670dab9d2234318af1adc_collections-dashboard-de.avif`
- deductions → `…/6a5670de5bf56ea3751f882e_deductions-dashboard-de.avif`
- (weitere DE-Asset-URLs beim Website-Team erfragen; vollständige Liste liegt dort)

## Build / Release
1. `npm run build` — **Bundle-Budget beachten** (README: < 42 KB gz; Deutsch ist länger als Englisch,
   also nach dem Build die gz-Größe prüfen, ggf. Strings straffen).
2. Verifizieren: `npm run serve`, `dist/banners-test.html` (alle 8 Topics) + Tour-Perf-Pages. **Beide
   Locales testen:** einmal normaler Pfad (EN unverändert), einmal einen `/de/…`-Pfad simulieren
   (z. B. per DevTools `history.pushState` oder lokal die URL faken) → deutsche Strings.
3. Commit + push + **neuen Git-Tag** setzen (z. B. `v2`). 

## NICHT dein Teil (Website-Team / gated)
Das Aktualisieren des **Webflow-Script-Tags** im Site-Head (`@v1` → `@v2`) ist ein Prod-Schritt und läuft
über das Website-Team, nicht über dich. Deine Lieferung = übersetzte, gebaute, getaggte Embeds
(DE-Texte + `/de/`-geprefixte hrefs im DE-Zweig, EN unverändert) + eine Liste, was du übersetzt hast.
