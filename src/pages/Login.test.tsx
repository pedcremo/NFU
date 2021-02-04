import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import {AppContextProvider} from '../State';

test("renders a login page", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AppContextProvider><Login /></AppContextProvider>, div);
  expect(div.querySelector("ion-input")).toBeTruthy();
});
