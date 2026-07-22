# List

Lists are styled with light-DOM utility classes (shadow DOM can't reach into slotted list items). Included in `voxblocks.css`.

<ul class="vox-list" style="margin: 1rem 0;">
  <li>Default styled list</li>
  <li>With comfortable spacing</li>
</ul>

<ul class="vox-list vox-list--inline" style="margin: 1rem 0;">
  <li>Inline</li>
  <li>list</li>
  <li>items</li>
</ul>

```html
<ul class="vox-list">…</ul>
<ul class="vox-list vox-list--plain">…</ul>  <!-- no bullets -->
<ul class="vox-list vox-list--inline">…</ul> <!-- horizontal -->
```
