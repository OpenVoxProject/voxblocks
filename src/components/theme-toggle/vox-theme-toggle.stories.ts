import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-theme-toggle.js';

const meta: Meta = {
  title: 'Components/Actions/Theme Toggle',
  parameters: {
    docs: {
      description: {
        component: '`<vox-theme-toggle>` is a self-contained light/dark switch. It reads and writes `data-vox-theme` on `<html>` and persists the choice to `localStorage`. Click it — it actually re-themes this preview frame, since the toolbar Theme control and this component both just reflect the same document attribute.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<vox-theme-toggle></vox-theme-toggle>`,
};
