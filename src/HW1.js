import React from 'react';

class HW1 extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState( {
      counter: this.state.counter + 1
    } );
  }

  render() {
    return (
      <div>
      <button onClick={this.handleClick}><h1>counter: {this.state.counter}</h1></button>
      </div>
    );
  }

}

function printHW1() {
  return (
    <div className = "printHW1">
      <HW1 />
    </div>
  );
}

export default printHW1;