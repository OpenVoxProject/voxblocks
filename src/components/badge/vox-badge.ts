import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export type BadgeVariant = 'brand' | 'tip' | 'warning' | 'danger' | 'neutral';

/**
 * A small status pill, e.g. for version labels or deprecation notices.
 *
 * @slot - Badge label.
 */
@customElement('vox-badge')
export class VoxBadge extends LitElement {
  @property() variant: BadgeVariant = 'brand';

  static styles = css`
    :host {
      display: inline-block;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      padding: 2px 10px;
      border-radius: var(--vox-radius-full);
      font-family: var(--vox-font-family-base);
      font-size: 12px;
      font-weight: 600;
      line-height: 1.6;
      white-space: nowrap;
    }

    .brand {
      background-color: var(--vox-color-brand-soft);
      color: var(--vox-color-brand-1);
    }

    .tip {
      background-color: var(--vox-color-tip-soft);
      color: var(--vox-color-tip-1);
    }

    .warning {
      background-color: var(--vox-color-warning-soft);
      color: var(--vox-color-warning-1);
    }

    .danger {
      background-color: var(--vox-color-danger-soft);
      color: var(--vox-color-danger-1);
    }

    .neutral {
      background-color: var(--vox-color-bg-soft);
      color: var(--vox-color-text-2);
    }
  `;

  render() {
    return html`<span class="badge ${this.variant}"><slot></slot></span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-badge': VoxBadge;
  }
}
