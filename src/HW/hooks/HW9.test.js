import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, cleanup } from '@testing-library/react';

import HW, {
  getMs,
  getCountDown,
} from './HW9';

afterEach(cleanup);

test('should countdown', () => {
  jest.useFakeTimers();
  act(() => {
    const { container } = render(<HW />);
    expect(container.textContent).toBe(`離2021跨年還有: ${getCountDown(getMs())}`);

    jest.advanceTimersByTime(1000);
    expect(container.textContent).toBe(`離2021跨年還有: ${getCountDown(getMs())}`);

    jest.advanceTimersByTime(1000);
    expect(container.textContent).toBe(`離2021跨年還有: ${getCountDown(getMs())}`);

    jest.advanceTimersByTime(1000);
    expect(container.textContent).toBe(`離2021跨年還有: ${getCountDown(getMs())}`);

    jest.advanceTimersByTime(1000);
    expect(container.textContent).toBe(`離2021跨年還有: ${getCountDown(getMs())}`);
  });
});
