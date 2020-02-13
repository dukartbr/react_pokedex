import React from 'react';
import Axios from 'axios';
import { Box, Column, Container, Row, Panel, LargeScreen } from '../ui';
import { generations } from '../api';
import PokemonCard from './pokemonCard';
import PokemonButton from './PokemonButton';
import Welcome from './Welcome';
import PokedexLeftHeader from './PokedexLeftHeader';
import PartyContainer from './PartyContainer';
import GenerationsTab from './GenerationsTab';

const Pokedex = () => {
  let [generation, setGeneration] = React.useState('gen1');
  let [pokemons, setPokemons] = React.useState([]);
  let [pokemonObj, setPokemonObj] = React.useState({
    id: null,
    name: null,
    abilities: [],
    moves: [],
    images: [],
    stats: [],
    types: [],
  });
  let [displayCard, setDisplayCard] = React.useState(false);
  let [party, setParty] = React.useState([]);

  React.useEffect(() => {
    setGeneration();
    getPokemon(generation);
  }, [generation]);

  const getPokemon = gen => {
    Axios.get(generations[gen])
      .then(response => {
        setPokemons(response.data.results);
      })
      .catch(e => {
        console.log('handle error here: ', e.message);
      });
  };

  const updateGeneration = gen => {
    setGeneration(gen);
  };

  const addToPartyHandler = pokemon => {
    setParty(party => [...party, pokemon]);
  };

  const renderCard = pokemon => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      .then(response => {
        const res = response.data;
        const moves = res.moves.slice(0, 4);
        setPokemonObj({
          id: res.id,
          name: res.name,
          abilities: res.abilities,
          moves: moves,
          images: res.sprites,
          stats: res.stats,
          types: res.types,
        });
        setDisplayCard(true);
      })
      .catch(e => {
        console.log('handle error here: ', e.message);
      });
  };

  return (
    <Box position='relative' pt='3rem' pb='3rem'>
      <GenerationsTab updateGeneration={updateGeneration} />
      <Row>
        <Column width='50%' p='0'>
          <Panel borderRadius='50px 0px 0px 50px'>
            <Box
              position='relative'
              p='20px'
              border='3px solid #4f045a'
              borderRaidus='30px 0px 0px 15px'
              height='950px'
            >
              <PokedexLeftHeader />
              <Box
                p='50px 10px'
                bg='#f1f5e6'
                border='2px solid #4f045a'
                borderRadius='30px'
                mt='110px'
              >
                <LargeScreen overflow='scroll' height='400px'>
                  {pokemons.map(pokemon => (
                    <PokemonButton
                      key={pokemon.name}
                      name={pokemon.name}
                      renderCard={renderCard}
                      pokemon={pokemon}
                    />
                  ))}
                </LargeScreen>
              </Box>
              <Box padding='15px 0px'>
                <Container>
                  <Row>
                    <PartyContainer party={party} />
                  </Row>
                </Container>
              </Box>
            </Box>
          </Panel>
        </Column>
        <Column width='50%' p='0'>
          <Panel borderRadius='0px 50px 50px 0px'>
            {displayCard ? (
              <PokemonCard
                pokemonObj={pokemonObj}
                partyHandler={addToPartyHandler}
              />
            ) : (
              <Welcome />
            )}
          </Panel>
        </Column>
      </Row>
    </Box>
  );
};

export default Pokedex;
