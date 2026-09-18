import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A small labeled value with an optional icon — an owner, a date, a
 * target host, anything that's "icon + value" — for use inside record
 * rows, cards, or wherever a compact data point is needed.
 *
 * `name` isn't shown visually (the icon, if any, carries that meaning for
 * sighted users); it's exposed to assistive tech as a spoken label, e.g.
 * "User: J. Smith".
 *
 * @slot icon - Optional icon before the value, e.g. `<vox-icon size="sm">`.
 * @slot - The value.
 */
@customElement('vox-datum')
export class VoxDatum extends LitElement {
  @property() name = '';

  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      gap: var(--vox-space-1);
      font-family: var(--vox-font-family-base);
      font-size: 13px;
      color: var(--vox-color-text-2);
    }

    .icon {
      display: flex;
      flex: none;
      color: var(--vox-color-text-3);
    }

    .icon:not(.has-icon) {
      display: none;
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
  `;

  private hasIcon = false;

  private handleIconSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    this.hasIcon = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  }

  render() {
    return html`
      <span class="icon ${this.hasIcon ? 'has-icon' : ''}">
        <slot name="icon" @slotchange=${this.handleIconSlotChange}></slot>
      </span>
      ${this.name ? html`<span class="sr-only">${this.name}: </span>` : nothing}
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-datum': VoxDatum;
  }
}
