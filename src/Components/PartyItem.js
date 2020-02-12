import React from 'react';
import { Box, SmallScreen, Image } from '../ui';

const PartyItem = props => {
  return (
    <Box p='15px 0px'>
      <SmallScreen
        border='3px solid #faf139'
        width='70px'
        height='70px'
        mr='5px'
        ml='5px'
        position='relative'
      >
        <Image
          className='favorites--item'
          src={props.pokemon.pokemonImages.front_default}
          alt={props.pokemon.pokemonName}
          style={{
            position: 'absolute',
            width: '70px',
            top: '0px',
            left: '0px',
          }}
        />
      </SmallScreen>
    </Box>
  );
};

export default PartyItem;
