/**
 * Transformance interactive tour player.
 *
 * A self-contained Web Component (`<transformance-tour data-tour="cash-app">`)
 * that renders a Supademo-style step-through walk of a product flow inside a
 * Shadow DOM, isolated from the host page (Webflow, this Next.js preview, etc).
 *
 * Each tour is a JS object with `{ id, scenes }` where every scene defines:
 *   - title (mono eyebrow on the tooltip)
 *   - body (HTML — wrap a climax word in <span class="grad">…</span>)
 *   - html (the scene markup that renders inside .stage)
 *   - spotlight (CSS selector pointing inside the scene's html)
 *   - tooltipSide ('left' | 'right' | 'top' | 'bottom')
 *   - advanceOn (optional): { click: '<selector>' } — if absent, tooltip shows
 *     a "Next" button that advances the tour. Aligned with the user's "no
 *     auto-advance — only further on click" preference.
 *
 * Closing CTA: the host page can supply a `data-cta-html` attribute on the
 * <transformance-tour> element. Whatever HTML is in that attribute is rendered
 * verbatim in the closing card. That lets Webflow connect a native
 * Webflow-managed link/button instead of hard-coding a URL.
 */

import { STYLES as styles } from './styles.js';

const tours = {};

/** Register a tour. Called by the scene modules. */
export function registerTour(tour) {
  tours[tour.id] = tour;
  // If the page already has tour elements waiting for this tour, mount them now.
  document.querySelectorAll(`transformance-tour[data-tour="${tour.id}"]`).forEach((el) => {
    if (!el._mounted) el._tryMount();
  });
}

class TransformanceTour extends HTMLElement {
  constructor() {
    super();
    this._mounted = false;
    this._stepIndex = 0;
    this._tour = null;
  }

  connectedCallback() {
    if (this._mounted) return;
    this._tryMount();
  }

  _tryMount() {
    const id = this.dataset.tour;
    const tour = id && tours[id];
    if (!tour) return; // tour not registered yet — registerTour() will retry
    this._mounted = true;
    this._tour = tour;

    this._shadow = this.attachShadow({ mode: 'open' });
    this._shadow.innerHTML = `
      <style>${styles}</style>
      <svg width="0" height="0" style="position:absolute" aria-hidden="true">
        <defs>
          <linearGradient id="tour-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="#ff8308"/>
            <stop offset="0.55" stop-color="#ff5043"/>
            <stop offset="1" stop-color="#392bd5"/>
          </linearGradient>
        </defs>
      </svg>
      <div class="frame" part="frame">
        <div class="cover-tag">${tour.tag || 'Interactive demo'}</div>
        <button class="fs-close" data-fs-close aria-label="Close demo">✕</button>
        <div class="stage" data-stage></div>
        <div class="cover" data-cover>
          <div class="cover-pill">
            <span class="cover-play"><svg viewBox="0 0 10 10"><polygon points="2,1 9,5 2,9"/></svg></span>
            ${tour.coverLabel || 'Watch demo'}
          </div>
        </div>
      </div>
    `;

    this._frame = this._shadow.querySelector('.frame');
    this._stage = this._shadow.querySelector('[data-stage]');
    this._cover = this._shadow.querySelector('[data-cover]');
    this._fsClose = this._shadow.querySelector('[data-fs-close]');

    this._cover.addEventListener('click', () => this._start(), { once: true });
    this._fsClose.addEventListener('click', (e) => {
      e.stopPropagation();
      this._exitFullscreen();
    });

    // Pre-render scene 0 underneath the cover so visitors see a dimmed preview
    // of the first frame, hinting at what the tour reveals.
    this._renderSceneContent(0);
  }

  _isMobile() {
    return typeof matchMedia === 'function' && matchMedia('(max-width: 767px)').matches;
  }

  _enterFullscreen() {
    this._frame.classList.add('fs');
    // Prevent background page scroll while the tour is fullscreen
    document.body.style.overflow = 'hidden';
  }

  _exitFullscreen() {
    this._frame.classList.remove('fs');
    document.body.style.overflow = '';
    // Return to the cover state so tapping the tile re-opens fullscreen
    this._shadow.querySelector('.spotlight')?.remove();
    this._shadow.querySelector('.tooltip')?.remove();
    this._shadow.querySelector('.toolbar')?.remove();
    this._shadow.querySelector('.closing')?.remove();
    // Re-render the cover if it was removed
    if (!this._shadow.querySelector('[data-cover]')) {
      const cover = document.createElement('div');
      cover.className = 'cover';
      cover.setAttribute('data-cover', '');
      cover.innerHTML = `
        <div class="cover-pill">
          <span class="cover-play"><svg viewBox="0 0 10 10"><polygon points="2,1 9,5 2,9"/></svg></span>
          ${this._tour.coverLabel || 'Watch demo'}
        </div>
      `;
      this._frame.appendChild(cover);
      this._cover = cover;
      cover.addEventListener('click', () => this._start(), { once: true });
    }
    this._renderSceneContent(0);
    this._stepIndex = 0;
  }

