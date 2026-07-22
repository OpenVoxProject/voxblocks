import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';

export default {
  extends: DefaultTheme,
  enhanceApp() {
    // Custom elements only exist in the browser; skip during SSR build.
    if (!import.meta.env.SSR) {
      import('../../../src/index.js');
    }
  },
} satisfies Theme;
