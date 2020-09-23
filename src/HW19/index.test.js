import React from 'react';

import {
  cleanup,
  render,
  fireEvent,
} from '@testing-library/react';

import HW from '.';

afterEach(cleanup);

jest.useFakeTimers();

/** ↓ 取好一點的名稱，不然我要取能混就混，能撈就撈哦 */
test('click gophers and get correct score', () => {
  const { container, getAllByText, getByTestId } = render(<HW />);
  // console.log('看看我是什麼', getByText("G"));
  /** 有 eslint 好方便吶，分號沒打都會自己存 沒錯 */
  fireEvent.click(getAllByText("G")[0]);

  jest.advanceTimersByTime(2000);
  fireEvent.click(getAllByText("G")[0]);

  jest.advanceTimersByTime(2000);
  fireEvent.click(getAllByText("G")[0]);

  expect(getByTestId("score")).toHaveTextContent("3");
});

test('click and get correct score 2', () => {
  const { container, getAllByText, getByTestId } = render(<HW />);
  // console.log('看看我是什麼', getByText("G"));
  /** 有 eslint 好方便吶，分號沒打都會自己存 沒錯 */
  fireEvent.click(getAllByText("G")[0]);

  jest.advanceTimersByTime(2000);
  fireEvent.click(getAllByText("-")[0]);

  jest.advanceTimersByTime(2000);
  fireEvent.click(getAllByText("-")[0]);

  jest.advanceTimersByTime(2000);
  fireEvent.click(getAllByText("G")[0]);

  jest.advanceTimersByTime(2000);
  fireEvent.click(getAllByText("-")[0]);

  expect(getByTestId("score")).toHaveTextContent("-1");
});
