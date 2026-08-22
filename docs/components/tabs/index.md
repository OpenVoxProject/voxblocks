---
title: "Tabs"
---

# Tabs

`<vox-tabs>` shows one panel at a time. Tabs go in the `tab` slot; each `panel` attribute names the `<vox-tab-panel>` it controls.

<div style="margin: 1rem 0;">
  <vox-tabs>
    <vox-tab slot="tab" panel="deb" selected>Debian / Ubuntu</vox-tab>
    <vox-tab slot="tab" panel="rpm">RHEL / Fedora</vox-tab>
    <vox-tab-panel name="deb"><code>apt install openvox-agent</code></vox-tab-panel>
    <vox-tab-panel name="rpm"><code>dnf install openvox-agent</code></vox-tab-panel>
  </vox-tabs>
</div>

<vox-code-block language="html">
&lt;vox-tabs&gt;
  &lt;vox-tab slot="tab" panel="deb" selected&gt;Debian / Ubuntu&lt;/vox-tab&gt;
  &lt;vox-tab slot="tab" panel="rpm"&gt;RHEL / Fedora&lt;/vox-tab&gt;
  &lt;vox-tab-panel name="deb"&gt;apt install openvox-agent&lt;/vox-tab-panel&gt;
  &lt;vox-tab-panel name="rpm"&gt;dnf install openvox-agent&lt;/vox-tab-panel&gt;
&lt;/vox-tabs&gt;
</vox-code-block>

Left/Right arrows switch tabs. Fires `vox-tab-change` with `detail.panel`.

## API

`<vox-tab>`: `panel` (string) — target panel name; `selected` (boolean).
`<vox-tab-panel>`: `name` (string) — matched against the selected tab.
