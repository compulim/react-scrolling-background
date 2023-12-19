import { npm } from 'inject-meta-tag';

import * as TestIds from './TestIds';
import ScrollingBackground from './ScrollingBackground';

declare global {
  // Globals from babel-plugin-transform-define.
  const npm_package_name: string;
  const npm_package_version: string;
}

npm(npm_package_name, { version: npm_package_version });

export { ScrollingBackground };
export { TestIds };
