import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-input.js';

const meta: Meta = {
  title: 'Components/Forms/Input',
  parameters: {
    docs: {
      description: {
        component: '`<vox-input>` is a single-line text input that participates in native form submission (via ElementInternals).',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div style="display: grid; gap: 1rem; max-width: 24rem; margin: 1rem 0;">
  <vox-input label="Module name" placeholder="puppet-nginx" note="Lowercase, hyphen-separated."></vox-input>
  <vox-input label="Email" type="email" required></vox-input>
  <vox-input label="Read only" value="openvox" readonly></vox-input>
</div>`,
};

export const Types: Story = {
  render: () => html`<div style="display: grid; gap: 1rem; max-width: 24rem; margin: 1rem 0;">
  <vox-input label="Agent count" type="number" min="1" max="64" step="1" value="8" note="Between 1 and 64."></vox-input>
  <vox-input label="Run after" type="date" min="2026-01-01" max="2026-12-31"></vox-input>
  <vox-input label="Window opens" type="time" min="06:00" max="22:00" step="900"></vox-input>
  <vox-input label="Contact" type="tel" pattern="[0-9 +()-]{7,}" inputmode="tel" placeholder="+1 555 0100"></vox-input>
  <vox-input label="Short name" maxlength="12" note="12 characters or fewer."></vox-input>
</div>`,
};
