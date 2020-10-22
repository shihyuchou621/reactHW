import React, { Component } from 'react';

class HW7 extends Component {
  constructor() {
    super();
    this.state = {
      result: [],
    };
  }

  fetchData = () => {
    fetch('https://randomuser.me/api/?results=25')
      .then(res => res.json())
      .then(({ results: result }) => {
        this.setState({ result });
      });
    /**
       * .then(res => res.json())
       * .then(this.setState);
       */
  }

  componentDidMount() {
    this.fetchData();
  }

  /** 程式的執行順序 */
  handleClick = () => {
    this.fetchData();
  }

  render() {
    const {
      handleClick,
      state: { result }
    } = this;

    return (
      <div>
        <button className="btn btn-primary" onClick={handleClick}>
          Update List
        </button>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>picture</th>
              <th>name</th>
              <th>gender</th>
              <th>email</th>
              <th>age</th>
              <th>phone</th>
              <th>country</th>
            </tr>
          </thead>
          <tbody>
            {result.map( user =>
              <tr key={user.login.uuid}>
                <td><img src={user.picture.thumbnail} alt={user.name.last} /></td>
                <td>{user.name.last}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.dob.age}</td>
                <td>{user.phone}</td>
                <td>{user.location.country}</td>
              </tr>)}
          </tbody>
        </table>

      </div>
    );
  }

}

export default class printHW7 extends Component {
  render() {
    return (
      <div>
        <HW7 />
      </div>
    );
  }
}
