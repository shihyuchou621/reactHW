import React from 'react';

import {
  cleanup,
  render,
  fireEvent,
} from '@testing-library/react';

import HW from './index';

afterEach(cleanup);

test('rbg should be correct', () => {
  const { container } = render(<HW />);
  fireEvent.change(
    container.querySelector('input[name="red"]'),
    { target: { value: '35' } }
  );
  fireEvent.change(
    container.querySelector('input[name="green"]'),
    { target: { value: '192' } }
  );
  fireEvent.change(
    container.querySelector('input[name="blue"]'),
    { target: { value: '80' } }
  );
  expect(container).toMatchSnapshot();
});
