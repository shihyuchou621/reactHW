import React from 'react';

import {
  cleanup,
  render,
  fireEvent,
} from '@testing-library/react';

import HW from '.';

afterEach(cleanup);

test('click and show Modal', () => {
  const { container, getByText } = render(<HW />);
  fireEvent.click(getByText("Modal"));
  expect(container).toMatchSnapshot();
});

test('click and show top', () => {
  const { container, getByText } = render(<HW />);
  fireEvent.click(getByText("top"));
  expect(container).toMatchSnapshot();
});

test('click and show header', () => {
  const { container, getByText } = render(<HW />);
  fireEvent.click(getByText("header"));
  expect(container).toMatchSnapshot();
});

test('click and show top + animation', () => {
  const { container, getByText } = render(<HW />);
  fireEvent.click(getByText("top + animation"));
  expect(container).toMatchSnapshot();
});