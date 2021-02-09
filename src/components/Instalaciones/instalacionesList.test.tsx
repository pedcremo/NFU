import React from 'react';
import renderer from 'react-test-renderer';
import InstalacionesList from './instalacionesList';

it('renders correctly', () => {
  const tree = renderer
    .create(<InstalacionesList></InstalacionesList>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});