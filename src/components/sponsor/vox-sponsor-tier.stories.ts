import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-sponsor.js';

const meta: Meta = {
  title: 'Components/Page Content/Sponsor',
  parameters: {
    docs: {
      description: {
        component: '`<vox-sponsor-tier>` groups `<vox-sponsor>` cards under a heading, for',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Basic: Story = {
  render: () => html`<div style="margin: 1rem 0;">
  <vox-sponsor-tier heading="Current Sponsors">
    <span slot="description">Ongoing monthly or annual support.</span>
    <vox-sponsor name="Example Cloud" href="#">$500/month · CI infrastructure</vox-sponsor>
    <vox-sponsor name="Acme Hosting" href="#">$100/month</vox-sponsor>
    <vox-sponsor name="Anonymous">$50/month</vox-sponsor>
  </vox-sponsor-tier>
</div>`,
};

export const Logo: Story = {
  render: () => html`<div style="margin: 1rem 0;">
  <vox-sponsor-tier heading="Current Sponsors">
    <vox-sponsor name="OpenVox" href="#" logo="https://placehold.co/120x40?text=Logo">
      $1000/month · Dedicated servers
    </vox-sponsor>
    <vox-sponsor name="Puppet Community Fund" href="#" logo="https://placehold.co/120x40?text=Logo">
      $250/month
    </vox-sponsor>
  </vox-sponsor-tier>
</div>`,
};

export const MultipleTiers: Story = {
  render: () => html`<div style="margin: 1rem 0; display: flex; flex-direction: column; gap: 2rem;">
  <vox-sponsor-tier heading="Current Sponsors">
    <vox-sponsor name="Example Cloud" href="#">$500/month · CI infrastructure</vox-sponsor>
    <vox-sponsor name="Acme Hosting" href="#">$100/month</vox-sponsor>
  </vox-sponsor-tier>
  <vox-sponsor-tier heading="One Time Sponsors">
    <vox-sponsor name="Widgets Inc" href="#">$250 one-time gift</vox-sponsor>
  </vox-sponsor-tier>
  <vox-sponsor-tier heading="Former Sponsors">
    <vox-sponsor name="Legacy Systems">Supported 2022–2024</vox-sponsor>
  </vox-sponsor-tier>
</div>`,
};
