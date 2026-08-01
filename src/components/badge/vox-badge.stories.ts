import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-badge.js';

const meta: Meta = {
  title: 'Components/Page Content/Badge',
  parameters: {
    docs: {
      description: {
        component: '`<vox-badge>` is a small status pill for version labels, statuses, and deprecation notices.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Variants: Story = {
  render: () => html`<div style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin: 1rem 0;">
  <vox-badge variant="brand">v8.1.0</vox-badge>
  <vox-badge variant="tip">Stable</vox-badge>
  <vox-badge variant="warning">Deprecated</vox-badge>
  <vox-badge variant="danger">Breaking</vox-badge>
  <vox-badge variant="neutral">Draft</vox-badge>
</div>`,
};
