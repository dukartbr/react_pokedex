import React from 'react';
import Axios from 'axios';
import {
  BattleGlobalProvider,
  BattleGlobalContext,
} from '../../Context/BattleGlobalState';
import { Box } from '../../ui';
import { generations } from '../../api';
import BottomMenuContainer from './BottomMenuContainer';
import PartyList from './PartyList';
import ItemList from './ItemList';
import BattleScene from './BattleScene';

const Battle = () => {
  const { addPokemonToOpponentParty, opponentParty } = React.useContext(
    BattleGlobalContext
  );
  let [party, setParty] = React.useState([]);
  let [viewState, setViewState] = React.useState('');
  let [viewBattle, setViewBattle] = React.useState(false);

  const getOpponentParty = () => {
    const generationValues = Object.values(generations);
    const gensArr = [];
    for (let i = 0; i <= 4; i++) {
      const gen = Math.floor(Math.random() * generationValues.length);
      gensArr.push(gen);
    }
    gensArr.forEach(gen => {
      Axios.get(generationValues[gen]).then(response => {
        const pokemon =
          response.data.results[
            Math.floor(Math.random() * response.data.results.length)
          ];
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`).then(
          response => {
            const res = response.data;
            const moves = res.moves.slice(0, 4);
            addPokemonToOpponentParty({
              id: res.id,
              name: res.name,
              abilities: res.abilities,
              moves: moves,
              images: res.sprites,
              stats: res.stats,
              types: res.types,
            });
          }
        );
      });
    });
  };

  React.useEffect(() => {
    const localStorageRef = localStorage.getItem('party');
    if (localStorageRef) {
      setParty(JSON.parse(localStorageRef));
      setViewState('battlescene');
    }
    getOpponentParty();
  }, []);

  React.useEffect(() => {
    if (party.length === 5 && opponentParty.length === 5) {
      setViewBattle(true);
    }
  }, [party, opponentParty]);

  const sceneToggler = scene => {
    setViewState(scene);
  };
  if (!!viewBattle) {
    return (
      <BattleGlobalProvider>
        <Box pt='3rem'>
          <Box border='3px solid black' height='50rem' position='relative'>
            {viewState === 'partylist' && <PartyList party={party} />}
            {viewState === 'itemlist' && <ItemList />}
            {viewState === 'battlescene' && (
              <BattleScene playerParty={party} opponentParty={opponentParty} />
            )}
            <BottomMenuContainer party={party} sceneToggler={sceneToggler} />
          </Box>
        </Box>
      </BattleGlobalProvider>
    );
  }
  return null;
};

export default Battle;
