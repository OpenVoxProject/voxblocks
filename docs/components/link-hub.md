# Link Hub

`<vox-link-hub>` is a grid of prominent links with descriptions, for hub and landing pages.

<div style="margin: 1rem 0;">
  <vox-link-hub>
    <vox-link-hub-item href="#" heading="Getting started">
      Install OpenVox and apply your first manifest.
    </vox-link-hub-item>
    <vox-link-hub-item href="#" heading="Module development">
      Write, test, and publish community modules.
    </vox-link-hub-item>
    <vox-link-hub-item href="#" heading="Governance">
      How decisions get made in Vox Pupuli.
    </vox-link-hub-item>
  </vox-link-hub>
</div>

```html
<vox-link-hub>
  <vox-link-hub-item href="/start" heading="Getting started">
    Install OpenVox and apply your first manifest.
  </vox-link-hub-item>
</vox-link-hub>
```

## API

`<vox-link-hub-item>`: `href` (string), `heading` (string); default slot holds the description.
