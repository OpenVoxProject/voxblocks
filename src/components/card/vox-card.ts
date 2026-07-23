import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A feature card in the style of the OpenVox docs landing page tiles.
 * Becomes a single large link when `href` is set.
 *
 * @slot icon - Optional icon or emoji shown above the heading.
 * @slot badge - Optional badge or label shown in the top-right corner.
 * @slot - Card body text.
 * @slot footer - Optional content pinned to the bottom of the card, e.g. stats.
 */
@customElement('vox-card')
export class VoxCard extends LitElement {
  @property() heading = '';
  @property() href?: string;
  @property() target?: string;

  static styles = css`
    :host {
      display: block;
    }

    .card {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;
      box-sizing: border-box;
      background-color: var(--vox-color-bg-soft);
      border: 1px solid var(--vox-color-bg-soft);
      border-radius: var(--vox-radius-lg);
      padding: var(--vox-space-6);
      font-family: var(--vox-font-family-base);
      text-decoration: none;
      transition: border-color var(--vox-transition-base);
    }

    .badge {
      position: absolute;
      top: var(--vox-space-6);
      right: var(--vox-space-6);
    }

    .badge:not(.has-badge) {
      display: none;
    }

    a.card:hover,
    a.card:focus-visible {
      border-color: var(--vox-color-brand-1);
    }

    a.card:focus-visible {
      outline: 2px solid var(--vox-color-brand-1);
      outline-offset: 2px;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      margin-bottom: var(--vox-space-4);
      background-color: var(--vox-color-bg-elv);
      border-radius: var(--vox-radius-md);
      font-size: 24px;
    }

    .icon:not(.has-icon) {
      display: none;
    }

    .heading {
      margin: 0;
      font-size: 16px;
      font-weight: 600;
      line-height: 1.5;
      color: var(--vox-color-text-1);
    }

    .body {
      margin-top: var(--vox-space-2);
      font-size: 14px;
      line-height: 1.6;
      color: var(--vox-color-text-2);
    }

    .footer {
      margin-top: auto;
      padding-top: var(--vox-space-4);
    }

    .footer:not(.has-footer) {
      display: none;
    }
  `;

  private hasIcon = false;
  private hasBadge = false;
  private hasFooter = false;

  private handleIconSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    this.hasIcon = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  }

  private handleBadgeSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    this.hasBadge = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  }

  private handleFooterSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    this.hasFooter = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  }

  render() {
    const inner = html`
      <div class="badge ${this.hasBadge ? 'has-badge' : ''}">
        <slot name="badge" @slotchange=${this.handleBadgeSlotChange}></slot>
      </div>
      <div class="icon ${this.hasIcon ? 'has-icon' : ''}">
        <slot name="icon" @slotchange=${this.handleIconSlotChange}></slot>
      </div>
      <h3 class="heading">${this.heading}</h3>
      <div class="body"><slot></slot></div>
      <div class="footer ${this.hasFooter ? 'has-footer' : ''}">
        <slot name="footer" @slotchange=${this.handleFooterSlotChange}></slot>
      </div>
    `;

    return this.href !== undefined
      ? html`<a class="card" href=${this.href} target=${this.target ?? nothing}>${inner}</a>`
      : html`<div class="card">${inner}</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-card': VoxCard;
  }
}
