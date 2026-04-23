/**
 * Lucide-sourced industry icons, inlined as raw SVG strings.
 * Each uses `currentColor` for stroke so the outer .co-av colors the icon.
 *
 * Keys match the `icon` field on COMPANIES entries in ./companies.js.
 */

export const ICONS = {
  factory:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>',
  wind:         '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/></svg>',
  truck:        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>',
  pill:         '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>',
  shoppingBag:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
  cpu:          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>',
  wheat:        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M2 22 16 8"/><path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M20 9c.5.5 1.12.5 2.5 2-1.38 1.5-2 1.5-2.5 2-.5-.5-1.12-.5-2.5-2 1.38-1.5 2-1.5 2.5-2Z"/><path d="M16 13c.5.5 1.12.5 2.5 2-1.38 1.5-2 1.5-2.5 2-.5-.5-1.12-.5-2.5-2 1.38-1.5 2-1.5 2.5-2Z"/></svg>',
  car:          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L19 9c-.3-.1-.6-.3-.8-.6L16.5 6.4c-.6-.8-1.5-1.4-2.5-1.4H7.6c-1 0-1.9.6-2.5 1.4L3.8 8.4c-.2.3-.5.5-.8.6L1.5 10.1C.7 10.3 0 11.1 0 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>',
  hardHat:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"/><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M4 15v-3a6 6 0 0 1 6-6"/><path d="M14 6a6 6 0 0 1 6 6v3"/></svg>',
  shirt:        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>',
  clapperboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z"/><path d="m6.2 5.3 3.1 3.9"/><path d="m12.4 3.4 3.1 4"/><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
  coins:        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/></svg>',
  // Common non-company icons used in tour scenes
  phone:        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  mail:         '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>',
  check:        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 6 9 17 4 12"/></svg>',
  alert:        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
  play:         '<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"/></svg>',
  arrowRight:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  trendingUp:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>',
  trendingDown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>',
  phoneOff:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"/><line x1="23" y1="1" x2="1" y2="23"/></svg>',
  globe:        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  sliders:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>',
  fuel:         '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="3" y1="22" x2="15" y2="22"/><line x1="4" y1="9" x2="14" y2="9"/><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"/><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"/></svg>',
  shield:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  clock:        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  zap:          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
};

/**
 * Render a company avatar: colored circle (via .co-<cls>) with industry icon.
 * Usage: av(COMPANIES.industries) → '<span class="co-av co-industries">…</span>'
 * or:    av({ cls: 'co-energy', icon: 'wind' })
 */
export function av(co) {
  return `<span class="co-av ${co.cls}">${ICONS[co.icon]}</span>`;
}
export function avSm(co) {
  return `<span class="co-av ${co.cls} sz-sm">${ICONS[co.icon]}</span>`;
}
export function avMd(co) {
  return `<span class="co-av ${co.cls} sz-md">${ICONS[co.icon]}</span>`;
}

/**
 * Country flags as inline SVG. Tiny (~150–400 bytes each), render crisply on
 * every OS — unlike flag emojis which fall back to regional-indicator letters
 * on Windows Chrome. No network requests, no CLS, no CDN dependency.
 *
 * viewBox normalized to 24×18 (approximate real-world 3:2 aspect). Simplified
 * artwork — no crests or stars for the smallest flags — reads correctly at
 * the 22×16 px size used in worklist tables.
 */
