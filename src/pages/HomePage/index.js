import React from 'react';
import {
  Link,
} from "react-router-dom";
import "./style.css";

import pic27 from "./pic/27.PNG";

export default function HomePage() {
  return (
    <div className="container">
      <h1>React.js</h1>

      {/* <div className="gallery">
        <div className="gallery-item">
          <figure>
            <img src={pic27} alt="Carousel" />
            <figcaption>輪播器</figcaption>
          </figure>
          <p><Link to="/HW27">Carousel</Link></p>
        </div>
        <div className="gallery-item">
          <figure>
            <img src="https://images.dog.ceo/breeds/poodle-toy/n02113624_1582.jpg" alt="dog" />
            <figcaption>2</figcaption>
          </figure>
          <p>2</p>
        </div>
        <div className="gallery-item">
          <figure>
            <img src="https://images.dog.ceo/breeds/pug/n02110958_13794.jpg" alt="dog" />
            <figcaption>3</figcaption>
          </figure>
          <p>3</p>
        </div>
        <div className="gallery-item">
          <figure>
            <img src="https://images.dog.ceo/breeds/terrier-australian/n02096294_5504.jpg" alt="dog" />
            <figcaption>4</figcaption>
          </figure>
          <p>4</p>
        </div>
        <div className="gallery-item">
          <figure>
            <img src="https://images.dog.ceo/breeds/kelpie/n02105412_1222.jpg" alt="dog" />
            <figcaption>5</figcaption>
          </figure>
          <p>5</p>
        </div>
        <div className="gallery-item">
          <figure>
            <img src="https://images.dog.ceo/breeds/doberman/n02107142_1193.jpg" alt="dog" />
            <figcaption>6</figcaption>
          </figure>
          <p>6</p>
        </div>
        <div className="gallery-item">
          <figure>
            <img src="https://images.dog.ceo/breeds/terrier-russell/iguet4.jpeg" alt="dog" />
            <figcaption>7</figcaption>
          </figure>
          <p>7</p>
        </div>
        <div className="gallery-item">
          <figure>
            <img src="https://images.dog.ceo/breeds/newfoundland/n02111277_5292.jpg" alt="dog" />
            <figcaption>8</figcaption>
          </figure>
          <p>8</p>
        </div>
        <div className="gallery-item">
          <figure>
            <img src="https://images.dog.ceo/breeds/borzoi/n02090622_266.jpg" alt="dog" />
            <figcaption>9</figcaption>
          </figure>
          <p>9</p>
        </div>
        <div className="gallery-item">
          <figure>
            <img src="https://images.dog.ceo/breeds/newfoundland/n02111277_11806.jpg" alt="dog" />
            <figcaption>10</figcaption>
          </figure>
          <p>10</p>
        </div>
        <div className="gallery-item">
          <figure>
            <img src="https://images.dog.ceo/breeds/poodle-miniature/n02113712_3293.jpg" alt="dog" />
            <figcaption>11</figcaption>
          </figure>
          <p>11</p>
        </div>
        <div className="gallery-item">
          <figure>
            <img src="https://images.dog.ceo/breeds/pembroke/n02113023_4881.jpg" alt="dog" />
            <figcaption>12</figcaption>
          </figure>
          <p>12</p>
        </div>
        <div className="gallery-item">
          <figure>
            <img src="https://images.dog.ceo/breeds/poodle-standard/n02113799_4946.jpg" alt="dog" />
            <figcaption>13</figcaption>
          </figure>
          <p>13</p>
        </div>
        <div className="gallery-item">
          <figure>
            <img src="https://images.dog.ceo/breeds/schnauzer-giant/n02097130_4050.jpg" alt="dog" />
            <figcaption>14</figcaption>
          </figure>
          <p>14</p>
        </div>
      </div> */}


      <ul className="list-group list-group-flush">
        <li className="list-group-item"><Link to="/HW27">Carousel</Link> 輪播器</li>
        <li className="list-group-item"><Link to="/HW26">Tooltips</Link> 提示文字</li>
        <li className="list-group-item"><Link to="/HW25">Modal</Link> 互動視窗</li>
        <li className="list-group-item"><Link to="/HW23">SunMoon</Link> 圖片切換</li>
        <li className="list-group-item"><Link to="/HW22">Cart</Link> 購物車</li>
        <li className="list-group-item"><Link to="/HW21">1A2B</Link> 猜數字</li>
        <li className="list-group-item"><Link to="/HW20">GuessNum</Link> 終極密碼</li>
        <li className="list-group-item"><Link to="/HW19">Gopher</Link> 打地鼠</li>
        <li className="list-group-item"><Link to="/HW18">TwinkklingChar</Link> 隨機閃爍字母</li>
        <li className="list-group-item"><Link to="/HW17">RandomNum</Link> 生成隨機數字</li>
        <li className="list-group-item"><Link to="/HW16">NumberGame</Link> 打數字遊戲</li>
        <li className="list-group-item"><Link to="/HW15">LengthConversion</Link> 長度轉換</li>
        <li className="list-group-item"><Link to="/HW14">Pokemon</Link> 寶可夢抓取篩選</li>
        <li className="list-group-item"><Link to="/HW13">TodoList</Link> 代辦事項</li>
        <li className="list-group-item"><Link to="/HW12">Tab</Link> 標籤</li>
        <li className="list-group-item"><Link to="/HW11">ColorPad</Link> 調色盤</li>
        <li className="list-group-item"><Link to="/HW10">Currency</Link> 貨幣轉換</li>
        <li className="list-group-item"><Link to="/HW9">CountDown</Link> 倒數計時器</li>
        <li className="list-group-item"><Link to="/HW8">SumForButton</Link> 不同按鈕加總</li>
        <li className="list-group-item"><Link to="/HW7">PersonTable</Link> 抓取資料</li>
        <li className="list-group-item"><Link to="/HW6">RemovableList</Link> 列表新增刪除功能</li>
        <li className="list-group-item"><Link to="/HW5">ItemList</Link> 輸入生成列表</li>
        <li className="list-group-item"><Link to="/HW4">BMI</Link> 計算BMI</li>
        <li className="list-group-item"><Link to="/HW3">CounterSum</Link> 按鈕加總</li>
        <li className="list-group-item"><Link to="/HW2">CounterList</Link> 生成列表</li>
        <li className="list-group-item"><Link to="/HW1">Counter</Link> +1按鈕</li>
      </ul>
    </div>
  );
}
