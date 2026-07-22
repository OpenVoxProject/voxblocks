# Textarea

`<vox-textarea>` is a multi-line text input.

<div style="max-width: 28rem; margin: 1rem 0;">
  <vox-textarea label="Description" rows="4" placeholder="What does this module do?" note="Markdown is supported."></vox-textarea>
</div>

```html
<vox-textarea
  label="Description"
  name="description"
  rows="4"
  note="Markdown is supported."
></vox-textarea>
```

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | — | Field label |
| `name` | `string` | — | Form field name |
| `value` | `string` | `''` | Current value |
| `rows` | `number` | `4` | Visible rows |
| `placeholder` | `string` | — | Placeholder text |
| `note` | `string` | — | Help text |
| `required` / `readonly` / `disabled` | `boolean` | `false` | Native states |
