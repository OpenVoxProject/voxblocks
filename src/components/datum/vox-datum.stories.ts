import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-datum.js';
import '../icon/vox-icon.js';

const meta: Meta = {
  title: 'Components/Page Content/Datum',
  parameters: {
    docs: {
      description: {
        component: '`<vox-datum>` is a small labeled value with an optional icon — an owner, a date, a target host — for use inside record rows, cards, or wherever a compact data point is needed.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div style="display: flex; gap: 1rem; margin: 1rem 0;">
  <vox-datum name="User">
    <vox-icon slot="icon" name="person" size="sm"></vox-icon>
    J. Smith
  </vox-datum>
  <vox-datum name="Updated">
    <vox-icon slot="icon" name="calendar" size="sm"></vox-icon>
    April 1, 2021
  </vox-datum>
  <vox-datum name="Target">web01.example.com</vox-datum>
</div>`,
};
