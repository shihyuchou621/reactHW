import cx from 'classnames' ;

import React from 'react';

import style from './style.module.css';

export default ({ at, text, children }) => (

  <span className="wrapper">
    {children}
    <div
      className={cx(style.tooltips, [style.at])}
    >{text}</div>
  </span>
);
// className={cx("tooltip", {at})}