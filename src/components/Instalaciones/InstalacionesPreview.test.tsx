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

  let cardList = container.getElementsByClassName("cardList");
  expect(cardList.length).toBe(3);
});

//here is a test with an object called installation to simulate the data that comes from the json of installationsdata

// test("renders a Instalaciones List Page,link", () => {
//     const Instalacion = [{
//         "id": 1,
//         "imagen": "Test",
//         "name": "JestTest",
//         "ubication": "TESTING",
//     }]
//     const component = renderer.create(
//         <AppContextProvider><InstalacionesPreview Propps={Instalacion} /></AppContextProvider>
//     );

//     let testList = component.toJSON();
//     expect(testList).toMatchSnapshot()
// });
