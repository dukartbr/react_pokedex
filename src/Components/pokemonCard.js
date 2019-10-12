import React from 'react';

const PokemonCard = (props) => {
    console.log(props);
    const {pokemonAbilites, pokemonName, pokemonMoves, pokemonImages} = props;
    let pokemonNameCapitalized;
    if(pokemonName) {
        pokemonNameCapitalized = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
    }
    return (
        <div className="container">
            {pokemonName ? 
                <div className="pokemonCard--container">
                    <h2>{pokemonNameCapitalized}</h2>
                    <div className="pokemonCard--screen">
                        <div className="row">
                            <div class="col-6">
                                <img src={pokemonImages.front_default} alt="" />
                            </div>
                            <div class="col-6">

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
            : null}
        </div>
    );
};

export default PokemonCard;