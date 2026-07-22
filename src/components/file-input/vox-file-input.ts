import { html, css } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { VoxFieldElement, fieldStyles } from '../../internal/field.js';

/**
 * A file picker: a themed button backed by a native file input,
 * showing the selected file name(s).
 */
@customElement('vox-file-input')
export class VoxFileInput extends VoxFieldElement {
  @property() accept?: string;
  @property({ type: Boolean }) multiple = false;

  /** Label on the picker button. */
  @property({ attribute: 'button-label' }) buttonLabel = 'Choose a file';

  @state() private fileNames: string[] = [];

  @query('input') private inputEl!: HTMLInputElement;

  static styles = [
    fieldStyles,
    css`
      input {
        position: absolute;
        width: 1px;
        height: 1px;
        opacity: 0;
      }

      .picker {
        display: flex;
        align-items: center;
        gap: var(--vox-space-3);
        flex-wrap: wrap;
      }

      .button {
        display: inline-flex;
        align-items: center;
        padding: 0 var(--vox-space-4);
        height: 34px;
        background-color: var(--vox-color-bg-soft);
        border: 1px dashed var(--vox-color-border);
        border-radius: var(--vox-radius-md);
        color: var(--vox-color-text-1);
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition:
          border-color var(--vox-transition-fast),
          color var(--vox-transition-fast);
      }

      .button:hover {
        border-color: var(--vox-color-brand-1);
        color: var(--vox-color-brand-1);
      }

      input:focus-visible ~ .picker .button {
        outline: 2px solid var(--vox-color-brand-1);
        outline-offset: 2px;
      }

      .names {
        font-size: 13px;
        color: var(--vox-color-text-2);
      }
    `,
  ];

  formResetCallback() {
    this.fileNames = [];
    if (this.inputEl) this.inputEl.value = '';
    this.internals.setFormValue(null);
  }

  private handleChange() {
    const files = [...(this.inputEl.files ?? [])];
    this.fileNames = files.map((f) => f.name);

    const data = new FormData();
    for (const file of files) data.append(this.name, file);
    this.internals.setFormValue(files.length > 0 ? data : null);

    this.internals.setValidity(
      this.required && files.length === 0 ? { valueMissing: true } : {},
      'Please select a file.',
      this.inputEl,
    );
    this.dispatchEvent(new Event('change', { bubbles: true }));
  }

  render() {
    return html`
      <div class="field">
        ${this.renderLabel('file')}
        <label>
          <input
            id="file"
            type="file"
            accept=${ifDefined(this.accept)}
            ?multiple=${this.multiple}
            ?disabled=${this.disabled}
            @change=${this.handleChange}
          />
          <span class="picker">
            <span class="button">${this.buttonLabel}</span>
            <span class="names">
              ${this.fileNames.length > 0
                ? this.fileNames.join(', ')
                : 'No file selected'}
            </span>
          </span>
        </label>
        ${this.renderNote()}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-file-input': VoxFileInput;
  }
}
