import React, { Component } from 'react';

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      correct: 0,
      wrong: 0,
      random: Math.floor(Math.random() * 10),
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      correct: +target.value === this.state.random ? this.state.correct + 1 : this.state.correct,
      wrong: +target.value === this.state.random ? this.state.wrong : this.state.wrong + 1,
      random: Math.floor(Math.random() * 10),

    });
  }

  // componentDidMount() {
  //   this.setState({
  //     random: Math.floor(Math.random() * 10),
  //   })
  // }

  render() {
    const {
      correct, wrong, random,
    } = this.state;

    return (
      <div>
        <div>{random}</div>
        <div>
          <input
            value={""}
            onChange={this.handleChange}
          />
        </div>
        <div>答對: {correct} </div>
        <div>答錯: {wrong} </div>
      </div>
    );
  }
}
