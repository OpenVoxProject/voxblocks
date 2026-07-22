import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A grid of prominent links with descriptions, for hub/landing pages.
 *
 * @slot - `<vox-link-hub-item>` elements.
 */
@customElement('vox-link-hub')
export class VoxLinkHub extends LitElement {
  static styles = css`
    :host {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(260px, 100%), 1fr));
      gap: var(--vox-space-4);
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}

/**
 * One link in a `<vox-link-hub>`.
 *
 * @slot - Short description under the link title.
 */
@customElement('vox-link-hub-item')
export class VoxLinkHubItem extends LitElement {
  @property() href = '#';
  @property() heading = '';

  static styles = css`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    a {
      display: block;
      height: 100%;
      box-sizing: border-box;
      padding: var(--vox-space-4);
      border-bottom: 2px solid var(--vox-color-divider);
      text-decoration: none;
      transition: border-color var(--vox-transition-base);
    }

    a:hover,
    a:focus-visible {
      border-bottom-color: var(--vox-color-brand-1);
    }

    a:focus-visible {
      outline: 2px solid var(--vox-color-brand-1);
      outline-offset: 2px;
    }

    .heading {
      display: flex;
      align-items: center;
      gap: var(--vox-space-2);
      font-size: 16px;
      font-weight: 600;
      color: var(--vox-color-brand-1);
    }

    .heading svg {
      width: 14px;
      height: 14px;
      transition: transform var(--vox-transition-fast);
    }

    a:hover .heading svg {
      transform: translateX(3px);
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
      <a href=${this.href}>
        <span class="heading">
          ${this.heading}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </span>
        <span class="body"><slot></slot></span>
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-link-hub': VoxLinkHub;
    'vox-link-hub-item': VoxLinkHubItem;
  }
}
