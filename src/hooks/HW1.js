import React, { useState } from 'react';

export function Counter() {
  const [ count, setCount ] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>
        counter: {count}
      </button>
    </div>
  );
}

