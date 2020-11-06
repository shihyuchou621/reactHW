import React, { Component} from "react";

class HW4 extends Component {
  constructor() {
    super();
    this.state = {
      cm: "",
      kg: "",
      bmi: "",
    };
    // this.handleClick = this.handleClick.bind(this); 箭頭函式不需要bind
    // this.handleChangeCm = this.handleChangeCm.bind(this);
    // this.handleChangmKg = this.handleChangeKg.bind(this);
  }

  // handleChangeCm = (e) => {
  //   this.setState({
  //     cm: e.target.value,
  //   })
  // }

  // handleChangeKg = (e) => {
  //   this.setState({
  //     kg: e.target.value,
  //   })
  // }

  // ↓ 這邊可以簡化, 用 { } 來取 e 裡面的 targe
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  // ↓ 這個 e 沒用到，所以可以不用給 e
  handleClick = () => {
    this.setState({
      bmi: (this.state.kg / this.state.cm / this.state.cm * 10000).toFixed(2),
      // bmi: ~~(this.state.kg / this.state.cm / this.state.cm * 10000),
    });
  }

  render() {
    const {
      handleClick,
      handleChange,
      state: { cm, kg, bmi }
    } = this;

    return (
      <>
        <div>身高: <input name="cm" value={cm} onChange={handleChange} /></div>
        <div>體重: <input name="kg" value={kg} onChange={handleChange} /></div>
        <button onClick={handleClick}>計算!</button>
        <div>BMI: {bmi} </div>
      </>
    );
  }
}

export default class printHW4 extends Component {
  render() {
    return (
      <div><HW4 /></div>
    );
  }
}

