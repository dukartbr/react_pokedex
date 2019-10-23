import React, { Component } from 'react';
import Axios from 'axios';
import PokemonCard from './pokemonCard';
import Welcome from './Welcome';
import PokedexLeftHeader from './PokedexLeftHeader';
import PartyItem from './PartyItem';

class Pokedex extends Component {
    state = {
        pokemons: [],
        pokemonID: [],
        pokemonName: null,
        pokemonAbilites: [],
        pokemonAbilityDescriptions: [],
        pokemonMoves: [],
        pokemonImages: {},
        pokemonStats: [],
        pokemonTypes: [],
        party: [],
        isInParty: false,
        showPokemonCard: false
    }

    componentDidMount() {
        Axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then((response)=> {
            this.setState({
                pokemons: response.data.results
            })
        })
    }

    renderCard = (pokemon) => {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`).then( response => {
            const res = response.data;
            let abilityDescriptions = [];
            res.abilities.map(ability => {
                const url = ability.ability.url;
                Axios.get(url).then(response => {
                    response.data.effect_entries.map(effect => {
                        abilityDescriptions.push(effect.short_effect);
                    });
                })
            })
            this.setState({
                pokemonID: res.id,
                pokemonName: res.name,
                pokemonAbilites: res.abilities,
                pokemonAbilityDescriptions: abilityDescriptions,
                pokemonMoves: res.moves,
                pokemonImages: res.sprites,
                pokemonStats: res.stats,
                pokemonTypes: res.types,
                showPokemonCard: true
            });
        })
    }

    addToParty = (pokemon) => {
        this.setState({
            ...this.state,
            pokemon
        })
    }

    render() {
        const { pokemons, pokemonID, pokemonName, pokemonAbilites, pokemonAbilityDescriptions ,pokemonMoves, pokemonImages, pokemonStats, pokemonTypes, Party, isFavorited } = this.state;
        return (
            <div className="row">
                <div className="col-6 remove-padding">
                    <div className="left-container">
                        <div className="left-container--border">
                            <PokedexLeftHeader />
                            <div className="pokemonList--container__padding">
                                <div className="pokemonList--container">
                                    {pokemons.map(pokemon => (
                                        <button key={pokemon.name} onClick={() => this.renderCard(pokemon)}>{pokemon.name}</button>
                                    ))}
                                </div>
                            </div>
                            <div className="favorites--container">
                                <div className="container">
                                    <div className="row">
                                        <p className="favorites--header">Party</p>
                                        <PartyItem      pokemonImages={pokemonImages}/>
                                        <PartyItem      pokemonImages={pokemonImages}/>
                                        <PartyItem      pokemonImages={pokemonImages}/>
                                        <PartyItem      pokemonImages={pokemonImages}/>
                                        <PartyItem      pokemonImages={pokemonImages}/>
                                        <PartyItem      pokemonImages={pokemonImages}/>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-6 remove-padding">
                    <div className="right-container">
                        <div className="right-container--border">
                            {
                                this.state.showPokemonCard ?
                                <PokemonCard 
                                    pokemonID={pokemonID}
                                    pokemonName={pokemonName}
                                    pokemonAbilites={pokemonAbilites}
                                    pokemonAbilityDescriptions={pokemonAbilityDescriptions}
                                    pokemonMoves={pokemonMoves}
                                    pokemonImages={pokemonImages}
                                    pokemonStats={pokemonStats}
                                    pokemonTypes={pokemonTypes}
                                    party={Party}
                                    isFavorited={isFavorited}
                                    FavoriteHandler={this.addToParty}
                                />
                                : <Welcome />
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pokedex;