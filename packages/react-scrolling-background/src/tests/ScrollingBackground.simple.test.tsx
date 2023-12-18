/** @jest-environment jsdom */

import { render, screen } from '@testing-library/react';

import { ScrollingBackground, TestIds } from '../../src/index';

describe('render <ScrollingBackground>', () => {
  beforeEach(() => {
    render(<ScrollingBackground />);
  });

  test('should render', () => expect(screen.findByTestId(TestIds.root)).resolves.toBeTruthy());
});
