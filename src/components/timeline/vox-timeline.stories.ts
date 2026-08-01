import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-timeline.js';

const meta: Meta = {
  title: 'Components/Page Content/Timeline',
  parameters: {
    docs: {
      description: {
        component: '`<vox-timeline>` presents dated events vertically.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div style="margin: 1rem 0;">
  <vox-timeline>
    <vox-timeline-item date="Nov 2024" heading="Fork announced">
      OpenVox forks from Puppet to keep an open, community-driven implementation alive.
    </vox-timeline-item>
    <vox-timeline-item date="Jan 2025" heading="First release">
      OpenVox 8.x packages published for all major platforms.
    </vox-timeline-item>
    <vox-timeline-item date="2026" heading="Growing ecosystem">
      OpenVoxDB, OpenFact, and OpenBolt round out the stack.
    </vox-timeline-item>
  </vox-timeline>
</div>`,
};
