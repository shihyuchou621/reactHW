import React, { useState } from 'react';

const getRandom = () => {
  return ~~(Math.random() * 10);
};

let random = getRandom();

export default function Master() {

  const [ans, setAns] = useState({
    correct: 0,
    wrong: 0,
  });

  const handleChange = ({ target: { value } }) => {
    const attr = +value === random ? 'correct': 'wrong';

    random = getRandom();
    setAns({
      ...ans,
      [attr]: ans[attr] + 1,
    });
  };

  return (
    <div className="container">
      <h2>打數字遊戲</h2>
      <h3>{random}</h3>
      <input
        data-testid="input"
        type="text"
        value=""
        onChange={handleChange}
      />
      <div
        data-testid="wrong"
      >wrong: {ans.wrong}</div>
      <div
        data-testid="correct"
      >correct: {ans.correct}</div>
    </div>
  );
}
