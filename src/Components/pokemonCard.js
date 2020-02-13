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
} from '../ui';
import MovesTable from '../Components/MovesTable';

const PokemonCard = ({ pokemonObj, partyHandler }) => {
  const { id, name, abilities, moves, images, stats, types } = pokemonObj;
  let [abilityDescriptions, setAbilityDescriptions] = React.useState([]);
  let [moveStats, setMoveStats] = React.useState([]);

  React.useEffect(() => {
    abilities.forEach(ability => {
      Axios.get(ability.ability.url)
        .then(response => {
          const res = response.data.effect_entries[0].short_effect;
          setAbilityDescriptions(abilityDescriptions => [
            ...abilityDescriptions,
            res,
          ]);
        })
        .catch(e => {
          console.log('handle error here', e.message);
        });
    });
    moves.forEach(move => {
      const url = move.move.url;
      const moveObj = {
        name: '',
        damage_class: '',
        accuracy: '',
        power: '',
      };
      Axios.get(`${url}`)
        .then(response => {
          const res = response.data;
          moveObj.name = res.name;
          moveObj.damage_class = res.damage_class.name;
          moveObj.accuracy = res.accuracy;
          moveObj.power = res.power;
          setMoveStats(moveStats => [...moveStats, moveObj]);
        })
        .catch(e => {
          console.log('handle error here: ', e.message);
        });
    });
  }, [abilities, moves]);

  React.useEffect(() => {
    setAbilityDescriptions([]);
    setMoveStats([]);
  }, [id]);

  const addToPartyHandler = pokemon => {
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
          {types.map(pokemon => (
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
            onClick={() => addToPartyHandler(pokemonObj)}
            className={css`
              float: left;
              color: white;
              margin-top: 5px;
              margin-left: 5px;
              background-color: ${Colors.Orange};
              border: none;
              padding: 10px;
              border-radius: 15px;
            `}
          >
            <Icon className='fas fa-star'></Icon>
          </Button>
          <Row>
            <Column width='40%'>
              <Image src={images.front_default} alt='' width='200px' />
            </Column>
            <Column width='60%'>
              <Box padding='15px 20px'>
                <Title color='white'>Stats</Title>
                <ListContainer>
                  {stats.map(pokemon => (
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
