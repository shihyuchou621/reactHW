import React, { useState, useEffect } from 'react';

const DEFAULT_YEAR = new Date().getFullYear() + 1;
const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export const getMs = () =>
  +new Date(`${DEFAULT_YEAR}/01/01`) - (+new Date());

export const getCountDown = ms => {
  return `
      ${~~(ms/DAY)}天
      ${~~(ms/HOUR) % 24}時
      ${~~(ms/MINUTE) % 60}分
      ${~~(ms/SECOND) % 60}秒
    `;
};

export function NewYear() {
  const [ ms, setMs] = useState(getMs());

  useEffect(() => {
    const interval = setInterval(() => {
      setMs(getMs());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  // 以此題來說
  // (1)沒有第二個參數：會不斷執行return跟interval，因為有setMs的時候就會整個重跑
  // (2)第二個參數是空陣列：useEffect只會執行一次，因為陣列內容永不改變
  // (3)第二個參數是有內容的陣列：內容改變的時候才會執行return跟intreval

  return (
    <div>
      離2021跨年還有: {getCountDown(ms)}
    </div>
  );
}