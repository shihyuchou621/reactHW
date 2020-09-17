import React, { Component } from 'react'

/** props.name, rate, onChange */
export class HW10Input extends Component {
  render() {

    const {
      name,
      rate,
      money,
      dollar,
      onChange,
    } = this.props;

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
    )
  }
}
