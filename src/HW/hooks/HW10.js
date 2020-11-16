import React, { useState } from 'react';

import HW10Input from './HW10Input';

export default function HW10() {
  const [ money, setMoney ] = useState(0);
  const [ dollar, setDollar] = useState('ntd');

  const handleChange = ({ target }) => {
    setMoney(target.value);
    setDollar(target.name);
  };

  return (
    <div>
      <HW10Input
        dollar={dollar}
        money={money}
        name="ntd"
        rate={30}
        onChange={handleChange}
      />
      <HW10Input
        dollar={dollar}
        money={money}
        name="usd"
        rate={1/30}
        onChange={handleChange}
      />
    </div>
  );
}