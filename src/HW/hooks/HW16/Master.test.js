import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from './Master'; // 你應該要戴入 Master :)

afterEach(cleanup);

// const getRandom = () => {
//   return ~~(Math.random() * 10);
// };

// const random = getRandom();

// 這樣就等同把主程式中 Math.random() 固定得到 0.5
// 而不會真的變成亂數

global.Math.random = () => 0.5;

test('wrong answer', () => {
  const { container, getByTestId } = render(<HW />);
  userEvent.type(getByTestId("input"), '8');
  // expect(getByTestId("wrong")).toHaveTextContent("wrong: 1");
  expect(container).toMatchSnapshot();
});

test('correct answer', () => {
  const { container, getByTestId } = render(<HW />);
  userEvent.type(getByTestId("input"), '5');
  // expect(getByTestId("correct")).toHaveTextContent("correct: 1");
  expect(container).toMatchSnapshot();
});

test('wrong answer-is not number', () => {
  const { container, getByTestId } = render(<HW />);
  userEvent.type(getByTestId("input"), 'r');
  // expect(getByTestId("wrong")).toHaveTextContent("wrong: 1");
  expect(container).toMatchSnapshot();
});