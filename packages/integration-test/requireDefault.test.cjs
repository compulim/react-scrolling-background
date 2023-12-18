/** @jest-environment jsdom */

const { create } = require('react-test-renderer');
const { ScrollingBackground, TestIds } = require('react-scrolling-background');

test('simple scenario', () =>
  expect(create(<ScrollingBackground />).root.findByProps({ 'data-testid': TestIds.root })).toBeTruthy());
