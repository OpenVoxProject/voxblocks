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
