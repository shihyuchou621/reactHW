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
    <div className="container">
      <h2>計算BMI</h2>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">身高</span>
        </div>
        <input className="form-control" placeholder="170" data-testid="cm" name="cm" value={data.cm} onChange={handleChange} />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">體重</span>
        </div>
        <input className="form-control" placeholder="60" data-testid="kg" name="kg" value={data.kg} onChange={handleChange} />
      </div>
      <button className="btn btn-secondary btn-lg" onClick={handleClick}>計算!</button>
      <h2>BMI: {data.bmi} </h2>
    </div>
  );
}

