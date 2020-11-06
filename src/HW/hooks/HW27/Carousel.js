import cx from 'classnames';
import React, { useState, useEffect } from 'react';

import style from './Carousel.module.css';

export default function Carousel(props) {

  const [isMove, setIsMove] = useState(false);
  const [whichShow, setWhichShow] = useState(0);
  const [itemList, setItemList] = useState(props.children);

  let timeout;

  const cycle = () => {
    const { time } = props;
    timeout = setInterval(() => {
      setIsMove(true);
      setWhichShow(whichShow => ( whichShow + 1 ) % itemList.length);

      setTimeout(() => {
        setItemList(itemList => [
          ...itemList.slice(1),
          ...itemList.slice(0,1)
        ]);
        setIsMove(false);
      }, time / 3);
    }, time);
  };

  useEffect(() => {
    cycle();
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={style.wrapper}>
      {itemList.map((item, index) =>
        <div key={index} className={cx(style.item, {
          [style.animationHide]: index === 0 && isMove,
          [style.animationShow]: index === 1 && isMove})}>
          {item}
        </div>
      )}
      {props.showDots &&
          <div className={style.dotsWrapper}>
            {[...itemList.keys()].map(index =>
              <div key={index} className={cx(style.dots, {
                [style.dotShow]: index === whichShow,
              })} />
            )}
          </div>
      }
    </div>
  );
}
