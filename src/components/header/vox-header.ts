import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A site header with brand, primary navigation, and an actions area.
 * Nav entries are plain links; mark the current page with
 * `aria-current="page"`.
 *
 * @slot logo - Brand mark shown before the site title.
 * @slot - Navigation links.
 * @slot actions - Right-aligned extras (buttons, theme toggle, ...).
 */
@customElement('vox-header')
export class VoxHeader extends LitElement {
  /** Site title shown next to the logo. */
  @property({ attribute: 'site-title' }) siteTitle = '';

  /** Where the brand links to. */
  @property() href = '/';

  static styles = css`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
      background-color: var(--vox-color-bg);
      border-bottom: 1px solid var(--vox-color-divider);
    }

    .header {
      display: flex;
      align-items: center;
      gap: var(--vox-space-6);
      flex-wrap: wrap;
      max-width: 1280px;
      margin: 0 auto;
      padding: var(--vox-space-3) var(--vox-space-6);
    }

    .brand {
      display: inline-flex;
      align-items: center;
      gap: var(--vox-space-2);
      color: var(--vox-color-text-1);
      font-size: 16px;
      font-weight: 700;
      text-decoration: none;
    }

    .brand ::slotted(img),
    .brand ::slotted(svg) {
      height: 28px;
      width: auto;
    }

    nav {
      display: flex;
      align-items: center;
      gap: var(--vox-space-4);
      flex-wrap: wrap;
      flex: 1 1 auto;
    }

    nav ::slotted(a) {
      color: var(--vox-color-text-2);
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
      transition: color var(--vox-transition-fast);
    }

    nav ::slotted(a:hover) {
      color: var(--vox-color-brand-1);
    }

    nav ::slotted(a[aria-current='page']) {
      color: var(--vox-color-brand-1);
      font-weight: 600;
    }

    .actions {
      display: flex;
      align-items: center;
      gap: var(--vox-space-3);
    }
  `;

  render() {
    return html`
      <header class="header">
        <a class="brand" href=${this.href}>
          <slot name="logo"></slot>
          ${this.siteTitle ? html`<span>${this.siteTitle}</span>` : nothing}
        </a>
        <nav aria-label="Main">
          <slot></slot>
        </nav>
        <div class="actions">
          <slot name="actions"></slot>
        </div>
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-header': VoxHeader;
  }
}
