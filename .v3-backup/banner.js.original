/**
 * <transformance-banner> custom element.
 *
 * Usage in Webflow (paste into an HTML Embed block in the rich-text editor):
 *
 *   <transformance-banner data-topic="cash-app"></transformance-banner>
 *
 * Per-embed overrides via attributes (all optional):
 *   data-headline   — override topic's default headline (use raw HTML; <grad>X</grad>
 *                     wraps a phrase in the brand orange→indigo gradient)
 *   data-cta-text   — override CTA button label
 *   data-href       — override destination URL
 *   data-image-url  — show a product mockup on the left (2-column layout)
 *   data-image-alt  — accessibility text for the image
 *
 * The element renders inside Shadow DOM so the host page's CSS doesn't
 * leak in or out. CSS is shipped with the bundle (see styles.js).
 */
import { STYLES } from './styles.js';
import { getTopic, listTopics } from './configs.js';
import { svgFor } from './icons.js';

function gradMarkup(html) {
  // <grad>X</grad> → <span class="tfb__grad">X</span>
  return String(html).replace(/<grad>([\s\S]*?)<\/grad>/gi, '<span class="tfb__grad">$1</span>');
}

function escapeAttr(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

class TransformanceBanner extends HTMLElement {
  connectedCallback() {
    if (this._mounted) return;
    this._mounted = true;
    this._render();
  }

  static get observedAttributes() {
    return ['data-topic', 'data-headline', 'data-cta-text', 'data-href', 'data-image-url', 'data-image-alt'];
  }

  attributeChangedCallback() {
    if (this._mounted) this._render();
  }

  _render() {
    const topicId = this.dataset.topic;
    const topic = getTopic(topicId);
    if (!topic) {
      // Unknown topic — log a hint, render nothing (don't blow up the page).
      console.warn(`[transformance-banner] Unknown topic "${topicId}". Available: ${listTopics().join(', ')}`);
      this.style.display = 'none';
      return;
    }

    // Apply per-embed overrides on top of topic defaults.
    const headline = this.dataset.headline || topic.headline;
    const ctaText = this.dataset.ctaText || topic.ctaText;
    const href = this.dataset.href || topic.href;
    const imageUrl = this.dataset.imageUrl || topic.imageUrl;
    const imageAlt = this.dataset.imageAlt || topic.imageAlt || `${topic.eyebrow} preview`;
    const eyebrowStyle = topic.eyebrowColor ? ` style="color:${escapeAttr(topic.eyebrowColor)}"` : '';

    const claimsHtml = (topic.claims || [])
      .map(c => `<li>${svgFor(c.icon)}<span>${c.text}</span></li>`)
      .join('');

    const headlineHtml = gradMarkup(headline);

    const bodyContent = imageUrl
      ? `
        <div class="tfb__shot">
          <img src="${escapeAttr(imageUrl)}" alt="${escapeAttr(imageAlt)}" loading="lazy" decoding="async"/>
        </div>
        <div class="tfb__right">
          <ul class="tfb__claims">${claimsHtml}</ul>
          <a class="tfb__cta" href="${escapeAttr(href)}">${ctaText} <span class="tfb__cta-arrow">→</span></a>
        </div>`
      : `
        <div class="tfb__right">
          <ul class="tfb__claims">${claimsHtml}</ul>
          <a class="tfb__cta" href="${escapeAttr(href)}">${ctaText} <span class="tfb__cta-arrow">→</span></a>
        </div>`;

    const bodyClass = imageUrl ? 'tfb__body' : 'tfb__body tfb__body--no-image';

    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
    }
    this.shadowRoot.innerHTML = `
      <style>${STYLES}</style>
      <div class="tfb">
        <div class="tfb__header">
          <div class="tfb__eyebrow"${eyebrowStyle}>${topic.eyebrow}</div>
          <h3 class="tfb__headline">${headlineHtml}</h3>
        </div>
        <div class="${bodyClass}">${bodyContent}</div>
      </div>
    `;
  }
}

if (!customElements.get('transformance-banner')) {
  customElements.define('transformance-banner', TransformanceBanner);
}
