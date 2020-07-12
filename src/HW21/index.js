import React, { Component } from 'react'

const getInitiate = () => {
  return {
    answer: [...Array(10).keys()]
      .sort(() => Math.random() - 0.5)
      .slice(0,4)
      .join(""),
    correct: false,
    replyList: [],
  }
}

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

  handleEnter = e =>{
    e.preventDefault();
    const value = this.guessInput.value.trim()
    const { answer, replyList } = this.state;

    if(isError(value)) {
      this.guessInput.value = "";
      return alert("格式不正確");
    }
    
    var a = 0;
    var b = 0;
    for (var i = 0; i < 4; i++) {
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
        <form onSubmit={this.handleEnter}>
          <input 
            name="guess"
            disabled={this.state.correct}
            ref={element => this.guessInput = element}
          />
          <button>submit</button>
        </form>
        <ul>
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

// 1.一進到遊戲電腦隨機產生4位不重複數字
// 2.使用者送出答案，若不符合「不重複4位數字」則跳錯誤訊息
// 3.送出的答案跟正確答案比較，位置一樣則A，位置不同則B
// 4.會累積過去猜過的答案與結果
// 5.如果猜到 4A 則遊戲結束，並可以另開新局。
