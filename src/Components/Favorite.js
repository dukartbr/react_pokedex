import React from 'react';
import { Image, Text } from './ui';

const Favorite = props => {
  const { pokemonImage, pokemonName } = props;
  return (
    <>
      <Image src={pokemonImage.front_default} alt='' />
      <Text>{pokemonName}</Text>
    </>
  );
};

export default Favorite;
