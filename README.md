# VoxBlocks

Web components for [OpenVox](https://voxpupuli.org/openvox/) community web sites and apps — a general-purpose design system built on web standards, so branding stays consistent across every OpenVox site. The default theme, "Deep Teal," is a distinct OpenVox identity rather than a copy of any one site's look, and is fully retunable via CSS custom properties.

Because they are standard custom elements (built with [Lit](https://lit.dev)), the components work in plain HTML, Jekyll, VitePress, Vue, React — anywhere.

## Components

The component catalog, by category:

| Category | Components |
| --- | --- |
| Actions | `vox-button`, `vox-cta`, `vox-theme-toggle` |
| Forms | `vox-checkbox`, `vox-combobox` (filtering listbox, ARIA 1.2 combobox pattern), `vox-file-input`, `vox-input`, `vox-input-group`, `vox-radio-group`/`vox-radio`, `vox-range`, `vox-select` (add `multiple` for a list box), `vox-switch`, `vox-textarea` |
| Images | `vox-avatar`, `vox-billboard`, `vox-icon` — 79 icons ([full set](https://openvoxproject.github.io/voxblocks/icons/)): shared UI baseline, OpenVox marketing, module registry (Forge replacement), fleet console (Puppet Enterprise replacement). `<vox-alert>`/`<vox-callout>` show one automatically; `<vox-sidenav-item>`/`<vox-card>`/`<vox-empty-state>`/`<vox-link-hub-item>` accept one via an `icon` slot |
| Navigation | `vox-breadcrumbs`, `vox-header` (collapses to a menu button below 768px), `vox-pagination`, `vox-series-nav`, `vox-sidenav` (collapses to a menu button below 768px, same as `vox-header`), `vox-subnav`, `vox-tabs`, `vox-toc` |
| Overlays | `vox-dialog`, `vox-disclosure`, `vox-dropdown`, `vox-menu` |
| Page content | `vox-accordion`, `vox-alert`, `vox-badge`, `vox-calendar-tile`, `vox-callout`, `vox-card`, `vox-code-block` (built-in syntax highlighting, no Prism/highlight.js/Shiki needed), `vox-cta-band`, `vox-datum`, `vox-empty-state`, `vox-footer`, `vox-grid`, `vox-hero`, `vox-link-hub`, `vox-loader`, `vox-quote`, `vox-record-list`, `vox-sponsor-tier`/`vox-sponsor`, `vox-stat`, `vox-step-indicator`, `vox-timeline` |
| Utilities | Utility classes: spacing (`vox-m-*`/`vox-p-*`, in logical `-start`/`-end` and physical `-left`/`-right` flavours), a `vox-container` layout wrapper (1280px, centered, matches `vox-header`/`vox-footer`), typography (`vox-ts-*`, `vox-text-*`), color (`vox-color-*`, `vox-bg-*`, plus an extended `vox-color-{hue}-{100-900}`/`vox-bg-{hue}-{100-900}` palette across 7 hues), border, display, flex, gap, shadow, visibility (incl. `vox-sr-only` and responsive hiding), width, z-index — plus `.vox-table`/`.vox-table-wrap`, `.vox-list`, and `.vox-prose` |

Form controls are form-associated custom elements (ElementInternals): they submit values, files, and validity with a plain `<form>` like native inputs.

The docs also include a [Layouts](https://openvoxproject.github.io/voxblocks/layouts/) section — six full-page starting points (basic content page, marketing page, docs with sidenav, blog article, sidebar app shell, dashboard) built entirely from the components above, each with copy-pasteable HTML.

## Usage

With a bundler:

```sh
npm install @openvoxproject/voxblocks
```

```js
import '@openvoxproject/voxblocks';
import '@openvoxproject/voxblocks/voxblocks.css';
```

Without a build step (Lit bundled in):

```html
<link rel="stylesheet" href="https://unpkg.com/@openvoxproject/voxblocks/dist/cdn/voxblocks.css">
<script type="module" src="https://unpkg.com/@openvoxproject/voxblocks/dist/cdn/voxblocks.js"></script>
```

Then:

```html
<vox-callout variant="tip">
  <p>Components are just HTML tags — no framework required.</p>
</vox-callout>
```

## Right-to-left languages

Set `dir` once on `<html>` and every component follows it — there is no
per-component prop to thread through:

```html
<html lang="ar" dir="rtl">
```

It works on a subtree too, for a page that mixes directions:

```html
<div dir="rtl" lang="ar">
  <vox-alert variant="warning">لم يتم حفظ التغييرات.</vox-alert>
</div>
```

What that changes:

- **Layout** mirrors — spacing, borders, rounded corners, absolute
  positioning and text alignment are all written as CSS logical
  properties, so they follow the text rather than the screen.
- **Arrow keys** in `<vox-tabs>` and `<vox-radio-group>` follow what the
  user sees: <kbd>←</kbd> moves to the *next* item in RTL, because that
  is where the next item is. <kbd>↑</kbd>/<kbd>↓</kbd> are unaffected.
- **Directional glyphs** owned by a component mirror with it — the
  `<vox-cta>` arrow, `<vox-series-nav>`'s prev/next arrows, the
  collapsed `<vox-disclosure>` and `<vox-sidenav>` chevrons, and the
  `<vox-select>`/`<vox-combobox>` chevrons.
- **`<vox-code-block>` stays left-to-right**, whatever the page does,
  because source code does. Only the block is exempt; its heading,
  filename and surrounding text still mirror.

### Icons

`<vox-icon>` does *not* mirror by default: `chevron-right` often means
the right-hand side of the screen, and should stay put. Add `flip-rtl`
when the icon points along the text instead — "next", "back", "onward":

```html
<vox-icon name="arrow-right" flip-rtl></vox-icon>
```

### Utility classes

Use the `-start`/`-end` utilities for anything that should follow the
text, and keep `-left`/`-right` for the rarer case of pinning something
to a side of the screen regardless of direction:

| Follows the text | Always that side |
| --- | --- |
| `vox-m-start-*`, `vox-m-end-*` | `vox-m-left-*`, `vox-m-right-*` |
| `vox-p-start-*`, `vox-p-end-*` | `vox-p-left-*`, `vox-p-right-*` |
| `vox-text-start`, `vox-text-end` | `vox-text-left`, `vox-text-right` |
| `vox-border-start`, `vox-border-end` | `vox-border-left`, `vox-border-right` |

For your own CSS, logical properties (`margin-inline-start`,
`inset-inline-end`, `text-align: start`) cover nearly everything.
Horizontal transforms are the exception, so VoxBlocks publishes
`--vox-flip` — `1` in LTR, `-1` in RTL:

```css
.drawer { transform: translateX(calc(240px * var(--vox-flip))); }
```

## Development

The docs site (`docs/`) is a Jekyll site — same stack as the [OpenVox marketing site](https://github.com/OpenVoxProject/openvoxproject.github.io) — so it needs Ruby 3.4+ and [Bundler](https://bundler.io) in addition to Node, and its own gem install:

```sh
npm install
cd docs && BUNDLE_GEMFILE=Gemfile bundle install && cd ..
```

```sh
npm run docs:dev         # component docs & live playground
npm run storybook        # per-component Storybook, one story per documented example
npm run build            # build npm + CDN bundles and type declarations
npm run docs:build       # build the docs site
npm run build-storybook  # build the static Storybook
```

Design tokens live in `src/tokens/tokens.css` (`--vox-*` custom properties, light + dark). Components live in `src/components/<name>/vox-<name>.ts`.

## License

Apache-2.0