export const FLAG_SVG = {
  DE: '<svg viewBox="0 0 24 18"><rect width="24" height="6" fill="#000"/><rect y="6" width="24" height="6" fill="#DD0000"/><rect y="12" width="24" height="6" fill="#FFCE00"/></svg>',
  AT: '<svg viewBox="0 0 24 18"><rect width="24" height="6" fill="#ED2939"/><rect y="6" width="24" height="6" fill="#fff"/><rect y="12" width="24" height="6" fill="#ED2939"/></svg>',
  NL: '<svg viewBox="0 0 24 18"><rect width="24" height="6" fill="#AE1C28"/><rect y="6" width="24" height="6" fill="#fff"/><rect y="12" width="24" height="6" fill="#21468B"/></svg>',
  ES: '<svg viewBox="0 0 24 18"><rect width="24" height="4.5" fill="#AA151B"/><rect y="4.5" width="24" height="9" fill="#F1BF00"/><rect y="13.5" width="24" height="4.5" fill="#AA151B"/></svg>',
  FR: '<svg viewBox="0 0 24 18"><rect width="8" height="18" fill="#0055A4"/><rect x="8" width="8" height="18" fill="#fff"/><rect x="16" width="8" height="18" fill="#EF4135"/></svg>',
  IT: '<svg viewBox="0 0 24 18"><rect width="8" height="18" fill="#009246"/><rect x="8" width="8" height="18" fill="#fff"/><rect x="16" width="8" height="18" fill="#CE2B37"/></svg>',
  IE: '<svg viewBox="0 0 24 18"><rect width="8" height="18" fill="#169B62"/><rect x="8" width="8" height="18" fill="#fff"/><rect x="16" width="8" height="18" fill="#FF883E"/></svg>',
  BE: '<svg viewBox="0 0 24 18"><rect width="8" height="18" fill="#000"/><rect x="8" width="8" height="18" fill="#FAE042"/><rect x="16" width="8" height="18" fill="#ED2939"/></svg>',
  PT: '<svg viewBox="0 0 24 18"><rect width="10" height="18" fill="#046A38"/><rect x="10" width="14" height="18" fill="#DA291C"/><circle cx="10" cy="9" r="2.4" fill="#FFD100"/></svg>',
  SE: '<svg viewBox="0 0 24 18"><rect width="24" height="18" fill="#006AA7"/><rect x="7" width="3" height="18" fill="#FECC00"/><rect y="7.5" width="24" height="3" fill="#FECC00"/></svg>',
  DK: '<svg viewBox="0 0 24 18"><rect width="24" height="18" fill="#C8102E"/><rect x="7" width="3" height="18" fill="#fff"/><rect y="7.5" width="24" height="3" fill="#fff"/></svg>',
  CH: '<svg viewBox="0 0 24 18"><rect width="24" height="18" fill="#DC143C"/><rect x="10" y="4" width="4" height="10" fill="#fff"/><rect x="7" y="7" width="10" height="4" fill="#fff"/></svg>',
  GB: '<svg viewBox="0 0 24 18"><rect width="24" height="18" fill="#012169"/><path d="M0 0L24 18M24 0L0 18" stroke="#fff" stroke-width="2.5"/><path d="M0 0L24 18M24 0L0 18" stroke="#C8102E" stroke-width="1.5"/><rect x="10" width="4" height="18" fill="#fff"/><rect y="7" width="24" height="4" fill="#fff"/><rect x="11" width="2" height="18" fill="#C8102E"/><rect y="8" width="24" height="2" fill="#C8102E"/></svg>',
  US: '<svg viewBox="0 0 24 18"><rect width="24" height="18" fill="#fff"/><rect width="24" height="1.4" fill="#B22234"/><rect width="24" height="1.4" y="2.8" fill="#B22234"/><rect width="24" height="1.4" y="5.6" fill="#B22234"/><rect width="24" height="1.4" y="8.4" fill="#B22234"/><rect width="24" height="1.4" y="11.2" fill="#B22234"/><rect width="24" height="1.4" y="14" fill="#B22234"/><rect width="24" height="1.4" y="16.8" fill="#B22234"/><rect width="10" height="9.7" fill="#3C3B6E"/></svg>',
  BR: '<svg viewBox="0 0 24 18"><rect width="24" height="18" fill="#009C3B"/><polygon points="12,3 22,9 12,15 2,9" fill="#FFDF00"/><circle cx="12" cy="9" r="3" fill="#002776"/></svg>',
};

export function flag(code) {
  const svg = FLAG_SVG[code];
  return svg ? svg.replace('<svg', '<svg class="flag-svg"') : '';
}

/** @deprecated alias kept so existing calls compile during the switchover */
export const flagEm = flag;
