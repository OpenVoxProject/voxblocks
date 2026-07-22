# Table

Tables are styled with light-DOM utility classes on native `<table>` elements (shadow DOM can't style slotted table cells), the same approach Rivet takes. Included in `voxblocks.css`.

<table class="vox-table vox-table--striped" style="margin: 1rem 0;">
  <thead>
    <tr><th>Module</th><th>Version</th><th>Downloads</th></tr>
  </thead>
  <tbody>
    <tr><td>puppet-nginx</td><td>6.0.1</td><td>1.2M</td></tr>
    <tr><td>puppet-systemd</td><td>8.1.0</td><td>3.4M</td></tr>
    <tr><td>puppet-postgresql</td><td>10.5.0</td><td>2.1M</td></tr>
  </tbody>
</table>

```html
<table class="vox-table">…</table>
<table class="vox-table vox-table--striped">…</table>
<table class="vox-table vox-table--compact">…</table>
```
