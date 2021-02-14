import React from "react";
import Notifications from "./Notifications";
import { AppContextProvider } from "../../State";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(ui, { wrapper: BrowserRouter });
};

it("Render notifications", () => {
  const { baseElement, container } = renderWithRouter(
    <AppContextProvider>
      <Notifications />
    </AppContextProvider>
  );

  expect(baseElement).toBeDefined();

  let list = container.getElementsByClassName("eventsList");
  expect(list.length).toBe(1);
});