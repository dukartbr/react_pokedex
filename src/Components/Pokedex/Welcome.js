import React from 'react';
import { Span, Header } from '../../ui';

const Welcome = () => {
  return (
    <>
      <Header>Welcome</Header>
      <Span textAlign='center' color='#ffffff'>
        This is a React based Pokedex using the PokeAPI
      </Span>
    </>
  );
};

export default Welcome;
