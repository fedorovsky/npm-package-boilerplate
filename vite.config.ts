import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import wyw from '@wyw-in-js/vite';
import path from 'path';

export default defineConfig({
  plugins: [dts(), wyw()],
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
