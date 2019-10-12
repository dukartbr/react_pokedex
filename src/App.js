import React from 'react';
import './App.scss';
import Pokemon from './Components/pokemon';

function App() {
  return (
    <div className="App">
      <div className="pokedex--header">
        <h1>Pokédex</h1>
      </div>
      <div className="container">
        <Pokemon />
      </div>
    </div>
  );
}

export default App;
