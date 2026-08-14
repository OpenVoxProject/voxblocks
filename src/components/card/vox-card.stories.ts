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
    <span slot="icon"><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="13" y="6" width="22" height="11" rx="2.5"/><line x1="13" y1="11.5" x2="35" y2="11.5" stroke-width="1.4"/><path d="M24 17 L14 34 M24 17 L24 34 M24 17 L34 34"/><circle cx="14" cy="36" r="2.4" fill="currentColor" stroke="none"/><circle cx="24" cy="36" r="2.4" fill="currentColor" stroke="none"/><circle cx="34" cy="36" r="2.4" fill="currentColor" stroke="none"/></svg></span>
    Installation and configuration of the server components.
  </vox-card>
  <vox-card heading="OpenVoxDB" href="https://docs.openvoxproject.org">
    <span slot="icon"><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="8" width="21" height="5.5" rx="1.8"/><rect x="5" y="17" width="21" height="5.5" rx="1.8"/><rect x="5" y="26" width="21" height="5.5" rx="1.8"/><circle cx="33" cy="33" r="7"/><line x1="38" y1="38" x2="43.5" y2="43.5"/></svg></span>
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
    <span slot="icon"><vox-icon name="blocks" size="lg"></vox-icon></span>
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
