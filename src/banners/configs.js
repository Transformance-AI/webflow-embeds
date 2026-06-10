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
 */
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

export function getTopic(id) {
  return TOPICS[id] || null;
}

export function listTopics() {
  return Object.keys(TOPICS);
}
