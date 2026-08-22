import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { ICON_PATHS } from '../icon/icon-paths.js';
import { highlight, LANGUAGE_LABELS, type Token } from './languages.js';

export type { CodeBlockLanguage } from './languages.js';

/** Strips a shared leading indent and surrounding blank lines, so authored (and thus HTML-indented) code renders flush left. */
function dedent(text: string): string {
  const lines = text.split('\n');
  while (lines.length && lines[0].trim() === '') lines.shift();
  while (lines.length && lines[lines.length - 1].trim() === '') lines.pop();
  const indents = lines.filter((l) => l.trim() !== '').map((l) => l.match(/^[ \t]*/)?.[0].length ?? 0);
  const minIndent = indents.length ? Math.min(...indents) : 0;
  return lines.map((l) => l.slice(minIndent)).join('\n');
}

/** Splits tokens on embedded newlines into one array of tokens per source line. */
function toLines(tokens: Token[]): Token[][] {
  const lines: Token[][] = [[]];
  for (const token of tokens) {
    token.text.split('\n').forEach((part, i) => {
      if (i > 0) lines.push([]);
      if (part) lines[lines.length - 1].push({ type: token.type, text: part });
    });
  }
  return lines;
}

/**
 * A syntax-highlighted code block with a copy button, no external
 * highlighter required. Covers shell, Puppet, YAML, JSON, Ruby, JS/TS,
 * CSS, and HTML; unrecognized languages render as plain text.
 *
 * @slot - The code, as plain text (escape `<` and `&` as you would in
 * any HTML source, e.g. inside a `<code>` child).
 */
@customElement('vox-code-block')
export class VoxCodeBlock extends LitElement {
  @property() language = '';

  /** Shown in the header instead of/alongside the language label. */
  @property() filename = '';

  @property({ type: Boolean, attribute: 'line-numbers', reflect: true }) lineNumbers = false;

  @property({ type: Boolean, attribute: 'no-copy' }) noCopy = false;

  /** Hides the whole header bar (filename, language label, and copy button) — for dense contexts like a table cell. */
  @property({ type: Boolean, attribute: 'no-header' }) noHeader = false;

  /** Drops the outer border — for dropping into a surface (e.g. a table cell) that already has its own edge. */
  @property({ type: Boolean, attribute: 'no-border', reflect: true }) noBorder = false;

  @state() private _code = '';
  @state() private _copied = false;

  private _copyResetTimer?: ReturnType<typeof setTimeout>;

  static styles = css`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    .block {
      border: 1px solid var(--vox-color-border);
      border-radius: var(--vox-radius-md);
      background-color: var(--vox-color-bg-alt);
      overflow: hidden;
    }

    :host([no-border]) .block {
      border: none;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--vox-space-3);
      padding: var(--vox-space-2) var(--vox-space-2) var(--vox-space-2) var(--vox-space-4);
      border-bottom: 1px solid var(--vox-color-divider);
      font-size: 12px;
    }

    .meta {
      display: flex;
      align-items: baseline;
      gap: var(--vox-space-3);
      min-width: 0;
      overflow: hidden;
      color: var(--vox-color-text-2);
    }

    .filename {
      color: var(--vox-color-text-1);
      font-family: var(--vox-font-family-mono);
      font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .lang {
      flex: none;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }

    .copy {
      flex: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      padding: 0;
      border: none;
      border-radius: var(--vox-radius-sm);
      background: none;
      color: var(--vox-color-text-2);
      cursor: pointer;
    }

    .copy:hover {
      background-color: var(--vox-color-brand-soft);
      color: var(--vox-color-brand-1);
    }

    .copy:focus-visible {
      outline: 2px solid var(--vox-color-brand-1);
      outline-offset: 2px;
    }

    .copy svg {
      width: 15px;
      height: 15px;
    }

    pre {
      margin: 0;
      padding: var(--vox-space-4);
      overflow-x: auto;
      white-space: pre;
      tab-size: 2;
    }

    pre:focus-visible {
      outline: 2px solid var(--vox-color-brand-1);
      outline-offset: -2px;
    }

    code {
      font-family: var(--vox-font-family-mono);
      font-size: 13px;
      line-height: 1.7;
      color: var(--vox-color-text-1);
    }

    .line {
      display: block;
    }

    :host([line-numbers]) code {
      counter-reset: line;
    }

    :host([line-numbers]) .line {
      padding-left: 3.5ch;
      position: relative;
    }

    :host([line-numbers]) .line::before {
      counter-increment: line;
      content: counter(line);
      position: absolute;
      left: 0;
      width: 2.5ch;
      text-align: right;
      color: var(--vox-color-text-3);
      user-select: none;
    }

    .tok-comment {
      color: var(--vox-code-comment);
      font-style: italic;
    }
    .tok-keyword {
      color: var(--vox-code-keyword);
    }
    .tok-string {
      color: var(--vox-code-string);
    }
    .tok-number {
      color: var(--vox-code-number);
    }
    .tok-function {
      color: var(--vox-code-function);
    }
    .tok-property {
      color: var(--vox-code-property);
    }
    .tok-tag {
      color: var(--vox-code-tag);
    }

    slot {
      display: none;
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

  disconnectedCallback() {
    super.disconnectedCallback();
    clearTimeout(this._copyResetTimer);
  }

  private _handleSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    const text = slot
      .assignedNodes({ flatten: true })
      .map((node) => node.textContent ?? '')
      .join('');
    this._code = dedent(text);
  }

  private async _copy() {
    try {
      await navigator.clipboard.writeText(this._code);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = this._code;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      this.shadowRoot?.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      textarea.remove();
    }
    this._copied = true;
    clearTimeout(this._copyResetTimer);
    this._copyResetTimer = setTimeout(() => {
      this._copied = false;
    }, 1500);
  }

  render() {
    const label = LANGUAGE_LABELS[this.language] ?? this.language;
    const lines = toLines(highlight(this._code, this.language));

    return html`
      <div class="block">
        ${this.noHeader
          ? nothing
          : html`
              <div class="header">
                <span class="meta">
                  ${this.filename ? html`<span class="filename">${this.filename}</span>` : nothing}
                  ${label ? html`<span class="lang">${label}</span>` : nothing}
                </span>
                ${this.noCopy
                  ? nothing
                  : html`
                      <button
                        class="copy"
                        type="button"
                        @click=${this._copy}
                        aria-label=${this._copied ? 'Copied' : 'Copy code'}
                      >
                        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                          ${ICON_PATHS[this._copied ? 'check' : 'copy']}
                        </svg>
                      </button>
                    `}
              </div>
            `}
        <pre tabindex="0"><code>${lines.map(
          (line) => html`<span class="line">${line.map((token) =>
            token.type === 'plain' ? token.text : html`<span class="tok-${token.type}">${token.text}</span>`,
          )}</span>`,
        )}</code></pre>
        <span class="visually-hidden" aria-live="polite">${this._copied ? 'Copied to clipboard' : ''}</span>
      </div>
      <slot @slotchange=${this._handleSlotChange}></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-code-block': VoxCodeBlock;
  }
}
