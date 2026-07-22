import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * Joins inputs, selects, buttons, and text segments into one attached row:
 *
 * ```html
 * <vox-input-group>
 *   <vox-input aria-label="Search modules"></vox-input>
 *   <vox-button>Search</vox-button>
 * </vox-input-group>
 * ```
 *
 * The group marks each child with a `data-vox-group` position attribute
 * (`start` / `middle` / `end`); VoxBlocks controls flatten their inner
 * corners accordingly. Plain `<span>` children render as text addons.
 */
@customElement('vox-input-group')
export class VoxInputGroup extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    .group {
      display: flex;
      align-items: stretch;
    }

    ::slotted(*) {
      flex: none;
    }

    ::slotted(vox-input),
    ::slotted(vox-select) {
      flex: 1 1 auto;
      min-width: 0;
    }

    ::slotted(span) {
      display: inline-flex;
      align-items: center;
      padding: 0 var(--vox-space-3);
      background-color: var(--vox-color-bg-soft);
      border: 1px solid var(--vox-color-border);
      color: var(--vox-color-text-2);
      font-size: 14px;
      white-space: nowrap;
    }

    ::slotted(span[data-vox-group='start']) {
      border-radius: var(--vox-radius-md) 0 0 var(--vox-radius-md);
      border-right: none;
    }

    ::slotted(span[data-vox-group='end']) {
      border-radius: 0 var(--vox-radius-md) var(--vox-radius-md) 0;
      border-left: none;
    }
  `;

  private handleSlotChange(event: Event) {
    const children = (event.target as HTMLSlotElement).assignedElements();
    children.forEach((child, index) => {
      const position =
        index === 0 ? 'start' : index === children.length - 1 ? 'end' : 'middle';
      child.setAttribute('data-vox-group', position);
    });
  }

  render() {
    return html`
      <div class="group" role="group">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-input-group': VoxInputGroup;
  }
}
