import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A site footer. The default slot holds link columns
 * (`<vox-footer-column>`), the `bottom` slot holds copyright text.
 *
 * @slot - `<vox-footer-column>` elements.
 * @slot bottom - Copyright / legal line.
 */
@customElement('vox-footer')
export class VoxFooter extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
      background-color: var(--vox-color-bg-alt);
      border-top: 1px solid var(--vox-color-divider);
    }

    .inner {
      max-width: 1280px;
      margin: 0 auto;
      padding: var(--vox-space-8) var(--vox-space-6);
    }

    .columns {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: var(--vox-space-6);
    }

    .bottom {
      margin-top: var(--vox-space-8);
      padding-top: var(--vox-space-4);
      border-top: 1px solid var(--vox-color-divider);
      font-size: 13px;
      color: var(--vox-color-text-3);
    }
  `;

  render() {
    return html`
      <footer>
        <div class="inner">
          <div class="columns"><slot></slot></div>
          <div class="bottom"><slot name="bottom"></slot></div>
        </div>
      </footer>
    `;
  }
}

/**
 * One column of footer links.
 *
 * @slot - `<a>` elements.
 */
@customElement('vox-footer-column')
export class VoxFooterColumn extends LitElement {
  @property() heading = '';

  static styles = css`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    .heading {
      margin: 0 0 var(--vox-space-3);
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: var(--vox-color-text-1);
    }

    .links {
      display: flex;
      flex-direction: column;
      gap: var(--vox-space-2);
    }

    ::slotted(a) {
      color: var(--vox-color-text-2);
      font-size: 14px;
      text-decoration: none;
    }

    ::slotted(a:hover) {
      color: var(--vox-color-brand-1);
      text-decoration: underline;
    }
  `;

  render() {
    return html`
      <h3 class="heading">${this.heading}</h3>
      <div class="links"><slot></slot></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-footer': VoxFooter;
    'vox-footer-column': VoxFooterColumn;
  }
}
