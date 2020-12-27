import cx from 'classnames';

import React from 'react';

import style from './style.module.css';

export default function Modal(props) {
  const {
    header,
    position,
    isAnimation,
    children,
    onClose,
    closeText,
    btnClass,
  } = props;

  return (
    <div className={style.modalBg}>
      <div className={cx(style.allModal, {
        [style.myModal]: position === "center",
        [style.myTop]: position === "top",
        [style.myAnimation]: isAnimation,
        [style.myAnimation1]: isAnimation,
      })}>
        {header &&
          <h2>{header}</h2>
        }
        <div data-testid="content">
          {children}
        </div>
        <button
          className={btnClass}
          onClick={onClose}
        >
          {closeText}
        </button>
      </div>
    </div>
  );
}
