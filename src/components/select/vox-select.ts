import { html, css, nothing } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { VoxFieldElement, fieldStyles } from '../../internal/field.js';

/**
 * A select input. Options are provided as light-DOM `<option>` /
 * `<optgroup>` children and mirrored into the shadow select:
 *
 * ```html
 * <vox-select label="Distribution">
 *   <option value="deb">Debian</option>
 *   <option value="rpm">RHEL</option>
 * </vox-select>
 * ```
 *
 * Add `multiple` for a list that accepts more than one selection; read the
 * result from `values` rather than `value`.
 */
@customElement('vox-select')
export class VoxSelect extends VoxFieldElement {
  @property() value = '';

  /** Accept more than one selection, rendering as a scrolling list box. */
  @property({ type: Boolean, reflect: true }) multiple = false;

  /** Rows shown when `multiple` is set. */
  @property({ type: Number }) size?: number;

  /** Selected values. Only meaningful when `multiple` is set. */
  @property({ type: Array }) values: string[] = [];

  /** Accessible name for the select when no `label` is set. */
  @property({ attribute: 'fallback-label' }) fallbackLabel = 'options';

  @query('select') private selectEl!: HTMLSelectElement;

  static styles = [
    fieldStyles,
    css`
      select.control {
        appearance: none;
        padding-inline-end: var(--vox-space-8);
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23808080' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        /* background-position has no logical keywords, so the chevron is
           placed physically and flipped to the other edge in RTL. */
        background-position: right var(--vox-space-3) center;
        cursor: pointer;
      }

      :host(:dir(rtl)) select.control {
        background-position: left var(--vox-space-3) center;
      }

      /* A list box has no collapsed affordance, so drop the chevron. */
      :host([multiple]) select.control {
        appearance: none;
        padding-inline-end: var(--vox-space-3);
        background-image: none;
        cursor: default;
      }

      :host([multiple]) select.control option {
        padding: var(--vox-space-1) var(--vox-space-2);
      }
    `,
  ];

  formResetCallback() {
    this.value = '';
    this.values = [];
    this.syncOptions();
  }

  updated() {
    this.internals.setFormValue(this.multiple ? this.formData() : this.value);
    if (this.selectEl) this.syncValidity(this.selectEl);
  }

  focus(options?: FocusOptions) {
    this.selectEl?.focus(options);
  }

  /**
   * A multi-select submits one entry per selection, which only FormData can
   * express. Without a `name` there is nothing to key them on, so submit
   * nothing — matching a native select with no name.
   */
  private formData(): FormData | null {
    if (!this.name) return null;
    const data = new FormData();
    for (const value of this.values) data.append(this.name, value);
    return data;
  }

  private syncOptions() {
    if (!this.selectEl) return;
    const slot = this.renderRoot.querySelector('slot');
    if (!slot) return;
    this.selectEl.replaceChildren(
      ...slot
        .assignedElements()
        .filter((el) => el instanceof HTMLOptionElement || el instanceof HTMLOptGroupElement)
        .map((el) => el.cloneNode(true)),
    );

    if (this.multiple) {
      const wanted = new Set(this.values);
      for (const option of this.selectEl.options) {
        option.selected = wanted.has(option.value);
      }
      this.values = this.selected();
      return;
    }

    if (this.value) {
      this.selectEl.value = this.value;
    }
    this.value = this.selectEl.value;
  }

  private selected(): string[] {
    return [...this.selectEl.selectedOptions].map((option) => option.value);
  }

  private handleChange() {
    if (this.multiple) {
      this.values = this.selected();
      // Keep `value` meaningful as the first selection, as the native API does.
      this.value = this.values[0] ?? '';
    } else {
      this.value = this.selectEl.value;
    }
    this.dispatchEvent(new Event('change', { bubbles: true }));
  }

  render() {
    return html`
      <div class="field">
        ${this.renderLabel('select')}
        <select
          id="select"
          class="control"
          ?multiple=${this.multiple}
          size=${ifDefined(this.multiple ? (this.size ?? 4) : undefined)}
          ?required=${this.required}
          ?disabled=${this.disabled}
          aria-label=${this.label ? nothing : this.fallbackName(this.fallbackLabel)}
          aria-describedby=${ifDefined(this.noteId)}
          aria-invalid=${this.invalid ? 'true' : 'false'}
          @change=${this.handleChange}
        ></select>
        ${this.renderNote()}
      </div>
      <div hidden><slot @slotchange=${this.syncOptions}></slot></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-select': VoxSelect;
  }
}
