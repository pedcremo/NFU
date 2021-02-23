import {getCoordsReact} from "./Coordinates";
import { render } from "@testing-library/react";
import App from "./App";
import { AppContextProvider } from "./State";

test("getCoordsReact", async () => {
    //Tiene que devolver un json
  expect( getCoordsReact()).toBeTruthy();
  
});
