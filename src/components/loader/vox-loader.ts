import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export type LoaderSize = 'sm' | 'md' | 'lg';

/**
 * A loading spinner. The `label` is announced to screen readers.
 */
@customElement('vox-loader')
export class VoxLoader extends LitElement {
  @property({ reflect: true }) size: LoaderSize = 'md';
  @property() label = 'Loading';

  static styles = css`
    :host {
      display: inline-block;
    }

    .spinner {
      box-sizing: border-box;
      border-radius: 50%;
      border-style: solid;
      border-color: var(--vox-color-brand-soft);
      border-top-color: var(--vox-color-brand-3);
      animation: spin 0.8s linear infinite;
    }

    :host([size='sm']) .spinner {
      width: 16px;
      height: 16px;
      border-width: 2px;
    }

    :host([size='md']) .spinner {
      width: 28px;
      height: 28px;
      border-width: 3px;
    }

    :host([size='lg']) .spinner {
      width: 44px;
      height: 44px;
      border-width: 4px;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .spinner {
        animation-duration: 2.4s;
      }
    }

    .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0 0 0 0);
      white-space: nowrap;
    }
  `;

  render() {
    return html`
      <div role="status">
        <div class="spinner"></div>
        <span class="visually-hidden">${this.label}</span>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-loader': VoxLoader;
  }
}
