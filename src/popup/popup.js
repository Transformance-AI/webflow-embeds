/**
 * <transformance-popup data-variant="cash-forecast"> custom element.
 *
 * Render-only — does not auto-mount. The controller in controller.js handles
 * URL detection, scroll/timer triggers, and localStorage persistence and
 * inserts a single instance into <body> on qualifying pages.
 *
 * Optional attributes (mostly used by the controller, but settable by hand):
 *   data-variant   topic id (cash-app, collections, ...). Falls back to default.
 *   data-state     "hidden" | "visible". Drives the slide-in transition.
 */
import { STYLES } from './styles.js';
import { getVariant, POPUP_AUTHOR } from './configs.js';

class TransformancePopup extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['data-variant', 'data-state', 'data-suppress-secondary'];
  }

  attributeChangedCallback() {
    if (this.shadowRoot.firstChild) this._render();
  }

  connectedCallback() {
    if (!this.hasAttribute('data-state')) this.setAttribute('data-state', 'hidden');
    this._render();
  }

  /**
   * Show with the slide-in transition.
   * Uses requestAnimationFrame to ensure the initial hidden state is painted
   * before the transition kicks in.
   */
  show() {
    requestAnimationFrame(() => {
      this.setAttribute('data-state', 'visible');
    });
  }

  hide() {
    this.setAttribute('data-state', 'hidden');
  }

  _render() {
    const variantId = this.getAttribute('data-variant') || 'default';
    const v = getVariant(variantId);
    const suppressSecondary = this.getAttribute('data-suppress-secondary') === 'true';

    const html = `
      <style>${STYLES}</style>
      <div class="card" role="dialog" aria-label="Talk to Transformance">
        <button class="x" aria-label="Dismiss" data-action="dismiss">×</button>
        <div class="author">
          <div class="avatar">${
            POPUP_AUTHOR.imageUrl
              ? `<img src="${esc(POPUP_AUTHOR.imageUrl)}" alt="${esc(POPUP_AUTHOR.imageAlt || '')}">`
              : `<span>PH</span>`
          }</div>
          <div class="author-meta">
            <span class="author-name">${esc(POPUP_AUTHOR.name)}</span>
            <span class="author-role">${esc(POPUP_AUTHOR.role)}</span>
          </div>
        </div>
        <h4 class="headline">${esc(v.headline)}</h4>
        <p class="body">${esc(v.body)}</p>
        <a class="cta-primary" href="${esc(v.ctaPrimaryUrl || '/meeting')}" data-action="cta-primary">${esc(v.ctaPrimary)}</a>
        <a class="cta-secondary" href="${esc(v.ctaSecondaryUrl || '/solutions')}" data-action="cta-secondary"${suppressSecondary ? ' hidden' : ''}>${esc(v.ctaSecondary)}</a>
      </div>
    `;

    this.shadowRoot.innerHTML = html;

    this.shadowRoot.querySelector('[data-action="dismiss"]').addEventListener('click', (e) => {
      e.preventDefault();
      this.dispatchEvent(new CustomEvent('tf-popup-dismiss', { bubbles: true, composed: true }));
    });
    this.shadowRoot.querySelector('[data-action="cta-primary"]').addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('tf-popup-cta', {
        bubbles: true, composed: true,
        detail: { kind: 'primary', href: v.ctaPrimaryUrl },
      }));
    });
    this.shadowRoot.querySelector('[data-action="cta-secondary"]').addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('tf-popup-cta', {
        bubbles: true, composed: true,
        detail: { kind: 'secondary', href: v.ctaSecondaryUrl },
      }));
    });
  }
}

function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[c]));
}

if (!customElements.get('transformance-popup')) {
  customElements.define('transformance-popup', TransformancePopup);
}
