import React from 'react';
//import logo from './logo.svg';
//import './App.css';


//時鐘新寫法
/*function MyTimer() {

  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    setInterval(() => {
      setTime(new Date());
      }, 1000);
    }, []);

  return (
    <div>
      Now: {time.toLocaleString()}
    </div>
  );
}
export default MyTimer;*/

//var n = new Number(1);


//時鐘
class MyTime extends React.Component {
  constructor() {
    super();
    this.state = {
      value: new Date().toLocaleString()
    }
  }  

  componentDidMount() {
    setInterval(() => {
      this.setState({
        value: new Date().toLocaleString()
      })
    }, 1000);
    }
    
  render() {
    return (
    <div>Now: {this.state.value}</div>
    );
  }
}

function Timer() {
  return (
    <div className="Timer">
      <MyTime />
    </div>
  );
}

export default Timer;


//碼表
/*
class MyCounter extends React.Component {

  constructor() {
    super();
    this.state = {
      value: 0
    }
  }  

  componentDidMount() {
    setInterval(() => {
      this.setState({
        value: this.state.value + 1
      })
    }, 1000);
    }
    
  render() {
    return (
    <>
      <div>{this.state.value}</div>
      <div>{this.state.value * 2}</div>
    </>
    )
  }
}

function Counter() {
  return (
    <div className="Counter">
      <MyCounter />
    </div>
  );
}

export default Counter;
*/

//士揚寫法
/*
class MyCounterItem extends React.Component {
  render() {
    return (
      <div>{this.props.base * this.props.value}</div>
    )
  }
}

class MyCounterBlock extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      input: 0,
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        value: this.state.value + 1
      })
    }, 1000);
  }

  handleChange = e => {
    this.setState({
      input: +e.target.value,
    })
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
        {[...Array(this.state.input).keys()].map((value) => 
          <MyCounterItem
            key={value}
            base={value + 1}
            value={this.state.value}
          />
        )}
      </div>
    )
  }
}

function App() {
  return (
    <div className="Counter">
      <MyCounterBlock />
    </div>
  );
}

export default App;
*/