import React from 'react';

export function HW10Input(props) {
  const {
    name,
    rate,
    money,
    dollar,
    onChange,
  } = props;

  const value = dollar === name ? money: money * rate;

  return (
    <div>
      <input
        data-testid="HW10Input"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
