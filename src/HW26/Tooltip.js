import cx from 'classnames' ;

import React, { Component } from 'react'

export default class Tooltip extends Component {
  render() {
    const { at, text } = this.props;
    console.log('enter');
    return (
      <span className="wrapper">
        {this.props.children}
        <div
          className={cx("tooltips", at)}
        >{text}</div>
      </span>
    )
  }
}
// className={cx("tooltip", {at})}