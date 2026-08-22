---
title: "Basic Content Page"
---

# Basic Content Page

The simplest starting point: a header, a single readable column of content, and a footer. Good for an about page, a policy page, or anywhere the content itself is the whole point.

<div style="margin: 1rem 0; border: 1px solid var(--vox-color-divider); border-radius: 8px; overflow: hidden;">
  <vox-header site-title="OpenVox" href="#">
    <a href="#">Modules</a>
    <a href="#" aria-current="page">Governance</a>
    <a href="#">Blog</a>
  </vox-header>
  <div style="padding: 2rem 1.5rem;">
    <vox-breadcrumbs>
      <a href="#">Home</a>
      <span aria-current="page">Governance</span>
    </vox-breadcrumbs>
    <div class="vox-prose vox-m-top-lg">
      <h1 class="vox-m-y-none">How OpenVox makes decisions</h1>
      <p>OpenVox is a community-run project. No single company or person controls the code, the infrastructure, or the roadmap — decisions are made in the open, by the people doing the work.</p>
      <vox-callout variant="tip" class="vox-m-y-md">
        <p>Want a vote? Show up. Voting rights follow contribution, not tenure.</p>
      </vox-callout>
      <h2>Maintainership</h2>
      <p>Anyone who merges a pull request more than a couple of times becomes a candidate for commit access. There's no formal application — an existing maintainer just proposes you.</p>
      <h2>Conflict resolution</h2>
      <p>Most disagreements get settled in the issue tracker. When they don't, they go to the monthly community call, and failing that, to a vote of active maintainers.</p>
    </div>
  </div>
  <vox-footer>
    <vox-footer-column heading="Project">
      <a href="#">Modules</a>
      <a href="#">Documentation</a>
    </vox-footer-column>
    <vox-footer-column heading="Community">
      <a href="#">GitHub</a>
      <a href="#">Slack</a>
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
  &lt;title&gt;Governance — OpenVox&lt;/title&gt;
  &lt;link rel="stylesheet" href="https://unpkg.com/@openvoxproject/voxblocks/dist/cdn/voxblocks.css" /&gt;
  &lt;script type="module" src="https://unpkg.com/@openvoxproject/voxblocks/dist/cdn/voxblocks.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;vox-header site-title="OpenVox" href="/"&gt;
    &lt;a href="/modules"&gt;Modules&lt;/a&gt;
    &lt;a href="/governance" aria-current="page"&gt;Governance&lt;/a&gt;
    &lt;a href="/blog"&gt;Blog&lt;/a&gt;
  &lt;/vox-header&gt;

  &lt;div class="vox-p-all-lg vox-max-width-lg vox-m-x-auto"&gt;
    &lt;vox-breadcrumbs&gt;
      &lt;a href="/"&gt;Home&lt;/a&gt;
      &lt;span aria-current="page"&gt;Governance&lt;/span&gt;
    &lt;/vox-breadcrumbs&gt;

    &lt;div class="vox-prose vox-m-top-lg"&gt;
      &lt;h1&gt;How OpenVox makes decisions&lt;/h1&gt;
      &lt;p&gt;OpenVox is a community-run project. No single company or person controls the code, the infrastructure, or the roadmap — decisions are made in the open, by the people doing the work.&lt;/p&gt;

      &lt;vox-callout variant="tip"&gt;
        &lt;p&gt;Want a vote? Show up. Voting rights follow contribution, not tenure.&lt;/p&gt;
      &lt;/vox-callout&gt;

      &lt;h2&gt;Maintainership&lt;/h2&gt;
      &lt;p&gt;Anyone who merges a pull request more than a couple of times becomes a candidate for commit access. There's no formal application — an existing maintainer just proposes you.&lt;/p&gt;

      &lt;h2&gt;Conflict resolution&lt;/h2&gt;
      &lt;p&gt;Most disagreements get settled in the issue tracker. When they don't, they go to the monthly community call, and failing that, to a vote of active maintainers.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;vox-footer&gt;
    &lt;vox-footer-column heading="Project"&gt;
      &lt;a href="/modules"&gt;Modules&lt;/a&gt;
      &lt;a href="/docs"&gt;Documentation&lt;/a&gt;
    &lt;/vox-footer-column&gt;
    &lt;vox-footer-column heading="Community"&gt;
      &lt;a href="https://github.com/OpenVoxProject"&gt;GitHub&lt;/a&gt;
      &lt;a href="#"&gt;Slack&lt;/a&gt;
    &lt;/vox-footer-column&gt;
    &lt;span slot="bottom"&gt;© OpenVox. Apache-2.0 licensed.&lt;/span&gt;
  &lt;/vox-footer&gt;
&lt;/body&gt;
&lt;/html&gt;
</vox-code-block>
