import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A large statistic with a label, e.g. module counts or contributors.
 *
 * @slot - Optional supporting description.
 */
@customElement('vox-stat')
export class VoxStat extends LitElement {
  @property() value = '';
  @property() label = '';

  static styles = css`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    .value {
      font-size: 40px;
      font-weight: 700;
      line-height: 1.1;
      color: var(--vox-color-brand-1);
    }

    .label {
      margin-top: var(--vox-space-1);
      font-size: 14px;
      font-weight: 600;
      color: var(--vox-color-text-1);
    }

    .description {
      margin-top: var(--vox-space-1);
      font-size: 13px;
      line-height: 1.6;
      color: var(--vox-color-text-2);
    }
  `;

  render() {
    return html`
      <div class="value">${this.value}</div>
      <div class="label">${this.label}</div>
      <div class="description"><slot></slot></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-stat': VoxStat;
  }
}
