import { npm } from 'inject-meta-tag';

import ScrollingBackground from './ScrollingBackground.tsx';
// eslint-disable-next-line import/no-namespace
import * as TestIds from './TestIds.ts';

declare global {
  // Globals from babel-plugin-transform-define.
  const ReactScrollingBackground: {
    get npm_package_name(): string;
    get npm_package_version(): string;
  };
}

npm(ReactScrollingBackground.npm_package_name, { version: ReactScrollingBackground.npm_package_version });

export { ScrollingBackground, TestIds };
