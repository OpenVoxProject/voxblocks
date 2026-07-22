# Hero

`<vox-hero>` is a page-title header section.

<div style="margin: 1rem 0;">
  <vox-hero eyebrow="Documentation" heading="OpenVox Server">
    Everything you need to install, configure, and operate the OpenVox server components.
    <vox-button slot="actions">Get started</vox-button>
    <vox-button slot="actions" variant="alt">Release notes</vox-button>
  </vox-hero>
</div>

```html
<vox-hero eyebrow="Documentation" heading="OpenVox Server">
  Everything you need to install, configure, and operate…
  <vox-button slot="actions">Get started</vox-button>
</vox-hero>
```

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `eyebrow` | `string` | `''` | Small label above the heading |
| `heading` | `string` | `''` | Page title (renders as `<h1>`) |

| Slot | Description |
| --- | --- |
| *(default)* | Intro text |
| `actions` | Buttons / CTA links |
