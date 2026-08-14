import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-icon.js';
import { ICON_PATHS } from './icon-paths.js';

const meta: Meta = {
  title: 'Components/Icon',
  parameters: {
    docs: {
      description: {
        component:
          '`<vox-icon>` renders one icon from the shared VoxBlocks set as inline SVG, so it inherits color like text.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

const names = Object.keys(ICON_PATHS) as Array<keyof typeof ICON_PATHS>;

export const AllIcons: Story = {
  render: () => html`<div
    style="display: grid; grid-template-columns: repeat(auto-fill, minmax(96px, 1fr)); gap: 0.75rem; margin: 1rem 0;"
  >
    ${names.map(
      (name) => html`<div
        style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"
      >
        <vox-icon name=${name} size="lg"></vox-icon>
        <code style="font-size: 11px;">${name}</code>
      </div>`,
    )}
  </div>`,
};

export const Sizes: Story = {
  render: () => html`<div style="display: flex; gap: 1rem; align-items: center; margin: 1rem 0;">
  <vox-icon name="search" size="sm"></vox-icon>
  <vox-icon name="search" size="md"></vox-icon>
  <vox-icon name="search" size="lg"></vox-icon>
</div>`,
};

export const Labeled: Story = {
  render: () => html`<div style="margin: 1rem 0;">
  <button style="display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.5rem 0.75rem;">
    <vox-icon name="delete" label="Delete"></vox-icon>
  </button>
</div>`,
};
