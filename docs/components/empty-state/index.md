---
title: "Empty State"
---

# Empty State

`<vox-empty-state>` is a placeholder for views with nothing to show yet.

<div style="margin: 1rem 0;">
  <vox-empty-state heading="No modules yet">
    <span slot="icon"><vox-icon name="module" size="xl"></vox-icon></span>
    You haven't published any modules. Your first one is easier than you think.
    <vox-button slot="actions" size="sm">Publish a module</vox-button>
  </vox-empty-state>
</div>

<vox-code-block language="html">
&lt;vox-empty-state heading="No modules yet"&gt;
  &lt;span slot="icon"&gt;&lt;vox-icon name="module" size="xl"&gt;&lt;/vox-icon&gt;&lt;/span&gt;
  You haven't published any modules yet.
  &lt;vox-button slot="actions" size="sm"&gt;Publish a module&lt;/vox-button&gt;
&lt;/vox-empty-state&gt;
</vox-code-block>

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `heading` | `string` | `''` | Headline |

| Slot | Description |
| --- | --- |
| `icon` | Icon or emoji |
| *(default)* | Explanatory text |
| `actions` | Suggested next step |
