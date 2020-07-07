import React, { Component } from 'react';
import './style.css';

export default class Gophers extends Component {
  constructor() {
    super();
    this.state = {
      isG: Boolean(Math.round(Math.random())),
    }
  }

  tick = () => {
    this.setState({ isG: !this.state.isG });
    setTimeout(() => {
      this.tick();
    } , ~~(Math.random() * 4000) + 2000);
  }

  handleClick = () => {
    const score = this.state.isG ? 1 : -1;
    this.props.setScore(score);
    this.setState({
      isG: false,
    });
    
  }

  componentDidMount() {
    this.tick();
  }

  render() {
    const { isG } = this.state;
    return (
      <div
        className={`Gophers ${isG ? 'pink': ''}`}
        onClick={this.handleClick}
      >
        {isG ? 'G' : '-'}
      </div>
    )
  }
}
