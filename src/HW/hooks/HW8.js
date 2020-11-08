import React, { useState } from 'react';

export default function Sumofbuttons() {

  const [ sum, setSum ] = useState(0);

  const handleClick = n => {
    setSum(sum + n);
  };

  return (
    <>
      <div>
        {[...Array(9 + 1).keys()].slice(1).map((n) =>
          <button className="btn btn-primary" onClick={() => handleClick(n)}>
            {n}
          </button>
        )}
      </div>
      <h1>{sum}</h1>
    </>
  );
}