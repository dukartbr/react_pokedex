import React from 'react';
import Axios from 'axios';

import { Box, Column, Container, Row, Panel, LargeScreen } from '../../ui';
import { generations } from '../../api';
import PokemonCard from './pokemonCard';
import PokemonButton from './PokemonButton';
import Welcome from './Welcome';
import PokedexLeftHeader from './PokedexLeftHeader';
import PartyContainer from './PartyContainer';
import GenerationsTab from './GenerationsTab';
import SearchBar from './SearchBar';

import { useParty } from '../../store';

const Pokedex = () => {
  const {
    pokemonParty,
    addPokemonToParty,
    removePokemonFromParty,
  } = useParty();

  let [generation, setGeneration] = React.useState('gen1');
  let [pokemons, setPokemons] = React.useState([]);
  let [currentPokemon, setcurrentPokemon] = React.useState({
    id: null,
    name: null,
    abilities: [],
    moves: [],
    images: [],
    stats: [],
    types: [],
  });
  let [displayCard, setDisplayCard] = React.useState(false);
  let [searchQuery, setSearchQuery] = React.useState('');
  const isInParty = pokemonParty?.find((p) => p.id === currentPokemon.id);

  React.useEffect(() => {
    getPokemon(generation);
  }, [generation]);

  const getPokemon = (gen) => {
    Axios.get(generations[gen]).then(
      (response) => {
        setPokemons(response.data.results);
      },
      (e) => {
        console.log('handle error here: ', e.message);
      }
    );
  };

  const updateGeneration = (gen) => {
    setGeneration(gen);
  };

  const togglePartyHandler = (pokemon) => {
    if (!isInParty) {
      if (pokemonParty.length <= 4) {
        addPokemonToParty(pokemon);
      } else {
        alert('You may only have up to 5 Pokemon in your party');
      }
    } else if (isInParty) {
      removePokemonFromParty(pokemon.id);
    }
  };

  React.useEffect(() => {
    localStorage.setItem(`party`, JSON.stringify(pokemonParty));
  }, [pokemonParty]);

  const renderCard = (pokemon) => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      .then((response) => {
        const res = response.data;
        const moves = res.moves.slice(0, 4);
        setcurrentPokemon({
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
      .catch((e) => {
        console.log('handle error here: ', e.message);
      });
  };

  const renderPartyCard = (pokemon) => {
    renderCard(pokemon);
  };

  const filteredPokemon = (pokemonList, query) => {
    if (!query) return pokemonList;
    return pokemonList.filter(
      (p) => p.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
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
                <SearchBar
                  setSearchQuery={setSearchQuery}
                  searchQuery={searchQuery}
                />
                <LargeScreen overflow='scroll' height='400px'>
                  {filteredPokemon(pokemons, searchQuery).length !== 0 ? (
                    filteredPokemon(pokemons, searchQuery).map((pokemon) => (
                      <PokemonButton
                        key={pokemon.name}
                        name={pokemon.name}
                        renderCard={renderCard}
                        pokemon={pokemon}
                      />
                    ))
                  ) : (
                    <Box
                      width='100%'
                      textAlign='center'
                      color='white'
                      fontSize='3rem'
                      fontFamily='Acme'
                      mt='6rem'
                    >
                      No Results!
                    </Box>
                  )}
                </LargeScreen>
              </Box>
              <Box padding='15px 0px'>
                <Container>
                  <Row>
                    <PartyContainer
                      party={pokemonParty}
                      renderPartyCard={renderPartyCard}
                    />
                  </Row>
                </Container>
              </Box>
            </Box>
          </Panel>
        </Column>
        <Column width='50%' p='0'>
          <Panel borderRadius='0px 50px 50px 0px' position='relative'>
            {displayCard ? (
              <PokemonCard
                currentPokemon={currentPokemon}
                party={pokemonParty}
                partyHandler={togglePartyHandler}
                isInParty={isInParty}
              />
            ) : (
              <Welcome />
            )}
            <Box
              textAlign='center'
              color='white'
              fontFamily='Acme'
              fontSize='35px'
              position='absolute'
              bottom='20px'
              left='0px'
              right='0px'
              ml='25%'
              mr='25%'
              width='50%'
            >
              Party [{pokemonParty.length} / 5]
            </Box>
          </Panel>
        </Column>
      </Row>
    </Box>
  );
};

export default Pokedex;
