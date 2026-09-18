---
title: "Table"
---

# Table

Tables are styled with light-DOM utility classes on native `<table>` elements (shadow DOM can't style slotted table cells). Included in `voxblocks.css`.

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

<vox-code-block language="html">
&lt;table class="vox-table"&gt;…&lt;/table&gt;
&lt;table class="vox-table vox-table--striped"&gt;…&lt;/table&gt;
&lt;table class="vox-table vox-table--compact"&gt;…&lt;/table&gt;
</vox-code-block>

## Comparison tables

Wrap a wide table in `.vox-table-wrap` for a bordered, rounded, horizontally
scrollable container. `<th scope="row">` row headers get the same tinted
background as column headers automatically.

<div class="vox-table-wrap" style="margin: 1rem 0;">
  <table class="vox-table">
    <thead>
      <tr><th scope="col">Dimension</th><th scope="col">OpenVox</th><th scope="col">Ansible</th></tr>
    </thead>
    <tbody>
      <tr><th scope="row">Model</th><td>Declarative</td><td>Procedural</td></tr>
      <tr><th scope="row">Execution</th><td>Pull-based agent</td><td>Push-based over SSH</td></tr>
    </tbody>
  </table>
</div>

<vox-code-block language="html">
&lt;div class="vox-table-wrap"&gt;
  &lt;table class="vox-table"&gt;
    &lt;thead&gt;
      &lt;tr&gt;&lt;th scope="col"&gt;Dimension&lt;/th&gt;&lt;th scope="col"&gt;OpenVox&lt;/th&gt;&lt;th scope="col"&gt;Ansible&lt;/th&gt;&lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
      &lt;tr&gt;&lt;th scope="row"&gt;Model&lt;/th&gt;&lt;td&gt;Declarative&lt;/td&gt;&lt;td&gt;Procedural&lt;/td&gt;&lt;/tr&gt;
    &lt;/tbody&gt;
  &lt;/table&gt;
&lt;/div&gt;
</vox-code-block>
