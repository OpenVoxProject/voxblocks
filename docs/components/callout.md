# Callout

`<vox-callout>` is an admonition block matching the custom containers used across the OpenVox docs.

## Variants

<div style="display: grid; gap: 0.75rem; margin: 1rem 0;">
  <vox-callout variant="info"><p>Neutral background information.</p></vox-callout>
  <vox-callout variant="tip"><p>A helpful suggestion.</p></vox-callout>
  <vox-callout variant="warning"><p>Something to be careful about.</p></vox-callout>
  <vox-callout variant="danger"><p>A destructive or breaking consequence.</p></vox-callout>
</div>

```html
<vox-callout variant="tip">
  <p>A helpful suggestion.</p>
</vox-callout>
```

## Custom heading

<div style="margin: 1rem 0;">
  <vox-callout variant="warning" heading="Deprecated since 8.0">
    <p>Use <code>openvox-agent</code> instead.</p>
  </vox-callout>
</div>

```html
<vox-callout variant="warning" heading="Deprecated since 8.0">
  <p>Use <code>openvox-agent</code> instead.</p>
</vox-callout>
```

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `info \| tip \| warning \| danger` | `info` | Semantic style |
| `heading` | `string` | Variant name | Heading text |
