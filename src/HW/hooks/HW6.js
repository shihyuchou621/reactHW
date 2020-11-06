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
    <div>
      <form onSubmit={handleSubmit}>
        todo: <input ref={DOM} />
      </form>
      <ul>{result.map((todo, index) =>
        <li key={todo}>
          {todo}
          <button onClick={handleClick.bind(this, index)}>
            remove
          </button>
        </li>)}
      </ul>

    </div>
  );
}

