---
title: "Input Group"
---

# Input Group

`<vox-input-group>` joins inputs, selects, buttons, and text addons into one attached row. Plain `<span>` children render as text addons.

<div style="display: grid; gap: 1rem; max-width: 28rem; margin: 1rem 0;">
  <vox-input-group>
    <vox-input aria-label="Search modules" placeholder="Search modules…"></vox-input>
    <vox-button>Search</vox-button>
  </vox-input-group>
  <vox-input-group>
    <span>https://</span>
    <vox-input aria-label="Site URL" placeholder="example.org"></vox-input>
  </vox-input-group>
</div>

```html
<vox-input-group>
  <vox-input aria-label="Search modules" placeholder="Search modules…"></vox-input>
  <vox-button>Search</vox-button>
</vox-input-group>
```

Inside a group, give inputs an `aria-label` instead of a visible `label` so the row stays aligned.

| Slot | Description |
| --- | --- |
| *(default)* | `vox-input`, `vox-select`, `vox-button`, and `<span>` text addons |
