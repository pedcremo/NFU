import React from "react";
import ReactDOM from "react-dom";
import InstalacionesList from "./instalacionesList";
import App from '../../App';

test("renders a Instalaciones List Page", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App><InstalacionesList /></App>, div);
  ReactDOM.unmountComponentAtNode(div)
});

