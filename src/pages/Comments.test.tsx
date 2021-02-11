import React from 'react';
import Comments from './Comments';
import renderer from 'react-test-renderer';

test('Comprobación de renderizado de comentarios', () => {
    const match = { params: { id: 1 }};
    const component = renderer.create(
        <Comments />
    );


    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
});