import React, { useState, createRef } from 'react';

const cmDOM = createRef();
const kgDOM = createRef();

export function bmiCounter() {
  const [ bmi, setBmi ] = useState("");

  const handleClick = () => {
    const cm = cmDOM.current.value;
    const kg = kgDOM.current.value;
    setBmi(Math.round(kg / cm / cm * 1000000)/100);
  };

  return (
    <>
      <div>身高: <input ref={cmDOM} /></div>
      <div>體重: <input ref={kgDOM} /></div>
      <button onClick={handleClick}>計算!</button>
      <div>BMI: {bmi} </div>
    </>
  );
}

