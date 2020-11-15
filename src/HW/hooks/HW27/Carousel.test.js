import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Carousel from './Carousel';

afterEach(cleanup);

jest.useFakeTimers();

test('animation should work', () => {
  act(() => {
    const { container } = render(
      <Carousel
        time={1500}
        showDots={true}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Carousel>
    );
    jest.advanceTimersByTime(1550);
    expect(container).toMatchSnapshot();

    jest.advanceTimersByTime(1550);
    expect(container).toMatchSnapshot();

    jest.advanceTimersByTime(1550);
    expect(container).toMatchSnapshot();
  });
});


test('showDots is false', () => {
  act(() => {
    const { container } = render(
      <Carousel
        time={1500}
        showDots={false}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Carousel>
    );
    jest.advanceTimersByTime(1550);
    expect(container).toMatchSnapshot();

    jest.advanceTimersByTime(1550);
    expect(container).toMatchSnapshot();

    jest.advanceTimersByTime(1550);
    expect(container).toMatchSnapshot();
  });
});
