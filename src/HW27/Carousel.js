import cx from 'classnames';
import React, { Component } from 'react'

import './Carousel.css';

export default class Carousel extends Component {
  //constructor要使用props一定要用下面這種寫法
  constructor(props) {
    super();
    this.state = {
      whichShow: 0,
      isMove: false,
      itemList: props.children,
    }
  }

  cycle = () => {
    const { time } = this.props;
    const { itemList, whichShow } = this.state;

    setInterval(() => {

      this.setState({
        isMove: true,
        whichShow: ( whichShow + 1 ) % itemList.length,
      })

      setTimeout(() => {
        this.setState({
          itemList: [
            ...itemList.slice(1),
            ...itemList.slice(0,1)
          ],
          isMove: false,
        })
      }, time / 3);
    }, time);
    
  }

  componentDidMount() {
    this.cycle();
  }
  
  render() {
    const {itemList, isMove, whichShow} = this.state;
    return (
      <div className="wrapper">
        {itemList.map((item, index) =>
          <div key={index} className={cx("item ", {
            animationHide: index === 0 && isMove,
            animationShow: index === 1 && isMove})}>
            {item}
          </div>
        )}
        {this.props.showDots &&
          <div className="dotsWrapper">
            {itemList.map((item, index) => 
              <div key={index} className={cx("dots", {
                dotShow: index === whichShow,
              })} />
            )}
          </div>
        }
      </div>
    )
  }
}
