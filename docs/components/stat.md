# Stat

`<vox-stat>` shows a large statistic with a label.

<vox-grid min="160px" style="margin: 1rem 0;">
  <vox-stat value="450+" label="Modules">Community-maintained</vox-stat>
  <vox-stat value="140" label="Contributors">Active this year</vox-stat>
  <vox-stat value="12" label="Years">Of Vox Pupuli</vox-stat>
</vox-grid>

```html
<vox-stat value="450+" label="Modules">Community-maintained</vox-stat>
```

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` | `''` | The big number |
| `label` | `string` | `''` | What it counts |

| Slot | Description |
| --- | --- |
| *(default)* | Supporting description |
