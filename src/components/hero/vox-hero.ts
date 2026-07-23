import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A page-title header section.
 *
 * @slot - Intro text under the heading.
 * @slot actions - Buttons or CTA links.
 */
@customElement('vox-hero')
export class VoxHero extends LitElement {
  /** Small label displayed above the heading. */
  @property() eyebrow = '';
  @property() heading = '';

  static styles = css`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    .hero {
      padding: var(--vox-space-8) 0;
      border-bottom: 1px solid var(--vox-color-divider);
    }

    .eyebrow {
      margin: 0 0 var(--vox-space-2);
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: var(--vox-color-brand-1);
    }

    .heading {
      margin: 0;
      font-size: 36px;
      font-weight: 700;
      line-height: 1.25;
      color: var(--vox-color-text-1);
    }

    .body {
      max-width: 44rem;
      margin-top: var(--vox-space-3);
      font-size: 17px;
      line-height: 1.7;
      color: var(--vox-color-text-2);
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
      <header class="hero">
        ${this.eyebrow ? html`<p class="eyebrow">${this.eyebrow}</p>` : nothing}
        <h1 class="heading">${this.heading}</h1>
        <div class="body"><slot></slot></div>
        <div class="actions ${this.hasActions ? 'has-content' : ''}">
          <slot name="actions" @slotchange=${this.handleActionsSlotChange}></slot>
        </div>
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-hero': VoxHero;
  }
}
