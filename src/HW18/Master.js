import React, { Component } from 'react';

import './style.scss';

export default class Master extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      isQ: false,
    }
  }

  tick = () => {
    this.setState({ isQ: !this.state.isQ });
    setTimeout(() => {
      this.tick();
    }, ~~(Math.random() * 1500) + 500);
  }

  componentDidMount() {
    this.tick();
  }

  handleChange = ({ target: {value}}) => {
    const { isQ, score } = this.state;
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
        <div>score: {score} </div>
        <input
          value=""
          type="text"
          onChange={this.handleChange}
        />
      </div>
    )
  }
}