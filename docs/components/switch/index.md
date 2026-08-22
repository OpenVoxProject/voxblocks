---
title: "Switch"
---

# Switch

`<vox-switch>` is a toggle for on/off settings, announced as a switch to assistive technology.

<div style="display: grid; gap: 0.5rem; margin: 1rem 0;">
  <vox-switch checked>Enable dark mode</vox-switch>
  <vox-switch>Send anonymous usage stats</vox-switch>
</div>

<vox-code-block language="html">
&lt;vox-switch name="dark" checked&gt;Enable dark mode&lt;/vox-switch&gt;
</vox-code-block>

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `checked` | `boolean` | `false` | On/off state |
| `name` | `string` | — | Form field name |
| `value` | `string` | `on` | Submitted value when on |
| `disabled` | `boolean` | `false` | Disable the switch |
