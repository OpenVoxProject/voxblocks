---
title: "Record List"
---

# Record List

`<vox-record-list>` is a list of linked records — search results, an admin index, anything that's a stack of "go to this thing" rows — built from `<vox-record-list-item>` rows. Pass metadata as [`<vox-datum>`](/components/datum/) elements into the default slot.

<div style="margin: 1rem 0;">
  <vox-record-list>
    <vox-record-list-item heading="Update scheduling software" href="#">
      <vox-datum name="Owner"><vox-icon slot="icon" name="person" size="sm"></vox-icon>Mafalda_Lesch47</vox-datum>
      <vox-datum name="Updated"><vox-icon slot="icon" name="calendar" size="sm"></vox-icon>April 1, 2021</vox-datum>
    </vox-record-list-item>
    <vox-record-list-item heading="Integrate command line tools" href="#">
      <vox-datum name="Owner"><vox-icon slot="icon" name="person" size="sm"></vox-icon>Janessa79</vox-datum>
      <vox-datum name="Updated"><vox-icon slot="icon" name="calendar" size="sm"></vox-icon>April 1, 2021</vox-datum>
    </vox-record-list-item>
    <vox-record-list-item heading="Synchronize email workflows" href="#">
      <vox-datum name="Owner"><vox-icon slot="icon" name="person" size="sm"></vox-icon>Laura_Schamberger43</vox-datum>
      <vox-datum name="Updated"><vox-icon slot="icon" name="calendar" size="sm"></vox-icon>April 1, 2021</vox-datum>
    </vox-record-list-item>
  </vox-record-list>
</div>

```html
<vox-record-list>
  <vox-record-list-item heading="Update scheduling software" href="/records/1">
    <vox-datum name="Owner"><vox-icon slot="icon" name="person" size="sm"></vox-icon>Mafalda_Lesch47</vox-datum>
    <vox-datum name="Updated"><vox-icon slot="icon" name="calendar" size="sm"></vox-icon>April 1, 2021</vox-datum>
  </vox-record-list-item>
</vox-record-list>
```

## Small size

`size="sm"` turns heading/meta/`end` into real table columns — built with CSS
`subgrid`, so each aligns against the same column in every other `size="sm"`
row in the same `<vox-record-list>`, sized to that column's widest cell like
a native `<table>`. The arrow drops out; `heading` and a populated meta
column each link to `href` individually, since a grid row can't itself be
one native link the way a block row can. Suited to a dense activity or run
log rather than an indexed record. Use the `end` slot for trailing content
like a status badge.

<div style="margin: 1rem 0;">
  <vox-record-list>
    <vox-record-list-item size="sm" heading="8:37 AM" href="#">
      <vox-datum name="Target">web01.example.com</vox-datum>
      <span slot="end"><vox-badge variant="warning">running</vox-badge> (#641)</span>
    </vox-record-list-item>
    <vox-record-list-item size="sm" heading="8:37 AM" href="#">
      <vox-datum name="Target">web01.example.com</vox-datum>
      <span slot="end"><vox-badge variant="warning">running</vox-badge> (#640)</span>
    </vox-record-list-item>
    <vox-record-list-item size="sm" heading="8:37 AM" href="#">
      <vox-datum name="Target">no targets</vox-datum>
      <span slot="end"><vox-badge variant="warning">running</vox-badge> (#638)</span>
    </vox-record-list-item>
    <vox-record-list-item size="sm" heading="8:37 AM" href="#">
      <vox-datum name="Target">a.example.com, b.example.com, c.example.com, +1 more</vox-datum>
      <span slot="end"><vox-badge variant="warning">running</vox-badge> (#637)</span>
    </vox-record-list-item>
  </vox-record-list>
</div>

```html
<vox-record-list>
  <vox-record-list-item size="sm" heading="8:37 AM" href="/runs/641">
    <vox-datum name="Target">web01.example.com</vox-datum>
    <span slot="end"><vox-badge variant="warning">running</vox-badge> (#641)</span>
  </vox-record-list-item>
</vox-record-list>
```

A `size="sm"` row only lays out correctly as a direct child of
`<vox-record-list>` — its columns are defined there and shared via
`subgrid`, so an item placed elsewhere renders as a plain block instead.
Multiple `<vox-datum>` elements in one `sm` row share a single meta column
(gap-separated, not independently aligned).

## API

`<vox-record-list>` has no attributes of its own — it exists to define the shared grid columns.

| Slot | Description |
| --- | --- |
| *(default)* | `<vox-record-list-item>` elements |

`<vox-record-list-item>`:

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `heading` | `string` | `''` | Row title (`md`), or the first column (`sm`). |
| `href` | `string` | — | Link target. At `md`, the heading and the trailing arrow both link here. At `sm`, `heading` and a populated meta column each link here individually. Unset renders a static row with no link. |
| `size` | `'md' \| 'sm'` | `md` | Row density. `sm` is a table-aligned line for logs/activity; `md` is the icon+arrow layout for an indexed record. |

| Slot | Description |
| --- | --- |
| *(default)* | Metadata, e.g. [`<vox-datum>`](/components/datum/) elements |
| `end` | Trailing content after the meta, e.g. a `<vox-badge>` status |
