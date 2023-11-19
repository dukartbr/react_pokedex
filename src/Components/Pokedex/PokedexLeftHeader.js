import React from 'react';
import { Box } from '../../ui';

const PokedexLeftHeader = () => {
  return (
    <Box
      position='absolute'
      ml='-53px'
      mt='-53px'
      borderRadius='50px 0px 0px 0px'
      width='116%'
      height='100px'
      boxShadow='1px 2px 5px #4f045a'
      bg='#ff0050'
    >
      <Box pt='5px'>
        <Box textAlign='center' fontFamily='Acme' fontSize='60px' color='white'>
          RéacteDex
        </Box>
      </Box>
    </Box>
  );
};

export default PokedexLeftHeader;
