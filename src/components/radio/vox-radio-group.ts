import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { VoxFieldElement, fieldStyles } from '../../internal/field.js';
import type { VoxRadio } from './vox-radio.js';

/**
 * Groups `<vox-radio>` options: manages selection, arrow-key navigation,
 * and submits the selected value with the surrounding form.
 *
 * @slot - `<vox-radio>` elements.
 */
@customElement('vox-radio-group')
export class VoxRadioGroup extends VoxFieldElement {
  @property() value = '';

  static styles = [
    fieldStyles,
    css`
      .options {
        display: flex;
        flex-direction: column;
        gap: var(--vox-space-2);
        margin-top: var(--vox-space-1);
      }
    `,
  ];

  private get radios(): VoxRadio[] {
    return [...this.querySelectorAll<VoxRadio>('vox-radio')];
  }

  formResetCallback() {
    this.value = '';
  }

  updated() {
    this.internals.setFormValue(this.value || null);
    this.internals.setValidity(
      this.required && !this.value ? { valueMissing: true } : {},
      'Please select an option.',
      this,
    );
    this.syncRadios();
  }

  private syncRadios() {
    const radios = this.radios;
    const anyChecked = radios.some((r) => r.value === this.value && this.value !== '');
    radios.forEach((radio, index) => {
      radio.checked = this.value !== '' && radio.value === this.value;
      // Roving tabindex: the checked radio is tabbable, else the first one.
      const tabbable = anyChecked ? radio.checked : index === 0;
      radio.shadowRoot
        ?.querySelector('.radio')
        ?.setAttribute('tabindex', tabbable ? '0' : '-1');
    });
  }

  private handleSelect(event: Event) {
    const radio = event.target as VoxRadio;
    if (!(radio instanceof HTMLElement) || radio.tagName !== 'VOX-RADIO') return;
    event.stopPropagation();
    if (this.value !== radio.value) {
      this.value = radio.value;
      this.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }

  private handleKeydown(event: KeyboardEvent) {
    const keys: Record<string, number> = {
      ArrowDown: 1,
      ArrowRight: 1,
      ArrowUp: -1,
      ArrowLeft: -1,
    };
    const delta = keys[event.key];
    if (!delta) return;
    event.preventDefault();

    const radios = this.radios.filter((r) => !r.disabled);
    if (radios.length === 0) return;
    const currentIndex = radios.findIndex((r) => r.checked);
    const nextIndex =
      (Math.max(currentIndex, 0) + delta + radios.length) % radios.length;
    const next = radios[nextIndex];
    next.select();
    next.shadowRoot?.querySelector<HTMLElement>('.radio')?.focus();
  }

  render() {
    return html`
      <div class="field" role="radiogroup" aria-label=${this.label}>
        ${this.label
          ? html`<span class="label">
              ${this.label}${this.required
                ? html`<span class="required-mark" aria-hidden="true"> *</span>`
                : ''}
            </span>`
          : ''}
        <div
          class="options"
          @vox-radio-select=${this.handleSelect}
          @keydown=${this.handleKeydown}
        >
          <slot @slotchange=${this.syncRadios}></slot>
        </div>
        ${this.renderNote()}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-radio-group': VoxRadioGroup;
  }
}
