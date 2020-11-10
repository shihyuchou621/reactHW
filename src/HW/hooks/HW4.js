import React, { useState } from 'react';

// const cmDOM = createRef();
// const kgDOM = createRef();

export default function Counter() {

  const [ data, setData ] = useState({
    cm: "",
    kg: "",
    bmi: "",
  });

  const handleChange = ({ target }) => {
    setData({
      ...data,
      [target.name]: target.value,
    });
  };

  const handleClick = () => {
    setData({
      ...data,
      bmi: Math.round(data.kg / data.cm / data.cm * 1000000) / 100,
    });
  };

  return (
    <>
      <div>身高: <input data-testid="cm" name="cm" value={data.cm} onChange={handleChange} /></div>
      <div>體重: <input data-testid="kg" name="kg" value={data.kg} onChange={handleChange} /></div>
      <button onClick={handleClick}>計算!</button>
      <div>BMI: {data.bmi} </div>
    </>
  );
}