  _start() {
    if (this._isMobile()) this._enterFullscreen();
    this._cover.classList.add('hidden');
    setTimeout(() => this._cover.remove(), 320);
    // Scene 0 content is already in the DOM from the cover preview — activate
    // the spotlight / tooltip / advance hooks for it now.
    this._activateScene(0);
    this._renderToolbar();
  }

  _renderToolbar() {
    let bar = this._shadow.querySelector('.toolbar');
    if (bar) bar.remove();
    bar = document.createElement('div');
    bar.className = 'toolbar';
    bar.innerHTML = `
      <div class="dots">
        ${this._tour.scenes.map((_, i) => `<span class="dot ${i === this._stepIndex ? 'active' : i < this._stepIndex ? 'done' : ''}"></span>`).join('')}
      </div>
      <button class="toolbar-btn" data-skip>Skip</button>
    `;
    this._frame.appendChild(bar);
    bar.querySelector('[data-skip]').addEventListener('click', () => this._renderClosing());
  }

  _renderSceneContent(idx) {
    const scene = this._tour.scenes[idx];
    this._stage.innerHTML = `<div class="scene scene-${scene.id}">${scene.html}</div>`;
  }

  _activateScene(idx) {
    this._stepIndex = idx;
    const scene = this._tour.scenes[idx];

    // Clear previous spotlight and tooltip
    this._shadow.querySelector('.spotlight')?.remove();
    this._shadow.querySelector('.tooltip')?.remove();

    // Optional scene-local onMount hook — used by scenes that need their
    // own click handlers for internal interactivity (e.g. the scenario
    // builder that swaps chart data when you click a tab). Called with
    // the stage element so scenes can query their own DOM.
    if (typeof scene.onMount === 'function') {
      try { scene.onMount(this._stage, this); } catch (err) { console.error('[tour] scene.onMount error:', err); }
    }

    // Defer spotlight + tooltip until layout settles (next frame)
    requestAnimationFrame(() => {
      if (scene.spotlight) this._renderSpotlight(scene);
      if (scene.body) this._renderTooltip(scene);
      this._bindAdvance(scene);
    });
  }

  _renderScene(idx) {
    this._renderSceneContent(idx);
    this._activateScene(idx);
    this._renderToolbar();
  }

  _renderSpotlight(scene) {
    const target = this._stage.querySelector(scene.spotlight);
    if (!target) return;

    // Clear the gradient halo from any previous scene's target.
    this._shadow.querySelectorAll('.tour-hilite').forEach(el => el.classList.remove('tour-hilite'));

    // If the target is inside a scrollable container (e.g. the chat body
    // in Vero Chat tours), scroll ONLY that container — not the host page.
    // Only scroll if the target isn't already visible, and align to the
    // bottom of the container so the top of the scene (greeting, intro
    // copy) stays in view. Centering the target tended to push important
    // context offscreen.
    let sc = target.parentElement;
    while (sc && sc !== this._frame) {
      const style = sc.ownerDocument.defaultView.getComputedStyle(sc);
      if (/(auto|scroll)/.test(style.overflowY)) {
        const scRect = sc.getBoundingClientRect();
        const tRect = target.getBoundingClientRect();
        const isVisible = tRect.top >= scRect.top && tRect.bottom <= scRect.bottom;
        if (!isVisible) {
          // Align target's bottom to near the container's bottom (leave 24 px)
          const delta = tRect.bottom - (scRect.bottom - 24);
          sc.scrollTop += delta;
        }
        break;
      }
      sc = sc.parentElement;
    }

    const frameRect = this._frame.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const pad = scene.spotlightPad ?? 8;
    const x = targetRect.left - frameRect.left - pad;
    const y = targetRect.top - frameRect.top - pad;
    const w = targetRect.width + pad * 2;
    const h = targetRect.height + pad * 2;
    const rx = scene.spotlightRadius ?? 12;

    // Dim overlay (SVG mask): keeps the "focus" feel by darkening everything
    // except a hole around the target. No ring — the ring was fixed-size in
    // pixel space and looked awkward at small viewport sizes.
    const svg = `
      <div class="spotlight">
        <svg viewBox="0 0 ${frameRect.width} ${frameRect.height}" preserveAspectRatio="none">
          <defs>
            <mask id="m" maskUnits="userSpaceOnUse">
              <rect class="outer" x="0" y="0" width="${frameRect.width}" height="${frameRect.height}" />
              <rect class="inner" x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" />
            </mask>
          </defs>
          <rect class="spotlight-dim" x="0" y="0" width="${frameRect.width}" height="${frameRect.height}" mask="url(#m)" />
        </svg>
      </div>
    `;
    this._frame.insertAdjacentHTML('beforeend', svg);

    // Halo / gradient border on the target element itself — CSS-based, so it
    // stays right-sized on any screen.
    target.classList.add('tour-hilite');

    // Save target + rect for tooltip positioning
    this._currentTargetRect = { x, y, w, h };
  }

