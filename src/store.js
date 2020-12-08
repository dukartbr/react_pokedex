import create from 'zustand';

export const useParty = create((set) => ({
  pokemonParty: [],
  addPokemonToParty: (pokemon) =>
    set((state) => ({ pokemonParty: [...state.pokemonParty, pokemon] })),
  removePokemonFromParty: (id) =>
    set((state) => ({
      pokemonParty: state.pokemonParty.filter((pokemon) => pokemon.id !== id),
    })),
}));
