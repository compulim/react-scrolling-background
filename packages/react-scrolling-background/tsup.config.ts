import { defineConfig } from 'tsup';

export default defineConfig([
  {
    define: {
      'ReactScrollingBackground.npm_package_name': `'${process.env.npm_package_name}'`,
      'ReactScrollingBackground.npm_package_version': `'${process.env.npm_package_version}'`
    },
    dts: true,
    entry: {
      'react-scrolling-background': './src/index.ts'
    },
    format: ['cjs', 'esm'],
    sourcemap: true
  }
]);
