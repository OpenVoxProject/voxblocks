---
title: "Blog Article"
---

# Blog Article

A single blog post: title, byline, body copy, a pull quote, and a set of related links to keep readers on the site.

<div style="margin: 1rem 0; border: 1px solid var(--vox-color-divider); border-radius: 8px; overflow: hidden;">
  <vox-header site-title="OpenVox Blog" href="#">
    <a href="#" aria-current="page">Blog</a>
    <a href="#">Modules</a>
  </vox-header>

  <div style="padding: 2rem 1.5rem; max-width: 42rem; margin: 0 auto;">
    <vox-breadcrumbs>
      <a href="#">Blog</a>
      <span aria-current="page">Why we forked</span>
    </vox-breadcrumbs>
    <h1 class="vox-m-top-md vox-m-bottom-sm">Why we forked, and what happens next</h1>
    <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 1.5rem;">
      <vox-avatar size="sm" initials="SA" alt="S. Almeida"></vox-avatar>
      <span class="vox-color-text-2 vox-ts-sm">S. Almeida · Nov 12, 2024 · 6 min read</span>
    </div>
    <div class="vox-prose">
      <p>When the license terms changed, the community had a choice: adapt in place, or take the code and keep going on our own terms. We chose the second one.</p>
      <p>OpenVox exists because the alternative — hoping a vendor's incentives stay aligned with ours indefinitely — isn't a plan, it's a bet.</p>
      <h2>What actually changes for you</h2>
      <p>If you're already running Puppet, nothing breaks. Manifests, modules, and the agent protocol are unchanged. What's different is who's steering.</p>
    </div>
    <div style="margin: 2rem 0; display: flex; justify-content: center;">
      <vox-quote attribution="S. Almeida">
        We didn't fork to be different. We forked to stay the same, on our own terms.
      </vox-quote>
    </div>
    <h2 class="vox-m-bottom-md">Related posts</h2>
    <vox-link-hub>
      <vox-link-hub-item href="#" heading="Governance, one year in">
        What worked, what didn't, and what we'd change.
      </vox-link-hub-item>
      <vox-link-hub-item href="#" heading="Migrating without downtime">
        A field report from three production upgrades.
      </vox-link-hub-item>
    </vox-link-hub>
  </div>

  <vox-footer>
    <vox-footer-column heading="Blog">
      <a href="#">All posts</a>
      <a href="#">RSS</a>
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
  <title>Why we forked, and what happens next — OpenVox Blog</title>
  <link rel="stylesheet" href="https://unpkg.com/@openvoxproject/voxblocks/dist/cdn/voxblocks.css" />
  <script type="module" src="https://unpkg.com/@openvoxproject/voxblocks/dist/cdn/voxblocks.js"></script>
</head>
<body>
  <vox-header site-title="OpenVox Blog" href="/">
    <a href="/blog" aria-current="page">Blog</a>
    <a href="/modules">Modules</a>
  </vox-header>

  <div class="vox-p-all-lg vox-max-width-md vox-m-x-auto">
    <vox-breadcrumbs>
      <a href="/blog">Blog</a>
      <span aria-current="page">Why we forked</span>
    </vox-breadcrumbs>

    <h1 class="vox-m-top-md vox-m-bottom-sm">Why we forked, and what happens next</h1>

    <div class="vox-display-flex vox-items-center vox-gap-sm vox-m-bottom-lg">
      <vox-avatar size="sm" initials="SA" alt="S. Almeida"></vox-avatar>
      <span class="vox-color-text-2 vox-ts-sm">S. Almeida · Nov 12, 2024 · 6 min read</span>
    </div>

    <div class="vox-prose">
      <p>When the license terms changed, the community had a choice: adapt in place, or take the code and keep going on our own terms. We chose the second one.</p>
      <p>OpenVox exists because the alternative — hoping a vendor's incentives stay aligned with ours indefinitely — isn't a plan, it's a bet.</p>

      <h2>What actually changes for you</h2>
      <p>If you're already running Puppet, nothing breaks. Manifests, modules, and the agent protocol are unchanged. What's different is who's steering.</p>
    </div>

    <div class="vox-m-y-xl vox-display-flex vox-justify-center">
      <vox-quote attribution="S. Almeida">
        We didn't fork to be different. We forked to stay the same, on our own terms.
      </vox-quote>
    </div>

    <h2 class="vox-m-bottom-md">Related posts</h2>
    <vox-link-hub>
      <vox-link-hub-item href="/blog/governance-one-year-in" heading="Governance, one year in">
        What worked, what didn't, and what we'd change.
      </vox-link-hub-item>
      <vox-link-hub-item href="/blog/migrating-without-downtime" heading="Migrating without downtime">
        A field report from three production upgrades.
      </vox-link-hub-item>
    </vox-link-hub>
  </div>

  <vox-footer>
    <vox-footer-column heading="Blog">
      <a href="/blog">All posts</a>
      <a href="/blog/rss.xml">RSS</a>
    </vox-footer-column>
    <span slot="bottom">© OpenVox. Apache-2.0 licensed.</span>
  </vox-footer>
</body>
</html>
```
