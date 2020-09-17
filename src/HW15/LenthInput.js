import React, { Component } from 'react';

export default class LenthInput extends Component {
  render() {
    const {
      name,
      value,
      onChange,
    } = this.props;

    // const value = lenth * (
    //   unit === "mm" ? 1 :
    //     unit === "cm" ? 10 :
    //       unit === "m" ? 1000 :s
    //         1000000
    //   );


    return (
      <div className="input-group mb-3">
        <input
          value={value}
          type={Number}
          className="form-control"
          onChange={onChange}
        />
        <div className="input-group-append">
          <span className="input-group-text" id="basic-addon2">{name}</span>
        </div>
      </div>
    );
  }
}
