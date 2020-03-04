import React from 'react';
import PokedexReducer from './PokedexReducer';

const initialState = {
  party: [],
};

export const PokedexGlobalContext = React.createContext(initialState);

export const PokedexGlobalProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(PokedexReducer, initialState);

  // Actions
  const addLocalStorageToParty = localStorageRef => {
    dispatch({
      type: 'ADD_LOCAL_STORAGE_TO_PARTY',
      payload: localStorageRef,
    });
  };

  const addPokemonToParty = pokemon => {
    dispatch({
      type: 'ADD_POKEMON_TO_PARTY',
      payload: pokemon,
    });
  };

  const removePokemonFromParty = id => {
    dispatch({
      type: 'REMOVE_POKEMON_FROM_PARTY',
      payload: id,
    });
  };

  return (
    <PokedexGlobalContext.Provider
      value={{
        party: state.party,
        addLocalStorageToParty,
        addPokemonToParty,
        removePokemonFromParty,
      }}
    >
      {children}
    </PokedexGlobalContext.Provider>
  );
};
