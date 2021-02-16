import React, { useContext, useState } from 'react';
import MyModal from "./MyModal"

import { AppContextProvider, AppContext } from "../../State";
import App from "../../App";
import { fireEvent, render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks'



test ("Check My Modal rendered", ()=>{
    // const {coordinates} = coordenadas del state
      const { baseElement,container } = render(
        <AppContextProvider> 
            <App>
              <MyModal />
          </App>

        </AppContextProvider>
      );

    // Expecting that is rendered
    expect(baseElement).toBeDefined(); 

    //Check if ToolBar is defined
    const ToolBar = container.querySelector("IonToolbar");
    expect(ToolBar).toBeDefined();

    //Check if header is defined
    const Header = container.querySelector("IonHeader");
    expect(Header).toBeDefined();

    //Check if Title is rendered
    const Title = container.querySelector("IonTitle");
    expect(Title).toBeDefined();


    //Check if ionPading is defined
    const ionPading = container.querySelector(".ion-padding");
    expect(ionPading).toBeDefined();

    //Check if Map is rendered
    const Map = container.querySelector("MapContainer");
    expect(Map).toBeDefined();


    // check state.coordinates and state.user_coordinates ->  expect(image).not.toBeNull();
    // const { coordinates } = renderHook(() => coordinates);
});

// test ("Check coordinates state", () => {
//     const { state,dispatch } = useContext(AppContext);

//     expect(state.coordinates).not.toBeNull();
    

// });
