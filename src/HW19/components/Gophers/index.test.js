import React from 'react';

import {
  cleanup,
  render,
  fireEvent,
} from '@testing-library/react';

/** 建議直接叫 Gophers */
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
    <Gophers
      setScore={setScore}
    />
    /** 傳下去的名稱與變數相同的話。
     * 也可以寫成 <Gophers {...{setScore}} />
     * 好酷，能省則省，能撈就撈，能混就混XDDDDDD
     * 好了你再跑跑看
     * */
  );
  fireEvent.click(getByText("G"));
  expect(setScore.mock.results[0].value).toBe(1);
});

test('click hyphen', () => {
  const setScore = jest.fn(x => x);
  const { container, getByText } = render(
    <Gophers
      setScore={setScore}
    />
  );
  jest.advanceTimersByTime(2000);
  fireEvent.click(getByText("-"));
  expect(setScore.mock.results[0].value).toBe(-1);
});
