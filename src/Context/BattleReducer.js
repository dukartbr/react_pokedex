export default (state, action) => {
  switch (action.type) {
    case 'ADD_POKEMON_TO_OPPONENT_PARTY':
      return {
        ...state,
        opponentParty: [...state.opponentParty, action.payload],
      };
    default:
      return state;
  }
};
