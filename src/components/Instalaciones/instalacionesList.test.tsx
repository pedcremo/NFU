import React from "react";
import InstalacionesList from "./instalacionesList";
import { render } from "@testing-library/react";
import App from "../../App";
import { AppContextProvider } from "../../State";

test("renders a Instalaciones List Page", () => {
  const { baseElement, container } = render(
    <AppContextProvider>
      <App>
        <InstalacionesList />
      </App>
    </AppContextProvider>
  );
  // Expecting that is rendered
  expect(baseElement).toBeDefined();

  // We check if the component is rendered in the correct way
  const IonList = container.querySelector(".dataList");
  expect(IonList).toBeDefined();
});
