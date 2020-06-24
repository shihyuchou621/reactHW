import React, { Component } from 'react'

import './style.css';

import LenthInput from './LenthInput';

const unitList = [
  {unit: 'mm', rate: 1},
  {unit: 'cm', rate: 10},
  {unit: 'm',  rate: 1000},
  {unit: 'km', rate: 1000000},
];

const getValue = (unit, item, lenth, denoRate) => {
  return unit === item.unit ?
        lenth:
        lenth * denoRate / item.rate;
}

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      lenth: 0,
      unit: 'mm',
      denoRate: 1,
    }
  }

  handleChange = (name, rate, { target }) => {
    this.setState({
      unit: name,
      denoRate: rate,
      lenth: target.value,
    })

    console.log(this.state.denoRate);
    
  };

  render() {
    const {
      state: {
        unit,
        lenth,
        denoRate,
      },
    } = this;

    return (
      <div className="container HW15">
        <div>
          {unitList.map(item =>
            <LenthInput
              key={item.unit}
              name={item.unit}
              value={getValue(unit, item, lenth, denoRate)}
              onChange={this.handleChange.bind(this, item.unit, item.rate)}
            />
          )}
        </div>
      </div>
    );
  }
}

//運算式太複雜 or 必須在下一層才能運算