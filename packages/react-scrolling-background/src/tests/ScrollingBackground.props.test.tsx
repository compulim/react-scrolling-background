/** @jest-environment jsdom */
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { ScrollingBackground } from '../../src/index';

describe('render <ScrollingBackground> with "backgroundColor" props', () => {
  beforeEach(() => {
    render(<ScrollingBackground backgroundColor="Red" />);
  });

  test('should render CSS custom property', () =>
    expect(screen.findByTestId('react-scrolling-background__vars')).resolves.toHaveStyle({
      '--react-scrolling-background__background-color': 'Red'
    }));
});

describe('render <ScrollingBackground> with "backgroundImage" props', () => {
  beforeEach(() => {
    render(<ScrollingBackground backgroundImage="data:" />);
  });

  test('should render CSS custom property', () =>
    expect(screen.findByTestId('react-scrolling-background__vars')).resolves.toHaveStyle({
      '--react-scrolling-background__background-image': 'data:'
    }));
});

describe('render <ScrollingBackground> with "duration" props', () => {
  beforeEach(() => {
    render(<ScrollingBackground duration={60_000} />);
  });

  test('should render CSS custom property', () =>
    expect(screen.findByTestId('react-scrolling-background__vars')).resolves.toHaveStyle({
      '--react-scrolling-background__duration': '60000ms'
    }));
});

describe('render <ScrollingBackground> with "speed" props', () => {
  beforeEach(() => {
    render(<ScrollingBackground speed={10} />);
  });

  test('should render CSS custom property', () =>
    expect(screen.findByTestId('react-scrolling-background__vars')).resolves.toHaveStyle({
      '--react-scrolling-background__speed': '10'
    }));
});
