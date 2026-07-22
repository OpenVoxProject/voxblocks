import { html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
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
 */
@customElement('vox-select')
export class VoxSelect extends VoxFieldElement {
  @property() value = '';

  @query('select') private selectEl!: HTMLSelectElement;

  static styles = [
    fieldStyles,
    css`
      select.control {
        appearance: none;
        padding-right: var(--vox-space-8);
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23808080' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right var(--vox-space-3) center;
        cursor: pointer;
      }
    `,
  ];

  formResetCallback() {
    this.value = '';
    this.syncOptions();
  }

  updated() {
    this.internals.setFormValue(this.value);
    if (this.selectEl) this.syncValidity(this.selectEl);
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
    if (this.value) {
      this.selectEl.value = this.value;
    }
    this.value = this.selectEl.value;
  }

  private handleChange() {
    this.value = this.selectEl.value;
    this.dispatchEvent(new Event('change', { bubbles: true }));
  }

  render() {
    return html`
      <div class="field">
        ${this.renderLabel('select')}
        <select
          id="select"
          class="control"
          ?required=${this.required}
          ?disabled=${this.disabled}
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
