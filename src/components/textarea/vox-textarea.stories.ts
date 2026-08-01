import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-textarea.js';

const meta: Meta = {
  title: 'Components/Forms/Textarea',
  parameters: {
    docs: {
      description: {
        component: '`<vox-textarea>` is a multi-line text input.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div style="max-width: 28rem; margin: 1rem 0;">
  <vox-textarea label="Description" rows="4" placeholder="What does this module do?" note="Markdown is supported."></vox-textarea>
</div>`,
};
