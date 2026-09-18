---
title: "File Input"
---

# File Input

`<vox-file-input>` is a themed file picker that shows the selected file names and submits real files with the form.

<div style="margin: 1rem 0;">
  <vox-file-input label="Module tarball" accept=".tar.gz" button-label="Choose a file"></vox-file-input>
</div>

<vox-code-block language="html">
&lt;vox-file-input
  label="Module tarball"
  name="tarball"
  accept=".tar.gz"
  button-label="Choose a file"
&gt;&lt;/vox-file-input&gt;
</vox-code-block>

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | — | Field label |
| `name` | `string` | — | Form field name |
| `accept` | `string` | — | Accepted file types |
| `multiple` | `boolean` | `false` | Allow multiple files |
| `button-label` | `string` | `Choose a file` | Picker button text |
| `empty-text` | `string` | `No file selected` | Shown before a file is picked |
| `required-message` | `string` | `Please select a file.` | Validation message when `required` |
| `note` | `string` | — | Help text |
| `required` / `disabled` | `boolean` | `false` | Native states |

Fires `change` when the selection changes. Exposes `form`, `validity`, `checkValidity()`, `reportValidity()`.

With `required` set, the field is invalid and reports `aria-invalid="true"` from first render until a file is picked — an untouched form will not submit, matching every other field in the library.
