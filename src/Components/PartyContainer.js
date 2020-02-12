import React from 'react';
import { Row, Header } from '../ui';
import PartyItem from './PartyItem';

function PartyContainer(props) {
  function renderCardHandler(pokemon) {
    console.log(pokemon);
  }
  const { party } = props;
  return (
    <>
      <Header
        textAlign='center'
        color='white'
        fontFamily='Acme'
        fontSize='35px'
        width='100%'
      >
        Party
      </Header>
      <Row>
        {party.map((pokemon, i) => (
          <PartyItem
            key={i}
            pokemon={pokemon}
            renderCardHandler={renderCardHandler}
          />
        ))}
      </Row>
    </>
  );
}
export default PartyContainer;
