import React, { Component } from 'react';
import Axios from 'axios';
import PokemonCard from './pokemonCard';

class Pokemon extends Component {
    state = {
        pokemons: [],
        pokemonName: null,
        pokemonAbilites: [],
        pokemonMoves: [],
        pokemonImages: {}
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
            console.log(res)
            this.setState({
                pokemonName: res.name,
                pokemonAbilites: res.abilities,
                pokemonMoves: res.moves,
                pokemonImages: res.sprites
                });
            }  
        )
    }

    render() {
        const { pokemons, pokemonName, pokemonAbilites, pokemonMoves, pokemonImages } = this.state;
        return (
            <div className="row">
                <div className="col-6">
                    <div className="left-container">
                        <div className="pokemonList--container__padding">
                            <div className="pokemonList--container">
                                {pokemons.map(pokemon => (
                                    <button key={pokemon.name} onClick={() => this.renderCard(pokemon.name)}>{pokemon.name}</button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="right-container">
                        <PokemonCard 
                            key={pokemonName}
                            pokemonName={pokemonName}
                            pokemonAbilites={pokemonAbilites}
                            pokemonMoves={pokemonMoves}
                            pokemonImages={pokemonImages}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Pokemon;