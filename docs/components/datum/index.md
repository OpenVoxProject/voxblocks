---
title: "Datum"
---

# Datum

`<vox-datum>` is a small labeled value with an optional icon — an owner, a date, a target host, anything that's "icon + value" — for use inside record rows, cards, or wherever a compact data point is needed.

`name` isn't shown visually (the icon, if any, carries that meaning for sighted users); it's exposed to assistive tech as a spoken label, e.g. "User: J. Smith".

<div style="display: flex; gap: 1rem; margin: 1rem 0;">
  <vox-datum name="User">
    <vox-icon slot="icon" name="person" size="sm"></vox-icon>
    J. Smith
  </vox-datum>
  <vox-datum name="Updated">
    <vox-icon slot="icon" name="calendar" size="sm"></vox-icon>
    April 1, 2021
  </vox-datum>
  <vox-datum name="Target">web01.example.com</vox-datum>
</div>

```html
<vox-datum name="User">
  <vox-icon slot="icon" name="person" size="sm"></vox-icon>
  J. Smith
</vox-datum>
<vox-datum name="Target">web01.example.com</vox-datum>
```

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | `''` | Accessible label, spoken before the value; not shown visually. |

| Slot | Description |
| --- | --- |
| *(default)* | The value |
| `icon` | Optional icon before the value, e.g. `<vox-icon size="sm">` |
