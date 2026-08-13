import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-sidenav.js';

const meta: Meta = {
  title: 'Components/Navigation/Sidenav',
  parameters: {
    docs: {
      description: {
        component: '`<vox-sidenav>` is a vertical section navigation in the style of the OpenVox docs sidebar, with collapsible groups.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div style="margin: 1rem 0; max-width: 16rem;">
  <vox-sidenav>
    <vox-sidenav-item href="#" current>
      <vox-icon slot="icon" name="dashboard" size="sm"></vox-icon>
      Overview
    </vox-sidenav-item>
    <vox-sidenav-group heading="Installation" open>
      <vox-sidenav-item href="#">Debian / Ubuntu</vox-sidenav-item>
      <vox-sidenav-item href="#">RHEL / Fedora</vox-sidenav-item>
    </vox-sidenav-group>
    <vox-sidenav-group heading="Configuration">
      <vox-sidenav-item href="#">Server settings</vox-sidenav-item>
      <vox-sidenav-item href="#">Agent settings</vox-sidenav-item>
    </vox-sidenav-group>
  </vox-sidenav>
</div>`,
};
