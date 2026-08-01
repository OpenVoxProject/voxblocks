import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-accordion.js';

const meta: Meta = {
  title: 'Components/Page Content/Accordion',
  parameters: {
    docs: {
      description: {
        component: '`<vox-accordion>` stacks expandable panels. Add `single` to keep at most one open.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div style="margin: 1rem 0;">
  <vox-accordion single>
    <vox-accordion-item heading="Is OpenVox compatible with Puppet?" open>
      <p>Yes — OpenVox is a drop-in replacement tracking the same module ecosystem.</p>
    </vox-accordion-item>
    <vox-accordion-item heading="How do I migrate?">
      <p>Swap the package repositories and upgrade; agents and server interoperate during transition.</p>
    </vox-accordion-item>
    <vox-accordion-item heading="Who maintains it?">
      <p>The Vox Pupuli community, under open governance.</p>
    </vox-accordion-item>
  </vox-accordion>
</div>`,
};
