import React from "react";
import Welcome from "./Welcome";

import { AppContextProvider } from "../State";
import App from "../App";
import { fireEvent, render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks'


test("renders a welcome page", () => {
  const  {baseElement, container}  = render(<AppContextProvider><Welcome /></AppContextProvider>);   
  expect(baseElement).toBeDefined();
  //Get every slide page
  let slides = container.getElementsByTagName('ion-slide').length
  let button = container.querySelector('ion-button')
  expect(button).toBeDefined();
  // Should be 4 slides
  expect(slides).toBe(4)
});



// Falta comprobar cambio del state Welcome al clicar btn

test("Check state on click continue button", () => {
  const  {container}  = render(<AppContextProvider><Welcome /></AppContextProvider>);   


  const { result } = renderHook(() => Welcome);


  let button = container.querySelector('ion-button')

  // fireEvent.click(button)
})