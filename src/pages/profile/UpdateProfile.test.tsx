import React from "react";
import ReactDOM from 'react-dom';
import { AppContextProvider } from "../../State";
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import App from "../../App";
import UpdateProfile from "./UpdateProfile";


// Generate random state before every test
let renderState;
beforeEach(() => {
    renderState = (element, { route = "/app/profile/update" } = {}) => {
        window.history.pushState({}, "Update profile, test", route);
        return render(element, { wrapper: BrowserRouter });
    };
});


const setup = () => {
  const div = document.createElement('div');
  ReactDOM.render(<App><UpdateProfile /></App>, div);

  return div;
}


const setup2 = () => {
  const element = renderState(
    <AppContextProvider>
      <UpdateProfile />
    </AppContextProvider>
  );

  return element;
}


// Renders page without crashing
test('renders page without crashing', () => {
    const div = setup();
    ReactDOM.unmountComponentAtNode(div)
});


// Renders page correctly
test("renders Update Profile correctly", () => {
    const element = setup2();
    expect(element).toBeDefined();
});


test("checks if the page has 7 inputs", () => {
})