import { npm } from 'inject-meta-tag';

import * as TestIds from './TestIds';
import ScrollingBackground from './ScrollingBackground';

declare global {
  // Globals from babel-plugin-transform-define.
  const ReactScrollingBackground: {
    get npm_package_name(): string;
    get npm_package_version(): string;
  };
}

npm(ReactScrollingBackground.npm_package_name, { version: ReactScrollingBackground.npm_package_version });

export { ScrollingBackground };
export { TestIds };
