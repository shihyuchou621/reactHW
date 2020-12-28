import React, { useState } from 'react';


export default function Counter() {

  const [ count, setCount ] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="container">
      <h2>+1按鈕</h2>
      <button className="btn btn-secondary btn-lg" onClick={handleClick}>
        counter: {count}
      </button>
    </div>
  );
}

