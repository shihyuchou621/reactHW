import React from 'react';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from './HW5';

test('value should change', () => {
  // act(() => {
  const { getByTestId } = render(<HW />);
  userEvent.type(getByTestId('input'), 'qwerty');
  expect(getByTestId('input')).toHaveValue('qwerty');
  // });
});

test('should have lists', () => {
  const { container, getByTestId } = render(<HW />);
  userEvent.type(getByTestId('input'), 'qwerty{enter}');
  userEvent.type(getByTestId('input'), 'zxcvbn{enter}');
  expect(container).toMatchSnapshot();
});

test('should have blank in list', () => {
  const { container, getByTestId } = render(<HW />);
  userEvent.type(getByTestId('input'), 'qwerty{enter}');
  userEvent.type(getByTestId('input'), '{enter}');
  expect(container).toMatchSnapshot();
});
