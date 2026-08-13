---
title: "Docs Page with Sidenav"
---

# Docs Page with Sidenav

A documentation page: fixed sidebar section nav, breadcrumbs, prose content, and previous/next links — the layout this site's own docs use.

<div style="margin: 1rem 0; border: 1px solid var(--vox-color-divider); border-radius: 8px; overflow: hidden;">
  <vox-header site-title="OpenVox Docs" href="#">
    <a href="#" aria-current="page">Server</a>
    <a href="#">Agent</a>
    <a href="#">Modules</a>
  </vox-header>

  <div style="display: flex; align-items: flex-start; gap: 2rem; padding: 1.5rem;">
    <div style="flex: 0 0 14rem;">
      <vox-sidenav label="Server docs">
        <vox-sidenav-item href="#">Overview</vox-sidenav-item>
        <vox-sidenav-group heading="Installation" open>
          <vox-sidenav-item href="#" current>Debian / Ubuntu</vox-sidenav-item>
          <vox-sidenav-item href="#">RHEL / Fedora</vox-sidenav-item>
        </vox-sidenav-group>
        <vox-sidenav-group heading="Configuration">
          <vox-sidenav-item href="#">Server settings</vox-sidenav-item>
          <vox-sidenav-item href="#">Agent settings</vox-sidenav-item>
        </vox-sidenav-group>
      </vox-sidenav>
    </div>
    <div style="flex: 1 1 auto; min-width: 0;">
      <vox-breadcrumbs>
        <a href="#">Docs</a>
        <a href="#">Server</a>
        <span aria-current="page">Debian / Ubuntu</span>
      </vox-breadcrumbs>
      <div class="vox-prose vox-m-top-lg">
        <h1 class="vox-m-y-none">Installing on Debian / Ubuntu</h1>
        <p>The server package is published to the OpenVox apt repository and supports Debian 12 and Ubuntu 22.04+.</p>
        <vox-callout variant="warning" class="vox-m-y-md">
          <p>Server and agent major versions must match. Mixed-version fleets are only supported during a rolling upgrade.</p>
        </vox-callout>
        <h2>Add the repository</h2>
        <p>Import the signing key and add the apt source before installing the <code>openvox-server</code> package.</p>
      </div>
      <vox-series-nav
        previous-href="#"
        previous-label="Overview"
        next-href="#"
        next-label="RHEL / Fedora"
        class="vox-m-top-xl"
      ></vox-series-nav>
    </div>
  </div>

  <vox-footer>
    <vox-footer-column heading="Docs">
      <a href="#">Server</a>
      <a href="#">Agent</a>
    </vox-footer-column>
    <span slot="bottom">© OpenVox. Apache-2.0 licensed.</span>
  </vox-footer>
</div>

## Full HTML

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Installing on Debian / Ubuntu — OpenVox Docs</title>
  <link rel="stylesheet" href="https://unpkg.com/@openvoxproject/voxblocks/dist/cdn/voxblocks.css" />
  <script type="module" src="https://unpkg.com/@openvoxproject/voxblocks/dist/cdn/voxblocks.js"></script>
</head>
<body>
  <vox-header site-title="OpenVox Docs" href="/">
    <a href="/server" aria-current="page">Server</a>
    <a href="/agent">Agent</a>
    <a href="/modules">Modules</a>
  </vox-header>

  <div class="vox-display-flex vox-items-start vox-gap-xl vox-p-all-lg">
    <div style="flex: 0 0 14rem;">
      <vox-sidenav label="Server docs">
        <vox-sidenav-item href="/server">Overview</vox-sidenav-item>
        <vox-sidenav-group heading="Installation" open>
          <vox-sidenav-item href="/server/deb" current>Debian / Ubuntu</vox-sidenav-item>
          <vox-sidenav-item href="/server/rhel">RHEL / Fedora</vox-sidenav-item>
        </vox-sidenav-group>
        <vox-sidenav-group heading="Configuration">
          <vox-sidenav-item href="/server/config">Server settings</vox-sidenav-item>
          <vox-sidenav-item href="/agent/config">Agent settings</vox-sidenav-item>
        </vox-sidenav-group>
      </vox-sidenav>
    </div>

    <div style="flex: 1 1 auto; min-width: 0;">
      <vox-breadcrumbs>
        <a href="/docs">Docs</a>
        <a href="/server">Server</a>
        <span aria-current="page">Debian / Ubuntu</span>
      </vox-breadcrumbs>

      <div class="vox-prose vox-m-top-lg">
        <h1>Installing on Debian / Ubuntu</h1>
        <p>The server package is published to the OpenVox apt repository and supports Debian 12 and Ubuntu 22.04+.</p>

        <vox-callout variant="warning">
          <p>Server and agent major versions must match. Mixed-version fleets are only supported during a rolling upgrade.</p>
        </vox-callout>

        <h2>Add the repository</h2>
        <p>Import the signing key and add the apt source before installing the <code>openvox-server</code> package.</p>
      </div>

      <vox-series-nav
        previous-href="/server"
        previous-label="Overview"
        next-href="/server/rhel"
        next-label="RHEL / Fedora"
        class="vox-m-top-xl"
      ></vox-series-nav>
    </div>
  </div>

  <vox-footer>
    <vox-footer-column heading="Docs">
      <a href="/server">Server</a>
      <a href="/agent">Agent</a>
    </vox-footer-column>
    <span slot="bottom">© OpenVox. Apache-2.0 licensed.</span>
  </vox-footer>
</body>
</html>
```
