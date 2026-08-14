import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-link-hub.js';

const meta: Meta = {
  title: 'Components/Page Content/Link Hub',
  parameters: {
    docs: {
      description: {
        component: '`<vox-link-hub>` is a grid of prominent links with descriptions, for hub and landing pages.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div style="margin: 1rem 0;">
  <vox-link-hub>
    <vox-link-hub-item href="#" heading="Getting started">
      <vox-icon slot="icon" name="book" size="sm"></vox-icon>
      Install OpenVox and apply your first manifest.
    </vox-link-hub-item>
    <vox-link-hub-item href="#" heading="Module development">
      <vox-icon slot="icon" name="module" size="sm"></vox-icon>
      Write, test, and publish community modules.
    </vox-link-hub-item>
    <vox-link-hub-item href="#" heading="Governance">
      <vox-icon slot="icon" name="ballot" size="sm"></vox-icon>
      How decisions get made in OpenVox.
    </vox-link-hub-item>
  </vox-link-hub>
</div>`,
};
