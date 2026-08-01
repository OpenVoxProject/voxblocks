import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-loader.js';

const meta: Meta = {
  title: 'Components/Page Content/Loader',
  parameters: {
    docs: {
      description: {
        component: '`<vox-loader>` is a spinner; its `label` is announced to screen readers.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div style="display: flex; gap: 1.5rem; align-items: center; margin: 1rem 0;">
  <vox-loader size="sm"></vox-loader>
  <vox-loader size="md"></vox-loader>
  <vox-loader size="lg" label="Fetching modules"></vox-loader>
</div>`,
};
