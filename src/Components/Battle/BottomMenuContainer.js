import React from 'react';
import InitialMenu from './InitialMenu';
import { Box } from '../../ui';
import MovesMenu from './MovesMenu';

const BottomMenuContainer = ({ party, sceneToggler }) => {
  let [currentPokemon, setCurrentPokemon] = React.useState(party[0]);
  let [isFighting, setIsFighting] = React.useState(false);
  const toggleFighting = () => {
    setIsFighting(true);
    sceneToggler('battlescene');
  };
  return (
    <Box
      position='absolute'
      height='10rem'
      border='2px solid black'
      bottom='0'
      backgroundColor='lightgray'
      width='100%'
    >
      <Box>
        <InitialMenu
          party={party}
          currentPokemon={currentPokemon}
          toggleFighting={toggleFighting}
          sceneToggler={sceneToggler}
        />
        {isFighting ? <MovesMenu currentPokemon={currentPokemon} /> : null}
      </Box>
    </Box>
  );
};

export default BottomMenuContainer;
