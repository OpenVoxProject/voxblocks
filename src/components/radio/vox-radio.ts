import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A single radio option. Must be placed inside a `<vox-radio-group>`,
 * which handles selection state, keyboard navigation, and form value.
 *
 * @slot - Radio label.
 */
@customElement('vox-radio')
export class VoxRadio extends LitElement {
  @property() value = '';
  @property({ type: Boolean, reflect: true }) checked = false;
  @property({ type: Boolean, reflect: true }) disabled = false;

  static styles = css`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    :host([disabled]) {
      opacity: 0.6;
      pointer-events: none;
    }

    .radio {
      display: inline-flex;
      align-items: flex-start;
      gap: var(--vox-space-2);
      cursor: pointer;
      font-size: 14px;
      line-height: 1.5;
      color: var(--vox-color-text-1);
    }

    .radio:focus {
      outline: none;
    }

    .circle {
      flex: none;
      box-sizing: border-box;
      width: 18px;
      height: 18px;
      margin-top: 2px;
      border: 1px solid var(--vox-color-border);
      border-radius: 50%;
      background-color: var(--vox-color-bg);
      transition:
        border-color var(--vox-transition-fast),
        box-shadow var(--vox-transition-fast);
    }

    :host([checked]) .circle {
      border-color: var(--vox-color-brand-3);
      border-width: 5px;
    }

    .radio:focus-visible .circle {
      outline: 2px solid var(--vox-color-brand-1);
      outline-offset: 2px;
    }
  `;

  select() {
    if (this.disabled) return;
    this.dispatchEvent(
      new CustomEvent('vox-radio-select', { bubbles: true, composed: true }),
    );
  }

  private handleKeydown(event: KeyboardEvent) {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      this.select();
    }
  }

  render() {
    return html`
      <span
        class="radio"
        role="radio"
        aria-checked=${this.checked ? 'true' : 'false'}
        aria-disabled=${this.disabled ? 'true' : 'false'}
        tabindex=${this.checked ? '0' : '-1'}
        @click=${this.select}
        @keydown=${this.handleKeydown}
      >
        <span class="circle" aria-hidden="true"></span>
        <span class="text"><slot></slot></span>
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-radio': VoxRadio;
  }
}
