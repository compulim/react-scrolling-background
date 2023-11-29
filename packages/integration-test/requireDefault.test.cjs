/** @jest-environment jsdom */

const { create } = require('react-test-renderer');
const { ScrollingBackground } = require('react-scrolling-background');

test('simple scenario', () => {
  const result = create(ScrollingBackground);

  expect(result).toMatchInlineSnapshot();
});
