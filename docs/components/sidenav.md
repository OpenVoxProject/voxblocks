# Sidenav

`<vox-sidenav>` is a vertical section navigation in the style of the OpenVox docs sidebar, with collapsible groups.

<div style="margin: 1rem 0; max-width: 16rem;">
  <vox-sidenav>
    <vox-sidenav-item href="#" current>Overview</vox-sidenav-item>
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

```html
<vox-sidenav label="Server docs">
  <vox-sidenav-item href="/server" current>Overview</vox-sidenav-item>
  <vox-sidenav-group heading="Installation" open>
    <vox-sidenav-item href="/server/deb">Debian / Ubuntu</vox-sidenav-item>
  </vox-sidenav-group>
</vox-sidenav>
```

## API

`<vox-sidenav>`: `label` — accessible nav name.
`<vox-sidenav-group>`: `heading` (string), `open` (boolean).
`<vox-sidenav-item>`: `href` (string), `current` (boolean) — marks the active page.
