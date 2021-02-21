import React from 'react';
import NFUComments from './NFUComments';
import renderer from 'react-test-renderer';

test('Comprobación de renderizado de comentarios', () => {
    const comments=[]
    const component = renderer.create(
        <NFUComments comments={comments} gameID = {1}/>
    );


    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
});