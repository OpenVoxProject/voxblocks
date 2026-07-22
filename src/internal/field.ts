import { LitElement, html, css, nothing } from 'lit';
import { property } from 'lit/decorators.js';

/**
 * Shared base for form-associated VoxBlocks controls. Uses ElementInternals
 * so controls participate in native <form> submission and validation.
 */
export class VoxFieldElement extends LitElement {
  static formAssociated = true;

  protected internals: ElementInternals;

  @property() name = '';
  @property() label = '';
  @property() note = '';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) required = false;

  constructor() {
    super();
    this.internals = this.attachInternals();
  }

  get form(): HTMLFormElement | null {
    return this.internals.form;
  }

  get validity(): ValidityState {
    return this.internals.validity;
  }

  get validationMessage(): string {
    return this.internals.validationMessage;
  }

  checkValidity(): boolean {
    return this.internals.checkValidity();
  }

  reportValidity(): boolean {
    return this.internals.reportValidity();
  }

  /** Mirror a native inner control's validity onto the host element. */
  protected syncValidity(
    inner: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
  ) {
    this.internals.setValidity(inner.validity, inner.validationMessage, inner);
  }

  protected renderLabel(forId: string) {
    if (!this.label) return nothing;
    return html`
      <label class="label" for=${forId}>
        ${this.label}${this.required
          ? html`<span class="required-mark" aria-hidden="true"> *</span>`
          : nothing}
      </label>
    `;
  }

  protected renderNote() {
    return this.note ? html`<p class="note">${this.note}</p>` : nothing;
  }
}

export const fieldStyles = css`
  :host {
    display: block;
    font-family: var(--vox-font-family-base);
  }

  :host([disabled]) {
    opacity: 0.6;
    pointer-events: none;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: var(--vox-space-1);
  }

  .label {
    font-size: 14px;
    font-weight: 600;
    color: var(--vox-color-text-1);
  }

  .required-mark {
    color: var(--vox-color-danger-1);
  }

  .note {
    margin: 0;
    font-size: 12px;
    color: var(--vox-color-text-2);
  }

  .control {
    box-sizing: border-box;
    width: 100%;
    background-color: var(--vox-color-bg);
    border: 1px solid var(--vox-color-border);
    border-radius: var(--vox-radius-md);
    color: var(--vox-color-text-1);
    font-family: inherit;
    font-size: 14px;
    line-height: 1.5;
    padding: var(--vox-space-2) var(--vox-space-3);
    transition:
      border-color var(--vox-transition-fast),
      box-shadow var(--vox-transition-fast);
  }

  .control:focus {
    outline: none;
    border-color: var(--vox-color-brand-1);
    box-shadow: 0 0 0 3px var(--vox-color-brand-soft);
  }

  /* Corner flattening when placed inside a <vox-input-group>. */
  :host([data-vox-group]) .control {
    border-radius: 0;
  }

  :host([data-vox-group='start']) .control {
    border-radius: var(--vox-radius-md) 0 0 var(--vox-radius-md);
  }

  :host([data-vox-group='end']) .control {
    border-radius: 0 var(--vox-radius-md) var(--vox-radius-md) 0;
  }
`;

/** Styles shared by the checkbox-like controls (checkbox, radio, switch). */
export const checkableStyles = css`
  :host {
    display: block;
    font-family: var(--vox-font-family-base);
  }

  :host([disabled]) {
    opacity: 0.6;
    pointer-events: none;
  }

  .check {
    display: inline-flex;
    align-items: flex-start;
    gap: var(--vox-space-2);
    cursor: pointer;
    font-size: 14px;
    line-height: 1.5;
    color: var(--vox-color-text-1);
  }

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
    margin: 0;
  }
`;
