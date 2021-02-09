import React from "react";
import renderer from "react-test-renderer";
import PasswordForgotten from "./password_forgotten";
import App from "../../App";
import { render, screen, fireEvent } from '@testing-library/react';

it("renders correctly", () => {
  const baseElement = render(<PasswordForgotten />);
  
  expect(baseElement).toBeDefined();
  //We check if there is any item with EMail placeholder (the input)
  expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
  expect(screen.getByRole('button')).toBeInTheDocument()
});

//Test send button with valid email
// it('test email valid',() =>{
//   const email = "test@test.com";
//   const baseElement = render(<PasswordForgotten />);
//   fireEvent.change(screen.getByPlaceholderText('Email'), {
//     target: { value: email },
//   });
// })