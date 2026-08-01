import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-dialog.js';

const meta: Meta = {
  title: 'Components/Overlays/Dialog',
  parameters: {
    docs: {
      description: {
        component: '`<vox-dialog>` is a modal built on the native `<dialog>` element — focus trapping and Escape-to-close come from the platform.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div style="margin: 1rem 0;">
  <vox-button onclick="document.getElementById('demo-dialog').show()">Open dialog</vox-button>
  <vox-dialog id="demo-dialog" heading="Delete module?" light-dismiss>
    <p>This removes <strong>puppet-nginx</strong> from your namespace. Published versions stay on the Forge.</p>
    <vox-button slot="footer" variant="alt" onclick="document.getElementById('demo-dialog').close()">Cancel</vox-button>
    <vox-button slot="footer" variant="danger" onclick="document.getElementById('demo-dialog').close()">Delete</vox-button>
  </vox-dialog>
</div>`,
};
