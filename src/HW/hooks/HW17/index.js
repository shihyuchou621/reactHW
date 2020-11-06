import React, { Component } from 'react';

const getRandom = () => {
  return ~~(Math.random() * 10);
};

const getRandomTime = () => {
  return ~~(Math.random() * 501) + 500;
};

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      random: getRandom(),
      randomTime: getRandomTime(),
    };
  }

  reset = () => {
    this.setState({
      random: getRandom(),
      randomTime: getRandomTime(),
    });
  }

  repeat = () => {
    this.reset();
    setTimeout(() => {
      this.repeat();
    } , this.state.randomTime);
  }

  componentDidMount() {
    this.repeat();
  }


  render() {
    return (
      <div>
        <div>{this.state.random}</div>
        <div>{this.state.randomTime}</div>
      </div>
    );
  }
}
