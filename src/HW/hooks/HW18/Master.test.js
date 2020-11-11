import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from './Master';

afterEach(cleanup);

jest.useFakeTimers();

global.Math.random = () => 0;

test('wrong answer', () => {
  act(() => {
    const { container, getByTestId } = render(<HW />);
    jest.advanceTimersByTime(500);
    userEvent.type(getByTestId("input"), 'S' );
    jest.advanceTimersByTime(500);
    userEvent.type(getByTestId("input"), '7' );
    jest.advanceTimersByTime(500);
    userEvent.type(getByTestId("input"), ' ' );
    jest.advanceTimersByTime(1);

    expect(getByTestId("score")).toHaveTextContent("score: -3");
    expect(container).toMatchSnapshot();
  });
});


test('correct answer', () => {
  act(() => {
    const { container, getByTestId } = render(<HW />);
    jest.advanceTimersByTime(500);
    userEvent.type(getByTestId("input"), 'Q' );
    jest.advanceTimersByTime(500);
    userEvent.type(getByTestId("input"), 'Q' );
    jest.advanceTimersByTime(500);
    userEvent.type(getByTestId("input"), 'Q' );
    jest.advanceTimersByTime(500);
    userEvent.type(getByTestId("input"), 'Q' );
    jest.advanceTimersByTime(1);

    expect(getByTestId("score")).toHaveTextContent("score: 4");
    expect(container).toMatchSnapshot();
  });
});