import React from 'react';

const PokemonCard = (props) => {
    console.log(props);
    return (
        <div className="container">
            <div className="row">
                <div className="pokemonCard--container">
                    <p>{props.pokemonName}</p>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;