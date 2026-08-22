import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { ICON_PATHS } from '../icon/icon-paths.js';

/**
 * A site header with brand, primary navigation, and an actions area.
 * Nav entries are plain links; mark the current page with
 * `aria-current="page"`. Below 768px, nav and actions collapse behind a
 * menu button.
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

  @state() private mobileOpen = false;

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

    .menu-toggle {
      display: none;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      margin-left: auto;
      padding: 0;
      background: none;
      border: none;
      border-radius: var(--vox-radius-sm);
      color: var(--vox-color-text-1);
      cursor: pointer;
    }

    .menu-toggle:hover {
      color: var(--vox-color-brand-1);
    }

    .menu-toggle:focus-visible {
      outline: 2px solid var(--vox-color-brand-1);
      outline-offset: 2px;
    }

    .menu-icon {
      width: 22px;
      height: 22px;
    }

    .nav-wrap {
      display: contents;
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

    @media (max-width: 768px) {
      .menu-toggle {
        display: inline-flex;
      }

      .nav-wrap {
        display: none;
        width: 100%;
      }

      .nav-wrap.open {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: var(--vox-space-4);
        margin-top: var(--vox-space-3);
        padding-top: var(--vox-space-4);
        border-top: 1px solid var(--vox-color-divider);
      }

      nav {
        flex-direction: column;
        align-items: flex-start;
        gap: var(--vox-space-3);
      }

      .actions {
        flex-direction: column;
        align-items: stretch;
      }
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', this.handleOutsideClick);
    this.addEventListener('keydown', this.handleKeydown);
    this.addEventListener('focusout', this.handleFocusOut);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this.handleOutsideClick);
    this.removeEventListener('keydown', this.handleKeydown);
    this.removeEventListener('focusout', this.handleFocusOut);
  }

  private handleOutsideClick = (event: MouseEvent) => {
    if (this.mobileOpen && !event.composedPath().includes(this)) {
      this.mobileOpen = false;
    }
  };

  /** Close the mobile menu once focus tabs past its last item. */
  private handleFocusOut = (event: FocusEvent) => {
    const next = event.relatedTarget as Node | null;
    if (this.mobileOpen && !(next && this.contains(next))) {
      this.mobileOpen = false;
    }
  };

  private handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && this.mobileOpen) {
      this.mobileOpen = false;
      this.renderRoot.querySelector<HTMLElement>('.menu-toggle')?.focus();
    }
  };

  private toggleMobileMenu = () => {
    this.mobileOpen = !this.mobileOpen;
  };

  private closeMobileMenu = () => {
    this.mobileOpen = false;
  };

  render() {
    return html`
      <header class="header">
        <a class="brand" href=${this.href}>
          <slot name="logo"></slot>
          ${this.siteTitle ? html`<span>${this.siteTitle}</span>` : nothing}
        </a>
        <button
          type="button"
          class="menu-toggle"
          aria-expanded=${this.mobileOpen ? 'true' : 'false'}
          aria-controls="nav-wrap"
          aria-label=${this.mobileOpen ? 'Close menu' : 'Open menu'}
          @click=${this.toggleMobileMenu}
        >
          <svg
            class="menu-icon"
            viewBox="0 0 48 48"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            ${this.mobileOpen ? ICON_PATHS.close : ICON_PATHS.menu}
          </svg>
        </button>
        <div id="nav-wrap" class="nav-wrap${this.mobileOpen ? ' open' : ''}">
          <nav aria-label="Main">
            <slot @click=${this.closeMobileMenu}></slot>
          </nav>
          <div class="actions">
            <slot name="actions"></slot>
          </div>
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
