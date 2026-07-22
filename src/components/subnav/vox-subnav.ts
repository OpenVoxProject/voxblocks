import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A horizontal secondary navigation bar. Children are plain links;
 * mark the active one with `aria-current="page"`.
 *
 * @slot - `<a>` elements.
 */
@customElement('vox-subnav')
export class VoxSubnav extends LitElement {
  /** Accessible name distinguishing this nav from others on the page. */
  @property() label = 'Secondary';

  static styles = css`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    nav {
      display: flex;
      gap: var(--vox-space-1);
      overflow-x: auto;
      border-bottom: 1px solid var(--vox-color-divider);
    }

    ::slotted(a) {
      padding: var(--vox-space-2) var(--vox-space-4);
      margin-bottom: -1px;
      border-bottom: 2px solid transparent;
      color: var(--vox-color-text-2);
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
      white-space: nowrap;
      transition: color var(--vox-transition-fast);
    }

    ::slotted(a:hover) {
      color: var(--vox-color-text-1);
    }

    ::slotted(a[aria-current='page']) {
      color: var(--vox-color-brand-1);
      font-weight: 600;
      border-bottom-color: var(--vox-color-brand-1);
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
    'vox-subnav': VoxSubnav;
  }
}
