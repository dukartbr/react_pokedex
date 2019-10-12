import React, { Component } from 'react';
import Axios from 'axios';
import PokemonCard from './pokemonCard';
import PokedexLeftHeader from './PokedexLeftHeader';
import Favorite from './Favorite';

class Pokemon extends Component {
    state = {
        pokemons: [],
        pokemonName: null,
        pokemonAbilites: [],
        pokemonMoves: [],
        pokemonImages: {},
        pokemonStats: [],
        pokemonTypes: [],
        Favorites: []
    }

    componentDidMount() {
        Axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then((response)=> {
            this.setState({
                pokemons: response.data.results
            })
        })
    }

    renderCard = (pokemon) => {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then( response => {
            const res = response.data
            this.setState({
                pokemonName: res.name,
                pokemonAbilites: res.abilities,
                pokemonMoves: res.moves,
                pokemonImages: res.sprites,
                pokemonStats: res.stats,
                pokemonTypes: res.types
                });
            }  
        )
    }

    render() {
        const { pokemons, pokemonName, pokemonAbilites, pokemonMoves, pokemonImages, pokemonStats, pokemonTypes, Favorites } = this.state;
        return (
            <div className="row">
                <div className="col-6">
                    <div className="left-container">
                        <div className="left-container--border">
                            <PokedexLeftHeader />
                            <div className="pokemonList--container__padding">
                                <div className="pokemonList--container">
                                    {pokemons.map(pokemon => (
                                        <button key={pokemon.name} onClick={() => this.renderCard(pokemon.name)}>{pokemon.name}</button>
                                    ))}
                                </div>
                            </div>
                            <div className="favorites--container">
                                <div className="container">
                                    <div className="row">
                                        <p className="favorites--header">Favorites</p>
                                    </div>
                                </div>

                                <Favorite pokemonImage={pokemonImages} />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-6">
                    <div className="right-container">
                        <div className="right-container--border">
                        <PokemonCard 
                            key={pokemonName}
                            pokemonName={pokemonName}
                            pokemonAbilites={pokemonAbilites}
                            pokemonMoves={pokemonMoves}
                            pokemonImages={pokemonImages}
                            pokemonStats={pokemonStats}
                            pokemonTypes={pokemonTypes}
                        />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pokemon;