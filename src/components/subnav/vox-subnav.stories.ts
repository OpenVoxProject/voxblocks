import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-subnav.js';

const meta: Meta = {
  title: 'Components/Navigation/Subnav',
  parameters: {
    docs: {
      description: {
        component: '`<vox-subnav>` is a horizontal secondary navigation bar.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div style="margin: 1rem 0;">
  <vox-subnav>
    <a href="#" aria-current="page">Overview</a>
    <a href="#">Installation</a>
    <a href="#">Configuration</a>
    <a href="#">Troubleshooting</a>
  </vox-subnav>
</div>`,
};
