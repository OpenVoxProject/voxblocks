# Subnav

`<vox-subnav>` is a horizontal secondary navigation bar.

<div style="margin: 1rem 0;">
  <vox-subnav>
    <a href="#" aria-current="page">Overview</a>
    <a href="#">Installation</a>
    <a href="#">Configuration</a>
    <a href="#">Troubleshooting</a>
  </vox-subnav>
</div>

```html
<vox-subnav label="Server docs">
  <a href="/server" aria-current="page">Overview</a>
  <a href="/server/install">Installation</a>
</vox-subnav>
```

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | `Secondary` | Accessible nav name |
