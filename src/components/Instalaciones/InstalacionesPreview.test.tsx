import React from "react";
import ReactDOM from "react-dom";
import InstalacionesPreview from "./instalaciones-preview";
import App from '../../App';

test("renders a Instalaciones Preview Page", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App><InstalacionesPreview /></App>, div);
  ReactDOM.unmountComponentAtNode(div)
});