import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from './HW6';

test('value should change', () => {
  const { container, getByTestId } = render(<HW />);
  userEvent.type(getByTestId('input'), 'qwerty');
  expect(container).toMatchSnapshot();
});

test('should have list', () => {
  const { container, getByTestId } = render(<HW />);
  userEvent.type(getByTestId('input'), 'qwerty');
  userEvent.type(getByTestId('input'), '{enter}');

  expect(container).toMatchSnapshot();
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

test('should be deleted', () => {
  const { container, getByTestId } = render(<HW />);
  userEvent.type(getByTestId('input'), 'qwerty{enter}');
  userEvent.click(getByTestId('button0'));
  expect(container).toMatchSnapshot();
});
