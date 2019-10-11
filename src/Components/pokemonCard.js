import React from 'react';

const PokemonCard = (props) => {
    console.log(props.pokemonAbilites);
    const {pokemonAbilites, pokemonName} = props;
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
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;