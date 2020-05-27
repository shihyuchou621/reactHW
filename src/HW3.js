import React, { Component } from "react";

class HW3 extends Component {
  constructor() {
    super();
    this.state = {
      counter: 1,
      result: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState( {
      counter: this.state.counter + 1,
      result: this.state.result + this.state.counter,
    } )
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}><h1>add it</h1></button>
        <h1>{this.state.result}</h1>
      </div>
    );
  }
}

//function component
/*export default function printHW3() {
  return <HW3 />; 
}*/

//class component
export default class printHW3 extends Component {
  render() {
    return(
      <div>
        <HW3 />
      </div>
    ); 
  }
}





