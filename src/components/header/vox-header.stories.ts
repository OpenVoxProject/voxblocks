import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-header.js';

const meta: Meta = {
  title: 'Components/Navigation/Header',
  parameters: {
    docs: {
      description: {
        component: '`<vox-header>` is a site header with brand, primary nav, and an actions area.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div style="margin: 1rem 0; border: 1px solid var(--vp-c-divider); border-radius: 8px; overflow: hidden;">
  <vox-header site-title="Vox Pupuli" href="#">
    <a href="#" aria-current="page">Modules</a>
    <a href="#">Docs</a>
    <a href="#">Blog</a>
    <vox-button slot="actions" size="sm" variant="alt">Sponsor</vox-button>
  </vox-header>
</div>`,
};
