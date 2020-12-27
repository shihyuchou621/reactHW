import React from 'react';
import style from './Item.module.css';

export default function Item({ value, a , b}) {
  return (
    <>
      <span className={style.value}>{value}</span>
      &nbsp;&nbsp;
      <span className={style.a}>{a}A</span>
      <span className={style.b}>{b}B</span>
    </>
  );
}
