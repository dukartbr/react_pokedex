import React, { Component } from 'react';

class pokemonCard extends Component {

    state = {
        isFavorited: false,
        abilityDescriptions: [],
        pokemonName: null
    }

    toggleFavoritesHandler = () => {
        this.setState({
            abilityDescriptions: this.props.pokemonAbilityDescriptions
        })
    }

    componentDidUpdate = (prevProps, prevState) => {
        let abilities = this.props.pokemonAbilityDescriptions;
        console.log(abilities)
        if (prevState && prevState.abilityDescriptions !== abilities) {
            this.setState({
                abilityDescriptions: abilities
            })
        }
    }

    render() {
        const {pokemonAbilites, pokemonAbilityDescriptions, pokemonName, pokemonMoves, pokemonImages, pokemonStats, pokemonTypes, pokemonID} = this.props;
        const {abilityDescriptions} = this.state;
        console.log(abilityDescriptions)
        return (
            <div className="container">
            <div className="pokemonCard--container">
                <div className="pokemonCard--header">
                    <h2>{pokemonName}</h2>
                    {pokemonTypes.map(pokemon => (
                        <span className="pokemonCard--type" key={pokemon.type.name}>{pokemon.type.name}</span>
                    ))}
                </div>
                <div className="pokemonCard--screen">
                    {pokemonName ?
                        <button onClick={()=> this.toggleFavoritesHandler(this.props)} className="pokemonCard--favorite">
                            <i className="fas fa-star"></i>
                        </button>
                    :
                        null
                    }
                    <div className="row">
                        <div className="col-3">
                            <img src={pokemonImages.front_default} alt="" />
                        </div>
                        <div className="col-8">
                            <div className="pokemonCard--stat-container">
                                <h3>Stats</h3>
                                <ul>
                                    {pokemonStats.map(pokemon => (
                                        <li key={pokemon.stat.name}>{pokemon.stat.name} : <span className="pokemonCard--base-stat">{pokemon.base_stat}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <span className="pokemonCard--pokemonID">ID: {pokemonID}</span>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h3>Abilities</h3>
                        <ul>
                            {pokemonAbilites.map((pokemon, i) => {
                                return (
                                    <li key={i}>{pokemon.ability.name} - {abilityDescriptions[i]}</li>
                                )
                            })}
                        </ul>

                    </div>
                </div>
                <div className="row">
                    <div className="pokemonCard--moves-container">
                        <h3>Moves</h3>
                        <ul>
                            {pokemonMoves.slice(0, 4).map(pokemon => (
                                <li key={pokemon.move.name} className="pokemonCard--moves-item"><span className="pokemonCard--moves-title">{pokemon.move.name}</span></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default pokemonCard;