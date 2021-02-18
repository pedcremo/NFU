import React from "react";
import Instalacion from "./instalacion";
import { AppContextProvider } from "../State";
import { render } from "@testing-library/react";
import App from '../App';

test("renders a Instalaciones List Page", () => {
  const { baseElement,container } = render(
    <AppContextProvider> 
        <App>
          <Instalacion />
      </App>

    </AppContextProvider>

  );
  // Expecting that is rendered
  expect(baseElement).toBeDefined();

  // We check if the component is rendered in the correct way
   const IonList = container.querySelector(".details-page");
   expect(IonList).toBeDefined();

   // Expect that there is a Instalation Image
   const image = container.querySelectorAll(".detail-image,.lista-image");
   expect(image).not.toBeNull();

   // Expect The icons of the IonCard

     let icon = container.querySelector(".icon-details-icon");
     expect(icon).toBeDefined();
  


});