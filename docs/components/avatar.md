# Avatar

`<vox-avatar>` shows a user image, falling back to initials.

<div style="display: flex; gap: 0.75rem; align-items: center; margin: 1rem 0;">
  <vox-avatar size="sm" initials="VP" alt="Vox Pupuli"></vox-avatar>
  <vox-avatar size="md" initials="OV" alt="OpenVox"></vox-avatar>
  <vox-avatar size="lg" initials="AB" alt="A. Breaker"></vox-avatar>
  <vox-avatar size="xl" src="https://avatars.githubusercontent.com/u/9979110?s=160" alt="Vox Pupuli logo"></vox-avatar>
</div>

```html
<vox-avatar src="/img/user.png" alt="A. Breaker" size="lg"></vox-avatar>
<vox-avatar initials="AB" alt="A. Breaker"></vox-avatar>
```

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `src` | `string` | — | Image URL |
| `alt` | `string` | `''` | Accessible name |
| `initials` | `string` | `''` | Fallback initials |
| `size` | `sm \| md \| lg \| xl` | `md` | Diameter |
