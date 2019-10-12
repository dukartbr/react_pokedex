import React from 'react';

const PokemonCard = (props) => {
    console.log(props);
    const {pokemonAbilites, pokemonName, pokemonMoves, pokemonImages, pokemonStats} = props;
    let pokemonNameCapitalized;
    if(pokemonName) {
        pokemonNameCapitalized = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
    }
    return (
        <div className="container">
            <div className="pokemonCard--container">
                <h2>{pokemonNameCapitalized ? pokemonNameCapitalized : 'Select A Pokemon!'}</h2>
                <div className="pokemonCard--screen">
                    <div className="row">
                        <div className="col-3">
                            <img src={pokemonImages.front_default} alt="" />
                        </div>
                        <div className="col-8">
                            <div className="pokemonCard--stat-container">
                                <h3>Stats</h3>
                                <ul>
                                    {pokemonStats.map(stat => (
                                        <li>{stat.stat.name} : <span className="pokemonCard--base-stat">{stat.base_stat}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h3>Abilities</h3>
                        <ul>
                            {pokemonAbilites.map(ability => (
                                <li>{ability.ability.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-6">
                        <h3>Moves</h3>
                        <ul>
                            {pokemonMoves.slice(0, 4).map(move => (
                                <li>{move.move.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PokemonCard;