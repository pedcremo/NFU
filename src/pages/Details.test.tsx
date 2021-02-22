import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Details from "./Details";
import { AppContextProvider } from "../State";
import { Route, Router, BrowserRouter } from "react-router-dom";
import App from '../App';

// it("Render Details corrently", () => {
//     const { baseElement, container,  } = renderWithRouter(
//       <AppContextProvider>
//         <Home />
//       </AppContextProvider>
//     );
//     expect(baseElement).toBeDefined();
  
//     // Comprobamos si los componentes se pintan correctamente.
//     const modal_maps = container.querySelector("hydrated");
//     expect(modal_maps).toBeDefined();
  
//   });


  it('renders map_details correctly', () => {
    const { baseElement,container } = render(
        <AppContextProvider> 
            <App>
              <Details />
          </App>
        </AppContextProvider>
      );
      expect(baseElement).toBeDefined();
});

  