import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A placeholder for views with nothing to show yet.
 *
 * @slot icon - Icon or emoji above the heading.
 * @slot - Explanatory text.
 * @slot actions - Buttons or links suggesting a next step.
 */
@customElement('vox-empty-state')
export class VoxEmptyState extends LitElement {
  @property() heading = '';

  static styles = css`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    .empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: var(--vox-space-8);
      border: 1px dashed var(--vox-color-border);
      border-radius: var(--vox-radius-lg);
    }

    .icon {
      font-size: 32px;
      margin-bottom: var(--vox-space-3);
    }

    .heading {
      margin: 0;
      font-size: 18px;
      font-weight: 600;
      color: var(--vox-color-text-1);
    }

    .body {
      max-width: 32rem;
      margin-top: var(--vox-space-2);
      font-size: 14px;
      line-height: 1.6;
      color: var(--vox-color-text-2);
    }

    .actions {
      display: flex;
      gap: var(--vox-space-3);
      flex-wrap: wrap;
      justify-content: center;
      margin-top: var(--vox-space-4);
    }
  `;

  render() {
    return html`
      <div class="empty">
        <div class="icon"><slot name="icon"></slot></div>
        <h3 class="heading">${this.heading}</h3>
        <div class="body"><slot></slot></div>
        <div class="actions"><slot name="actions"></slot></div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-empty-state': VoxEmptyState;
  }
}
