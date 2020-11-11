import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Gophers from '.';

afterEach(cleanup);

jest.useFakeTimers();

global.Math.random = () => 0;

test('click ghophers', () => {
  /**
   * 然後你看一下 HW19/index.js
   * 你看一下你怎麼使用 <Gophers />
   * 你在用它的時候會傳一個方法給它，但你在測試時沒有給，
   * 所以你應該....
   * setScore
   * */

  const setScore = jest.fn(x => x);
  const { container, getByText } = render(
    <Gophers {...{setScore}} />
    // <Gophers
    //   setScore={setScore}
    // />
  );
  userEvent.click(getByText("G"));
  expect(setScore.mock.results[0].value).toBe(1);
});

test('click hyphen', () => {
  act(() => {
    const setScore = jest.fn(x => x);
    const { getByText } = render(
      <Gophers
        setScore={setScore}
      />
    );
    jest.advanceTimersByTime(2000);
    userEvent.click(getByText("-"));
    expect(setScore.mock.results[0].value).toBe(-1);
  });
});
