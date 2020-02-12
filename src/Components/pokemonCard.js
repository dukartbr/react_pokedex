import React, { Component } from 'react';
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

class pokemonCard extends Component {
  state = {
    isFavorited: false,
    abilityDescriptions: {
      abilities: [],
      abilitiesLoaded: false,
    },
    moveStats: {
      moves: [],
      movesLoaded: false,
    },
  };

  getAbilityDescriptions = pokemon => {
    pokemon.pokemonAbilites.forEach(pokemon => {
      const url = pokemon.ability.url;
      Axios.get(`${url}`)
        .then(response => {
          const res = response.data.effect_entries[0].short_effect;
          this.setState(prevState => ({
            abilityDescriptions: {
              abilities: [...prevState.abilityDescriptions.abilities, res],
              abilitiesLoaded: true,
            },
          }));
        })
        .catch(e => {
          console.log('handle error here: ', e.message);
        });
    });
  };

  getMoveStats = pokemon => {
    pokemon.pokemonMoves.forEach(move => {
      const url = move.move.url;
      const moveObject = {
        name: '',
        damage_class: '',
        accuracy: '',
        power: '',
      };
      Axios.get(`${url}`)
        .then(response => {
          const res = response.data;
          moveObject.name = res.name;
          moveObject.damage_class = res.damage_class.name;
          moveObject.accuracy = res.accuracy;
          moveObject.power = res.power;
          this.setState(prevState => ({
            moveStats: {
              moves: [...prevState.moveStats.moves, moveObject],
              movesLoaded: true,
            },
          }));
        })
        .catch(e => {
          console.log('handle error here: ', e.message);
        });
    });
  };

  componentDidMount() {
    this.getAbilityDescriptions(this.props);
    this.getMoveStats(this.props);
  }

  componentDidUpdate(prevProps) {
    if (this.props.pokemonName !== prevProps.pokemonName) {
      this.setState({
        abilityDescriptions: {
          abilities: [],
          abilitiesLoaded: false,
        },
        moveStats: {
          moves: [],
          movesLoaded: false,
        },
      });
      this.getAbilityDescriptions(this.props);
      this.getMoveStats(this.props);
    }
  }

  addToPartyHandler = pokemon => {
    this.props.PartyHandler(pokemon);
  };

  render() {
    const {
      pokemonAbilites,
      pokemonName,
      pokemonImages,
      pokemonStats,
      pokemonTypes,
      pokemonID,
      isFavorited,
    } = this.props;
    const { abilityDescriptions, moveStats } = this.state;
    if (abilityDescriptions.abilitiesLoaded && moveStats.movesLoaded) {
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
              <Subheader color='$DarkRed'>{pokemonName}</Subheader>
              {pokemonTypes.map(pokemon => (
                <Span
                  key={pokemon.type.name}
                  color='#000000'
                  textAlign='center'
                >
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
              {!isFavorited ? (
                <Button
                  onClick={() => this.addToPartyHandler(this.props)}
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
              ) : null}
              <Row>
                <Column width='20%'>
                  <Image
                    src={pokemonImages.front_default}
                    alt=''
                    width='200px'
                  />
                </Column>
                <Column width='80%'>
                  <Box padding='15px 20px'>
                    <Title color='white'>Stats</Title>
                    <ListContainer>
                      {pokemonStats.map(pokemon => (
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
                ID: {pokemonID}
              </Span>
            </SmallScreen>
            <Row>
              <Column width='100%'>
                <Title>Abilities</Title>
                <ListContainer>
                  {pokemonAbilites.map((pokemon, i) => {
                    return (
                      <ListItem key={i}>
                        {pokemon.ability.name} -{' '}
                        {abilityDescriptions.abilities[i]}
                      </ListItem>
                    );
                  })}
                </ListContainer>
              </Column>
            </Row>
            <Row>
              <Box
                width='80%'
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
    } else return null;
  }
}

export default pokemonCard;
