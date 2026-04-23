/**
 * Shared fake customer set for every interactive tour.
 *
 * Rules:
 *   - All names are "Acme <Industry>" so they're visibly fictional.
 *   - Each has a stable icon + color class so visitors who see them in
 *     one tour recognize them in the next.
 *   - 12 companies is enough to fill a collections worklist, a deduction
 *     exception list, a cash forecast drill-down, etc.
 *
 * Icons are imported inline in the tour SDK as raw SVG strings (see
 * src/tours/shared/icons.js). `cls` maps to a .co-av.<cls> CSS rule in
 * the engine stylesheet that sets the avatar background color.
 */

export const COMPANIES = {
  industries: { name: 'Acme Industries', sector: 'Manufacturing',      country: 'DE', flag: 'de', cls: 'co-industries', icon: 'factory',     contact: 'Lars Olsen' },
  energy:     { name: 'Acme Energy',     sector: 'Renewables',         country: 'PT', flag: 'pt', cls: 'co-energy',     icon: 'wind',        contact: 'Maria Santos' },
  logistics:  { name: 'Acme Logistics',  sector: 'Shipping',           country: 'GB', flag: 'gb', cls: 'co-logistics',  icon: 'truck',       contact: 'James Clarke' },
  pharma:     { name: 'Acme Pharma',     sector: 'Healthcare',         country: 'ES', flag: 'es', cls: 'co-pharma',     icon: 'pill',        contact: 'Hans Weber' },
  retail:     { name: 'Acme Retail',     sector: 'Consumer goods',     country: 'FR', flag: 'fr', cls: 'co-retail',     icon: 'shoppingBag', contact: 'Claire Dubois' },
  tech:       { name: 'Acme Tech',       sector: 'Technology',         country: 'IE', flag: 'ie', cls: 'co-tech',       icon: 'cpu',         contact: 'Aidan Murphy' },
  food:       { name: 'Acme Food',       sector: 'Food & beverage',    country: 'IT', flag: 'it', cls: 'co-food',       icon: 'wheat',       contact: 'Giulia Rossi' },
  motors:     { name: 'Acme Motors',     sector: 'Automotive',         country: 'DE', flag: 'de', cls: 'co-motors',     icon: 'car',         contact: 'Anja Becker' },
  build:      { name: 'Acme Build',      sector: 'Construction',       country: 'NL', flag: 'nl', cls: 'co-build',      icon: 'hardHat',     contact: 'Pieter de Vries' },
  fashion:    { name: 'Acme Fashion',    sector: 'Apparel',            country: 'SE', flag: 'se', cls: 'co-fashion',    icon: 'shirt',       contact: 'Lina Andersson' },
  media:      { name: 'Acme Media',      sector: 'Media',              country: 'US', flag: 'us', cls: 'co-media',      icon: 'clapperboard',contact: 'Jordan Reed' },
  finance:    { name: 'Acme Finance',    sector: 'Financial services', country: 'CH', flag: 'ch', cls: 'co-finance',    icon: 'coins',       contact: 'Samuel Keller' },
};

// Convenient ordered list for rendering tables / lists.
export const COMPANY_LIST = Object.values(COMPANIES);

export const CO = COMPANIES; // shorthand alias for scene files
