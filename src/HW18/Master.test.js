import React from 'react';

import {
  cleanup,
  render,
  fireEvent,
} from '@testing-library/react';

import HW, { getRandom } from './Master';

afterEach(cleanup);

jest.useFakeTimers();

global.Math.random = () => 0;

test('wrong answer', () => {
  const { container, getByTestId } = render(<HW />);
  fireEvent.change(getByTestId("input"),
    { target: {value: 'S'} }
  );
  jest.advanceTimersByTime(500);
  fireEvent.change(getByTestId("input"),
    { target: {value: '7'} }
  );
  jest.advanceTimersByTime(500);
  fireEvent.change(getByTestId("input"),
    { target: {value: ' '} }
  );
  expect(getByTestId("score")).toHaveTextContent("score: -3");
  expect(container).toMatchSnapshot();
});

test('correct answer', () => {
  const { container, getByTestId } = render(<HW />);
  fireEvent.change(getByTestId("input"),
    { target: {value: 'Q'} }
  );
  jest.advanceTimersByTime(500);
  fireEvent.change(getByTestId("input"),
    { target: {value: 'Q'} }
  );
  jest.advanceTimersByTime(500);
  fireEvent.change(getByTestId("input"),
    { target: {value: 'Q'} }
  );
  jest.advanceTimersByTime(500);
  fireEvent.change(getByTestId("input"),
    { target: {value: 'Q'} }
  );
  expect(getByTestId("score")).toHaveTextContent("score: 4");
  expect(container).toMatchSnapshot();
});