import React, { Component } from 'react';

const getRandom = (max, min = 0) => {
  return ~~(Math.random() * (max - min + 1)) + min;
};

export default class Master extends Component {

  constructor() {
    super();
    this.state = {
      num: getRandom(9)
    };
  }

  tick = () => {
    this.setState({ num: getRandom(9)});
    setTimeout(() => {
      this.tick();
    }, getRandom(1000, 500));
  }

  componentDidMount() {
    this.tick();
  }

  render() {
    return (
      <div>
        {this.state.num}
      </div>
    );
  }
}
