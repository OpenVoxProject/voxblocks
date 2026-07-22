# File Input

`<vox-file-input>` is a themed file picker that shows the selected file names and submits real files with the form.

<div style="margin: 1rem 0;">
  <vox-file-input label="Module tarball" accept=".tar.gz" button-label="Choose a file"></vox-file-input>
</div>

```html
<vox-file-input
  label="Module tarball"
  name="tarball"
  accept=".tar.gz"
  button-label="Choose a file"
></vox-file-input>
```

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | — | Field label |
| `name` | `string` | — | Form field name |
| `accept` | `string` | — | Accepted file types |
| `multiple` | `boolean` | `false` | Allow multiple files |
| `button-label` | `string` | `Choose a file` | Picker button text |
| `note` | `string` | — | Help text |
| `required` / `disabled` | `boolean` | `false` | Native states |
