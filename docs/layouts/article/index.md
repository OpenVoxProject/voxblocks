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

<vox-code-block language="html">
&lt;!doctype html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8" /&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
  &lt;title&gt;Why we forked, and what happens next — OpenVox Blog&lt;/title&gt;
  &lt;link rel="stylesheet" href="https://unpkg.com/@openvoxproject/voxblocks/dist/cdn/voxblocks.css" /&gt;
  &lt;script type="module" src="https://unpkg.com/@openvoxproject/voxblocks/dist/cdn/voxblocks.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;vox-header site-title="OpenVox Blog" href="/"&gt;
    &lt;a href="/blog" aria-current="page"&gt;Blog&lt;/a&gt;
    &lt;a href="/modules"&gt;Modules&lt;/a&gt;
  &lt;/vox-header&gt;

  &lt;div class="vox-p-all-lg vox-max-width-md vox-m-x-auto"&gt;
    &lt;vox-breadcrumbs&gt;
      &lt;a href="/blog"&gt;Blog&lt;/a&gt;
      &lt;span aria-current="page"&gt;Why we forked&lt;/span&gt;
    &lt;/vox-breadcrumbs&gt;

    &lt;h1 class="vox-m-top-md vox-m-bottom-sm"&gt;Why we forked, and what happens next&lt;/h1&gt;

    &lt;div class="vox-display-flex vox-items-center vox-gap-sm vox-m-bottom-lg"&gt;
      &lt;vox-avatar size="sm" initials="SA" alt="S. Almeida"&gt;&lt;/vox-avatar&gt;
      &lt;span class="vox-color-text-2 vox-ts-sm"&gt;S. Almeida · Nov 12, 2024 · 6 min read&lt;/span&gt;
    &lt;/div&gt;

    &lt;div class="vox-prose"&gt;
      &lt;p&gt;When the license terms changed, the community had a choice: adapt in place, or take the code and keep going on our own terms. We chose the second one.&lt;/p&gt;
      &lt;p&gt;OpenVox exists because the alternative — hoping a vendor's incentives stay aligned with ours indefinitely — isn't a plan, it's a bet.&lt;/p&gt;

      &lt;h2&gt;What actually changes for you&lt;/h2&gt;
      &lt;p&gt;If you're already running Puppet, nothing breaks. Manifests, modules, and the agent protocol are unchanged. What's different is who's steering.&lt;/p&gt;
    &lt;/div&gt;

    &lt;div class="vox-m-y-xl vox-display-flex vox-justify-center"&gt;
      &lt;vox-quote attribution="S. Almeida"&gt;
        We didn't fork to be different. We forked to stay the same, on our own terms.
      &lt;/vox-quote&gt;
    &lt;/div&gt;

    &lt;h2 class="vox-m-bottom-md"&gt;Related posts&lt;/h2&gt;
    &lt;vox-link-hub&gt;
      &lt;vox-link-hub-item href="/blog/governance-one-year-in" heading="Governance, one year in"&gt;
        What worked, what didn't, and what we'd change.
      &lt;/vox-link-hub-item&gt;
      &lt;vox-link-hub-item href="/blog/migrating-without-downtime" heading="Migrating without downtime"&gt;
        A field report from three production upgrades.
      &lt;/vox-link-hub-item&gt;
    &lt;/vox-link-hub&gt;
  &lt;/div&gt;

  &lt;vox-footer&gt;
    &lt;vox-footer-column heading="Blog"&gt;
      &lt;a href="/blog"&gt;All posts&lt;/a&gt;
      &lt;a href="/blog/rss.xml"&gt;RSS&lt;/a&gt;
    &lt;/vox-footer-column&gt;
    &lt;span slot="bottom"&gt;© OpenVox. Apache-2.0 licensed.&lt;/span&gt;
  &lt;/vox-footer&gt;
&lt;/body&gt;
&lt;/html&gt;
</vox-code-block>
