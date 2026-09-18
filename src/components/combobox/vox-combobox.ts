import { html, css, nothing, type PropertyValues } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { live } from 'lit/directives/live.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { VoxFieldElement, fieldStyles } from '../../internal/field.js';

interface ComboboxOption {
  value: string;
  label: string;
  disabled: boolean;
}

/**
 * A text input that filters a list of options as you type. Options are
 * provided as light-DOM `<option>` children, the same as `<vox-select>`:
 *
 * ```html
 * <vox-combobox label="Module">
 *   <option value="nginx">puppet-nginx</option>
 *   <option value="apache">puppet-apache</option>
 * </vox-combobox>
 * ```
 *
 * Implements the ARIA 1.2 combobox pattern: focus stays on the input and the
 * active option is tracked with `aria-activedescendant`.
 * Participates in native form submission via ElementInternals.
 */
@customElement('vox-combobox')
export class VoxCombobox extends VoxFieldElement {
  /** The selected option's value. */
  @property() value = '';

  @property() placeholder?: string;

  /** Accept text that doesn't match any option. */
  @property({ type: Boolean, attribute: 'allow-custom' }) allowCustom = false;

  /** Message shown when the filter matches nothing. */
  @property({ attribute: 'empty-text' }) emptyText = 'No matches';

  /** Text currently in the input. Drives filtering. */
  @state() private query = '';
  @state() private open = false;
  @state() private activeIndex = -1;
  @state() private options: ComboboxOption[] = [];

  @query('input') private inputEl!: HTMLInputElement;
  @query('.listbox') private listboxEl!: HTMLElement;

  static styles = [
    fieldStyles,
    css`
      /*
       * The popup anchors to this shell, not to .field: an absolutely
       * positioned child of a flex container takes its static position from
       * the container's content-box origin, which would put it over the label.
       */
      .combo {
        position: relative;
      }

      .control {
        padding-right: var(--vox-space-8);
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23808080' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right var(--vox-space-3) center;
      }

      .listbox {
        position: absolute;
        z-index: 20;
        top: calc(100% + var(--vox-space-1));
        left: 0;
        right: 0;
        margin: 0;
        padding: var(--vox-space-1);
        max-height: 15rem;
        overflow-y: auto;
        list-style: none;
        background-color: var(--vox-color-bg-elv);
        border: 1px solid var(--vox-color-border);
        border-radius: var(--vox-radius-md);
        box-shadow: 0 4px 12px rgb(0 0 0 / 12%);
      }

      .option {
        padding: var(--vox-space-2) var(--vox-space-3);
        border-radius: var(--vox-radius-sm);
        font-size: 14px;
        line-height: 1.5;
        color: var(--vox-color-text-1);
        cursor: pointer;
      }

      /*
       * Focus stays on the input, so the active option is styled rather than
       * focused. Colour alone can't carry it (WCAG 1.4.1) — the selected
       * option also gets a check mark.
       */
      .option[data-active] {
        background-color: var(--vox-color-brand-soft);
        outline: 2px solid var(--vox-color-brand-1);
        outline-offset: -2px;
      }

      .option[aria-selected='true'] {
        font-weight: 600;
      }

      .option[aria-selected='true']::after {
        content: ' ✓';
        color: var(--vox-color-brand-1);
      }

      .option[aria-disabled='true'] {
        color: var(--vox-color-text-3);
        cursor: not-allowed;
      }

      .empty {
        padding: var(--vox-space-2) var(--vox-space-3);
        font-size: 14px;
        color: var(--vox-color-text-2);
      }

      /* Announced, never shown. */
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip-path: inset(50%);
        white-space: nowrap;
      }
    `,
  ];

  private get filtered(): ComboboxOption[] {
    const needle = this.query.trim().toLowerCase();
    // An exact match means the user picked it; show the whole list, not one row.
    if (!needle || needle === this.selectedLabel.toLowerCase()) return this.options;
    return this.options.filter((option) => option.label.toLowerCase().includes(needle));
  }

  private get selectedLabel(): string {
    return this.options.find((option) => option.value === this.value)?.label ?? '';
  }

  willUpdate(changed: PropertyValues<this>) {
    // Reflect a programmatic value change in the input — but never while the
    // user is typing into it.
    if (changed.has('value') && this.shadowRoot?.activeElement === null) {
      this.query = this.selectedLabel;
    }
  }

  formResetCallback() {
    this.value = '';
    this.query = '';
    this.close();
  }

  updated() {
    this.internals.setFormValue(this.value || null);
    this.internals.setValidity(
      this.required && !this.value ? { valueMissing: true } : {},
      'Please select an option.',
      this.inputEl,
    );
  }

  focus(options?: FocusOptions) {
    this.inputEl?.focus(options);
  }

  private readOptions() {
    this.options = [...this.querySelectorAll('option')].map((option) => ({
      value: option.value,
      label: option.textContent?.trim() ?? '',
      disabled: option.disabled,
    }));
    // A value set before the options arrived has a label only now.
    if (this.value && !this.query) this.query = this.selectedLabel;
  }

  private openList() {
    if (this.open || this.disabled) return;
    this.open = true;
    const selected = this.filtered.findIndex((option) => option.value === this.value);
    this.activeIndex = selected;
  }

