import React from 'react';

import {
  cleanup,
  render,
  fireEvent,
} from '@testing-library/react';

import HW from './new12';

afterEach(cleanup);

test('content 1 should change correctly', () => {
  const { container, getByText } = render(<HW />);
  fireEvent.click(getByText("tag1"));
  expect(container).toMatchSnapshot();
});

test('content 2 should change correctly', () => {
  const { container, getByText } = render(<HW />);
  fireEvent.click(getByText("tag2"));
  expect(container).toMatchSnapshot();
});

test('content 3 should change correctly', () => {
  const { container, getByText } = render(<HW />);
  fireEvent.click(getByText("tag3"));
  expect(container).toMatchSnapshot();
});

test('content 4 should change correctly', () => {
  const { container, getByText } = render(<HW />);
  fireEvent.click(getByText("tag4"));
  expect(container).toMatchSnapshot();
});
