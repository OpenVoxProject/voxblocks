---
title: "Checkbox"
---

# Checkbox

`<vox-checkbox>` is a themed checkbox.

<div style="display: grid; gap: 0.5rem; margin: 1rem 0;">
  <vox-checkbox checked>Subscribe to release announcements</vox-checkbox>
  <vox-checkbox>Also notify about beta builds</vox-checkbox>
  <vox-checkbox disabled>Unavailable option</vox-checkbox>
</div>

```html
<vox-checkbox name="subscribe" checked>
  Subscribe to release announcements
</vox-checkbox>
```

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `checked` | `boolean` | `false` | Checked state |
| `name` | `string` | — | Form field name |
| `value` | `string` | `on` | Submitted value when checked |
| `required` / `disabled` | `boolean` | `false` | Native states |

| Slot | Description |
| --- | --- |
| *(default)* | Label |
