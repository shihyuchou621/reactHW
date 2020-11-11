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
    <div>
      <form onSubmit={handleSubmit}>
        todo: <input data-testid='input' ref={DOM} />
      </form>
      <ul>{result.map(todo =>
        <li key={todo}>{todo}</li>)}
      </ul>
    </div>
  );
}

