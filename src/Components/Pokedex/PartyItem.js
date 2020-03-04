import React from 'react';
import { css } from 'emotion';
import { Box, SmallScreen, Image, Button } from '../../ui';

const PartyItem = ({ pokemon, renderCardHandler }) => {
  return (
    <Button
      className={css`
        background: transparent;
        border: none;
      `}
      onClick={() => renderCardHandler(pokemon)}
    >
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
            src={pokemon.images.front_default}
            alt={pokemon.pokemonName}
            style={{
              position: 'absolute',
              width: '70px',
              top: '0px',
              left: '0px',
            }}
          />
        </SmallScreen>
      </Box>
    </Button>
  );
};

export default PartyItem;
