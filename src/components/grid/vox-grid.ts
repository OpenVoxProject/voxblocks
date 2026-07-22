import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A responsive CSS grid container. By default columns auto-fit to the
 * `min` track width; set `cols` for a fixed column count.
 *
 * @slot - Grid items.
 */
@customElement('vox-grid')
export class VoxGrid extends LitElement {
  /** Fixed number of columns; 0 means auto-fit. */
  @property({ type: Number }) cols = 0;

  /** Minimum column width used when auto-fitting. */
  @property() min = '240px';

  @property({ reflect: true }) gap: 'sm' | 'md' | 'lg' = 'md';

  static styles = css`
    :host {
      display: grid;
    }

    :host([gap='sm']) {
      gap: var(--vox-space-2);
    }

    :host([gap='md']) {
      gap: var(--vox-space-4);
    }

    :host([gap='lg']) {
      gap: var(--vox-space-6);
    }
  `;

  updated() {
    this.style.gridTemplateColumns =
      this.cols > 0
        ? `repeat(${this.cols}, minmax(0, 1fr))`
        : `repeat(auto-fit, minmax(min(${this.min}, 100%), 1fr))`;
  }

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-grid': VoxGrid;
  }
}
