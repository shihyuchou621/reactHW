import React, { createRef }  from 'react';

import style from './style.module.css';

export default function Product(props) {
  const DOM = createRef();
  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit(+DOM.current.value + props.amount);
    DOM.current.value = "";
  };

  const {
    name,
    price,
  } = props;

  return (
    <div className={style.product}>
      <div>{name}</div>
      <div>${price}</div>
      <form
        data-testid="form"
        name={name}
        onSubmit={handleSubmit}
      >
        <input
          data-testid="input"
          className={style.input}
          name={name}
          ref={DOM}
          type="number"
          placeholder="數量"
          min="0"
          max="99"
        />
        <button
          className="btn btn-outline-primary btn-sm"
        >加入購物車</button>
      </form>
    </div>
  );
}
