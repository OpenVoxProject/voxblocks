---
title: "Theme Toggle"
---

# Theme Toggle

`<vox-theme-toggle>` is a self-contained light/dark switch. It reads and writes `data-vox-theme` on `<html>` and persists the choice to `localStorage['vox-theme']` — the same convention VoxBlocks' [dark mode](../../guide/getting-started/#dark-mode) already uses.

<div style="margin: 1rem 0;">
  <vox-theme-toggle></vox-theme-toggle>
</div>

<vox-code-block language="html">
&lt;vox-theme-toggle&gt;&lt;/vox-theme-toggle&gt;
</vox-code-block>

## Required: a blocking script in `<head>`

A custom element can't upgrade until the browser parses it, which is well after first paint — too late to prevent a flash of the wrong theme. Every page still needs its own small blocking script in `<head>`, *before* any stylesheet, to apply the stored (or system) theme immediately:

<vox-code-block language="html">
&lt;script&gt;
  (function () {
    var stored = localStorage.getItem('vox-theme');
    var theme =
      stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-vox-theme', theme);
  })();
&lt;/script&gt;
</vox-code-block>

`<vox-theme-toggle>` picks up whatever this script already applied — it doesn't set an initial theme itself, only reflects and toggles it.

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `light-label` | `string` | `'Switch to dark theme'` | Accessible label while in light mode |
| `dark-label` | `string` | `'Switch to light theme'` | Accessible label while in dark mode |

Fires `vox-theme-change` with `detail: { theme: 'light' | 'dark' }` when toggled.
