import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-quote.js';

const meta: Meta = {
  title: 'Components/Page Content/Quote',
  parameters: {
    docs: {
      description: {
        component: '`<vox-quote>` is a pull quote with optional attribution.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div style="margin: 1rem 0; max-width: 36rem;">
  <vox-quote attribution="A happy operator" detail="Somewhere in production">
    Migrating to OpenVox was the least dramatic infrastructure change we made all year.
  </vox-quote>
</div>`,
};
