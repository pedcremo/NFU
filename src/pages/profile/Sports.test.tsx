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

  const sports = container.querySelector(".Sports");
  expect(sports).toBeDefined();
});
