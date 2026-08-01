import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-grid.js';

const meta: Meta = {
  title: 'Components/Page Content/Grid',
  parameters: {
    docs: {
      description: {
        component: '`<vox-grid>` is a responsive CSS-grid container. Columns auto-fit to the `min` width by default; `cols` fixes the count.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div style="margin: 1rem 0;">
  <vox-grid min="180px">
    <vox-card heading="Auto-fit A">Resizes with the viewport.</vox-card>
    <vox-card heading="Auto-fit B">Resizes with the viewport.</vox-card>
    <vox-card heading="Auto-fit C">Resizes with the viewport.</vox-card>
  </vox-grid>
</div>`,
};
