import React, { useState, createRef } from 'react';

const DOM = createRef();

export default function TodoList() {
  const [ result, setResult ] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = DOM.current.value;
    setResult([input, ...result]);
    DOM.current.value = '';
  };

  return (
    <div className="container">
      <h2>輸入生成列表</h2>
      <form className="input-group mb-3" onSubmit={handleSubmit}>
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">todo</span>
        </div>
        <input className="form-control" data-testid='input' ref={DOM} />
      </form>
      <ul className="list-group">{result.map(todo =>
        <li className="list-group-item" key={todo}>{todo}</li>)}
      </ul>
    </div>
  );
}

