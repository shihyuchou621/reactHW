import React, { Component } from 'react';

const getRandom = () => {
  return ~~(Math.random() * 10);
};

let random = getRandom();

export default class Master extends Component {
  constructor() {
    super();
    this.state = {
      wrong: 0,
      correct: 0,
    };
  }

  handleChange = ({ target: { value } }) => {
    const attr = +value === random ? 'correct': 'wrong';

    random = getRandom();
    this.setState({
      [attr]: this.state[attr] + 1,
    });

  }
  render() {
    const {
      wrong,
      correct,
    } = this.state;
    return (
      <div>
        <h3>{random}</h3>
        <input
          data-testid="input"
          type="text"
          value="" onChange={this.handleChange}
        />
        <div
          data-testid="wrong"
        >wrong: {wrong}</div>
        <div
          data-testid="correct"
        >correct: {correct}</div>
      </div>
    );
  }
}
