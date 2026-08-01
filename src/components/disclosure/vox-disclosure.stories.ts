import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-disclosure.js';

const meta: Meta = {
  title: 'Components/Overlays/Disclosure',
  parameters: {
    docs: {
      description: {
        component: '`<vox-disclosure>` is a single show/hide toggle for supplementary content.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div style="margin: 1rem 0;">
  <vox-disclosure summary="Show advanced options">
    <p>Environment caching, code manager settings, and other knobs most users never touch.</p>
  </vox-disclosure>
</div>`,
};
