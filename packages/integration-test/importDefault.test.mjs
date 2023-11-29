/** @jest-environment jsdom */

import { create } from 'react-test-renderer';
import { ScrollingBackground } from 'react-scrolling-background';

test('simple scenario', () => {
  const result = create(ScrollingBackground);

  expect(result).toMatchInlineSnapshot();
});
