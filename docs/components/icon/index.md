---
title: "Icon"
---

# Icon

`<vox-icon>` renders one icon from the shared VoxBlocks icon set as inline SVG, so it inherits `color` and scales like text. Every icon shares one drawing rule: 48×48 viewBox, 2px stroke, round caps and joins, `currentColor` — the same convention used throughout the docs and the real [OpenVox product marks](https://openvoxproject.github.io/products.html).

Icons are decorative by default (`aria-hidden`). Set `label` when the icon is the only content conveying meaning, e.g. an icon-only button.

A handful of components use this set internally too — `<vox-alert>` and `<vox-callout>` render a `variant`-matched icon automatically, and `<vox-sidenav-item>`/`<vox-card>`/`<vox-empty-state>`/`<vox-link-hub-item>` accept one through an `icon` slot.

Browse the [full icon set](../../icons/) to see every available name.

```html
<vox-icon name="search"></vox-icon>
<vox-icon name="chevron-down"></vox-icon>
```

## Sizes

`sm` (16px), `md` (20px, default), `lg` (24px), `xl` (48px — the icon's native viewBox size, undownscaled; reach for it in a hero-style moment like an [empty state](../empty-state/)'s icon).

<div style="display: flex; gap: 1rem; align-items: center; margin: 1rem 0;">
  <vox-icon name="search" size="sm"></vox-icon>
  <vox-icon name="search" size="md"></vox-icon>
  <vox-icon name="search" size="lg"></vox-icon>
  <vox-icon name="search" size="xl"></vox-icon>
</div>

```html
<vox-icon name="search" size="sm"></vox-icon>
<vox-icon name="search" size="xl"></vox-icon>
```

## Color

Icons inherit `color` from their context — no separate color prop. Pair with the [utility color classes](../../guide/utilities/#color) or a component's own text color.

<div style="display: flex; gap: 1rem; align-items: center; margin: 1rem 0;">
  <span class="vox-color-brand"><vox-icon name="check" size="lg"></vox-icon></span>
  <span class="vox-color-warning"><vox-icon name="warning" size="lg"></vox-icon></span>
  <span class="vox-color-danger"><vox-icon name="delete" size="lg"></vox-icon></span>
</div>

```html
<span class="vox-color-warning">
  <vox-icon name="warning"></vox-icon>
</span>
```

## Accessible icon-only controls

Icons render `aria-hidden="true"` by default, since they're normally paired with visible text. Set `label` when an icon is the *only* content — most often an icon-only button.

<div style="margin: 1rem 0;">
  <vox-button size="sm" style="display: inline-flex; align-items: center;">
    <vox-icon name="delete" label="Delete"></vox-icon>
  </vox-button>
</div>

```html
<vox-button size="sm">
  <vox-icon name="delete" label="Delete"></vox-icon>
</vox-button>
```

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `IconName` | — | Which icon to draw |
| `size` | `sm` \| `md` \| `lg` \| `xl` | `md` | 16 / 20 / 24 / 48px |
| `label` | `string` | — | Accessible name; omit for decorative icons |
