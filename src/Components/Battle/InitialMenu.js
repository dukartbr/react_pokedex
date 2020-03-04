import React from 'react';
import { css } from 'emotion';
import { Link } from 'react-router-dom';
import { Box, Row, Button } from '../../ui';

const InitialMenu = ({
  party,
  currentPokemon,
  toggleFighting,
  sceneToggler,
}) => {
  return (
    <Box
      className={css`
        position: absolute;
        right: 10px;
        bottom: 0;
      `}
    >
      <Row width='300px'>
        <Button
          className={css`
            width: 150px;
            height: 75px;
            background-color: transparent;
            border: 2px solid black;
            border-radius: 20px;
          `}
          onClick={() => toggleFighting()}
        >
          Fight
        </Button>
        <Button
          className={css`
            width: 150px;
            height: 75px;
            background-color: transparent;
            border: 2px solid black;
            border-radius: 20px;
          `}
          onClick={() => sceneToggler('partylist')}
        >
          Pokemon
        </Button>
      </Row>
      <Row width='300px'>
        <Button
          className={css`
            width: 150px;
            height: 75px;
            background-color: transparent;
            border: 2px solid black;
            border-radius: 20px;
          `}
          onClick={() => sceneToggler('itemlist')}
        >
          Pack
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
          <Link to='/'>Run</Link>
        </Button>
      </Row>
    </Box>
  );
};

export default InitialMenu;
