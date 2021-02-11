import React from "react";
import renderer from "react-test-renderer";
import PasswordForgotten from "./password_forgotten";
import App from "../../App";
import { AppContextProvider } from "../../State";
import { render, screen, fireEvent } from "@testing-library/react";

it("renders correctly", () => {
  const { baseElement } = render(
    <AppContextProvider>
      <PasswordForgotten />
    </AppContextProvider>
  );

  expect(baseElement).toBeDefined();
  //We check if there is any item with EMail placeholder (the input)
  expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  expect(screen.getByRole("button")).toBeInTheDocument();
});

//Test send button with valid email
//error cannot read property 'preset' of undefined
// it("test email valid", async () => {
//   const onSubmit = jest.fn();
//   const { container } = render(
//     <AppContextProvider>
//       <PasswordForgotten />
//     </AppContextProvider>
//   );
//   const button = screen.getByTitle("button_recover");
//   const input = screen.getByTitle("Email");
//   const form = screen.getByRole("form");
//   form.onsubmit = onSubmit;
//   fireEvent.change(input, "test@test.com");
//   fireEvent.submit(form);
//   // const input = await getByTitle("Email");
//   // const button = await getByTitle("button_recover");
//   // const form = await getByRole("form");
//   // fireEvent.change(input, "test@test.com");
//   // // screen.debug();
//   // // form.submit("submit");
//   // button.simulate
//   // screen.debug(form);
//   // fireEvent.click(getByTitle("button_recover"));
// });
