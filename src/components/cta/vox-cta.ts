import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A call-to-action link with a trailing arrow that nudges on hover.
 *
 * @slot - Link text.
 */
@customElement('vox-cta')
export class VoxCta extends LitElement {
  @property() href = '#';
  @property() target?: string;

  static styles = css`
    :host {
      display: inline-block;
      font-family: var(--vox-font-family-base);
    }

    a {
      display: inline-flex;
      align-items: center;
      gap: var(--vox-space-2);
      color: var(--vox-color-brand-1);
      font-size: 15px;
      font-weight: 600;
      text-decoration: none;
    }

    a:hover {
      color: var(--vox-color-brand-2);
      text-decoration: underline;
    }

    a:focus-visible {
      outline: 2px solid var(--vox-color-brand-1);
      outline-offset: 2px;
      border-radius: var(--vox-radius-sm);
    }

    svg {
      width: 16px;
      height: 16px;
      transition: transform var(--vox-transition-fast);
    }

    a:hover svg {
      transform: translateX(3px);
    }
  `;

  render() {
    return html`
      <a href=${this.href} target=${this.target ?? ''}>
        <slot></slot>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-cta': VoxCta;
  }
}
