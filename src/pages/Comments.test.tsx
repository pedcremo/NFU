import React from 'react';
import Comments from './Comments';
import renderer from 'react-test-renderer';

test('Comprobación de renderizado de comentarios', () => {
    const component = renderer.create(
        <Comments />
    );
});