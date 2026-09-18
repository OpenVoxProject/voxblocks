---
title: "Breadcrumbs"
---

# Breadcrumbs

`<vox-breadcrumbs>` shows a trail of parent pages. Children are plain links; the current page is a `<span aria-current="page">`.

<div style="margin: 1rem 0;">
  <vox-breadcrumbs>
    <a href="#">Home</a>
    <a href="#">Modules</a>
    <span aria-current="page">puppet-nginx</span>
  </vox-breadcrumbs>
</div>

<vox-code-block language="html">
&lt;vox-breadcrumbs&gt;
  &lt;a href="/"&gt;Home&lt;/a&gt;
  &lt;a href="/modules"&gt;Modules&lt;/a&gt;
  &lt;span aria-current="page"&gt;puppet-nginx&lt;/span&gt;
&lt;/vox-breadcrumbs&gt;
</vox-code-block>
