---
title: "Billboard"
---

# Billboard

`<vox-billboard>` is a split media-and-content section for landing pages.

<div style="margin: 1rem 0;">
  <vox-billboard heading="Community-maintained modules">
    <img slot="media" src="https://avatars.githubusercontent.com/u/188505547?s=320" alt="" />
    <p>OpenVox modules are community-maintained — hundreds of them, kept alive by contributors worldwide.</p>
    <vox-button slot="actions">Browse modules</vox-button>
    <vox-cta slot="actions" href="#">How to contribute</vox-cta>
  </vox-billboard>
</div>

<vox-code-block language="html">
&lt;vox-billboard heading="Community-maintained modules" reverse&gt;
  &lt;img slot="media" src="/img/community.png" alt="" /&gt;
  &lt;p&gt;Hundreds of modules, tools, and gems…&lt;/p&gt;
  &lt;vox-button slot="actions"&gt;Browse modules&lt;/vox-button&gt;
&lt;/vox-billboard&gt;
</vox-code-block>

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `heading` | `string` | `''` | Section heading |
| `reverse` | `boolean` | `false` | Media on the right |

| Slot | Description |
| --- | --- |
| `media` | Image or media |
| *(default)* | Body content |
| `actions` | Buttons / CTA links |
