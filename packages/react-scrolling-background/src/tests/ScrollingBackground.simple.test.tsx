/** @jest-environment jsdom */

import React from 'react';
import { render, screen } from '@testing-library/react';

import { ScrollingBackground, TestIds } from '../../dist/react-scrolling-background.js';

describe('render <ScrollingBackground>', () => {
  beforeEach(() => {
    render(<ScrollingBackground />);
  });

  test('should render', () => expect(screen.findByTestId(TestIds.root)).resolves.toBeTruthy());
});
