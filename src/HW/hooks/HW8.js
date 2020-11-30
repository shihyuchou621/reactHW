import React, { useState } from 'react';

export default function Sumofbuttons() {

  const [ sum, setSum ] = useState(0);

  const handleClick = n => {
    setSum(sum + n);
  };

  return (
    <div className="container">
      <h2>不同按鈕加總</h2>
      <div>
        {[...Array(9 + 1).keys()].slice(1).map((n) =>
          <button key={n} className="btn btn-primary" onClick={() => handleClick(n)}>
            {n}
          </button>
        )}
      </div>
      <h2 data-testid="sum">{sum}</h2>
    </div>
  );
}