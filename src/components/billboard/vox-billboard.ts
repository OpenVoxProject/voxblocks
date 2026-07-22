import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A split media-and-content section for landing pages.
 *
 * @slot media - Image or other media shown beside the content.
 * @slot - Body content.
 * @slot actions - Buttons or CTA links below the body.
 */
@customElement('vox-billboard')
export class VoxBillboard extends LitElement {
  @property() heading = '';

  /** Put the media on the right instead of the left. */
  @property({ type: Boolean, reflect: true }) reverse = false;

  static styles = css`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    .billboard {
      display: flex;
      gap: var(--vox-space-8);
      align-items: center;
      flex-wrap: wrap;
      padding: var(--vox-space-8);
      background-color: var(--vox-color-bg-soft);
      border-radius: var(--vox-radius-lg);
    }

    :host([reverse]) .billboard {
      flex-direction: row-reverse;
    }

    .media {
      flex: 1 1 280px;
      min-width: 0;
    }

    .media ::slotted(img) {
      display: block;
      max-width: 100%;
      border-radius: var(--vox-radius-md);
    }

    .content {
      flex: 1 1 320px;
      min-width: 0;
    }

    .heading {
      margin: 0 0 var(--vox-space-3);
      font-size: 28px;
      font-weight: 700;
      line-height: 1.3;
      color: var(--vox-color-text-1);
    }

    .body {
      font-size: 16px;
      line-height: 1.7;
      color: var(--vox-color-text-2);
    }

    .actions {
      display: flex;
      gap: var(--vox-space-3);
      flex-wrap: wrap;
      margin-top: var(--vox-space-6);
    }

    .actions:not(.has-content) {
      display: none;
    }
  `;

  private hasActions = false;

  private handleActionsSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    this.hasActions = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  }

  render() {
    return html`
      <div class="billboard">
        <div class="media"><slot name="media"></slot></div>
        <div class="content">
          <h2 class="heading">${this.heading}</h2>
          <div class="body"><slot></slot></div>
          <div class="actions ${this.hasActions ? 'has-content' : ''}">
            <slot name="actions" @slotchange=${this.handleActionsSlotChange}></slot>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-billboard': VoxBillboard;
  }
}
