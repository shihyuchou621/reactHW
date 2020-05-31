import React, { Component } from 'react';

export default class HW8 extends Component {
  constructor() {
    super();
    this.state = {
      sum: 0,
    };
  }

  handleClick = sum => {
    this.setState({ sum });
  }
  
  render() { 
    const {
      handleClick,
      state: { sum },
    } = this;

    return (
      <>
        <div>
          {[...Array(9 + 1).keys()].slice(1).map(n =>
            <button key={n} onClick={handleClick.bind(this, sum + n)}>{n}</button>
          )}
        </div>
        <div>{sum}</div>
      </>
    );
  }
}
