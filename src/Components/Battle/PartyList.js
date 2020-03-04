import React from 'react';
import { Row, Container, Image, Subheader } from '../../ui';

const PartyList = ({ party }) => {
  console.log(party);
  return (
    <Container>
      {party.map(pokemon => (
        <Row key={pokemon.id}>
          <Image src={pokemon.images.front_default} />
          <Subheader>{pokemon.name}</Subheader>
        </Row>
      ))}
    </Container>
  );
};

export default PartyList;
