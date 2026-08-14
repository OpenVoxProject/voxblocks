---
title: "Design Tokens"
---

# Design Tokens

All colors, fonts, spacing, and radii are CSS custom properties defined in `voxblocks.css`, prefixed `--vox-`. They are set on `:root` and inherit into every component's shadow DOM, so a site can re-theme VoxBlocks by overriding variables — no component changes needed.

The default palette, "Deep Teal," is an OpenVox-specific identity rather than a copy of any one site's theme — an analogous blue-green family chosen because it holds up well under red-green colorblindness, the most common form.

## Color

| Token | Purpose |
| --- | --- |
| `--vox-color-brand-1` | Brand text and links |
| `--vox-color-brand-2` | Brand hover states |
| `--vox-color-brand-3` | Solid brand fills (buttons) |
| `--vox-color-brand-soft` | Subtle brand backgrounds |
| `--vox-color-tip-1` / `-soft` | Success / tip |
| `--vox-color-warning-1` / `-soft` | Warning |
| `--vox-color-danger-1/2/3` / `-soft` | Danger / destructive |
| `--vox-color-bg`, `-alt`, `-soft`, `-elv` | Surfaces |
| `--vox-color-text-1/2/3` | Text emphasis levels |
| `--vox-color-divider`, `--vox-color-border` | Lines |

## Typography, shape, spacing

| Token | Value |
| --- | --- |
| `--vox-font-family-base` | Inter / system sans stack |
| `--vox-font-family-display` | Source Serif 4 / serif stack — headings only (`vox-hero`, `vox-billboard`, `vox-quote`) |
| `--vox-font-family-mono` | JetBrains Mono / system mono stack |
| `--vox-radius-sm/md/lg/full` | 4px / 8px / 12px / pill |
| `--vox-space-1…8` | 0.25rem – 2rem |
| `--vox-shadow-1/2` | Elevation |

## Overriding

```css
:root {
  /* Give buttons and links your site's accent color */
  --vox-color-brand-1: #067f56;
  --vox-color-brand-2: #08976a;
  --vox-color-brand-3: #0aa877;
}
```

## Dark mode

Dark values activate under `.dark` or `[data-vox-theme='dark']` on any ancestor. Override dark-mode tokens under the same selectors.
