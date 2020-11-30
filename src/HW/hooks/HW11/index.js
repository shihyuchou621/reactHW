import React, { useState }  from 'react';

import ColorPicker from "./ColorPicker";

import style from "./style.module.css";

const colorList = [
  'red',
  'green',
  'blue'
];

export default function HW11() {
  const [ colors, setColor ] = useState({
    red: 128,
    green: 128,
    blue: 128,
  });

  const handleChange = ({ target }) => {
    setColor({
      ...colors,
      [target.name]: +target.value,
    });
  };

  const { red, green, blue } = colors;

  return (
    <div className="container">
      <h2 className={style.title}>調色盤</h2>
      <div>
        <div
          className={style.box}
          style={{
            backgroundColor: `rgb(${red}, ${green}, ${blue})`,
            border: "1px solid gray"
          }}
        />
      </div>

      {colorList.map((color) =>
        <ColorPicker
          key={color}
          name={color}
          // color={color}
          // value={colors[color]}
          // onChange={handleChange}
          {...{
            color,
            value: colors[color],
            onChange: handleChange
          }}
        />
      )}
    </div>
  );
}
