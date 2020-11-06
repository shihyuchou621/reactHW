import React from 'react';

import {
  cleanup,
  render,
  fireEvent,
} from '@testing-library/react';

import HW from './Master';

afterEach(cleanup);

test('todolist should plus item', () => {
  const { container, getByTestId } = render(<HW />);
  fireEvent.change(getByTestId("input"),
    { target: { value: 'todo' }});
  fireEvent.submit(getByTestId("form"));
  expect(container).toMatchSnapshot();
});

test('click todo item', () => {
  const { container, getByTestId, getByText } = render(<HW />);
  fireEvent.change(getByTestId("input"),
    { target: { value: 'todo' }});
  fireEvent.submit(getByTestId("form"));
  fireEvent.click(getByText("todo"));
  // expect(getByText("todo"))
  //   .toHaveStyle('text-decoration: line-through');
  expect(container).toMatchSnapshot();
});

test('click todo item twice', () => {
  const { container, getByTestId, getByText } = render(<HW />);
  fireEvent.change(getByTestId("input"),
    { target: { value: 'todo' }});
  fireEvent.submit(getByTestId("form"));
  fireEvent.click(getByText("todo"));
  fireEvent.click(getByText("todo"));
  expect(container).toMatchSnapshot();
});

test('submit blank space', () => {
  const { container, getByTestId } = render(<HW />);
  fireEvent.change(getByTestId("input"),
    { target: { value: ' ' }});
  fireEvent.submit(getByTestId("form"));
  expect(container).toMatchSnapshot();
});

test('submit nothing', () => {
  const { container, getByTestId } = render(<HW />);
  fireEvent.submit(getByTestId("form"));
  expect(container).toMatchSnapshot();
});