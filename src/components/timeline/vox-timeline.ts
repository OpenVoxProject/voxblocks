import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A vertical timeline of dated events.
 *
 * @slot - `<vox-timeline-item>` elements.
 */
@customElement('vox-timeline')
export class VoxTimeline extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}

/**
 * One event on a `<vox-timeline>`.
 *
 * @slot - Event description.
 */
@customElement('vox-timeline-item')
export class VoxTimelineItem extends LitElement {
  @property() heading = '';
  @property() date = '';

  static styles = css`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    .item {
      position: relative;
      padding: 0 0 var(--vox-space-6) var(--vox-space-6);
      border-left: 2px solid var(--vox-color-divider);
    }

    :host(:last-child) .item {
      border-left-color: transparent;
      padding-bottom: 0;
    }

    .dot {
      position: absolute;
      top: 4px;
      left: -7px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: var(--vox-color-brand-3);
      border: 2px solid var(--vox-color-bg);
    }

    .date {
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: var(--vox-color-text-3);
    }

    .heading {
      margin: var(--vox-space-1) 0 0;
      font-size: 16px;
      font-weight: 600;
      color: var(--vox-color-text-1);
    }

    .body {
      margin-top: var(--vox-space-1);
      font-size: 14px;
      line-height: 1.6;
      color: var(--vox-color-text-2);
    }
  `;

  render() {
    return html`
      <div class="item">
        <span class="dot" aria-hidden="true"></span>
        ${this.date ? html`<div class="date">${this.date}</div>` : nothing}
        <h3 class="heading">${this.heading}</h3>
        <div class="body"><slot></slot></div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-timeline': VoxTimeline;
    'vox-timeline-item': VoxTimelineItem;
  }
}
