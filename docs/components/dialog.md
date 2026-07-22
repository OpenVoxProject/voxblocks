# Dialog

`<vox-dialog>` is a modal built on the native `<dialog>` element — focus trapping and Escape-to-close come from the platform.

<div style="margin: 1rem 0;">
  <vox-button onclick="document.getElementById('demo-dialog').show()">Open dialog</vox-button>
  <vox-dialog id="demo-dialog" heading="Delete module?" light-dismiss>
    <p>This removes <strong>puppet-nginx</strong> from your namespace. Published versions stay on the Forge.</p>
    <vox-button slot="footer" variant="alt" onclick="document.getElementById('demo-dialog').close()">Cancel</vox-button>
    <vox-button slot="footer" variant="danger" onclick="document.getElementById('demo-dialog').close()">Delete</vox-button>
  </vox-dialog>
</div>

```html
<vox-dialog id="confirm" heading="Delete module?" light-dismiss>
  <p>This removes puppet-nginx from your namespace.</p>
  <vox-button slot="footer" variant="alt">Cancel</vox-button>
  <vox-button slot="footer" variant="danger">Delete</vox-button>
</vox-dialog>

<script>
  document.getElementById('confirm').show();
</script>
```

## API

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `heading` | `string` | `''` | Dialog title |
| `open` | `boolean` | `false` | Visibility (or call `show()` / `close()`) |
| `light-dismiss` | `boolean` | `false` | Close on backdrop click |

| Slot | Description |
| --- | --- |
| *(default)* | Dialog body |
| `footer` | Action buttons |

Fires `vox-close` when closed.
