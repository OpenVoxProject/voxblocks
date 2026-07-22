import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A pull quote with optional attribution.
 *
 * @slot - Quote text.
 */
@customElement('vox-quote')
export class VoxQuote extends LitElement {
  @property() attribution = '';

  /** Additional context under the attribution, e.g. a role or company. */
  @property() detail = '';

  static styles = css`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    blockquote {
      margin: 0;
      padding-left: var(--vox-space-6);
      border-left: 4px solid var(--vox-color-brand-3);
    }

    .text {
      font-size: 18px;
      line-height: 1.6;
      color: var(--vox-color-text-1);
    }

    .text::before {
      content: '“';
    }

    .text::after {
      content: '”';
    }

    footer {
      margin-top: var(--vox-space-3);
      font-size: 14px;
    }

    .attribution {
      font-weight: 600;
      color: var(--vox-color-text-1);
    }

    .detail {
      color: var(--vox-color-text-2);
    }
  `;

  render() {
    return html`
      <blockquote>
        <div class="text"><slot></slot></div>
        ${this.attribution
          ? html`
              <footer>
                <span class="attribution">${this.attribution}</span>
                ${this.detail
                  ? html`<span class="detail"> — ${this.detail}</span>`
                  : nothing}
              </footer>
            `
          : nothing}
      </blockquote>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-quote': VoxQuote;
  }
}
