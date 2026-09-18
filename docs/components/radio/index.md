---
title: "Radio Input"
---

# Radio Input

`<vox-radio-group>` manages a set of `<vox-radio>` options: selection, arrow-key navigation, and the submitted form value.

<div style="max-width: 24rem; margin: 1rem 0;">
  <vox-radio-group label="Install method" value="pkg">
    <vox-radio value="pkg">System packages</vox-radio>
    <vox-radio value="gem">Ruby gem</vox-radio>
    <vox-radio value="src" disabled>From source</vox-radio>
  </vox-radio-group>
</div>

<vox-code-block language="html">
&lt;vox-radio-group label="Install method" name="method" value="pkg"&gt;
  &lt;vox-radio value="pkg"&gt;System packages&lt;/vox-radio&gt;
  &lt;vox-radio value="gem"&gt;Ruby gem&lt;/vox-radio&gt;
&lt;/vox-radio-group&gt;
</vox-code-block>

## API

`<vox-radio-group>`:

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | — | Group label |
| `name` | `string` | — | Form field name |
| `value` | `string` | `''` | Selected radio's value |
| `note` | `string` | — | Help text |
| `required` / `disabled` | `boolean` | `false` | States |

`<vox-radio>`:

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` | `''` | Value this option represents |
| `disabled` | `boolean` | `false` | Disable the option |
