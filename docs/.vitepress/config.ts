import { defineConfig } from 'vitepress';

export default defineConfig({
  // Project pages are served under https://<org>.github.io/voxblocks/.
  // Remove this (or set to '/') if the site moves to a custom domain.
  base: '/voxblocks/',
  title: 'VoxBlocks',
  description:
    'Web components for Vox Pupuli and OpenVox community web sites',
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('vox-'),
      },
    },
  },
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Components', link: '/components/button' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Design Tokens', link: '/guide/design-tokens' },
        ],
      },
      {
        text: 'Actions',
        collapsed: false,
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Call to Action', link: '/components/cta' },
        ],
      },
      {
        text: 'Forms',
        collapsed: false,
        items: [
          { text: 'Checkbox', link: '/components/checkbox' },
          { text: 'File Input', link: '/components/file-input' },
          { text: 'Input Group', link: '/components/input-group' },
          { text: 'Radio Input', link: '/components/radio' },
          { text: 'Select Input', link: '/components/select' },
          { text: 'Switch', link: '/components/switch' },
          { text: 'Text Input', link: '/components/text-input' },
          { text: 'Textarea', link: '/components/textarea' },
        ],
      },
      {
        text: 'Images',
        collapsed: false,
        items: [
          { text: 'Avatar', link: '/components/avatar' },
          { text: 'Billboard', link: '/components/billboard' },
        ],
      },
      {
        text: 'Navigation',
        collapsed: false,
        items: [
          { text: 'Breadcrumbs', link: '/components/breadcrumbs' },
          { text: 'Header', link: '/components/header' },
          { text: 'Pagination', link: '/components/pagination' },
          { text: 'Series Nav', link: '/components/series-nav' },
          { text: 'Sidenav', link: '/components/sidenav' },
          { text: 'Subnav', link: '/components/subnav' },
          { text: 'Tabs', link: '/components/tabs' },
        ],
      },
      {
        text: 'Overlays',
        collapsed: false,
        items: [
          { text: 'Dialog', link: '/components/dialog' },
          { text: 'Disclosure', link: '/components/disclosure' },
          { text: 'Dropdown', link: '/components/dropdown' },
        ],
      },
      {
        text: 'Page Content',
        collapsed: false,
        items: [
          { text: 'Accordion', link: '/components/accordion' },
          { text: 'Alert', link: '/components/alert' },
          { text: 'Badge', link: '/components/badge' },
          { text: 'Calendar Tile', link: '/components/calendar-tile' },
          { text: 'Callout', link: '/components/callout' },
          { text: 'Card', link: '/components/card' },
          { text: 'Empty State', link: '/components/empty-state' },
          { text: 'Footer', link: '/components/footer' },
          { text: 'Grid', link: '/components/grid' },
          { text: 'Hero', link: '/components/hero' },
          { text: 'Link Hub', link: '/components/link-hub' },
          { text: 'List', link: '/components/list' },
          { text: 'Loading Indicator', link: '/components/loader' },
          { text: 'Quote', link: '/components/quote' },
          { text: 'Stat', link: '/components/stat' },
          { text: 'Step Indicator', link: '/components/step-indicator' },
          { text: 'Table', link: '/components/table' },
          { text: 'Timeline', link: '/components/timeline' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/avitacco/voxblocks' },
    ],
    footer: {
      message: 'Released under the Apache-2.0 License.',
      copyright: 'A Vox Pupuli community project (perhaps!)',
    },
  },
});
