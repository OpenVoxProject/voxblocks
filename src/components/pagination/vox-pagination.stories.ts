import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-pagination.js';

const meta: Meta = {
  title: 'Components/Navigation/Pagination',
  parameters: {
    docs: {
      description: {
        component: '`<vox-pagination>` navigates numbered pages. Children are plain links, with the current page as a non-interactive `<span aria-current="page">`.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div style="margin: 1rem 0;">
  <vox-pagination>
    <a href="#" aria-label="Previous page">←</a>
    <a href="#">1</a>
    <span aria-current="page">2</span>
    <a href="#">3</a>
    <a href="#">4</a>
    <a href="#" aria-label="Next page">→</a>
  </vox-pagination>
</div>`,
};
