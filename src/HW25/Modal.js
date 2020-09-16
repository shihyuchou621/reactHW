import cx from 'classnames';

import React, { Component } from 'react'

export default class Modal extends Component {   
  render() {
    const { 
      header,
      position,
      isAnimation,
    } = this.props;

    return (
      <div className="modalBg">
        <div className={cx("allModal", {
          myModal: position === "center",
          myTop: position === "top",
          myAnimation: isAnimation,
          myAnimation1: isAnimation,
        })}>
          {header &&
          <h2>{header}</h2>
          }
          <div>{this.props.children}</div>
          <button 
            className="btn btn-primary btn-block"
            onClick={this.props.onClose}
          >
            關閉
          </button>
        </div>
      </div>
    )
  }
}