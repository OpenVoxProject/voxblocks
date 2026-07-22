import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';

/**
 * A circular avatar showing an image, or initials as a fallback.
 */
@customElement('vox-avatar')
export class VoxAvatar extends LitElement {
  @property() src?: string;
  @property() alt = '';
  @property() initials = '';
  @property({ reflect: true }) size: AvatarSize = 'md';

  static styles = css`
    :host {
      display: inline-block;
    }

    .avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border-radius: 50%;
      background-color: var(--vox-color-brand-soft);
      color: var(--vox-color-brand-1);
      font-family: var(--vox-font-family-base);
      font-weight: 600;
      user-select: none;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    :host([size='sm']) .avatar {
      width: 28px;
      height: 28px;
      font-size: 11px;
    }

    :host([size='md']) .avatar {
      width: 40px;
      height: 40px;
      font-size: 14px;
    }

    :host([size='lg']) .avatar {
      width: 56px;
      height: 56px;
      font-size: 20px;
    }

    :host([size='xl']) .avatar {
      width: 80px;
      height: 80px;
      font-size: 28px;
    }
  `;

  render() {
    return html`
      <span class="avatar" role=${this.src ? 'presentation' : 'img'} aria-label=${this.alt}>
        ${this.src
          ? html`<img src=${this.src} alt=${this.alt} />`
          : this.initials}
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-avatar': VoxAvatar;
  }
}
