import React, { Component } from 'react';

import './style.scss';

const t = +new Date();

export default class Master extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      isQ: false,
    };
  }

  tick = () => {
    this.setState({ isQ: !this.state.isQ });
    this.timer = setTimeout(() => {
      this.tick();
    }, ~~(Math.random() * 1500) + 500);
  }

  componentDidMount() {
    this.tick();
  }

  // 偵測到即將被移除時觸發
  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handleChange = ({ target: {value}}) => {
    const { isQ, score } = this.state;
    console.log(+new Date() - t, this.state.isQ);
    const isCorrect = isQ && value.toUpperCase() === 'Q';
    this.setState({
      isQ: false,
      score: score + (isCorrect ? 1: -1),
    });
  }

  render() {
    const { isQ, score } = this.state;
    return (
      <div>
        <h3>{isQ ? 'Q': '-'}</h3>
        <div data-testid="score">
          score: {score}
        </div>
        <input
          data-testid="input"
          value=""
          type="text"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}