import { cleanup, render, screen } from '@testing-library/react';
import { expect } from 'expect';
import { afterEach, beforeEach, describe, test } from 'node:test';
import React from 'react';

import { ScrollingBackground, TestIds } from '../../dist/react-scrolling-background.mjs';

describe('render <ScrollingBackground> with "backgroundColor" props', () => {
  beforeEach(() => {
    render(<ScrollingBackground backgroundColor="Red" />);
  });

  afterEach(cleanup);

  test('should render CSS custom property', async () => {
    expect(
      (await screen.findByTestId(TestIds.customProperties)).style.getPropertyValue(
        '--react-scrolling-background__background-color'
      )
    ).toBe('Red');
  });
});

describe('render <ScrollingBackground> with "backgroundImage" props', () => {
  beforeEach(() => {
    render(<ScrollingBackground backgroundImage="data:" />);
  });

  afterEach(cleanup);

  test('should render CSS custom property', async () => {
    expect(
      (await screen.findByTestId(TestIds.customProperties)).style.getPropertyValue(
        '--react-scrolling-background__background-image'
      )
    ).toBe('data:');
  });
});

describe('render <ScrollingBackground> with "duration" props', () => {
  beforeEach(() => {
    render(<ScrollingBackground duration={60_000} />);
  });

  afterEach(cleanup);

  test('should render CSS custom property', async () => {
    expect(
      (await screen.findByTestId(TestIds.customProperties)).style.getPropertyValue(
        '--react-scrolling-background__duration'
      )
    ).toBe('60000ms');
  });
});

describe('render <ScrollingBackground> with "speed" props', () => {
  beforeEach(() => {
    render(<ScrollingBackground speed={10} />);
  });

  afterEach(cleanup);

  test('should render CSS custom property', async () => {
    expect(
      (await screen.findByTestId(TestIds.customProperties)).style.getPropertyValue(
        '--react-scrolling-background__speed'
      )
    ).toBe('10');
  });
});
