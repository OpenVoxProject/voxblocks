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

<vox-code-block language="html">
&lt;!doctype html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8" /&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
  &lt;title&gt;Modules — Forge Admin&lt;/title&gt;
  &lt;link rel="stylesheet" href="https://unpkg.com/@openvoxproject/voxblocks/dist/cdn/voxblocks.css" /&gt;
  &lt;script type="module" src="https://unpkg.com/@openvoxproject/voxblocks/dist/cdn/voxblocks.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;vox-header site-title="Forge Admin" href="/"&gt;
    &lt;vox-avatar slot="actions" size="sm" initials="DR" alt="D. Ramírez"&gt;&lt;/vox-avatar&gt;
  &lt;/vox-header&gt;

  &lt;div class="vox-display-flex vox-items-start vox-gap-xl vox-p-all-lg"&gt;
    &lt;div style="flex: 0 0 13rem;"&gt;
      &lt;vox-sidenav label="Admin"&gt;
        &lt;vox-sidenav-item href="/admin/modules" current&gt;
          &lt;vox-icon slot="icon" name="module" size="sm"&gt;&lt;/vox-icon&gt;
          Modules
        &lt;/vox-sidenav-item&gt;
        &lt;vox-sidenav-item href="/admin/maintainers"&gt;
          &lt;vox-icon slot="icon" name="people" size="sm"&gt;&lt;/vox-icon&gt;
          Maintainers
        &lt;/vox-sidenav-item&gt;
        &lt;vox-sidenav-item href="/admin/reports"&gt;
          &lt;vox-icon slot="icon" name="report" size="sm"&gt;&lt;/vox-icon&gt;
          Reports
        &lt;/vox-sidenav-item&gt;
        &lt;vox-sidenav-item href="/admin/settings"&gt;
          &lt;vox-icon slot="icon" name="settings" size="sm"&gt;&lt;/vox-icon&gt;
          Settings
        &lt;/vox-sidenav-item&gt;
      &lt;/vox-sidenav&gt;
    &lt;/div&gt;

    &lt;div style="flex: 1 1 auto; min-width: 0;"&gt;
      &lt;div class="vox-display-flex vox-justify-between vox-items-center vox-m-bottom-md"&gt;
        &lt;h1 class="vox-ts-xl vox-m-y-none"&gt;Modules&lt;/h1&gt;
        &lt;vox-button size="sm"&gt;New module&lt;/vox-button&gt;
      &lt;/div&gt;

      &lt;div class="vox-table-wrap"&gt;
        &lt;table class="vox-table vox-table--striped"&gt;
          &lt;thead&gt;
            &lt;tr&gt;&lt;th&gt;Module&lt;/th&gt;&lt;th&gt;Version&lt;/th&gt;&lt;th&gt;Status&lt;/th&gt;&lt;th&gt;Downloads&lt;/th&gt;&lt;/tr&gt;
          &lt;/thead&gt;
          &lt;tbody&gt;
            &lt;tr&gt;&lt;td&gt;puppet-nginx&lt;/td&gt;&lt;td&gt;6.0.1&lt;/td&gt;&lt;td&gt;&lt;vox-badge variant="tip"&gt;Published&lt;/vox-badge&gt;&lt;/td&gt;&lt;td&gt;1.2M&lt;/td&gt;&lt;/tr&gt;
            &lt;tr&gt;&lt;td&gt;puppet-systemd&lt;/td&gt;&lt;td&gt;8.1.0&lt;/td&gt;&lt;td&gt;&lt;vox-badge variant="tip"&gt;Published&lt;/vox-badge&gt;&lt;/td&gt;&lt;td&gt;3.4M&lt;/td&gt;&lt;/tr&gt;
            &lt;tr&gt;&lt;td&gt;puppet-postgresql&lt;/td&gt;&lt;td&gt;10.5.0-rc1&lt;/td&gt;&lt;td&gt;&lt;vox-badge variant="warning"&gt;Pre-release&lt;/vox-badge&gt;&lt;/td&gt;&lt;td&gt;2.1M&lt;/td&gt;&lt;/tr&gt;
          &lt;/tbody&gt;
        &lt;/table&gt;
      &lt;/div&gt;

      &lt;vox-pagination class="vox-m-top-md"&gt;
        &lt;a href="?page=1"&gt;←&lt;/a&gt;
        &lt;a href="?page=1" aria-current="page"&gt;1&lt;/a&gt;
        &lt;a href="?page=2"&gt;2&lt;/a&gt;
        &lt;a href="?page=3"&gt;3&lt;/a&gt;
        &lt;a href="?page=2"&gt;→&lt;/a&gt;
      &lt;/vox-pagination&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</vox-code-block>

## Empty state

When there's nothing to show yet (a fresh account, a cleared filter), swap the table for `<vox-empty-state>` rather than rendering an empty table:

<vox-code-block language="html">
&lt;vox-empty-state heading="No modules yet"&gt;
  &lt;span slot="icon"&gt;&lt;vox-icon name="module" size="xl"&gt;&lt;/vox-icon&gt;&lt;/span&gt;
  You haven't published any modules. Your first one is easier than you think.
  &lt;vox-button slot="actions" size="sm"&gt;Publish a module&lt;/vox-button&gt;
&lt;/vox-empty-state&gt;
</vox-code-block>
