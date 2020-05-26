import React from "react";

class HW2 extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      result: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    /** 正確做法應該是先把 result 取出來
     * 而且要特別注意，陣列的複製要使用  Array.from
     * 如果使用 b = a 這種作法，兩個陣列會指向同個內容
    */
    const result = Array.from(this.state.result);
    result.unshift(this.state.counter + 1)

    this.setState( {
      counter: this.state.counter + 1,
      result: result,
    } );
    /**
     * 最後是這邊，這邊有一個很嚴重的錯誤
     * 就是如果你要更新任何 state 變數，請透過 setState
     * 但你 result 的寫法就是不經過 setState 去改變 result 這樣會出現「非預期的結果」
     */
    
  }

  render() {
    return (
      <div>fdsfdfd
        <button onClick={this.handleClick}><h1>submit~~~~~fd</h1></button>
        {/* 首先，你的縮排不正確 */}
        {/* 再來，不要叫 a 這種變數，不知道是啥意思 */}
        {/* 第三，加 key */}
        <ul>{this.state.result.map(value =>
          <li key={value}>{value}</li>)}
        </ul>
      </div>
    );
  }
}

function printHW2() {
  return (
    <div className = "printHW2">
      <HW2 />
    </div>
  );
}

export default printHW2;