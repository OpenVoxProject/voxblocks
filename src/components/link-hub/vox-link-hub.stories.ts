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
      Install OpenVox and apply your first manifest.
    </vox-link-hub-item>
    <vox-link-hub-item href="#" heading="Module development">
      Write, test, and publish community modules.
    </vox-link-hub-item>
    <vox-link-hub-item href="#" heading="Governance">
      How decisions get made in Vox Pupuli.
    </vox-link-hub-item>
  </vox-link-hub>
</div>`,
};
