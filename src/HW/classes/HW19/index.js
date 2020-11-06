import React, { Component } from 'react';
import './style.css';
import Gophers from './components/Gophers';

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      sumScore: 0,
    };
  }

  setScore = ( score ) => {
    this.setState({
      sumScore: this.state.sumScore + score,
    });
  }

  render() {
    const {sumScore} = this.state;
    return (
      <div className="HW19">
        <h1 data-testid="score" className="score">
          {sumScore}
        </h1>
        <div className="wrapper">
          {[...Array(9).keys()].map(index =>
            <Gophers key={index} setScore={this.setScore} />
          )}
        </div>
      </div>
    );
  }
}
