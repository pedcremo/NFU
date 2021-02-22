import React, { useContext, useState } from 'react';
import NFUCommentList from './NFUCommentList';
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
        <AppContextProvider><NFUCommentList comments={comment} gameID={1} /></AppContextProvider>
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
        <AppContextProvider><NFUCommentList comments={comment} gameID={1}/></AppContextProvider>
    );



    const button = component.findByProps;
    fireEvent.click(button);
})
