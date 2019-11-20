import React from 'react';

const PartyItem = (props) => {
    return (
        <div className="col-2">
            <div className="favorites--item-container">
                <img src={props.pokemonImages.front_default} alt="" />
            </div>
        </div>
    );
};

export default PartyItem;