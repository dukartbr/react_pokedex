import React from 'react';

import OpponentScene from './OpponentScene';
import PlayerScene from './PlayerScene';
import { Box } from '../../ui';

const BattleScene = ({ playerParty, opponentParty }) => {
  return (
    <Box>
      <OpponentScene opponentParty={opponentParty} />
      <PlayerScene playerParty={playerParty} />
    </Box>
  );
};

export default BattleScene;
