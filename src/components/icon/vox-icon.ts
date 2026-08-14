import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ICON_PATHS, type IconName } from './icon-paths.js';

export type { IconName };
export type IconSize = 'sm' | 'md' | 'lg' | 'xl';

/**
 * One icon from the shared VoxBlocks icon set, drawn as inline SVG so
 * it inherits `color` from its context like text does. Decorative by
 * default (`aria-hidden`); set `label` when the icon is the only
 * content conveying meaning (e.g. an icon-only button).
 */
@customElement('vox-icon')
export class VoxIcon extends LitElement {
  @property() name: IconName = 'info';
  @property({ reflect: true }) size: IconSize = 'md';
  @property() label?: string;

  static styles = css`
    :host {
      display: inline-flex;
      flex: none;
      color: inherit;
    }

    svg {
      display: block;
    }

    :host([size='sm']) svg {
      width: 16px;
      height: 16px;
    }

    :host([size='md']) svg {
      width: 20px;
      height: 20px;
    }

    :host([size='lg']) svg {
      width: 24px;
      height: 24px;
    }

    :host([size='xl']) svg {
      width: 48px;
      height: 48px;
    }
  `;

  render() {
    const path = ICON_PATHS[this.name];
    if (!path) return nothing;

    return html`
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        role=${this.label ? 'img' : nothing}
        aria-hidden=${this.label ? nothing : 'true'}
        aria-label=${this.label ?? nothing}
      >
        ${path}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-icon': VoxIcon;
  }
}
