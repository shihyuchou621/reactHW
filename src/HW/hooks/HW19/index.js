import React, { useState } from 'react';
import './style.css';
import Gophers from './components/Gophers';

export default function Index() {
  const [sumScore, setSumScore] = useState(0);

  const setScore = ( score ) => {
    setSumScore(sumScore + score);
  };

  return (
    <div className="HW19">
      <h1 data-testid="score" className="score">
        {sumScore}
      </h1>
      <div className="wrapper">
        {[...Array(9).keys()].map(index =>
          <Gophers key={index} setScore={setScore} />
        )}
      </div>
    </div>
  );
}