  private close() {
    this.open = false;
    this.activeIndex = -1;
  }

  private select(option: ComboboxOption) {
    if (option.disabled) return;
    this.value = option.value;
    this.query = option.label;
    this.close();
    this.dispatchEvent(new Event('change', { bubbles: true }));
  }

  private moveActive(delta: number) {
    const matches = this.filtered;
    if (matches.length === 0) return;
    const selectable = matches.filter((option) => !option.disabled);
    if (selectable.length === 0) return;

    let next = this.activeIndex;
    // Step over disabled rows rather than landing on one.
    for (let i = 0; i < matches.length; i++) {
      next = (next + delta + matches.length) % matches.length;
      if (!matches[next].disabled) break;
    }
    this.activeIndex = next;
    this.scrollActiveIntoView();
  }

  private scrollActiveIntoView() {
    this.updateComplete.then(() => {
      this.listboxEl
        ?.querySelector('[data-active]')
        ?.scrollIntoView({ block: 'nearest' });
    });
  }

  private handleInput(event: Event) {
    this.query = (event.target as HTMLInputElement).value;
    this.openList();
    this.activeIndex = -1;
    // In strict mode the committed selection stands until the user picks
    // another or leaves the field — a half-typed query is not a value.
    if (this.allowCustom) this.value = this.query;
  }

  private handleKeydown(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (!this.open) {
          this.openList();
          if (this.activeIndex === -1) this.moveActive(1);
        } else {
          this.moveActive(1);
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (!this.open) {
          this.openList();
          this.activeIndex = this.filtered.length;
        }
        this.moveActive(-1);
        break;
      case 'Home':
        if (!this.open) return;
        event.preventDefault();
        this.activeIndex = -1;
        this.moveActive(1);
        break;
      case 'End':
        if (!this.open) return;
        event.preventDefault();
        this.activeIndex = this.filtered.length;
        this.moveActive(-1);
        break;
      case 'Enter': {
        if (!this.open) return;
        const active = this.filtered[this.activeIndex];
        if (active) {
          // Only swallow Enter when it picks something, so a plain Enter
          // still submits the surrounding form.
          event.preventDefault();
          this.select(active);
        }
        break;
      }
      case 'Escape':
        event.preventDefault();
        if (this.open) {
          this.close();
        } else if (this.value || this.query) {
          this.query = '';
          this.value = '';
          this.dispatchEvent(new Event('change', { bubbles: true }));
        }
        break;
      case 'Tab':
        this.close();
        break;
    }
  }

  private handleBlur() {
    this.close();
    if (this.allowCustom) return;
    // An emptied field clears the selection; anything else that didn't
    // resolve to an option reverts to the last committed one.
    if (this.query === '') {
      if (this.value) {
        this.value = '';
        this.dispatchEvent(new Event('change', { bubbles: true }));
      }
      return;
    }
    this.query = this.selectedLabel;
  }

  private optionId(index: number) {
    return `option-${index}`;
  }

  render() {
    const matches = this.filtered;
    const activeId =
      this.open && this.activeIndex >= 0 ? this.optionId(this.activeIndex) : undefined;

    return html`
      <div class="field">
        ${this.renderLabel('combobox')}
        <div class="combo">
          <input
            id="combobox"
            class="control"
            type="text"
            role="combobox"
            .value=${live(this.query)}
            placeholder=${ifDefined(this.placeholder)}
            autocomplete="off"
            aria-expanded=${this.open ? 'true' : 'false'}
            aria-controls="listbox"
            aria-autocomplete="list"
            aria-activedescendant=${ifDefined(activeId)}
            aria-label=${this.label ? nothing : 'combobox'}
            ?required=${this.required}
            ?disabled=${this.disabled}
            @input=${this.handleInput}
            @keydown=${this.handleKeydown}
            @blur=${this.handleBlur}
            @mousedown=${this.openList}
          />
          <ul
            class="listbox"
            id="listbox"
            role="listbox"
            aria-label=${this.label || 'options'}
            ?hidden=${!this.open}
          >
            ${matches.length === 0
              ? html`<li class="empty" role="presentation">${this.emptyText}</li>`
              : matches.map(
                  (option, index) => html`
                    <li
                      id=${this.optionId(index)}
                      class=${classMap({ option: true })}
                      role="option"
                      aria-selected=${option.value === this.value ? 'true' : 'false'}
                      aria-disabled=${option.disabled ? 'true' : 'false'}
                      ?data-active=${index === this.activeIndex}
                      @mousedown=${(event: Event) => {
                        // Beat the input's blur so the click still registers.
                        event.preventDefault();
                        this.select(option);
                      }}
                    >
                      ${option.label}
                    </li>
                  `,
                )}
          </ul>
        </div>
        ${this.renderNote()}
        <span class="sr-only" role="status" aria-live="polite">
          ${this.open
            ? `${matches.length} ${matches.length === 1 ? 'option' : 'options'} available`
            : ''}
        </span>
      </div>
      <div hidden><slot @slotchange=${this.readOptions}></slot></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-combobox': VoxCombobox;
  }
}
