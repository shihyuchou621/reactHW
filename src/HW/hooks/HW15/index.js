import React, { useState } from 'react';

import style from './style.module.css';

import LenthInput from './LenthInput';

const unitList = [
  {unit: 'mm', rate: 1},
  {unit: 'cm', rate: 10},
  {unit: 'm',  rate: 1000},
  {unit: 'km', rate: 1000000},
];

const getValue = (unit, item, lenth, denoRate) => {
  return unit === item.unit ?
    lenth:
    lenth * denoRate / item.rate;
};

export default function Index() {

  const [lenth, setLenth] = useState(0);
  const [unit, setUnit] = useState('mm');
  const [denoRate, setDenoRate] = useState(1);


  const handleChange = (name, rate, { target }) => {
    setUnit(name);
    setDenoRate(rate);
    setLenth(target.value);
    // console.log(this.state.denoRate);
  };

  return (
    <div className={`container ${style.HW15}`}>
      <h2>長度轉換</h2>
      <div>
        {unitList.map(item =>
          <LenthInput
            key={item.unit}
            name={item.unit}
            value={getValue(unit, item, lenth, denoRate)}
            onChange={(e) => handleChange(item.unit, item.rate, e)}
          />
        )}
      </div>
    </div>
  );
}
