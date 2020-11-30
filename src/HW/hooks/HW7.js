import React, { useState, useEffect } from 'react';

export default function HW7() {
  const [ result , setResult ] = useState([]);

  const fetchData = () => {
    fetch('https://randomuser.me/api/?results=25')
      .then(res => res.json())
      .then(({ results: result }) => {
        setResult(result);
      });
  };

  const handleClick = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <h2>抓取資料</h2>
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
