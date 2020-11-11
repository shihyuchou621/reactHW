import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from '.';

afterEach(cleanup);

jest.useFakeTimers();

test('click gophers and get correct score', () => {
  act(() => {
    const { getAllByText, getByTestId } = render(<HW />);
    // console.log('看看我是什麼', getByText("G"));
    userEvent.click(getAllByText("G")[0]);

    jest.advanceTimersByTime(2000);
    userEvent.click(getAllByText("G")[0]);

    jest.advanceTimersByTime(2000);
    userEvent.click(getAllByText("G")[0]);

    jest.advanceTimersByTime(1); // render需要時間


    expect(getByTestId("score")).toHaveTextContent("3");
  });
});


test('click and get correct score 2', () => {
  act(() => {
    const { getAllByText, getByTestId } = render(<HW />);
    userEvent.click(getAllByText("G")[0]);

    jest.advanceTimersByTime(2000);
    userEvent.click(getAllByText("-")[0]);

    jest.advanceTimersByTime(2000);
    userEvent.click(getAllByText("-")[0]);

    jest.advanceTimersByTime(2000);
    userEvent.click(getAllByText("G")[0]);

    jest.advanceTimersByTime(2000);
    userEvent.click(getAllByText("-")[0]);

    jest.advanceTimersByTime(1);

    expect(getByTestId("score")).toHaveTextContent("-1");
  });
});
