import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Tabbed content:
 *
 * ```html
 * <vox-tabs>
 *   <vox-tab slot="tab" panel="deb" selected>Debian</vox-tab>
 *   <vox-tab slot="tab" panel="rpm">RHEL</vox-tab>
 *   <vox-tab-panel name="deb">...</vox-tab-panel>
 *   <vox-tab-panel name="rpm">...</vox-tab-panel>
 * </vox-tabs>
 * ```
 *
 * @slot tab - `<vox-tab>` elements.
 * @slot - `<vox-tab-panel>` elements.
 * @fires vox-tab-change - When the selected tab changes; `detail.panel` names it.
 */
@customElement('vox-tabs')
export class VoxTabs extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .tablist {
      display: flex;
      gap: var(--vox-space-1);
      border-bottom: 1px solid var(--vox-color-divider);
    }
  `;

  private get tabs(): VoxTab[] {
    return [...this.querySelectorAll<VoxTab>('vox-tab')];
  }

  private get panels(): VoxTabPanel[] {
    return [...this.querySelectorAll<VoxTabPanel>('vox-tab-panel')];
  }

  private sync() {
    const tabs = this.tabs;
    if (tabs.length > 0 && !tabs.some((t) => t.selected)) {
      tabs[0].selected = true;
    }
    const selected = tabs.find((t) => t.selected);
    this.panels.forEach((panel) => {
      panel.active = panel.name === selected?.panel;
    });
  }

  private handleSelect(event: Event) {
    const tab = event.target as VoxTab;
    if (tab.tagName !== 'VOX-TAB') return;
    this.tabs.forEach((t) => (t.selected = t === tab));
    this.sync();
    this.dispatchEvent(
      new CustomEvent('vox-tab-change', {
        detail: { panel: tab.panel },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private handleKeydown(event: KeyboardEvent) {
    const deltas: Record<string, number> = { ArrowRight: 1, ArrowLeft: -1 };
    const delta = deltas[event.key];
    if (!delta) return;
    event.preventDefault();
    const tabs = this.tabs;
    const index = tabs.findIndex((t) => t.selected);
    const next = tabs[(index + delta + tabs.length) % tabs.length];
    next.select();
    next.focusTab();
  }

  render() {
    return html`
      <div
        class="tablist"
        role="tablist"
        @vox-tab-select=${this.handleSelect}
        @keydown=${this.handleKeydown}
      >
        <slot name="tab" @slotchange=${this.sync}></slot>
      </div>
      <slot @slotchange=${this.sync}></slot>
    `;
  }
}

/**
 * A tab button; `panel` names the `<vox-tab-panel>` it controls.
 *
 * @slot - Tab label.
 */
@customElement('vox-tab')
export class VoxTab extends LitElement {
  @property() panel = '';
  @property({ type: Boolean, reflect: true }) selected = false;

  static styles = css`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    .tab {
      padding: var(--vox-space-2) var(--vox-space-4);
      margin-bottom: -1px;
      background: none;
      border: none;
      border-bottom: 2px solid transparent;
      color: var(--vox-color-text-2);
      font-family: inherit;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: color var(--vox-transition-fast);
    }

    .tab:hover {
      color: var(--vox-color-text-1);
    }

    .tab:focus-visible {
      outline: 2px solid var(--vox-color-brand-1);
      outline-offset: -2px;
      border-radius: var(--vox-radius-sm);
    }

    :host([selected]) .tab {
      color: var(--vox-color-brand-1);
      border-bottom-color: var(--vox-color-brand-1);
    }
  `;

  select() {
    this.dispatchEvent(
      new CustomEvent('vox-tab-select', { bubbles: true, composed: true }),
    );
  }

  focusTab() {
    this.renderRoot.querySelector<HTMLElement>('.tab')?.focus();
  }

  render() {
    return html`
      <button
        class="tab"
        role="tab"
        aria-selected=${this.selected ? 'true' : 'false'}
        tabindex=${this.selected ? '0' : '-1'}
        @click=${this.select}
      >
        <slot></slot>
      </button>
    `;
  }
}

/**
 * Content shown when the matching `<vox-tab>` is selected.
 *
 * @slot - Panel content.
 */
@customElement('vox-tab-panel')
export class VoxTabPanel extends LitElement {
  @property() name = '';
  @property({ type: Boolean, reflect: true }) active = false;

  static styles = css`
    :host {
      display: none;
      font-family: var(--vox-font-family-base);
      font-size: 14px;
      line-height: 1.7;
      color: var(--vox-color-text-2);
      padding: var(--vox-space-4) 0;
    }

    :host([active]) {
      display: block;
    }
  `;

  render() {
    return html`<div role="tabpanel"><slot></slot></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-tabs': VoxTabs;
    'vox-tab': VoxTab;
    'vox-tab-panel': VoxTabPanel;
  }
}
