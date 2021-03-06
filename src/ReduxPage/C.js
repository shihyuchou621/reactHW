import React from 'react';
import { connect } from 'react-redux';
import {
  increment,
  decrement,
} from './actions';

function C(props) {

  /** plus or minus */
  // const onClick = (act) => {
  //   props[act]();

  //   props.plus();
  // };

  return (
    <div>
      C
      num: {props.num}
      <button onClick={props.plus}>+1</button>
      <button onClick={props.minus}>-1</button>
      {/* <button onClick={onClick.bind(this, 'plus')}>+1</button>
      <button onClick={onClick.bind(this, 'minus')}>-1</button> */}
    </div>
  );
}

// 把state傳給props
const mapStateToProps = (state) => {
  return {
    num: state
  };
};

// 把事件傳給props
const mapDispatchToProps = (dispatch) => {
  return {
    plus: () => dispatch(increment()),
    minus: () => dispatch(decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(C);
// C：要傳過去的Component

// aaa(); // ==> return result?


// function aaa(a) {
//   return function bbb() {
//     return a + 1;
//   };
// }