# VoxBlocks

Web components for [Vox Pupuli](https://voxpupuli.org) and [OpenVox](https://voxpupuli.org/openvox/) community web sites — a general-purpose design system built on web standards, to keep branding consistent across all community offerings. The default theme starts from the look of [docs.openvoxproject.org](https://docs.openvoxproject.org/) and is fully retunable via CSS custom properties.

Because they are standard custom elements (built with [Lit](https://lit.dev)), the components work in plain HTML, Jekyll, VitePress, Vue, React — anywhere.

## Components

The component catalog, by category:

| Category | Components |
| --- | --- |
| Actions | `vox-button`, `vox-cta` |
| Forms | `vox-checkbox`, `vox-file-input`, `vox-input`, `vox-input-group`, `vox-radio-group`/`vox-radio`, `vox-select`, `vox-switch`, `vox-textarea` |
| Images | `vox-avatar`, `vox-billboard` |
| Navigation | `vox-breadcrumbs`, `vox-header`, `vox-pagination`, `vox-series-nav`, `vox-sidenav`, `vox-subnav`, `vox-tabs` |
| Overlays | `vox-dialog`, `vox-disclosure`, `vox-dropdown` |
| Page content | `vox-accordion`, `vox-alert`, `vox-badge`, `vox-calendar-tile`, `vox-callout`, `vox-card`, `vox-empty-state`, `vox-footer`, `vox-grid`, `vox-hero`, `vox-link-hub`, `vox-loader`, `vox-quote`, `vox-stat`, `vox-step-indicator`, `vox-timeline` |
| Utilities | Utility classes: spacing (`vox-m-*`/`vox-p-*`), typography (`vox-ts-*`, `vox-text-*`), color (`vox-color-*`, `vox-bg-*`), border, display, flex, gap, shadow, visibility (incl. `vox-sr-only` and responsive hiding), width, z-index — plus `.vox-table` and `.vox-list` |

Form controls are form-associated custom elements (ElementInternals): they submit values, files, and validity with a plain `<form>` like native inputs.

## Usage

With a bundler:

```sh
npm install @avitacco/voxblocks
```

```js
import '@avitacco/voxblocks';
import '@avitacco/voxblocks/voxblocks.css';
```

Without a build step (Lit bundled in):

```html
<link rel="stylesheet" href="https://unpkg.com/@avitacco/voxblocks/dist/cdn/voxblocks.css">
<script type="module" src="https://unpkg.com/@avitacco/voxblocks/dist/cdn/voxblocks.js"></script>
```

Then:

```html
<vox-callout variant="tip">
  <p>Components are just HTML tags — no framework required.</p>
</vox-callout>
```

## Development

```sh
npm install
npm run docs:dev    # component docs & live playground
npm run build       # build npm + CDN bundles and type declarations
npm run docs:build  # build the docs site
```

Design tokens live in `src/tokens/tokens.css` (`--vox-*` custom properties, light + dark). Components live in `src/components/<name>/vox-<name>.ts`.

## License

Apache-2.0
