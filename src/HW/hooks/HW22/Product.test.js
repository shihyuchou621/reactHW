import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Product from './Product';

afterEach(cleanup);

test('should have correct value', () => {
  const onSubmit = jest.fn(
    (index, value) => ({index, value})
  );
  const { getByTestId, container } = render(
    <Product
      name="橘子"
      price={20}
      index={1}
      onSubmit={onSubmit}
    />
  );

  userEvent.type(getByTestId('input'), '5{enter}');
  expect(container).toMatchSnapshot();

  userEvent.type(getByTestId('input'), '2{enter}');
  expect(container).toMatchSnapshot();

});
