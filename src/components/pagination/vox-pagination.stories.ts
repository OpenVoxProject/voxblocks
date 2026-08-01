import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-pagination.js';

const meta: Meta = {
  title: 'Components/Navigation/Pagination',
  parameters: {
    docs: {
      description: {
        component: '`<vox-pagination>` navigates numbered pages. Children are plain links; mark the current one with `aria-current="page"`.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div style="margin: 1rem 0;">
  <vox-pagination>
    <a href="#">←</a>
    <a href="#">1</a>
    <a href="#" aria-current="page">2</a>
    <a href="#">3</a>
    <a href="#">4</a>
    <a href="#">→</a>
  </vox-pagination>
</div>`,
};
