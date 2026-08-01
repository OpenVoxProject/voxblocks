import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-hero.js';

const meta: Meta = {
  title: 'Components/Page Content/Hero',
  parameters: {
    docs: {
      description: {
        component: '`<vox-hero>` is a page-title header section.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div style="margin: 1rem 0;">
  <vox-hero eyebrow="Documentation" heading="OpenVox Server">
    Everything you need to install, configure, and operate the OpenVox server components.
    <vox-button slot="actions">Get started</vox-button>
    <vox-button slot="actions" variant="alt">Release notes</vox-button>
  </vox-hero>
</div>`,
};
