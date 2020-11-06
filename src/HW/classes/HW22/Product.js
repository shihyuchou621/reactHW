import React, { Component } from 'react';

import './style.css';

export default class Product extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.props.index, +this.productInput.value);
    this.productInput.value = "";
  }

  render() {
    const {
      name,
      price,
    } = this.props;

    return (
      <div className="product">
        <div>{name}</div>
        <div>${price}</div>
        <form
          data-testid="form"
          name={name}
          onSubmit={this.handleSubmit}
        >
          <input
            data-testid="Product"
            className="input"
            name={name}
            ref={element => this.productInput = element}
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
}
