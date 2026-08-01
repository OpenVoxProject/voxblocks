import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-checkbox.js';

const meta: Meta = {
  title: 'Components/Forms/Checkbox',
  parameters: {
    docs: {
      description: {
        component: '`<vox-checkbox>` is a themed checkbox.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div style="display: grid; gap: 0.5rem; margin: 1rem 0;">
  <vox-checkbox checked>Subscribe to release announcements</vox-checkbox>
  <vox-checkbox>Also notify about beta builds</vox-checkbox>
  <vox-checkbox disabled>Unavailable option</vox-checkbox>
</div>`,
};
