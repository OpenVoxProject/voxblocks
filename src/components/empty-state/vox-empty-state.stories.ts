import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-empty-state.js';

const meta: Meta = {
  title: 'Components/Page Content/Empty State',
  parameters: {
    docs: {
      description: {
        component: '`<vox-empty-state>` is a placeholder for views with nothing to show yet.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div style="margin: 1rem 0;">
  <vox-empty-state heading="No modules yet">
    <span slot="icon"><vox-icon name="module" size="xl"></vox-icon></span>
    You haven't published any modules. Your first one is easier than you think.
    <vox-button slot="actions" size="sm">Publish a module</vox-button>
  </vox-empty-state>
</div>`,
};
