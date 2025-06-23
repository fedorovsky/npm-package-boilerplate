import { defineConfig } from 'vite';
import { pigment } from '@pigment-css/vite-plugin';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  plugins: [dts(), pigment({})],
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
