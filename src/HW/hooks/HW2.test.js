import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from './HW2';

test('should HW2', () => {
  const { container } = render(<HW />);
  expect(container).toMatchSnapshot();
});

test('list should add 1 item', () => {
  const { container } = render(<HW />);
  const button = container.querySelector('button');
  userEvent.click(button);
  expect(container).toMatchSnapshot();
});

test('list should add 4 item', () => {
  const { container } = render(<HW />);
  const button = container.querySelector('button');
  userEvent.click(button);
  userEvent.click(button);
  userEvent.click(button);
  userEvent.click(button);
  expect(container).toMatchSnapshot();
});
