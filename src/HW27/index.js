import React, { Component } from 'react';

import Carousel from './Carousel';

import './style.css';

export default class index extends Component {
  render() {
    // component的children傳到子層會變成陣列形式，一個標籤一個項目
    return (
      <div>
        <Carousel
          time={1500}
          showDots={true}
        >
          {/* css in js
          <div style={{height: '100%'}}>1</div>
        */}
          <div className="content">1</div>
          <div className="content">2</div>
          <div className="content">3</div>
        </Carousel>
      </div>
    );
  }
}
