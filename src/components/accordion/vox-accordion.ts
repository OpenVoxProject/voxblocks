import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A stack of expandable panels.
 *
 * @slot - `<vox-accordion-item>` elements.
 */
@customElement('vox-accordion')
export class VoxAccordion extends LitElement {
  /** Allow only one panel open at a time. */
  @property({ type: Boolean }) single = false;

  static styles = css`
    :host {
      display: block;
      border: 1px solid var(--vox-color-divider);
      border-radius: var(--vox-radius-md);
      overflow: hidden;
    }

    ::slotted(vox-accordion-item:not(:first-child)) {
      border-top: 1px solid var(--vox-color-divider);
    }
  `;

  private handleToggle(event: Event) {
    if (!this.single) return;
    const opened = event.target as VoxAccordionItem;
    if (!opened.open) return;
    this.querySelectorAll<VoxAccordionItem>('vox-accordion-item').forEach(
      (item) => {
        if (item !== opened) item.open = false;
      },
    );
  }

  render() {
    return html`<slot @vox-toggle=${this.handleToggle}></slot>`;
  }
}

/**
 * One panel of a `<vox-accordion>`.
 *
 * @slot - Panel content.
 * @fires vox-toggle - When the panel opens or closes.
 */
@customElement('vox-accordion-item')
export class VoxAccordionItem extends LitElement {
  @property() heading = '';
  @property({ type: Boolean, reflect: true }) open = false;

  static styles = css`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    .trigger {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--vox-space-3);
      width: 100%;
      padding: var(--vox-space-4);
      background: none;
      border: none;
      color: var(--vox-color-text-1);
      font-family: inherit;
      font-size: 15px;
      font-weight: 600;
      text-align: left;
      cursor: pointer;
    }

    .trigger:hover {
      color: var(--vox-color-brand-1);
    }

    .trigger:focus-visible {
      outline: 2px solid var(--vox-color-brand-1);
      outline-offset: -2px;
    }

    .chevron {
      flex: none;
      width: 16px;
      height: 16px;
      transition: transform var(--vox-transition-fast);
    }

    :host([open]) .chevron {
      transform: rotate(180deg);
    }

    .panel {
      padding: 0 var(--vox-space-4) var(--vox-space-4);
      font-size: 14px;
      line-height: 1.7;
      color: var(--vox-color-text-2);
    }

    .panel[hidden] {
      display: none;
    }

    ::slotted(p:first-child) {
      margin-top: 0;
    }

    ::slotted(p:last-child) {
      margin-bottom: 0;
    }
  `;

  toggle() {
    this.open = !this.open;
    this.dispatchEvent(
      new CustomEvent('vox-toggle', { bubbles: true, composed: true }),
    );
  }

  render() {
    return html`
      <h3 style="margin:0">
        <button
          class="trigger"
          aria-expanded=${this.open ? 'true' : 'false'}
          @click=${this.toggle}
        >
          ${this.heading}
          <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </h3>
      <div class="panel" ?hidden=${!this.open}>
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-accordion': VoxAccordion;
    'vox-accordion-item': VoxAccordionItem;
  }
}
