import cx from 'classnames' ;

import React from 'react';

export default Tooltip = ({ at, text, children }) => (
  <span className="wrapper">
    {children}
    <div
      className={cx("tooltips", at)}
    >{text}</div>
  </span>
);
// className={cx("tooltip", {at})}