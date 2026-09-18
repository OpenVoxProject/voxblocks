---
title: "Getting Started"
---

# Getting Started

VoxBlocks is a set of [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) for OpenVox community web sites and apps. Because they are standard custom elements, they work in plain HTML pages, Jekyll sites, VitePress docs, and any framework.

## With a bundler (npm)

<vox-code-block language="bash">
npm install @voxpupuli/voxblocks
</vox-code-block>

Import once in your entry point — this registers every `<vox-*>` element and pulls in the design tokens:

<vox-code-block language="javascript">
import '@voxpupuli/voxblocks';
import '@voxpupuli/voxblocks/voxblocks.css';
</vox-code-block>

## Without a build step (CDN / static sites)

The CDN build bundles Lit, so a single module script is enough:

<vox-code-block language="html">
&lt;link rel="stylesheet" href="https://unpkg.com/@voxpupuli/voxblocks/dist/cdn/voxblocks.css"&gt;
&lt;script type="module" src="https://unpkg.com/@voxpupuli/voxblocks/dist/cdn/voxblocks.js"&gt;&lt;/script&gt;
</vox-code-block>

## Use the components

<vox-code-block language="html">
&lt;vox-button href="https://voxpupuli.org/openvox/"&gt;Visit OpenVox&lt;/vox-button&gt;

&lt;vox-callout variant="tip"&gt;
  &lt;p&gt;Components are just HTML tags — no framework required.&lt;/p&gt;
&lt;/vox-callout&gt;
</vox-code-block>

## Dark mode

Tokens switch automatically when an ancestor element (usually `<html>`) has the class `dark` — the VitePress convention used by the OpenVox docs — or the attribute `data-vox-theme="dark"`:

<vox-code-block language="html">
&lt;html data-vox-theme="dark"&gt;
</vox-code-block>

## Fonts

VoxBlocks doesn't bundle font files — it names Inter (body), Source Serif 4 (headings), and JetBrains Mono (code) in its font stacks and falls back to system fonts if they aren't loaded, the same way it's always handled Inter. Load them yourself for the intended look, e.g.:

<vox-code-block language="html">
&lt;link rel="preconnect" href="https://fonts.googleapis.com"&gt;
&lt;link rel="preconnect" href="https://fonts.gstatic.com" crossorigin&gt;
&lt;link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,600;1,500&amp;family=Inter:wght@400;600&amp;family=JetBrains+Mono:wght@400;500&amp;display=swap" rel="stylesheet"&gt;
</vox-code-block>

All three are open licensed (Source Serif 4 and JetBrains Mono included) and safe to self-host instead if a site doesn't want the Google Fonts request.
