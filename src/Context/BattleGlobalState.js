import React from 'react';
import BattleReducer from './BattleReducer';

const initialState = {
  playerParty: [],
  opponentParty: [],
};

export const BattleGlobalContext = React.createContext(initialState);

export const BattleGlobalProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(BattleReducer, initialState);

  // Actions
  const addPokemonToOpponentParty = pokemon => {
    dispatch({
      type: 'ADD_POKEMON_TO_OPPONENT_PARTY',
      payload: pokemon,
    });
  };

  return (
    <BattleGlobalContext.Provider
      value={{
        playerParty: state.playerParty,
        opponentParty: state.opponentParty,
        addPokemonToOpponentParty,
      }}
    >
      {children}
    </BattleGlobalContext.Provider>
  );
};
