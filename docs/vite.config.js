import { cpSync } from 'node:fs';
import { defineConfig } from 'vite';

// Jekyll auto-loads _data/*.yml|json, so copying the manifest there lets
// _includes/head.html look up hashed asset filenames without a custom
// Jekyll plugin. Runs on every build, including --watch rebuilds.
function copyManifestToJekyllData() {
  return {
    name: 'copy-manifest-to-jekyll-data',
    writeBundle() {
      cpSync('docs/assets/.vite/manifest.json', 'docs/_data/manifest.json');
    },
  };
}

export default defineConfig({
  plugins: [copyManifestToJekyllData()],
  build: {
    outDir: 'docs/assets',
    assetsDir: '',
    manifest: true,
    rollupOptions: {
      input: 'docs/src/main.js',
    },
  },
});
