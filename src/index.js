/**
 * Top-level entry for the webflow-embeds bundle.
 * Importing this file registers every custom element on the global document:
 *   - <transformance-tour data-tour="...">   (6 interactive product tours)
 *   - <transformance-hero>                   (homepage animated hero)
 *   - <transformance-banner data-topic="..."> (8 solution / tool / demo banners — added in v2)
 *   - <transformance-popup>                  (auto-mounted scroll popup on blogs + solution pages — added in v3)
 */

import './tours/index.js';
import './hero/hero.js';
import './banners/index.js';
import './popup/index.js';
import './email-templates/index.js';
