import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-series-nav.js';

const meta: Meta = {
  title: 'Components/Navigation/Series Nav',
  parameters: {
    docs: {
      description: {
        component: '`<vox-series-nav>` provides previous/next links between pages in a series.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div style="margin: 1rem 0;">
  <vox-series-nav
    previous-href="#"
    previous-label="Installing the server"
    next-href="#"
    next-label="Configuring agents"
  ></vox-series-nav>
</div>`,
};
