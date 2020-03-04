import React from 'react';
import { css } from 'emotion';

const PokemonButton = ({ name, renderCard, pokemon }) => (
  <button
    key={name}
    onClick={() => renderCard(pokemon)}
    className={css`
      padding: 10px 20px;
      background: none;
      border: none;
      color: white;
      font-size: 55px;
      text-align: center;
      display: block;
      margin: 10px 0px;
      margin-right: auto;
      margin-left: auto;
      font-family: 'Acme', sans-serif;
      text-transform: capitalize;
    `}
  >
    {name}
  </button>
);

export default PokemonButton;
