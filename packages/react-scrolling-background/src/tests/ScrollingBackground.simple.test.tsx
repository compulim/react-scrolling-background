/** @jest-environment jsdom */

import { render, screen } from '@testing-library/react';

import { ScrollingBackground } from '../../src/index';

describe('render <ScrollingBackground>', () => {
  beforeEach(() => {
    render(<ScrollingBackground />);
  });

  test('should render', () => expect(screen.findByTestId('react-scrolling-background')).resolves.toBeTruthy());
});
