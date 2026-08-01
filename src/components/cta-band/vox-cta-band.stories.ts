import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-cta-band.js';

const meta: Meta = {
  title: 'Components/Page Content/Cta Band',
  parameters: {
    docs: {
      description: {
        component: '`<vox-cta-band>` is a centered, full-width call-to-action panel — the closing pitch at the bottom of a page.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<vox-cta-band heading="Your infrastructure. Your community. Your platform.">
  <p>Install OpenVox in minutes and bring your existing Puppet code with you.</p>
  <div slot="actions">
    <vox-button href="#" variant="brand">Installation Guide</vox-button>
    <vox-button href="#" variant="alt">Join the Community</vox-button>
  </div>
</vox-cta-band>`,
};
