import React from 'react';
import renderer from 'react-test-renderer';
import InstalacionesPreview from './instalaciones-preview';

it('renders correctly', () => {
  const tree = renderer
    .create(<InstalacionesPreview></InstalacionesPreview>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});