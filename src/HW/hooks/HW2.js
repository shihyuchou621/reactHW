import React, { useState } from 'react';


export default function Counter() {

  const [ count, setCount ] = useState(0);
  const [ result, setResult ] = useState([]);

  const handleClick = () => {
    setCount(count + 1);
    setResult([count + 1, ...result]);
  };

  return (
    <div className="container">
      <h2>生成列表</h2>
      <button className="btn btn-secondary btn-lg" onClick={handleClick}>
        submit
      </button>
      <ul className="list-group">{result.map(value =>
        <li className="list-group-item" key={value}>{value}</li>)}
      </ul>
    </div>
  );
}

