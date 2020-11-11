import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from './Master';

afterEach(cleanup);

test('todolist should plus item', () => {
  const { getByTestId, container } = render(<HW />);
  userEvent.type(getByTestId('input'), 'todo');
  userEvent.click(getByTestId('button'));
  expect(container).toMatchSnapshot();
});

test('click todo item', () => {
  const { container, getByTestId, getByText } = render(<HW />);
  userEvent.type(getByTestId('input'), 'todo');
  userEvent.click(getByTestId('button'));
  userEvent.click(getByText('todo'));
  // expect(getByText('todo'))
  //   .toHaveStyle('text-decoration: line-through');
  expect(container).toMatchSnapshot();
});

test('click todo item twice', () => {
  const { container, getByTestId, getByText } = render(<HW />);
  userEvent.type(getByTestId('input'), 'todo');
  userEvent.click(getByTestId('button'));
  userEvent.click(getByText('todo'));
  userEvent.click(getByText('todo'));
  expect(container).toMatchSnapshot();
});

test('submit blank space', () => {
  const { container, getByTestId } = render(<HW />);
  userEvent.type(getByTestId('input'), ' ');
  userEvent.click(getByTestId('button'));
  expect(container).toMatchSnapshot();
});

test('submit nothing', () => {
  const { container, getByTestId } = render(<HW />);
  userEvent.click(getByTestId('button'));
  expect(container).toMatchSnapshot();
});