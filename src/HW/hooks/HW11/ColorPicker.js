import React from 'react';

export default function ColorPicker(props) {

  const {
    name,
    color,
    value,
    onChange,
  } = props;

  return (
    <div className="colorPicker">
      <div className="colorName">{color}</div>
      <div className="colorRange">
        <input
          data-testid="ColorPicker"
          min="0"
          max="255"
          type="range" // 拉桿
          name={name}
          value={value}
          onChange={onChange} />
      </div>
    </div>
  );
}
