import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-switch.js';

const meta: Meta = {
  title: 'Components/Forms/Switch',
  parameters: {
    docs: {
      description: {
        component: '`<vox-switch>` is a toggle for on/off settings, announced as a switch to assistive technology.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div style="display: grid; gap: 0.5rem; margin: 1rem 0;">
  <vox-switch checked>Enable dark mode</vox-switch>
  <vox-switch>Send anonymous usage stats</vox-switch>
</div>`,
};
