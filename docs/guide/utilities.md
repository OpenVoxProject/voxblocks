# Utilities

VoxBlocks ships a utility class layer for light-DOM content — quick spacing, typography, color, and layout adjustments without writing CSS. All classes are prefixed `vox-`, derive from the [design tokens](./design-tokens) (so they follow theme overrides and dark mode), and use `!important` so they reliably win.

Included in `voxblocks.css`; nothing extra to load.

**Size scale** used by spacing and gap: `none` 0 · `xs` 0.25rem · `sm` 0.5rem · `md` 1rem · `lg` 1.5rem · `xl` 2rem · `xxl` 3rem.

## Spacing

Margin and padding: `vox-{m|p}-{side}-{size}` where side is `top`, `right`, `bottom`, `left`, `x`, `y`, or `all`.

```html
<div class="vox-m-top-lg vox-p-all-md">…</div>
<div class="vox-m-x-auto vox-max-width-md">centered column</div>
```

`vox-m-x-auto` centers block elements horizontally.

## Typography

Type scale `vox-ts-{xs|sm|md|lg|xl|xxl|3xl}` (12–36px), weight `vox-text-{regular|medium|semibold|bold}`, alignment `vox-text-{left|center|right}`, plus `vox-text-uppercase`, `vox-text-mono`, and line height `vox-lh-{tight|base|loose}`.

<p class="vox-ts-xl vox-text-bold vox-m-y-none">Extra-large bold text</p>
<p class="vox-ts-sm vox-text-uppercase vox-color-text-3 vox-m-y-none">Small uppercase label</p>
<p class="vox-text-mono vox-m-y-none">Monospace text</p>

```html
<p class="vox-ts-xl vox-text-bold">Extra-large bold text</p>
<p class="vox-ts-sm vox-text-uppercase vox-color-text-3">Small uppercase label</p>
```

## Color

Text: `vox-color-text-{1|2|3}` (emphasis levels), `vox-color-{brand|tip|warning|danger}`.
Background: `vox-bg`, `vox-bg-{alt|soft|elv}`, `vox-bg-brand`, `vox-bg-{brand|tip|warning|danger}-soft`.

<div class="vox-display-flex vox-gap-sm vox-flex-wrap vox-m-y-md">
  <span class="vox-bg-brand vox-p-x-sm vox-radius-sm">brand</span>
  <span class="vox-bg-brand-soft vox-color-brand vox-p-x-sm vox-radius-sm">brand-soft</span>
  <span class="vox-bg-tip-soft vox-color-tip vox-p-x-sm vox-radius-sm">tip-soft</span>
  <span class="vox-bg-warning-soft vox-color-warning vox-p-x-sm vox-radius-sm">warning-soft</span>
  <span class="vox-bg-danger-soft vox-color-danger vox-p-x-sm vox-radius-sm">danger-soft</span>
</div>

```html
<span class="vox-bg-brand-soft vox-color-brand">brand-soft</span>
```

## Border

`vox-border-{all|top|right|bottom|left|none}` (1px, divider color) and radius `vox-radius-{sm|md|lg|full}`.

<div class="vox-border-all vox-radius-lg vox-p-all-md vox-m-y-md">Bordered, rounded box</div>

```html
<div class="vox-border-all vox-radius-lg vox-p-all-md">…</div>
```

## Display

`vox-display-{block|inline|inline-block|flex|inline-flex|grid}` and `vox-hide`.

## Flex

Direction `vox-flex-{row|column}`, wrapping `vox-flex-{wrap|nowrap}`, main axis `vox-justify-{start|center|end|between}`, cross axis `vox-items-{start|center|end|stretch}`, and per-item `vox-grow-{0|1}` / `vox-shrink-0`.

<div class="vox-display-flex vox-justify-between vox-items-center vox-border-all vox-radius-md vox-p-all-sm vox-m-y-md">
  <span>Left</span>
  <span class="vox-color-text-3">Center-ish</span>
  <vox-badge>Right</vox-badge>
</div>

```html
<div class="vox-display-flex vox-justify-between vox-items-center">…</div>
```

## Gap

`vox-gap-{none|xs|sm|md|lg|xl|xxl}` — spacing between flex or grid children.

## Shadow

`vox-shadow-{1|2|none}` using the token elevation values.

<div class="vox-display-flex vox-gap-lg vox-m-y-md">
  <div class="vox-shadow-1 vox-p-all-md vox-radius-md vox-bg-elv">shadow-1</div>
  <div class="vox-shadow-2 vox-p-all-md vox-radius-md vox-bg-elv">shadow-2</div>
</div>

## Visibility

- `vox-hide` — remove from layout.
- `vox-sr-only` — visually hidden, still announced by screen readers.
- Responsive: `vox-hide-{sm|md|lg}-down` hides at and below the breakpoint, `vox-hide-{sm|md|lg}-up` at and above. Breakpoints: `sm` 480px, `md` 768px, `lg` 1024px.

```html
<span class="vox-hide-md-down">Only shown on wider screens</span>
<span class="vox-sr-only">Screen-reader-only label</span>
```

## Width

`vox-width-{full|auto|sm|md|lg|xl}` and `vox-max-width-{sm|md|lg|xl|full}` (20/30/40/50rem).

## Z-index

`vox-z-{0|10|100|1000}`.
