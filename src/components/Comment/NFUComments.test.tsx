import React from "react";
import NFUComments from './NFUComments';
import { AppContextProvider, AppContext } from '../../State';
import {render} from '@testing-library/react';


test('Render form comments', () => {
    const comments=[]
    const { baseElement, container } = render(<AppContextProvider><NFUComments comments={comments} gameID = {1}/></AppContextProvider>);
    expect(baseElement).toBeDefined();
    const form = container.querySelector('form') as HTMLFormElement
    // console.log(form);
    expect(form).toBeDefined();
    const inputs = container.querySelectorAll('ion-input');
    const button = container.querySelectorAll('ion-button')
    expect(inputs.length).toBe(1);
    expect(button.length).toBe(1);
});