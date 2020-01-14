import React, { Component } from 'react';

import PartyItem from './PartyItem';

export default class PartyContainer extends Component {
  state = {
    party: [],
  };

  //   componentDidUpdate(prevProps) {
  //     if (prevProps.party !== this.props.party) {
  //       this.setState(prevState => {
  //         console.log('prevState.party', prevState.party);
  //         console.log('this.props.party', this.props.party);
  //         return { party: this.props.party };
  //       });
  //     }
  //   }

  render() {
    const { party } = this.props;
    return (
      <div>
        <h2 className='favorites--header'>Party</h2>
        <div className='favorites--list row'>
          {party.map((pokemon, i) => (
            <PartyItem key={i} pokemon={pokemon} />
          ))}
        </div>
      </div>
    );
  }
}
