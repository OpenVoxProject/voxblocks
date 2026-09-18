import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { live } from 'lit/directives/live.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { VoxFieldElement, fieldStyles } from '../../internal/field.js';

/**
 * Fallback accessible names, keyed by input type. Used only when no `label`
 * is supplied — every control still needs an accessible name (WCAG 4.1.2),
 * and "text input" is wrong for a date or password field.
 */
const TYPE_LABELS: Record<string, string> = {
  text: 'text input',
  email: 'email address',
  number: 'number',
  password: 'password',
  search: 'search',
  tel: 'telephone number',
  url: 'web address',
  date: 'date',
  time: 'time',
  'datetime-local': 'date and time',
  month: 'month',
  week: 'week',
};

/**
 * A single-line input with label and help note. Accepts any native input
 * type; `min`/`max`/`step`/`pattern` make the numeric, date and pattern
 * types enforceable.
 * Participates in native form submission via ElementInternals.
 */
@customElement('vox-input')
export class VoxInput extends VoxFieldElement {
  @property() type = 'text';
  @property() value = '';
  @property() placeholder?: string;
  @property() autocomplete?: string;
  @property({ type: Boolean, reflect: true }) readonly = false;

  /**
   * Bounds and granularity for the numeric and date-like types. Left as
   * strings so date types can take `min="2026-01-01"` and number types
   * `min="0"` through the same attribute.
   */
  @property() min?: string;
  @property() max?: string;
  @property() step?: string;

  /** Constraints for the text-like types. */
  @property() pattern?: string;
  @property() minlength?: string;
  @property() maxlength?: string;

  /** On-screen keyboard hint for touch devices. */
  @property() inputmode?: string;

  static styles = fieldStyles;

  private get accessibleName() {
    return TYPE_LABELS[this.type] ?? `${this.type} input`;
  }

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
          min=${ifDefined(this.min)}
          max=${ifDefined(this.max)}
          step=${ifDefined(this.step)}
          .value=${live(this.value)}
          placeholder=${ifDefined(this.placeholder)}
          autocomplete=${ifDefined(this.autocomplete)}
          pattern=${ifDefined(this.pattern)}
          minlength=${ifDefined(this.minlength)}
          maxlength=${ifDefined(this.maxlength)}
          inputmode=${ifDefined(this.inputmode)}
          ?required=${this.required}
          ?readonly=${this.readonly}
          ?disabled=${this.disabled}
          aria-label=${this.label ? nothing : this.accessibleName}
          aria-describedby=${ifDefined(this.noteId)}
          aria-invalid=${this.invalid ? 'true' : 'false'}
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
