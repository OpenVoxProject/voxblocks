import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { VoxFieldElement, checkableStyles } from '../../internal/field.js';

/**
 * A toggle switch for on/off settings.
 *
 * @slot - Switch label.
 */
@customElement('vox-switch')
export class VoxSwitch extends VoxFieldElement {
  @property({ type: Boolean, reflect: true }) checked = false;
  @property() value = 'on';

  static styles = [
    checkableStyles,
    css`
      .track {
        flex: none;
        position: relative;
        width: 36px;
        height: 20px;
        margin-top: 1px;
        border-radius: var(--vox-radius-full);
        background-color: var(--vox-color-border);
        transition: background-color var(--vox-transition-fast);
      }

      .track::after {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: var(--vox-color-bg);
        transition: transform var(--vox-transition-fast);
      }

      input:checked + .track {
        background-color: var(--vox-color-brand-3);
      }

      input:checked + .track::after {
        transform: translateX(16px);
      }

      input:focus-visible + .track {
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
          role="switch"
          .checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.handleChange}
        />
        <span class="track" aria-hidden="true"></span>
        <span class="text"><slot></slot></span>
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-switch': VoxSwitch;
  }
}
