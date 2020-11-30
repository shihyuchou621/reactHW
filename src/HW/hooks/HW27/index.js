import React from 'react';

import Carousel from './Carousel';

import style from './style.module.css';

export default function Index() {
  // component的children傳到子層會變成陣列形式，一個標籤一個項目
  return (
    <div className="container">
      <h2>輪播器</h2>
      <Carousel
        time={1500}
        showDots={true}
      >
        {/* css in js
          <div style={{height: '100%'}}>1</div>
        */}
        <div className={style.content}>1</div>
        <div className={style.content}>2</div>
        <div className={style.content}>3</div>
      </Carousel>
    </div>
  );
}
