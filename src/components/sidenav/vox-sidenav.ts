import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { ICON_PATHS } from '../icon/icon-paths.js';

/**
 * A vertical section navigation, in the style of the OpenVox docs sidebar.
 * Below 768px, collapses behind a toggle button — the same breakpoint and
 * pattern `vox-header` uses for its own nav, so a page's top nav and side
 * nav switch to mobile mode together.
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
  /** Accessible name for the `<nav>` landmark. */
  @property() label = 'Section';

  /** Visible text on the mobile toggle button. */
  @property({ attribute: 'toggle-label' }) toggleLabel = 'Menu';

  @state() private mobileOpen = false;

  static styles = css`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    .toggle {
      display: none;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      gap: var(--vox-space-2);
      padding: var(--vox-space-2) var(--vox-space-3);
      background: none;
      border: 1px solid var(--vox-color-divider);
      border-radius: var(--vox-radius-md);
      color: var(--vox-color-text-1);
      font-family: inherit;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
    }

    .toggle:hover {
      border-color: var(--vox-color-brand-1);
      color: var(--vox-color-brand-1);
    }

    .toggle:focus-visible {
      outline: 2px solid var(--vox-color-brand-1);
      outline-offset: 2px;
    }

    .toggle-icon {
      width: 18px;
      height: 18px;
      flex: none;
    }

    nav {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    @media (max-width: 768px) {
      .toggle {
        display: flex;
      }

      nav {
        display: none;
        margin-top: var(--vox-space-2);
      }

      nav.open {
        display: flex;
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
      this.renderRoot.querySelector<HTMLElement>('.toggle')?.focus();
    }
  };

  private toggleMobile = () => {
    this.mobileOpen = !this.mobileOpen;
  };

  private handleNavClick = (event: MouseEvent) => {
    // Only close on an actual navigation (an <a> in the composed path) —
    // not on a vox-sidenav-group's own expand/collapse trigger, which is
    // a <button> nested inside this same <nav>.
    if (event.composedPath().some((el) => el instanceof HTMLAnchorElement)) {
      this.mobileOpen = false;
    }
  };

  render() {
    return html`
      <button
        type="button"
        class="toggle"
        aria-expanded=${this.mobileOpen ? 'true' : 'false'}
        aria-controls="nav"
        @click=${this.toggleMobile}
      >
        ${this.toggleLabel}
        <svg
          class="toggle-icon"
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
      <nav
        id="nav"
        class=${this.mobileOpen ? 'open' : ''}
        aria-label=${this.label}
        @click=${this.handleNavClick}
      >
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
  private static nextId = 0;

  @property() heading = '';
  @property({ type: Boolean, reflect: true }) open = false;

  private readonly itemsId = `vox-sidenav-group-items-${VoxSidenavGroup.nextId++}`;

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
        aria-controls=${this.itemsId}
        @click=${this.toggle}
      >
        ${this.heading}
        <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="m9 6 6 6-6 6" />
        </svg>
      </button>
      <div id=${this.itemsId} class="items"><slot></slot></div>
    `;
  }
}

/**
 * One sidenav link. Set `current` on the active page's item.
 *
 * @slot - Link text.
 * @slot icon - Optional icon before the link text, e.g. `<vox-icon>`.
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
      display: flex;
      align-items: center;
      gap: var(--vox-space-2);
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

    .icon {
      display: flex;
      flex: none;
    }

    .icon:not(.has-icon) {
      display: none;
    }
  `;

  private hasIcon = false;

  private handleIconSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    this.hasIcon = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  }

  render() {
    return html`
      <a href=${this.href} aria-current=${this.current ? 'page' : 'false'}>
        <span class="icon ${this.hasIcon ? 'has-icon' : ''}">
          <slot name="icon" @slotchange=${this.handleIconSlotChange}></slot>
        </span>
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
