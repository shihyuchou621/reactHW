import React from 'react';

import {
  cleanup,
  render,
  fireEvent,
} from '@testing-library/react';

import HW from '.';

afterEach(cleanup);

global.Math.random = () => 0.324; // 答案設定為325

test('max and min should change correctly', () => {
  const { getByText, getByTestId } = render(<HW />);
  fireEvent.change(getByTestId("input"),
    { target: {value: '500'} }
  );
  fireEvent.submit(getByTestId("form"));
  expect(getByTestId("range")).toHaveTextContent("現在範圍: 1 ~ 500");

  fireEvent.change(getByTestId("input"),
    { target: {value: '250'} }
  );
  fireEvent.submit(getByTestId("form"));
  expect(getByTestId("range")).toHaveTextContent("現在範圍: 250 ~ 500");

  fireEvent.change(getByTestId("input"),
    { target: {value: '350'} }
  );
  fireEvent.submit(getByTestId("form"));
  expect(getByTestId("range")).toHaveTextContent("現在範圍: 250 ~ 350");

  fireEvent.change(getByTestId("input"),
    { target: {value: '325'} }
  );
  fireEvent.submit(getByTestId("form"));
  expect(getByTestId("answer")).toHaveTextContent("答對了！答案就是325");

  fireEvent.click(getByText("再來一局"));
  expect(getByTestId("range")).toHaveTextContent("現在範圍: 1 ~ 1000");

});




/* !!!!???

          __..--''``---....___   _..._    __
 /// //_.-'    .-/";  `        ``<._  ``.''_ `. / // /
///_.-' _..--.'_    \                    `( ) ) // //
/ (_..-' // (< _     ;_..__               ; `' / ///
 / // // //  `-._,_)' // / ``--...____..-' /// / //

           .'\   /`.
         .'.-.`-'.-.`.
    ..._:   .-. .-.   :_...
  .'    '-.(o ) (o ).-'    `.
 :  _    _ _`~(_)~`_ _    _  :
:  /:   ' .-=_   _=-. `   ;\  :
:   :|-.._  '     `  _..-|:   :
 :   `:| |`:-:-.-:-:'| |:'   :
  `.   `.| | | | | | |.'   .'
    `.   `-:_| | |_:-'   .'
 jgs  `-._   ````    _.-'
          ``-------''

         __                              ___   __        .ama     ,
      ,d888a                          ,d88888888888ba.  ,88"I)   d
     a88']8i                         a88".8"8)   `"8888:88  " _a8'
   .d8P' PP                        .d8P'.8  d)      "8:88:baad8P'
  ,d8P' ,ama,   .aa,  .ama.g ,mmm  d8P' 8  .8'        88):888P'
 ,d88' d8[ "8..a8"88 ,8I"88[ I88' d88   ]IaI"        d8[
 a88' dP "bm8mP8'(8'.8I  8[      d88'    `"         .88
,88I ]8'  .d'.8     88' ,8' I[  ,88P ,ama    ,ama,  d8[  .ama.g
[88' I8, .d' ]8,  ,88B ,d8 aI   (88',88"8)  d8[ "8. 88 ,8I"88[
]88  `888P'  `8888" "88P"8m"    I88 88[ 8[ dP "bm8m88[.8I  8[
]88,          _,,aaaaaa,_       I88 8"  8 ]P'  .d' 88 88' ,8' I[
`888a,.  ,aadd88888888888bma.   )88,  ,]I I8, .d' )88a8B ,d8 aI
  "888888PP"'        `8""""""8   "888PP'  `888P'  `88P"88P"8m"
*/