import React from "react";
import "./App.scss";
import Pokedex from "./Components/pokemon";
// import { Provider } from "react-redux";
// import store from "./store";

function App() {
  return (
    // <Provider store={store}>
    <div className="App">
      <div className="pokedex--header">
        <h1>Pokédex</h1>
      </div>
      <div className="container">
        <Pokedex />
      </div>
    </div>
    // </Provider>
  );
}

export default App;
