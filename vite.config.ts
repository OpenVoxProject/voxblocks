import { defineConfig } from 'vite';

// npm build: lit stays external so consumers' bundlers dedupe it.
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: 'voxblocks',
      cssFileName: 'voxblocks',
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
});
