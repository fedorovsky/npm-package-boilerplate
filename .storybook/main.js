/** @type { import('@storybook/react-vite').StorybookConfig } */

import { pigment } from '@pigment-css/vite-plugin';

const config = {
  stories: ['../**/*.mdx', '../**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal(config) {
    config.plugins = [...(config.plugins || []), pigment()];
    return config;
  },
};

export default config;
