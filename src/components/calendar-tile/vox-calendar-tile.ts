import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A compact date tile for event listings. Give it an ISO date
 * (`date="2026-09-18"`); month and day render localized.
 */
@customElement('vox-calendar-tile')
export class VoxCalendarTile extends LitElement {
  /** ISO date string, e.g. "2026-09-18". */
  @property() date = '';

  /** BCP 47 locale for month formatting; defaults to the page locale. */
  @property() locale?: string;

  static styles = css`
    :host {
      display: inline-block;
      font-family: var(--vox-font-family-base);
    }

    .tile {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 56px;
      border: 1px solid var(--vox-color-divider);
      border-radius: var(--vox-radius-md);
      overflow: hidden;
      background-color: var(--vox-color-bg-elv);
    }

    .month {
      align-self: stretch;
      padding: 2px var(--vox-space-2);
      background-color: var(--vox-color-brand-3);
      color: var(--vox-color-text-inverse);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      text-align: center;
    }

    .day {
      padding: var(--vox-space-1) var(--vox-space-2);
      font-size: 24px;
      font-weight: 700;
      color: var(--vox-color-text-1);
    }
  `;

  render() {
    const parsed = new Date(`${this.date}T00:00:00`);
    const valid = !Number.isNaN(parsed.getTime());
    const month = valid
      ? parsed.toLocaleString(this.locale, { month: 'short' })
      : '—';
    const day = valid ? parsed.getDate() : '–';

    return html`
      <time class="tile" datetime=${this.date}>
        <span class="month">${month}</span>
        <span class="day">${day}</span>
      </time>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-calendar-tile': VoxCalendarTile;
  }
}
