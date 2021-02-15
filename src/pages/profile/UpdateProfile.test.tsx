import React from "react";
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";

import App from "../../App";
import { AppContextProvider } from "../../State";
import UpdateProfile from "./UpdateProfile";


let renderState;
beforeEach(() => {
    renderState = (element, { route = "/app/profile/update" } = {}) => {
        window.history.pushState({}, "Update profile, test", route);
        return render(element, { wrapper: BrowserRouter });
    };
});

afterEach(cleanup);


// Renders page without crashing
it('renders page without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App><UpdateProfile /></App>, div);

    ReactDOM.unmountComponentAtNode(div)
});


// Renders page correctly
it("renders Update Profile correctly", () => {
    const element = renderState(
      <AppContextProvider>
        <UpdateProfile />
      </AppContextProvider>
    );

    expect(element).toBeDefined();
});


// Renders button correctly
it("renders button correctly", () => {
  const { getByTestId } = renderState(
    <AppContextProvider>
      <UpdateProfile />
    </AppContextProvider>
  );

  expect(getByTestId("update-profile-button")).toBeInTheDocument();
  expect(getByTestId("update-profile-button")).toHaveTextContent("updateProfile.form.edit");
});