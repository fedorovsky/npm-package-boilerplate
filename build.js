import { build } from 'esbuild';
import { resolve } from 'path';

await build({
  entryPoints: [resolve('src/index.ts')],
  bundle: true,
  format: 'esm',
  outdir: 'dist',
  minify: false,
  external: ['react', 'react/jsx-runtime'],
  entryNames: '[name]',
  assetNames: 'assets/[name]',
  target: 'es2020',
  jsx: 'automatic',
  jsxImportSource: 'react',
});
