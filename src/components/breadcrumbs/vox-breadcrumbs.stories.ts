import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-breadcrumbs.js';

const meta: Meta = {
  title: 'Components/Navigation/Breadcrumbs',
  parameters: {
    docs: {
      description: {
        component: '`<vox-breadcrumbs>` shows a trail of parent pages. Children are plain links; the current page is a `<span aria-current="page">`.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div style="margin: 1rem 0;">
  <vox-breadcrumbs>
    <a href="#">Home</a>
    <a href="#">Modules</a>
    <span aria-current="page">puppet-nginx</span>
  </vox-breadcrumbs>
</div>`,
};
