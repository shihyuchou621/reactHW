export const INCREMENT = 'INCREMENT'; // 動作常數
export const DECREMENT = 'DECREMENT';

export function increment() {
  // 回傳事件物件
  return {
    type: INCREMENT
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}