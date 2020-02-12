import React, { Component } from 'react';
import Axios from 'axios';
import { Box, Column, Container, Row, Panel, LargeScreen } from '../ui';
import { generations } from '../api';
import PokemonCard from './pokemonCard';
import PokemonButton from './PokemonButton';
import Welcome from './Welcome';
import PokedexLeftHeader from './PokedexLeftHeader';
import PartyContainer from './PartyContainer';
import GenerationsTab from './GenerationsTab';

class Pokedex extends Component {
  state = {
    generation: 'gen1',
    pokemons: [],
    pokemonID: [],
    pokemonName: null,
    pokemonAbilites: [],
    pokemonAbilityDesciptionURLS: [],
    pokemonAbilityDescriptions: [],
    pokemonMoves: [],
    pokemonImages: {},
    pokemonStats: [],
    pokemonTypes: [],
    party: [],
    showPokemonCard: false,
  };

  componentDidMount() {
    const { generation } = this.state;
    this.getPokemon(generation);
  }

  getPokemon(gen) {
    Axios.get(generations[gen])
      .then(response => {
        this.setState({
          pokemons: response.data.results,
        });
      })
      .catch(e => {
        console.log('handle error here: ', e.message);
      });
  }

  renderCard = pokemon => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      .then(response => {
        console.log(response);
        const res = response.data;
        const moves = res.moves.slice(0, 4);
        this.setState({
          pokemonID: res.id,
          pokemonName: res.name,
          pokemonAbilites: res.abilities,
          pokemonMoves: moves,
          pokemonImages: res.sprites,
          pokemonStats: res.stats,
          pokemonTypes: res.types,
          showPokemonCard: true,
        });
      })
      .catch(e => {
        console.log('handle error here: ', e.message);
      });
  };

  addToPartyHandler = pokemon => {
    this.setState(prevState => ({
      party: [...prevState.party, pokemon],
    }));
  };

  updateGeneration = gen => {
    this.setState(
      {
        generation: gen,
      },
      () => {
        this.getPokemon(gen);
      }
    );
  };

  render() {
    const {
      pokemons,
      pokemonID,
      pokemonName,
      pokemonAbilites,
      pokemonMoves,
      pokemonImages,
      pokemonStats,
      pokemonTypes,
      party,
    } = this.state;
    return (
      <Box position='relative' pt='3rem' pb='3rem'>
        <GenerationsTab updateGeneration={this.updateGeneration} />
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
                        renderCard={this.renderCard}
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
              {this.state.showPokemonCard ? (
                <PokemonCard
                  pokemonID={pokemonID}
                  pokemonName={pokemonName}
                  pokemonAbilites={pokemonAbilites}
                  pokemonMoves={pokemonMoves}
                  pokemonImages={pokemonImages}
                  pokemonStats={pokemonStats}
                  pokemonTypes={pokemonTypes}
                  PartyHandler={this.addToPartyHandler}
                />
              ) : (
                <Welcome />
              )}
            </Panel>
          </Column>
        </Row>
      </Box>
    );
  }
}

// const mapStateToProps = () => {};

// export default connect(mapStateToProps)(Pokedex);

export default Pokedex;
