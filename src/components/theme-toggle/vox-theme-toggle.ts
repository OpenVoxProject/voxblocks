import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

const STORAGE_KEY = 'vox-theme';
const THEME_ATTR = 'data-vox-theme';

/**
 * A self-contained light/dark theme switch. Reads and writes
 * `data-vox-theme` on `<html>` and persists the choice to
 * `localStorage['vox-theme']` — the same convention VoxBlocks' own dark
 * mode support already uses, so this is a drop-in control for it.
 *
 * A page still needs its own blocking inline script in `<head>` to apply
 * the stored (or system) theme before first paint — a custom element
 * can't upgrade in time to prevent that flash. See the docs page for the
 * exact snippet.
 *
 * Fires `vox-theme-change` with `detail: { theme: 'light' | 'dark' }`.
 */
@customElement('vox-theme-toggle')
export class VoxThemeToggle extends LitElement {
  /** Accessible label while the page is in light mode. */
  @property({ attribute: 'light-label' }) lightLabel = 'Switch to dark theme';

  /** Accessible label while the page is in dark mode. */
  @property({ attribute: 'dark-label' }) darkLabel = 'Switch to light theme';

  @state() private dark = false;

  private media = window.matchMedia('(prefers-color-scheme: dark)');
  private observer?: MutationObserver;

  static styles = css`
    :host {
      display: inline-flex;
    }

    button {
      display: inline-flex;
      align-items: center;
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
    }

    button:focus-visible {
      outline: 2px solid var(--vox-color-brand-1);
      outline-offset: 2px;
      border-radius: var(--vox-radius-full);
    }

    .track {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      width: 44px;
      height: 24px;
      padding: 0 5px;
      border-radius: var(--vox-radius-full);
      background-color: var(--vox-color-bg-soft);
      border: 1px solid var(--vox-color-divider);
    }

    .track svg {
      position: relative;
      width: 13px;
      height: 13px;
      flex: none;
      color: var(--vox-color-text-3);
    }

    .thumb {
      position: absolute;
      top: 1px;
      left: 1px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: var(--vox-color-bg-elv);
      box-shadow: var(--vox-shadow-1);
      transition: transform var(--vox-transition-base);
    }

    :host([dark]) .thumb {
      transform: translateX(20px);
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.syncFromDocument();
    this.observer = new MutationObserver(() => this.syncFromDocument());
    this.observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: [THEME_ATTR],
    });
    this.media.addEventListener('change', this.handleSystemChange);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.observer?.disconnect();
    this.media.removeEventListener('change', this.handleSystemChange);
  }

  private handleSystemChange = (event: MediaQueryListEvent) => {
    if (localStorage.getItem(STORAGE_KEY)) return;
    document.documentElement.setAttribute(THEME_ATTR, event.matches ? 'dark' : 'light');
  };

  private syncFromDocument() {
    const dark = document.documentElement.getAttribute(THEME_ATTR) === 'dark';
    this.dark = dark;
    this.toggleAttribute('dark', dark);
  }

  private handleClick() {
    const next = this.dark ? 'light' : 'dark';
    document.documentElement.setAttribute(THEME_ATTR, next);
    localStorage.setItem(STORAGE_KEY, next);
    this.dispatchEvent(
      new CustomEvent('vox-theme-change', {
        detail: { theme: next },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    const label = this.dark ? this.darkLabel : this.lightLabel;
    return html`
      <button
        type="button"
        role="switch"
        aria-checked=${this.dark}
        aria-label=${label}
        title=${label}
        @click=${this.handleClick}
      >
        <span class="track">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
          </svg>
          <span class="thumb"></span>
        </span>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-theme-toggle': VoxThemeToggle;
  }
}
