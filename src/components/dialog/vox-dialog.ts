import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

/**
 * A modal dialog built on the native `<dialog>` element, which provides
 * focus trapping and Escape-to-close for free.
 *
 * @slot - Dialog body.
 * @slot footer - Action buttons.
 * @fires vox-close - When the dialog closes.
 */
@customElement('vox-dialog')
export class VoxDialog extends LitElement {
  @property() heading = '';
  @property({ type: Boolean }) open = false;

  /** Close when the backdrop is clicked. */
  @property({ type: Boolean, attribute: 'light-dismiss' }) lightDismiss = false;

  @query('dialog') private dialogEl!: HTMLDialogElement;

  static styles = css`
    dialog {
      box-sizing: border-box;
      width: min(90vw, 480px);
      padding: 0;
      border: 1px solid var(--vox-color-divider);
      border-radius: var(--vox-radius-lg);
      background-color: var(--vox-color-bg-elv);
      color: var(--vox-color-text-1);
      font-family: var(--vox-font-family-base);
      box-shadow: var(--vox-shadow-2);
    }

    dialog::backdrop {
      background-color: rgba(0, 0, 0, 0.5);
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--vox-space-3);
      padding: var(--vox-space-4) var(--vox-space-6);
      border-bottom: 1px solid var(--vox-color-divider);
    }

    .heading {
      margin: 0;
      font-size: 16px;
      font-weight: 600;
    }

    .close {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      padding: 0;
      background: none;
      border: none;
      border-radius: var(--vox-radius-sm);
      color: var(--vox-color-text-2);
      cursor: pointer;
    }

    .close:hover {
      color: var(--vox-color-text-1);
      background-color: var(--vox-color-bg-soft);
    }

    .close:focus-visible {
      outline: 2px solid var(--vox-color-brand-1);
    }

    .close svg {
      width: 16px;
      height: 16px;
    }

    .body {
      padding: var(--vox-space-6);
      font-size: 14px;
      line-height: 1.7;
      color: var(--vox-color-text-2);
    }

    .footer {
      display: flex;
      justify-content: flex-end;
      gap: var(--vox-space-3);
      padding: var(--vox-space-4) var(--vox-space-6);
      border-top: 1px solid var(--vox-color-divider);
    }

    .footer:not(.has-content) {
      display: none;
    }

    ::slotted(p:first-child) {
      margin-top: 0;
    }

    ::slotted(p:last-child) {
      margin-bottom: 0;
    }
  `;

  private hasFooter = false;

  show() {
    this.open = true;
  }

  close() {
    this.open = false;
  }

  updated() {
    if (this.open && !this.dialogEl.open) {
      this.dialogEl.showModal();
    } else if (!this.open && this.dialogEl.open) {
      this.dialogEl.close();
    }
  }

  private handleNativeClose() {
    this.open = false;
    this.dispatchEvent(
      new CustomEvent('vox-close', { bubbles: true, composed: true }),
    );
  }

  private handleClick(event: MouseEvent) {
    // A click on the backdrop targets the <dialog> element itself.
    if (this.lightDismiss && event.target === this.dialogEl) {
      this.close();
    }
  }

  private handleFooterSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    this.hasFooter = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  }

  render() {
    return html`
      <dialog
        aria-label=${this.heading || nothing}
        @close=${this.handleNativeClose}
        @click=${this.handleClick}
      >
        <div class="header">
          <h2 class="heading">${this.heading}</h2>
          <button class="close" aria-label="Close dialog" @click=${this.close}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="body"><slot></slot></div>
        <div class="footer ${this.hasFooter ? 'has-content' : ''}">
          <slot name="footer" @slotchange=${this.handleFooterSlotChange}></slot>
        </div>
      </dialog>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-dialog': VoxDialog;
  }
}
