import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * A breadcrumb trail. Children are plain links, with the current page
 * as a `<span aria-current="page">`:
 *
 * ```html
 * <vox-breadcrumbs>
 *   <a href="/">Home</a>
 *   <a href="/modules">Modules</a>
 *   <span aria-current="page">puppet-nginx</span>
 * </vox-breadcrumbs>
 * ```
 *
 * @slot - Links and the current-page span.
 */
@customElement('vox-breadcrumbs')
export class VoxBreadcrumbs extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    nav {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      font-size: 13px;
    }

    ::slotted(*) {
      color: var(--vox-color-text-2);
      text-decoration: none;
    }

    ::slotted(a:hover) {
      color: var(--vox-color-brand-1);
      text-decoration: underline;
    }

    ::slotted([aria-current='page']) {
      color: var(--vox-color-text-1);
      font-weight: 600;
    }

    ::slotted(*:not(:first-child))::before {
      content: '/';
      margin: 0 var(--vox-space-2);
      color: var(--vox-color-text-3);
    }
  `;

  render() {
    return html`
      <nav aria-label="Breadcrumbs">
        <slot></slot>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-breadcrumbs': VoxBreadcrumbs;
  }
}
