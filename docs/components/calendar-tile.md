# Calendar Tile

`<vox-calendar-tile>` is a compact date block for event listings.

<div style="display: flex; gap: 1rem; align-items: center; margin: 1rem 0;">
  <vox-calendar-tile date="2026-09-18"></vox-calendar-tile>
  <div>
    <strong>VoxConf 2026</strong><br />
    <span style="color: var(--vp-c-text-2); font-size: 14px;">Community conference, online</span>
  </div>
</div>

```html
<vox-calendar-tile date="2026-09-18"></vox-calendar-tile>
```

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `date` | `string` (ISO) | `''` | The date to display |
| `locale` | `string` | page locale | Month formatting locale |
