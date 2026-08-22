---
title: "Timeline"
---

# Timeline

`<vox-timeline>` presents dated events vertically.

<div style="margin: 1rem 0;">
  <vox-timeline>
    <vox-timeline-item date="Nov 2024" heading="Fork announced">
      OpenVox forks from Puppet to keep an open, community-driven implementation alive.
    </vox-timeline-item>
    <vox-timeline-item date="Jan 2025" heading="First release">
      OpenVox 8.x packages published for all major platforms.
    </vox-timeline-item>
    <vox-timeline-item date="2026" heading="Growing ecosystem">
      OpenVoxDB, OpenFact, and OpenBolt round out the stack.
    </vox-timeline-item>
  </vox-timeline>
</div>

<vox-code-block language="html">
&lt;vox-timeline&gt;
  &lt;vox-timeline-item date="Jan 2025" heading="First release"&gt;
    OpenVox 8.x packages published.
  &lt;/vox-timeline-item&gt;
&lt;/vox-timeline&gt;
</vox-code-block>

## API

`<vox-timeline-item>`:

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `heading` | `string` | `''` | Event title |
| `date` | `string` | `''` | Displayed date text |
