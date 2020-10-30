import React, { useState, useEffect } from 'react';
import './style.css';

export default function Gophers (props) {
  const [isG, setIsG] = useState(Boolean(Math.round(Math.random())));

  let timer;

  const tick = () => {
    setIsG(isG => !isG);
    timer = setTimeout(() => {
      tick();
    } , ~~(Math.random() * 4000) + 2000);
  };

  const handleClick = () => {
    props.setScore(isG ? 1 : -1);
    setIsG(false);
  };

  useEffect(() => {
    tick();
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`Gophers ${isG ? 'pink': ''}`}
      onClick={handleClick}
    >
      {isG ? 'G' : '-'}
    </div>
  );
}
