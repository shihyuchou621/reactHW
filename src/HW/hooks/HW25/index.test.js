import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from '.';

afterEach(cleanup);

test('click and show Modal', () => {
  const { container, getByText } = render(<HW />);
  userEvent.click(getByText("Modal"));
  expect(container).toMatchSnapshot();
});

test('click and show top', () => {
  const { container, getByText } = render(<HW />);
  userEvent.click(getByText("top"));
  expect(container).toMatchSnapshot();
});

test('click and show header', () => {
  const { container, getByText } = render(<HW />);
  userEvent.click(getByText("header"));
  expect(container).toMatchSnapshot();
});

test('click and show top + animation', () => {
  const { container, getByText } = render(<HW />);
  userEvent.click(getByText("top + animation"));
  expect(container).toMatchSnapshot();
});