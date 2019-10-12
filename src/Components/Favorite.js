import React from 'react';

const Favorite = (props) => {
    const { pokemonImage } = props;
    return (
        <div className="col-2">
            <div className="favorites--item">
                <img src={pokemonImage.front_default} alt="" />
            </div>
        </div>
    );
};

export default Favorite;