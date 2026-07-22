# Select Input

`<vox-select>` wraps a native select. Options are plain `<option>` / `<optgroup>` children.

<div style="max-width: 24rem; margin: 1rem 0;">
  <vox-select label="Operating system">
    <option value="">Choose one…</option>
    <option value="deb">Debian / Ubuntu</option>
    <option value="rpm">RHEL / Fedora</option>
    <option value="arch">Arch</option>
  </vox-select>
</div>

```html
<vox-select label="Operating system" name="os">
  <option value="">Choose one…</option>
  <option value="deb">Debian / Ubuntu</option>
  <option value="rpm">RHEL / Fedora</option>
</vox-select>
```

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | — | Field label |
| `name` | `string` | — | Form field name |
| `value` | `string` | `''` | Selected value |
| `note` | `string` | — | Help text |
| `required` / `disabled` | `boolean` | `false` | Native states |
