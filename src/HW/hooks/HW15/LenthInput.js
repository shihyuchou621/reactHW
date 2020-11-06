import React from 'react';

export default function LenthInput(props) {
  const {
    name,
    value,
    onChange,
  } = props;

  return (
    <div className="input-group mb-3">
      <input
        data-testid="LenthInput"
        name={name}
        value={value}
        type="number"
        className="form-control"
        onChange={onChange}
      />
      <div className="input-group-append">
        <span
          className="input-group-text"
          id="basic-addon2"
        >{name}</span>
      </div>
    </div>
  );
}
