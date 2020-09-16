import React from 'react';

import {
  // getByLabelText,
  cleanup,
  render,
  fireEvent,
} from '@testing-library/react';

import HW from './HW8';

afterEach(cleanup); // 跑完每個test之後都要執行cleanup(把測試完的component清空，避免後面的測試受到前面的影響)

test('should plus correctly', () => {
  const { getByTestId, getByText, container } = render(<HW />); //此處的render: 把測試的component掛到一個虛擬的div上
  // const DOM = container;
  ['3','6','1','3'].forEach(item => {
    fireEvent.click(getByText(item));
  })
  expect(getByTestId('sum')).toHaveTextContent('13');
  expect(container).toMatchSnapshot();
})

