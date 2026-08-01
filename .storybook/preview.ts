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
  },
  initialGlobals: {
    theme: 'light',
  },
  decorators: [
    (story, context) => {
      document.documentElement.setAttribute(
        'data-vox-theme',
        context.globals.theme ?? 'light',
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
