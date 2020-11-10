import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from './HW3';

test('should HW3', () => {
  const { container } = render(<HW />);
  expect(container).toMatchSnapshot();
});

test('list should be sum of AS', () => {
  const { container } = render(<HW />);
  const button = container.querySelector('button');
  userEvent.click(button);
  userEvent.click(button);
  userEvent.click(button);
  expect(container).toMatchSnapshot();
});
