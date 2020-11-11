import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from './';

afterEach(cleanup);

test('rbg should be correct', () => {
  const { container } = render(<HW />);

  userEvent.type(container.querySelector('input[name="red"]'),
    '35');

  userEvent.type(container.querySelector('input[name="green"]'),
    '92');

  userEvent.type(container.querySelector('input[name="blue"]'),
    '80');

  expect(container).toMatchSnapshot();
});
