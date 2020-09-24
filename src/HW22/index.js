import React, { Component } from 'react';

import './style.css';

import Product from './Product';

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      productList:  [
        {id: 1, name: '橘子',   price: 20, amount: 0},
        {id: 2, name: '蓮霧',   price: 30, amount: 0},
        {id: 3, name: '哈蜜瓜', price: 40, amount: 0},
        {id: 4, name: '蘋果',   price: 50, amount: 0},
        {id: 5, name: '葡萄柚', price: 15, amount: 0},
      ]
    };
  }

  addToCart = (index, value) => {
    const { productList } = this.state;
    productList[index].amount += value;

    this.setState({
      productList
    });
  }

  minusOne = id => {
    const { productList } = this.state;
    const productIndex = productList.findIndex(product => product.id === id);
    productList[productIndex].amount -= 1;

    this.setState({
      productList
    });
  }

  clearAll = id => {
    const { productList } = this.state;
    const productIndex = productList.findIndex(product => product.id === id); // 取得index
    productList[productIndex].amount = 0;

    this.setState({
      productList
    });
  }

  render() {
    const {productList} = this.state;

    const total = productList
      .map(({price, amount}) => (price * amount))
      .reduce((a,b) => a+b);
      // productList.map((product) => (product.price * product.amount)).reduce((a,b) => a+b)

    return (
      <div className="container">
        <div className="productArea">
          {productList.map((product, index) =>
            <Product
              key={index}
              name={product.name}
              price={product.price}
              index={index}
              onSubmit={this.addToCart}
            />
          )}
        </div>
        <div className="cartArea">
          {productList
            .filter(product => product.amount > 0)
            .map((product) =>
              <div
                data-testid={`subtotal${product.name}`}
                className="productInCart"
                key={product.id}
              >
                {product.name} x {product.amount} = ${product.price * product.amount}
                <button
                  data-testid={`${product.name}clear`}
                  className="buttonInCart btn btn-danger btn-sm"
                  onClick={this.clearAll.bind(this, product.id)}
                >clear</button>
                <button
                  data-testid={`${product.name}-1`}
                  className="buttonInCart btn btn-warning btn-sm"
                  onClick={this.minusOne.bind(this, product.id)}
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
}
