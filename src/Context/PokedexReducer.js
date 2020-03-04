export default (state, action) => {
  switch (action.type) {
    case 'ADD_LOCAL_STORAGE_TO_PARTY':
      return {
        ...state,
        party: action.payload,
      };
    case 'ADD_POKEMON_TO_PARTY':
      return {
        ...state,
        party: [...state.party, action.payload],
      };
    case 'REMOVE_POKEMON_FROM_PARTY':
      return {
        ...state,
        party: state.party.filter(p => p.id !== action.payload),
      };
    default:
      return state;
  }
};
