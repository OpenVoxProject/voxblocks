---
title: "CTA Band"
---

# CTA Band

`<vox-cta-band>` is a centered, full-width call-to-action panel — the closing pitch at the bottom of a page.

<div style="margin: 1rem 0;">
  <vox-cta-band heading="Your infrastructure. Your community. Your platform.">
    <p>Install OpenVox in minutes and bring your existing Puppet code with you.</p>
    <div slot="actions">
      <vox-button href="#" variant="brand">Installation Guide</vox-button>
      <vox-button href="#" variant="alt">Join the Community</vox-button>
    </div>
  </vox-cta-band>
</div>

<vox-code-block language="html">
&lt;vox-cta-band heading="Your infrastructure. Your community. Your platform."&gt;
  &lt;p&gt;Install OpenVox in minutes and bring your existing Puppet code with you.&lt;/p&gt;
  &lt;div slot="actions"&gt;
    &lt;vox-button href="#" variant="brand"&gt;Installation Guide&lt;/vox-button&gt;
    &lt;vox-button href="#" variant="alt"&gt;Join the Community&lt;/vox-button&gt;
  &lt;/div&gt;
&lt;/vox-cta-band&gt;
</vox-code-block>

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `heading` | `string` | `''` | Panel heading |

| Slot | Description |
| --- | --- |
| *(default)* | Supporting copy under the heading |
| `actions` | Buttons or CTA links |
