import { defineConfig } from 'tsup';

export default defineConfig([
  {
    dts: true,
    entry: {
      'react-scrolling-background': './src/index.ts'
    },
    format: ['cjs', 'esm'],
    sourcemap: true,
    target: 'esnext'
  }
]);
