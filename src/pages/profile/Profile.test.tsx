import React from "react";
import { AppContextProvider } from "../../State";
import { render } from "@testing-library/react";
import Sports from "./Sports";
import Profile from "./Profile";
import App from "../../App";

test("RENDERS COMPONENTS -> PROFILE", () => {
  const { baseElement, container } = render(
    <AppContextProvider>
      <App>
        <Profile />
      </App>
    </AppContextProvider>
  );
  expect(baseElement).toBeDefined();
});
