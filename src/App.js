import React from 'react';
import './App.scss';
import Pokedex from './Components/pokedex';
// import { Provider } from "react-redux";
// import store from "./store";

function App() {
  return (
    // <Provider store={store}>
    <div className='App'>
      <div className='container'>
        <Pokedex />
      </div>
    </div>
    // </Provider>
  );
}

export default App;
