import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Pokedex from './Components/Pokedex/pokedex';
import { Box, Container } from './ui';

const App = () => {
  return (
    <Router>
      <Box
        className='App'
        style={{
          backgroundColor: '#f1f5e6',
          height: '150vh',
        }}
      >
        <Container>
          <Switch>
            <Route exact path='/'>
              <Pokedex />
            </Route>
          </Switch>
        </Container>
      </Box>
    </Router>
  );
};

export default App;
