---
title: "Combobox"
---

# Combobox

`<vox-combobox>` is a text input that filters a list of options as you type. Options are plain `<option>` children, the same as [Select Input](/components/select/).

<div style="display: grid; gap: 1.5rem; max-width: 24rem; margin: 1rem 0;">
  <vox-combobox label="Module" placeholder="Start typing…" note="Arrow keys to browse, Enter to pick.">
    <option value="nginx">puppet-nginx</option>
    <option value="apache">puppet-apache</option>
    <option value="postgresql">puppet-postgresql</option>
    <option value="firewall">puppet-firewall</option>
    <option value="archive" disabled>puppet-archive (deprecated)</option>
  </vox-combobox>
  <vox-combobox label="Tag" allow-custom placeholder="Pick one or type your own">
    <option value="bug">bug</option>
    <option value="enhancement">enhancement</option>
    <option value="docs">docs</option>
  </vox-combobox>
</div>

<vox-code-block language="html">
&lt;vox-combobox label="Module" name="module" placeholder="Start typing…"&gt;
  &lt;option value="nginx"&gt;puppet-nginx&lt;/option&gt;
  &lt;option value="apache"&gt;puppet-apache&lt;/option&gt;
  &lt;option value="archive" disabled&gt;puppet-archive (deprecated)&lt;/option&gt;
&lt;/vox-combobox&gt;
</vox-code-block>

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | — | Field label |
| `name` | `string` | — | Form field name |
| `value` | `string` | `''` | Selected option's value |
| `placeholder` | `string` | — | Placeholder text |
| `allow-custom` | `boolean` | `false` | Accept text that matches no option |
| `empty-text` | `string` | `No matches` | Shown when the filter matches nothing |
| `note` | `string` | — | Help text below the input |
| `required` / `disabled` | `boolean` | `false` | Native states |

Fires `change` when an option is picked. Exposes `form`, `validity`, `checkValidity()`, `reportValidity()`.

By default the value must be one of the options. A half-typed query is not a value: the committed selection stands until another is picked, and leaving the field reverts the text to it. Emptying the field and leaving it clears the selection. Set `allow-custom` to keep free text instead.

## Keyboard

| Key | Action |
| --- | --- |
| <kbd>↓</kbd> / <kbd>↑</kbd> | Open the list, then move between options |
| <kbd>Enter</kbd> | Pick the active option; submits the form when none is active |
| <kbd>Esc</kbd> | Close the list, or clear the field when already closed |
| <kbd>Home</kbd> / <kbd>End</kbd> | Jump to the first or last option |
| <kbd>Tab</kbd> | Close the list and move on |

## Accessibility

Implements the ARIA 1.2 combobox pattern. Focus stays on the input throughout and the active option is tracked with `aria-activedescendant`, so screen readers announce options without the focus ring leaving the field. The match count is announced through a polite live region, and the active option carries a 2px outline rather than relying on background colour alone.

A `note` is linked to the input with `aria-describedby`. With `required` set, the input reports `aria-invalid="true"` until an option is chosen, matching every other field in the library.
