/**
 * Popup variant registry.
 *
 * Each variant is keyed by topic id. Topic ids match the banner module's
 * canonical names (`cash-app`, `collections`, `deductions`, `cash-forecast`,
 * `vero`) plus two popup-only categories (`o2c`, `vendor-comparison`) and
 * `default` fallback.
 *
 * Variant shape:
 *   headline:      h4 text inside the popup card
 *   body:          one-line supporting copy
 *   ctaPrimary:    black-pill button text
 *   ctaPrimaryUrl: button destination (defaults to /meeting if omitted)
 *   ctaSecondary:  small text link below the button
 *   ctaSecondaryUrl: secondary destination
 *
 * The controller hides ctaSecondary when the visitor is already on the
 * page it would link to (e.g. on /solutions/cash-flow-forecasting the
 * "Visit CashPulse" link is suppressed).
 */
import { isDE } from '../shared/locale.js';

export const POPUP_VARIANTS = {
  'cash-forecast': {
    headline: 'Forecast cash 90 days out at 95% accuracy. Across AR and AP.',
    body: 'Multi-horizon models. Confidence ranges, not point estimates. FX-aware.',
    ctaPrimary: 'Book a 15-min call',
    ctaPrimaryUrl: '/meeting',
    ctaSecondary: 'Visit CashPulse →',
    ctaSecondaryUrl: '/solutions/cash-flow-forecasting',
  },
  'cash-app': {
    headline: 'Match 95% of payments straight-through. No templates.',
    body: 'Vision LLMs read any remittance format. 99.7% extraction accuracy. Live in 4 to 8 weeks.',
    ctaPrimary: 'Book a 15-min call',
    ctaPrimaryUrl: '/meeting',
    ctaSecondary: 'Visit ClearMatch →',
    ctaSecondaryUrl: '/solutions/cash-application',
  },
  'collections': {
    headline: 'Cut DSO by 8 to 15 days with autonomous AI collectors.',
    body: '70+ languages. 15 to 20 calls per hour per agent versus 15 to 20 per day for a human.',
    ctaPrimary: 'Book a 15-min call',
    ctaPrimaryUrl: '/meeting',
    ctaSecondary: 'Visit CollectPulse →',
    ctaSecondaryUrl: '/solutions/collections',
  },
  'deductions': {
    headline: 'Resolve deductions 6× faster at 97% accuracy.',
    body: 'Six-category auto-classification. Graph-based investigation. Audit trail built in.',
    ctaPrimary: 'Book a 15-min call',
    ctaPrimaryUrl: '/meeting',
    ctaSecondary: 'Visit ClaimIQ →',
    ctaSecondaryUrl: '/solutions/deductions',
  },
  'vero': {
    headline: 'One AI agent across cash app, deductions, collections, and forecasting.',
    body: 'Persistent memory. Learns your ops over time. Deploys inside your cloud.',
    ctaPrimary: 'Book a 15-min call',
    ctaPrimaryUrl: '/meeting',
    ctaSecondary: 'Meet Vero →',
    ctaSecondaryUrl: '/solutions/vero-agent',
  },
  'o2c': {
    headline: 'Run the full O2C cycle on one AI-native platform.',
    body: 'ClearMatch, ClaimIQ, CollectPulse, CashPulse. Unified by Vero. Deploys in 4 to 8 weeks.',
    ctaPrimary: 'Book a 15-min call',
    ctaPrimaryUrl: '/meeting',
    ctaSecondary: 'See Solutions →',
    ctaSecondaryUrl: '/solutions',
  },
  'vendor-comparison': {
    headline: 'An AI-native alternative built for execution, not reporting.',
    body: 'Most AR suites surface insights. Transformance acts on them. See the difference in 4 to 8 weeks.',
    ctaPrimary: 'Book a 15-min call',
    ctaPrimaryUrl: '/meeting',
    ctaSecondary: 'See Solutions →',
    ctaSecondaryUrl: '/solutions',
  },
  'default': {
    headline: 'Fix your AR data. The forecast fixes itself.',
    body: 'AI-native O2C automation. Cash app, deductions, collections, forecasting. One agent, four products.',
    ctaPrimary: 'Book a 15-min call',
    ctaPrimaryUrl: '/meeting',
    ctaSecondary: 'See Solutions →',
    ctaSecondaryUrl: '/solutions',
  },
};

/**
 * Author meta surfaced at the top of every popup card.
 * Image URL is the same Webflow CDN asset used elsewhere on the site.
 */
export const POPUP_AUTHOR = {
  name: 'Paul Hanke, founder',
  role: 'Transformance',
  imageUrl: 'https://cdn.prod.website-files.com/684931abb239b84984296d93/68494720f0211b2372893faf_Profile%20Picture.avif',
  imageAlt: 'Paul Hanke, Co-Founder of Transformance',
};

/**
 * German copy, added 2026-09-03. Not a translation done in isolation - it
 * went through a native-German Lektorat pass after Paul flagged
 * "Dauerhaftes Gedächtnis" as reading like a psychology term rather than a
 * software capability. 7 of the 16 headline/body lines below carry an
 * explicit fix from that pass; the rest were checked and kept as originally
 * drafted. Product-area nouns match what is ALREADY LIVE elsewhere on the
 * site (the DE URL-remapper and the DE footer-link fix), not invented here:
 * Zahlungsabgleich = cash application, Abzugsmanagement = deductions,
 * Forderungsmanagement = collections, Liquiditätsplanung = cash-flow
 * forecasting. "Termin buchen" is the site's own canonical slug for the
 * meeting page, not a fresh translation of "Book a call".
 *
 * ctaPrimaryUrl / ctaSecondaryUrl stay EN-rooted here too (see EN block
 * above) - deHref() localizes them once, at render time, in popup.js.
 * Duplicating /de/ into every URL in both language tables would be exactly
 * the kind of drift this whole subsystem's bugs came from.
 */
