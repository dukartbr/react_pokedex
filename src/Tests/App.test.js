import React from './node_modules/react';
import ReactDOM from './node_modules/react-dom';
import App from '../App';
import renderer from './node_modules/react-test-renderer';

it('Main App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('matches the snapshot', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
