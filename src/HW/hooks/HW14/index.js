import React, { useState, useEffect } from 'react';

import style from './style.module.css';

export default function Index() {

  const [result, setResult] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [re, setRe] = useState(new RegExp(""));

  const fetchData = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=100')
      .then(res => res.json())
      .then(({ results: result }) => {
        setResult(result);
      });
  };

  const handleChange = ({ target }) => {
    setInputValue(target.value);
    setRe(new RegExp(target.value, "i"));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={`container ${style.HW14}`}>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
              keyword
          </span>
        </div>
        <input
          data-testid="input"
          className="form-control"
          value={inputValue}
          placeholder="name..."
          onChange={handleChange}
        />
      </div>
      {result
        .filter(pokemon => re.test(pokemon.name))
        .map( pokemon =>
          <div className={style.inline} key={pokemon.name}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.replace("https://pokeapi.co/api/v2/pokemon/","").replace("/","")}.png`}
              alt={pokemon.name}
            />
            <div data-testid={pokemon.name}>{pokemon.name}</div>
          </div>
        )}

    </div>
  );
}
