import React from "react";
import Menu from './Menu';

import { AppContextProvider } from "../State";
import App from "../App";
import { fireEvent, render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks'

test ("Check GoogleMaps rendered", ()=>{
    // const {coordinates} = coordenadas del state
      const { baseElement,container } = render(
        <AppContextProvider> 
            <App>
              <Menu />
          </App>

        </AppContextProvider>
      );

    // Expecting that is rendered
    expect(baseElement).toBeDefined();

    //Check if GoogleMaps button is rendered
    const GMaps = container.querySelector(".maps");
    expect(GMaps).toBeDefined();
})
