import React from 'react';

import {
  // getByLabelText,
  cleanup,
  render,
} from '@testing-library/react';

import HW, {
  getMS,
  getCountDown,
} from './HW9';

afterEach(cleanup);

test('should countdown', () => {
  jest.useFakeTimers();
  const { container } = render(<HW />);

  // const getMS = () => 
  // +new Date(`${new Date().getFullYear() + 1}/01/01`) - +new Date();
  expect(container.textContent).toBe(`離2021跨年還有: ${getCountDown(getMS())}`); 

  jest.advanceTimersByTime(1000)
  expect(container.textContent).toBe(`離2021跨年還有: ${getCountDown(getMS())}`);

  jest.advanceTimersByTime(1000)
  expect(container.textContent).toBe(`離2021跨年還有: ${getCountDown(getMS())}`);

  jest.advanceTimersByTime(1000)
  expect(container.textContent).toBe(`離2021跨年還有: ${getCountDown(getMS())}`);

  jest.advanceTimersByTime(1000)
  expect(container.textContent).toBe(`離2021跨年還有: ${getCountDown(getMS())}`);
})
