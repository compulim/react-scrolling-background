/** @jest-environment jsdom */

import React from 'react';
import { ScrollingBackground, TestIds } from 'react-scrolling-background';
import { create } from 'react-test-renderer';

test('simple scenario', () =>
  expect(create(<ScrollingBackground />).root.findByProps({ 'data-testid': TestIds.root })).toBeTruthy());

test('importing the package should inject package metadata', () =>
  expect(document.head.querySelector('meta[name="npm:react-scrolling-background"]')).toHaveProperty(
    'content',
    'version=0.0.0-0'
  ));
