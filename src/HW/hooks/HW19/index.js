import React, { useState } from 'react';

import style from './style.module.css';

import Gophers from './components/Gophers';

export default function Index() {
  const [sumScore, setSumScore] = useState(0);

  const setScore = ( score ) => {
    setSumScore(sumScore + score);
  };

  return (
    <div className={style.HW19}>
      <h2 className={style.score}>打地鼠</h2>
      <h1 data-testid="score" className={style.score}>
        {sumScore}
      </h1>
      <div className={style.wrapper}>
        {[...Array(9).keys()].map(index =>
          <Gophers key={index} setScore={setScore} />
        )}
      </div>
    </div>
  );
}
