import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-tabs.js';

const meta: Meta = {
  title: 'Components/Navigation/Tabs',
  parameters: {
    docs: {
      description: {
        component: '`<vox-tabs>` shows one panel at a time. Tabs go in the `tab` slot; each `panel` attribute names the `<vox-tab-panel>` it controls.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div style="margin: 1rem 0;">
  <vox-tabs>
    <vox-tab slot="tab" panel="deb" selected>Debian / Ubuntu</vox-tab>
    <vox-tab slot="tab" panel="rpm">RHEL / Fedora</vox-tab>
    <vox-tab-panel name="deb"><code>apt install openvox-agent</code></vox-tab-panel>
    <vox-tab-panel name="rpm"><code>dnf install openvox-agent</code></vox-tab-panel>
  </vox-tabs>
</div>`,
};
