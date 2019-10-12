import React from 'react';

const PokemonCard = (props) => {
    const {pokemonAbilites, pokemonName, pokemonMoves, pokemonImages, pokemonStats, pokemonTypes} = props;
    return (
        <div className="container">
            <div className="pokemonCard--container">
                <div className="pokemonCard--header">
                    <h2>{pokemonName ? pokemonName: 'Select A Pokemon!'}</h2>
                    {pokemonTypes.map(type => (
                        <span className="pokemonCard--type" key={type.type.name}>{type.type.name}</span>
                    ))}
                </div>
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
                                        <li key={stat.stat.name}>{stat.stat.name} : <span className="pokemonCard--base-stat">{stat.base_stat}</span></li>
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
                                <li key={ability.ability.name}>{ability.ability.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-6">
                        <h3>Moves</h3>
                        <ul>
                            {pokemonMoves.slice(0, 4).map(move => (
                                <li key={move.move.name}>{move.move.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PokemonCard;