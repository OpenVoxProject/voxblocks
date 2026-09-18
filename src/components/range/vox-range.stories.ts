import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-range.js';

const meta: Meta = {
  title: 'Components/Forms/Range',
  parameters: {
    docs: {
      description: {
        component: '`<vox-range>` is a slider for picking a number from a range. It wraps a native `<input type="range">`, so keyboard support and screen-reader value announcements come from the platform.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div style="display: grid; gap: 1.5rem; max-width: 24rem; margin: 1rem 0;">
  <vox-range label="Concurrency" min="1" max="16" step="1" value="4" show-value></vox-range>
  <vox-range label="Memory limit" min="256" max="4096" step="256" value="1024" unit="MB" show-value note="Applied per agent run."></vox-range>
  <vox-range label="Disabled" value="30" show-value disabled></vox-range>
</div>`,
};
