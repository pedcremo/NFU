import React from "react";
import MapContainer from './mapContainer';
// import { AppContextProvider } from "../State";
import App from "../../App";
import { fireEvent, render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks'

test ("Check MapContainer rendered", ()=>{

    const { baseElement,container } = render(
        <App>
          <MapContainer />
        </App>
    );

    // Expecting that is rendered
    expect(baseElement).toBeDefined();

    //Check if GoogleMaps button is rendered
    // const Map = container.querySelector("Map");
    // expect(Map).toBeDefined();
})