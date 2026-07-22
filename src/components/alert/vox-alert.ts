import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export type AlertVariant = 'info' | 'success' | 'warning' | 'danger';

/**
 * A page-level notification message, optionally dismissible.
 * For static advisory text inside prose, see `<vox-callout>`.
 *
 * @slot - Alert message.
 * @fires vox-dismiss - When the user dismisses the alert.
 */
@customElement('vox-alert')
export class VoxAlert extends LitElement {
  @property() variant: AlertVariant = 'info';
  @property() heading = '';
  @property({ type: Boolean }) dismissible = false;
  @property({ type: Boolean, reflect: true }) open = true;

  static styles = css`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    :host(:not([open])) {
      display: none;
    }

    .alert {
      display: flex;
      gap: var(--vox-space-3);
      align-items: flex-start;
      padding: var(--vox-space-4);
      border-radius: var(--vox-radius-md);
      border-left: 4px solid;
      font-size: 14px;
      line-height: 1.6;
      color: var(--vox-color-text-1);
    }

    .body {
      flex: 1 1 auto;
    }

    .heading {
      margin: 0 0 var(--vox-space-1);
      font-size: 14px;
      font-weight: 600;
    }

    .info {
      background-color: var(--vox-color-brand-soft);
      border-color: var(--vox-color-brand-1);
    }
    .info .heading {
      color: var(--vox-color-brand-1);
    }

    .success {
      background-color: var(--vox-color-tip-soft);
      border-color: var(--vox-color-tip-1);
    }
    .success .heading {
      color: var(--vox-color-tip-1);
    }

    .warning {
      background-color: var(--vox-color-warning-soft);
      border-color: var(--vox-color-warning-1);
    }
    .warning .heading {
      color: var(--vox-color-warning-1);
    }

    .danger {
      background-color: var(--vox-color-danger-soft);
      border-color: var(--vox-color-danger-1);
    }
    .danger .heading {
      color: var(--vox-color-danger-1);
    }

    .close {
      flex: none;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      padding: 0;
      background: none;
      border: none;
      border-radius: var(--vox-radius-sm);
      color: var(--vox-color-text-2);
      cursor: pointer;
    }

    .close:hover {
      color: var(--vox-color-text-1);
    }

    .close:focus-visible {
      outline: 2px solid var(--vox-color-brand-1);
    }

    .close svg {
      width: 14px;
      height: 14px;
    }

    ::slotted(p:first-child) {
      margin-top: 0;
    }

    ::slotted(p:last-child) {
      margin-bottom: 0;
    }
  `;

  dismiss() {
    this.open = false;
    this.dispatchEvent(
      new CustomEvent('vox-dismiss', { bubbles: true, composed: true }),
    );
  }

  render() {
    return html`
      <div class="alert ${this.variant}" role="alert">
        <div class="body">
          ${this.heading
            ? html`<p class="heading">${this.heading}</p>`
            : nothing}
          <slot></slot>
        </div>
        ${this.dismissible
          ? html`
              <button class="close" aria-label="Dismiss" @click=${this.dismiss}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            `
          : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-alert': VoxAlert;
  }
}
