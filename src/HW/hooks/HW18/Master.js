import React, { useState, useEffect } from 'react';

import './style.scss';

// const t = +new Date();

export default function Master() {
  const [score, setScore] = useState(0);
  const [isQ, setIsQ] = useState(false);


  useEffect(() => {

    let timer;
    const tick = () => {
    // console.log(isQ); // first isQ
      timer = setTimeout(() => {
        setIsQ(isQ => !isQ); // setIsQ(!isQ) 原本的寫法會抓到最原始的isQ，所以每次抓都是false，而新寫法會抓到最新的isQ
        tick();
      }, ~~(Math.random() * 1500) + 500);
    };

    tick();
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleChange = ({ target: {value}}) => {
    // console.log(+new Date() - t, this.state.isQ);
    const isCorrect = isQ && value.toUpperCase() === 'Q';
    // console.log(`isQ: ${isQ}, value: ${value}, isCorrect: ${isCorrect}`);
    setScore(score + (isCorrect ? 1: -1));
    setIsQ(false);
  };

  // console.log(score);

  return (
    <div className="container">
      <h2>隨機閃爍字母</h2>
      <h3>{isQ ? 'Q': '-'}</h3>
      <div data-testid="score">
          score: {score}
      </div>
      <input
        data-testid="input"
        value=""
        type="text"
        onChange={handleChange}
      />
    </div>
  );
}