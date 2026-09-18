---
title: "Menu"
---

# Menu

`<vox-menu>` is an overlay menu anchored to an arbitrary trigger — an avatar, an icon button, anything you slot in. Unlike `<vox-dropdown>`, which owns a fixed label+chevron trigger, `<vox-menu>` lets you supply the trigger content yourself. Entries are plain `<a>` or `<button>` children; `<hr>` draws a separator.

<div style="display: flex; justify-content: flex-end; margin: 1rem 0; min-height: 220px;">
  <vox-menu label="Account menu">
    <vox-avatar slot="trigger" size="sm" initials="UN" alt="Username"></vox-avatar>
    <a href="#">Profile</a>
    <a href="#">Settings</a>
    <hr />
    <button type="button">Log out</button>
  </vox-menu>
</div>

```html
<vox-menu label="Account menu">
  <vox-avatar slot="trigger" size="sm" initials="UN" alt="Username"></vox-avatar>
  <a href="/profile">Profile</a>
  <a href="/settings">Settings</a>
  <hr />
  <button type="button">Log out</button>
</vox-menu>
```

Arrow keys move through entries; Escape and outside clicks close the menu.

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | — | Accessible name for the trigger button. Set this when the `trigger` slot has no visible text of its own (e.g. an avatar-only trigger); leave unset when it does. |
| `placement` | `'bottom-start' \| 'bottom-end'` | `bottom-end` | Which side of the trigger the menu aligns to. |
| `open` | `boolean` | `false` | Menu visibility. |

`trigger` slot holds the trigger content; default slot holds the menu entries.

Fires `vox-close` when the menu closes (Escape, outside click, or an entry click).
