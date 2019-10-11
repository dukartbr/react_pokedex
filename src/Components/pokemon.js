import React, { Component } from 'react';
import Axios from 'axios';
import PokemonCard from './pokemonCard';

class Pokemon extends Component {
    state = {
        pokemons: [],
        pokemonName: null,
        pokemonAbilites: [],
        pokemonMoves: []
    }

    componentDidMount() {
        Axios.get('https://pokeapi.co/api/v2/pokemon').then((response)=> {
            this.setState({
                pokemons: response.data.results
            })
        })
    }

    renderCard = (pokemon) => {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then( response => {
            console.log(response)
            this.setState({
                pokemonName: response.data.name,
                pokemonAbilites: response.data.abilities,
                pokemonMoves: response.data.moves
                });
            }  
        )
    }

    render() {
        const { pokemons, pokemonName, pokemonAbilites, pokemonMoves } = this.state;
        return (
            <div>
                <div className="pokemonList--container">
                    {pokemons.map(pokemon => (
                        <button key={pokemon.name} onClick={() => this.renderCard(pokemon.name)}>{pokemon.name}</button>
                    ))}
                </div>
                <PokemonCard 
                    key={pokemonName}
                    pokemonName={pokemonName}
                    pokemonAbilites={pokemonAbilites}
                    pokemonMoves={pokemonMoves}
                />
            </div>
        );
    }
}

export default Pokemon;