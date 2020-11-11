import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  userEvent.type(getByTestId('LenthInput'), '502');
  console.log(onChange.mock.results);
  expect(onChange.mock.results[0].value).toBe('5');
  expect(onChange.mock.results[1].value).toBe('50');
  expect(onChange.mock.results[2].value).toBe('502');
  // expect(true).toBeTruthy();
});