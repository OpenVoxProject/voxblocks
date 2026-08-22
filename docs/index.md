---
title: VoxBlocks — Web components for the OpenVox community
layout: home
---

<main id="main-content" tabindex="-1">

<div class="vox-container">
  <vox-hero eyebrow="Open source, community-run" heading="Web components for the OpenVox community">
    Framework-agnostic building blocks in the style of the OpenVox docs — drop them into any site, from plain HTML to Vue.
    <vox-button slot="actions" href="guide/getting-started/">Get Started</vox-button>
    <vox-button slot="actions" variant="alt" href="components/button/">Browse Components</vox-button>
  </vox-hero>
</div>

<div class="vox-container vox-p-y-xl">
  <vox-grid min="240px" gap="md">
    <vox-card heading="Real Web Components">
      <span slot="icon"><vox-icon name="blocks" size="lg"></vox-icon></span>
      Built on Lit and web standards. No framework lock-in — works in static HTML, Jekyll, VitePress, Vue, React, anywhere.
    </vox-card>
    <vox-card heading="OpenVox look and feel">
      <span slot="icon"><vox-icon name="sun" size="lg"></vox-icon></span>
      Custom designed branding and color scheme, including automatic light and dark mode.
    </vox-card>
    <vox-card heading="Accessible by default">
      <span slot="icon"><vox-icon name="accessibility" size="lg"></vox-icon></span>
      Keyboard navigation, focus styles, and sensible ARIA roles out of the box.
    </vox-card>
  </vox-grid>
</div>

</main>

<vox-footer>
  <vox-footer-column heading="Docs">
    <a href="guide/getting-started/">Getting Started</a>
    <a href="components/button/">Components</a>
    <a href="layouts/">Layouts</a>
  </vox-footer-column>
  <vox-footer-column heading="Community">
    <a href="https://github.com/OpenVoxProject/voxblocks">GitHub</a>
    <a href="https://voxpupuli.org/openvox/">OpenVox</a>
  </vox-footer-column>
  <span slot="bottom">© OpenVox. Apache-2.0 licensed.</span>
</vox-footer>
