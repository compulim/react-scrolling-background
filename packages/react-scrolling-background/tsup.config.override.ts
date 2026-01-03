import { type Options } from 'tsup';

export default function override(options: Options): Options {
  return {
    ...options,
    define: {
      ...options.define,
      'ReactScrollingBackground.npm_package_name': JSON.stringify(process.env.npm_package_name || ''),
      'ReactScrollingBackground.npm_package_version': JSON.stringify(process.env.npm_package_version || '')
    }
  };
}
