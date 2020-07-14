import React, { Component } from 'react'

const getInitiate = () => {
  return {
    answer: [...Array(10).keys()] //[0,1,2,3,4,5,6,7,8,9]
      .sort(() => Math.random() - 0.5) //正數交換，負數不交換
      .slice(0,4)
      .join(""),
    correct: false,
    replyList: [],
  }
}

//若非不重複4位數，跳出警示視窗
const isError = value => {
  if(value.length !== 4) return true;
  if(isNaN(Number(value))) return true;
  if([...new Set(value)].length !== 4) return true;
  return false;
}

export default class index extends Component {
  constructor() {
    super();
    this.state = getInitiate();
  }

  handleClick = () => {
    this.setState(getInitiate());
  }

  handleEnter = e =>{ //此處的e為<form>這個dom
    e.preventDefault();
    const value = this.guessInput.value.trim() //忽略開頭及結尾空格(中間的不行)
    const { answer, replyList } = this.state;

    if(isError(value)) {
      this.guessInput.value = "";
      return alert("格式不正確");
    }
    
    var a = 0;
    var b = 0;
    for(var i = 0; i < 4; i++) {
      for(var j = 0; j < 4; j++) {
        if(value[i] === answer[j]) {
          if(i === j) {a++} else {b++}
        } 
      }
    }

    this.setState({
      replyList: [
        { id: Math.random(), result: `${value}: ${a}A${b}B` },
        ...replyList,
      ],
      correct: value === answer,
    });
    this.guessInput.value = '';
  }

  render() {
    return (
      <div>
        <h1>猜數字</h1>
        <div>1. 一進到遊戲電腦隨機產生4位不重複數字</div>
        <div>2. 使用者送出答案，若不符合「不重複4位數字」則跳錯誤訊息</div>
        <div>3. 送出的答案跟正確答案比較，位置一樣則A，位置不同則B</div>
        <div>4. 會累積過去猜過的答案與結果</div>
        <div>5. 如果猜到 4A 則遊戲結束，並可另開新局</div>
        <form onSubmit={this.handleEnter}>
          <input 
            name="guess"
            disabled={this.state.correct}
            ref={element => this.guessInput = element}
          />
          <button>猜!</button> 
          {/* type屬性若空白則預設onSubmit，另有button(按了無作用)、reset(回復form的預設值) */}
        </form>
        <ul>
          {/* map裡所有標籤都要記得加key */}
          {this.state.replyList.map(reply =>
          <li key={reply.id}>
            {reply.result}
          </li>
          )}
        </ul>
        <div>
          {this.state.correct &&
          <div>
            答對了！遊戲結束，你要重新一局嗎？
            <button onClick={this.handleClick}>好!</button>
          </div>
          }
        </div>
      </div>
    );
  }
}

