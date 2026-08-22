---
title: "Avatar"
---

# Avatar

`<vox-avatar>` shows a user image, falling back to initials.

<div style="display: flex; gap: 0.75rem; align-items: center; margin: 1rem 0;">
  <vox-avatar size="sm" initials="PN" alt="P. Nair"></vox-avatar>
  <vox-avatar size="md" initials="OV" alt="OpenVox"></vox-avatar>
  <vox-avatar size="lg" initials="KM" alt="K. Mensah"></vox-avatar>
  <vox-avatar size="xl" src="https://avatars.githubusercontent.com/u/188505547?s=160" alt="OpenVox logo"></vox-avatar>
</div>

<vox-code-block language="html">
&lt;vox-avatar src="/img/user.png" alt="K. Mensah" size="lg"&gt;&lt;/vox-avatar&gt;
&lt;vox-avatar initials="KM" alt="K. Mensah"&gt;&lt;/vox-avatar&gt;
</vox-code-block>

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `src` | `string` | — | Image URL |
| `alt` | `string` | `''` | Accessible name |
| `initials` | `string` | `''` | Fallback initials |
| `size` | `sm` \| `md` \| `lg` \| `xl` | `md` | Diameter |