  _renderTooltip(scene) {
    const isFinal = this._stepIndex === this._tour.scenes.length - 1;
    const advanceLabel = scene.advanceOn?.click ? null : (isFinal ? 'Finish' : 'Next');

    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.dataset.side = scene.tooltipSide || 'right';
    tooltip.innerHTML = `
      ${scene.title ? `<div class="tooltip-tag">${scene.title}</div>` : ''}
      <div class="tooltip-body">${scene.body}</div>
      <div class="tooltip-controls">
        <span class="step-of">${this._stepIndex + 1} / ${this._tour.scenes.length}</span>
        ${advanceLabel
          ? `<button class="tooltip-next" data-next>${advanceLabel}<svg viewBox="0 0 10 10" fill="currentColor"><polygon points="2,1 8,5 2,9"/></svg></button>`
          : `<span style="color: var(--tour-ink-40); font-size: 11px;">↓ Click highlighted</span>`}
      </div>
    `;
    this._frame.appendChild(tooltip);
    this._positionTooltip(tooltip, scene);

    tooltip.querySelector('[data-next]')?.addEventListener('click', () => this._advance());
  }

  _positionTooltip(tooltip, scene) {
    const r = this._currentTargetRect;
    if (!r) {
      // No spotlight target — center the tooltip
      tooltip.style.left = `50%`;
      tooltip.style.top = `50%`;
      tooltip.style.transform = `translate(-50%, -50%)`;
      tooltip.removeAttribute('data-side');
      return;
    }

    const frameRect = this._frame.getBoundingClientRect();
    const tipW = 280;
    const tipH = 140; // approx
    const gap = 14;

    let side = scene.tooltipSide || 'right';
    let left, top;
    switch (side) {
      case 'right':
        left = r.x + r.w + gap;
        top = r.y;
        break;
      case 'left':
        left = r.x - tipW - gap;
        top = r.y;
        break;
      case 'top':
        left = r.x;
        top = r.y - tipH - gap;
        break;
      case 'bottom':
        left = r.x;
        top = r.y + r.h + gap;
        break;
    }

    // Clamp inside frame
    left = Math.max(12, Math.min(left, frameRect.width - tipW - 12));
    top = Math.max(12, Math.min(top, frameRect.height - tipH - 12));

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
  }

  _bindAdvance(scene) {
    if (!scene.advanceOn?.click) return;
    const target = this._stage.querySelector(scene.advanceOn.click);
    if (!target) return;
    target.addEventListener('click', (ev) => {
      ev.preventDefault();
      this._advance();
    }, { once: true });
    target.style.cursor = 'pointer';
  }

  _advance() {
    if (this._stepIndex + 1 >= this._tour.scenes.length) {
      this._renderClosing();
    } else {
      this._renderScene(this._stepIndex + 1);
    }
  }

  _renderClosing() {
    this._shadow.querySelector('.spotlight')?.remove();
    this._shadow.querySelector('.tooltip')?.remove();
    this._shadow.querySelector('.toolbar')?.remove();

    const ctaHtml = this.dataset.ctaHtml || `
      <a class="closing-default-cta" href="https://transformance.ai/meeting">
        Book a meeting →
      </a>
    `;

    const closing = document.createElement('div');
    closing.className = 'closing';
    closing.innerHTML = `
      <h3>${this._tour.closing?.headline || 'Want to see it on <span class="grad">your data</span>?'}</h3>
      ${this._tour.closing?.sub ? `<p>${this._tour.closing.sub}</p>` : ''}
      <div class="closing-cta-slot">${ctaHtml}</div>
      <button class="closing-replay" data-replay>↻ Replay</button>
    `;
    this._frame.appendChild(closing);

    closing.querySelector('[data-replay]').addEventListener('click', () => {
      closing.remove();
      this._renderScene(0);
    });
  }
}

if (!customElements.get('transformance-tour')) {
  customElements.define('transformance-tour', TransformanceTour);
}
