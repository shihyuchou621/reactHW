import React from 'react';

export default function HW10Input(props) {
  const {
    name,
    rate,
    money,
    dollar,
    onChange,
  } = props;

  const value = dollar === name ? money: money * rate;

  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">{name}</span>
      </div>
      <input
        className="form-control"
        data-testid="HW10Input"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
