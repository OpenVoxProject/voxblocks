# Billboard

`<vox-billboard>` is a split media-and-content section for landing pages.

<div style="margin: 1rem 0;">
  <vox-billboard heading="Community-maintained modules">
    <img slot="media" src="https://voxpupuli.org/images/vox.png" alt="" />
    <p>Vox Pupuli maintains hundreds of modules, tools, and gems — kept alive by a worldwide community of contributors.</p>
    <vox-button slot="actions">Browse modules</vox-button>
    <vox-cta slot="actions" href="#">How to contribute</vox-cta>
  </vox-billboard>
</div>

```html
<vox-billboard heading="Community-maintained modules" reverse>
  <img slot="media" src="/img/community.png" alt="" />
  <p>Hundreds of modules, tools, and gems…</p>
  <vox-button slot="actions">Browse modules</vox-button>
</vox-billboard>
```

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `heading` | `string` | `''` | Section heading |
| `reverse` | `boolean` | `false` | Media on the right |

| Slot | Description |
| --- | --- |
| `media` | Image or media |
| *(default)* | Body content |
| `actions` | Buttons / CTA links |
