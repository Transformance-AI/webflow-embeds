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
  name: 'Paul, founder',
  role: 'Transformance',
  imageUrl: 'https://cdn.prod.website-files.com/684931abb239b84984296d93/68494720f0211b2372893faf_Profile%20Picture.avif',
  imageAlt: 'Paul Hanke, Co-Founder of Transformance',
};

export function getVariant(id) {
  return POPUP_VARIANTS[id] || POPUP_VARIANTS['default'];
}
