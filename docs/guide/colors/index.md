---
title: "Colors"
---

# Colors

Beyond the [semantic design tokens](../design-tokens/) (brand, tip, warning, danger — themed, and different in light/dark), VoxBlocks ships an extended color palette: seven hues, each a fixed 100–900 tint/shade scale. Reach for these when a component needs a specific hue rather than a themed role — data viz series, tags, status chips, illustrations.

Unlike the semantic tokens, palette swatches are **not theme-adaptive**: `--vox-palette-teal-500` is the same color in light and dark mode, the same way a can of paint doesn't change color when the lights dim.

## Palette

{% callout tip "Reading the scale" %}
Lower numbers are lighter tints, higher numbers are darker shades. `500` is each hue's base tone.
{% endcallout %}

### Gray

<vox-grid cols="9">
<div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-gray-100 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">gray-100</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-gray-200 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">gray-200</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-gray-300 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">gray-300</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-gray-400 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">gray-400</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-gray-500 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">gray-500</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-gray-600 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">gray-600</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-gray-700 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">gray-700</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-gray-800 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">gray-800</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-gray-900 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">gray-900</code>
  </div>
</vox-grid>


### Teal

<vox-grid cols="9">
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-teal-100 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">teal-100</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-teal-200 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">teal-200</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-teal-300 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">teal-300</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-teal-400 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">teal-400</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-teal-500 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">teal-500</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-teal-600 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">teal-600</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-teal-700 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">teal-700</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-teal-800 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">teal-800</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-teal-900 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">teal-900</code>
  </div>
</vox-grid>

### Blue

<vox-grid cols="9">
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-blue-100 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">blue-100</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-blue-200 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">blue-200</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-blue-300 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">blue-300</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-blue-400 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">blue-400</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-blue-500 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">blue-500</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-blue-600 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">blue-600</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-blue-700 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">blue-700</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-blue-800 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">blue-800</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-blue-900 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">blue-900</code>
  </div>
</vox-grid>

### Green

<vox-grid cols="9">
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-green-100 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">green-100</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-green-200 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">green-200</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-green-300 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">green-300</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-green-400 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">green-400</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-green-500 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">green-500</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-green-600 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">green-600</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-green-700 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">green-700</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-green-800 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">green-800</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-green-900 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">green-900</code>
  </div>
</vox-grid>

### Gold

<vox-grid cols="9">
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-gold-100 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">gold-100</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-gold-200 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">gold-200</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-gold-300 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">gold-300</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-gold-400 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">gold-400</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-gold-500 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">gold-500</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-gold-600 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">gold-600</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-gold-700 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">gold-700</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-gold-800 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">gold-800</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-gold-900 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">gold-900</code>
  </div>
</vox-grid>

### Red

<vox-grid cols="9">
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-red-100 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">red-100</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-red-200 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">red-200</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-red-300 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">red-300</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-red-400 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">red-400</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-red-500 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">red-500</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-red-600 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">red-600</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-red-700 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">red-700</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-red-800 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">red-800</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-red-900 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">red-900</code>
  </div>
</vox-grid>

### Purple

<vox-grid cols="9">
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-purple-100 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">purple-100</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-purple-200 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">purple-200</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-purple-300 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">purple-300</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-purple-400 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">purple-400</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-purple-500 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">purple-500</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-purple-600 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">purple-600</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-purple-700 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">purple-700</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-purple-800 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">purple-800</code>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem;">
    <span class="vox-bg-purple-900 vox-radius-md" style="display: block; width: 56px; height: 56px;"></span>
    <code style="font-size: 12px;">purple-900</code>
  </div>
</vox-grid>

## Tokens

Every swatch is a `--vox-palette-{hue}-{step}` custom property, defined once in `src/tokens/palette.css` (`:root` only — no dark-mode override):

<vox-code-block language="css">
--vox-palette-teal-500: #41d2c9;
</vox-code-block>

## Utility classes

`vox-color-{hue}-{step}` sets text color, `vox-bg-{hue}-{step}` sets background:

<vox-code-block language="html">
&lt;span class="vox-bg-teal-100 vox-color-teal-900"&gt;New&lt;/span&gt;
&lt;span class="vox-bg-purple-600" style="color: white;"&gt;Beta&lt;/span&gt;
</vox-code-block>

## Pairing for contrast

Palette steps aren't paired with dark/light text automatically the way the semantic `-soft` tokens are — pick the pairing yourself:

- **Soft badge**: a `100` background with `900` text of the *same hue*. Every hue passes WCAG AA (≥4.5:1) at that pairing.
- **Solid fill**: a `600`–`900` background with white text (`--vox-color-text-inverse`).

Don't mix hues in one pairing (e.g. `blue-100` background with `red-900` text) — contrast wasn't verified across hues, only within each hue's own scale.

## When to use semantic vs. palette tokens

- **Semantic** (`--vox-color-brand-*`, `-tip-*`, `-warning-*`, `-danger-*`): anything that carries meaning — buttons, alerts, form validation. These adapt to dark mode and to a site's rebrand via [token overrides](../design-tokens/#overriding).
- **Palette** (`--vox-palette-*`): anything that just needs to *look like* a color — a chart series, a category tag, a decorative accent. These don't change with theme, which is what you want for a legend where "blue" must stay recognizably blue.

The [Dashboard layout](../../layouts/dashboard/) uses this exact soft-badge pairing for module category tags — one hue per category, unrelated to any component's semantic state.
