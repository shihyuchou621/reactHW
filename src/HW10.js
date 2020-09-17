import React, { Component } from "react";

import { HW10Input } from './HW10Input';

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
        <HW10Input
          dollar={dollar}
          money={money}
          name="ntd"
          rate={30}
          onChange={handleChange}
        />
        <HW10Input
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
