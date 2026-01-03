import { render, screen } from '@testing-library/react';
import { expect } from 'expect';
import { beforeEach, describe, test } from 'node:test';
import React from 'react';

import { ScrollingBackground, TestIds } from '../../dist/react-scrolling-background.mjs';

describe('render <ScrollingBackground>', () => {
  beforeEach(() => {
    render(<ScrollingBackground />);
  });

  test('should render', () => {
    expect(screen.findByTestId(TestIds.root)).resolves.toBeTruthy();
  });
});
