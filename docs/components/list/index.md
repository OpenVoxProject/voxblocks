---
title: "List"
---

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

<vox-code-block language="html">
&lt;ul class="vox-list"&gt;…&lt;/ul&gt;
&lt;ul class="vox-list vox-list--plain"&gt;…&lt;/ul&gt;  &lt;!-- no bullets --&gt;
&lt;ul class="vox-list vox-list--inline"&gt;…&lt;/ul&gt; &lt;!-- horizontal --&gt;
</vox-code-block>
