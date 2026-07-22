import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

export type ButtonVariant = 'brand' | 'alt' | 'danger' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * A button styled after the OpenVox docs action buttons.
 * Renders an anchor when `href` is set, a real button otherwise.
 *
 * @slot - Button label.
 */
@customElement('vox-button')
export class VoxButton extends LitElement {
  @property() variant: ButtonVariant = 'brand';
  @property() size: ButtonSize = 'md';
  @property() href?: string;
  @property() target?: string;
  @property() type: 'button' | 'submit' | 'reset' = 'button';
  @property({ type: Boolean, reflect: true }) disabled = false;

  static styles = css`
    :host {
      display: inline-block;
    }

    :host([disabled]) {
      pointer-events: none;
    }

    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--vox-space-2);
      border: 1px solid transparent;
      border-radius: var(--vox-radius-full);
      font-family: var(--vox-font-family-base);
      font-weight: 600;
      line-height: 1;
      text-decoration: none;
      cursor: pointer;
      white-space: nowrap;
      transition:
        color var(--vox-transition-base),
        background-color var(--vox-transition-base),
        border-color var(--vox-transition-base);
    }

    .button:focus-visible {
      outline: 2px solid var(--vox-color-brand-1);
      outline-offset: 2px;
    }

    .button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .sm {
      font-size: 12px;
      padding: 0 var(--vox-space-3);
      height: 28px;
    }

    .md {
      font-size: 14px;
      padding: 0 20px;
      height: 38px;
    }

    .lg {
      font-size: 16px;
      padding: 0 var(--vox-space-6);
      height: 48px;
    }

    .brand {
      background-color: var(--vox-color-brand-3);
      color: var(--vox-color-text-inverse);
    }

    .brand:hover:not(:disabled) {
      background-color: var(--vox-color-brand-2);
    }

    .alt {
      background-color: var(--vox-color-bg-soft);
      color: var(--vox-color-text-1);
      border-color: var(--vox-color-divider);
    }

    .alt:hover:not(:disabled) {
      border-color: var(--vox-color-brand-1);
      color: var(--vox-color-brand-1);
    }

    .danger {
      background-color: var(--vox-color-danger-3);
      color: var(--vox-color-text-inverse);
    }

    .danger:hover:not(:disabled) {
      background-color: var(--vox-color-danger-2);
    }

    .ghost {
      background-color: transparent;
      color: var(--vox-color-brand-1);
    }

    .ghost:hover:not(:disabled) {
      background-color: var(--vox-color-brand-soft);
    }

    /* Corner flattening when placed inside a <vox-input-group>. */
    :host([data-vox-group]) .button {
      height: 100%;
      border-radius: 0;
    }

    :host([data-vox-group='start']) .button {
      border-radius: var(--vox-radius-md) 0 0 var(--vox-radius-md);
    }

    :host([data-vox-group='end']) .button {
      border-radius: 0 var(--vox-radius-md) var(--vox-radius-md) 0;
    }
  `;

  render() {
    const classes = classMap({
      button: true,
      [this.variant]: true,
      [this.size]: true,
    });

    if (this.href !== undefined && !this.disabled) {
      return html`
        <a
          class=${classes}
          href=${this.href}
          target=${ifDefined(this.target)}
          rel=${ifDefined(this.target === '_blank' ? 'noreferrer' : undefined)}
        >
          <slot></slot>
        </a>
      `;
    }

    return html`
      <button class=${classes} type=${this.type} ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-button': VoxButton;
  }
}
