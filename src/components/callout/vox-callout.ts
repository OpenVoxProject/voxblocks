import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export type CalloutVariant = 'info' | 'tip' | 'warning' | 'danger';

const DEFAULT_HEADINGS: Record<CalloutVariant, string> = {
  info: 'Info',
  tip: 'Tip',
  warning: 'Warning',
  danger: 'Danger',
};

/**
 * An admonition block matching the custom containers on the OpenVox docs
 * (::: tip, ::: warning, ...).
 *
 * @slot - Callout body content.
 */
@customElement('vox-callout')
export class VoxCallout extends LitElement {
  @property() variant: CalloutVariant = 'info';

  /** Heading text; defaults to the capitalized variant name. */
  @property() heading?: string;

  static styles = css`
    :host {
      display: block;
    }

    .callout {
      border-radius: var(--vox-radius-md);
      padding: var(--vox-space-4);
      font-family: var(--vox-font-family-base);
      font-size: 14px;
      line-height: 1.7;
      color: var(--vox-color-text-2);
    }

    .heading {
      margin: 0 0 var(--vox-space-2);
      font-size: 14px;
      font-weight: 600;
    }

    .info {
      background-color: var(--vox-color-bg-soft);
    }
    .info .heading {
      color: var(--vox-color-text-1);
    }

    .tip {
      background-color: var(--vox-color-tip-soft);
    }
    .tip .heading {
      color: var(--vox-color-tip-1);
    }

    .warning {
      background-color: var(--vox-color-warning-soft);
    }
    .warning .heading {
      color: var(--vox-color-warning-1);
    }

    .danger {
      background-color: var(--vox-color-danger-soft);
    }
    .danger .heading {
      color: var(--vox-color-danger-1);
    }

    ::slotted(p:first-child) {
      margin-top: 0;
    }

    ::slotted(p:last-child) {
      margin-bottom: 0;
    }
  `;

  render() {
    return html`
      <div class="callout ${this.variant}" role="note">
        <p class="heading">${this.heading ?? DEFAULT_HEADINGS[this.variant]}</p>
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-callout': VoxCallout;
  }
}
