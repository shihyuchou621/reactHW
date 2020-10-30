import React from 'react';
import { createStore } from 'redux';

// ↓reducer，儲存庫的雛型
function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1;
  case 'DECREMENT':
    return state - 1;
  default:
    return state;
  }
}

const store = createStore(counter); // 儲存庫
console.log(store.getState());

store.dispatch({ type: 'INCREMENT' }); // action
console.log(store.getState());
















export default function redux() {
  return (
    <div>
      redux
    </div>
  );
}
