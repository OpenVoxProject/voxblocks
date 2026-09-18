import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export type MenuPlacement = 'bottom-start' | 'bottom-end';

/**
 * An overlay menu anchored to an arbitrary trigger — an avatar, an icon
 * button, anything — unlike `<vox-dropdown>`, which owns a fixed
 * label+chevron trigger of its own.
 *
 * ```html
 * <vox-menu label="Account menu">
 *   <vox-avatar slot="trigger" initials="UN"></vox-avatar>
 *   <a href="/profile">Profile</a>
 *   <a href="/settings">Settings</a>
 *   <hr />
 *   <button type="button">Log out</button>
 * </vox-menu>
 * ```
 *
 * @slot trigger - Content shown inside the trigger button, e.g. a `<vox-avatar>`.
 * @slot - Menu entries (`<a>`, `<button>`, `<hr>` for separators).
 * @fires vox-close - When the menu closes (Escape, outside click, or an entry click).
 */
@customElement('vox-menu')
export class VoxMenu extends LitElement {
  /**
   * Accessible name for the trigger button. Set this when the `trigger`
   * slot has no visible text of its own (e.g. an avatar-only trigger);
   * leave unset when it does, so that text stays the accessible name.
   */
  @property() label?: string;
  @property({ reflect: true }) placement: MenuPlacement = 'bottom-end';
  @property({ type: Boolean, reflect: true }) open = false;

  static styles = css`
    :host {
      position: relative;
      display: inline-block;
      /* Without this, a flex/grid container's default stretch alignment
         grows the host to fill the cross axis (e.g. a tall sibling, or a
         container given a min-height for layout purposes) while the
         trigger button inside stays content-sized — and since the menu's
         "top: 100%" is measured against the host's own box, it then opens
         far below the trigger instead of right under it. */
      align-self: flex-start;
      font-family: var(--vox-font-family-base);
    }

    .trigger {
      display: inline-flex;
      align-items: center;
      background: none;
      border: none;
      padding: 0;
      border-radius: var(--vox-radius-md);
      color: inherit;
      font: inherit;
      cursor: pointer;
    }

    .trigger:focus-visible {
      outline: 2px solid var(--vox-color-brand-1);
      outline-offset: 2px;
    }

    .menu {
      position: absolute;
      top: calc(100% + 4px);
      z-index: 10;
      min-width: 180px;
      display: none;
      flex-direction: column;
      padding: var(--vox-space-2);
      background-color: var(--vox-color-bg-elv);
      border: 1px solid var(--vox-color-divider);
      border-radius: var(--vox-radius-md);
      box-shadow: var(--vox-shadow-2);
    }

    :host([placement='bottom-start']) .menu {
      left: 0;
    }

    :host([placement='bottom-end']) .menu {
      right: 0;
    }

    :host([open]) .menu {
      display: flex;
    }

    ::slotted(a),
    ::slotted(button) {
      display: block;
      width: 100%;
      box-sizing: border-box;
      padding: var(--vox-space-2) var(--vox-space-3);
      background: none;
      border: none;
      border-radius: var(--vox-radius-sm);
      color: var(--vox-color-text-1);
      font-family: inherit;
      font-size: 14px;
      text-align: left;
      text-decoration: none;
      cursor: pointer;
      white-space: nowrap;
    }

    ::slotted(a:hover),
    ::slotted(button:hover),
    ::slotted(a:focus-visible),
    ::slotted(button:focus-visible) {
      background-color: var(--vox-color-brand-soft);
      color: var(--vox-color-brand-1);
      outline: none;
    }

    ::slotted(hr) {
      width: 100%;
      margin: var(--vox-space-1) 0;
      border: none;
      border-top: 1px solid var(--vox-color-divider);
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', this.handleOutsideClick);
    this.addEventListener('keydown', this.handleKeydown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this.handleOutsideClick);
    this.removeEventListener('keydown', this.handleKeydown);
  }

  private handleOutsideClick = (event: MouseEvent) => {
    if (this.open && !event.composedPath().includes(this)) {
      this.close();
    }
  };

  private handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && this.open) {
      this.close();
      this.renderRoot.querySelector<HTMLElement>('.trigger')?.focus();
      return;
    }

    if ((event.key === 'ArrowDown' || event.key === 'ArrowUp') && this.open) {
      event.preventDefault();
      const items = [...this.querySelectorAll<HTMLElement>('a, button')].filter(
        (el) => el.slot !== 'trigger',
      );
      if (items.length === 0) return;
      const active = document.activeElement as HTMLElement;
      const index = items.indexOf(active);
      const delta = event.key === 'ArrowDown' ? 1 : -1;
      const next = items[(Math.max(index, 0) + delta + items.length) % items.length];
      next.focus();
    }
  };

  private toggle() {
    if (this.open) {
      this.close();
    } else {
      this.open = true;
    }
  }

  private close() {
    if (!this.open) return;
    this.open = false;
    this.dispatchEvent(new CustomEvent('vox-close', { bubbles: true, composed: true }));
  }

  render() {
    return html`
      <button
        class="trigger"
        aria-expanded=${this.open ? 'true' : 'false'}
        aria-haspopup="true"
        aria-label=${this.label ?? nothing}
        @click=${this.toggle}
      >
        <slot name="trigger"></slot>
      </button>
      <div class="menu" role="menu">
        <slot @click=${() => this.close()}></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-menu': VoxMenu;
  }
}
