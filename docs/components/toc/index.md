---
title: "Table of Contents"
---

# Table of Contents

`<vox-toc>` renders an in-page heading outline, in the style of the OpenVox docs "On this page" panel. Nest `<vox-toc-item>` for sub-headings via the `children` slot, and set `current` on the active section.

<div style="max-width: 240px; margin: 1rem 0; padding: 1rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;">
  <vox-toc heading="On this page">
    <vox-toc-item href="#overview">Overview</vox-toc-item>
    <vox-toc-item href="#palette" current>
      Palette
      <vox-toc-item slot="children" href="#soft-badge">Soft badge</vox-toc-item>
      <vox-toc-item slot="children" href="#solid-fill">Solid fill</vox-toc-item>
    </vox-toc-item>
    <vox-toc-item href="#usage">Usage</vox-toc-item>
  </vox-toc>
</div>

```html
<vox-toc heading="On this page">
  <vox-toc-item href="#overview">Overview</vox-toc-item>
  <vox-toc-item href="#palette" current>
    Palette
    <vox-toc-item slot="children" href="#soft-badge">Soft badge</vox-toc-item>
    <vox-toc-item slot="children" href="#solid-fill">Solid fill</vox-toc-item>
  </vox-toc-item>
  <vox-toc-item href="#usage">Usage</vox-toc-item>
</vox-toc>
```

`vox-toc` doesn't read the page's headings for you — build `items` from whatever heading data your framework already tracks (e.g. VitePress's `useSidebar()`/route data) and re-render on scroll to keep `current` in sync.

## API

### `vox-toc`

| Attribute | Type | Description |
| --- | --- | --- |
| `heading` | `string` | Panel title. Default `"On this page"`. |

### `vox-toc-item`

| Attribute | Type | Description |
| --- | --- | --- |
| `href` | `string` | Link target, usually a `#heading-id`. |
| `current` | `boolean` | Marks the active section. |

| Slot | Description |
| --- | --- |
| (default) | Link text. |
| `children` | Nested `<vox-toc-item>` elements for sub-headings. |
