import { defineConfig } from 'tsup';

export default defineConfig([
  {
    define: {
      'ReactScrollingBackground.npm_package_name': JSON.stringify(process.env.npm_package_name || ''),
      'ReactScrollingBackground.npm_package_version': JSON.stringify(process.env.npm_package_version || '')
    },
    dts: true,
    entry: {
      'react-scrolling-background': './src/index.ts'
    },
    format: ['cjs', 'esm'],
    sourcemap: true
  }
]);
