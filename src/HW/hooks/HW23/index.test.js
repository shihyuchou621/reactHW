import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from '.';

afterEach(cleanup);

test('should change to night', () => {
  const { container, getByText } = render(<HW />);
  userEvent.click(getByText("切換成 晚上"));
  expect(container).toMatchSnapshot();
});

test('should change to day', () => {
  const { container, getByText } = render(<HW />);
  userEvent.click(getByText("切換成 晚上"));
  userEvent.click(getByText("切換成 白天"));
  expect(container).toMatchSnapshot();
});