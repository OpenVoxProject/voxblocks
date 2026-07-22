import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { VoxFieldElement, checkableStyles } from '../../internal/field.js';

/**
 * A checkbox with a custom visual that follows the VoxBlocks theme.
 *
 * @slot - Checkbox label.
 */
@customElement('vox-checkbox')
export class VoxCheckbox extends VoxFieldElement {
  @property({ type: Boolean, reflect: true }) checked = false;
  @property() value = 'on';

  static styles = [
    checkableStyles,
    css`
      .box {
        flex: none;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        height: 18px;
        margin-top: 2px;
        border: 1px solid var(--vox-color-border);
        border-radius: var(--vox-radius-sm);
        background-color: var(--vox-color-bg);
        color: var(--vox-color-text-inverse);
        transition:
          background-color var(--vox-transition-fast),
          border-color var(--vox-transition-fast);
      }

      .box svg {
        width: 12px;
        height: 12px;
        opacity: 0;
      }

      input:checked + .box {
        background-color: var(--vox-color-brand-3);
        border-color: var(--vox-color-brand-3);
      }

      input:checked + .box svg {
        opacity: 1;
      }

      input:focus-visible + .box {
        outline: 2px solid var(--vox-color-brand-1);
        outline-offset: 2px;
      }
    `,
  ];

  formResetCallback() {
    this.checked = false;
  }

  updated() {
    this.internals.setFormValue(this.checked ? this.value : null);
    this.internals.setValidity(
      this.required && !this.checked
        ? { valueMissing: true }
        : {},
      'Please check this box.',
      this.renderRoot.querySelector('input') ?? undefined,
    );
  }

  private handleChange(event: Event) {
    this.checked = (event.target as HTMLInputElement).checked;
    this.dispatchEvent(new Event('change', { bubbles: true }));
  }

  render() {
    return html`
      <label class="check">
        <input
          type="checkbox"
          .checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.handleChange}
        />
        <span class="box" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
            <path d="m4 12 5 5L20 6" />
          </svg>
        </span>
        <span class="text"><slot></slot></span>
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-checkbox': VoxCheckbox;
  }
}
