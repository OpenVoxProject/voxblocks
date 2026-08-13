// Imports the library source directly (not the published npm package), so
// docs authors see live unreleased component changes without a
// publish/reinstall cycle — same as the old docs/.vitepress/theme/index.ts.
import '../../src/index.js';
import '../../src/tokens/tokens.css';
import './site.css';
import { initTocScrollSpy } from './toc-scrollspy.js';

document.addEventListener('DOMContentLoaded', () => {
  initTocScrollSpy();
  document.documentElement.setAttribute('data-vox-ready', '');
});
