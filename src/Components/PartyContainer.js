import React from 'react';

import PartyItem from './PartyItem';

function PartyContainer(props) {
  function renderCardHandler(pokemon) {
    console.log(pokemon);
  }
  const { party } = props;
  return (
    <div>
      <h2 className='favorites--header'>Party</h2>
      <div className='favorites--list row'>
        {party.map((pokemon, i) => (
          <PartyItem
            key={i}
            pokemon={pokemon}
            renderCardHandler={renderCardHandler}
          />
        ))}
      </div>
    </div>
  );
}
export default PartyContainer;
