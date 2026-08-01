import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A centered, full-width call-to-action panel: heading, supporting copy,
 * and a row of buttons — the closing pitch at the bottom of a page.
 *
 * @slot - Supporting copy under the heading.
 * @slot actions - Buttons or CTA links.
 */
@customElement('vox-cta-band')
export class VoxCtaBand extends LitElement {
  @property() heading = '';

  static styles = css`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    .band {
      text-align: center;
      padding: var(--vox-space-8);
      background-color: var(--vox-color-bg-soft);
      border-radius: var(--vox-radius-lg);
    }

    .heading {
      margin: 0;
      font-family: var(--vox-font-family-display);
      font-size: 28px;
      font-weight: 600;
      line-height: 1.3;
      color: var(--vox-color-text-1);
    }

    .body {
      max-width: 36rem;
      margin: var(--vox-space-3) auto 0;
      font-size: 16px;
      line-height: 1.6;
      color: var(--vox-color-text-2);
    }

    .body:not(.has-content) {
      display: none;
    }

    .body ::slotted(a) {
      color: var(--vox-color-brand-1);
      text-decoration: underline;
    }

    .body ::slotted(a:hover) {
      color: var(--vox-color-brand-2);
    }

    .actions {
      display: flex;
      gap: var(--vox-space-3);
      justify-content: center;
      flex-wrap: wrap;
      margin-top: var(--vox-space-6);
    }

    .actions:not(.has-content) {
      display: none;
    }
  `;

  private hasBody = false;
  private hasActions = false;

  private handleBodySlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    this.hasBody = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  }

  private handleActionsSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    this.hasActions = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  }

  render() {
    return html`
      <div class="band">
        ${this.heading ? html`<h2 class="heading">${this.heading}</h2>` : nothing}
        <div class="body ${this.hasBody ? 'has-content' : ''}">
          <slot @slotchange=${this.handleBodySlotChange}></slot>
        </div>
        <div class="actions ${this.hasActions ? 'has-content' : ''}">
          <slot name="actions" @slotchange=${this.handleActionsSlotChange}></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-cta-band': VoxCtaBand;
  }
}
