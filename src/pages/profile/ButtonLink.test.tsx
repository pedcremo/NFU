import React from "react";
import { AppContextProvider } from "../../State";
import { render } from "@testing-library/react";
import ButtonLink from "./ButtonLink";
import { gameController } from "ionicons/icons";
import App from "../../App";

test("RENDERS COMPONENTS -> BUTTON LINK", () => {
  const { baseElement, container } = render(
    <AppContextProvider>
      <App>
        <ButtonLink link="/app/create" text="New" icon={gameController} />
      </App>
    </AppContextProvider>
  );
  expect(baseElement).toBeDefined();
});
