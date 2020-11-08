import React from 'react';
import style from './style.module.css';
export default function ColorPicker(props) {

  const {
    name,
    color,
    value,
    onChange,
  } = props;

  return (
    <div className={style.colorPicker}>
      <div className={style.colorName}>{color}</div>
      <div className={style.colorRange}>
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
