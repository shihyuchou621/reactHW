import React from 'react';

import {
  cleanup,
  render,
  fireEvent,
} from '@testing-library/react';

import Product from './Product'; /** ← 是否應該戴"載"入 Product */

afterEach(cleanup);

test('should have correct value', () => {
  const onSubmit = jest.fn(
    (index, value) => ({index, value})
  );
  const { getByTestId } = render(
    <Product
      name="橘子"
      price={20}
      index={1}
      onSubmit={onSubmit}
    />
  );

  fireEvent.change(getByTestId('Product'), { target: {
    value: '5'
  }});
  fireEvent.submit(getByTestId('form'));
  // console.log(onSubmit.mock.results[0]);
  expect(onSubmit.mock.results[0].value.value).toBe(5);

  fireEvent.change(getByTestId('Product'), { target: {
    value: '2'
  }});
  fireEvent.submit(getByTestId('form'));
  expect(onSubmit.mock.results[1].value.value).toBe(2);
});
