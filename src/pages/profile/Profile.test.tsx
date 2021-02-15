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
  // Expecting that is rendered
  expect(baseElement).toBeDefined();

  // Expect that there is a profile image
  const image = container.querySelectorAll(".Content__ProfileImage");
  expect(image).not.toBeNull();

  // Expect that there is 5 button links
  const buttonLinks = container.querySelectorAll(".Sports").length;
  expect(buttonLinks).toBeDefined();
  // expect(buttonLinks).toEqual(5)
});
