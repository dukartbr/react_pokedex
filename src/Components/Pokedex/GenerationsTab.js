import React from 'react';
import { Box, ListContainer, ListItem, Button, Colors } from '../../ui';
import { css } from 'emotion';

function GenerationsTab(props) {
  const updateGenHandler = e => {
    props.updateGeneration(e.target.id);
  };

  return (
    <Box position='absolute' zIndex='999' left='-129px' top='70px'>
      <ListContainer position='relative'>
        <ListItem
          className={css`
            list-style-type: none;
            margin-top: 90px;
            margin-left: -3px;
            transform: rotate(-90deg);
            padding: 5px 30px;
            font-family: 'Acme', sans-serif;
            background-color: ${Colors.LightRed};
            border-radius: 30px 30px 0px 0px;
            border: 2px solid ${Colors.DarkPurple};
            ::active {
              background-color: $DarkRed;
            }
          `}
        >
          <Button
            id='gen1'
            onClick={updateGenHandler}
            className={css`
              background-color: transparent;
              border: none;
              color: white;
            `}
          >
            Gen 1
          </Button>
        </ListItem>
        <ListItem
          className={css`
            list-style-type: none;
            margin-top: 90px;
            margin-left: -3px;
            transform: rotate(-90deg);
            padding: 5px 30px;
            font-family: 'Acme', sans-serif;
            background-color: ${Colors.LightRed};
            border-radius: 30px 30px 0px 0px;
            border: 2px solid ${Colors.DarkPurple};
            ::active {
              background-color: $DarkRed;
            }
          `}
        >
          <Button
            id='gen2'
            onClick={updateGenHandler}
            className={css`
              background-color: transparent;
              border: none;
              color: white;
            `}
          >
            Gen 2
          </Button>
        </ListItem>
        <ListItem
          className={css`
            list-style-type: none;
            margin-top: 90px;
            margin-left: -3px;
            transform: rotate(-90deg);
            padding: 5px 30px;
            font-family: 'Acme', sans-serif;
            background-color: ${Colors.LightRed};
            border-radius: 30px 30px 0px 0px;
            border: 2px solid ${Colors.DarkPurple};
            ::active {
              background-color: $DarkRed;
            }
          `}
        >
          <Button
            id='gen3'
            onClick={updateGenHandler}
            className={css`
              background-color: transparent;
              border: none;
              color: white;
            `}
          >
            Gen 3
          </Button>
        </ListItem>
        <ListItem
          className={css`
            list-style-type: none;
            margin-top: 90px;
            margin-left: -3px;
            transform: rotate(-90deg);
            padding: 5px 30px;
            font-family: 'Acme', sans-serif;
            background-color: ${Colors.LightRed};
            border-radius: 30px 30px 0px 0px;
            border: 2px solid ${Colors.DarkPurple};
            ::active {
              background-color: $DarkRed;
            }
          `}
        >
          <Button
            id='gen4'
            onClick={updateGenHandler}
            className={css`
              background-color: transparent;
              border: none;
              color: white;
            `}
          >
            Gen 4
          </Button>
        </ListItem>
      </ListContainer>
    </Box>
  );
}

export default GenerationsTab;
