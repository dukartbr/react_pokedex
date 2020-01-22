import React from 'react';

const PartyItem = props => {
  return (
    <div className='favorites--item-container'>
      <button className='favorites--item-button'>
        <img
          className='favorites--item'
          src={props.pokemon.pokemonImages.front_default}
          alt={props.pokemon.pokemonName}
        />
      </button>
    </div>
  );
};

export default PartyItem;
