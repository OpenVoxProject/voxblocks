# Empty State

`<vox-empty-state>` is a placeholder for views with nothing to show yet.

<div style="margin: 1rem 0;">
  <vox-empty-state heading="No modules yet">
    <span slot="icon">📦</span>
    You haven't published any modules. Your first one is easier than you think.
    <vox-button slot="actions" size="sm">Publish a module</vox-button>
  </vox-empty-state>
</div>

```html
<vox-empty-state heading="No modules yet">
  <span slot="icon">📦</span>
  You haven't published any modules yet.
  <vox-button slot="actions" size="sm">Publish a module</vox-button>
</vox-empty-state>
```

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `heading` | `string` | `''` | Headline |

| Slot | Description |
| --- | --- |
| `icon` | Icon or emoji |
| *(default)* | Explanatory text |
| `actions` | Suggested next step |
