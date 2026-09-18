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

<vox-code-block language="html">
&lt;!doctype html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8" /&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
  &lt;title&gt;Installing on Debian / Ubuntu — OpenVox Docs&lt;/title&gt;
  &lt;link rel="stylesheet" href="https://unpkg.com/@openvoxproject/voxblocks/dist/cdn/voxblocks.css" /&gt;
  &lt;script type="module" src="https://unpkg.com/@openvoxproject/voxblocks/dist/cdn/voxblocks.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;vox-header site-title="OpenVox Docs" href="/"&gt;
    &lt;a href="/server" aria-current="page"&gt;Server&lt;/a&gt;
    &lt;a href="/agent"&gt;Agent&lt;/a&gt;
    &lt;a href="/modules"&gt;Modules&lt;/a&gt;
  &lt;/vox-header&gt;

  &lt;div class="vox-display-flex vox-items-start vox-gap-xl vox-p-all-lg"&gt;
    &lt;div style="flex: 0 0 14rem;"&gt;
      &lt;vox-sidenav label="Server docs"&gt;
        &lt;vox-sidenav-item href="/server"&gt;Overview&lt;/vox-sidenav-item&gt;
        &lt;vox-sidenav-group heading="Installation" open&gt;
          &lt;vox-sidenav-item href="/server/deb" current&gt;Debian / Ubuntu&lt;/vox-sidenav-item&gt;
          &lt;vox-sidenav-item href="/server/rhel"&gt;RHEL / Fedora&lt;/vox-sidenav-item&gt;
        &lt;/vox-sidenav-group&gt;
        &lt;vox-sidenav-group heading="Configuration"&gt;
          &lt;vox-sidenav-item href="/server/config"&gt;Server settings&lt;/vox-sidenav-item&gt;
          &lt;vox-sidenav-item href="/agent/config"&gt;Agent settings&lt;/vox-sidenav-item&gt;
        &lt;/vox-sidenav-group&gt;
      &lt;/vox-sidenav&gt;
    &lt;/div&gt;

    &lt;div style="flex: 1 1 auto; min-width: 0;"&gt;
      &lt;vox-breadcrumbs&gt;
        &lt;a href="/docs"&gt;Docs&lt;/a&gt;
        &lt;a href="/server"&gt;Server&lt;/a&gt;
        &lt;span aria-current="page"&gt;Debian / Ubuntu&lt;/span&gt;
      &lt;/vox-breadcrumbs&gt;

      &lt;div class="vox-prose vox-m-top-lg"&gt;
        &lt;h1&gt;Installing on Debian / Ubuntu&lt;/h1&gt;
        &lt;p&gt;The server package is published to the OpenVox apt repository and supports Debian 12 and Ubuntu 22.04+.&lt;/p&gt;

        &lt;vox-callout variant="warning"&gt;
          &lt;p&gt;Server and agent major versions must match. Mixed-version fleets are only supported during a rolling upgrade.&lt;/p&gt;
        &lt;/vox-callout&gt;

        &lt;h2&gt;Add the repository&lt;/h2&gt;
        &lt;p&gt;Import the signing key and add the apt source before installing the &lt;code&gt;openvox-server&lt;/code&gt; package.&lt;/p&gt;
      &lt;/div&gt;

      &lt;vox-series-nav
        previous-href="/server"
        previous-label="Overview"
        next-href="/server/rhel"
        next-label="RHEL / Fedora"
        class="vox-m-top-xl"
      &gt;&lt;/vox-series-nav&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;vox-footer&gt;
    &lt;vox-footer-column heading="Docs"&gt;
      &lt;a href="/server"&gt;Server&lt;/a&gt;
      &lt;a href="/agent"&gt;Agent&lt;/a&gt;
    &lt;/vox-footer-column&gt;
    &lt;span slot="bottom"&gt;© OpenVox. Apache-2.0 licensed.&lt;/span&gt;
  &lt;/vox-footer&gt;
&lt;/body&gt;
&lt;/html&gt;
</vox-code-block>
