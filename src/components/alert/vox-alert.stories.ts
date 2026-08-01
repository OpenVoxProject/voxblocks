import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-alert.js';

const meta: Meta = {
  title: 'Components/Page Content/Alert',
  parameters: {
    docs: {
      description: {
        component: '`<vox-alert>` is a page-level notification, optionally dismissible. For static advisory text within prose, use [Callout](./callout).',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div style="display: grid; gap: 0.75rem; margin: 1rem 0;">
  <vox-alert variant="info" heading="Heads up"><p>OpenVox 8.2 is now the default.</p></vox-alert>
  <vox-alert variant="success" heading="Published"><p>Your module is live on the Forge.</p></vox-alert>
  <vox-alert variant="warning" heading="Maintenance window"><p>The Forge API will be read-only on Saturday.</p></vox-alert>
  <vox-alert variant="danger" heading="Build failed" dismissible><p>Check the CI logs for details. This one is dismissible.</p></vox-alert>
</div>`,
};
