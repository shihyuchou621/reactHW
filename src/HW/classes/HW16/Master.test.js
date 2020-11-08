import React from 'react';

import {
  cleanup,
  render,
  fireEvent,
} from '@testing-library/react';

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
  fireEvent.change(getByTestId("input"),
    { target: {value: '8'} }
  );
  // expect(getByTestId("wrong")).toHaveTextContent("wrong: 1");
  expect(container).toMatchSnapshot();
});

test('correct answer', () => {
  const { container, getByTestId } = render(<HW />);
  fireEvent.change(getByTestId("input"),
    { target: {value: '5'} }
  );
  // expect(getByTestId("correct")).toHaveTextContent("correct: 1");
  expect(container).toMatchSnapshot();
});

test('wrong answer-is not number', () => {
  const { container, getByTestId } = render(<HW />);
  fireEvent.change(getByTestId("input"),
    { target: {value: 'r'} }
  );
  // expect(getByTestId("wrong")).toHaveTextContent("wrong: 1");
  expect(container).toMatchSnapshot();
});