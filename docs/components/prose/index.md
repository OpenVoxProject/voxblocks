---
title: "Prose"
---

# Prose

`.vox-prose` is a light-DOM utility class for a block of readable body copy — a comfortable reading measure plus the font size, line height, and color for long-form text. Included in `voxblocks.css`.

<div class="vox-prose" style="margin: 1rem 0;">
  <p>
    OpenVox began as a soft fork: functionally equivalent to open source Puppet, and
    intentionally compatible for as long as possible.
  </p>
</div>

Stack multiple blocks and they space themselves apart automatically:

<div class="vox-prose" style="margin: 1rem 0;">
  <p>First block of prose.</p>
</div>
<div class="vox-prose" style="margin: 1rem 0;">
  <p>Second block, spaced apart from the first.</p>
</div>

<vox-code-block language="html">
&lt;div class="vox-prose"&gt;
  &lt;p&gt;OpenVox began as a soft fork…&lt;/p&gt;
&lt;/div&gt;
&lt;div class="vox-prose"&gt;
  &lt;p&gt;The real difference is who steers it.&lt;/p&gt;
&lt;/div&gt;
</vox-code-block>
