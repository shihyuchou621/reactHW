import React from 'react';

import {
  cleanup,
  render,
  fireEvent,
} from '@testing-library/react';

import { HW10Input } from './HW10Input';

afterEach(cleanup);

test('onChange should work', () => {
  const onChange = jest.fn(e => e.target.value);
  const { getByTestId } = render(
    <HW10Input
      name="usd"
      rate={30}
      money={1}
      dollar="usd"
      onChange={onChange}
    />
  );
  // console.log(onChange.mock.calls.length);

  fireEvent.change(getByTestId('HW10Input'), { target: {
    value: '10'
  }});
  // snapshot
  expect(onChange.mock.results[0].value).toBe("10");
  expect(getByTestId('HW10Input').value).toBe("1");
  expect(true).toBeTruthy();
});

test('should have correct value', () => {
  const onChange = jest.fn();
  const { container, getByTestId } = render(
    <HW10Input
      name="usd"
      rate={1/30}
      money={90}
      value={0}
      dollar="ntd"
      onChange={onChange}
    />
  );
  expect(getByTestId('HW10Input').value).toBe("3");
  expect(container).toMatchSnapshot();
});
