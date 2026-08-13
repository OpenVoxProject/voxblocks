import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * An in-page table of contents / heading outline, in the style of the
 * OpenVox docs "On this page" panel. Nest `<vox-toc-item>` for
 * sub-headings via the `children` slot.
 *
 * ```html
 * <vox-toc heading="On this page">
 *   <vox-toc-item href="#palette" current>Palette</vox-toc-item>
 *   <vox-toc-item href="#pairing-hues">
 *     Pairing hues
 *     <vox-toc-item slot="children" href="#soft-badge">Soft badge</vox-toc-item>
 *   </vox-toc-item>
 * </vox-toc>
 * ```
 *
 * @slot - `<vox-toc-item>` elements.
 */
@customElement('vox-toc')
export class VoxToc extends LitElement {
  @property() heading = 'On this page';

  static styles = css`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    .heading {
      margin: 0 0 var(--vox-space-2);
      padding-left: var(--vox-space-3);
      font-size: 13px;
      font-weight: 600;
      color: var(--vox-color-text-1);
    }

    nav {
      display: flex;
      flex-direction: column;
      gap: 1px;
      border-left: 1px solid var(--vox-color-divider);
    }
  `;

  render() {
    return html`
      <div class="heading" id="vox-toc-heading">${this.heading}</div>
      <nav aria-labelledby="vox-toc-heading">
        <slot></slot>
      </nav>
    `;
  }
}

/**
 * One heading link in a vox-toc. Set `current` on the active section.
 *
 * @slot - Link text.
 * @slot children - Nested `<vox-toc-item>` elements for sub-headings.
 */
@customElement('vox-toc-item')
export class VoxTocItem extends LitElement {
  @property() href = '#';
  @property({ type: Boolean, reflect: true }) current = false;

  static styles = css`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    a {
      display: block;
      margin-left: -1px;
      padding: var(--vox-space-1) var(--vox-space-3);
      border-left: 2px solid transparent;
      color: var(--vox-color-text-2);
      font-size: 13px;
      line-height: 1.5;
      text-decoration: none;
      transition:
        color var(--vox-transition-fast),
        border-color var(--vox-transition-fast);
    }

    a:hover {
      color: var(--vox-color-text-1);
    }

    a:focus-visible {
      outline: 2px solid var(--vox-color-brand-1);
      outline-offset: -2px;
    }

    :host([current]) a {
      border-left-color: var(--vox-color-brand-1);
      color: var(--vox-color-brand-1);
      font-weight: 600;
    }

    .children {
      display: flex;
      flex-direction: column;
      gap: 1px;
      padding-left: var(--vox-space-3);
    }

    .children:not(.has-children) {
      display: none;
    }
  `;

  private hasChildren = false;

  private handleChildrenSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    this.hasChildren = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  }

  render() {
    return html`
      <a href=${this.href} aria-current=${this.current ? 'true' : 'false'}>
        <slot></slot>
      </a>
      <div class="children ${this.hasChildren ? 'has-children' : ''}">
        <slot name="children" @slotchange=${this.handleChildrenSlotChange}></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-toc': VoxToc;
    'vox-toc-item': VoxTocItem;
  }
}
