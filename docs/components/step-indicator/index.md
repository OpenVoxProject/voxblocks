---
title: "Step Indicator"
---

# Step Indicator

`<vox-step-indicator>` shows progress through a multi-step process.

<div style="margin: 1.5rem 0;">
  <vox-step-indicator>
    <vox-step label="Choose plan" state="complete"></vox-step>
    <vox-step label="Configure" state="current"></vox-step>
    <vox-step label="Review" state="upcoming"></vox-step>
    <vox-step label="Deploy" state="upcoming"></vox-step>
  </vox-step-indicator>
</div>

<vox-code-block language="html">
&lt;vox-step-indicator&gt;
  &lt;vox-step label="Choose plan" state="complete"&gt;&lt;/vox-step&gt;
  &lt;vox-step label="Configure" state="current"&gt;&lt;/vox-step&gt;
  &lt;vox-step label="Review"&gt;&lt;/vox-step&gt;
&lt;/vox-step-indicator&gt;
</vox-code-block>

## API

`<vox-step>`:

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | `''` | Step name |
| `state` | `complete` \| `current` \| `upcoming` | `upcoming` | Progress state |

Step numbers are assigned automatically.
