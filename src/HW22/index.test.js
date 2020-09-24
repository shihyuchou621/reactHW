import React from 'react';

import {
  cleanup,
  render,
  fireEvent,
} from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import HW from '.';

afterEach(cleanup);

test('should have correct subtotal and total', () => {
  const { container, getByTestId } = render(<HW />);
  fireEvent.change(
    container.querySelector('input[name="橘子"]'),
    { target: { value: '3' } }
  );
  fireEvent.submit(container.querySelector('form[name="橘子"'));

  fireEvent.change(
    container.querySelector('input[name="蓮霧"]'),
    { target: { value: '1' } }
  );
  fireEvent.submit(container.querySelector('form[name="蓮霧"'));

  fireEvent.change(
    container.querySelector('input[name="哈蜜瓜"]'),
    { target: { value: '1' } }
  );
  fireEvent.submit(container.querySelector('form[name="哈蜜瓜"'));

  fireEvent.change(
    container.querySelector('input[name="蘋果"]'),
    { target: { value: '2' } }
  );
  fireEvent.submit(container.querySelector('form[name="蘋果"'));

  fireEvent.change(
    container.querySelector('input[name="葡萄柚"]'),
    { target: { value: '5' } }
  );

  // 上面那行應該就可以改成這樣... 有空再改改看
  // userEvent.type(
  //   container.querySelector('input[name="葡萄柚"]'),
  //   "5"
  // );
  fireEvent.submit(container.querySelector('form[name="葡萄柚"'));

  expect(container).toMatchSnapshot();
  expect(getByTestId("subtotal橘子")).toHaveTextContent("橘子 x 3 = $60");
  expect(getByTestId("subtotal蓮霧")).toHaveTextContent("蓮霧 x 1 = $30");
  expect(getByTestId("subtotal哈蜜瓜")).toHaveTextContent("哈蜜瓜 x 1 = $40");
  expect(getByTestId("subtotal蘋果")).toHaveTextContent("蘋果 x 2 = $100");
  expect(getByTestId("subtotal葡萄柚")).toHaveTextContent("葡萄柚 x 5 = $75");
  expect(getByTestId("total")).toHaveTextContent("總計 $305");

});

test('should minus and clear correctly', () => {
  const { container, getByTestId, getByText } = render(<HW />);
  fireEvent.change(
    container.querySelector('input[name="橘子"]'),
    { target: { value: '3' } }
  );
  fireEvent.submit(container.querySelector('form[name="橘子"'));

  fireEvent.change(
    container.querySelector('input[name="蓮霧"]'),
    { target: { value: '2' } }
  );
  fireEvent.submit(container.querySelector('form[name="蓮霧"'));
  fireEvent.click(getByTestId("橘子-1"));
  expect(getByTestId("subtotal橘子")).toHaveTextContent("橘子 x 2 = $40");

  fireEvent.click(getByTestId("蓮霧clear"));
  expect(container).toMatchSnapshot();
});

/**
   * 我剛剛看到一個東西，好像可以讓你的 change 更方便
   * https://github.com/testing-library/user-event#typeelement-text-options
   *
   * import userEvent from '@testing-library/user-event';
   * ...
   * userEvent.type(screen.getByXXX('xxxx'), '要輸入的內容');
   * 這樣你就不用打 change 然後還要放 target.value.....
   * 喏?
  */

/** 男子~~~漢~~~~~
   * 行動快速像那江河湍急~
   * 男子~~~漢~~~~~
   * 破壞力像那風暴無情~
  */