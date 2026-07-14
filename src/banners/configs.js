/**
 * Banner topic registry.
 *
 * Each topic key is consumed by <transformance-banner data-topic="...">.
 * Per-blog override via attributes is supported in banner.js (data-headline,
 * data-cta-text, data-href, data-image-url) - but the defaults below should
 * cover most cases so blog authors only need the one-liner.
 *
 * Topic config shape:
 *   eyebrow:       small uppercase tag above headline (defaults to PRODUCT)
 *   eyebrowColor:  optional accent colour for the eyebrow (matches brand)
 *   headline:      h3 text - wrap a climax phrase in <grad>...</grad>
 *                  (renders with the brand orange→indigo gradient)
 *   claims:        array of {icon, text} - keep to 4 max
 *   ctaText:       black-pill button text
 *   href:          absolute path to destination
 *   imageUrl:      optional product mockup; when set, banner uses 2-column
 *                  layout (image left, claims right). When omitted, single col.
 *   imageAlt:      alt text for accessibility
 *
 * DE locale: a parallel TOPICS_DE (same keys/structure) holds the German copy,
 * /de/-prefixed hrefs and (where uploaded) DE mockup images. getTopic() picks
 * TOPICS_DE only on the /de/ locale via isDE(); the EN TOPICS stay untouched.
 */
import { isDE } from '../shared/locale.js';

