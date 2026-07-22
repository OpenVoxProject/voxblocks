# Step Indicator

`<vox-step-indicator>` shows progress through a multi-step process.

<div style="margin: 1.5rem 0;">
  <vox-step-indicator>
    <vox-step label="Choose plan" state="complete"></vox-step>
    <vox-step label="Configure" state="current"></vox-step>
    <vox-step label="Review" state="upcoming"></vox-step>
    <vox-step label="Deploy" state="upcoming"></vox-step>
  </vox-step-indicator>
</div>

```html
<vox-step-indicator>
  <vox-step label="Choose plan" state="complete"></vox-step>
  <vox-step label="Configure" state="current"></vox-step>
  <vox-step label="Review"></vox-step>
</vox-step-indicator>
```

## API

`<vox-step>`:

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | `''` | Step name |
| `state` | `complete \| current \| upcoming` | `upcoming` | Progress state |

Step numbers are assigned automatically.
