/**
 * Banner module entry. Importing this file:
 *   1. registers the <transformance-banner> custom element (banner.js)
 *   2. starts the marker-text scanner (scanner.js) that converts
 *      `[tf-banner:cash-app]` paragraphs into the rendered banner
 *      so Webflow Editor users can place banners without HTML access
 */
import './banner.js';
import './scanner.js';
