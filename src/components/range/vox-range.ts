import { html, css, nothing } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { live } from 'lit/directives/live.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { VoxFieldElement, fieldStyles } from '../../internal/field.js';

/**
 * A slider for picking a number from a range. Built on a native
 * `<input type="range">` so keyboard interaction, the `slider` role and
 * screen-reader value announcements come from the platform.
 * Participates in native form submission via ElementInternals.
 */
@customElement('vox-range')
export class VoxRange extends VoxFieldElement {
  @property() value = '';
  @property() min = '0';
  @property() max = '100';
  @property() step = '1';

  /** Show the current value beside the label. */
  @property({ type: Boolean, attribute: 'show-value' }) showValue = false;

  /**
   * Unit appended to the displayed value and to the spoken value. Use for
   * things the number alone doesn't convey, e.g. "%" or "MB".
   */
  @property() unit = '';

  @query('input') private inputEl!: HTMLInputElement;

  /** Value to restore on form reset, per the native reset behaviour. */
  private defaultValue = '';

  static styles = [
    fieldStyles,
    css`
      .row {
        display: flex;
        align-items: center;
        gap: var(--vox-space-3);
      }

      .readout {
        flex: none;
        min-width: 3.5ch;
        font-size: 14px;
        font-variant-numeric: tabular-nums;
        color: var(--vox-color-text-2);
        text-align: right;
      }

      input.control {
        appearance: none;
        -webkit-appearance: none;
        padding: 0;
        border: none;
        background: transparent;
        cursor: pointer;
        /* Room for the thumb's focus ring at both ends of the track. */
        height: 24px;
      }

      input.control:focus {
        outline: none;
        border: none;
        box-shadow: none;
      }

      input.control:disabled {
        cursor: not-allowed;
      }

      /*
       * Track and thumb need vendor-prefixed selectors, and a browser drops
       * the whole rule if it doesn't recognise one — so no grouping here.
       */
      input.control::-webkit-slider-runnable-track {
        height: 6px;
        border-radius: var(--vox-radius-full);
        /* 3:1 against the page background, per WCAG 1.4.11. */
        background-color: var(--vox-color-border);
      }

      input.control::-moz-range-track {
        height: 6px;
        border-radius: var(--vox-radius-full);
        background-color: var(--vox-color-border);
      }

      input.control::-webkit-slider-thumb {
        appearance: none;
        -webkit-appearance: none;
        width: 20px;
        height: 20px;
        margin-top: -7px;
        border: 2px solid var(--vox-color-bg);
        border-radius: var(--vox-radius-full);
        background-color: var(--vox-color-brand-1);
        transition: box-shadow var(--vox-transition-fast);
      }

      input.control::-moz-range-thumb {
        width: 20px;
        height: 20px;
        border: 2px solid var(--vox-color-bg);
        border-radius: var(--vox-radius-full);
        background-color: var(--vox-color-brand-1);
        transition: box-shadow var(--vox-transition-fast);
      }

      input.control:focus-visible::-webkit-slider-thumb {
        box-shadow: 0 0 0 3px var(--vox-color-brand-soft);
      }

      input.control:focus-visible::-moz-range-thumb {
        box-shadow: 0 0 0 3px var(--vox-color-brand-soft);
      }

      @media (prefers-reduced-motion: reduce) {
        input.control::-webkit-slider-thumb,
        input.control::-moz-range-thumb {
          transition: none;
        }
      }
    `,
  ];

  connectedCallback() {
    super.connectedCallback();
    // Midpoint is what a native range reports when it has no value attribute.
    if (this.value === '') {
      const midpoint = (Number(this.min) + Number(this.max)) / 2;
      this.value = String(Number.isFinite(midpoint) ? midpoint : this.min);
    }
    this.defaultValue = this.value;
  }

  formResetCallback() {
    this.value = this.defaultValue;
  }

  updated() {
    this.internals.setFormValue(this.value);
    if (this.inputEl) this.syncValidity(this.inputEl);
  }

  focus(options?: FocusOptions) {
    this.inputEl?.focus(options);
  }

  private handleInput(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
  }

  private handleChange() {
    // Native change events don't cross shadow boundaries; re-dispatch.
    this.dispatchEvent(new Event('change', { bubbles: true }));
  }

  render() {
    const display = this.unit ? `${this.value}${this.unit}` : this.value;
    return html`
      <div class="field">
        ${this.renderLabel('range')}
        <div class="row">
          <input
            id="range"
            class="control"
            type="range"
            min=${this.min}
            max=${this.max}
            step=${this.step}
            .value=${live(this.value)}
            ?disabled=${this.disabled}
            aria-label=${this.label ? nothing : 'slider'}
            aria-valuetext=${ifDefined(this.unit ? display : undefined)}
            aria-describedby=${ifDefined(this.noteId)}
            aria-invalid=${this.invalid ? 'true' : 'false'}
            @input=${this.handleInput}
            @change=${this.handleChange}
          />
          ${this.showValue
            ? html`<span class="readout" aria-hidden="true">${display}</span>`
            : nothing}
        </div>
        ${this.renderNote()}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-range': VoxRange;
  }
}
