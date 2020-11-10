import React from 'react';
import {
  cleanup,
  render,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import HW from './HW10';

afterEach(cleanup);

test('usd should change correctly', () => {
  const { container } = render(<HW />);
  userEvent.change(
    container.querySelector('input[name="ntd"]'),
    { target: { value: '90' } }
  );
  // expect(getByTestId('usd')).toHaveTextContent('3');
  expect(container).toMatchSnapshot();
});

test('ntd should change correctly', () => {
  const { container } = render(<HW />);
  userEvent.change(
    container.querySelector('input[name="usd"]'),
    { target: { value: '2' } }
  );
  expect(container).toMatchSnapshot();
});