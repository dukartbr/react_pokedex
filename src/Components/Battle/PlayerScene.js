import React from 'react';
import { Column, NoMarginRow, Image } from '../../ui';
import CurrentPokmeonStats from './CurrentPokemonStats';

const PlayerScene = ({ playerParty }) => {
  let [currentPokemon, setCurrentPokemon] = React.useState(playerParty[0]);
  console.log('playerPokemon', currentPokemon);
  return (
    <NoMarginRow
      width='100%'
      mr='0px'
      ml='0px'
      position='relative'
      bottom='0'
      height='310px'
    >
      <Column width='50%'>
        <Image src={currentPokemon.images.back_default} width='100%' />
      </Column>
      <Column width='50%'>
        <CurrentPokmeonStats currentPokemon={currentPokemon} />
      </Column>
    </NoMarginRow>
  );
};

export default PlayerScene;
