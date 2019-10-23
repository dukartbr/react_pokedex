import React from 'react';
import './App.scss';
import Pokedex from './Components/pokemon';

function App() {
  return (
    <div className="App">
      <div className="pokedex--header">
        <h1>Pokédex</h1>
      </div>
      <div className="container">
        <Pokedex />
      </div>
    </div>
  );
}

export default App;
