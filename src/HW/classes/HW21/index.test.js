import React from 'react';

import {
  cleanup,
  render,
  fireEvent,
} from '@testing-library/react';

/** 這邊可以 import */
import HW, {
  isError,
  getInitiate,
} from '.';

afterEach(cleanup);

/** 這題有獨立出來的 getInitiate, isError
 * 都要把它們 export 出來獨立寫測試哦
 * export 去 HW21/index.js
*/

test('should give answer', () => {

  for (let i = 0; i < 10; i++) {
    // const Initiate = getInitiate();
    // const answer = Initiate.answer;
    // const { answer } = getInitiate(); <<<<這個不懂
    // 教你
    // getInitiate() 可以得到一個物件，對吧？嗯嗯
    // const { answer } = 物件;
    // ↑ 這句的意思就是「從物件裡拿 answer這屬性」並定義出來
    // 過去，你可能會這樣寫....
    // const answer = 物件.answer;嗯嗯
    expect(isError(getInitiate().answer)).toBeFalsy();
    // expect(answer < 9876 && answer > 0123).toBeTruthy();
  }

});

test('answer should be correct', () => {
  expect(isError("2963")).toBeFalsy();
  expect(isError("qwer")).toBeTruthy();
  expect(isError("537")).toBeTruthy();
  expect(isError("1111")).toBeTruthy();
});

test('submit wrong answer', () => {
  global.alert = jest.fn();
  const { getByTestId } = render(<HW />);
  fireEvent.change(getByTestId("input"),
    { target: {value: 'qwerty'} }
  );
  fireEvent.submit(getByTestId("form"));
  expect(alert.mock.calls.length).toBe(1);
});


test('should give correct a & b', () => {
  // 把外部的函數取代掉
  global.Math.random = () => .25;
  const { getByTestId, getByText } = render(<HW />);
  fireEvent.change(getByTestId("input"),
    { target: {value: '6925'} }
  );
  fireEvent.submit(getByTestId("form"));
  expect(getByTestId("result0")).toHaveTextContent("6925: 0A2B");

  fireEvent.change(getByTestId("input"),
    { target: {value: '1084'} }
  );
  fireEvent.submit(getByTestId("form"));
  expect(getByTestId("result0")).toHaveTextContent("1084: 0A1B");
  expect(getByTestId("result1")).toHaveTextContent("6925: 0A2B");

  fireEvent.change(getByTestId("input"),
    { target: {value: '7896'} }
  );
  fireEvent.submit(getByTestId("form"));
  expect(getByTestId("result0")).toHaveTextContent("7896: 2A2B");
  expect(getByTestId("result1")).toHaveTextContent("1084: 0A1B");
  expect(getByTestId("result2")).toHaveTextContent("6925: 0A2B");

  fireEvent.change(getByTestId("input"),
    { target: {value: '9876'} }
  );
  fireEvent.submit(getByTestId("form"));
  expect(getByTestId("4A")).toHaveTextContent("答對了！遊戲結束，你要重新一局嗎？");

  fireEvent.click(getByText("好!"));
  expect(getByTestId("resultList").children.length).toBe(0);
});






/* 好多貓咪
                   .-.
                  / /
                 / |
   |\     ._ ,-""  `.
   | |,,_/  7        ;
 `;=     ,=(     ,  /
  |`q  q  ` |    \_,|
 .=; <> _ ; /  ,/'/ |
';|\,j_ \;=\ ,/   `-'
    `--'_|\  )
   ,' | /  ;'
  (,,/ (,,/      fsc


          .__....._             _.....__,
            .": o :':         ;': o :".
            `. `-' .'.       .'. `-' .'
              `---'             `---'

    _...----...      ...   ...      ...----..._
 .-'__..-""'----    `.  `"`  .'    ----'""-..__`-.
'.-'   _.--"""'       `-._.-'       '"""--._   `-.`
'  .-"'                  :                  `"-.  `
  '   `.              _.'"'._              .'   `
        `.       ,.-'"       "'-.,       .'
          `.                           .'
            `-._                   _.-'
                `"'--...___...--'"


                   ,   __, ,
   _.._         )\/(,-' (-' `.__
  /_   `-.      )'_      ` _  (_    _.---._
 // \     `-. ,'   `-.    _\`.  `.,'   ,--.\
// -.\       `        `.  \`.   `/   ,'   ||
|| _ `\_         ___    )  )     \  /,-'  ||
||  `---\      ,'__ \   `,' ,--.  \/---. //
 \\  .---`.   / /  | |      |,-.\ |`-._ //
  `..___.'|   \ |,-| |      |_  )||\___//
    `.____/    \\\O| |      \o)// |____/
         /      `---/        \-'  \
         |        ,'|,--._.--')    \
         \       /   `n     n'\    /
          `.   `<   .::`-,-'::.) ,'    hjw
            `.   \-.____,^.   /,'
              `. ;`.,-V-.-.`v'
                \| \     ` \|\   一隻辛巴
                 ;  `-^---^-'/
                  `-.______,'





                                               .--.
                                               `.  \
                                                 \  \
                                                  .  \
                                                  :   .
                                                  |    .
                                                  |    :
                                                  |    |
  ..._  ___                                       |    |
 `."".`''''""--..___                              |    |
 ,-\  \             ""-...__         _____________/    |
 / ` " '                    `""""""""                  .
 \                                                      L
 (>                                                      \
/                                                         \
\_    ___..---.                                            L
  `--'         '.                                           \
                 .                                           \_
                _/`.                                           `.._
             .'     -.                                             `.
            /     __.-Y     /''''''-...___,...--------.._            |
           /   _."    |    /                ' .      \   '---..._    |
          /   /      /    /                _,. '    ,/           |   |
          \_,'     _.'   /              /''     _,-'            _|   |
                  '     /               `-----''               /     |
                  `...-'     dp                                `...-'
 */