---
title: "Sidebar App Shell"
---

# Sidebar App Shell

A logged-in application screen: persistent sidebar navigation, a data table as the main view, and a user avatar in the header. Good starting point for an admin panel or an internal tool.

<div style="margin: 1rem 0; border: 1px solid var(--vox-color-divider); border-radius: 8px; overflow: hidden;">
  <vox-header site-title="Forge Admin" href="#">
    <vox-avatar slot="actions" size="sm" initials="DR" alt="D. Ramírez"></vox-avatar>
  </vox-header>

  <div style="display: flex; align-items: flex-start; gap: 2rem; padding: 1.5rem;">
    <div style="flex: 0 0 13rem;">
      <vox-sidenav label="Admin">
        <vox-sidenav-item href="#" current>
          <vox-icon slot="icon" name="module" size="sm"></vox-icon>
          Modules
        </vox-sidenav-item>
        <vox-sidenav-item href="#">
          <vox-icon slot="icon" name="people" size="sm"></vox-icon>
          Maintainers
        </vox-sidenav-item>
        <vox-sidenav-item href="#">
          <vox-icon slot="icon" name="report" size="sm"></vox-icon>
          Reports
        </vox-sidenav-item>
        <vox-sidenav-item href="#">
          <vox-icon slot="icon" name="settings" size="sm"></vox-icon>
          Settings
        </vox-sidenav-item>
      </vox-sidenav>
    </div>
    <div style="flex: 1 1 auto; min-width: 0;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
        <h1 class="vox-ts-xl vox-m-y-none">Modules</h1>
        <vox-button size="sm">New module</vox-button>
      </div>
      <div class="vox-table-wrap">
        <table class="vox-table vox-table--striped">
          <thead>
            <tr><th>Module</th><th>Version</th><th>Status</th><th>Downloads</th></tr>
          </thead>
          <tbody>
            <tr><td>puppet-nginx</td><td>6.0.1</td><td><vox-badge variant="tip">Published</vox-badge></td><td>1.2M</td></tr>
            <tr><td>puppet-systemd</td><td>8.1.0</td><td><vox-badge variant="tip">Published</vox-badge></td><td>3.4M</td></tr>
            <tr><td>puppet-postgresql</td><td>10.5.0-rc1</td><td><vox-badge variant="warning">Pre-release</vox-badge></td><td>2.1M</td></tr>
          </tbody>
        </table>
      </div>
      <vox-pagination class="vox-m-top-md">
        <a href="#">←</a>
        <a href="#" aria-current="page">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">→</a>
      </vox-pagination>
    </div>
  </div>
</div>

## Full HTML

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Modules — Forge Admin</title>
  <link rel="stylesheet" href="https://unpkg.com/@openvoxproject/voxblocks/dist/cdn/voxblocks.css" />
  <script type="module" src="https://unpkg.com/@openvoxproject/voxblocks/dist/cdn/voxblocks.js"></script>
</head>
<body>
  <vox-header site-title="Forge Admin" href="/">
    <vox-avatar slot="actions" size="sm" initials="DR" alt="D. Ramírez"></vox-avatar>
  </vox-header>

  <div class="vox-display-flex vox-items-start vox-gap-xl vox-p-all-lg">
    <div style="flex: 0 0 13rem;">
      <vox-sidenav label="Admin">
        <vox-sidenav-item href="/admin/modules" current>
          <vox-icon slot="icon" name="module" size="sm"></vox-icon>
          Modules
        </vox-sidenav-item>
        <vox-sidenav-item href="/admin/maintainers">
          <vox-icon slot="icon" name="people" size="sm"></vox-icon>
          Maintainers
        </vox-sidenav-item>
        <vox-sidenav-item href="/admin/reports">
          <vox-icon slot="icon" name="report" size="sm"></vox-icon>
          Reports
        </vox-sidenav-item>
        <vox-sidenav-item href="/admin/settings">
          <vox-icon slot="icon" name="settings" size="sm"></vox-icon>
          Settings
        </vox-sidenav-item>
      </vox-sidenav>
    </div>

    <div style="flex: 1 1 auto; min-width: 0;">
      <div class="vox-display-flex vox-justify-between vox-items-center vox-m-bottom-md">
        <h1 class="vox-ts-xl vox-m-y-none">Modules</h1>
        <vox-button size="sm">New module</vox-button>
      </div>

      <div class="vox-table-wrap">
        <table class="vox-table vox-table--striped">
          <thead>
            <tr><th>Module</th><th>Version</th><th>Status</th><th>Downloads</th></tr>
          </thead>
          <tbody>
            <tr><td>puppet-nginx</td><td>6.0.1</td><td><vox-badge variant="tip">Published</vox-badge></td><td>1.2M</td></tr>
            <tr><td>puppet-systemd</td><td>8.1.0</td><td><vox-badge variant="tip">Published</vox-badge></td><td>3.4M</td></tr>
            <tr><td>puppet-postgresql</td><td>10.5.0-rc1</td><td><vox-badge variant="warning">Pre-release</vox-badge></td><td>2.1M</td></tr>
          </tbody>
        </table>
      </div>

      <vox-pagination class="vox-m-top-md">
        <a href="?page=1">←</a>
        <a href="?page=1" aria-current="page">1</a>
        <a href="?page=2">2</a>
        <a href="?page=3">3</a>
        <a href="?page=2">→</a>
      </vox-pagination>
    </div>
  </div>
</body>
</html>
```

## Empty state

When there's nothing to show yet (a fresh account, a cleared filter), swap the table for `<vox-empty-state>` rather than rendering an empty table:

```html
<vox-empty-state heading="No modules yet">
  <span slot="icon"><vox-icon name="module" size="xl"></vox-icon></span>
  You haven't published any modules. Your first one is easier than you think.
  <vox-button slot="actions" size="sm">Publish a module</vox-button>
</vox-empty-state>
```
