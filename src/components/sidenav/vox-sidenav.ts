import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A vertical section navigation, in the style of the OpenVox docs sidebar.
 *
 * ```html
 * <vox-sidenav>
 *   <vox-sidenav-item href="/" current>Overview</vox-sidenav-item>
 *   <vox-sidenav-group heading="Installation" open>
 *     <vox-sidenav-item href="/install/deb">Debian</vox-sidenav-item>
 *   </vox-sidenav-group>
 * </vox-sidenav>
 * ```
 *
 * @slot - `<vox-sidenav-item>` and `<vox-sidenav-group>` elements.
 */
@customElement('vox-sidenav')
export class VoxSidenav extends LitElement {
  @property() label = 'Section';

  static styles = css`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    nav {
      display: flex;
      flex-direction: column;
      gap: 2px;
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

/**
 * A collapsible group of sidenav items.
 *
 * @slot - `<vox-sidenav-item>` elements.
 */
@customElement('vox-sidenav-group')
export class VoxSidenavGroup extends LitElement {
  @property() heading = '';
  @property({ type: Boolean, reflect: true }) open = false;

  static styles = css`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    .trigger {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--vox-space-2);
      width: 100%;
      padding: var(--vox-space-2) var(--vox-space-3);
      background: none;
      border: none;
      border-radius: var(--vox-radius-sm);
      color: var(--vox-color-text-1);
      font-family: inherit;
      font-size: 14px;
      font-weight: 600;
      text-align: left;
      cursor: pointer;
    }

    .trigger:hover {
      color: var(--vox-color-brand-1);
    }

    .trigger:focus-visible {
      outline: 2px solid var(--vox-color-brand-1);
      outline-offset: -2px;
    }

    .chevron {
      flex: none;
      width: 14px;
      height: 14px;
      transition: transform var(--vox-transition-fast);
    }

    :host([open]) .chevron {
      transform: rotate(90deg);
    }

    .items {
      display: none;
      flex-direction: column;
      gap: 2px;
      padding-left: var(--vox-space-3);
      border-left: 1px solid var(--vox-color-divider);
      margin-left: var(--vox-space-3);
    }

    :host([open]) .items {
      display: flex;
    }
  `;

  private toggle() {
    this.open = !this.open;
  }

  render() {
    return html`
      <button
        class="trigger"
        aria-expanded=${this.open ? 'true' : 'false'}
        @click=${this.toggle}
      >
        ${this.heading}
        <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="m9 6 6 6-6 6" />
        </svg>
      </button>
      <div class="items"><slot></slot></div>
    `;
  }
}

/**
 * One sidenav link. Set `current` on the active page's item.
 *
 * @slot - Link text.
 */
@customElement('vox-sidenav-item')
export class VoxSidenavItem extends LitElement {
  @property() href = '#';
  @property({ type: Boolean, reflect: true }) current = false;

  static styles = css`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    a {
      display: block;
      padding: var(--vox-space-2) var(--vox-space-3);
      border-radius: var(--vox-radius-sm);
      color: var(--vox-color-text-2);
      font-size: 14px;
      text-decoration: none;
      transition:
        color var(--vox-transition-fast),
        background-color var(--vox-transition-fast);
    }

    a:hover {
      color: var(--vox-color-text-1);
    }

    a:focus-visible {
      outline: 2px solid var(--vox-color-brand-1);
      outline-offset: -2px;
    }

    :host([current]) a {
      background-color: var(--vox-color-brand-soft);
      color: var(--vox-color-brand-1);
      font-weight: 600;
    }
  `;

  render() {
    return html`
      <a href=${this.href} aria-current=${this.current ? 'page' : 'false'}>
        <slot></slot>
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-sidenav': VoxSidenav;
    'vox-sidenav-group': VoxSidenavGroup;
    'vox-sidenav-item': VoxSidenavItem;
  }
}
