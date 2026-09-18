import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A menu button. Menu entries are light-DOM `<a>` or `<button>` children:
 *
 * ```html
 * <vox-dropdown label="Resources">
 *   <a href="/docs">Documentation</a>
 *   <button type="button">Copy install command</button>
 * </vox-dropdown>
 * ```
 *
 * @slot - Menu entries (`<a>`, `<button>`, `<hr>` for separators).
 */
@customElement('vox-dropdown')
export class VoxDropdown extends LitElement {
  @property() label = 'Menu';
  @property({ type: Boolean, reflect: true }) open = false;

  static styles = css`
    :host {
      position: relative;
      display: inline-block;
      font-family: var(--vox-font-family-base);
    }

    .trigger {
      display: inline-flex;
      align-items: center;
      gap: var(--vox-space-2);
      padding: 0 var(--vox-space-4);
      height: 38px;
      background-color: var(--vox-color-bg-soft);
      border: 1px solid var(--vox-color-divider);
      border-radius: var(--vox-radius-md);
      color: var(--vox-color-text-1);
      font-family: inherit;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition:
        border-color var(--vox-transition-fast),
        color var(--vox-transition-fast);
    }

    .trigger:hover {
      border-color: var(--vox-color-brand-1);
      color: var(--vox-color-brand-1);
    }

    .trigger:focus-visible {
      outline: 2px solid var(--vox-color-brand-1);
      outline-offset: 2px;
    }

    .chevron {
      width: 14px;
      height: 14px;
      transition: transform var(--vox-transition-fast);
    }

    :host([open]) .chevron {
      transform: rotate(180deg);
    }

    .menu {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      z-index: 10;
      min-width: max(100%, 180px);
      display: none;
      flex-direction: column;
      padding: var(--vox-space-2);
      background-color: var(--vox-color-bg-elv);
      border: 1px solid var(--vox-color-divider);
      border-radius: var(--vox-radius-md);
      box-shadow: var(--vox-shadow-2);
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
    this.addEventListener('focusout', this.handleFocusOut);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this.handleOutsideClick);
    this.removeEventListener('keydown', this.handleKeydown);
    this.removeEventListener('focusout', this.handleFocusOut);
  }

  private handleOutsideClick = (event: MouseEvent) => {
    if (this.open && !event.composedPath().includes(this)) {
      this.open = false;
    }
  };

  /** Close when focus leaves the component entirely (e.g. Tab past the last item). */
  private handleFocusOut = (event: FocusEvent) => {
    const next = event.relatedTarget as Node | null;
    if (this.open && !(next && this.contains(next))) {
      this.open = false;
    }
  };

  private focusItem(index: number) {
    const items = [...this.querySelectorAll<HTMLElement>('a, button')];
    if (items.length === 0) return;
    items[(index + items.length) % items.length].focus();
  }

  private handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && this.open) {
      this.open = false;
      this.renderRoot.querySelector<HTMLElement>('.trigger')?.focus();
      return;
    }

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      const delta = event.key === 'ArrowDown' ? 1 : -1;
      if (!this.open) {
        this.open = true;
        this.updateComplete.then(() =>
          this.focusItem(event.key === 'ArrowDown' ? 0 : -1),
        );
        return;
      }
      const items = [...this.querySelectorAll<HTMLElement>('a, button')];
      const index = items.indexOf(document.activeElement as HTMLElement);
      this.focusItem(Math.max(index, 0) + delta);
    }
  };

  private toggle() {
    this.open = !this.open;
    if (this.open) {
      this.updateComplete.then(() => this.focusItem(0));
    }
  }

  render() {
    return html`
      <button
        class="trigger"
        aria-expanded=${this.open ? 'true' : 'false'}
        aria-haspopup="true"
        aria-controls="menu"
        @click=${this.toggle}
      >
        ${this.label}
        <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div id="menu" class="menu">
        <slot @click=${() => (this.open = false)}></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-dropdown': VoxDropdown;
  }
}
