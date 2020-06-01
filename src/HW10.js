import React, { Component } from "react";

import DollarInput from './HW10Input';

export default class HW10 extends Component {
  constructor() {
    super();
    this.state = {
      money: 0,
      dollar: 'ntd',
    }
  }
  
  handleChange = ({ target }) => {
    this.setState({
      money: target.value,
      dollar: target.name,
    })
  };

  render() {
    const {
      handleChange,
      state: {money, dollar},
    } = this;

    // const ntd = dollar === "ntd" ? money : money * 30;
    // const usd = dollar === "usd" ? money : money / 30;

    return (
      <>
        <DollarInput
          dollar={dollar}
          money={money}
          name="ntd"
          rate={30}
          onChange={handleChange}
        />
        <DollarInput
          dollar={dollar}
          money={money}
          name="usd"
          rate={1/30}
          onChange={handleChange}
        />
      </>
    );
  }
}
