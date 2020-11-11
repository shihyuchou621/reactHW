import React from 'react';

import {
  cleanup,
  render,
  fireEvent,
} from '@testing-library/react';

import LenthInput from './LenthInput';

afterEach(cleanup);

test('onChange should work', () => {
  const onChange = jest.fn(e => e.target.value);
  const { getByTestId } = render(
    <LenthInput
      type={Number}
      onChange={onChange}
    />
  );

  fireEvent.change(getByTestId('LenthInput'), { target: {
    value: '5'
  }});
  // console.log(onChange.mock);
  expect(onChange.mock.results[0].value).toBe('5');
  // expect(true).toBeTruthy();
});