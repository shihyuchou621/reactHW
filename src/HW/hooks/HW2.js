import React, { useState } from 'react';


export default function Counter() {

  const [ count, setCount ] = useState(0);
  const [ result, setResult ] = useState([]);

  const handleClick = () => {
    setCount(count + 1);
    setResult([count + 1, ...result]);
  };

  return (
    <div>
      <button onClick={handleClick}>
        submit
      </button>
      <ul>{result.map(value =>
        <li key={value}>{value}</li>)}
      </ul>
    </div>
  );
}

