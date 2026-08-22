---
title: "Quote"
---

# Quote

`<vox-quote>` is a pull quote with optional attribution.

<div style="margin: 1rem 0; max-width: 36rem;">
  <vox-quote attribution="A happy operator" detail="Somewhere in production">
    Migrating to OpenVox was the least dramatic infrastructure change we made all year.
  </vox-quote>
</div>

<vox-code-block language="html">
&lt;vox-quote attribution="A happy operator" detail="Somewhere in production"&gt;
  Migrating to OpenVox was the least dramatic change we made all year.
&lt;/vox-quote&gt;
</vox-code-block>

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `attribution` | `string` | `''` | Who said it |
| `detail` | `string` | `''` | Role, company, context |
