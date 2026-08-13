import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-button.js';

const meta: Meta = {
  title: 'Components/Actions/Button',
  parameters: {
    docs: {
      description: {
        component: '`<vox-button>` renders an accessible button, or a link styled as a button when `href` is set.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Variants: Story = {
  render: () => html`<div style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin: 1rem 0;">
  <vox-button variant="brand">Brand</vox-button>
  <vox-button variant="alt">Alt</vox-button>
  <vox-button variant="danger">Danger</vox-button>
  <vox-button variant="ghost">Ghost</vox-button>
</div>`,
};

export const Sizes: Story = {
  render: () => html`<div style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap; margin: 1rem 0;">
  <vox-button size="sm">Small</vox-button>
  <vox-button size="md">Medium</vox-button>
  <vox-button size="lg">Large</vox-button>
</div>`,
};

export const AsALink: Story = {
  render: () => html`<div style="margin: 1rem 0;">
  <vox-button href="https://voxpupuli.org/openvox/" target="_blank">Visit OpenVox</vox-button>
</div>`,
};

export const Disabled: Story = {
  render: () => html`<div style="margin: 1rem 0;">
  <vox-button disabled>Disabled</vox-button>
</div>`,
};
