import React from "react";
import renderer from "react-test-renderer";
import ChangePassword from "./change_password";
import App from "../../App";
import { AppContextProvider } from "../../State";
import { render, screen, fireEvent } from "@testing-library/react";
// import { renderWithRouter} from "@testing-library/react-hooks";
import { Route, Router, BrowserRouter } from "react-router-dom";

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(ui, { wrapper: BrowserRouter });
};

it("renders correctly", () => {
  const { baseElement, container } = renderWithRouter(
    <AppContextProvider>
      <ChangePassword />
    </AppContextProvider>
  );
  //element defined
  expect(baseElement).toBeDefined();
  //check 2 inputs
  let inputs = container.getElementsByTagName("ion-input");
  expect(inputs.length).toBe(2);
  //button
  expect(container.querySelector("button")).toBeInTheDocument();
});

//It is not finished. It remains to check that by clicking on the button it checks the two inputs that they are the same.
it("check click submit with valid passwords", () => {
  const { container } = renderWithRouter(
    <AppContextProvider>
      <ChangePassword />
    </AppContextProvider>
  );
  let input_password = screen.getByTitle("password");
  let input_repeat_password = screen.getByTitle("repeat_password");

  let btn = container.querySelector("button");
  fireEvent.change(input_password, "12345678");
  fireEvent.change(input_repeat_password, "12345678");

  // fireEvent.click(btn);
});
