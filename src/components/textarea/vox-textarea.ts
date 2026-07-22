import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { live } from 'lit/directives/live.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { VoxFieldElement, fieldStyles } from '../../internal/field.js';

/**
 * A multi-line text input with label and help note.
 */
@customElement('vox-textarea')
export class VoxTextarea extends VoxFieldElement {
  @property() value = '';
  @property() placeholder?: string;
  @property({ type: Number }) rows = 4;
  @property({ type: Boolean, reflect: true }) readonly = false;

  static styles = [
    fieldStyles,
    css`
      textarea.control {
        resize: vertical;
        min-height: 4em;
      }
    `,
  ];

  formResetCallback() {
    this.value = '';
  }

  updated() {
    this.internals.setFormValue(this.value);
    const inner = this.renderRoot.querySelector('textarea');
    if (inner) this.syncValidity(inner);
  }

  focus(options?: FocusOptions) {
    this.renderRoot.querySelector('textarea')?.focus(options);
  }

  private handleInput(event: Event) {
    this.value = (event.target as HTMLTextAreaElement).value;
  }

  private handleChange() {
    this.dispatchEvent(new Event('change', { bubbles: true }));
  }

  render() {
    return html`
      <div class="field">
        ${this.renderLabel('textarea')}
        <textarea
          id="textarea"
          class="control"
          rows=${this.rows}
          .value=${live(this.value)}
          placeholder=${ifDefined(this.placeholder)}
          ?required=${this.required}
          ?readonly=${this.readonly}
          ?disabled=${this.disabled}
          @input=${this.handleInput}
          @change=${this.handleChange}
        ></textarea>
        ${this.renderNote()}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-textarea': VoxTextarea;
  }
}
