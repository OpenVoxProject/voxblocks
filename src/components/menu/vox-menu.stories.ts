import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-menu.js';
import '../avatar/vox-avatar.js';

const meta: Meta = {
  title: 'Components/Overlays/Menu',
  parameters: {
    docs: {
      description: {
        component: '`<vox-menu>` is an overlay menu anchored to an arbitrary trigger, e.g. an avatar. Entries are plain `<a>` or `<button>` children; `<hr>` draws a separator.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div style="display: flex; justify-content: flex-end; margin: 1rem 0; min-height: 220px;">
  <vox-menu label="Account menu">
    <vox-avatar slot="trigger" size="sm" initials="UN" alt="Username"></vox-avatar>
    <a href="#">Profile</a>
    <a href="#">Settings</a>
    <hr />
    <button type="button">Log out</button>
  </vox-menu>
</div>`,
};