export const TOPICS = {
  /* ------------------- Solution-page banners ------------------- */
  'cash-app': {
    eyebrow: 'PRODUCT · CLEARMATCH',
    headline: 'Cash application that matches payments to invoices, <grad>without templates.</grad>',
    claims: [
      { icon: 'sparkles', text: '>95% extraction accuracy out of the box' },
      { icon: 'chart-up', text: '>90% straight-through processing (STP)' },
      { icon: 'check-circle', text: 'Deploy in 4-8 weeks, not 4-8 months' },
    ],
    ctaText: 'See ClearMatch',
    href: '/solutions/cash-application',
    imageUrl: 'https://cdn.prod.website-files.com/684931abb239b84984296d93/69df9ed7814b30f551626c60_e57293d5e53a3981daeaa229a2ec9fad_card-cash-app.avif',
    imageAlt: 'ClearMatch cash application dashboard',

  },
  'collections': {
    eyebrow: 'PRODUCT · COLLECTPULSE',
    headline: 'Collections agents that <grad>actually call</grad> - in 30+ languages.',
    claims: [
      { icon: 'phone', text: 'Autonomous AI calling agent in 30+ languages' },
      { icon: 'chart-up', text: 'Cut DSO without growing the team' },
      { icon: 'brain', text: 'Vero remembers every customer interaction' },
    ],
    ctaText: 'See CollectPulse',
    href: '/solutions/collections',
    imageUrl: 'https://cdn.prod.website-files.com/684931abb239b84984296d93/69df9effac59f55ed2162c5c_89904a67e2dbf13e9bdb59df36357cc2_card-collections.avif',
    imageAlt: 'CollectPulse collections dashboard',

  },
  'deductions': {
    eyebrow: 'PRODUCT · CLAIMIQ',
    headline: 'Deductions resolution from <grad>investigation to recovery.</grad>',
    claims: [
      { icon: 'sparkles', text: 'AI drives investigations where rules hit a wall' },
      { icon: 'chart-up', text: 'Recovery rates >85% on autopilot' },
      { icon: 'receipt', text: 'Trade promo, chargebacks, disputes in one queue' },
    ],
    ctaText: 'See ClaimIQ',
    href: '/solutions/deductions',
    imageUrl: 'https://cdn.prod.website-files.com/684931abb239b84984296d93/69df9f1d00e7328a348be73d_641b78d95aecfce017fced10a3f3b5e4_card-ded-dash.avif',
    imageAlt: 'ClaimIQ deductions dashboard',

  },
  'cash-forecast': {
    eyebrow: 'PRODUCT · CASHPULSE',
    headline: 'Net cash forecasting from <grad>real AR + AP data,</grad> not bank-balance history.',
    claims: [
      { icon: 'clock', text: 'Multi-horizon: 13-week, quarterly, full-year' },
      { icon: 'chart-up', text: '90-95% accurate with confidence ranges, not point guesses' },
      { icon: 'wallet', text: 'Real AR + AP data, not historical bank balances' },
    ],
    ctaText: 'See CashPulse',
    href: '/solutions/cash-flow-forecasting',
    imageUrl: 'https://cdn.prod.website-files.com/684931abb239b84984296d93/69df9feacd0cbc06fa2894ef_1070a6ecf388ba7555d1f167ef194969_card-cashpulse.avif',
    imageAlt: 'CashPulse cash flow forecast with 13-week prediction',

  },
  'vero': {
    eyebrow: 'AGENT · VERO',
    headline: 'Vero is the AI agent <grad>that remembers everything.</grad>',
    claims: [
      { icon: 'brain', text: 'Customer 360: every customer detail, including ops hidden in emails + spreadsheets' },
      { icon: 'sparkles', text: 'Acts autonomously within your rules + security policies' },
      { icon: 'layers', text: 'Works across cash app, collections, deductions, forecasting' },
    ],
    ctaText: 'Meet Vero',
    href: '/solutions/vero-agent',
    imageUrl: 'https://cdn.prod.website-files.com/684931abb239b84984296d93/69dfa29f0775fd254511fbd0_fbbe4ebdc1f2e22cbb6b2a6f0819e1cd_card-vero.avif',
    imageAlt: 'Vero AI agent dashboard',

  },
  /* ------------------- Lead-magnet (free tools) banners ------------------- */
  'dso-calc': {
    eyebrow: 'FREE TOOL · DSO CALCULATOR',
    eyebrowColor: '#ff5043',
    headline: 'See exactly how much cash <grad>your DSO is trapping.</grad>',
    claims: [
      { icon: 'calculator', text: 'Plug in revenue + AR, get your DSO in seconds' },
      { icon: 'chart-up', text: 'Run your numbers + scenarios to see impact live' },
      { icon: 'dollar', text: 'See trapped cash in dollars, not just days' },
    ],
    ctaText: 'Open the calculator',
    href: '/tools/dso-calculator',
    imageUrl: 'https://cdn.prod.website-files.com/684931abb239b84984296d93/69eb8c31e3a4b8fa9eba9a77_dso-excel-preview-1.png',
    imageAlt: 'DSO calculator preview',

  },
  'cf-template': {
    eyebrow: 'FREE TOOL · 13-WEEK CALCULATOR',
    eyebrowColor: '#ff5043',
    headline: 'See your runway and tightest week, <grad>in seconds.</grad>',
    claims: [
      { icon: 'clock', text: 'Live runway + tightest week' },
      { icon: 'dollar', text: '"Pay 5 days faster" what-if slider' },
      { icon: 'globe', text: 'Top-10 currencies supported' },
    ],
    ctaText: 'Open the calculator',
    href: '/tools/cash-flow-forecasting-tool',
    imageUrl: 'https://cdn.prod.website-files.com/684931abb239b84984296d93/69ed0d37c19ca8bf38192eee_cash-forecast-excel-preview-1.png',
    imageAlt: '13-week cash flow forecast template preview',

  },
  /* ------------------- Demo / meeting banners ------------------- */
  'demo': {
    eyebrow: 'BOOK A CALL',
    headline: '30 minutes to see if <grad>Transformance fits</grad> your O2C.',
    claims: [
      { icon: 'clock', text: '30 minutes with a finance ops specialist' },
      { icon: 'sparkles', text: 'Open conversation about your O2C challenges + bottlenecks' },
      { icon: 'check-circle', text: 'We walk through how we help companies like yours' },
    ],
    ctaText: 'Book a Call',
    href: '/meeting',
    imageUrl: 'https://cdn.prod.website-files.com/684931abb239b84984296d93/68494720f0211b2372893faf_Profile%20Picture.avif',
    imageAlt: 'Paul Hanke, Co-Founder of Transformance',

  },
};

