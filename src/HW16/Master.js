import React, { Component } from 'react';

const getRandom = () => {
  return ~~(Math.random() * 10);
}

let random = getRandom();

export default class Master extends Component {
  constructor() {
    super();
    this.state = {
      wrong: 0,
      correct: 0,
    }
  }

  handleChange = ({ target: { value } }) => {
    const attr = +value === random ? 'correct': 'wrong';

    random = getRandom();
    this.setState({
      [attr]: this.state[attr] + 1,
    });

    console.log('a');
  }
  render() {
    const {
      wrong,
      correct,
    } = this.state;
    console.log('b');
    return (
      <div>
        <h3>{random}</h3>
        <input type="text" value="" onChange={this.handleChange} />
        <div>wrong: {wrong}</div>
        <div>correct: {correct}</div>
      </div>
    )
  }
}
