import React from './node_modules/react';
import ReactDOM from './node_modules/react-dom';
import Pokedex from '../Components/pokedex';
import renderer from './node_modules/react-test-renderer';

it('Pokedex renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Pokedex />, div);
});

it('matches the snapshot', () => {
  const tree = renderer.create(<Pokedex />).toJSON();
  expect(tree).toMatchSnapshot();
});
