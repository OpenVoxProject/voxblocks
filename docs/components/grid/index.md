---
title: "Grid"
---

# Grid

`<vox-grid>` is a responsive CSS-grid container. Columns auto-fit to the `min` width by default; `cols` fixes the count.

<div style="margin: 1rem 0;">
  <vox-grid min="180px">
    <vox-card heading="Auto-fit A">Resizes with the viewport.</vox-card>
    <vox-card heading="Auto-fit B">Resizes with the viewport.</vox-card>
    <vox-card heading="Auto-fit C">Resizes with the viewport.</vox-card>
  </vox-grid>
</div>

<vox-code-block language="html">
&lt;vox-grid min="240px" gap="lg"&gt;
  &lt;vox-card heading="…"&gt;…&lt;/vox-card&gt;
  &lt;vox-card heading="…"&gt;…&lt;/vox-card&gt;
&lt;/vox-grid&gt;

&lt;vox-grid cols="2"&gt;…&lt;/vox-grid&gt;
</vox-code-block>

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `cols` | `number` | `0` (auto-fit) | Fixed column count |
| `min` | `string` | `240px` | Minimum track width when auto-fitting |
| `gap` | `sm` \| `md` \| `lg` | `md` | Gutter size |
