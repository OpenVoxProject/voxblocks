---
title: "Breadcrumbs"
---

# Breadcrumbs

`<vox-breadcrumbs>` shows a trail of parent pages. Children are plain links; the current page is a `<span aria-current="page">`.

<div style="margin: 1rem 0;">
  <vox-breadcrumbs>
    <a href="#">Home</a>
    <a href="#">Modules</a>
    <span aria-current="page">puppet-nginx</span>
  </vox-breadcrumbs>
</div>

```html
<vox-breadcrumbs>
  <a href="/">Home</a>
  <a href="/modules">Modules</a>
  <span aria-current="page">puppet-nginx</span>
</vox-breadcrumbs>
```
