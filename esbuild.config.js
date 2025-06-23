import { build } from 'esbuild';
import { resolve } from 'path';

await build({
  entryPoints: [resolve('src/index.ts')],
  bundle: true,
  format: 'esm',
  outdir: 'dist',
  logLevel: 'info',
  treeShaking: true,
  sourcemap: false,
  minify: true,
  external: ['react', 'react/jsx-runtime'],
  entryNames: '[name]',
  target: 'es2020',
  jsx: 'automatic',
  jsxImportSource: 'react',
});
