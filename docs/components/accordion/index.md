---
title: "Accordion"
---

# Accordion

`<vox-accordion>` stacks expandable panels. Add `single` to keep at most one open.

<div style="margin: 1rem 0;">
  <vox-accordion single>
    <vox-accordion-item heading="Is OpenVox compatible with Puppet?" open>
      <p>Yes — OpenVox is a drop-in replacement tracking the same module ecosystem.</p>
    </vox-accordion-item>
    <vox-accordion-item heading="How do I migrate?">
      <p>Swap the package repositories and upgrade; agents and server interoperate during transition.</p>
    </vox-accordion-item>
    <vox-accordion-item heading="Who maintains it?">
      <p>The OpenVox community, under open governance.</p>
    </vox-accordion-item>
  </vox-accordion>
</div>

<vox-code-block language="html">
&lt;vox-accordion single&gt;
  &lt;vox-accordion-item heading="Is OpenVox compatible with Puppet?" open&gt;
    &lt;p&gt;Yes — it's a drop-in replacement.&lt;/p&gt;
  &lt;/vox-accordion-item&gt;
&lt;/vox-accordion&gt;
</vox-code-block>

## API

`<vox-accordion>`: `single` (boolean) — only one panel open at a time.

`<vox-accordion-item>`:

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `heading` | `string` | `''` | Panel header |
| `open` | `boolean` | `false` | Expanded state |

Items fire `vox-toggle` when opened or closed.
