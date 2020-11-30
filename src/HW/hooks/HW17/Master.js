import React, { useState, useEffect } from 'react';

export const getRandom = (max, min = 0) => {
  return ~~(Math.random() * (max - min + 1)) + min;
};

export default function Master() {

  const [num, setNum] = useState(getRandom(9));


  useEffect(() => {
    let timeout;

    const tick = () => {
      setNum(getRandom(9));
      timeout = setTimeout(() => {
        tick();
      }, getRandom(1000, 500));
    };
    tick();
    return () => {
      clearTimeout(timeout);
    };
  }, []
  );

  return (
    <div className="container">
      <h2>生成隨機數字</h2>
      <h3 data-testid="num">{num}</h3>
    </div>
  );
}
