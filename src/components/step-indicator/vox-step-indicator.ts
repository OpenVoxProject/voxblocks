import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export type StepState = 'complete' | 'current' | 'upcoming';

/**
 * Shows progress through a multi-step process.
 *
 * @slot - `<vox-step>` elements.
 */
@customElement('vox-step-indicator')
export class VoxStepIndicator extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .steps {
      display: flex;
      align-items: flex-start;
    }

    ::slotted(vox-step) {
      flex: 1 1 0;
    }
  `;

  private numberSteps() {
    this.querySelectorAll('vox-step').forEach((step, index) => {
      (step as VoxStep).number = index + 1;
    });
  }

  render() {
    return html`
      <div class="steps" role="list" aria-label="Progress">
        <slot @slotchange=${this.numberSteps}></slot>
      </div>
    `;
  }
}

/**
 * One step in a `<vox-step-indicator>`.
 */
@customElement('vox-step')
export class VoxStep extends LitElement {
  @property() label = '';
  @property({ reflect: true }) state: StepState = 'upcoming';
  @property({ type: Number }) number = 1;

  static styles = css`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    .step {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: var(--vox-space-2);
      padding: 0 var(--vox-space-2);
    }

    /* Connector line to the previous step. */
    :host(:not(:first-child)) .step::before {
      content: '';
      position: absolute;
      top: 14px;
      right: 50%;
      width: 100%;
      height: 2px;
      background-color: var(--vox-color-divider);
      z-index: 0;
    }

    :host([state='complete']) .step::before {
      background-color: var(--vox-color-brand-3);
    }

    .marker {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      border: 2px solid var(--vox-color-divider);
      background-color: var(--vox-color-bg);
      color: var(--vox-color-text-2);
      font-size: 13px;
      font-weight: 600;
    }

    :host([state='complete']) .marker {
      background-color: var(--vox-color-brand-3);
      border-color: var(--vox-color-brand-3);
      color: var(--vox-color-text-inverse);
    }

    :host([state='current']) .marker {
      border-color: var(--vox-color-brand-3);
      color: var(--vox-color-brand-1);
    }

    .marker svg {
      width: 14px;
      height: 14px;
    }

    .label {
      font-size: 13px;
      color: var(--vox-color-text-2);
    }

    :host([state='current']) .label {
      font-weight: 600;
      color: var(--vox-color-text-1);
    }
  `;

  render() {
    return html`
      <div
        class="step"
        role="listitem"
        aria-current=${this.state === 'current' ? 'step' : 'false'}
      >
        <span class="marker">
          ${this.state === 'complete'
            ? html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="m4 12 5 5L20 6" />
              </svg>`
            : this.number}
        </span>
        <span class="label">${this.label}</span>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vox-step-indicator': VoxStepIndicator;
    'vox-step': VoxStep;
  }
}
