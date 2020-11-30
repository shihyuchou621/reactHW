import React, { createRef, useState } from 'react';

const DOM = createRef();

const getInitState = () => {
  return {
    min: 1,
    max: 1000,
    answer: ~~(Math.random() * 998) + 2,
    correct: 0,
  };
};

export default function Index() {
  const [
    {min, max, answer, correct},
    setState,
  ] = useState(getInitState());

  const handleEnter = (e) => {
    e.preventDefault();
    // ↓取得<form>裡面所有的資料，包含<input>等等
    const formData = new FormData(e.target);
    // ↓用name取得，相當於表單的欄位名稱
    const value = parseInt(formData.get('guess'));
    const field = answer > value ? 'min':
      answer < value ? 'max':
        'correct';

    setState(state => ({
      ...state,
      [field]: value
    }));
    DOM.current.value = "";

  };

  const handleClick = () => {
    setState(getInitState());
  };

  return (
    <div className="container">
      <h2>終極密碼</h2>
      <h3 data-testid="range">
        現在範圍: {min} ~ {max}
      </h3>
      <form
        data-testid="form"
        className="input-group mb-3"
        onSubmit={handleEnter}
      >
        <input
          data-testid="input"
          name="guess"
          disabled={false}
          ref={DOM}
        />
      </form>
      <h2>
        {!!correct &&
            <div data-testid="answer">
              答對了！答案就是{answer}
              <button onClick={handleClick}>再來一局</button>
            </div>
        }
      </h2>
    </div>
  );
}
