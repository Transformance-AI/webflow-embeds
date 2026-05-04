/**
 * Icon library for banner claims. Each icon is a stroke-only SVG path string,
 * matching the lucide-react style used by tf-banner today. Stroke + fill are
 * applied via CSS in styles.js so callers don't need to know svg attributes.
 *
 * To add a new icon: name it after the noun (e.g. 'rocket'), paste the path
 * data only (no <svg> wrapper, no fill/stroke attrs).
 */
export const ICONS = {
  // Time / clock
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  // Trending up — for ROI / accuracy gains
  'chart-up': '<path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/>',
  // Dollar sign — for revenue / cash
  dollar: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
  // Check in circle — for outcomes
  'check-circle': '<circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/>',
  // Shield / security
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  // Lightning / instant
  zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  // Globe — for global / multilingual
  globe: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  // Layers — for stack / architecture
  layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
  // Sparkles — for AI
  sparkles: '<path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"/><path d="M19 13l.75 2.25L22 16l-2.25.75L19 19l-.75-2.25L16 16l2.25-.75L19 13z"/>',
  // Calculator — for tools
  calculator: '<rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="8" y2="10"/><line x1="12" y1="10" x2="12" y2="10"/><line x1="16" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="8" y2="14"/><line x1="12" y1="14" x2="12" y2="14"/><line x1="16" y1="14" x2="16" y2="14"/><line x1="8" y1="18" x2="8" y2="18"/><line x1="12" y1="18" x2="12" y2="18"/><line x1="16" y1="18" x2="16" y2="18"/>',
  // Phone — for collections agent
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>',
  // Cart / receipt — for deductions
  receipt: '<path d="M16 2H8a2 2 0 0 0-2 2v18l3-2 3 2 3-2 3 2V4a2 2 0 0 0-2-2z"/><line x1="9" y1="7" x2="15" y2="7"/><line x1="9" y1="11" x2="15" y2="11"/>',
  // Wallet — for cash forecast
  wallet: '<path d="M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2"/><path d="M21 12V7H6a2 2 0 0 1 0-4h13"/>',
  // Brain / AI agent
  brain: '<path d="M12 2a4 4 0 0 0-4 4v1a4 4 0 0 0 0 8v3a4 4 0 1 0 8 0v-3a4 4 0 0 0 0-8V6a4 4 0 0 0-4-4z"/>',
};

export function svgFor(name) {
  const path = ICONS[name] || ICONS['check-circle'];
  return `<svg class="tfb__icon" viewBox="0 0 24 24">${path}</svg>`;
}
