---
title: "Pagination"
---

# Pagination

`<vox-pagination>` navigates numbered pages. Children are plain links; mark the current one with `aria-current="page"`.

<div style="margin: 1rem 0;">
  <vox-pagination>
    <a href="#">←</a>
    <a href="#">1</a>
    <a href="#" aria-current="page">2</a>
    <a href="#">3</a>
    <a href="#">4</a>
    <a href="#">→</a>
  </vox-pagination>
</div>

```html
<vox-pagination>
  <a href="?page=1">1</a>
  <a href="?page=2" aria-current="page">2</a>
  <a href="?page=3">3</a>
</vox-pagination>
```
