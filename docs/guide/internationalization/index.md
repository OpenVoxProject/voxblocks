---
title: "Internationalization"
---

# Internationalization

Every string VoxBlocks puts in front of a user — visible text, accessible names, live-region announcements, and validation messages — is a component attribute with an English default. Nothing is hard-coded, so a site in any language can translate the whole library without patching components.

Defaults are English because the library needs one; they are not a statement that English is the expected language. Set the attributes and the component speaks whatever you give it.

<vox-code-block language="html">
&lt;vox-combobox
  label="Modul"
  empty-text="Keine Treffer"
  options-label="Optionen"
  required-message="Bitte wählen Sie eine Option."
  count-text="{n} Optionen verfügbar"
  count-text-one="{n} Option verfügbar"
  required
&gt;
  &lt;option value="nginx"&gt;puppet-nginx&lt;/option&gt;
&lt;/vox-combobox&gt;
</vox-code-block>

Also set `lang` on `<html>` (or on the subtree) so assistive technology picks the right voice and pronunciation — VoxBlocks does not do this for you.

## Accessible names

Controls need an accessible name even when there's no visible label (WCAG 4.1.2). There are three ways to give one, in order of precedence:

1. `label` — a visible label, and the best option when the layout has room for it.
2. `aria-label` on the element — names that one control, the same as on a native input. VoxBlocks mirrors it onto the inner control for you.
3. `fallback-label` — replaces the component's generic English default (`text input`, `combobox`, `slider`, ...) for controls that have no name of their own. This is the attribute to set when you're translating the library wholesale rather than naming one field.

<vox-code-block language="html">
&lt;vox-input-group&gt;
  &lt;vox-input aria-label="Module suchen" placeholder="Module suchen…"&gt;&lt;/vox-input&gt;
  &lt;vox-button&gt;Suchen&lt;/vox-button&gt;
&lt;/vox-input-group&gt;
</vox-code-block>

## Every translatable attribute

Each component's own page documents these alongside the rest of its API. Collected here:

| Component | Attribute | Default |
| --- | --- | --- |
| [Alert](/components/alert/) | `dismiss-label` | `Dismiss` |
| [Breadcrumbs](/components/breadcrumbs/) | `label` | `Breadcrumbs` |
| [Callout](/components/callout/) | `heading` | per variant — `Info`, `Tip`, `Warning`, `Danger` |
| [Checkbox](/components/checkbox/) | `required-message` | `Please check this box.` |
| [Code Block](/components/code-block/) | `copy-label` | `Copy code` |
| | `copied-label` | `Copied` |
| | `copied-message` | `Copied to clipboard` |
| [Combobox](/components/combobox/) | `empty-text` | `No matches` |
| | `fallback-label` | `combobox` |
| | `options-label` | `options` |
| | `required-message` | `Please select an option.` |
| | `count-text` / `count-text-one` | `{n} options available` / `{n} option available` |
| [Dialog](/components/dialog/) | `close-label` | `Close dialog` |
| [Disclosure](/components/disclosure/) | `summary` | `Show details` |
| [Dropdown](/components/dropdown/) | `label` | `Menu` |
| [File Input](/components/file-input/) | `button-label` | `Choose a file` |
| | `empty-text` | `No file selected` |
| | `required-message` | `Please select a file.` |
| [Header](/components/header/) | `nav-label` | `Main` |
| | `menu-label` / `close-menu-label` | `Open menu` / `Close menu` |
| [Loading Indicator](/components/loader/) | `label` | `Loading` |
| [Pagination](/components/pagination/) | `label` | `Pagination` |
| [Radio Input](/components/radio/) | `required-message` | `Please select an option.` |
| [Range](/components/range/) | `fallback-label` | `slider` |
| [Record List](/components/record-list/) | `link-label` | `View {heading}` |
| [Select Input](/components/select/) | `fallback-label` | `options` |
| [Series Nav](/components/series-nav/) | `label` | `Series` |
| | `previous-text` / `next-text` | `Previous` / `Next` |
| [Sidenav](/components/sidenav/) | `label` | `Section` |
| | `toggle-label` | `Menu` |
| [Step Indicator](/components/step-indicator/) | `label` | `Progress` |
| | `complete-text` / `upcoming-text` (on `<vox-step>`) | `complete` / `upcoming` |
| [Subnav](/components/subnav/) | `label` | `Secondary` |
| [Table of Contents](/components/toc/) | `heading` | `On this page` |
| [Text Input](/components/text-input/) | `fallback-label` | per `type` — `text input`, `email address`, ... |
| [Textarea](/components/textarea/) | `fallback-label` | `text area` |
| [Theme Toggle](/components/theme-toggle/) | `light-label` / `dark-label` | `Switch to dark theme` / `Switch to light theme` |

