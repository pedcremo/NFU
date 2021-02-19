import React, { useContext, useState } from 'react';
import CommentList from './CommentList';
import renderer from 'react-test-renderer';
import TestRenderer from 'react-test-renderer';
import { AppContext } from '../../State';
import { AppContextProvider } from "../../State";
import { fireEvent, getByTestId, render } from '@testing-library/react'


test('Comprobación de renderizado de comentarios', () => {
    const comment = [{
        "id": 1,
        "title": "Test",
        "body": "Test",
        "author": "Test",
        "date": "Test"
    }]
    const component = renderer.create(
        <AppContextProvider><CommentList comments={comment} /></AppContextProvider>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
});

test('Click button delete', () => {
    const comment = [{
        "id": 1,
        "title": "Test",
        "body": "Test",
        "author": "Test",
        "date": "Test"
    }]
    const component = TestRenderer.create(
        <AppContextProvider><CommentList comments={comment} /></AppContextProvider>
    );



    const button = component.findByProps;
    fireEvent.click(button);
})
