import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from './new12';

afterEach(cleanup);

test('content 1 should change correctly', () => {
  const { container, getByText } = render(<HW />);
  userEvent.click(getByText("tag1"));
  expect(container).toMatchSnapshot();
});

test('content 2 should change correctly', () => {
  const { container, getByText } = render(<HW />);
  userEvent.click(getByText("tag2"));
  expect(container).toMatchSnapshot();
});

test('content 3 should change correctly', () => {
  const { container, getByText } = render(<HW />);
  userEvent.click(getByText("tag3"));
  expect(container).toMatchSnapshot();
});

test('content 4 should change correctly', () => {
  const { container, getByText } = render(<HW />);
  userEvent.click(getByText("tag4"));
  expect(container).toMatchSnapshot();
});
