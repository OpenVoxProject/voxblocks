import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-step-indicator.js';

const meta: Meta = {
  title: 'Components/Page Content/Step Indicator',
  parameters: {
    docs: {
      description: {
        component: '`<vox-step-indicator>` shows progress through a multi-step process.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div style="margin: 1.5rem 0;">
  <vox-step-indicator>
    <vox-step label="Choose plan" state="complete"></vox-step>
    <vox-step label="Configure" state="current"></vox-step>
    <vox-step label="Review" state="upcoming"></vox-step>
    <vox-step label="Deploy" state="upcoming"></vox-step>
  </vox-step-indicator>
</div>`,
};
