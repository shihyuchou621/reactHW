import React, { Component } from 'react';

import './style.css';

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      toDoList: [
        { id: Math.random(), content: '待辦事項1', done: false },
        { id: Math.random(), content: '待辦事項2', done: false },
        { id: Math.random(), content: '待辦事項3', done: true },
      ],
    };
  }

  handleEnter = (e) => {
    e.preventDefault();

    const toDoList = Array.from(this.state.toDoList);
    toDoList.unshift({id: Math.random(), content: this.state.inputValue, done: false });

    this.setState({
      toDoList: toDoList,
      inputValue: "",
    });
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }

  handleClick = (index) => {
    const { toDoList } = this.state;
    toDoList[index].done = !toDoList[index].done;

    this.setState({ toDoList });
  }

  render() {
    const {
      handleClick,
      handleEnter,
      handleChange,
      state: {inputValue, toDoList}
    } = this;

    return (
      <div className="container HW13">

        <form className="input-group mb-3" onSubmit={handleEnter}>
          <input
            className="form-control"
            name="inputValue"
            value={inputValue}
            placeholder="todo..."
            onChange={handleChange}
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" onClick={handleEnter}>Create!</button>
          </div>
        </form>

        <div className="list-group">
          {toDoList.map((item, index) =>
            <div
              className={
                "list-group-item "
                + (item.done ? "done" : "undone")}
              key={index}
              onClick={handleClick.bind(this, index)}
            >
              {item.content}
            </div> )}
        </div>
      </div>
    );
  }
}
