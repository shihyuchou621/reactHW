import React, { useState } from 'react';

export default function Counter() {
  const [ count, setCount ] = useState(0);
  const [ result, setResult ] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setResult(result + count + 1);
  };

  return (
    <div className="container">
      <h2>按鈕加總</h2>
      <button className="btn btn-secondary btn-lg" onClick={handleClick}>
        add it
      </button>
      <h1>
        {result}
      </h1>
    </div>
  );
}
