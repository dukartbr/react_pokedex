import React from 'react';
import { Column, NoMarginRow, Image } from '../../ui';
import CurrentPokmeonStats from './CurrentPokemonStats';

const OpponentScene = ({ opponentParty }) => {
  let [currentPokemon, setCurrentPokemon] = React.useState(opponentParty[0]);

  console.log('opponentPokemon', currentPokemon);
  return (
    <NoMarginRow
      width='100%'
      mr='0px'
      ml='0px'
      height='310px'
      position='relative'
      top='0px'
    >
      <Column width='50%'>
        <CurrentPokmeonStats currentPokemon={currentPokemon} />
      </Column>
      <Column width='50%'>
        <Image src={currentPokemon.images.front_default} width='100%' />
      </Column>
    </NoMarginRow>
  );
};

export default OpponentScene;
