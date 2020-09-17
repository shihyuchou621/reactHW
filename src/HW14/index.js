import React, { Component } from 'react';

import './style.css';

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      result: [],
      inputValue: "",
      re: new RegExp(""),
    };
  }

  fetchData = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=100')
      .then(res => res.json())
      .then(({ results: result }) => {
        this.setState({ result });
      });
  }

  handleChange = ({ target }) => {
    this.setState({
      inputValue: target.value,
      re: new RegExp(target.value, "i"), // 可以忽略大小寫
    });
  }

  componentDidMount() {
    this.fetchData();
  }


  render() {
    const {
      state: { inputValue, result, re }
    } = this;



    return (
      <div className="container HW14">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              keyword
            </span>
          </div>
          <input
            className="form-control"
            value={inputValue}
            placeholder="name..."
            onChange={this.handleChange}
          />
        </div>
        {result
          .filter(pokemon => re.test(pokemon.name))
          .map( pokemon =>
            <div className="inline" key={pokemon.name}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.replace("https://pokeapi.co/api/v2/pokemon/","").replace("/","")}.png`}
                alt={pokemon.name}
              />
              <div>{pokemon.name}</div>
            </div>
          )}

      </div>
    );
  }
}
