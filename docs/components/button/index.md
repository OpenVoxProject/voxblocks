---
title: Button
---

# Button

`<vox-button>` renders an accessible button, or a link styled as a button when `href` is set.

## Variants

<div style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin: 1rem 0;">
  <vox-button variant="brand">Brand</vox-button>
  <vox-button variant="alt">Alt</vox-button>
  <vox-button variant="danger">Danger</vox-button>
  <vox-button variant="ghost">Ghost</vox-button>
</div>

<vox-code-block language="html">
&lt;vox-button variant="brand"&gt;Brand&lt;/vox-button&gt;
&lt;vox-button variant="alt"&gt;Alt&lt;/vox-button&gt;
&lt;vox-button variant="danger"&gt;Danger&lt;/vox-button&gt;
&lt;vox-button variant="ghost"&gt;Ghost&lt;/vox-button&gt;
</vox-code-block>

## Sizes

<div style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap; margin: 1rem 0;">
  <vox-button size="sm">Small</vox-button>
  <vox-button size="md">Medium</vox-button>
  <vox-button size="lg">Large</vox-button>
</div>

<vox-code-block language="html">
&lt;vox-button size="sm"&gt;Small&lt;/vox-button&gt;
&lt;vox-button size="md"&gt;Medium&lt;/vox-button&gt;
&lt;vox-button size="lg"&gt;Large&lt;/vox-button&gt;
</vox-code-block>

## As a link

<div style="margin: 1rem 0;">
  <vox-button href="https://voxpupuli.org/openvox/" target="_blank">Visit OpenVox</vox-button>
</div>

<vox-code-block language="html">
&lt;vox-button href="https://voxpupuli.org/openvox/" target="_blank"&gt;Visit OpenVox&lt;/vox-button&gt;
</vox-code-block>

## Disabled

<div style="margin: 1rem 0;">
  <vox-button disabled>Disabled</vox-button>
</div>

<vox-code-block language="html">
&lt;vox-button disabled&gt;Disabled&lt;/vox-button&gt;
</vox-code-block>

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `brand` \| `alt` \| `danger` \| `ghost` | `brand` | Visual style |
| `size` | `sm` \| `md` \| `lg` | `md` | Button size |
| `href` | `string` | — | Render as a link |
| `target` | `string` | — | Link target (adds `rel="noreferrer"` for `_blank`) |
| `type` | `button` \| `submit` \| `reset` | `button` | Button type |
| `disabled` | `boolean` | `false` | Disable the button |
