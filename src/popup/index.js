/**
 * Popup module entry. Importing this file:
 *   1. registers the <transformance-popup> custom element (popup.js)
 *   2. auto-mounts a single popup instance on qualifying pages — blog posts
 *      and solution pages — via the controller (controller.js)
 *
 * Triggered after DOMContentLoaded so the meta tag and article element are
 * both available.
 */
import './popup.js';
import { installPopup } from './controller.js';

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', installPopup, { once: true });
} else {
  installPopup();
}
