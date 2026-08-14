import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-stat.js';

const meta: Meta = {
  title: 'Components/Page Content/Stat',
  parameters: {
    docs: {
      description: {
        component: '`<vox-stat>` shows a large statistic with a label.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<vox-grid min="160px" style="margin: 1rem 0;">
  <vox-stat value="450+" label="Modules">Community-maintained</vox-stat>
  <vox-stat value="140" label="Contributors">Active this year</vox-stat>
  <vox-stat value="2" label="Years">Since the OpenVox fork</vox-stat>
</vox-grid>`,
};
