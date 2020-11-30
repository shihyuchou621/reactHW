import React, { useState, createRef } from 'react';

const DOM = createRef();

export default function TodoList() {
  const [ result, setResult ] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    const input = DOM.current.value;
    setResult([input, ...result]);
    DOM.current.value = '';
  };

  const handleClick = index => {
    setResult([...result.slice(0, index), ...result.slice(index + 1)]);
  };

  return (
    <div className="container">
      <h2>列表新增刪除功能</h2>
      <form className="input-group mb-3" onSubmit={handleSubmit}>
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">todo</span>
        </div>
        <input className="form-control" data-testid="input" ref={DOM} />
      </form>
      <div className="list-group">{result.map((todo, index) =>
        <button
          className="list-group-item"
          key={todo}
          data-testid={`button${index}`}
          onClick={handleClick.bind(this, index)}
        >
          {todo}
        </button>)}
      </div>

    </div>
  );
}

