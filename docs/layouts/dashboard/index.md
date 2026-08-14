---
title: "Dashboard"
---

# Dashboard

An at-a-glance overview screen: key stats up top, an alert for anything that needs attention, and card-based summaries below. No sidebar — built for a single focused view rather than deep navigation.

Each module card's category pill (Database, Web Server, Networking) uses the [extended color palette](../../guide/colors/) — a fixed hue per category, distinguishable at a glance regardless of how many categories a real module list ends up with.

<div style="margin: 1rem 0; border: 1px solid var(--vox-color-divider); border-radius: 8px; overflow: hidden;">
  <vox-header site-title="Forge Dashboard" href="#">
    <a href="#" aria-current="page">Overview</a>
    <a href="#">Modules</a>
    <a href="#">Team</a>
    <vox-avatar slot="actions" size="sm" initials="DR" alt="D. Ramírez"></vox-avatar>
  </vox-header>

  <div style="padding: 1.5rem;">
    <h1 class="vox-ts-xl vox-m-bottom-md">Overview</h1>
    <vox-alert variant="warning" heading="Two modules need a maintainer" class="vox-m-bottom-lg">
      <p>puppet-legacy-app and puppet-old-tool haven't had a release in over a year.</p>
    </vox-alert>
    <vox-grid min="160px" gap="lg" style="margin-bottom: 1.5rem;">
      <vox-stat value="450+" label="Modules">Community-maintained</vox-stat>
      <vox-stat value="12" label="Pending PRs">Awaiting review</vox-stat>
      <vox-stat value="3" label="Releases">This week</vox-stat>
      <vox-stat value="98%" label="CI passing">Across all modules</vox-stat>
    </vox-grid>
    <vox-grid min="240px" gap="md">
      <vox-card heading="puppetdb">
        <span slot="badge">8.1.0</span>
        <span class="vox-bg-blue-100 vox-color-blue-900 vox-p-x-sm vox-radius-full vox-ts-xs vox-text-semibold" style="display: inline-block; margin-bottom: 0.35rem;">Database</span>
        Installs PostgreSQL and PuppetDB, sets up the connection to Puppet master.
        <span slot="footer">313,347,865 downloads</span>
      </vox-card>
      <vox-card heading="apache">
        <span slot="badge">12.0.1</span>
        <span class="vox-bg-gold-100 vox-color-gold-900 vox-p-x-sm vox-radius-full vox-ts-xs vox-text-semibold" style="display: inline-block; margin-bottom: 0.35rem;">Web Server</span>
        Installs and configures Apache HTTP Server, including virtual hosts and modules.
        <span slot="footer">204,981,112 downloads</span>
      </vox-card>
      <vox-card heading="nginx">
        <span slot="badge">6.0.1</span>
        <span class="vox-bg-purple-100 vox-color-purple-900 vox-p-x-sm vox-radius-full vox-ts-xs vox-text-semibold" style="display: inline-block; margin-bottom: 0.35rem;">Networking</span>
        Installs and configures nginx, including sites, upstreams, and SSL/TLS.
        <span slot="footer">128,442,003 downloads</span>
      </vox-card>
    </vox-grid>
  </div>
</div>

## Full HTML

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Overview — Forge Dashboard</title>
  <link rel="stylesheet" href="https://unpkg.com/@openvoxproject/voxblocks/dist/cdn/voxblocks.css" />
  <script type="module" src="https://unpkg.com/@openvoxproject/voxblocks/dist/cdn/voxblocks.js"></script>
</head>
<body>
  <vox-header site-title="Forge Dashboard" href="/">
    <a href="/overview" aria-current="page">Overview</a>
    <a href="/modules">Modules</a>
    <a href="/team">Team</a>
    <vox-avatar slot="actions" size="sm" initials="DR" alt="D. Ramírez"></vox-avatar>
  </vox-header>

  <div class="vox-p-all-lg">
    <h1 class="vox-ts-xl vox-m-bottom-md">Overview</h1>

    <vox-alert variant="warning" heading="Two modules need a maintainer" class="vox-m-bottom-lg">
      <p>puppet-legacy-app and puppet-old-tool haven't had a release in over a year.</p>
    </vox-alert>

    <vox-grid min="160px" gap="lg" class="vox-m-bottom-lg">
      <vox-stat value="450+" label="Modules">Community-maintained</vox-stat>
      <vox-stat value="12" label="Pending PRs">Awaiting review</vox-stat>
      <vox-stat value="3" label="Releases">This week</vox-stat>
      <vox-stat value="98%" label="CI passing">Across all modules</vox-stat>
    </vox-grid>

    <vox-grid min="240px" gap="md">
      <vox-card heading="puppetdb">
        <span slot="badge">8.1.0</span>
        <span class="vox-bg-blue-100 vox-color-blue-900 vox-p-x-sm vox-radius-full vox-ts-xs vox-text-semibold" style="display: inline-block; margin-bottom: 0.35rem;">Database</span>
        Installs PostgreSQL and PuppetDB, sets up the connection to Puppet master.
        <span slot="footer">313,347,865 downloads</span>
      </vox-card>
      <vox-card heading="apache">
        <span slot="badge">12.0.1</span>
        <span class="vox-bg-gold-100 vox-color-gold-900 vox-p-x-sm vox-radius-full vox-ts-xs vox-text-semibold" style="display: inline-block; margin-bottom: 0.35rem;">Web Server</span>
        Installs and configures Apache HTTP Server, including virtual hosts and modules.
        <span slot="footer">204,981,112 downloads</span>
      </vox-card>
      <vox-card heading="nginx">
        <span slot="badge">6.0.1</span>
        <span class="vox-bg-purple-100 vox-color-purple-900 vox-p-x-sm vox-radius-full vox-ts-xs vox-text-semibold" style="display: inline-block; margin-bottom: 0.35rem;">Networking</span>
        Installs and configures nginx, including sites, upstreams, and SSL/TLS.
        <span slot="footer">128,442,003 downloads</span>
      </vox-card>
    </vox-grid>
  </div>
</body>
</html>
```
