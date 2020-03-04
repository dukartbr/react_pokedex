import React from 'react';
import { css } from 'emotion';
import { Link } from 'react-router-dom';
import { Box, Subheader, Button, Colors } from '../../ui';

const BattleButton = party => {
  return (
    <Box
      bottom='20px'
      left='0px'
      right='0px'
      ml='25%'
      mr='25%'
      position='absolute'
      width='50%'
    >
      <Button
        className={css`
          background-color: ${Colors.BlueOne};
          border: 3px solid ${Colors.Yellow};
          border-radius: 25px;
          width: 100%;
          height: 75px;
        `}
      >
        <Subheader>
          <Link to='/battle' party={party}>
            <Subheader color='white'>Battle!</Subheader>
          </Link>
        </Subheader>
      </Button>
    </Box>
  );
};

export default BattleButton;
