---
title: "Sponsor"
---

# Sponsor

`<vox-sponsor-tier>` groups `<vox-sponsor>` cards under a heading, for
sponsorship and funding pages. With `href` a sponsor card becomes a link to
the sponsor's site.

## Basic

<div style="margin: 1rem 0;">
  <vox-sponsor-tier heading="Current Sponsors">
    <span slot="description">Ongoing monthly or annual support.</span>
    <vox-sponsor name="Example Cloud" href="#">$500/month · CI infrastructure</vox-sponsor>
    <vox-sponsor name="Acme Hosting" href="#">$100/month</vox-sponsor>
    <vox-sponsor name="Anonymous">$50/month</vox-sponsor>
  </vox-sponsor-tier>
</div>

```html
<vox-sponsor-tier heading="Current Sponsors">
  <span slot="description">Ongoing monthly or annual support.</span>
  <vox-sponsor name="Example Cloud" href="https://example.com">
    $500/month · CI infrastructure
  </vox-sponsor>
  <vox-sponsor name="Anonymous">$50/month</vox-sponsor>
</vox-sponsor-tier>
```

## Logo

Set `logo` to show an image instead of just the sponsor name.

<div style="margin: 1rem 0;">
  <vox-sponsor-tier heading="Current Sponsors">
    <vox-sponsor name="OpenVox" href="#" logo="https://placehold.co/120x40?text=Logo">
      $1000/month · Dedicated servers
    </vox-sponsor>
    <vox-sponsor name="Puppet Community Fund" href="#" logo="https://placehold.co/120x40?text=Logo">
      $250/month
    </vox-sponsor>
  </vox-sponsor-tier>
</div>

```html
<vox-sponsor name="OpenVox" href="https://example.com" logo="/logos/openvox.svg">
  $1000/month · Dedicated servers
</vox-sponsor>
```

## Multiple tiers

Stack `<vox-sponsor-tier>` sections to separate current, one-time, and former
sponsors, in the style of [voxpupuli.org/sponsoring](https://voxpupuli.org/sponsoring/).

<div style="margin: 1rem 0; display: flex; flex-direction: column; gap: 2rem;">
  <vox-sponsor-tier heading="Current Sponsors">
    <vox-sponsor name="Example Cloud" href="#">$500/month · CI infrastructure</vox-sponsor>
    <vox-sponsor name="Acme Hosting" href="#">$100/month</vox-sponsor>
  </vox-sponsor-tier>
  <vox-sponsor-tier heading="One Time Sponsors">
    <vox-sponsor name="Widgets Inc" href="#">$250 one-time gift</vox-sponsor>
  </vox-sponsor-tier>
  <vox-sponsor-tier heading="Former Sponsors">
    <vox-sponsor name="Legacy Systems">Supported 2022–2024</vox-sponsor>
  </vox-sponsor-tier>
</div>

## API

`vox-sponsor-tier`

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `heading` | `string` | `''` | Tier title, e.g. "Current Sponsors" |

| Slot | Description |
| --- | --- |
| *(default)* | `<vox-sponsor>` elements |
| `description` | Optional text under the heading |

`vox-sponsor`

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | `''` | Sponsor name |
| `href` | `string` | — | Makes the card a link to the sponsor's site |
| `logo` | `string` | — | Logo image URL |
| `target` | `string` | — | Link target |

| Slot | Description |
| --- | --- |
| *(default)* | Optional description, e.g. contribution type and amount |
