import React, { Component } from 'react';

const getRandom = (max, min = 0) => {
  return ~~(Math.random() * (max - min + 1) + min);
};

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      point: 0,
      dashOrQ: '-',
    };
  }

  tick = () => {
    this.setState({
      dashOrQ: this.state.dashOrQ === 'Q' ? '-' : 'Q',
    });
    setTimeout(() => {
      this.tick();
    }, getRandom(3000, 500));
  }

  handleChange = ({ target : { value } }) => {
    const { point, dashOrQ } = this.state;
    this.setState({
      point: (value.toUpperCase() === dashOrQ ? point + 1 : point - 1),
      dashOrQ: dashOrQ === 'Q' ? '-' : dashOrQ,
    });
  }

  componentDidMount() {
    this.tick();
  }


  render() {
    return (
      <div>
        <h1>{this.state.dashOrQ}</h1>
        <h3>分數: {this.state.point}</h3>
        <input
          value=""
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
