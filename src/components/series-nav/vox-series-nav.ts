import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Previous/next navigation between pages in a series, like the links at
 * the bottom of a docs page.
 */
@customElement('vox-series-nav')
export class VoxSeriesNav extends LitElement {
  @property({ attribute: 'previous-href' }) previousHref?: string;
  @property({ attribute: 'previous-label' }) previousLabel = '';
  @property({ attribute: 'next-href' }) nextHref?: string;
  @property({ attribute: 'next-label' }) nextLabel = '';

  static styles = css`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    nav {
      display: flex;
      justify-content: space-between;
      gap: var(--vox-space-4);
    }

    a {
      display: flex;
      flex-direction: column;
      gap: 2px;
      flex: 0 1 48%;
      padding: var(--vox-space-3) var(--vox-space-4);
      border: 1px solid var(--vox-color-divider);
      border-radius: var(--vox-radius-md);
      text-decoration: none;
      transition: border-color var(--vox-transition-base);
    }

    a:hover,
    a:focus-visible {
      border-color: var(--vox-color-brand-1);
    }

    a:focus-visible {
      outline: 2px solid var(--vox-color-brand-1);
      outline-offset: 2px;
    }

    .next {
      margin-left: auto;
      text-align: right;
    }

    .direction {
      font-size: 12px;
      color: var(--vox-color-text-3);
    }

    .title {
      font-size: 14px;
      font-weight: 600;
      color: var(--vox-color-brand-1);
    }
  `;

  render() {
    return html`
      <nav aria-label="Series">
        ${this.previousHref
          ? html`
              <a href=${this.previousHref} rel="prev">
                <span class="direction">← Previous</span>
                <span class="title">${this.previousLabel}</span>
              </a>
            `
          : nothing}
        ${this.nextHref
          ? html`
              <a class="next" href=${this.nextHref} rel="next">
                <span class="direction">Next →</span>
                <span class="title">${this.nextLabel}</span>
              </a>
            `
          : nothing}
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-series-nav': VoxSeriesNav;
  }
}
