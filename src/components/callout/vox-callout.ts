import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ICON_PATHS, type IconName } from '../icon/icon-paths.js';

export type CalloutVariant = 'info' | 'tip' | 'warning' | 'danger';

const DEFAULT_HEADINGS: Record<CalloutVariant, string> = {
  info: 'Info',
  tip: 'Tip',
  warning: 'Warning',
  danger: 'Danger',
};

const VARIANT_ICON: Record<CalloutVariant, IconName> = {
  info: 'info',
  tip: 'check-circle',
  warning: 'warning',
  danger: 'x-circle',
};

/**
 * An admonition block matching the custom containers on the OpenVox docs
 * (::: tip, ::: warning, ...). Shows an icon matching `variant`
 * automatically — no icon slot to fill in.
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
      display: flex;
      gap: var(--vox-space-3);
      align-items: flex-start;
      border-radius: var(--vox-radius-md);
      padding: var(--vox-space-4);
      font-family: var(--vox-font-family-base);
      font-size: 14px;
      line-height: 1.7;
      color: var(--vox-color-text-2);
    }

    .icon {
      flex: none;
      width: 18px;
      height: 18px;
      margin-top: 2px;
    }

    .content {
      flex: 1 1 auto;
      min-width: 0;
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
    .info .icon {
      color: var(--vox-color-text-1);
    }

    .tip {
      background-color: var(--vox-color-tip-soft);
    }
    .tip .heading {
      color: var(--vox-color-tip-1);
    }
    .tip .icon {
      color: var(--vox-color-tip-1);
    }

    .warning {
      background-color: var(--vox-color-warning-soft);
    }
    .warning .heading {
      color: var(--vox-color-warning-1);
    }
    .warning .icon {
      color: var(--vox-color-warning-1);
    }

    .danger {
      background-color: var(--vox-color-danger-soft);
    }
    .danger .heading {
      color: var(--vox-color-danger-1);
    }
    .danger .icon {
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
        <svg
          class="icon"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          ${ICON_PATHS[VARIANT_ICON[this.variant]]}
        </svg>
        <div class="content">
          <p class="heading">${this.heading ?? DEFAULT_HEADINGS[this.variant]}</p>
          <slot></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-callout': VoxCallout;
  }
}
