import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Page-number navigation. Children are plain links; mark the current
 * page with `aria-current="page"`:
 *
 * ```html
 * <vox-pagination>
 *   <a href="?page=1">1</a>
 *   <a href="?page=2" aria-current="page">2</a>
 *   <a href="?page=3">3</a>
 * </vox-pagination>
 * ```
 *
 * @slot - `<a>` elements (including any prev/next links).
 */
@customElement('vox-pagination')
export class VoxPagination extends LitElement {
  @property() label = 'Pagination';

  static styles = css`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    nav {
      display: flex;
      gap: var(--vox-space-1);
      flex-wrap: wrap;
    }

    ::slotted(a) {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 34px;
      height: 34px;
      padding: 0 var(--vox-space-2);
      border-radius: var(--vox-radius-md);
      color: var(--vox-color-text-2);
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
      transition:
        color var(--vox-transition-fast),
        background-color var(--vox-transition-fast);
    }

    ::slotted(a:hover) {
      color: var(--vox-color-brand-1);
      background-color: var(--vox-color-brand-soft);
    }

    ::slotted(a[aria-current='page']) {
      background-color: var(--vox-color-brand-3);
      color: var(--vox-color-text-inverse);
      font-weight: 600;
    }
  `;

  render() {
    return html`
      <nav aria-label=${this.label}>
        <slot></slot>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-pagination': VoxPagination;
  }
}
