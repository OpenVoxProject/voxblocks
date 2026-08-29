import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export type RecordListItemSize = 'md' | 'sm';

/**
 * A list of linked records — search results, an admin index, anything
 * that's a stack of "go to this thing" rows. A grid (heading, meta, end,
 * plus a trailing filler column) is always defined here; regular
 * `size="md"` items ignore the first three tracks and just render their own
 * full-width flex row, while `size="sm"` items opt into them via `subgrid`
 * so their columns line up into a real table across every row, sized to
 * each column's widest cell like a native `<table>`. The filler column
 * absorbs whatever width the three content columns don't use, so every
 * item — table row or not — still spans the list's full width instead of
 * shrinking to fit its content.
 *
 * @slot - `<vox-record-list-item>` elements.
 */
@customElement('vox-record-list')
export class VoxRecordList extends LitElement {
  static styles = css`
    :host {
      display: grid;
      grid-template-columns: repeat(3, max-content) 1fr;
      column-gap: var(--vox-space-4);
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}

/**
 * One row in a `<vox-record-list>`: a heading link plus optional metadata
 * — pass `<vox-datum>` elements (or anything else) into the default slot.
 * Becomes fully navigable (heading and trailing arrow both link to `href`)
 * when `href` is set; otherwise renders as a static row.
 *
 * At `size="sm"`, the arrow drops out and heading/meta/`end` become real
 * table columns (via CSS `subgrid`, aligned against every other
 * `size="sm"` row in the same `<vox-record-list>`) — suited to a dense
 * activity/run log rather than an indexed record. `heading` and the meta
 * column each link to `href` individually, since a single grid row can't
 * itself be one native link the way a block row can.
 *
 * @slot - Metadata, e.g. `<vox-datum>` elements.
 * @slot end - Trailing content after the meta, e.g. a `<vox-badge>` status.
 */
@customElement('vox-record-list-item')
export class VoxRecordListItem extends LitElement {
  @property() heading = '';
  @property() href?: string;
  @property({ reflect: true }) size: RecordListItemSize = 'md';

  static styles = css`
    :host {
      display: block;
      grid-column: 1 / -1;
      font-family: var(--vox-font-family-base);
    }

    .row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--vox-space-4);
      padding: var(--vox-space-4) 0;
      border-bottom: 1px solid var(--vox-color-divider);
    }

    :host(:last-child) .row {
      border-bottom: none;
    }

    .main {
      display: flex;
      flex-direction: column;
      gap: var(--vox-space-1);
      min-width: 0;
    }

    .heading {
      font-size: 16px;
      font-weight: 600;
      line-height: 1.4;
    }

    a.heading {
      color: var(--vox-color-brand-1);
      text-decoration: none;
    }

    a.heading:hover,
    a.heading:focus-visible {
      text-decoration: underline;
    }

    a.heading:focus-visible {
      outline: 2px solid var(--vox-color-brand-1);
      outline-offset: 2px;
    }

    span.heading {
      color: var(--vox-color-text-1);
    }

    .meta {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--vox-space-4);
    }

    .meta:not(.has-meta) {
      display: none;
    }

    .arrow {
      display: flex;
      flex: none;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border-radius: var(--vox-radius-full);
      background-color: var(--vox-color-bg-soft);
      color: var(--vox-color-brand-1);
      text-decoration: none;
      transition: background-color var(--vox-transition-fast);
    }

    .arrow:hover {
      background-color: var(--vox-color-brand-soft);
    }

    .arrow:focus-visible {
      outline: 2px solid var(--vox-color-brand-1);
      outline-offset: 2px;
    }

    .arrow svg {
      width: 16px;
      height: 16px;
    }

    .end:not(.has-end) {
      display: none;
    }

    /* Small size: heading, meta, and end each become their own subgrid
       column, aligned against the same column in every other size="sm"
       row in the parent <vox-record-list> — the arrow drops out since
       there's no room for it at this density, and the whole "row" is
       really 3 separate grid cells rather than one box, so heading and
       the meta cell each link to href individually. */
    :host([size='sm']) {
      display: grid;
      grid-template-columns: subgrid;
      grid-column: 1 / -1;
      align-items: baseline;
      column-gap: var(--vox-space-4);
      padding: var(--vox-space-2) 0;
      border-bottom: 1px solid var(--vox-color-divider);
      font-size: 13px;
    }

    :host([size='sm']:last-child) {
      border-bottom: none;
    }

    :host([size='sm']) .meta {
      flex-wrap: nowrap;
      gap: var(--vox-space-2);
    }

    .cell {
      color: var(--vox-color-text-2);
      text-decoration: none;
    }

    a.cell:hover,
    a.cell:focus-visible {
      text-decoration: underline;
    }

    a.cell:focus-visible {
      outline: 2px solid var(--vox-color-brand-1);
      outline-offset: 2px;
    }
  `;

  private hasMeta = false;
  private hasEnd = false;

  private handleMetaSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    this.hasMeta = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  }

  private handleEndSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    this.hasEnd = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  }

  render() {
    if (this.size === 'sm') {
      const metaSlot = html`
        <span class="meta ${this.hasMeta ? 'has-meta' : ''}">
          <slot @slotchange=${this.handleMetaSlotChange}></slot>
        </span>
      `;

      return html`
        ${this.href
          ? html`<a class="cell" href=${this.href}>${this.heading}</a>`
          : html`<span class="cell">${this.heading}</span>`}
        ${this.hasMeta && this.href
          ? html`<a class="cell" href=${this.href}>${metaSlot}</a>`
          : html`<span class="cell">${metaSlot}</span>`}
        <span class="cell">
          <slot name="end" @slotchange=${this.handleEndSlotChange}></slot>
        </span>
      `;
    }

    return html`
      <div class="row">
        <div class="main">
          ${this.href
            ? html`<a class="heading" href=${this.href}>${this.heading}</a>`
            : html`<span class="heading">${this.heading}</span>`}
          <div class="meta ${this.hasMeta ? 'has-meta' : ''}">
            <slot @slotchange=${this.handleMetaSlotChange}></slot>
          </div>
        </div>
        <span class="end ${this.hasEnd ? 'has-end' : ''}">
          <slot name="end" @slotchange=${this.handleEndSlotChange}></slot>
        </span>
        ${this.href
          ? html`
              <a class="arrow" href=${this.href} aria-label="View ${this.heading}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </a>
            `
          : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-record-list': VoxRecordList;
    'vox-record-list-item': VoxRecordListItem;
  }
}
