import React from 'react';

import {
  cleanup,
  render,
  fireEvent,
} from '@testing-library/react';

import HW, { getRandom } from './Master';

afterEach(cleanup);

jest.useFakeTimers();

for (let i = 0; i < 100; i++) {
  const min = ~~(Math.random() * 10);
  const max = ~~(Math.random() * 90) + min;
  test(`should getRandom handle ${min}~${max}`, () => {
    const num = getRandom(max, min);
    expect(num >= min && num <= max).toBeTruthy();
  });
}

test(`should getRandom handle if not give min`, () => {
  for (let i = 0; i < 100; i++) {
    const max = ~~(Math.random() * 90);
    const num = getRandom(max);
    expect(num >= 0 && num <= max).toBeTruthy();
  }
});

test('should handle num is range in', () => {

  /**
   * 詩瑀可以直接 snapshot 或是用 getTestid 去 toBe 內容的範圍
   * 這2種方法都可以。
   */

  const { getByTestId } = render(<HW />);

  let num = null;

  /** 多跑幾次看看是不是都在範圍內 */
  for (let i = 0; i < 50; i++) {
    jest.advanceTimersByTime(1000);
    num = +(getByTestId('num').innerHTML);
    expect(num >= 0 && num <= 10).toBeTruthy();
  }
});

