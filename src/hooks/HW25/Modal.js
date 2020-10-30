import cx from 'classnames';

import React from 'react';

export default function Modal(props) {
  const {
    header,
    position,
    isAnimation,
    children,
    onClose
  } = props;

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
        <div data-testid="content">
          {children}
        </div>
        <button
          className="btn btn-primary btn-block"
          onClick={onClose}
        >
            關閉
        </button>
      </div>
    </div>
  );
}
