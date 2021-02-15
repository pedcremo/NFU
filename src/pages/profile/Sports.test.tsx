import React from "react";
import { AppContextProvider } from "../../State";
import { render } from "@testing-library/react";
import Sports from "./Sports";

test("RENDERS COMPONENTS -> SPORTS", () => {
  const { baseElement, container } = render(
    <AppContextProvider>
      <Sports sportsList={undefined} />
    </AppContextProvider>
  );
  expect(baseElement).toBeDefined();

  // Expect that there is the sports list
  const sports = container.querySelector(".Sports");
  // Using not.toBeNull() because if query selector don't find anything it returns null
  expect(sports).not.toBeNull();
});
