import { npm } from 'inject-meta-tag';

import ScrollingBackground from './ScrollingBackground.tsx';
// eslint-disable-next-line import/no-namespace
import * as TestIds from './TestIds.ts';

declare global {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore TypeScript load ./dist/*.d.ts causing duplication
  const ReactScrollingBackground: {
    get npm_package_name(): string;
    get npm_package_version(): string;
  };
}

npm(ReactScrollingBackground.npm_package_name, { version: ReactScrollingBackground.npm_package_version });

export { ScrollingBackground, TestIds };
