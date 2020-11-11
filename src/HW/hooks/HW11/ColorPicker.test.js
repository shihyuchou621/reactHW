import React from 'react';

import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
  userEvent.type(getByTestId('ColorPicker'), '8');
  expect(onChange.mock.results[0].value).toBe("8");
  expect(container).toMatchSnapshot();
});