Everything else a component shows comes from content you pass in — slotted children, `heading`, `note`, `label`, `placeholder` — and is already yours to write.

## Placeholders

Two attributes interpolate a value rather than being plain text, so word order stays under your control:

| Attribute | Placeholder |
| --- | --- |
| `count-text` / `count-text-one` on [Combobox](/components/combobox/) | `{n}` — the number of matching options |
| `link-label` on [Record List](/components/record-list/) | `{heading}` — the row's `heading` |

`count-text-one` covers the singular/plural split. Languages with more than two plural forms need finer control than an attribute can express; set the property from JavaScript in that case, using `Intl.PluralRules` to pick the form.

<vox-code-block language="js">
const combobox = document.querySelector('vox-combobox');
const plural = new Intl.PluralRules('pl');
const forms = { one: '{n} opcja', few: '{n} opcje', many: '{n} opcji', other: '{n} opcji' };

// Re-derive the wording whenever the match count changes.
new MutationObserver(() => {
  const n = combobox.querySelectorAll('option').length;
  combobox.countText = forms[plural.select(n)] + ' dostępne';
}).observe(combobox, { childList: true });
</vox-code-block>

## Text direction

Set `dir` once on `<html>` and every component follows it. There is no per-component attribute to thread through, and nothing to import.

<vox-code-block language="html">
&lt;html lang="ar" dir="rtl"&gt;
</vox-code-block>

It works on a subtree too, for a page that mixes directions — a quoted Arabic passage inside an English article, say:

<vox-code-block language="html">
&lt;div dir="rtl" lang="ar"&gt;
  &lt;vox-alert variant="warning"&gt;لم يتم حفظ التغييرات.&lt;/vox-alert&gt;
&lt;/div&gt;
</vox-code-block>

Setting `dir` changes four things:

- **Layout mirrors.** Spacing, borders, rounded corners, absolute positioning and text alignment are written as CSS logical properties throughout, so they follow the text rather than the screen.
- **Arrow keys follow what the user sees.** In [Tabs](/components/tabs/) and [Radio Input](/components/radio/), <kbd>←</kbd> moves to the *next* item under `dir="rtl"`, because that is where the next item now is. <kbd>↑</kbd> and <kbd>↓</kbd> run down the block axis and are unaffected.
- **Directional glyphs mirror with the text.** The [CTA](/components/cta/) arrow, [Series Nav](/components/series-nav/)'s `←`/`→`, the collapsed [Disclosure](/components/disclosure/) and [Sidenav](/components/sidenav/) chevrons, and the [Select](/components/select/) and [Combobox](/components/combobox/) chevrons all flip.
- **[Code Block](/components/code-block/) stays left-to-right.** Source code reads left-to-right whatever the surrounding page does; letting the bidi algorithm reorder indentation, operators and bracket pairs would make the listing unreadable. Only the code is exempt — its filename, language label and surrounding prose still mirror.

### Icons

[Icons](/components/icon/) do *not* mirror by default, because `chevron-right` frequently means the right-hand side of the screen and should stay put. Add `flip-rtl` when the icon points along the reading direction instead — "next", "back", "onward":

<vox-code-block language="html">
&lt;vox-icon name="arrow-right" flip-rtl&gt;&lt;/vox-icon&gt;
</vox-code-block>

### Your own CSS

Logical properties (`margin-inline-start`, `inset-inline-end`, `text-align: start`) cover nearly everything, and the [utility classes](/guide/utilities/) have `-start`/`-end` variants that use them. Horizontal transforms are the one thing logical properties cannot express, so VoxBlocks publishes `--vox-flip` — `1` in LTR, `-1` in RTL:

<vox-code-block language="css">
.drawer { transform: translateX(calc(240px * var(--vox-flip))); }
</vox-code-block>

### Scope

Layout, keyboard navigation and directional glyphs have been checked in both directions across the component set. Two things are still on you: the English string defaults in the table above are not translated for you, and the `:dir()` selector this relies on needs Safari 16.4 or newer.
