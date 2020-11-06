import React, { Component } from 'react';

export default class ColorPicker extends Component {
  render() {

    const {
      name,
      color,
      value,
      onChange,
    } = this.props;

    return (
      <div className="colorPicker">
        <div className="colorName">{color}</div>
        <div className="colorRange">
          <input
            data-testid="ColorPicker"
            min="0"
            max="255"
            type="range"
            name={name}
            value={value}
            onChange={onChange} />
        </div>
      </div>
    );
  }
}
