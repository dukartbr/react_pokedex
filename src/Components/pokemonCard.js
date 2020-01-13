import React, { Component } from 'react';
import Axios from 'axios';

class pokemonCard extends Component {
  state = {
    isFavorited: false,
    isLoaded: false,
    abilityDescriptions: [],
    moves: [],
  };

  getAbilityDescriptions = pokemon => {
    pokemon.pokemonAbilites.map(pokemon => {
      const url = pokemon.ability.url;
      Axios.get(`${url}`).then(response => {
        const res = response.data.effect_entries[0].short_effect;
        this.setState(prevState => ({
          abilityDescriptions: [...prevState.abilityDescriptions, res],
          // isLoaded: true,
        }));
      });
    });
  };

  getMoveStats = pokemon => {
    console.log(pokemon);
    pokemon.pokemonMoves.map(move => {
      const url = move.move.url;
      const moveObject = {
        name: '',
        damage_class: '',
        accuracy: '',
        power: '',
      };
      Axios.get(`${url}`).then(response => {
        const res = response.data;
        // console.log(response.data);
        moveObject.name = res.name;
        moveObject.damage_class = res.damage_class.name;
        moveObject.accuracy = res.accuracy;
        moveObject.power = res.power;
        console.log(moveObject);
        this.setState(prevState => ({
          moves: [...prevState.moves, moveObject],
          isLoaded: true,
        }));
      });
    });
  };

  componentDidMount() {
    this.getAbilityDescriptions(this.props);
    this.getMoveStats(this.props);
  }

  componentDidUpdate(prevProps) {
    if (this.props.pokemonName !== prevProps.pokemonName) {
      this.setState({
        abilityDescriptions: [],
        moves: [],
        isLoaded: false,
      });
      this.getAbilityDescriptions(this.props);
      this.getMoveStats(this.props);
    }
  }

  render() {
    const {
      pokemonAbilites,
      pokemonName,
      pokemonImages,
      pokemonStats,
      pokemonTypes,
      pokemonID,
    } = this.props;
    const { abilityDescriptions, moves, isLoaded } = this.state;
    // console.log('render', { props: this.props, state: this.state });
    if (isLoaded) {
      return (
        <div className='container'>
          <div className='pokemonCard--container'>
            <div className='pokemonCard--header'>
              <h2>{pokemonName}</h2>
              {pokemonTypes.map(pokemon => (
                <span className='pokemonCard--type' key={pokemon.type.name}>
                  {pokemon.type.name}
                </span>
              ))}
            </div>
            <div className='pokemonCard--screen'>
              {pokemonName ? (
                <button
                  onClick={() => this.toggleFavoritesHandler(this.props)}
                  className='pokemonCard--favorite'
                >
                  <i className='fas fa-star'></i>
                </button>
              ) : null}
              <div className='row'>
                <div className='col-3'>
                  <img src={pokemonImages.front_default} alt='' />
                </div>
                <div className='col-8'>
                  <div className='pokemonCard--stat-container'>
                    <h3>Stats</h3>
                    <ul>
                      {pokemonStats.map(pokemon => (
                        <li key={pokemon.stat.name}>
                          {pokemon.stat.name} :{' '}
                          <span className='pokemonCard--base-stat'>
                            {pokemon.base_stat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <span className='pokemonCard--pokemonID'>ID: {pokemonID}</span>
            </div>
            <div className='row'>
              <div className='col-12'>
                <h3>Abilities</h3>
                <ul>
                  {pokemonAbilites.map((pokemon, i) => {
                    return (
                      <li key={i}>
                        {pokemon.ability.name} - {abilityDescriptions[i]}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className='row'>
              <div className='pokemonCard--moves-container'>
                <h3>Moves</h3>
                <table className='pokemonCard--moves-item'>
                  <tr>
                    <th className='pokemonCard--moves-title'>Name</th>
                    <th className='pokemonCard--moves-title'>Class</th>
                    <th className='pokemonCard--moves-title'>Power</th>
                    <th className='pokemonCard--moves-title'>Accuracy</th>
                  </tr>
                  {moves.map(move => (
                    <tr key={move.name}>
                      <td>{move.name}</td>
                      <td>{move.damage_class}</td>
                      <td>{move.power}</td>
                      <td>{move.accuracy}</td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      );
    } else return null;
  }
}

export default pokemonCard;
