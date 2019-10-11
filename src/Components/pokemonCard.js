import React from 'react';

const PokemonCard = (props) => {
    const {pokemonAbilites, pokemonName, pokemonMoves} = props;
    console.log(pokemonMoves);
    return (
        <div className="container">
            <div className="row">
                <div className="pokemonCard--container">
                    <p>{pokemonName}</p>
                    <p>Abilities</p>
                    <ul>
                        {pokemonAbilites.map(ability => (
                            <li>{ability.ability.name}</li>
                        ))}
                    </ul>
                    <p>Moves</p>
                    <ul>
                        {pokemonMoves.slice(0, 4).map(move => (
                            <li>{move.move.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;