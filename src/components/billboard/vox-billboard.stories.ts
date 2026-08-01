import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-billboard.js';

const meta: Meta = {
  title: 'Components/Images/Billboard',
  parameters: {
    docs: {
      description: {
        component: '`<vox-billboard>` is a split media-and-content section for landing pages.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div style="margin: 1rem 0;">
  <vox-billboard heading="Community-maintained modules">
    <img slot="media" src="https://voxpupuli.org/images/vox.png" alt="" />
    <p>Vox Pupuli maintains hundreds of modules, tools, and gems — kept alive by a worldwide community of contributors.</p>
    <vox-button slot="actions">Browse modules</vox-button>
    <vox-cta slot="actions" href="#">How to contribute</vox-cta>
  </vox-billboard>
</div>`,
};
