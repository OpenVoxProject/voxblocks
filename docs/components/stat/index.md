---
title: "Stat"
---

# Stat

`<vox-stat>` shows a large statistic with a label.

<vox-grid min="160px" style="margin: 1rem 0;">
  <vox-stat value="450+" label="Modules">Community-maintained</vox-stat>
  <vox-stat value="140" label="Contributors">Active this year</vox-stat>
  <vox-stat value="2" label="Years">Since the OpenVox fork</vox-stat>
</vox-grid>

<vox-code-block language="html">
&lt;vox-stat value="450+" label="Modules"&gt;Community-maintained&lt;/vox-stat&gt;
</vox-code-block>

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` | `''` | The big number |
| `label` | `string` | `''` | What it counts |

| Slot | Description |
| --- | --- |
| *(default)* | Supporting description |
