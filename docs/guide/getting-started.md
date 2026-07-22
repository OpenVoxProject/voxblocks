# Getting Started

VoxBlocks is a set of [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) for Vox Pupuli and OpenVox community web sites. Because they are standard custom elements, they work in plain HTML pages, Jekyll sites, VitePress docs, and any framework.

## With a bundler (npm)

```sh
npm install @voxpupuli/voxblocks
```

Import once in your entry point — this registers every `<vox-*>` element and pulls in the design tokens:

```js
import '@voxpupuli/voxblocks';
import '@voxpupuli/voxblocks/voxblocks.css';
```

## Without a build step (CDN / static sites)

The CDN build bundles Lit, so a single module script is enough:

```html
<link rel="stylesheet" href="https://unpkg.com/@voxpupuli/voxblocks/dist/cdn/voxblocks.css">
<script type="module" src="https://unpkg.com/@voxpupuli/voxblocks/dist/cdn/voxblocks.js"></script>
```

## Use the components

```html
<vox-button href="https://voxpupuli.org">Visit Vox Pupuli</vox-button>

<vox-callout variant="tip">
  <p>Components are just HTML tags — no framework required.</p>
</vox-callout>
```

## Dark mode

Tokens switch automatically when an ancestor element (usually `<html>`) has the class `dark` — the VitePress convention used by the OpenVox docs — or the attribute `data-vox-theme="dark"`:

```html
<html data-vox-theme="dark">
```
