import { expect } from 'expect';
import { beforeEach, describe, test } from 'node:test';
import React from 'react';

import { ScrollingBackground } from '../../dist/react-scrolling-background.mjs';

describe('importing the package', () => {
  beforeEach(() => <ScrollingBackground />);

  test('should inject package metadata', () => {
    expect(document.head.querySelector('meta[name="npm:react-scrolling-background"]')).toHaveProperty(
      'content',
      'version=0.0.0-0'
    );
  });
});
