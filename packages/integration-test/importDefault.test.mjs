/** @jest-environment jsdom */

import { create } from 'react-test-renderer';
import { ScrollingBackground, TestIds } from 'react-scrolling-background';

test('simple scenario', () =>
  expect(create(<ScrollingBackground />).root.findByProps({ 'data-testid': TestIds.root })).toBeTruthy());
