# Card

`<vox-card>` is a feature tile in the style of the OpenVox docs landing page. With `href` the whole card becomes one link.

## Basic

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.75rem; margin: 1rem 0;">
  <vox-card heading="OpenVox Server" href="https://docs.openvoxproject.org">
    <span slot="icon">⚙️</span>
    Installation and configuration of the server components.
  </vox-card>
  <vox-card heading="OpenVoxDB" href="https://docs.openvoxproject.org">
    <span slot="icon">💾</span>
    Store and query infrastructure data.
  </vox-card>
  <vox-card heading="Community">
    Cards without an href render as static tiles.
  </vox-card>
</div>

```html
<vox-card heading="OpenVox Server" href="https://docs.openvoxproject.org">
  <span slot="icon">⚙️</span>
  Installation and configuration of the server components.
</vox-card>
```

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `heading` | `string` | `''` | Card title |
| `href` | `string` | — | Makes the card a link |
| `target` | `string` | — | Link target |

| Slot | Description |
| --- | --- |
| *(default)* | Body text |
| `icon` | Icon or emoji above the heading |
