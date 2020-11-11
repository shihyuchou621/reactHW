import cx from 'classnames';
import React, { useState } from 'react';

import style from './style.module.scss';

export default function Master() {

  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState([
    { id: Math.random(), content: '待辦事項1', done: false },
    { id: Math.random(), content: '待辦事項2', done: false },
    { id: Math.random(), content: '待辦事項3', done: true },
  ]);

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if(!input.trim()) {return;}
    setTodoList([
      { id: Math.random(), content: input, done: false },
      ...todoList,
    ],
    );
    setInput('');
  };

  const handleDone = todo => {
    const newTodoList = [...todoList];
    const doneIndex = newTodoList.findIndex(item => item.id === todo.id);
    newTodoList[doneIndex].done = !todo.done;
    setTodoList(newTodoList); // setXXX必須給全新的東西，直接給記憶體位置相同的原值會有問題
  };

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        data-testid="form"
      >
        <div className="input-group mb-3">
          <input
            data-testid="input"
            type="text"
            value={input}
            className="form-control"
            onChange={handleChange}
          />
          <div className="input-group-append">
            <button
              data-testid="button"
              className="btn btn-outline-secondary"
            >
                save
            </button>
          </div>
        </div>
      </form>
      <ul className="list-group">
        {todoList.map(todo =>
          <li
            key={todo.id}
            onClick={() => handleDone(todo)}
            className={cx("list-group-item", { [style.done]: todo.done })}
          >
            {todo.content}
          </li>
        )}
      </ul>
    </div>
  );
}
