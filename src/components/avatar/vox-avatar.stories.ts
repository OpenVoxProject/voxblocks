import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-avatar.js';

const meta: Meta = {
  title: 'Components/Images/Avatar',
  parameters: {
    docs: {
      description: {
        component: '`<vox-avatar>` shows a user image, falling back to initials.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div style="display: flex; gap: 0.75rem; align-items: center; margin: 1rem 0;">
  <vox-avatar size="sm" initials="PN" alt="P. Nair"></vox-avatar>
  <vox-avatar size="md" initials="OV" alt="OpenVox"></vox-avatar>
  <vox-avatar size="lg" initials="KM" alt="K. Mensah"></vox-avatar>
  <vox-avatar size="xl" src="https://avatars.githubusercontent.com/u/188505547?s=160" alt="OpenVox logo"></vox-avatar>
</div>`,
};
