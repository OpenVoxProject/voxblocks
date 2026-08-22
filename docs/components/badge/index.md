---
title: "Badge"
---

# Badge

`<vox-badge>` is a small status pill for version labels, statuses, and deprecation notices.

## Variants

<div style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin: 1rem 0;">
  <vox-badge variant="brand">v8.1.0</vox-badge>
  <vox-badge variant="tip">Stable</vox-badge>
  <vox-badge variant="warning">Deprecated</vox-badge>
  <vox-badge variant="danger">Breaking</vox-badge>
  <vox-badge variant="neutral">Draft</vox-badge>
</div>

<vox-code-block language="html">
&lt;vox-badge variant="brand"&gt;v8.1.0&lt;/vox-badge&gt;
&lt;vox-badge variant="tip"&gt;Stable&lt;/vox-badge&gt;
&lt;vox-badge variant="warning"&gt;Deprecated&lt;/vox-badge&gt;
&lt;vox-badge variant="danger"&gt;Breaking&lt;/vox-badge&gt;
&lt;vox-badge variant="neutral"&gt;Draft&lt;/vox-badge&gt;
</vox-code-block>

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `brand` \| `tip` \| `warning` \| `danger` \| `neutral` | `brand` | Semantic style |
