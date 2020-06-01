import React, { Component } from 'react';

const DEFAULT_YEAR = 2021;
const SECOND = 1000;
const MINUTE = SECOND * 60; 
const HOUR = MINUTE * 60; 
const DAY = HOUR * 24;

const getMS = () => 
  +new Date(`${DEFAULT_YEAR}/01/01`) - +new Date();


const getCountDown = ms => {
  return `
      ${~~(ms/DAY)}天
      ${~~(ms/HOUR) % 24}時
      ${~~(ms/MINUTE) % 60}分
      ${~~(ms/SECOND) % 60}秒
    `;
}

export default class HW9 extends Component {
  constructor() {
    super();
    this.state = {
      ms: getMS(),
    }
  }  

  componentDidMount() {
    setInterval(() => {
      this.setState({
        ms: getMS(),
      })
    }, 1000);
    }
    
  render() {
    const {
      state: { ms },
    } = this;

    return (
    <div>
      離2021跨年還有: {getCountDown(ms)}
    </div>
    );
  }
}