export const POPUP_VARIANTS_DE = {
  'cash-forecast': {
    headline: 'Cashflow 90 Tage im Voraus mit 95 % Genauigkeit prognostizieren. Für Debitoren und Kreditoren.',
    body: 'Modelle für mehrere Zeithorizonte. Konfidenzintervalle statt Punktschätzungen. Währungsrisiken berücksichtigt.',
    ctaPrimary: 'Termin buchen',
    ctaPrimaryUrl: '/meeting',
    ctaSecondary: 'Mehr zu CashPulse →',
    ctaSecondaryUrl: '/solutions/cash-flow-forecasting',
  },
  'cash-app': {
    headline: '95 % der Zahlungen automatisch zuordnen. Ganz ohne Vorlagen.',
    body: 'Vision-LLMs lesen jedes Avis-Format. 99,7 % Erkennungsgenauigkeit. Live in 4 bis 8 Wochen.',
    ctaPrimary: 'Termin buchen',
    ctaPrimaryUrl: '/meeting',
    ctaSecondary: 'Mehr zu ClearMatch →',
    ctaSecondaryUrl: '/solutions/cash-application',
  },
  'collections': {
    headline: 'DSO mit autonomen KI-Agenten um 8 bis 15 Tage senken.',
    body: 'Über 70 Sprachen. 15 bis 20 Anrufe pro Stunde und Agent, gegenüber 15 bis 20 pro Tag für einen Mitarbeiter.',
    ctaPrimary: 'Termin buchen',
    ctaPrimaryUrl: '/meeting',
    ctaSecondary: 'Mehr zu CollectPulse →',
    ctaSecondaryUrl: '/solutions/collections',
  },
  'deductions': {
    headline: 'Abzüge 6× schneller klären, bei 97 % Genauigkeit.',
    body: 'Automatische Klassifizierung in sechs Kategorien. Graphbasierte Ursachenanalyse. Audit-Trail inklusive.',
    ctaPrimary: 'Termin buchen',
    ctaPrimaryUrl: '/meeting',
    ctaSecondary: 'Mehr zu ClaimIQ →',
    ctaSecondaryUrl: '/solutions/deductions',
  },
  'vero': {
    headline: 'Ein KI-Agent für Zahlungsabgleich, Abzugsmanagement, Forderungsmanagement und Liquiditätsplanung.',
    body: 'Dauerhafter Kontext. Lernt Ihre Abläufe mit der Zeit. Läuft in Ihrer eigenen Cloud.',
    ctaPrimary: 'Termin buchen',
    ctaPrimaryUrl: '/meeting',
    ctaSecondary: 'Vero kennenlernen →',
    ctaSecondaryUrl: '/solutions/vero-agent',
  },
  'o2c': {
    headline: 'Den gesamten Order-to-Cash-Zyklus auf einer KI-nativen Plattform abbilden.',
    body: 'ClearMatch, ClaimIQ, CollectPulse, CashPulse. Orchestriert von Vero. Live in 4 bis 8 Wochen.',
    ctaPrimary: 'Termin buchen',
    ctaPrimaryUrl: '/meeting',
    ctaSecondary: 'Lösungen ansehen →',
    ctaSecondaryUrl: '/solutions',
  },
  'vendor-comparison': {
    headline: 'Eine KI-native Alternative für Umsetzung, nicht nur für Reporting.',
    body: 'Die meisten Debitorenmanagement-Lösungen zeigen Erkenntnisse. Transformance handelt danach. Live in 4 bis 8 Wochen.',
    ctaPrimary: 'Termin buchen',
    ctaPrimaryUrl: '/meeting',
    ctaSecondary: 'Lösungen ansehen →',
    ctaSecondaryUrl: '/solutions',
  },
  'default': {
    headline: 'Ihre Debitorendaten in Ordnung bringen. Die Prognose stimmt dann von selbst.',
    body: 'KI-native O2C-Automatisierung. Zahlungsabgleich, Abzugsmanagement, Forderungsmanagement, Liquiditätsplanung. Ein Agent, vier Produkte.',
    ctaPrimary: 'Termin buchen',
    ctaPrimaryUrl: '/meeting',
    ctaSecondary: 'Lösungen ansehen →',
    ctaSecondaryUrl: '/solutions',
  },
};

export const POPUP_AUTHOR_DE = {
  ...POPUP_AUTHOR,
  name: 'Paul Hanke, Gründer',
};

export function getVariant(id) {
  /* Fallback stays WITHIN the current locale. An unknown id falling through
     to the EN table on a German page would be the exact bug this whole
     rebuild exists to fix, just relocated to one unmapped id instead of
     every id. */
  if (isDE()) return POPUP_VARIANTS_DE[id] || POPUP_VARIANTS_DE['default'];
  return POPUP_VARIANTS[id] || POPUP_VARIANTS['default'];
}

export function getAuthor() {
  return isDE() ? POPUP_AUTHOR_DE : POPUP_AUTHOR;
}
