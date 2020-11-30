import {
  INCREMENT,
  DECREMENT,
} from './actions';

export default function counter(state = 0, action) {
  switch (action.type) {
  case INCREMENT:
    return state + 1;
  case DECREMENT:
    return state - 1;
  default:
    return state;
  }
}

// return的東西會成為下一次進來的state(狀態)