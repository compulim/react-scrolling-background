/** @jest-environment jsdom */

import React from 'react';

import { ScrollingBackground } from '../../src/index';

describe('importing the package', () => {
  beforeEach(() => <ScrollingBackground />);

  test('should inject package metadata', () =>
    expect(document.head.querySelector('meta[name="npm:react-scrolling-background"]')).toHaveProperty(
      'content',
      'version=0.0.0-jest'
    ));
});
