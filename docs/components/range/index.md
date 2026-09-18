---
title: "Range"
---

# Range

`<vox-range>` is a slider for picking a number from a range. It wraps a native `<input type="range">`, so keyboard support, the `slider` role and screen-reader value announcements come from the platform.

<div style="display: grid; gap: 1.5rem; max-width: 24rem; margin: 1rem 0;">
  <vox-range label="Concurrency" min="1" max="16" step="1" value="4" show-value></vox-range>
  <vox-range label="Memory limit" min="256" max="4096" step="256" value="1024" unit="MB" show-value note="Applied per agent run."></vox-range>
  <vox-range label="Disabled" value="30" show-value disabled></vox-range>
</div>

<vox-code-block language="html">
&lt;vox-range
  label="Memory limit"
  name="memory"
  min="256"
  max="4096"
  step="256"
  value="1024"
  unit="MB"
  show-value
&gt;&lt;/vox-range&gt;
</vox-code-block>

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | — | Field label |
| `name` | `string` | — | Form field name |
| `value` | `string` | midpoint | Current value |
| `min` / `max` | `string` | `0` / `100` | Range bounds |
| `step` | `string` | `1` | Granularity |
| `show-value` | `boolean` | `false` | Show the current value beside the slider |
| `unit` | `string` | — | Unit appended to the shown and spoken value |
| `note` | `string` | — | Help text below the slider |
| `disabled` | `boolean` | `false` | Native state |

Fires `input` and `change` events. Exposes `form`, `validity`, `checkValidity()`, `reportValidity()`.

## Accessibility

Set `unit` whenever the number alone doesn't convey the quantity — it becomes `aria-valuetext`, so the value is announced as "1024MB" rather than "1024". The readout beside the slider is `aria-hidden`, since the native input already reports its value.
