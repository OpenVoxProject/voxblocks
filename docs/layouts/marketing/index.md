---
title: "Marketing Page"
---

# Marketing Page

A landing page for a project home page or a campaign: hero, proof points, feature grid, a pull quote, and a closing CTA band.

<div style="margin: 1rem 0; border: 1px solid var(--vox-color-divider); border-radius: 8px; overflow: hidden;">
  <vox-header site-title="OpenVox" href="#">
    <a href="#">Docs</a>
    <a href="#">Modules</a>
    <a href="#">Community</a>
    <vox-button slot="actions" size="sm" variant="alt" href="#">GitHub</vox-button>
  </vox-header>

  <vox-hero eyebrow="Open source, community-run" heading="Infrastructure automation that answers to its community">
    OpenVox is a soft fork of Puppet — functionally compatible, openly governed, and built by the people who run it in production.
    <vox-button slot="actions" href="#">Get started</vox-button>
    <vox-button slot="actions" variant="alt" href="#">Read the docs</vox-button>
  </vox-hero>

  <div style="padding: 0 1.5rem 2.5rem;">
    <vox-grid min="140px" gap="lg">
      <vox-stat value="450+" label="Modules">Community-maintained</vox-stat>
      <vox-stat value="140" label="Contributors">Active this year</vox-stat>
      <vox-stat value="2" label="Years">Since the OpenVox fork</vox-stat>
    </vox-grid>
  </div>

  <div style="padding: 0 1.5rem 2.5rem;">
    <h2 class="vox-text-center vox-m-bottom-lg">Why teams switch</h2>
    <vox-grid min="220px" gap="md">
      <vox-card heading="Drop-in compatible">
        <span slot="icon"><vox-icon name="plug" size="lg"></vox-icon></span>
        Your existing Puppet manifests and modules work unchanged.
      </vox-card>
      <vox-card heading="Openly governed">
        <span slot="icon"><vox-icon name="ballot" size="lg"></vox-icon></span>
        Roadmap and releases are decided in public, by maintainers.
      </vox-card>
      <vox-card heading="No license surprises">
        <span slot="icon"><vox-icon name="verified" size="lg"></vox-icon></span>
        Apache-2.0, forever — no relicensing risk down the line.
      </vox-card>
    </vox-grid>
  </div>

  <div style="padding: 0 1.5rem 2.5rem; display: flex; justify-content: center;">
    <vox-quote attribution="A happy operator" detail="Platform team, mid-size SaaS">
      Migrating to OpenVox was the least dramatic infrastructure change we made all year.
    </vox-quote>
  </div>

  <vox-cta-band heading="Your infrastructure. Your community. Your platform.">
    <p>Install OpenVox in minutes and bring your existing Puppet code with you.</p>
    <div slot="actions">
      <vox-button href="#" variant="brand">Installation guide</vox-button>
      <vox-button href="#" variant="alt">Join the community</vox-button>
    </div>
  </vox-cta-band>

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
  &lt;title&gt;OpenVox — Infrastructure automation for the community&lt;/title&gt;
  &lt;link rel="stylesheet" href="https://unpkg.com/@openvoxproject/voxblocks/dist/cdn/voxblocks.css" /&gt;
  &lt;script type="module" src="https://unpkg.com/@openvoxproject/voxblocks/dist/cdn/voxblocks.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;vox-header site-title="OpenVox" href="/"&gt;
    &lt;a href="/docs"&gt;Docs&lt;/a&gt;
    &lt;a href="/modules"&gt;Modules&lt;/a&gt;
    &lt;a href="/community"&gt;Community&lt;/a&gt;
    &lt;vox-button slot="actions" size="sm" variant="alt" href="https://github.com/OpenVoxProject" target="_blank"&gt;GitHub&lt;/vox-button&gt;
  &lt;/vox-header&gt;

  &lt;vox-hero eyebrow="Open source, community-run" heading="Infrastructure automation that answers to its community"&gt;
    OpenVox is a soft fork of Puppet — functionally compatible, openly governed, and built by the people who run it in production.
    &lt;vox-button slot="actions" href="/docs/getting-started"&gt;Get started&lt;/vox-button&gt;
    &lt;vox-button slot="actions" variant="alt" href="/docs"&gt;Read the docs&lt;/vox-button&gt;
  &lt;/vox-hero&gt;

  &lt;div class="vox-p-x-lg vox-p-bottom-xxl"&gt;
    &lt;vox-grid min="140px" gap="lg"&gt;
      &lt;vox-stat value="450+" label="Modules"&gt;Community-maintained&lt;/vox-stat&gt;
      &lt;vox-stat value="140" label="Contributors"&gt;Active this year&lt;/vox-stat&gt;
      &lt;vox-stat value="2" label="Years"&gt;Since the OpenVox fork&lt;/vox-stat&gt;
    &lt;/vox-grid&gt;
  &lt;/div&gt;

  &lt;div class="vox-p-x-lg vox-p-bottom-xxl"&gt;
    &lt;h2 class="vox-text-center vox-m-bottom-lg"&gt;Why teams switch&lt;/h2&gt;
    &lt;vox-grid min="220px" gap="md"&gt;
      &lt;vox-card heading="Drop-in compatible"&gt;
        &lt;span slot="icon"&gt;&lt;vox-icon name="plug" size="lg"&gt;&lt;/vox-icon&gt;&lt;/span&gt;
        Your existing Puppet manifests and modules work unchanged.
      &lt;/vox-card&gt;
      &lt;vox-card heading="Openly governed"&gt;
        &lt;span slot="icon"&gt;&lt;vox-icon name="ballot" size="lg"&gt;&lt;/vox-icon&gt;&lt;/span&gt;
        Roadmap and releases are decided in public, by maintainers.
      &lt;/vox-card&gt;
      &lt;vox-card heading="No license surprises"&gt;
        &lt;span slot="icon"&gt;&lt;vox-icon name="verified" size="lg"&gt;&lt;/vox-icon&gt;&lt;/span&gt;
        Apache-2.0, forever — no relicensing risk down the line.
      &lt;/vox-card&gt;
    &lt;/vox-grid&gt;
  &lt;/div&gt;

  &lt;div class="vox-p-x-lg vox-p-bottom-xxl vox-display-flex vox-justify-center"&gt;
    &lt;vox-quote attribution="A happy operator" detail="Platform team, mid-size SaaS"&gt;
      Migrating to OpenVox was the least dramatic infrastructure change we made all year.
    &lt;/vox-quote&gt;
  &lt;/div&gt;

  &lt;vox-cta-band heading="Your infrastructure. Your community. Your platform."&gt;
    &lt;p&gt;Install OpenVox in minutes and bring your existing Puppet code with you.&lt;/p&gt;
    &lt;div slot="actions"&gt;
      &lt;vox-button href="/docs/getting-started" variant="brand"&gt;Installation guide&lt;/vox-button&gt;
      &lt;vox-button href="/community" variant="alt"&gt;Join the community&lt;/vox-button&gt;
    &lt;/div&gt;
  &lt;/vox-cta-band&gt;

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
