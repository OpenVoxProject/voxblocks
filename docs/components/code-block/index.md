---
title: "Code Block"
---

# Code Block

`<vox-code-block>` is a syntax-highlighted code block with a copy button. Highlighting is built in — no Prism, highlight.js, or Shiki to set up.

It recognizes `bash`/`sh`/`shell`/`zsh`, `yaml`/`yml`, `json`, `javascript`/`js`, `typescript`/`ts`, `css`, `html`/`xml`, `ruby`/`rb`, and `puppet`/`pp`. Any other (or omitted) `language` renders as plain, unhighlighted text.

<div style="margin: 1rem 0;">
  <vox-code-block language="puppet" filename="profile/base.pp">
    class profile::base (
      String $version = '1.0',
    ) {
      package { 'openssl':
        ensure => installed,
      }

      file { '/etc/motd':
        ensure  => file,
        content => "Managed by Puppet ${version}",
      }
    }
  </vox-code-block>
</div>

<vox-code-block language="html">
&lt;vox-code-block language="puppet" filename="profile/base.pp"&gt;
  class profile::base (
    String $version = '1.0',
  ) {
    package { 'openssl':
      ensure =&gt; installed,
    }
  }
&lt;/vox-code-block&gt;
</vox-code-block>

The code is the element's default slot content, taken as plain text — escape `<` and `&` the way you would inside any `<code>` block. A shared leading indent (from formatting the HTML source itself) is stripped automatically, so the snippet renders flush left regardless of how it's indented in your markup.

## Line numbers

Add `line-numbers` for a numbered gutter — useful when prose elsewhere on the page refers to "line 3."

<div style="margin: 1rem 0;">
  <vox-code-block language="ruby" filename="lib/facter/os_release.rb" line-numbers>
    Facter.add(:os_release) do
      setcode do
        if File.exist?('/etc/os-release')
          File.read('/etc/os-release')
        end
      end
    end
  </vox-code-block>
</div>

<vox-code-block language="html">
&lt;vox-code-block language="ruby" line-numbers&gt;
  Facter.add(:os_release) do
    setcode { File.read('/etc/os-release') }
  end
&lt;/vox-code-block&gt;
</vox-code-block>

## Without a copy button

<div style="margin: 1rem 0;">
  <vox-code-block language="bash" no-copy>
    echo "read-only example output"
  </vox-code-block>
</div>

<vox-code-block language="html">
&lt;vox-code-block language="bash" no-copy&gt;
  echo "read-only example output"
&lt;/vox-code-block&gt;
</vox-code-block>

## Without a header or border

Add `no-header` to drop the whole header bar — filename, language label, and copy button — and `no-border` to drop the outer edge too, for dense contexts like a table cell, where a full header and border per row would take up more space than the code itself.

<div style="max-width: 24rem; margin: 1rem 0;">
  <vox-code-block language="json" no-header no-border>
    {
      "version": "1.14.1"
    }
  </vox-code-block>
</div>

<vox-code-block language="html">
&lt;vox-code-block language="json" no-header no-border&gt;
  { "version": "1.14.1" }
&lt;/vox-code-block&gt;
</vox-code-block>

<div style="margin: 1rem 0;">
  <table class="vox-table">
    <thead>
      <tr><th scope="col">Fact</th><th scope="col">Value</th></tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">clientversion</th>
        <td>8.28.1</td>
      </tr>
      <tr>
        <th scope="row">augeas</th>
        <td>
          <vox-code-block language="json" no-header no-border>
            { "version": "1.14.1" }
          </vox-code-block>
        </td>
      </tr>
    </tbody>
  </table>
</div>

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `language` | `string` | `''` | One of the recognized language ids above, or any other string to label the block without highlighting it |
| `filename` | `string` | `''` | Shown at the start of the header, e.g. `profile/base.pp` |
| `line-numbers` | `boolean` | `false` | Adds a numbered gutter |
| `no-copy` | `boolean` | `false` | Hides the copy-to-clipboard button |
| `no-header` | `boolean` | `false` | Hides the whole header bar, including the copy button |
| `no-border` | `boolean` | `false` | Drops the outer border (the background surface stays) |

The copy button copies the raw, un-highlighted code via the Clipboard API (falling back to `execCommand` where unavailable) and announces success to screen readers through a live region. The block itself is keyboard-scrollable (`tabindex="0"`) when its content overflows horizontally.
