---
title: "Text Input"
---

# Text Input

`<vox-input>` is a single-line text input that participates in native form submission (via ElementInternals).

<div style="display: grid; gap: 1rem; max-width: 24rem; margin: 1rem 0;">
  <vox-input label="Module name" placeholder="puppet-nginx" note="Lowercase, hyphen-separated."></vox-input>
  <vox-input label="Email" type="email" required></vox-input>
  <vox-input label="Read only" value="openvox" readonly></vox-input>
</div>

<vox-code-block language="html">
&lt;vox-input
  label="Module name"
  name="module"
  placeholder="puppet-nginx"
  note="Lowercase, hyphen-separated."
&gt;&lt;/vox-input&gt;
</vox-code-block>

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | — | Field label |
| `name` | `string` | — | Form field name |
| `value` | `string` | `''` | Current value |
| `type` | `string` | `text` | Native input type |
| `placeholder` | `string` | — | Placeholder text |
| `note` | `string` | — | Help text below the input |
| `min` / `max` | `string` | — | Bounds for `number`, `date`, `time`, `month`, `week` |
| `step` | `string` | — | Granularity for the numeric and date-like types |
| `pattern` | `string` | — | Regular expression the value must match |
| `minlength` / `maxlength` | `string` | — | Length constraints |
| `inputmode` | `string` | — | On-screen keyboard hint for touch devices |
| `required` / `readonly` / `disabled` | `boolean` | `false` | Native states |

Fires `input` and `change` events. Exposes `form`, `validity`, `checkValidity()`, `reportValidity()`.

## Types

`type` accepts any native input type. The constraint attributes are what make the numeric, date and pattern types enforceable — set them and native constraint validation reports through `validity` like any other field.

<div style="display: grid; gap: 1rem; max-width: 24rem; margin: 1rem 0;">
  <vox-input label="Agent count" type="number" min="1" max="64" step="1" value="8" note="Between 1 and 64."></vox-input>
  <vox-input label="Run after" type="date" min="2026-01-01" max="2026-12-31"></vox-input>
  <vox-input label="Window opens" type="time" min="06:00" max="22:00" step="900"></vox-input>
  <vox-input label="Contact" type="tel" pattern="[0-9 +()-]{7,}" inputmode="tel" placeholder="+1 555 0100"></vox-input>
  <vox-input label="Short name" maxlength="12" note="12 characters or fewer."></vox-input>
</div>

<vox-code-block language="html">
&lt;vox-input
  label="Agent count"
  name="agents"
  type="number"
  min="1"
  max="64"
  step="1"
&gt;&lt;/vox-input&gt;
</vox-code-block>

For a single value out of a known range, [Range](/components/range/) is usually a better fit than `type="number"`.

## Accessibility

Always set `label`. Without one the input falls back to an accessible name derived from its `type` — "email address" for `type="email"`, "date" for `type="date"` — which keeps the control named (WCAG 4.1.2) but says nothing about what it is for.

Set `inputmode` on the text types that take restricted characters so touch keyboards open in the right mode; `type="tel"` does this on its own, but `type="text"` holding a numeric code does not.
