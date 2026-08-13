---
title: "Header"
---

# Header

`<vox-header>` is a site header with brand, primary nav, and an actions area.

<div style="margin: 1rem 0; border: 1px solid var(--vox-color-divider); border-radius: 8px; overflow: hidden;">
  <vox-header site-title="OpenVox" href="#">
    <a href="#" aria-current="page">Modules</a>
    <a href="#">Docs</a>
    <a href="#">Blog</a>
    <vox-button slot="actions" size="sm" variant="alt">Sponsor</vox-button>
  </vox-header>
</div>

```html
<vox-header site-title="OpenVox" href="/">
  <img slot="logo" src="/img/logo.svg" alt="" />
  <a href="/modules" aria-current="page">Modules</a>
  <a href="/docs">Docs</a>
  <vox-button slot="actions" size="sm" variant="alt">Sponsor</vox-button>
</vox-header>
```

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `site-title` | `string` | `''` | Brand text |
| `href` | `string` | `/` | Brand link destination |

| Slot | Description |
| --- | --- |
| `logo` | Brand mark |
| *(default)* | Nav links (`aria-current="page"` marks the active one) |
| `actions` | Right-aligned extras |
