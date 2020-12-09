import React from 'react';
import Axios from 'axios';
import { css } from 'emotion';
import {
  Box,
  Column,
  Container,
  Row,
  Button,
  SmallScreen,
  Subheader,
  Span,
  Title,
  Colors,
  Image,
  Icon,
  ListContainer,
  ListItem,
} from '../../ui';
import MovesTable from './MovesTable';

const PokemonCard = ({ currentPokemon, partyHandler, isInParty }) => {
  const { id, name, abilities, images, stats, types } = currentPokemon;
  let [abilityDescriptions, setAbilityDescriptions] = React.useState([]);
  let [moveStats, setMoveStats] = React.useState([]);

  React.useEffect(() => {
    Promise.all(
      abilities.map((ability) => {
        return Axios.get(ability.ability.url);
      })
    ).then((values) => {
      let enVals = values.map(
        (value) =>
          value.data.effect_entries.filter(
            (entry) => entry.language.name === 'en'
          )[0].short_effect
      );
      setAbilityDescriptions(enVals);
    });
  }, [abilities]);

  React.useEffect(() => {
    const { moves } = currentPokemon;
    if (moveStats.length > 0) return;
    Promise.all(
      moves.slice(0, 4).map((move) => {
        return Axios.get(move.move.url);
      })
    ).then((values) => {
      setMoveStats(
        values.map((value) => ({
          name: value.data.name,
          damage_class: value.data.damage_class.name,
          accuracy: value.data.accuracy,
          power: value.data.power,
        }))
      );
    });
  }, [currentPokemon, moveStats]);

  React.useEffect(() => {
    setAbilityDescriptions([]);
    setMoveStats([]);
  }, [id]);

  const togglePartyHandler = (pokemon) => {
    partyHandler(pokemon);
  };

  return (
    <Container>
      <Box
        p='30px 10px'
        bg='#f1f5e6'
        border='2px solid'
        borderColor={Colors.DarkPurple}
        borderRadius='15px'
      >
        <Box height='100px'>
          <Subheader color='$DarkRed'>{name}</Subheader>
          {types.map((pokemon) => (
            <Span key={pokemon.type.name} color='#000000' textAlign='center'>
              {pokemon.type.name}
            </Span>
          ))}
        </Box>
        <SmallScreen
          border='2px solid'
          borderColor={Colors.DarkPurple}
          borderRadius='15px'
          height='250px'
          display='block'
          textAlign='center'
          position='relative'
        >
          <Button
            onClick={() => togglePartyHandler(currentPokemon)}
            className={css`
              float: left;
              color: white;
              margin-top: 5px;
              margin-left: 5px;
              background-color: ${Colors.Orange};
              border: none;
              padding: 10px;
              border-radius: 15px;
              &:disabled {
                background-color: gray;
              }
            `}
          >
            {isInParty ? (
              <Icon className='fas fa-trash'></Icon>
            ) : (
              <Icon className='fas fa-star'></Icon>
            )}
          </Button>
          <Row>
            <Column width='40%'>
              <Image src={images.front_default} alt='' width='200px' />
            </Column>
            <Column width='60%'>
              <Box padding='15px 20px'>
                <Title color='white'>Stats</Title>
                <ListContainer>
                  {stats.map((pokemon) => (
                    <ListItem
                      key={pokemon.stat.name}
                      className={css`
                        list-style-type: none;
                        color: white;
                        text-align: left;
                        font-weight: bold;
                        font-family: 'Asap', sans-serif;
                        text-transform: uppercase;
                      `}
                    >
                      <Span float='right'>
                        {pokemon.stat.name}: {pokemon.base_stat}
                      </Span>
                    </ListItem>
                  ))}
                </ListContainer>
              </Box>
            </Column>
          </Row>
          <Span
            position='absolute'
            bottom='5px'
            right='5px'
            color='black'
            fontWeight='bold'
          >
            ID: {id}
          </Span>
        </SmallScreen>
        <Row>
          <Column width='100%'>
            <Title>Abilities</Title>
            <ListContainer>
              {abilities.map((ability, i) => {
                return (
                  <ListItem key={i}>
                    {ability.ability.name} - {abilityDescriptions[i]}
                  </ListItem>
                );
              })}
            </ListContainer>
          </Column>
        </Row>
        <Row>
          <Box
            mr='10%'
            ml='10%'
            width='80%'
            background={Colors.Yellow}
            border='3px solid'
            borderColor={Colors.Orange}
            p='20px 0px'
            borderRadius='30px'
          >
            <Title>Moves</Title>
            <MovesTable moveStats={moveStats} />
          </Box>
        </Row>
      </Box>
    </Container>
  );
};

export default PokemonCard;
