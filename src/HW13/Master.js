import cx from 'classnames';
import React, { Component } from 'react';

import './style.scss';

export default class Master extends Component {

  constructor() {
    super();
    this.state = {
      input: '',
      todoList: [
        { id: Math.random(), content: '待辦事項1', done: false },
        { id: Math.random(), content: '待辦事項2', done: false },
        { id: Math.random(), content: '待辦事項3', done: true },
      ]
    };
  }

  handleChange = e => {
    this.setState({ input: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      todoList: [
        { id: Math.random(), content: this.state.input, done: false },
        ...this.state.todoList,
      ],
      input: '',
    });

  }

  handleDone = todo => {
    const { todoList } = this.state;
    const doneIndex = todoList.findIndex(item => item.id === todo.id);
    todoList[doneIndex].done = !todo.done;
    this.setState({ todoList });
  }

  render() {
    const { input } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              value={input}
              className="form-control"
              onChange={this.handleChange}
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary">save</button>
            </div>
          </div>
        </form>
        <ul className="list-group">
          {this.state.todoList.map(todo =>
            <li
              key={todo.id}
              onClick={this.handleDone.bind(this, todo)}
              className={cx("list-group-item", { done: todo.done })}
            >
              {todo.content}
            </li>
          )}
        </ul>
      </div>
    );
  }
}
