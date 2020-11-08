import React, { useState } from 'react';

import style from './style.module.css';

import cx from 'classnames';

import Product from './Product';

export default function Index() {
  const [productList, setProductList] = useState([
    {id: 1, name: '橘子',   price: 20, amount: 0},
    {id: 2, name: '蓮霧',   price: 30, amount: 0},
    {id: 3, name: '哈蜜瓜', price: 40, amount: 0},
    {id: 4, name: '蘋果',   price: 50, amount: 0},
    {id: 5, name: '葡萄柚', price: 15, amount: 0},
  ]);

  // const getIndex = id =>
  //   productList.findIndex( ({id: pid}) => pid === id );

  const setCart = (id, value) => {
    const newProductList = [...productList];
    const index = newProductList.findIndex(product => product.id === id);
    newProductList[index].amount = value;
    setProductList(newProductList);
  };

  // const addToCart = (index, value) => {
  //   const newProductList = [...productList];
  //   newProductList[index].amount += value;
  //   setProductList(newProductList);
  // };

  // const minusOne = index => {
  //   const newProductList = [...productList];
  //   newProductList[index].amount -= 1;
  //   setProductList(newProductList);
  // };

  // const clearAll = index => {
  //   const newProductList = [...productList];
  //   newProductList[index].amount = 0;
  //   setProductList(newProductList);
  // };

  const total = productList
    .map(({price, amount}) => (price * amount))
    .reduce((a,b) => a+b);

  return (
    <div className={style.container}>
      <div className={style.productArea}>
        {productList.map((product, index) =>
          <Product
            key={index}
            name={product.name}
            price={product.price}
            amount={product.amount}
            index={index}
            onSubmit={setCart.bind(this, product.id)}
          />
        )}
      </div>
      <div className={style.cartArea}>
        {productList
          .filter(({amount}) => amount > 0)
          .map(({id, name , amount, ...product}, index) =>
            <div
              data-testid={`subtotal${name}`}
              className={style.productInCart}
              key={id}
            >
              <span className={style.subtotal}>{name} x {amount} = ${product.price * amount}</span>
              <button
                data-testid={`${name}clear`}
                className={cx(style.buttonInCart, " btn btn-danger btn-sm")}
                onClick={setCart.bind(this, id, 0)}
              >clear</button>
              <button
                data-testid={`${name}-1`}
                className={cx(style.buttonInCart, " btn btn-warning btn-sm")}
                onClick={setCart.bind(this, id, amount - 1)}
                // minusOne的第一個參數會變product.id，原本的e則變成第二個參數
              >-1</button>
            </div>
          )
        }
        {!!total&&
          <div>
            <div>===============</div>
            <div data-testid="total">總計 ${total}</div>
          </div>
        }
      </div>
    </div>
  );
}
