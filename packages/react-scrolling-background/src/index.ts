import { npm } from 'inject-meta-tag';

import * as TestIds from './TestIds';
import ScrollingBackground from './ScrollingBackground';

declare global {
  const process: {
    env: {
      npm_package_name: string;
      npm_package_version: string;
    };
  };
}

npm(process.env.npm_package_name, { version: process.env.npm_package_version });

export { ScrollingBackground };
export { TestIds };
