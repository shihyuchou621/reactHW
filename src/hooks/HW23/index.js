import cx from 'classnames';

import React, { useState } from 'react';

import './style.css';

export default function Index() {
  const [isDay, setIsDay] = useState(true);

  const handleClick = () => {
    setIsDay(!isDay);
  };

  return (
    <>
      {/* <div className={`bg ${isDay ? "day" : "night"}`}>  */}
      <div className={cx("bg", {
        day: isDay,
        night: !isDay,
      })}>
        <div>
          <img
            className={cx("planet sun", {
              show: isDay,
              hide: !isDay,
            })}
            src="https://img.icons8.com/cotton/256/000000/sun--v1.png"
            alt="day"
          />
        </div>
        <div>
          <img
            className={cx("planet moon", {
              show: !isDay,
              hide: isDay,
            })}
            src="https://img.icons8.com/cotton/256/000000/moon-satellite.png"
            alt="night"
          />
        </div>
      </div>
      <div className="buttonArea">
        <button className="button btn btn-primary" onClick={handleClick}>
              切換成 {!!isDay ? "晚上" : "白天"}
        </button>
      </div>
    </>
  );
}
