import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PokedexGlobalProvider } from './Context/PokedexGlobalState';
import { BattleGlobalProvider } from './Context/BattleGlobalState';
import Pokedex from './Components/Pokedex/pokedex';
import Battle from './Components/Battle/Index';
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
              <PokedexGlobalProvider>
                <Pokedex />
              </PokedexGlobalProvider>
            </Route>
            <Route path='/battle'>
              <BattleGlobalProvider>
                <Battle />
              </BattleGlobalProvider>
            </Route>
          </Switch>
        </Container>
      </Box>
    </Router>
  );
};

export default App;
