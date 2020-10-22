import React, { Component } from "react";

class HW6 extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      result: [],
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }

  handleEnter = (e) => {
    e.preventDefault();

    let { result, inputValue } = this.state;
    result = [inputValue, ...result];

    // result.unshift(this.state.inputValue);

    this.setState({
      result,
      inputValue: ""
    });
  }

  handleClick = (index) => {
    // const result = Array.from(this.state.result);
    // result.splice(index,1);

    const { result: r } = this.state;
    const result = [...r.slice(0, index), ...r.slice(index + 1)];
    this.setState({ result });
  }

  // function add(x , y) {
  //   return x + y;
  // }

  // add(1, 2)

  // const add1 = add.bind(this, 1);
  // add1(2); // ==> 3


  render() {
    const {
      handleEnter,
      handleChange,
      handleClick,
      state: {inputValue, result}
    } = this;

    return (
      <div>
        <form onSubmit={handleEnter}>
          <input name="inputValue" value={inputValue} onChange={handleChange} />
        </form>
        <ul>
          {result.map((value, index) =>
            <li key={index}>
              {value}
              <button onClick={handleClick.bind(this, index)}>remove</button>
            </li>)
          }
        </ul>
      </div>
    );
  }
}

export default class printHW6 extends Component {
  render() {
    return (
      <div><HW6 /></div>
    );
  }
}