/**
 * German copy for the DE locale. Same keys/structure as TOPICS.
 * Product/module names stay English (Vero, ClaimIQ, ClearMatch, CollectPulse,
 * CashPulse, DocSense). hrefs are /de/-prefixed. DE mockup images are used
 * where the website team has uploaded them; the rest fall back to the EN image
 * (flagged for follow-up).
 */
const CDN = 'https://cdn.prod.website-files.com/684931abb239b84984296d93/';
export const TOPICS_DE = {
  'cash-app': {
    eyebrow: 'PRODUKT · CLEARMATCH',
    headline: 'Cash Application, die Zahlungen den Rechnungen zuordnet, <grad>ganz ohne Vorlagen.</grad>',
    claims: [
      { icon: 'sparkles', text: '>95 % Extraktionsgenauigkeit, standardmäßig' },
      { icon: 'chart-up', text: '>90 % Dunkelverarbeitung (STP)' },
      { icon: 'check-circle', text: 'Einsatzbereit in 4 bis 8 Wochen statt 4 bis 8 Monaten' },
    ],
    ctaText: 'ClearMatch ansehen',
    href: '/de/solutions/cash-application',
    imageUrl: CDN + '6a5670d8b9d2234318af1880_platform-cash-application-de.avif',
    imageAlt: 'ClearMatch Cash-Application-Dashboard',
  },
  'collections': {
    eyebrow: 'PRODUKT · COLLECTPULSE',
    headline: 'Collections-Agenten, die <grad>wirklich anrufen</grad>, in über 30 Sprachen.',
    claims: [
      { icon: 'phone', text: 'Autonomer KI-Telefonagent in über 30 Sprachen' },
      { icon: 'chart-up', text: 'DSO senken, ohne das Team zu vergrößern' },
      { icon: 'brain', text: 'Vero merkt sich jede Kundeninteraktion' },
    ],
    ctaText: 'CollectPulse ansehen',
    href: '/de/solutions/collections',
    imageUrl: CDN + '6a5670dab9d2234318af1adc_collections-dashboard-de.avif',
    imageAlt: 'CollectPulse Forderungsmanagement-Dashboard',
  },
  'deductions': {
    eyebrow: 'PRODUKT · CLAIMIQ',
    headline: 'Abzugsklärung von der <grad>Untersuchung bis zur Rückholung.</grad>',
    claims: [
      { icon: 'sparkles', text: 'KI treibt Untersuchungen voran, wo Regeln an Grenzen stoßen' },
      { icon: 'chart-up', text: 'Rückholquoten über 85 %, vollautomatisch' },
      { icon: 'receipt', text: 'Trade-Promo, Rückbelastungen, Streitfälle in einer Queue' },
    ],
    ctaText: 'ClaimIQ ansehen',
    href: '/de/solutions/deductions',
    imageUrl: CDN + '6a5670de5bf56ea3751f882e_deductions-dashboard-de.avif',
    imageAlt: 'ClaimIQ Abzugsmanagement-Dashboard',
  },
  'cash-forecast': {
    eyebrow: 'PRODUKT · CASHPULSE',
    headline: 'Netto-Cashflow-Prognose aus <grad>echten Debitoren- und Kreditorendaten,</grad> nicht aus Kontostandshistorie.',
    claims: [
      { icon: 'clock', text: 'Mehrere Horizonte: 13 Wochen, Quartal, Gesamtjahr' },
      { icon: 'chart-up', text: '90 bis 95 % Genauigkeit mit Konfidenzbändern statt Punktschätzungen' },
      { icon: 'wallet', text: 'Echte Debitoren- und Kreditorendaten, keine historischen Kontostände' },
    ],
    ctaText: 'CashPulse ansehen',
    href: '/de/solutions/cash-flow-forecasting',
    // DE-Mockup noch nicht bekannt → EN-Bild als Fallback (Website-Team: DE-URL nachreichen)
    imageUrl: CDN + '69df9feacd0cbc06fa2894ef_1070a6ecf388ba7555d1f167ef194969_card-cashpulse.avif',
    imageAlt: 'CashPulse Cashflow-Prognose mit 13-Wochen-Vorhersage',
  },
  'vero': {
    eyebrow: 'AGENT · VERO',
    headline: 'Vero ist der KI-Agent, <grad>der sich alles merkt.</grad>',
    claims: [
      { icon: 'brain', text: 'Customer 360: jedes Kundendetail, auch Vorgänge, die in E-Mails und Tabellen verborgen sind' },
      { icon: 'sparkles', text: 'Handelt autonom im Rahmen Ihrer Regeln und Sicherheitsrichtlinien' },
      { icon: 'layers', text: 'Funktioniert über Cash Application, Collections, Abzüge und Prognose hinweg' },
    ],
    ctaText: 'Vero kennenlernen',
    href: '/de/solutions/vero-agent',
    // DE-Mockup noch nicht bekannt → EN-Bild als Fallback (Website-Team: DE-URL nachreichen)
    imageUrl: CDN + '69dfa29f0775fd254511fbd0_fbbe4ebdc1f2e22cbb6b2a6f0819e1cd_card-vero.avif',
    imageAlt: 'Vero KI-Agent-Dashboard',
  },
  'dso-calc': {
    eyebrow: 'GRATIS-TOOL · DSO-RECHNER',
    eyebrowColor: '#ff5043',
    headline: 'Sehen Sie genau, wie viel Liquidität <grad>Ihr DSO bindet.</grad>',
    claims: [
      { icon: 'calculator', text: 'Umsatz und Forderungen eingeben, DSO in Sekunden erhalten' },
      { icon: 'chart-up', text: 'Zahlen und Szenarien durchrechnen, Wirkung live sehen' },
      { icon: 'dollar', text: 'Gebundene Liquidität in Euro sehen, nicht nur in Tagen' },
    ],
    ctaText: 'Rechner öffnen',
    href: '/de/tools/dso-calculator',
    imageUrl: CDN + '69eb8c31e3a4b8fa9eba9a77_dso-excel-preview-1.png',
    imageAlt: 'Vorschau DSO-Rechner',
  },
  'cf-template': {
    eyebrow: 'GRATIS-TOOL · 13-WOCHEN-RECHNER',
    eyebrowColor: '#ff5043',
    headline: 'Sehen Sie Ihre Liquiditätsreichweite und knappste Woche, <grad>in Sekunden.</grad>',
    claims: [
      { icon: 'clock', text: 'Live-Reichweite und knappste Woche' },
      { icon: 'dollar', text: 'Was-wäre-wenn-Regler „5 Tage früher zahlen"' },
      { icon: 'globe', text: 'Top-10-Währungen unterstützt' },
    ],
    ctaText: 'Rechner öffnen',
    href: '/de/tools/cash-flow-forecasting-tool',
    imageUrl: CDN + '69ed0d37c19ca8bf38192eee_cash-forecast-excel-preview-1.png',
    imageAlt: 'Vorschau 13-Wochen-Cashflow-Prognosevorlage',
  },
  'demo': {
    eyebrow: 'TERMIN BUCHEN',
    headline: '30 Minuten, um zu sehen, ob <grad>Transformance zu Ihrem O2C passt.</grad>',
    claims: [
      { icon: 'clock', text: '30 Minuten mit einem Finance-Ops-Spezialisten' },
      { icon: 'sparkles', text: 'Offenes Gespräch über Ihre O2C-Herausforderungen und Engpässe' },
      { icon: 'check-circle', text: 'Wir zeigen, wie wir Unternehmen wie Ihres unterstützen' },
    ],
    ctaText: 'Termin buchen',
    href: '/de/meeting',
    imageUrl: CDN + '68494720f0211b2372893faf_Profile%20Picture.avif',
    imageAlt: 'Paul Hanke, Mitgründer von Transformance',
  },
};

export function getTopic(id) {
  if (isDE() && TOPICS_DE[id]) return TOPICS_DE[id];
  return TOPICS[id] || null;
}

export function listTopics() {
  return Object.keys(TOPICS);
}
