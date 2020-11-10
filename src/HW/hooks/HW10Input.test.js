import React from 'react';
import {
  render,
  cleanup,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW10Input from './HW10Input';

afterEach(cleanup);

test('onChange should work', () => {
  const onChange = jest.fn(e => e.target.value);
  const { container, getByTestId } = render(
    <HW10Input
      name="usd"
      rate={30}
      money={1}
      dollar="usd"
      onChange={onChange}
    />
  );
  userEvent.type(getByTestId('HW10Input'), '10');

  // !!!!↓找不到value，result是空陣列，其他屬性也沒找到
  console.log(onChange.mock.results[0]);
  // expect(onChange.mock.results[0].value).toBe("10");

  expect(getByTestId('HW10Input').value).toBe("1");
  expect(container).toMatchSnapshot();
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
