import React, { Component } from 'react';
import Axios from 'axios';
import { generations } from '../api';
import PokemonCard from './pokemonCard';
import Welcome from './Welcome';
import PokedexLeftHeader from './PokedexLeftHeader';
import PartyContainer from './PartyContainer';
import GenerationsTab from './GenerationsTab';
// import { connect } from "react-redux";

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
    isInParty: false,
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
      isFavorited,
      party,
    } = this.state;
    return (
      <div className='pokedex--container'>
        <GenerationsTab updateGeneration={this.updateGeneration} />
        <div className='row'>
          <div className='col-6 remove-padding'>
            <div className='left-container'>
              <div className='left-container--border'>
                <PokedexLeftHeader />
                <div className='pokemonList--container__padding'>
                  <div className='pokemonList--container'>
                    {pokemons.map(pokemon => (
                      <button
                        key={pokemon.name}
                        onClick={() => this.renderCard(pokemon)}
                      >
                        {pokemon.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div className='favorites--container'>
                  <div className='container'>
                    <div className='row'>
                      <PartyContainer party={party} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-6 remove-padding'>
            <div className='right-container'>
              <div className='right-container--border'>
                {this.state.showPokemonCard ? (
                  <PokemonCard
                    pokemonID={pokemonID}
                    pokemonName={pokemonName}
                    pokemonAbilites={pokemonAbilites}
                    pokemonMoves={pokemonMoves}
                    pokemonImages={pokemonImages}
                    pokemonStats={pokemonStats}
                    pokemonTypes={pokemonTypes}
                    isFavorited={isFavorited}
                    PartyHandler={this.addToPartyHandler}
                  />
                ) : (
                  <Welcome />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = () => {};

// export default connect(mapStateToProps)(Pokedex);

export default Pokedex;
