import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-input-group.js';

const meta: Meta = {
  title: 'Components/Forms/Input Group',
  parameters: {
    docs: {
      description: {
        component: '`<vox-input-group>` joins inputs, selects, buttons, and text addons into one attached row. Plain `<span>` children render as text addons.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div style="display: grid; gap: 1rem; max-width: 28rem; margin: 1rem 0;">
  <vox-input-group>
    <vox-input aria-label="Search modules" placeholder="Search modules…"></vox-input>
    <vox-button>Search</vox-button>
  </vox-input-group>
  <vox-input-group>
    <span>https://</span>
    <vox-input aria-label="Site URL" placeholder="example.org"></vox-input>
  </vox-input-group>
</div>`,
};
