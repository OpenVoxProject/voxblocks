# Footer

`<vox-footer>` holds columns of links (`<vox-footer-column>`) and a bottom legal line.

<div style="margin: 1rem 0; border: 1px solid var(--vp-c-divider); border-radius: 8px; overflow: hidden;">
  <vox-footer>
    <vox-footer-column heading="Project">
      <a href="#">Modules</a>
      <a href="#">Documentation</a>
      <a href="#">Blog</a>
    </vox-footer-column>
    <vox-footer-column heading="Community">
      <a href="#">GitHub</a>
      <a href="#">Slack</a>
      <a href="#">Mastodon</a>
    </vox-footer-column>
    <vox-footer-column heading="Legal">
      <a href="#">Privacy policy</a>
      <a href="#">Code of conduct</a>
    </vox-footer-column>
    <span slot="bottom">© Vox Pupuli. Apache-2.0 licensed.</span>
  </vox-footer>
</div>

```html
<vox-footer>
  <vox-footer-column heading="Project">
    <a href="/modules">Modules</a>
    <a href="/docs">Documentation</a>
  </vox-footer-column>
  <span slot="bottom">© Vox Pupuli. Apache-2.0 licensed.</span>
</vox-footer>
```
