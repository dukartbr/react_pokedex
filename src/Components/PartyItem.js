import React from 'react';

const PartyItem = props => {
  // function renderCardHandler(props) {
  //   // console.log(props.pokemon);
  //   console.log(props);
  //   // props.renderCardHandler();
  // }
  return (
    <div className='col-2'>
      <button className='favorites--item-container'>
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
