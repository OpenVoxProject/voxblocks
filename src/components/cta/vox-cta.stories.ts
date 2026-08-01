import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-cta.js';

const meta: Meta = {
  title: 'Components/Actions/Cta',
  parameters: {
    docs: {
      description: {
        component: '`<vox-cta>` is an emphasized link with a trailing arrow.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div style="margin: 1rem 0;">
  <vox-cta href="https://voxpupuli.org">Explore the module catalog</vox-cta>
</div>`,
};
