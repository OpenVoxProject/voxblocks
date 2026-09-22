import type { Preview } from '@storybook/web-components-vite';
import '../src/index.ts';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Light / dark theme',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
    direction: {
      description: 'Writing direction',
      toolbar: {
        title: 'Direction',
        icon: 'transfer',
        items: [
          { value: 'ltr', title: 'LTR' },
          { value: 'rtl', title: 'RTL (العربية)' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
    direction: 'ltr',
  },
  decorators: [
    (story, context) => {
      document.documentElement.setAttribute(
        'data-vox-theme',
        context.globals.theme ?? 'light',
      );
      // Set on <html>, the way a real RTL page does it: components read
      // the inherited direction rather than taking a prop of their own.
      const direction = context.globals.direction ?? 'ltr';
      document.documentElement.setAttribute('dir', direction);
      document.documentElement.setAttribute(
        'lang',
        direction === 'rtl' ? 'ar' : 'en',
      );
      document.body.style.background = 'var(--vox-color-bg)';
      document.body.style.color = 'var(--vox-color-text-1)';
      document.body.style.fontFamily = 'var(--vox-font-family-base)';
      document.body.style.padding = '2rem';
      document.body.style.transition = 'background-color 0.15s ease';
      return story();
    },
  ],
};

export default preview;
