import { defineConfig } from 'vite';

// CDN build: lit is bundled in so a plain <script type="module"> works
// on sites without a build step (Jekyll, static HTML, ...).
export default defineConfig({
  build: {
    outDir: 'dist/cdn',
    emptyOutDir: true,
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: 'voxblocks',
      cssFileName: 'voxblocks',
    },
  },
});
