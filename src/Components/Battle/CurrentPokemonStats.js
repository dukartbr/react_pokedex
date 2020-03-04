import React from 'react';
import { Box, Title, Strong } from '../../ui';

const CurrentPokemonStats = ({ currentPokemon }) => {
  const baseStats = currentPokemon.stats.map(pokemon => pokemon.base_stat);
  const level = Math.floor(
    baseStats.reduce((a, b) => a + b) / baseStats.length / 2.5
  );

  const health = Math.floor(level * 3);
  let currentHealth = 60;

  return (
    <Box>
      <Title>{currentPokemon.name}</Title>
      <Strong>L: {level}</Strong>
      <br />
      <Strong>
        {currentHealth}/{health}
      </Strong>
      <Box
        position='absolute'
        bg='green'
        width={`${(currentHealth / health) * 100}%`}
      >
        <br />
      </Box>
    </Box>
  );
};

export default CurrentPokemonStats;
