import { build } from 'esbuild';
import { resolve } from 'path';

await build({
  entryPoints: [resolve('lib/index.ts')],
  bundle: true,
  format: 'esm',
  outdir: 'dist/lib',
  logLevel: 'info',
  treeShaking: true,
  sourcemap: true,
  minify: false,
  external: ['react', 'react/jsx-runtime'],
  entryNames: '[name]',
  target: 'es2020',
  jsx: 'automatic',
  jsxImportSource: 'react',
});
