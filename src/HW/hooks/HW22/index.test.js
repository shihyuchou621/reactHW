import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from '.';

afterEach(cleanup);

test('should have correct subtotal and total', () => {
  const { container, getByTestId } = render(<HW />);
  userEvent.type(container.querySelector('input[name="橘子"]'), '3{enter}');
  userEvent.type(container.querySelector('input[name="蓮霧"]'), '1{enter}');
  userEvent.type(container.querySelector('input[name="哈蜜瓜"]'), '1{enter}');
  userEvent.type(container.querySelector('input[name="蘋果"]'), '2{enter}');
  userEvent.type(container.querySelector('input[name="葡萄柚"]'), '5{enter}');

  // 上面那行應該就可以改成這樣... 有空再改改看
  // userEvent.type(container.querySelector('input[name="葡萄柚"]'),
  //   "5"
  // );

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
  userEvent.type(container.querySelector('input[name="橘子"]'), '3{enter}');
  userEvent.type(container.querySelector('input[name="蓮霧"]'), '2{enter}');
  userEvent.click(getByTestId("橘子-1"));
  expect(getByTestId("subtotal橘子")).toHaveTextContent("橘子 x 2 = $40");

  userEvent.click(getByTestId("蓮霧clear"));
  expect(container).toMatchSnapshot();
});

/**
   * 我剛剛看到一個東西，好像可以讓你的 change 更方便
   * https://github.com/testing-library/user-event#typeelement-text-options
   *
   * import userEvent from '@testing-library/user-event';
   * ...
   * userEvent.type(screen.getByXXX('xxxx'), '要輸入的內容{enter}');
   * 這樣你就不用打 change 然後還要放 target.value.....
   * 喏?
  */

/** 男子~~~漢~~~~~
   * 行動快速像那江河湍急~
   * 男子~~~漢~~~~~
   * 破壞力像那風暴無情~
  */