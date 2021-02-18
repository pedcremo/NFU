import React from "react";
import { AppContextProvider } from "../../State";
import InstalacionesPreview from "./instalaciones-preview";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../../App";

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(ui, { wrapper: BrowserRouter });
};

it("PREVIEW INSTALACIONES TEST", () => {
  const { baseElement, container } = renderWithRouter(
    <AppContextProvider>
      <App>
        <InstalacionesPreview />
      </App>
    </AppContextProvider>
  );

  expect(baseElement).toBeDefined();

  let list = container.getElementsByClassName("eventsList");
  expect(list.length).toBe(1);
});
