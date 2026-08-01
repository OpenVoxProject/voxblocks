import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-callout.js';

const meta: Meta = {
  title: 'Components/Page Content/Callout',
  parameters: {
    docs: {
      description: {
        component: '`<vox-callout>` is an admonition block matching the custom containers used across the OpenVox docs.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Variants: Story = {
  render: () => html`<div style="display: grid; gap: 0.75rem; margin: 1rem 0;">
  <vox-callout variant="info"><p>Neutral background information.</p></vox-callout>
  <vox-callout variant="tip"><p>A helpful suggestion.</p></vox-callout>
  <vox-callout variant="warning"><p>Something to be careful about.</p></vox-callout>
  <vox-callout variant="danger"><p>A destructive or breaking consequence.</p></vox-callout>
</div>`,
};

export const CustomHeading: Story = {
  render: () => html`<div style="margin: 1rem 0;">
  <vox-callout variant="warning" heading="Deprecated since 8.0">
    <p>Use <code>openvox-agent</code> instead.</p>
  </vox-callout>
</div>`,
};
