# Button

`<vox-button>` renders an accessible button, or a link styled as a button when `href` is set.

## Variants

<div style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin: 1rem 0;">
  <vox-button variant="brand">Brand</vox-button>
  <vox-button variant="alt">Alt</vox-button>
  <vox-button variant="danger">Danger</vox-button>
  <vox-button variant="ghost">Ghost</vox-button>
</div>

```html
<vox-button variant="brand">Brand</vox-button>
<vox-button variant="alt">Alt</vox-button>
<vox-button variant="danger">Danger</vox-button>
<vox-button variant="ghost">Ghost</vox-button>
```

## Sizes

<div style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap; margin: 1rem 0;">
  <vox-button size="sm">Small</vox-button>
  <vox-button size="md">Medium</vox-button>
  <vox-button size="lg">Large</vox-button>
</div>

```html
<vox-button size="sm">Small</vox-button>
<vox-button size="md">Medium</vox-button>
<vox-button size="lg">Large</vox-button>
```

## As a link

<div style="margin: 1rem 0;">
  <vox-button href="https://voxpupuli.org" target="_blank">Visit Vox Pupuli</vox-button>
</div>

```html
<vox-button href="https://voxpupuli.org" target="_blank">Visit Vox Pupuli</vox-button>
```

## Disabled

<div style="margin: 1rem 0;">
  <vox-button disabled>Disabled</vox-button>
</div>

```html
<vox-button disabled>Disabled</vox-button>
```

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `brand \| alt \| danger \| ghost` | `brand` | Visual style |
| `size` | `sm \| md \| lg` | `md` | Button size |
| `href` | `string` | — | Render as a link |
| `target` | `string` | — | Link target (adds `rel="noreferrer"` for `_blank`) |
| `type` | `button \| submit \| reset` | `button` | Button type |
| `disabled` | `boolean` | `false` | Disable the button |
