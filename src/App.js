import React from 'react';
import Pokedex from './Components/pokedex';
import { Box, Container } from './ui';

const App = () => (
  <Box
    className='App'
    style={{
      backgroundColor: '#f1f5e6',
      height: '150vh',
    }}
  >
    <Container>
      <Pokedex />
    </Container>
  </Box>
);

export default App;
