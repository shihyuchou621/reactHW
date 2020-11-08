import React, { useState, useEffect } from 'react';
import style from './style.module.css';

export default function Gophers (props) {
  const [isG, setIsG] = useState(Boolean(Math.round(Math.random())));


  const handleClick = () => {
    props.setScore(isG ? 1 : -1);
    setIsG(false);
  };

  useEffect(() => {
    let timer;

    const tick = () => {
      setIsG(isG => !isG);
      timer = setTimeout(() => {
        tick();
      } , ~~(Math.random() * 4000) + 2000);
    };
    tick();
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`${style.Gophers} ${isG ? style.pink : ''}`}
      onClick={handleClick}
    >
      {isG ? 'G' : '-'}
    </div>
  );
}
