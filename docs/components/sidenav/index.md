---
title: "Sidenav"
---

# Sidenav

`<vox-sidenav>` is a vertical section navigation in the style of the OpenVox docs sidebar, with collapsible groups. Below 768px it collapses behind a toggle button — the same breakpoint and pattern [`vox-header`](../header/) uses for its own nav — so this docs site's own sidebar (below, on a narrow viewport) is the live example.

<div style="margin: 1rem 0; max-width: 16rem;">
  <vox-sidenav>
    <vox-sidenav-item href="#" current>
      <vox-icon slot="icon" name="dashboard" size="sm"></vox-icon>
      Overview
    </vox-sidenav-item>
    <vox-sidenav-group heading="Installation" open>
      <vox-sidenav-item href="#">Debian / Ubuntu</vox-sidenav-item>
      <vox-sidenav-item href="#">RHEL / Fedora</vox-sidenav-item>
    </vox-sidenav-group>
    <vox-sidenav-group heading="Configuration">
      <vox-sidenav-item href="#">Server settings</vox-sidenav-item>
      <vox-sidenav-item href="#">Agent settings</vox-sidenav-item>
    </vox-sidenav-group>
  </vox-sidenav>
</div>

<vox-code-block language="html">
&lt;vox-sidenav label="Server docs"&gt;
  &lt;vox-sidenav-item href="/server" current&gt;
    &lt;vox-icon slot="icon" name="dashboard" size="sm"&gt;&lt;/vox-icon&gt;
    Overview
  &lt;/vox-sidenav-item&gt;
  &lt;vox-sidenav-group heading="Installation" open&gt;
    &lt;vox-sidenav-item href="/server/deb"&gt;Debian / Ubuntu&lt;/vox-sidenav-item&gt;
  &lt;/vox-sidenav-group&gt;
&lt;/vox-sidenav&gt;
</vox-code-block>

Icons are optional and per-item — use them for top-level entries, skip them inside groups, whatever the nav actually needs.

## API

`<vox-sidenav>`: `label` — accessible nav name; `toggle-label` (default `"Menu"`) — visible text on the mobile toggle button.
`<vox-sidenav-group>`: `heading` (string), `open` (boolean).
`<vox-sidenav-item>`: `href` (string), `current` (boolean) — marks the active page; `icon` slot for an optional leading icon.
