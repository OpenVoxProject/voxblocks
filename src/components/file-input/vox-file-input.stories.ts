import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-file-input.js';

const meta: Meta = {
  title: 'Components/Forms/File Input',
  parameters: {
    docs: {
      description: {
        component: '`<vox-file-input>` is a themed file picker that shows the selected file names and submits real files with the form.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div style="margin: 1rem 0;">
  <vox-file-input label="Module tarball" accept=".tar.gz" button-label="Choose a file"></vox-file-input>
</div>`,
};
