import React from "react";
import { AppContextProvider } from "../../State";
import InstalacionesPreview from "./instalaciones-preview";
import renderer from 'react-test-renderer';

test("renders a Instalaciones List Page,link", () => {
    const Instalacion = [{
        "id": 1,
        "imagen": "Test",
        "name": "JestTest",
        "ubication": "TESTING",
    }]
    const component = renderer.create(
        <AppContextProvider><InstalacionesPreview Propps={Instalacion} /></AppContextProvider>
    );

    let testList = component.toJSON();
    expect(testList).toMatchSnapshot()
});

