---
title: "Loading Indicator"
---

# Loading Indicator

`<vox-loader>` is a spinner; its `label` is announced to screen readers.

<div style="display: flex; gap: 1.5rem; align-items: center; margin: 1rem 0;">
  <vox-loader size="sm"></vox-loader>
  <vox-loader size="md"></vox-loader>
  <vox-loader size="lg" label="Fetching modules"></vox-loader>
</div>

```html
<vox-loader size="lg" label="Fetching modules"></vox-loader>
```

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `sm` \| `md` \| `lg` | `md` | Spinner size |
| `label` | `string` | `Loading` | Screen-reader announcement |
