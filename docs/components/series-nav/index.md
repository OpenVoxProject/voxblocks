---
title: "Series Nav"
---

# Series Nav

`<vox-series-nav>` provides previous/next links between pages in a series.

<div style="margin: 1rem 0;">
  <vox-series-nav
    previous-href="#"
    previous-label="Installing the server"
    next-href="#"
    next-label="Configuring agents"
  ></vox-series-nav>
</div>

<vox-code-block language="html">
&lt;vox-series-nav
  previous-href="/install"
  previous-label="Installing the server"
  next-href="/agents"
  next-label="Configuring agents"
&gt;&lt;/vox-series-nav&gt;
</vox-code-block>

## API

| Attribute | Type | Description |
| --- | --- | --- |
| `previous-href` / `previous-label` | `string` | Previous page (omit href to hide) |
| `next-href` / `next-label` | `string` | Next page (omit href to hide) |
