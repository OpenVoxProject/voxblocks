---
title: "Dropdown"
---

# Dropdown

`<vox-dropdown>` is a menu button. Entries are plain `<a>` or `<button>` children; `<hr>` draws a separator.

<div style="margin: 1rem 0; min-height: 180px;">
  <vox-dropdown label="Resources">
    <a href="#">Documentation</a>
    <a href="#">Module catalog</a>
    <hr />
    <button type="button">Copy install command</button>
  </vox-dropdown>
</div>

```html
<vox-dropdown label="Resources">
  <a href="/docs">Documentation</a>
  <a href="/modules">Module catalog</a>
  <hr />
  <button type="button">Copy install command</button>
</vox-dropdown>
```

Arrow keys move through entries; Escape and outside clicks close the menu.

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | `Menu` | Trigger button text |
| `open` | `boolean` | `false` | Menu visibility |
