import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-dropdown.js';

const meta: Meta = {
  title: 'Components/Overlays/Dropdown',
  parameters: {
    docs: {
      description: {
        component: '`<vox-dropdown>` is a menu button. Entries are plain `<a>` or `<button>` children; `<hr>` draws a separator.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div style="margin: 1rem 0; min-height: 180px;">
  <vox-dropdown label="Resources">
    <a href="#">Documentation</a>
    <a href="#">Module catalog</a>
    <hr />
    <button type="button">Copy install command</button>
  </vox-dropdown>
</div>`,
};
