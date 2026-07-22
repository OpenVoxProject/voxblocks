# Series Nav

`<vox-series-nav>` provides previous/next links between pages in a series.

<div style="margin: 1rem 0;">
  <vox-series-nav
    previous-href="#"
    previous-label="Installing the server"
    next-href="#"
    next-label="Configuring agents"
  ></vox-series-nav>
</div>

```html
<vox-series-nav
  previous-href="/install"
  previous-label="Installing the server"
  next-href="/agents"
  next-label="Configuring agents"
></vox-series-nav>
```

## API

| Attribute | Type | Description |
| --- | --- | --- |
| `previous-href` / `previous-label` | `string` | Previous page (omit href to hide) |
| `next-href` / `next-label` | `string` | Next page (omit href to hide) |
