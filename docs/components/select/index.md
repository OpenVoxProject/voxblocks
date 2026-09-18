---
title: "Select Input"
---

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

<vox-code-block language="html">
&lt;vox-select label="Operating system" name="os"&gt;
  &lt;option value=""&gt;Choose one…&lt;/option&gt;
  &lt;option value="deb"&gt;Debian / Ubuntu&lt;/option&gt;
  &lt;option value="rpm"&gt;RHEL / Fedora&lt;/option&gt;
&lt;/vox-select&gt;
</vox-code-block>

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | — | Field label |
| `name` | `string` | — | Form field name |
| `value` | `string` | `''` | Selected value; the first selection when `multiple` |
| `values` | `string[]` | `[]` | Selected values. Only meaningful with `multiple` |
| `multiple` | `boolean` | `false` | Accept more than one selection |
| `size` | `number` | `4` | Rows shown when `multiple` is set |
| `note` | `string` | — | Help text |
| `required` / `disabled` | `boolean` | `false` | Native states |

## Multiple

Add `multiple` to render a scrolling list box that accepts more than one selection. Read the result from `values`; `value` still reports the first selection.

<div style="max-width: 24rem; margin: 1rem 0;">
  <vox-select label="Platforms" name="platforms" multiple size="5" note="Ctrl or Cmd to select more than one.">
    <option value="deb">Debian / Ubuntu</option>
    <option value="rpm">RHEL / Fedora</option>
    <option value="arch">Arch</option>
    <option value="bsd">FreeBSD</option>
    <option value="win">Windows</option>
  </vox-select>
</div>

<vox-code-block language="html">
&lt;vox-select label="Platforms" name="platforms" multiple size="5"&gt;
  &lt;option value="deb"&gt;Debian / Ubuntu&lt;/option&gt;
  &lt;option value="rpm"&gt;RHEL / Fedora&lt;/option&gt;
&lt;/vox-select&gt;
</vox-code-block>

A multi-select submits one form entry per selection, so `name` is required for it to contribute anything on submit. When the list is long or the options are better found by typing, reach for [Combobox](/components/combobox/) instead.
