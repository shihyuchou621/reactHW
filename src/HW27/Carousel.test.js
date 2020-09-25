import React from 'react';

import {
  cleanup,
  render,
  fireEvent,
} from '@testing-library/react';

import Carousel from './Carousel';

afterEach(cleanup);

jest.useFakeTimers();

test('animation should work', () => {
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
  jest.advanceTimersByTime(1500);
  expect(container).toMatchSnapshot();

  jest.advanceTimersByTime(1500);
  expect(container).toMatchSnapshot();

  jest.advanceTimersByTime(1500);
  expect(container).toMatchSnapshot();
});

test('showDots is false', () => {
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
  jest.advanceTimersByTime(1500);
  expect(container).toMatchSnapshot();

  jest.advanceTimersByTime(1500);
  expect(container).toMatchSnapshot();

  jest.advanceTimersByTime(1500);
  expect(container).toMatchSnapshot();
});
