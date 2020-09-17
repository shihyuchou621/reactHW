import React, { Component } from "react";

class HW5 extends Component {
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

    const result = Array.from(this.state.result);
    result.unshift(this.state.inputValue); // OK

    this.setState({
      result: result,
      inputValue: ""
    });
  }

  render() {
    const {
      handleEnter,
      handleChange,
      state: {inputValue, result}
    } = this;

    return (
      <div>
        <form onSubmit={handleEnter}>
          <input name="inputValue" value={inputValue} onChange={handleChange} />
        </form>
        <ul>{result.map(value =>
          <li key={value}>{value}</li>)}
        </ul>
      </div>
    );
  }
}

export default class printHW5 extends Component {
  render() {
    return (
      <div><HW5 /></div>
    );
  }
}