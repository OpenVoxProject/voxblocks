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

<vox-code-block language="html">
&lt;vox-dropdown label="Resources"&gt;
  &lt;a href="/docs"&gt;Documentation&lt;/a&gt;
  &lt;a href="/modules"&gt;Module catalog&lt;/a&gt;
  &lt;hr /&gt;
  &lt;button type="button"&gt;Copy install command&lt;/button&gt;
&lt;/vox-dropdown&gt;
</vox-code-block>

Arrow keys move through entries; Escape and outside clicks close the menu.

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | `Menu` | Trigger button text |
| `open` | `boolean` | `false` | Menu visibility |
