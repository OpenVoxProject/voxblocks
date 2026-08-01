import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-card.js';

const meta: Meta = {
  title: 'Components/Page Content/Card',
  parameters: {
    docs: {
      description: {
        component: '`<vox-card>` is a feature tile in the style of the OpenVox docs landing page. With `href` the whole card becomes one link.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Basic: Story = {
  render: () => html`<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.75rem; margin: 1rem 0;">
  <vox-card heading="OpenVox Server" href="https://docs.openvoxproject.org">
    <span slot="icon">⚙️</span>
    Installation and configuration of the server components.
  </vox-card>
  <vox-card heading="OpenVoxDB" href="https://docs.openvoxproject.org">
    <span slot="icon">💾</span>
    Store and query infrastructure data.
  </vox-card>
  <vox-card heading="Community">
    Cards without an href render as static tiles.
  </vox-card>
</div>`,
};

export const Badge: Story = {
  render: () => html`<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.75rem; margin: 1rem 0;">
  <vox-card heading="Design Patterns">
    <span slot="icon">🧱</span>
    <vox-badge slot="badge" variant="danger">Pro</vox-badge>
    Grab-and-go patterns for common site, app, and online product workflows.
  </vox-card>
  <vox-card heading="puppetdb">
    <span slot="badge">8.1.0</span>
    Installs PostgreSQL and PuppetDB, sets up the connection to Puppet master.
  </vox-card>
</div>`,
};

export const Footer: Story = {
  render: () => html`<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.75rem; margin: 1rem 0;">
  <vox-card heading="puppetdb">
    <span slot="badge">8.1.0</span>
    Installs PostgreSQL and PuppetDB, sets up the connection to Puppet master.
    <span slot="footer">313,347,865 downloads</span>
  </vox-card>
  <vox-card heading="apache">
    <span slot="badge">12.0.1</span>
    Installs and configures Apache HTTP Server, including virtual hosts, modules, and SSL/TLS settings for websites.
    <span slot="footer">204,981,112 downloads</span>
  </vox-card>
</div>`,
};
