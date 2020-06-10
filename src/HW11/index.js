import React, { Component } from "react";

import ColorPicker from "./ColorPicker";

import "./style.css";

const colorList = [
  'red',
  'green',
  'blue'
];

export default class HW11 extends Component {
  constructor() {
    super();
    this.state = {
      red: 128,
      green: 128,
      blue: 128,
    };
  }

  handleChange = (color, { target }) => {
    this.setState({
      [color]: target.value,
    });
  };

  render() {
    const {
      state: { red, green, blue },
      handleChange,
    } = this;

    return (
      <div>
        <div>
          <div
            className="box"
            style={{
              backgroundColor: `rgb(${red}, ${green}, ${blue})`,
            }}
          />
        </div>

        {colorList.map(color =>
          <ColorPicker
            key={color}

            {...{
              color,
              value: this.state[color],
              onChange: handleChange.bind(this, color)
            }}

            // color={color}
            // value={this.state[color]}
            // onChange={handleChange.bind(this, color)}
          />
        )}
      </div>
    );
  }
}
