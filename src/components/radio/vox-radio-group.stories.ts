import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-radio-group.js';
import './vox-radio.js';

const meta: Meta = {
  title: 'Components/Forms/Radio',
  parameters: {
    docs: {
      description: {
        component: '`<vox-radio-group>` manages a set of `<vox-radio>` options: selection, arrow-key navigation, and the submitted form value.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div style="max-width: 24rem; margin: 1rem 0;">
  <vox-radio-group label="Install method" value="pkg">
    <vox-radio value="pkg">System packages</vox-radio>
    <vox-radio value="gem">Ruby gem</vox-radio>
    <vox-radio value="src" disabled>From source</vox-radio>
  </vox-radio-group>
</div>`,
};
