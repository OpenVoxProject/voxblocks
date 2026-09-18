---
title: "Disclosure"
---

# Disclosure

`<vox-disclosure>` is a single show/hide toggle for supplementary content.

<div style="margin: 1rem 0;">
  <vox-disclosure summary="Show advanced options">
    <p>Environment caching, code manager settings, and other knobs most users never touch.</p>
  </vox-disclosure>
</div>

<vox-code-block language="html">
&lt;vox-disclosure summary="Show advanced options"&gt;
  &lt;p&gt;Environment caching, code manager settings…&lt;/p&gt;
&lt;/vox-disclosure&gt;
</vox-code-block>

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `summary` | `string` | `Show details` | Toggle label |
| `open` | `boolean` | `false` | Expanded state |

Fires `vox-toggle` when toggled.
