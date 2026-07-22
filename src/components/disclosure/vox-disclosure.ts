import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A single show/hide toggle for supplementary content.
 *
 * @slot - Hidden content.
 * @fires vox-toggle - When the content is shown or hidden.
 */
@customElement('vox-disclosure')
export class VoxDisclosure extends LitElement {
  @property() summary = 'Show details';
  @property({ type: Boolean, reflect: true }) open = false;

  static styles = css`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    .trigger {
      display: inline-flex;
      align-items: center;
      gap: var(--vox-space-2);
      padding: 0;
      background: none;
      border: none;
      color: var(--vox-color-brand-1);
      font-family: inherit;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
    }

    .trigger:hover {
      color: var(--vox-color-brand-2);
      text-decoration: underline;
    }

    .trigger:focus-visible {
      outline: 2px solid var(--vox-color-brand-1);
      outline-offset: 2px;
      border-radius: var(--vox-radius-sm);
    }

    .chevron {
      width: 14px;
      height: 14px;
      transition: transform var(--vox-transition-fast);
    }

    :host([open]) .chevron {
      transform: rotate(90deg);
    }

    .panel {
      margin-top: var(--vox-space-3);
      font-size: 14px;
      line-height: 1.7;
      color: var(--vox-color-text-2);
    }

    .panel[hidden] {
      display: none;
    }
  `;

  toggle() {
    this.open = !this.open;
    this.dispatchEvent(
      new CustomEvent('vox-toggle', { bubbles: true, composed: true }),
    );
  }

  render() {
    return html`
      <button
        class="trigger"
        aria-expanded=${this.open ? 'true' : 'false'}
        @click=${this.toggle}
      >
        <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="m9 6 6 6-6 6" />
        </svg>
        ${this.summary}
      </button>
      <div class="panel" ?hidden=${!this.open}>
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-disclosure': VoxDisclosure;
  }
}
