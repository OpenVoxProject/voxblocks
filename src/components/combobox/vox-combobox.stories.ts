import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-combobox.js';

const meta: Meta = {
  title: 'Components/Forms/Combobox',
  parameters: {
    docs: {
      description: {
        component: '`<vox-combobox>` is a text input that filters a list of options as you type. It implements the ARIA 1.2 combobox pattern: focus stays on the input and the active option is tracked with `aria-activedescendant`.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div style="display: grid; gap: 1.5rem; max-width: 24rem; margin: 1rem 0;">
  <vox-combobox label="Module" placeholder="Start typing…" note="Arrow keys to browse, Enter to pick.">
    <option value="nginx">puppet-nginx</option>
    <option value="apache">puppet-apache</option>
    <option value="postgresql">puppet-postgresql</option>
    <option value="firewall">puppet-firewall</option>
    <option value="archive" disabled>puppet-archive (deprecated)</option>
  </vox-combobox>
  <vox-combobox label="Tag" allow-custom placeholder="Pick one or type your own">
    <option value="bug">bug</option>
    <option value="enhancement">enhancement</option>
    <option value="docs">docs</option>
  </vox-combobox>
</div>`,
};
