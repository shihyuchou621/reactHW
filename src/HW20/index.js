import React, { Component } from 'react'

const getInitState = () => {
  return {
    min: 1,
    max: 1000,
    answer: ~~(Math.random() * 998) + 2,
    correct: 0,
  }
}

export default class index extends Component {
  constructor() {
    super();
    this.state = getInitState();
  }

  handleEnter = (e) => {
    e.preventDefault(); //onsubmit預設會導頁(有重整效果)，加此行可避免導頁
    const formData = new FormData(e.target);
    const value = parseInt(formData.get('guess'));
    const { answer } = this.state;
    const field = answer > value ? 'min':
                  answer < value ? 'max':
                  'correct';
    this.setState({
      [field]: value
    });

    // this.setState({
    //   min: answer > value ? value : min,
    //   max: answer < value ? value : max,
    //   correct: answer === value ? 1 : 0,
    // });
    this.guessInput.value = "";
  }

  handleClick = () => {
    this.setState(getInitState());
  }

  render() {
    return (
      <div>
        <h2>現在範圍: {this.state.min} ~ {this.state.max}</h2>
          <form className="input-group mb-3" onSubmit={this.handleEnter}>
            <input 
              name="guess"
              disabled={false}
              ref={element => this.guessInput = element} //取得這個dom
            />
          </form>
        <h2>
          {/* correct為1才出現 */}
          {!!this.state.correct && 
            <div>
              答對了！答案就是{this.state.answer}
              <button onClick={this.handleClick}>再來一局</button>
            </div>
          }
        </h2>
      </div>
    )
  }
}
