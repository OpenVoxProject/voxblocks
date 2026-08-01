import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-select.js';

const meta: Meta = {
  title: 'Components/Forms/Select',
  parameters: {
    docs: {
      description: {
        component: '`<vox-select>` wraps a native select. Options are plain `<option>` / `<optgroup>` children.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div style="max-width: 24rem; margin: 1rem 0;">
  <vox-select label="Operating system">
    <option value="">Choose one…</option>
    <option value="deb">Debian / Ubuntu</option>
    <option value="rpm">RHEL / Fedora</option>
    <option value="arch">Arch</option>
  </vox-select>
</div>`,
};
