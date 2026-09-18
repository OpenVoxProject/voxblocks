---
title: "Subnav"
---

# Subnav

`<vox-subnav>` is a horizontal secondary navigation bar.

<div style="margin: 1rem 0;">
  <vox-subnav>
    <a href="#" aria-current="page">Overview</a>
    <a href="#">Installation</a>
    <a href="#">Configuration</a>
    <a href="#">Troubleshooting</a>
  </vox-subnav>
</div>

<vox-code-block language="html">
&lt;vox-subnav label="Server docs"&gt;
  &lt;a href="/server" aria-current="page"&gt;Overview&lt;/a&gt;
  &lt;a href="/server/install"&gt;Installation&lt;/a&gt;
&lt;/vox-subnav&gt;
</vox-code-block>

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | `Secondary` | Accessible nav name |
