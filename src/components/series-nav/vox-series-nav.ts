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

  /** Accessible name for the navigation landmark. */
  @property() label = 'Series';

  /** Direction word above the previous link. */
  @property({ attribute: 'previous-text' }) previousText = 'Previous';

  /** Direction word above the next link. */
  @property({ attribute: 'next-text' }) nextText = 'Next';

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
      margin-inline-start: auto;
      text-align: end;
    }

    .direction {
      font-size: 12px;
      color: var(--vox-color-text-3);
    }

    /* The arrows mean "back"/"onward" along the text, and U+2190/U+2192
       are not mirrored by the bidi algorithm, so flip them ourselves. */
    .arrow {
      display: inline-block;
    }

    :host(:dir(rtl)) .arrow {
      transform: scaleX(-1);
    }

    .title {
      font-size: 14px;
      font-weight: 600;
      color: var(--vox-color-brand-1);
    }
  `;

  render() {
    return html`
      <nav aria-label=${this.label}>
        ${this.previousHref
          ? html`
              <a href=${this.previousHref} rel="prev">
                <span class="direction"
                  ><span class="arrow" aria-hidden="true">←</span>
                  ${this.previousText}</span
                >
                <span class="title">${this.previousLabel}</span>
              </a>
            `
          : nothing}
        ${this.nextHref
          ? html`
              <a class="next" href=${this.nextHref} rel="next">
                <span class="direction"
                  >${this.nextText}
                  <span class="arrow" aria-hidden="true">→</span></span
                >
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
