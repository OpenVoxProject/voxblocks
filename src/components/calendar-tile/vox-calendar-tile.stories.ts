import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-calendar-tile.js';

const meta: Meta = {
  title: 'Components/Page Content/Calendar Tile',
  parameters: {
    docs: {
      description: {
        component: '`<vox-calendar-tile>` is a compact date block for event listings.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div style="display: flex; gap: 1rem; align-items: center; margin: 1rem 0;">
  <vox-calendar-tile date="2026-09-18"></vox-calendar-tile>
  <div>
    <strong>VoxConf 2026</strong><br />
    <span style="color: var(--vp-c-text-2); font-size: 14px;">Community conference, online</span>
  </div>
</div>`,
};
