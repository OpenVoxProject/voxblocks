# Quote

`<vox-quote>` is a pull quote with optional attribution.

<div style="margin: 1rem 0; max-width: 36rem;">
  <vox-quote attribution="A happy operator" detail="Somewhere in production">
    Migrating to OpenVox was the least dramatic infrastructure change we made all year.
  </vox-quote>
</div>

```html
<vox-quote attribution="A happy operator" detail="Somewhere in production">
  Migrating to OpenVox was the least dramatic change we made all year.
</vox-quote>
```

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `attribution` | `string` | `''` | Who said it |
| `detail` | `string` | `''` | Role, company, context |
