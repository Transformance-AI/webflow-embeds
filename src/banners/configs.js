/**
 * Banner topic registry.
 *
 * Each topic key is consumed by <transformance-banner data-topic="...">.
 * Per-blog override via attributes is supported in banner.js (data-headline,
 * data-cta-text, data-href, data-image-url) — but the defaults below should
 * cover most cases so blog authors only need the one-liner.
 *
 * Topic config shape:
 *   eyebrow:       small uppercase tag above headline (defaults to PRODUCT)
 *   eyebrowColor:  optional accent colour for the eyebrow (matches brand)
 *   headline:      h3 text — wrap a climax phrase in <grad>...</grad>
 *                  (renders with the brand orange→indigo gradient)
 *   claims:        array of {icon, text} — keep to 4 max
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
      { icon: 'sparkles', text: '99.7% extraction accuracy out of the box' },
      { icon: 'chart-up', text: '85-95% straight-through to GL within 90 days' },
      { icon: 'layers', text: 'Vision LLMs read remittances natively' },
      { icon: 'check-circle', text: 'Deploy in 4-8 weeks, not 4-8 months' },
    ],
    ctaText: 'See ClearMatch',
    href: '/solutions/cash-application',
  },
  'collections': {
    eyebrow: 'PRODUCT · COLLECTPULSE',
    headline: 'Collections agents that <grad>actually call</grad> — in 70+ languages.',
    claims: [
      { icon: 'phone', text: 'Autonomous AI calling agent, 70+ languages' },
      { icon: 'globe', text: 'Multilingual dunning across regions' },
      { icon: 'chart-up', text: 'DSO reduction without growing the team' },
      { icon: 'brain', text: 'Vero remembers every customer interaction' },
    ],
    ctaText: 'See CollectPulse',
    href: '/solutions/collections',
  },
  'deductions': {
    eyebrow: 'PRODUCT · CLAIMIQ',
    headline: 'Deductions resolution from <grad>investigation to recovery.</grad>',
    claims: [
      { icon: 'receipt', text: 'AI-driven claims investigation, no rules to maintain' },
      { icon: 'sparkles', text: 'Trade promotion, chargebacks, and disputes in one queue' },
      { icon: 'chart-up', text: 'Recovery rates from 50-60% manual → 80%+ automated' },
      { icon: 'check-circle', text: 'Built for CPG-scale deduction volumes' },
    ],
    ctaText: 'See ClaimIQ',
    href: '/solutions/deductions',
  },
  'cash-forecast': {
    eyebrow: 'PRODUCT · CASHPULSE',
    headline: 'Cash forecasting <grad>built from your AR data,</grad> not historical bank balances.',
    claims: [
      { icon: 'wallet', text: 'Invoice-level prediction, not aging-bucket averages' },
      { icon: 'sparkles', text: 'AI learns each customer\'s payment patterns' },
      { icon: 'clock', text: 'Live runway and tightest week, updated in real time' },
      { icon: 'chart-up', text: '13-week rolling forecast that finance teams actually trust' },
    ],
    ctaText: 'See CashPulse',
    href: '/solutions/cash-flow-forecasting',
  },
  'vero': {
    eyebrow: 'AGENT · VERO',
    headline: 'Vero is the AI agent <grad>that remembers everything.</grad>',
    claims: [
      { icon: 'brain', text: 'MemoryMesh — institutional memory across cases' },
      { icon: 'sparkles', text: 'Persistent agent that learns your ops over time' },
      { icon: 'layers', text: 'Works across cash app, collections, deductions, forecasting' },
      { icon: 'check-circle', text: 'Deploys inside your cloud — data never leaves' },
    ],
    ctaText: 'Meet Vero',
    href: '/solutions/vero-agent',
  },
  /* ------------------- Lead-magnet (free tools) banners ------------------- */
  'dso-calc': {
    eyebrow: 'FREE TOOL · DSO CALCULATOR',
    eyebrowColor: '#ff5043',
    headline: 'See exactly how much cash <grad>your DSO is trapping.</grad>',
    claims: [
      { icon: 'calculator', text: 'Plug in revenue + AR, get your DSO in seconds' },
      { icon: 'chart-up', text: 'Compares against industry benchmark live' },
      { icon: 'dollar', text: 'Shows trapped cash in dollars, not just days' },
      { icon: 'check-circle', text: 'No signup required to calculate' },
    ],
    ctaText: 'Open the calculator',
    href: '/tools/dso-calculator',
  },
  'cf-template': {
    eyebrow: 'FREE TOOL · 13-WEEK CALCULATOR',
    eyebrowColor: '#ff5043',
    headline: 'See your runway and tightest week, <grad>in seconds.</grad>',
    claims: [
      { icon: 'clock', text: 'Live runway and tightest week' },
      { icon: 'chart-up', text: 'Seven inputs, top-10 currencies' },
      { icon: 'dollar', text: '"Pay 5 days faster" what-if slider' },
      { icon: 'check-circle', text: 'No signup to calculate' },
    ],
    ctaText: 'Open the calculator',
    href: '/tools/cash-flow-forecasting-tool',
  },
  /* ------------------- Demo / meeting banners ------------------- */
  'demo': {
    eyebrow: 'BOOK A CALL',
    headline: 'See Transformance on <grad>your O2C data,</grad> in 30 minutes.',
    claims: [
      { icon: 'sparkles', text: 'Live demo against your remittance + invoice samples' },
      { icon: 'check-circle', text: 'No deck, no fluff — just the product on real data' },
      { icon: 'clock', text: '30 minutes including Q&A' },
    ],
    ctaText: 'Book a Call',
    href: '/meeting',
  },
};

export function getTopic(id) {
  return TOPICS[id] || null;
}

export function listTopics() {
  return Object.keys(TOPICS);
}
