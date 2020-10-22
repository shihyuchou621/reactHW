export const INCREMENT = 'INCREMENT'; // 動作常數
export const DECREMENT = 'DECREMENT';

export function increment() {
  return {
    type: INCREMENT
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}