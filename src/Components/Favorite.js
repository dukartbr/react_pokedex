import React from 'react';

const Favorite = props => {
  const { pokemonImage, pokemonName } = props;
  return (
    <div className='favorites--item'>
      <img src={pokemonImage.front_default} alt='' />
      <p>{pokemonName}</p>
    </div>
  );
};

export default Favorite;
