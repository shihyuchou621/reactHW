import React from 'react';
import {
  Link,
} from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <ul>
        <li><Link to="/HW27">Carousel</Link> 輪播器</li>
        <li><Link to="/HW26">Tooltips</Link> 提示文字</li>
        <li><Link to="/HW25">Modal</Link> 互動視窗</li>
        <li><Link to="/HW23">SunMoon</Link> 圖片切換</li>
        <li><Link to="/HW22">Cart</Link> 購物車</li>
        <li><Link to="/HW21">1A2B</Link> 猜數字</li>
        <li><Link to="/HW20">GuessNum</Link> 終極密碼</li>
        <li><Link to="/HW19">Gopher</Link> 打地鼠</li>
        <li><Link to="/HW18">TwinkklingChar</Link> 閃爍字母</li>
        <li><Link to="/HW17">RandomNum</Link> 生成隨機數字</li>
        <li><Link to="/HW16">NumberGame</Link> 打數字遊戲</li>
        <li><Link to="/HW15">LengthConversion</Link> 長度轉換</li>
        <li><Link to="/HW14">Pokemon</Link> 寶可夢抓取篩選</li>
        <li><Link to="/HW13">TodoList</Link> 代辦事項</li>
        <li><Link to="/HW12">Tab</Link> 標籤</li>
        <li><Link to="/HW11">ColorPad</Link> 調色盤</li>
        <li><Link to="/HW10">Currency</Link> 貨幣轉換</li>
        <li><Link to="/HW9">CountDown</Link> 倒數計時器</li>
        <li><Link to="/HW8">SumForButton</Link> 不同按鈕加總</li>
        <li><Link to="/HW7">PersonTable</Link> 抓取資料</li>
        <li><Link to="/HW6">RemovableList</Link> 列表新增刪除功能</li>
        <li><Link to="/HW5">ItemList</Link> 輸入生成列表</li>
        <li><Link to="/HW4">BMI</Link> 計算BMI</li>
        <li><Link to="/HW3">CounterSum</Link> 按鈕加總</li>
        <li><Link to="/HW2">CounterList</Link> 生成列表</li>
        <li><Link to="/HW1">Counter</Link> +1按鈕</li>
      </ul>
    </div>
  );
}
