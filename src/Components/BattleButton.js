import React from 'react';
import { css } from 'emotion';
import { Box, Subheader, Button, Colors } from '../ui';

const BattleButton = party => {
  const partyKeys = Object.keys(party.party);
  console.log(partyKeys.length);
  const renderBattle = party => {
    console.log(party);
  };
  return (
    <Box
      position='absolute'
      bottom='20px'
      ml='auto'
      mr='auto'
      left='0'
      right='0'
    >
      <Button
        disabled={partyKeys.length < 5}
        className={css`
          background-color: ${Colors.BlueOne};
          border: 3px solid ${Colors.Yellow};
          border-radius: 25px;
          width: 200px;
          height: 75px;
          &:disabled {
            background-color: ${Colors.Gray};
          }
        `}
        onClick={() => renderBattle(party)}
      >
        <Subheader>Battle!</Subheader>
      </Button>
    </Box>
  );
};

export default BattleButton;
