# Text Input

`<vox-input>` is a single-line text input that participates in native form submission (via ElementInternals).

<div style="display: grid; gap: 1rem; max-width: 24rem; margin: 1rem 0;">
  <vox-input label="Module name" placeholder="puppet-nginx" note="Lowercase, hyphen-separated."></vox-input>
  <vox-input label="Email" type="email" required></vox-input>
  <vox-input label="Read only" value="openvox" readonly></vox-input>
</div>

```html
<vox-input
  label="Module name"
  name="module"
  placeholder="puppet-nginx"
  note="Lowercase, hyphen-separated."
></vox-input>
```

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | — | Field label |
| `name` | `string` | — | Form field name |
| `value` | `string` | `''` | Current value |
| `type` | `string` | `text` | Native input type |
| `placeholder` | `string` | — | Placeholder text |
| `note` | `string` | — | Help text below the input |
| `required` / `readonly` / `disabled` | `boolean` | `false` | Native states |

Fires `input` and `change` events. Exposes `form`, `validity`, `checkValidity()`, `reportValidity()`.
