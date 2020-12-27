import React, { createRef, useState } from 'react';
import style from './style.module.css';
import Item from './Item';
import Modal from '../HW25/Modal';

const DOM = createRef();

export const getInitiate = () => {
  return {
    answer: [...Array(10).keys()] // [0,1,2,3,4,5,6,7,8,9]
      .sort(() => Math.random() - 0.5) // 正數交換，負數不交換
      .slice(0,4)
      .join(""),
    correct: false,
    replyList: [],
  };
};

// 若非不重複4位數，跳出警示視窗
export const isError = value => {
  if(value.length !== 4) return true;
  if(isNaN(Number(value))) return true;
  if([...new Set(value)].length !== 4) return true;
  return false;
};

export default function Index() {
  const [ { answer, correct, replyList},
    setState,
  ] = useState(getInitiate());

  const handleClick = () => {
    setState(getInitiate());
  };

  const handleEnter = e =>{
    e.preventDefault();
    const value = DOM.current.value.trim();
    if(isError(value)) {
      DOM.current.value = "";
      return alert("格式不正確");
    }

    let a = 0;
    let b = 0;
    for(let i = 0; i < 4; i++) {
      for(let j = 0; j < 4; j++) {
        if(value[i] === answer[j]) {
          if(i === j) {a++;} else {b++;}
        }
      }
    }

    setState(state => ({
      ...state,
      replyList: [
        { id: Math.random(), result: <Item {...{ value, a, b}} /> },
        ...replyList,
      ],
      correct: value === answer,
    }));
    DOM.current.value = '';
  };

  return (
    <div className={style.container}>
      <div className={style.descrip}>
        <h2>猜數字</h2>
        <div>1. 一進到遊戲電腦隨機產生4位不重複數字</div>
        <div>2. 使用者送出答案，若不符合「不重複4位數字」則跳錯誤訊息</div>
        <div>3. 送出的答案跟正確答案比較，位置一樣則A，位置不同則B</div>
        <div>4. 會累積過去猜過的答案與結果</div>
        <div>5. 如果猜到 4A 則遊戲結束，並可另開新局</div>
        <form
          className={style.form}
          data-testid="form"
          onSubmit={handleEnter}
        >
          <input
            className={style.input}
            data-testid="input"
            disabled={correct}
            ref={DOM}
          />
          <button className={style.button}>Guess</button>
          {/* type屬性若空白則預設onSubmit，另有button(按了無作用)、reset(回復form的預設值) */}
        </form>
        <ul data-testid="resultList">
          {/* map裡所有標籤都要記得加key */}
          {replyList.map((reply, index) =>
            <li
              className={style.li}
              data-testid={`result${index}`}
              key={index}
            >
              {reply.result}
            </li>
          )}
        </ul>
        <div>
          {correct &&
            <Modal
              name="top + animation"
              isAnimation={true}
              closeText="好"
              onClose={handleClick}
              btnClass={style.button}
            >
              答對了！你要再來一局嗎？
            </Modal>
          }
        </div>
      </div>
    </div>
  );
}

