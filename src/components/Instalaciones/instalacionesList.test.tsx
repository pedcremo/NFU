import React from 'react';
import renderer from 'react-test-renderer';
//import Link from '../Link.react';

it('renders correctly', () => {
  const tree = renderer
    .create()
    .toJSON();
  expect(tree).toMatchSnapshot();
});