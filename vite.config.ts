import { defineConfig } from 'vite';
import { pigment, extendTheme } from '@pigment-css/vite-plugin';
import dts from 'vite-plugin-dts';
import path from 'path';

const theme = extendTheme({
  colorSchemes: {
    light: {
      colors: {
        primary: '#f9f9f9',
        foreground: '#121212',
      },
    },
    dark: {
      colors: {
        primary: '#212121',
        foreground: '#fff',
      },
    },
  },
  getSelector: (scheme) => (scheme ? `[data-theme="${scheme}"]` : ':root'),
});

export default defineConfig({
  plugins: [
    dts(),
    pigment({
      theme,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      fileName: (format) => `index.${format}.js`,
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    },
    target: 'es2020',
  },
});
