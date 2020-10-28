import React, { useState, useEffect } from 'react';

export const getRandom = (max, min = 0) => {
  return ~~(Math.random() * (max - min + 1)) + min;
};

export default function Master() {

  const [num, setNum] = useState(getRandom(9));

  let timeout;

  const tick = () => {
    setNum(getRandom(9));
    timeout = setTimeout(() => {
      tick();
    }, getRandom(1000, 500));
  };

  useEffect(() => {
    tick();
    return () => {
      clearTimeout(timeout);
    };
  }, []
  );

  return (
    <div data-testid="num">
      {num}
    </div>
  );
}
