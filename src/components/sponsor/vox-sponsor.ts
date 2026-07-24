import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A group of sponsors under a shared tier, for sponsorship/funding pages.
 *
 * @slot description - Optional text under the heading, e.g. what the tier means.
 * @slot - `<vox-sponsor>` elements.
 */
@customElement('vox-sponsor-tier')
export class VoxSponsorTier extends LitElement {
  @property() heading = '';

  static styles = css`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    .heading {
      margin: 0;
      font-size: 22px;
      font-weight: 700;
      line-height: 1.3;
      color: var(--vox-color-text-1);
    }

    .description {
      margin: var(--vox-space-2) 0 0;
      font-size: 15px;
      line-height: 1.7;
      color: var(--vox-color-text-2);
    }

    .description:not(.has-content) {
      display: none;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(220px, 100%), 1fr));
      gap: var(--vox-space-4);
      margin-top: var(--vox-space-6);
    }
  `;

  private hasDescription = false;

  private handleDescriptionSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    this.hasDescription = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  }

  render() {
    return html`
      <h2 class="heading">${this.heading}</h2>
      <div class="description ${this.hasDescription ? 'has-content' : ''}">
        <slot
          name="description"
          @slotchange=${this.handleDescriptionSlotChange}
        ></slot>
      </div>
      <div class="grid">
        <slot></slot>
      </div>
    `;
  }
}

/**
 * One sponsor card in a `<vox-sponsor-tier>`, linking to the sponsor's site.
 *
 * @slot - Optional description, e.g. contribution type and amount.
 */
@customElement('vox-sponsor')
export class VoxSponsor extends LitElement {
  @property() name = '';
  @property() href?: string;
  @property() logo?: string;
  @property() target?: string;

  static styles = css`
    :host {
      display: block;
    }

    .sponsor {
      display: flex;
      flex-direction: column;
      height: 100%;
      box-sizing: border-box;
      gap: var(--vox-space-3);
      padding: var(--vox-space-4);
      background-color: var(--vox-color-bg-soft);
      border: 1px solid var(--vox-color-bg-soft);
      border-radius: var(--vox-radius-lg);
      font-family: var(--vox-font-family-base);
      text-decoration: none;
      transition: border-color var(--vox-transition-base);
    }

    a.sponsor:hover,
    a.sponsor:focus-visible {
      border-color: var(--vox-color-brand-1);
    }

    a.sponsor:focus-visible {
      outline: 2px solid var(--vox-color-brand-1);
      outline-offset: 2px;
    }

    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 64px;
      background-color: var(--vox-color-bg-elv);
      border-radius: var(--vox-radius-md);
    }

    .logo:not(.has-logo) {
      display: none;
    }

    .logo img {
      max-width: 80%;
      max-height: 40px;
      object-fit: contain;
    }

    .name {
      font-size: 15px;
      font-weight: 600;
      line-height: 1.4;
      color: var(--vox-color-text-1);
    }

    .body {
      font-size: 13px;
      line-height: 1.6;
      color: var(--vox-color-text-2);
    }

    .body:not(.has-content) {
      display: none;
    }
  `;

  private hasBody = false;

  private handleBodySlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    this.hasBody = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  }

  render() {
    const inner = html`
      <div class="logo ${this.logo ? 'has-logo' : ''}">
        ${this.logo
          ? html`<img src=${this.logo} alt=${this.name} />`
          : nothing}
      </div>
      <span class="name">${this.name}</span>
      <div class="body ${this.hasBody ? 'has-content' : ''}">
        <slot @slotchange=${this.handleBodySlotChange}></slot>
      </div>
    `;

    return this.href !== undefined
      ? html`<a
          class="sponsor"
          href=${this.href}
          target=${this.target ?? nothing}
          >${inner}</a
        >`
      : html`<div class="sponsor">${inner}</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-sponsor-tier': VoxSponsorTier;
    'vox-sponsor': VoxSponsor;
  }
}
