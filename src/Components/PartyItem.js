import React from 'react';

const PartyItem = props => {
  console.log(props.pokemon);
  return (
    <div className='col-2'>
      <div className='favorites--item-container'>
        <img
          className='favorites--item'
          src={props.pokemon.pokemonImages.front_default}
          alt={props.pokemon.pokemonName}
        />
      </div>
    </div>
  );
};

export default PartyItem;
