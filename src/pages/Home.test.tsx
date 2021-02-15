import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./Home";
import { AppContextProvider } from "../State";
import { Route, Router, BrowserRouter } from "react-router-dom";

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(ui, { wrapper: BrowserRouter });
};

// Comprobamos si el home se pinta bien
it("Render HOME corrently", () => {
  const { baseElement, container,  } = renderWithRouter(
    <AppContextProvider>
      <Home />
    </AppContextProvider>
  );
  expect(baseElement).toBeDefined();

  // Comprobamos si los componentes se pintan correctamente.
  const modal_maps = container.querySelector("hydrated");
  expect(modal_maps).toBeDefined();

});

// Comprobamos si las funciones de ubicacion funcionan correctamente.
// it("Location functionality", () => {
//   const location = Home.getCoordinates(position);
//   expect
// });
