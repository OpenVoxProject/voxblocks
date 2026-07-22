import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { live } from 'lit/directives/live.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { VoxFieldElement, fieldStyles } from '../../internal/field.js';

/**
 * A single-line text input with label and help note.
 * Participates in native form submission via ElementInternals.
 */
@customElement('vox-input')
export class VoxInput extends VoxFieldElement {
  @property() type = 'text';
  @property() value = '';
  @property() placeholder?: string;
  @property() autocomplete?: string;
  @property({ type: Boolean, reflect: true }) readonly = false;

  static styles = fieldStyles;

  formResetCallback() {
    this.value = '';
  }

  updated() {
    this.internals.setFormValue(this.value);
    const inner = this.renderRoot.querySelector('input');
    if (inner) this.syncValidity(inner);
  }

  focus(options?: FocusOptions) {
    this.renderRoot.querySelector('input')?.focus(options);
  }

  private handleInput(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
  }

  private handleChange() {
    // Native change events don't cross shadow boundaries; re-dispatch.
    this.dispatchEvent(new Event('change', { bubbles: true }));
  }

  render() {
    return html`
      <div class="field">
        ${this.renderLabel('input')}
        <input
          id="input"
          class="control"
          type=${this.type}
          .value=${live(this.value)}
          placeholder=${ifDefined(this.placeholder)}
          autocomplete=${ifDefined(this.autocomplete)}
          ?required=${this.required}
          ?readonly=${this.readonly}
          ?disabled=${this.disabled}
          aria-label=${this.label ? nothing : 'text input'}
          @input=${this.handleInput}
          @change=${this.handleChange}
        />
        ${this.renderNote()}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-input': VoxInput;
  }
}
