import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW, {
  isError,
  getInitiate,
} from '.';

afterEach(cleanup);

test('should give answer', () => {
  for (let i = 0; i < 10; i++) {
    expect(isError(getInitiate().answer)).toBeFalsy();
  }
});

test('answer should be correct', () => {
  expect(isError("2963")).toBeFalsy();
  expect(isError("qwer")).toBeTruthy();
  expect(isError("537")).toBeTruthy();
  expect(isError("1111")).toBeTruthy();
});

test('submit wrong answer', () => {
  global.alert = jest.fn();
  const { getByTestId } = render(<HW />);
  userEvent.type(getByTestId("input"), 'qwerty{enter}');
  expect(alert.mock.calls.length).toBe(1);
});


test('should give correct a & b', () => {
  // 把外部的函數取代掉
  global.Math.random = () => .25;
  const { getByTestId, getByText } = render(<HW />);
  userEvent.type(getByTestId("input"), '6925{enter}');
  expect(getByTestId("result0")).toHaveTextContent("6925: 0A2B");

  userEvent.type(getByTestId("input"), '1084{enter}');
  expect(getByTestId("result0")).toHaveTextContent("1084: 0A1B");
  expect(getByTestId("result1")).toHaveTextContent("6925: 0A2B");

  userEvent.type(getByTestId("input"), '7896{enter}');
  expect(getByTestId("result0")).toHaveTextContent("7896: 2A2B");
  expect(getByTestId("result1")).toHaveTextContent("1084: 0A1B");
  expect(getByTestId("result2")).toHaveTextContent("6925: 0A2B");

  userEvent.type(getByTestId("input"), '9876{enter}');
  expect(getByTestId("4A")).toHaveTextContent("答對了！遊戲結束，你要重新一局嗎？");

  fireEvent.click(getByText("好!"));
  expect(getByTestId("resultList").children.length).toBe(0);
});
