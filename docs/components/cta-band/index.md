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

```html
<vox-cta-band heading="Your infrastructure. Your community. Your platform.">
  <p>Install OpenVox in minutes and bring your existing Puppet code with you.</p>
  <div slot="actions">
    <vox-button href="#" variant="brand">Installation Guide</vox-button>
    <vox-button href="#" variant="alt">Join the Community</vox-button>
  </div>
</vox-cta-band>
```

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `heading` | `string` | `''` | Panel heading |

| Slot | Description |
| --- | --- |
| *(default)* | Supporting copy under the heading |
| `actions` | Buttons or CTA links |
