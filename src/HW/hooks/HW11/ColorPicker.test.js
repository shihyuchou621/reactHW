import React from 'react';

import {
  cleanup,
  render,
  fireEvent,
} from '@testing-library/react';

import ColorPicker from './ColorPicker';

afterEach(cleanup);

test('should change correctly', () => {
  const onChange = jest.fn(e => e.target.value);
  const { container, getByTestId } = render(
    <ColorPicker
      color="red"
      value={128}
      onChange={onChange}
    />
  );
  fireEvent.change(getByTestId('ColorPicker'), { target: {
    value: '20'
  }});
  expect(onChange.mock.results[0].value).toBe("20");
  expect(container).toMatchSnapshot();
});
