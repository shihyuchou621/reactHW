import React, { useState } from 'react';

export function Counter() {
  const [ count, setCount ] = useState(0);
  const [ result, setResult ] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setResult(result + count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>
        add it
      </button>
      <div>
        {result}
      </div>
    </div>
  );
}
