import React from 'react';
import { css } from 'emotion';
import { Box, Row, Button } from '../../ui';

const MovesMenu = ({ currentPokemon }) => {
  React.useEffect(() => {
    console.log('currentPokemon', currentPokemon.moves);
  });
  return (
    <Box>
      <Row>
        <Button
          className={css`
            width: 150px;
            height: 75px;
            background-color: transparent;
            border: 2px solid black;
            border-radius: 20px;
          `}
        >
          {currentPokemon.moves[0].move.name}
        </Button>
        <Button
          className={css`
            width: 150px;
            height: 75px;
            background-color: transparent;
            border: 2px solid black;
            border-radius: 20px;
          `}
        >
          {currentPokemon.moves[1].move.name}
        </Button>
      </Row>
      <Row>
        <Button
          className={css`
            width: 150px;
            height: 75px;
            background-color: transparent;
            border: 2px solid black;
            border-radius: 20px;
          `}
        >
          {currentPokemon.moves[2].move.name}
        </Button>
        <Button
          className={css`
            width: 150px;
            height: 75px;
            background-color: transparent;
            border: 2px solid black;
            border-radius: 20px;
          `}
        >
          {currentPokemon.moves[3].move.name}
        </Button>
      </Row>
    </Box>
  );
};

export default MovesMenu;
